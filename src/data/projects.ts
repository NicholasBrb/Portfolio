// ─── Tipi ─────────────────────────────────────────────────────────────────────

export interface SlideData {
  image?: string;                          // immagine principale (default: area grande; stack-poster: poster destra)
  description?: string;                    // testo/caption della slide
  layout?: 'stack-poster' | 'stack-video' | 'stack-text' | 'grid-5col'; // layout multi-elemento
  images?: [string?, string?];             // [top-sx, bottom-sx] per layout stack-*
  posterRatio?: string;                    // proporzioni poster, es. '210/297' (A4) — default '210/297'
  video?: string;                          // path video per layout stack-video, es. '/projects/p3/clip.mp4'
  imagesTop?: string[];                    // immagini riga superiore per layout grid-5col (max 4)
  imagesBottom?: string[];                 // immagini riga inferiore per layout grid-5col (max 4, col 5 è occupata dal testo)
  vimeoId?: string;                        // ID video Vimeo — se presente, la slide mostra l'embed (es. '1199688428')
}

export interface ProjectData {
  id: string;
  title: string;
  year: number | string;
  tags: string[];
  coverImage?: string;    // immagine o video copertina della card (.jpg/.png/.mp4/.webm…)
  client?: string;        // cliente del progetto
  role?: string;          // ruolo nel progetto
  description?: string;   // descrizione breve (appare nella slide 1 del dettaglio)
  flex: number;           // larghezza relativa nella riga: 1 = una col, 2 = due col, 3 = tre col
  slides?: SlideData[];   // max 4 slide; se assenti vengono mostrati 4 placeholder
}

export interface ProjectRowData {
  height: string;           // altezza CSS della riga card, es. '20rem'
  projects: ProjectData[];
}

// ─── Dati progetti ─────────────────────────────────────────────────────────────
// Aggiungi/modifica qui i tuoi progetti.
// Per le immagini: metti i file in /public/projects/<id>/ e usa il path '/projects/<id>/nome.jpg'

