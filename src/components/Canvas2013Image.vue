<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col"><h1>Juso-Sharepic-Generator</h1></div>
      </div>
      <div class="row">
        <div class="col-auto">
          <div class="sharepic-canvas" id="sharepic-canvas">
            <img
              class="background w-100"
              src="../assets/standard-background.jpg"
            />
            <div class="title">{{ title }}</div>
            <div class="subtitle">{{ subtitle }}</div>
            <div class="text-background"></div>
            <div class="text">
              <div class="d-flex w-100 h-100 align-items-center">
                <div class="text-center w-100">{{ text }}</div>
              </div>
            </div>
            <img class="logo" src="../assets/logo.png" />
            <div class="org-name">{{ orgName }}</div>
          </div>
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
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">🖼️ Hintergrund</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Wähle eine Bilddatei von deinem Computer aus. Bitte achte
                darauf, dass dein Bild quadratisch ist.
              </h6>
              <input
                type="file"
                accept="image/*"
                @change="setBackground"
                class="form-control-file"
              />
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">✨ Titel</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Titel
              </h6>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="2013-image-title"
                  placeholder="Völker hört die Signale!"
                  v-model="title"
                  rows="2"
                  style="height: unset;"
                >
                </textarea>
                <label for="2013-image-title">Titel (max. 2 Zeilen)</label>
              </div>
              <h6 class="card-subtitle mb-2 text-muted">
                Untertitel
              </h6>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="2013-image-title"
                  placeholder="Auf zum letzten Gefecht!"
                  v-model="subtitle"
                  rows="1"
                  style="height: unset;"
                >
                </textarea>
                <label for="2013-image-title">Untertitel (max. 1 Zeile)</label>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">📃 Text</h5>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="2013-image-text"
                  placeholder="Hoch die Internationale Solidarität!"
                  v-model="text"
                  rows="5"
                  style="height: unset;"
                >
                </textarea>
                <label for="2013-image-title">Text(max. 5 Zeilen)</label>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">🌹 Logo</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Gib den Namen deiner Organisation (Bezirk, UB, etc.) ein.
              </h6>
              <input
                type="text"
                class="form-control mb-2"
                v-model="orgName"
                placeholder="z.B. Freising, München, o.ä."
              />
              <h6 class="card-subtitle mb-2 text-muted">
                In welcher Farbe soll der Text unter dem Logo erscheinen?
              </h6>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="logoTextColor"
                  id="logo-text-black"
                  value="black"
                />
                <label class="form-check-label" for="inlineRadio1"
                  >schwarz</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="logoTextColor"
                  id="logo-text-white"
                  value="white"
                />
                <label class="form-check-label" for="inlineRadio2">weiß</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

export default {
  data: () => {
    return {
      title: 'Völker hört die Signale!',
      subtitle: 'Auf zum letzten Gefecht!',
      text: 'Hoch die Internationale\nSolidarität!',
      orgName: 'Freising',
    };
  },
  methods: {
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
    setBackground: function() {
      const url = URL.createObjectURL(event.target.files[0]);
      console.log(url);
      document.querySelector('.background').src = url;
    },
  },
};
</script>

<style lang="scss">
$primary-red: #e30513;
$primary-light-mint: #8dcbbb;
$secondary-green: #297b79;
$secondary-transparent-red: rgba(227, 5, 19, 0.67);

$white: #ffffff;

@import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@1,700&display=swap');

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

.title {
  white-space: pre;
  position: absolute;
  bottom: 64px;
  left: 32px;
  font-size: 24px;
  display: inline-block;
  background-color: $primary-red;
  font-family: 'Vollkorn';
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
  font-family: 'Vollkorn';
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
  font-family: 'Open Sans';
  font-weight: 700;
  font-style: italic;
  text-decoration: underline;
  font-size: 20px;
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
