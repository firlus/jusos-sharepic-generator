import Vue from 'vue';
import Canvas2013Image from './components/Canvas2013Image';

Vue.component('sharepic-canvas', Canvas2013Image);

/* eslint-disable no-new */
new Vue({
  el: '#myApplication',
  render: (h) => h(Canvas2013Image),
});
