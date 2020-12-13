export default {
  component: 'canvas-2013-image',
  demoImage: '2013-image.png',
  displayName: 'Style 2013: Bildlastig',
  controls: [
    {
      type: 'input-file',
      identifier: 'background',
      title: '🖼️ Hintergrund',
      description:
        'Bitte achte darauf, dass dein Bild eine Hohe Auflösung hat! (2048x2048 ist optimal. Weniger als 1024x1024 wird später deutlich bemerkbar sein.)',
      default: 'standard-background.jpg',
      settings: {},
    },
    {
      type: 'input-color',
      identifier: 'backgroundMode',
      title: 'Hintergrund (Position)',
      description:
        'Ändere die Anzeigeposition des Hintergrunds, wenn dieser das Bild nicht ganz bedeckt.',
      default: 'w-100',
      settings: {
        colors: [
          {
            name: 'An Breite anpassen',
            code: 'w-100',
          },
          {
            name: 'An Höhe anpassen',
            code: 'h-100',
          },
        ],
      },
    },
    {
      type: 'input-text',
      identifier: 'title',
      title: '🗨️ Titel',
      description: 'Text im roten Rhomboid links unten',
      default: 'Völker hört die Signale!',
      settings: {
        rows: 2,
      },
    },
    {
      type: 'input-text',
      identifier: 'subtitle',
      title: '📃 Untertitel',
      description: 'Text im grünen Rhomboid links unten',
      default: 'Auf zum letzten Gefecht!',
      settings: {
        rows: 1,
      },
    },
    {
      type: 'input-text',
      identifier: 'text',
      title: '📰 Inhalt',
      description: 'Text im roten Rhomboid rechts oben',
      default: 'Hoch die Internationale\nSolidarität!',
      settings: {
        rows: 5,
      },
    },
    {
      type: 'input-text',
      identifier: 'org',
      title: '🌹 Logo',
      description: 'Gib den Namen deiner Organisation (Bezirk, UB, etc.) ein.',
      default: 'Freising',
      settings: {
        rows: 1,
      },
    },
    {
      type: 'input-color',
      identifier: 'orgTextColor',
      title: '🌈 Logo (Textfarbe)',
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
