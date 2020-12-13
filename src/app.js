import Vue from 'vue';
import Canvas2013Image from './components/Canvas2013Image';
import Canvas2020Image from './components/Canvas2020Image';
import InputText from './components/InputText';
import InputFile from './components/InputFile';
import InputColor from './components/InputColor';
import Editor from './components/Editor';
import TemplateOverview from './components/TemplateOverview';
import VueRouter from 'vue-router';

Vue.component('canvas-2013-image', Canvas2013Image);
Vue.component('canvas-2020-image', Canvas2020Image);
Vue.component('input-text', InputText);
Vue.component('input-file', InputFile);
Vue.component('input-color', InputColor);

Vue.use(VueRouter);

const routes = [
  { path: '/', component: TemplateOverview },
  { path: '/editor/:template', component: Editor },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({ router }).$mount('#app');
