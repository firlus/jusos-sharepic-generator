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
          Wähle eine Vorlage aus den gezeigten Designs aus!
        </h2>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(template, index) in templates"
        :key="index"
        class="col-6 col-lg-4"
      >
        <router-link :to="`/editor/${template.component}`">
          <img
            class="img-fluid"
            :src="template.demoImage"
            alt="Beispiel-Sharepic im Juso-Design"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import templates from '../templates';

export default {
  data: function() {
    return {
      templates: [],
    };
  },
  created: function() {
    this.templates = templates;
  },
};
</script>

<style></style>
