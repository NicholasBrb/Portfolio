// ─── Tipi ─────────────────────────────────────────────────────────────────────

export interface SlideData {
  image?: string;                          // immagine principale (default: area grande; stack-poster: poster destra)
  description?: string;                    // testo/caption della slide
  layout?: 'stack-poster' | 'stack-video' | 'stack-text' | 'grid-5col'; // layout multi-elemento
  images?: [string?, string?];             // [top-sx, bottom-sx] per layout stack-*
  posterRatio?: string;                    // proporzioni poster, es. '210/297' (A4) — default '210/297'
  video?: string;                          // path video per layout stack-video, es. '/opt/projects/p3/clip.webm'
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
// Per le immagini: metti i file in /public/projects/<id>/ e usa il path '/opt/projects/<id>/nome.webp'

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
        coverImage: '/opt/P-Sambre/Copertina.webm',
        slides: [
          // slide 1: usa il campo description del progetto + questa immagine
          // { image: '/opt/projects/p1/s1.webp', description: 'Caption opzionale' },
          // slide 2
          // { image: '/opt/projects/p1/s2.webp', description: '' },
          // slide 3
          // { image: '/opt/projects/p1/s3.webp' },
          // slide 4
          // { image: '/opt/projects/p1/s4.webp' },
        ],
      },
      {
        id: 'p2',
        title: '4th edition celebration',
        coverImage: '/opt/P-Poster/copertinaposter.webp',
        year: 2025,
        tags: ['Poster'],
        flex: 2,
        client: 'TEDxSapienzaU',
        role: '',
        description: 'To celebrate the fourth edition of TEDxSapienzaU, a poster was created to speak to volunteers past and present. A grid of forty dots echoes the forty ideas brought to the stage, four emblematic speeches from different editions serve as backdrop. In the foreground, four red carpets unfold like pages of memories and roll out as if in set-up, evoking the hours of work behind the scenes.',
        slides: [
          { image: '/opt/P-Poster/Mockup.webp'},
          {
            layout: 'stack-poster',
            images: ['/opt/P-Poster/Zoom1.webp','/opt/P-Poster/Zoom2.webp'],
            image: '/opt/P-Poster/Poster.webp'
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
        coverImage: '/opt/P-Tuca/lettere.webp',
        tags: ['Type design'],
        flex: 1,
        client: 'University project',
        role: '',
        description: 'Tuca Tuca is a typeface inspired by the iconic Raffaella Carrà. Her dances, her swinging bob, inspire the shapes of a typeface with a friendly feel and a pleasantly seventies aesthetic.',
        slides: [
          {image: '/opt/P-Tuca/copertina.webp'},
          {
            layout: 'stack-video',
            images: ['/opt/P-Tuca/parole.webp', '/opt/P-Tuca/tutticaratteri.webp'],
            vimeoId: '1199698282',
          }
        ],
      },
      {
        id: 'p4',
        title: 'Rossana',
        year: 2025,
        coverImage: '/opt/P-Rossana/Copertina_.webp',
        tags: ['Brand design', '3d design'],
        flex: 3,
        client: 'University project, Rossana',
        description: 'For Rossana, the hard candy with a soft heart that has spanned generations, the future is born from a conscious return to its roots: a rebranding that aims to bring an icon to become a gesture of affection for new audiences too, without losing its hidden heart.',
        slides: [
          { image: '/opt/P-Rossana/Packaging.webp'},
          {
            layout: 'stack-text',
            images: ['/opt/P-Rossana/loghi.webp', '/opt/P-Rossana/100anni.webp'],
            image: '/opt/P-Rossana/Scatole.webp',
            description: "The rebranding conceived for Rossana is born with the goal of modernising its identity without losing the bond with its heritage. The new visual identity system stems from the desire to strengthen brand recognition, make it more appealing to new generations, and communicate the candy not merely as a product, but as a gesture of affection and a tradition to be shared. \n The project is grounded in a reinterpretation of the historic logo, keeping its neo-gothic soul intact. The distinctive element is the stylised silhouette of the candy, integrated between the two \"s\"s of the logotype: a subtle yet memorable detail that becomes the brand's defining symbol. A new palette enriches the iconic red with options for new flavours that speak to the creaminess of the Rossana heart. New paper packaging shifts the tactile experience in store, welcoming a new generation of consumers.",
          },
          {
            layout: 'grid-5col',
            imagesTop: ['/opt/P-Rossana/img1.webp', '/opt/P-Rossana/img2.webp', '/opt/P-Rossana/img3.webp', '/opt/P-Rossana/img4.webp'],
            imagesBottom: ['/opt/P-Rossana/b1.webp', '/opt/P-Rossana/b2.webp', '/opt/P-Rossana/b3.webp', '/opt/P-Rossana/b4.webp'],
            description: 'The campaign builds on a memory shared by almost every Italian: a loved one, usually a grandparent, passing a Rossana into your hand after your visit. This gesture is key to expand the meaning of gifting a Rossana as a gesture of love. This in combination with season limited flavors expands the brand\'s seasonal presence. The campaign encorauges this intimate gesture by launching the limited flavours around key festivities, such as Grandparents\' Day.',
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
        tags: ['Information design'],
        flex: 2,
        role: '',
        client: 'Civiltà dei Dati, Fondazione Leonardo',
        description: 'For the June 2026 issue of Civiltà dei Dati, focused on the perils of perception, the infographic centres on two data points that expose the gap between what people believe and what is real: the concentration of wealth held by the top 1%, and the perceived versus actual share of immigrant population by country. \n The visual language draws from early radiography, as if the world itself were being held up to the light, each country examined like an organ, its issues laid bare beneath the surface. The map is rendered on a tilted sphere, the world captured as an imperfect, living body mid-scan, rather than a flat analytical projection.',
        coverImage: '/opt/P-CDD/copertina.webp',
        slides: [
          {image: '/opt/P-CDD/CDD2Mockup.webp'},

        ],
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
          {}
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
