<template>
  <div>
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
      <div class="col-auto">
        <component :is="template.component" :contents="canvasProps"></component>
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
</template>

<script>
import domtoimage from 'dom-to-image';
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
        hashtag: '',
        intro: '',
        themeColor: '',
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
    console.log(this.template);
  },
  methods: {
    changeCanvas: function(event) {
      this.canvasProps[event.identifier] = event.value;
    },
    downloadImage: function() {
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
        });
    },
  },
};
</script>

<style lang="scss"></style>
