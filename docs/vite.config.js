import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueMacros from 'unplugin-vue-macros/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default () => {
  return {
    base: 'comdocs',
    resolve: {
      dedupe: ['vue'],
      alias: [
        {
          find: '~/',
          replacement: `${path.resolve(__dirname, './.vitepress')}/`,
        },
      ],
    },
    server: {
      host: true,
      port: 4399,
    },
    ssr: { noExternal: ['element-plus', 'vue'] },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    rollupOptions: {
      external: ['vue'],
      output: {
        dedupe: ['vue'],
        globals: {
          vue: 'Vue',
        },
      },
    },
  };
};