export const projectRows: ProjectRowData[] = [
  {
    height: '20rem',
    projects: [
      {
        id: 'p1',
        title: 'Prendersi Cura',
        year: 2026,
        tags: ['Identity'],
        flex: 2,
        client: '',
        role: '',
        description: 'Prendersi cura started as an open call for photography projects whi',
        coverImage: '/P-Sambre/Copertina.webm',
        slides: [
          // slide 1: usa il campo description del progetto + questa immagine
          // { image: '/projects/p1/s1.jpg', description: 'Caption opzionale' },
          // slide 2
          // { image: '/projects/p1/s2.jpg', description: '' },
          // slide 3
          // { image: '/projects/p1/s3.jpg' },
          // slide 4
          // { image: '/projects/p1/s4.jpg' },
        ],
      },
      {
        id: 'p2',
        title: '4th edition celebration',
        coverImage: '/P-Poster/copertinaposter.png',
        year: 2025,
        tags: ['Poster'],
        flex: 2,
        client: 'TEDxSapienzaU',
        role: '',
        description: 'To celebrate the fourth edition of TEDxSapienzaU, a poster was created to speak to volunteers past and present. A grid of forty dots echoes the forty ideas brought to the stage, four emblematic speeches from different editions serve as backdrop. In the foreground, four red carpets unfold like pages of memories and roll out as if in set-up, evoking the hours of work behind the scenes.',
        slides: [
          { image: '/P-Poster/Mockup.png'},
          {
            layout: 'stack-poster',
            images: ['/P-Poster/Zoom1.png','/P-Poster/Zoom2.png'],
            image: '/P-Poster/Poster.png'
          }
          
        ],
      },
    ],
  },
  {
    height: '20rem',
    projects: [
      {
        id: 'p3',
        title: 'Tuca Tuca',
        year: 2025,
        coverImage: '/P-Tuca/lettere.png',
        tags: ['Type design'],
        flex: 1,
        client: 'University project',
        role: '',
        description: 'Tuca Tuca is a typeface inspired by the iconic Raffaella Carrà. Her dances, her swinging bob, inspire the shapes of a typeface with a friendly feel and a pleasantly seventies aesthetic.',
        slides: [
          {image: '/P-Tuca/copertina.png'},
          {
            layout: 'stack-video',
            images: ['/P-Tuca/parole.png', '/P-Tuca/tutticaratteri.png'],
            vimeoId: '1199698282',
          }
        ],
      },
      {
        id: 'p4',
        title: 'Rossana',
        year: 2025,
        coverImage: '/P-Rossana/Copertina_.png',
        tags: ['Brand design', '3d design'],
        flex: 3,
        client: 'University project, Rossana',
        description: 'For Rossana, the hard candy with a soft heart that has spanned generations, the future is born from a conscious return to its roots: a rebranding that aims to bring an icon to become a gesture of affection for new audiences too, without losing its hidden heart.',
        slides: [
          { image: '/P-Rossana/Packaging.png'},
          {
            layout: 'stack-text',
            images: ['/P-Rossana/loghi.png', '/P-Rossana/100anni.png'],
            image: '/P-Rossana/Scatole.png',
            description: "The rebranding conceived for Rossana is born with the goal of modernising its identity without losing the bond with its heritage. The new visual identity system stems from the desire to strengthen brand recognition, make it more appealing to new generations, and communicate the candy not merely as a product, but as a gesture of affection and a tradition to be shared. \n The project is grounded in a reinterpretation of the historic logo, keeping its neo-gothic soul intact. The distinctive element is the stylised silhouette of the candy, integrated between the two \"s\"s of the logotype: a subtle yet memorable detail that becomes the brand's defining symbol. A new palette enriches the iconic red with options for new flavours that speak to the creaminess of the Rossana heart. New paper packaging shifts the tactile experience in store, welcoming a new generation of consumers.",
          },
          {
            layout: 'grid-5col',
            imagesTop: ['/P-Rossana/img1.png', '/P-Rossana/img2.png', '/P-Rossana/img3.png', '/P-Rossana/img4.png'],
            imagesBottom: ['/P-Rossana/b1.png', '/P-Rossana/b2.png', '/P-Rossana/b3.png', '/P-Rossana/b4.png'],
            description: 'The campaign builds on a memory shared by almost every Italian: a loved one, usually a grandparent, passing a Rossana into your hand after your visit. To expand the brand\'s seasonal presence, this intimate gesture becomes the heart of a campaign centred around key festivities, such as Grandparents\' Day.',
          }
        ],
      },
    ],
  },
  {
    height: '20rem',
    projects: [
      {
        id: 'p5',
        title: 'Civiltà dei Dati',
        year: 2026,
        tags: ['Campaign', 'Social'],
        flex: 2,
        description: 'Descrizione breve del progetto.',
        slides: [],
      },
      {
        id: 'p6',
        title: 'On the Brink',
        year: 2026,
        tags: ['Motion design, Visual Identity'],
        role: 'Storyboarding, motion designer, visual identity design',
        client: 'TEDxSapienzaU',
        flex: 2,
        description: 'The intro video for TEDxSapienzaU - On the Brink was crafted to tell the story of the identity itself. A square, symbol of stability. Then the breaking point: the liminal, suspended "on the brink" moment, dense with possible futures. Then an explosion of repetitions in vibrant colours, each one representing a different possible scenario. Designed to pull the audience into the theme before the first speech begins, both in the theatre and on YouTube.',
        slides: [
          { vimeoId: '1199688428' },
        ],
      },
    ],
  },
  {
    height: '20rem',
    projects: [
      {
        id: 'p5',
        title: 'Para Doxa',
        year: 2023,
        tags: ['Campaign', 'Social'],
        flex: 3,
        description: 'Descrizione breve del progetto.',
        slides: [],
      },
      {
        id: 'p6',
        title: 'Shader',
        year: 2021,
        tags: ['Print'],
        flex: 1,
        description: 'Descrizione breve del progetto.',
        slides: [],
      },
    ],
  },
];
