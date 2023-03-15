import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'material-app',
  webDir: 'dist/material-app',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.7:4200/',
    cleartext: true,
  },
};

export default config;
