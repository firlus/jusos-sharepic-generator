<template>
  <div class="container">
    <div class="row">
      <div v-for="(template, index) in templates" :key="index" class="col-4">
        <router-link :to="`/editor/${template.component}`">{{
          template.component
        }}</router-link>
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
