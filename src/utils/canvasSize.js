export default function changeCanvasSize() {
  const width = document.querySelector('#canvas-container').clientWidth - 24;
  const factor = width / 512;
  document.querySelector(
    '#sharepic-canvas',
  ).style.transform = `scale(${factor})`;
}
