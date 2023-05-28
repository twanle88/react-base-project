import {
  resolve,
} from 'path';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import {
  defineConfig,
} from 'vite';
import envCompatible from 'vite-plugin-env-compatible';
import svgr from 'vite-plugin-svgr';

dotenv.config({
  path: './.env',
});

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env': {
      // ...process.env, // Not secured
    },
    'process.env': {
      PUBLIC_URL: '',
      REACT_APP_API_URL: process.env.REACT_APP_API_URL,
      REACT_APP_GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      REACT_APP_FACEBOOK_APP_ID: process.env.REACT_APP_FACEBOOK_APP_ID,
      REACT_APP_RECAPTCHA_SITE_KEY: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
      REACT_APP_RECAPTCHA_SECRET_KEY: process.env.REACT_APP_RECAPTCHA_SECRET_KEY,
      REACT_APP_API_IMAGE_URL: process.env.REACT_APP_API_IMAGE_URL,
      REACT_APP_TIME_FETCH_NOTI: process.env.REACT_APP_TIME_FETCH_NOTI,
      REACT_APP_ENCRYPT_KEY: process.env.REACT_APP_ENCRYPT_KEY,
      REACT_APP_DECRYPT_KEY: process.env.REACT_APP_DECRYPT_KEY,
      // ...process.env,
    },
  },
  esbuild: {
    // jsxInject: `import React from 'react'`,
    loader: 'jsx',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: [{
      find: 'apis',
      replacement: resolve(__dirname, 'src/apis'),
    }, {
      find: 'assets',
      replacement: resolve(__dirname, 'src/assets'),
    }, {
      find: 'components',
      replacement: resolve(__dirname, 'src/components'),
    }, {
      find: 'helpers',
      replacement: resolve(__dirname, 'src/helpers'),
    }, {
      find: 'hooks',
      replacement: resolve(__dirname, 'src/hooks'),
    }, {
      find: 'layouts',
      replacement: resolve(__dirname, 'src/layouts'),
    }, {
      find: 'pages',
      replacement: resolve(__dirname, 'src/pages'),
    }, {
      find: 'providers',
      replacement: resolve(__dirname, 'src/providers'),
    }, {
      find: 'reduxes',
      replacement: resolve(__dirname, 'src/reduxes'),
    }, {
      find: 'routes',
      replacement: resolve(__dirname, 'src/routes'),
    }, {
      find: 'utils',
      replacement: resolve(__dirname, 'src/utils'),
    }],
  },
  plugins: [
    react(),
    svgr(),
  ],
  css: {
    devSourcemap: process.env.NODE_ENV !== 'production',
    postcss: './postcss.config.js',
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // additionalData: '@root-entry-name: default;@log: "hello world";',
      },
    },
  },
  envPrefix: 'REACT_APP_',
  envCompatible,
  build: {
    sourcemap: process.env.NODE_ENV !== 'production',
  },
});