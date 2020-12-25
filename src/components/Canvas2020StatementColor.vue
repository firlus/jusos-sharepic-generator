<template>
  <div
    class="sharepic-canvas"
    id="sharepic-canvas"
    :style="{ backgroundColor: contents.themeColor }"
  >
    <div class="hashtag" :style="{ color: textColor }">
      {{ contents.hashtag }}
    </div>
    <div
      class="intro"
      :style="{ backgroundColor: contents.themeColor, color: textColor }"
    >
      {{ contents.intro }}
    </div>
    <div class="text" :style="{ color: textColor }">
      {{ contents.text }}
    </div>
    <img class="logo" src="../assets/logo.png" />
    <div class="org-name" :style="{ color: textColor }">
      {{ contents.org }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['contents'],
  computed: {
    textAsLines: function() {
      return this.contents.text.split('\n');
    },
    textColor: function() {
      return this.contents.themeColor === '#e30613' ||
        this.contents.themeColor === '#205269'
        ? '#ffffff'
        : '#000000';
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #ffffff;

* {
  padding: 0;
  margin: 0;
}

@font-face {
  font-family: 'Futura PT Cond Extra Bold';
  src: url(../assets/FuturaPTCondExtraBold.otf);
}

@font-face {
  font-family: 'Futura PT Cond Medium';
  src: url(../assets/FuturaPTCondMedium.otf);
}

@font-face {
  font-family: 'Futura PT Cond Book';
  src: url(../assets/FuturaPTCondBook.otf);
}

.sharepic-canvas {
  overflow: hidden;
  position: relative;
  height: 512px;
  width: 512px;
  background-color: #bbbbbb;
  background-size: cover;
}

.hashtag {
  font-family: 'Futura PT Cond Book';
  position: absolute;
  left: 16px;
  bottom: 6px;
  font-size: 32px;
  color: #ffffff;
}

.intro {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0px 4px;
  padding-left: 8px;
  text-align: right;
  background-color: #ff7356;
  color: #ffffff;
  font-size: 36px;
  font-family: 'Futura PT Cond Medium';
}

.text {
  position: absolute;
  top: 76px;
  right: 16px;
  font-size: 36px;
  text-align: right;
  white-space: normal;
  width: 80%;
  font-family: 'Futura PT Cond Extra Bold';
}

.org-name {
  position: absolute;
  right: 24px;
  bottom: 6px;
  font-family: 'Open Sans';
  transform: skewY(-6deg);
  font-weight: 700;
  font-style: italic;
}

.logo {
  position: absolute;
  right: 16px;
  bottom: 24px;
  width: 100px;
}
</style>
