<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ description }}
      </h6>
      <input
        type="file"
        accept="image/*"
        @change="notifyParent"
        class="form-control-file"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['settings', 'identifier', 'title', 'description', 'default'],
  data: function() {
    return {
      value: 'Hello World!',
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
      this.value = URL.createObjectURL(event.target.files[0]);
      this.$emit('update-settings', {
        identifier: this.identifier,
        value: this.value,
      });
    },
  },
};
</script>

<style></style>
