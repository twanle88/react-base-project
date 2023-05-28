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
      REACT_APP_STRIPE_PUBLIC_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
      REACT_APP_API_IMAGE_URL: process.env.REACT_APP_API_IMAGE_URL,
      REACT_APP_TIME_FETCH_NOTI: process.env.REACT_APP_TIME_FETCH_NOTI,
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
      find: 'components',
      replacement: resolve(__dirname, 'src/components'),
    },
    {
      find: 'api',
      replacement: resolve(__dirname, 'src/api'),
    },
    {
      find: 'views',
      replacement: resolve(__dirname, 'src/views'),
    },
    {
      find: 'utils',
      replacement: resolve(__dirname, 'src/utils'),
    },
    // {
    //   find: 'redux',
    //   replacement: resolve(__dirname, 'src/redux'),
    // },
    {
      find: 'reduxz',
      replacement: resolve(__dirname, 'src/reduxz'),
    },
    {
      find: 'assets',
      replacement: resolve(__dirname, 'src/assets'),
    },
    {
      find: 'routes',
      replacement: resolve(__dirname, 'src/routes'),
    },
    {
      find: 'layouts',
      replacement: resolve(__dirname, 'src/layouts'),
    },
    {
      find: 'translations',
      replacement: resolve(__dirname, 'src/translations'),
    },
    ],
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