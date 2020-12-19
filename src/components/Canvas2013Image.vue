<template>
  <div class="sharepic-canvas canvas-2013-image" id="sharepic-canvas">
    <img
      :class="`background ${contents.backgroundMode}`"
      :src="contents.background"
    />
    <div class="title">{{ contents.title }}</div>
    <div class="subtitle">{{ contents.subtitle }}</div>
    <div class="text-background"></div>
    <div class="text">
      <div class="d-flex w-100 h-100 align-items-center">
        <div class="text-center w-100">{{ contents.text }}</div>
      </div>
    </div>
    <img class="logo" src="../assets/logo.png" />
    <div class="org-name" :style="{ color: contents.orgTextColor }">
      {{ contents.org }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['contents'],
};
</script>

<style lang="scss">
$primary-red: #e30513;
$primary-light-mint: #8dcbbb;
$secondary-green: #297b79;
$secondary-transparent-red: rgba(227, 5, 19, 0.67);

$white: #ffffff;

@font-face {
  font-family: 'Vollkorn Bold Italic';
  src: url(../assets/VollkornBoldItalic.ttf);
}

@font-face {
  font-family: 'Open Sans Bold Italic';
  src: url(../assets/OpenSansBoldItalic.ttf);
}

* {
  padding: 0;
  margin: 0;
}

.sharepic-canvas {
  overflow: hidden;
  position: relative;
  height: 512px;
  width: 512px;
  background-color: #bbbbbb;
  background-size: cover;
}

.canvas-2013-image {
  .title {
    white-space: pre;
    position: absolute;
    bottom: 64px;
    left: 32px;
    font-size: 24px;
    display: inline-block;
    background-color: $primary-red;
    font-family: 'Vollkorn Bold Italic';
    color: $white;
    transform: skewY(-6deg);
    padding: 8px 16px;
    box-shadow: $primary-light-mint -10px 10px;
    transform-origin: 0% 100%;
  }

  .subtitle {
    white-space: pre;
    position: absolute;
    bottom: 36px;
    left: 48px;
    font-size: 18px;
    display: inline-block;
    background-color: $secondary-green;
    font-family: 'Vollkorn Bold Italic';
    color: $white;
    transform: skewY(-6deg);
    padding: 6px 16px;
    transform-origin: 0% 100%;
  }

  .text-background {
    background-color: $secondary-transparent-red;
    position: absolute;
    width: 50%;
    height: 192px;
    right: 0;
    top: 64px;
    transform: skewY(-6deg);
  }

  .text {
    white-space: pre;
    position: absolute;
    right: 0;
    top: 78px;
    text-align: center;
    width: 50%;
    height: 164px;
    color: $white;
    font-family: 'Open Sans Bold Italic';
    font-weight: 700;
    font-style: italic;
    text-decoration: underline;
    font-size: 20px;
  }

  .org-name {
    position: absolute;
    right: 24px;
    bottom: 6px;
    font-family: 'Open Sans Bold Italic';
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
}
</style>
