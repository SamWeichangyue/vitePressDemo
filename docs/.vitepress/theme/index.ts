import theme from 'vitepress/dist/client/theme-default/index';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import ELementPlus from 'element-plus';
export default {
  ...theme,
  enhanceApp({ app }) {
    // install(app);
    app.component('demo-preview', AntDesignContainer);
    app.use(ELementPlus);
  },
};
