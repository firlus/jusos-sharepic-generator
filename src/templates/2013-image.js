export default {
  component: 'canvas-2013-image',
  demoImage: '2013-image.png',
  controls: [
    {
      type: 'input-file',
      identifier: 'background',
      title: 'Hintergrund',
      description: 'Bitte achte darauf, dass dein Bild quadratisch ist!',
      default:
        'https://github.com/firlus/jusos-sharepic-generator/blob/master/src/assets/standard-background.jpg?raw=true',
      settings: {},
    },
    {
      type: 'input-text',
      identifier: 'title',
      title: 'Titel',
      description: 'Text im roten Rhomboid links unten',
      default: 'Völker hört die Signale!',
      settings: {
        rows: 2,
      },
    },
    {
      type: 'input-text',
      identifier: 'subtitle',
      title: 'Untertitel',
      description: 'Text im grünen Rhomboid links unten',
      default: 'Auf zum letzten Gefecht!',
      settings: {
        rows: 1,
      },
    },
    {
      type: 'input-text',
      identifier: 'text',
      title: 'Inhalt',
      description: 'Text im roten Rhomboid rechts oben',
      default: 'Hoch die Internationale\nSolidarität!',
      settings: {
        rows: 5,
      },
    },
    {
      type: 'input-text',
      identifier: 'org',
      title: 'Logo',
      description: 'Gib den Namen deiner Organisation (Bezirk, UB, etc.) ein.',
      default: 'Freising',
      settings: {
        rows: 1,
      },
    },
    {
      type: 'input-color',
      identifier: 'orgTextColor',
      title: 'Logo (Textfarbe)',
      description:
        'Wähle weiß bei einem dunklen Hintergrundbild und schwarz bei einem hellen Hintergrundbild.',
      default: '#000000',
      settings: {
        colors: [
          {
            name: 'Schwarz',
            code: '#000000',
          },
          {
            name: 'Weiß',
            code: '#ffffff',
          },
        ],
      },
    },
  ],
};
