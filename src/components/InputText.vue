<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ description }}
      </h6>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          id="2013-image-title"
          placeholder="Völker hört die Signale!"
          :rows="settings.rows"
          v-on:input="notifyParent"
          v-model="value"
          style="height: unset;"
        >
        </textarea>
        <label for="2013-image-title"
          >Titel (max. {{ settings.rows }} Zeilen)</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['settings', 'identifier', 'title', 'description', 'default'],
  data: function() {
    return {
      value: '',
    };
  },
  created: function() {
    this.value = this.default;
    this.$emit('update-settings', {
      identifier: this.identifier,
      value: this.value,
    });
  },
  methods: {
    notifyParent: function(event) {
      this.$emit('update-settings', {
        identifier: this.identifier,
        value: this.value,
      });
    },
  },
};
</script>

<style></style>
