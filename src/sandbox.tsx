import React from 'react';
import { createRoot } from 'react-dom/client';
import type { PluginApi, ExtensionPoint } from '@openeverest/plugin-sdk';
import register from './main';

// A simple mock of the OpenEverest Plugin API
class MockPluginApi implements PluginApi {
  public React = React;
  
  public async fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    // Prefix requests with the Everest API backend URL we mapped to localhost:8080
    // and pass a dummy auth token if needed.
    return fetch(input, init);
  }

  public registerExtension(extension: ExtensionPoint): void {
    if (extension.type === 'clusterDetailTab') {
      console.log('Registered clusterDetailTab:', extension);
      const Component = extension.component;
      
      const root = createRoot(document.getElementById('root')!);
      root.render(
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <h1>OpenEverest Plugin Sandbox</h1>
          <hr />
          <h2>Tab: {extension.label}</h2>
          <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
            <Component namespace="my-special-place" instanceName="mongodb-x3e" />
          </div>
        </div>
      );
    }
  }
}

const api = new MockPluginApi();
register(api);
