<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col"><h1>Juso-Sharepic-Generator</h1></div>
      </div>
      <div class="row">
        <div class="col-auto">
          <canvas-2013-image :contents="canvasProps"></canvas-2013-image>
          <button
            class="btn btn-outline-primary mt-3 w-100"
            v-on:click="downloadImage"
          >
            Herunterladen
          </button>
          <div class="mt-3">
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
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import InputText from './InputText.vue';
import Canvas2013Image from './Canvas2013Image.vue';

import templates from '../templates';

export default {
  components: { InputText, Canvas2013Image },
  data: () => {
    return {
      canvasProps: {
        title: '',
        subtitle: '',
        text: '',
        org: '',
        background: '',
        orgTextColor: '',
      },
      template: {
        controls: [],
      },
    };
  },
  created: function() {
    const templateId = this.$route.params.template;
    this.template = templates.filter(
      (template) => template.component === templateId,
    )[0];
  },
  methods: {
    changeCanvas: function(event) {
      this.canvasProps[event.identifier] = event.value;
    },
    downloadImage: function() {
      domtoimage
        .toPng(document.getElementById('sharepic-canvas'))
        .then((url) => {
          const a = document.createElement('a');
          a.href = url;
          a.download = 'sharepic.png';
          a.click();
        });
    },
  },
};
</script>

<style lang="scss"></style>
