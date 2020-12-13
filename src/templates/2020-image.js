export default {
  component: 'canvas-2020-image',
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
      type: 'input-color',
      identifier: 'themeColor',
      title: 'Farbschema',
      description:
        'Die Textfarbe passt sich automatisch an die gewählte Akzentfarbe an, um einen barrierefreien Kontrast sicherzustellen.',
      default: '#ff7356',
      settings: {
        colors: [
          {
            name: 'Orange',
            code: '#ff7356',
          },
          {
            name: 'Flieder',
            code: '#efacff',
          },
          {
            name: 'Grün',
            code: '#a6f88f',
          },
          {
            name: 'Blau',
            code: '#96b8c1',
          },
          {
            name: 'Petrol',
            code: '#205269',
          },
          {
            name: 'Rot',
            code: '#e30613',
          },
        ],
      },
    },
    {
      type: 'input-text',
      identifier: 'intro',
      title: 'Titel',
      description: 'Einleitender Satz über dem inhalt',
      default: 'An die schwarz-grüne Landesregierung:',
      settings: {
        rows: 1,
      },
    },
    {
      type: 'input-text',
      identifier: 'hashtag',
      title: 'Hashtag',
      description: 'Hashtag oder Schlagwort in der Fußzeile',
      default: '#Jusos',
      settings: {
        rows: 1,
      },
    },
    {
      type: 'input-text',
      identifier: 'text',
      title: 'Inhalt',
      description: 'Text oben rechts',
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
  ],
};
