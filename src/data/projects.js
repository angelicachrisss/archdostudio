// Foto masih dipakai dari WordPress. Setelah diunduh, ganti dengan path lokal, mis. '/images/projects/w-home/01.jpg'
const w = (path) => `https://jonathan7cbc389f6d.wordpress.com/wp-content/uploads/${path}`;

export const categories = { residensial: 'Residensial', publik: 'Publik' };

/*
  Format satu proyek:
  { slug, name, category, cover, year, location, area, description: ['paragraf 1', ...], gallery: [foto, ...] }
  Field year/location/area/description/gallery boleh dikosongkan; bagian itu otomatis tidak tampil.
*/
export const projects = [
  { slug: 'hs-residence', name: 'H+S Residence', category: 'residensial', cover: w('2025/10/front-elev-2.jpg') },
  {
    slug: 'w-home', name: 'W Home', category: 'residensial', cover: w('2025/04/tampak-depan-edit-2.png'),
    year: '2025', location: 'Serpong, Tangerang Selatan', area: '315 m²',
    description: [
      'W Home adalah sebuah hunian di suatu kompleks perumahan yang sudah terbangun sejak tahun 90-an, dan sekarang keluarga ini menginginkan pembaruan total untuk rumahnya agar menjadi lebih nyaman dihuni dengan memaksimalkan semua potensi tapak yang ada.',
      'Rumah ini dirancang untuk menjadi ruang hidup bagi keluarga beranggotakan 6 orang. Semua kamar keluarga ini berada di lantai 2, dan lantai dasar dikonsepkan sebagai ruang komunal untuk keluarga ini berkumpul bersama, dengan rancangan open plan agar tercipta ruang yang berkelanjutan dari ruang tamu, ruang keluarga, dan ruang makan.',
      'Secara arsitektural, rumah ini dirancang untuk memaksimalkan pencahayaan dan penghawaan alami bahkan di lantai dasar, dengan adanya bukaan courtyard dan backyard yang memungkinkan sinar matahari tetap dapat menyinari ruang-ruang terdalam dan terjadinya ventilasi silang. Untuk ruang-ruang di lantai 2, digunakan sirip-sirip pada balkon untuk mengurangi paparan panas matahari langsung, mengingat rumah ini menghadap arah timur laut.',
      'Area rooftop adalah area yang dikhususkan untuk hewan-hewan peliharaan Mr. W, yang telah menjadi bagian dari keluarga ini untuk waktu yang lama.',
    ],
    gallery: ['tampak-depan-edit-2.png', 'dog-park.png', 'kitchen-set.png', 'living-1.png', 'living-lt-2-1.png', 'pantry-1.png', 'stair-way-1.png', 'living-lt-2-2-1.png', 'master-bedroom-1.png', 'boy-bedroom-1.png', 'master-bathroom-1.png'].map((f) => w(`2025/04/${f}`)),
  },
  { slug: 'riverhome', name: 'Riverhome 60', category: 'residensial', cover: w('2025/04/render-60-3.jpg') },
  { slug: 'amandita-90', name: 'Amandita 90', category: 'residensial', cover: w('2025/04/master_90.jpg') },
  { slug: 'c-home', name: 'C Home', category: 'residensial', cover: w('2025/12/facade-night-2.jpg') },
  { slug: 'bale-pahat', name: 'Balé Pahat', category: 'residensial', cover: w('2025/04/jalan-masuk-1.jpg') },
  { slug: 'the-view', name: 'The View', category: 'residensial', cover: w('2025/04/master-bedroom_1.jpg') },
  { slug: 'mr-e-home', name: 'E Home', category: 'residensial', cover: w('2025/04/screenshot-2025-04-24-194300.png') },
  { slug: 'ol-residence', name: 'O+L Residence', category: 'residensial', cover: w('2025/04/tampak-depan-02-edit02.jpg') },
  { slug: 'brassia-120-at-damandita', name: 'Brassia 120', category: 'residensial', cover: w('2025/04/render-120-final-edit.jpg') },
  { slug: 'cj-home', name: 'CJ Home', category: 'residensial', cover: w('2025/04/jadi.jpg') },
  { slug: 'r-home', name: 'R Home', category: 'residensial', cover: w('2025/04/render-final-day-6-crop-edited.jpg') },
  { slug: 'hj-residence', name: 'H+J Residence', category: 'residensial', cover: w('2025/04/sh9_new-edit-1.jpg') },
  { slug: 'amandita-60', name: 'Amandita 60', category: 'residensial', cover: w('2025/04/living_60.jpg') },
  { slug: 'a-home', name: 'A Home', category: 'residensial', cover: w('2025/04/detail-lounge.jpg') },

  { slug: 'birdnest-cafe', name: 'Birdnest Cafe', category: 'publik', cover: w('2025/04/entrance.jpg') },
  { slug: 'griya-anabatic', name: 'Griya Anabatic Dormitory', category: 'publik', cover: w('2025/04/griya-anabatic-apartment-view-03-1.jpg') },
  { slug: 'gki-nusa-loka', name: 'GKI Nusa Loka BSD', category: 'publik', cover: w('2025/04/pucuk.jpg') },
  { slug: 'gereja-katolik-st-polikarpus', name: 'Gereja Katolik St. Polikarpus', category: 'publik', cover: w('2025/04/p8213114.jpg') },
  { slug: 'marketing-gallery-damandita', name: "Marketing Gallery D'Amandita", category: 'publik', cover: w('2025/04/enscape_2024-04-25-01-04-43.jpg') },
  { slug: 'penara', name: 'Penara Co-Living', category: 'publik', cover: w('2025/08/whatsapp-image-2025-08-12-at-16.56.01-1.jpeg') },
  { slug: 'masjid-al-ammana', name: 'Masjid Al-Ammana', category: 'publik', cover: w('2025/04/entrance-masjid.jpg') },
  { slug: 'hillside-sanctuary', name: 'Hillside Sanctuary, Club House', category: 'publik', cover: w('2025/04/clubhouse-3.jpg') },
];
