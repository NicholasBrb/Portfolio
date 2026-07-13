// ─── Tipi ─────────────────────────────────────────────────────────────────────

export interface SlideData {
  image?: string;                          // immagine principale (default: area grande; stack-poster: poster destra)
  description?: string;                    // testo/caption della slide
  layout?: 'stack-poster' | 'stack-video' | 'full-image' | 'two-images' | 'image-text' | 'hero-video'; // layout multi-elemento
  images?: [string?, string?];             // [top-sx, bottom-sx] per layout stack-*
  posterRatio?: string;                    // proporzioni poster, es. '210/297' (A4) — default '210/297'
  video?: string;                          // path video per layout stack-video, es. '/opt/projects/p3/clip.webm'
  imagesTop?: string[];                    // immagini riga superiore per layout grid-5col (max 4)
  imagesBottom?: string[];                 // immagini riga inferiore per layout grid-5col (max 4, col 5 è occupata dal testo)
  vimeoId?: string;                        // ID video Vimeo — se presente, la slide mostra l'embed (es. '1199688428')
}

export interface ProjectLink {
  label: string;
  url: string;
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
  links?: ProjectLink[];  // link esterni mostrati in fondo al dettaglio
  flex: number;           // larghezza relativa nella riga: 1 = una col, 2 = due col, 3 = tre col
  slides?: SlideData[];   // se assenti vengono mostrati 4 placeholder
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
        tags: ['Visual identity'],
        flex: 2,
        client: 'Sambre Collective',
        role: 'Visual identity designer',
        description: 'Sambre is a photography collective whose latest open call, Prendersi cura, invites photographers to explore care in its broadest and most layered sense, not as therapy or repair, but as attention, presence, and relational responsibility. The visual identity is built around a single organic metaphor: a mold, or fungi, expanding from the logotype and other hotspots. Like care itself, slime molds have no center, no hierarchy, no fixed boundary, they grow by touch, spreading wherever conditions allow life to continue. The form grows as a reminder that acts of care are never isolated: each one propagates another, building webs of relation across bodies, spaces, and communities.\n\n"The care that has been \'passed on\' [...] continues to circulate, not necessarily morally or intentionally, in an embodied way, or simply embedded in the world, environments, infrastructures that have been marked by that care.\" \n\nMaría Puig de la Bellacasa, Matters of Care, 2017',
        coverImage: '/opt/P-Sambre/Copertina.webm',
        links:[{label: 'View open call', url:'https://sambrecollective.com/opencall-3'}],
        slides: [
          {video: '/opt/P-Sambre/Videovariig.webm'},
          {video: '/opt/P-Sambre/noscritta.webm', layout:'full-image'},
          {image: '/opt/P-Sambre/Poster.webp', layout:'image-text', description: 'The typographic choice to write the call in lowercase reflects the collective\'s intent: care as it appears here is not institutional or ceremonial, but everyday and horizontal. It belongs to everyone. \n\nThe color palette extends Sambre\'s existing green identity while introducing a sharp neon green to single out care as something that demands to be seen. Often rendered invisible by the systems that exploit it, care is here made luminous, loud, organic, impossible to overlook.\n\nThis project is ongoing, stay tuned for the exhibitions identity!'},
        ],
      },
      {
        id: 'p2',
        title: '4th edition celebration',
        coverImage: '/opt/P-Poster/copertinaposter.webp',
        year: 2025,
        tags: ['Print design'],
        flex: 2,
        client: 'TEDxSapienzaU',
        role: 'Print designer',
        links:[{label: 'Visit TEDxSapienzaU', url:'https://www.tedxsapienzau.com/'},],
        description: 'Designed to celebrate the fourth edition of TEDxSapienzaU, this poster speaks to volunteers past and present. A grid of forty dots echoes the forty ideas brought to the stage; four emblematic speeches from past editions serve as backdrop. In the foreground, four red carpets unfold like pages of memory, rolling out as if mid set-up, evoking the hours of work behind the scenes.',
        slides: [
          { image: '/opt/P-Poster/Mockup.webp'},
          {
            layout: 'stack-poster',
            images: ['/opt/P-Poster/Zoom1.webp','/opt/P-Poster/Zoom2.webp'],
            image: '/opt/P-Poster/Poster.webp'
          },
          {image: '/opt/P-Poster/reference.webp', layout: 'image-text', description:'A peek at my process: the picture of a physical model was traced to draw the main protagonist of the composition.'},
          
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
        role: 'Type designer',
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
        tags: ['Visual identity', '3D design'],
        flex: 3,
        client: 'Rossana, University brief',
        role: 'Graphic designer',
        description: 'For Rossana - the hard candy with a soft heart that generations of Italians have enjoyed - this rebranding, developed as a team project, aims to echo the iconic shape, in a gesture of affection for new audiences, without losing its original hidden heart. My role centered on drawing the logo and developing the 3D design work throughout the project.',
        slides: [
          { image: '/opt/P-Rossana/Packaging.webp'},
          {image: '/opt/P-Rossana/Scatole.webp', layout: 'full-image'},
          {image: '/opt/P-Rossana/loghi.webp', layout:'image-text', description: 'As a team, our rebranding for Rossana set out to modernise its identity without losing the bond with its heritage. The new visual identity system stems from the desire to strengthen recognition on the shelf as a heritage product, and communicate the candy not merely as a product, but as a small ritual of trust passed between generations.\n\nThe distinctive element is the stylised silhouette of the candy, integrated between the two \"s\"s of the logotype: a subtle yet memorable detail that becomes the brand\'s defining symbol. I drew this logo from scratch, researching gothic lettering conventions to keep the historic logo\'s neo-gothic soul intact while integrating the new silhouette. A new palette enriches the iconic red with options for new flavours that speak to the creaminess of the Rossana heart. New paper packaging shifts the tactile experience in store, welcoming a new generation of consumers.'},
          {image: '/opt/P-Rossana/100anni.webp', layout: 'full-image'},
          {image: '/opt/P-Rossana/b3.webp', layout:'image-text', description: 'The campaign, developed together as a team, builds on a memory shared by almost every Italian: a loved one, usually a grandparent, passing a Rossana into your hand after your visit. This gesture is key to expand the meaning of gifting a Rossana as a gesture of love. This in combination with season limited flavors expands the brand\'s seasonal presence. The campaign encourages this intimate gesture by launching the limited flavours around key festivities, such as Grandparents\' Day. I executed the 3D renders for the campaign posters and produced the final posters themselves.'},
          {images:['/opt/P-Rossana/img1.webp', '/opt/P-Rossana/b1.webp'], layout:'two-images'},
          {images:['/opt/P-Rossana/b2.webp', '/opt/P-Rossana/img2.webp'], layout:'two-images'},
          
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
        role: 'Information designer',
        client: 'Civiltà dei Dati, Fondazione Leonardo',
        description: 'For the June 2026 issue of Civiltà dei Dati, focused on the perils of perception, the infographic centres on two data points that expose the gap between what people believe and what is real: the concentration of wealth held by the top 1%, and the perceived versus actual share of immigrant population by country. \n\n The visual language draws from early radiography, as if the world itself were being held up to the light, each country examined like an organ, its issues laid bare beneath the surface. The map is rendered on a tilted sphere, the world captured as an imperfect, living body mid-scan, rather than a flat analytical projection.',
        coverImage: '/opt/P-CDD/copertina.webp',
        links:[{label: 'Visit Civiltà dei Dati', url:'https://www.fondazioneleonardo.com/civilta-dei-dati'},],
        slides: [
          {image: '/opt/P-CDD/CDD2Mockup.webp'},

        ],
      },
      {
        id: 'p6',
        title: 'On the Brink',
        year: 2026,
        tags: ['Motion design', 'Visual identity'],
        role: 'Digital design subteam leader, storyboarder, motion designer, visual identity design',
        client: 'TEDxSapienzaU',
        links:[{label: 'Visit TEDxSapienzaU', url:'https://www.tedxsapienzau.com/'},],
        flex: 2,
        coverImage: '/opt/P-Brink/Copertina.webm',
        description: 'The intro video for TEDxSapienzaU - On the Brink was crafted to tell the story of the identity itself. A square, symbol of stability. Then the breaking point: the liminal, suspended "on the brink" moment, dense with possible futures. Then an explosion of repetitions in vibrant colours, each one representing a different possible scenario. Designed to pull the audience into the theme before the first speech begins, both in the theatre and on YouTube. \n\nI came up with the initial concept and storyboarded the full sequence. I animated the first half myself, worked with another animator on the second half, then edited and cut together the final video.',
        slides: [
          { vimeoId: '1199688428' },
          { images:['/opt/P-Brink/IG1.webp','/opt/P-Brink/IG2.webp'], layout: 'two-images'},
          {image: '/opt/P-Brink/palco.webp'},
        ],
      },
    ],
  },
  {
    height: '20rem',
    projects: [
      {
        id: 'p7',
        title: 'Para Doxa',
        year: 2025,
        tags: ['Visual identity'],
        client: 'TEDxSapienzaU',
        role: 'Digital design subteam leader, concept creator, visual identity design, digital designer, motion designer',
        links:[{label: 'Visit TEDxSapienzaU', url:'https://youtu.be/oel9-7Az0vw?si=QZ4kH5ZyQriEDloU'},],
        flex: 3,
        description: 'As digital design subteam leader for TEDxSapienzaU\'s April 2025 edition, Para Doxa, I originated the concept, competing against and being selected over other ideas proposed by the team. The visual identity was born with the goal of building a visual language immediately recognizable as belonging to the world of paradoxes, speaking directly to the event\'s primary audience of university students. I then led its development as a volunteer, coordinating a 5-person digital design subteam and directing key decisions such as color palette and typography. I was responsible for all screen graphics on the day of the event and all digital media beforehand, spanning social media, newsletters, and animations. After the event, I also oversaw the storyboarding and production of the intro animations for the talk recordings published on the official TEDx channel.',
        coverImage: '/opt/P-Paradoxa/almaroli.webp',
        slides: [
          {vimeoId: '1203391916', layout: 'hero-video'},
          {image: '/opt/P-Paradoxa/tickets.webp', layout: 'full-image'},
          {image: '/opt/P-Paradoxa/speaker.webp', layout: 'full-image'},
          {image: '/opt/P-Paradoxa/mood.webp', layout: 'image-text', description:'The concept draws from the impossible shapes of Penrose and Reutersvärd, reimagining them as an impossible labyrinth, a space where geometric rules bend and give rise to the key artwork of Para Doxa.\nThe strict isometric geometry of the labyrinth acts as a dynamic framework for a logo that is ever-changing yet always coherent, reflecting the ability to hold multiple perspectives at once, just as every paradox brought to the stage does. Inhabiting the labyrinth are images of people and animals, each representing a different paradox, an easter egg for those able to recognise them. \n\nThese figures are treated with a halftoning effect inspired by Escher\'s xilographies, producing a monochromatic imagery that complements the colourful labyrinth. \nThe same geometric logic extends to the typography, with words distorted along the isometric angles of the labyrinth, most notably in the logo and in key titles such as the speaker cards.'},
          {image: '/opt/P-Paradoxa/abbozzo.webp', layout: 'full-image'},
          {image: '/opt/P-Paradoxa/booklets.webp', layout: 'full-image'},
          {images: ['/opt/P-Paradoxa/Badges.webp','/opt/P-Paradoxa/Pepa.webp'], layout: 'two-images'},
        ],
      },
      {
        id: 'p8',
        title: 'AperiPrinting',
        year: 2026,
        tags: ['Illustration','Brand activation'],
        flex: 1,
        client: 'TEDxSapienzaU',
        links:[{label: 'TEDxSapienzaU', url:'https://www.tedxsapienzau.com/'},],
        role: 'Event concept, organization, illustration',
        coverImage: '/opt/P-Aperiprinting/DSCF0351.webp',
        description: 'AperiPrinting was an event I conceived, designed to let TEDxSapienzaU\'s community, followers and volunteers alike, create their own dream merch, in a fun, accessible and lighthearted way. I originated the concept; organizing it from there was a group effort, involving decisions ranging from large-scale experience design down to the printing method: 3D-printed stamps, chosen for their accessibility in cost and ease of use. Beyond the association\'s logos, the team designed four illustration sets, each representing a different theme, which participants could freely combine into their own composition. I personally designed the set capturing the rhythmic, chaotic dance of event setup, something anyone who has ever volunteered for an organization like this knows deep in their bones.',
        slides: [
          {video: '/opt/P-Aperiprinting/VideoCopertina2.webm'},
          {image: '/opt/P-Aperiprinting/DSCF0302.webp', layout: 'full-image'},
          {image: '/opt/P-Aperiprinting/Copertina.webp', layout: 'image-text', description: 'The figures are abstract and geometric so to be easily printed, but expressive in their dynamic positions. Their peculiarity comes from the widening limbs at the end, which inspired by futurism artworks such as Dinamismo di un cane al guinzaglio by Giacomo Balla, enhances the perception of movement of the limb.'},
          {images: ['/opt/P-Aperiprinting/R.webp', '/opt/P-Aperiprinting/Pulitizoom.webp'], layout: 'two-images'},
          {image: '/opt/P-Aperiprinting/DSCF0155.webp', layout: 'full-image'},
          {image: '/opt/P-Aperiprinting/DSCF0385.webp', layout: 'full-image'},
          {image: '/opt/P-Aperiprinting/DSCF0495.webp', layout: 'full-image'},
        ],
      },
    ],
  },
];
