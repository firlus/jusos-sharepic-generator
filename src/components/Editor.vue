<template>
  <div>
    <div
      class="spinner d-flex justify justify-content-center align-items-center"
      v-if="loading"
    >
      <div class="spinner-border text-light" role="status"></div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <h1>🌹 Juso-Sharepic-Generator</h1>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col">
        <h2 class="text-muted">
          Passe das Design mit deinen Inhalten an!
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" id="canvas-container">
        <component :is="template.component" :contents="canvasProps"></component>
        <button
          class="btn btn-outline-primary mt-3 w-100"
          v-on:click="downloadImage"
        >
          Herunterladen
        </button>
        <div class="my-3">
          ⚠️ Diese App unterstützt nur Chrome/Chromium und Firefox.
        </div>
      </div>
      <div class="col">
        <component
          v-for="(control, index) in template.controls"
          :is="control.type"
          :key="index"
          :title="control.title"
          :description="control.description"
          :settings="control.settings"
          :identifier="control.identifier"
          :default="control.default"
          v-on:update-settings="changeCanvas"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image';
import InputText from './InputText.vue';
import Canvas2013Image from './Canvas2013Image.vue';
import changeCanvasSize from '../utils/canvasSize';

import templates from '../templates';

export default {
  components: { InputText, Canvas2013Image },
  data: () => {
    return {
      loading: false,
      canvasProps: {
        title: '',
        subtitle: '',
        text: '',
        org: '',
        background: '',
        orgTextColor: '',
        hashtag: '',
        intro: '',
        themeColor: '',
        backgroundMode: '',
      },
      template: {
        controls: [],
      },
    };
  },
  mounted: function() {
    changeCanvasSize();
  },
  created: function() {
    const templateId = this.$route.params.template;
    this.template = templates.filter(
      (template) => template.component === templateId,
    )[0];
    console.log(this.template);
  },
  methods: {
    changeCanvas: function(event) {
      this.canvasProps[event.identifier] = event.value;
    },
    downloadImage: function() {
      this.loading = true;
      domtoimage
        .toPng(document.getElementById('sharepic-canvas'), {
          width: 2048,
          height: 2048,
          style: {
            transform: 'scale(4, 4)',
            'transform-origin': 'top left',
          },
        })
        .then((url) => {
          const a = document.createElement('a');
          a.href = url;
          a.download = 'sharepic.png';
          a.click();
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss">
.spinner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.7);
  z-index: 100;
}
</style>
