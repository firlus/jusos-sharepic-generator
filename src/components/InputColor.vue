<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ description }}
      </h6>
      <div class="form-floating mb-3">
        <div
          v-for="(color, index) in settings.colors"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="radio"
            :name="identifier"
            :id="`${identifier}-${color.code}`"
            :value="color.code"
            v-model="value"
            v-on:change="notifyParent"
          />
          <label class="form-check-label" :for="`${identifier}-${color.code}`">
            {{ color.name }}
          </label>
        </div>
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
