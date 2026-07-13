import type { PluginApi, PluginRegisterFn } from '@openeverest/plugin-sdk';
import ReactLocal from 'react';
import ReactDOMLocal from 'react-dom/client';
import MonitoringTab from './MonitoringTab';

const register: PluginRegisterFn = (api: PluginApi) => {
  // Set up global fetch for our components
  (window as any).__pluginFetch = api.fetch.bind(api);

  // Micro-Frontend Wrapper
  // This component is rendered by OpenEverest's Host React
  const MicroFrontendWrapper = (props: any) => {
    // We use the Host's hooks!
    const divRef = api.React.useRef<HTMLDivElement>(null);
    const rootRef = api.React.useRef<any>(null);

    api.React.useEffect(() => {
      if (divRef.current) {
        // Mount our entirely separate React tree inside the div!
        if (!rootRef.current) {
            rootRef.current = ReactDOMLocal.createRoot(divRef.current);
        }
        rootRef.current.render(ReactLocal.createElement(MonitoringTab, props));
      }
    }, [props]);

    api.React.useEffect(() => {
        return () => {
            if (rootRef.current) {
                setTimeout(() => {
                    if (rootRef.current) rootRef.current.unmount();
                }, 0);
            }
        };
    }, []);

    // Return a simple div to the Host React
    return api.React.createElement('div', { ref: divRef, style: { width: '100%', height: '100%' } });
  };

  api.registerExtension({
    type: 'clusterDetailTab',
    label: 'Monitoring',
    path: 'monitoring',
    component: MicroFrontendWrapper,
  });
};

export { register };
export default register;
