/*
  ======================  PANDUAN MENGISI PROYEK  ======================
  Tidak perlu paham kode. Cukup cari nama proyek di bawah, lalu isi
  HANYA bagian di antara tanda kutip ' ' atau tanda ` `. Jangan hapus
  koma (,) di ujung baris dan jangan ubah kata di kiri titik dua.

  location            Lokasi proyek.            Contoh: 'Serpong, Tangerang Selatan'
  designYear          Tahun desain.             Contoh: '2025'
  constructionPeriod  Masa pembangunan.         Contoh: '2025 - 2026'
  description         3 sampai 5 kalimat tentang proyek, ditulis di antara dua tanda ` `
                      (boleh beberapa baris dan boleh memakai tanda petik).
                      Jangan menulis tanda ` atau ${ di dalam deskripsi.
  gallery             Foto untuk carousel di halaman proyek, urut sesuai yang ingin tampil.
                      1) Taruh file foto di folder  public/images/projects/<slug>/
                         (<slug> = tulisan setelah "slug:" pada proyek itu).
                      2) Tulis nama filenya, satu per baris. Contoh:   '01.jpg',
                      3) Hapus tanda // di depan baris contoh agar aktif.
                      Saran foto: format JPG, lebar sekitar 2000 px.
  cover               Foto untuk daftar Karya dan beranda. Isi dengan nama file di folder
                      proyek, mis. 'cover.jpg'. Bila tidak diubah, tetap memakai foto lama.

  Kolom yang dikosongkan tampil sebagai "—" di website. Jika gallery kosong,
  carousel hanya berisi foto cover.
  =======================================================================
*/

// Alamat foto lama di WordPress. Boleh dibiarkan sampai semua foto sudah dipindah ke folder proyek.
const w = (path) => `https://jonathan7cbc389f6d.wordpress.com/wp-content/uploads/${path}`;

export const categories = { residensial: 'Residensial', publik: 'Publik' };

const raw = [
  {
    slug: 'hs-residence',
    name: 'H+S Residence',
    category: 'residensial',
    cover: w('2025/10/front-elev-2.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'w-home',
    name: 'W Home',
    category: 'residensial',
    cover: w('2025/04/tampak-depan-edit-2.png'),
    location: 'Serpong, Tangerang Selatan',
    designYear: '2025',
    constructionPeriod: '',
    description: `W Home adalah hunian di kompleks perumahan yang sudah terbangun sejak tahun 90-an, yang kini diperbarui total agar lebih nyaman dihuni dengan memaksimalkan potensi tapak. Rumah ini dirancang untuk keluarga beranggotakan enam orang: seluruh kamar berada di lantai dua, sementara lantai dasar menjadi ruang komunal dengan rancangan open plan. Bukaan courtyard dan backyard membawa cahaya matahari dan ventilasi silang hingga ke ruang terdalam. Sirip-sirip pada balkon lantai dua mengurangi paparan panas langsung dari arah timur laut. Area rooftop dikhususkan bagi hewan-hewan peliharaan yang sudah lama menjadi bagian dari keluarga ini.`,
    gallery: [
      w('2025/04/tampak-depan-edit-2.png'),
      w('2025/04/dog-park.png'),
      w('2025/04/kitchen-set.png'),
      w('2025/04/living-1.png'),
      w('2025/04/living-lt-2-1.png'),
      w('2025/04/pantry-1.png'),
      w('2025/04/stair-way-1.png'),
      w('2025/04/living-lt-2-2-1.png'),
      w('2025/04/master-bedroom-1.png'),
      w('2025/04/boy-bedroom-1.png'),
      w('2025/04/master-bathroom-1.png'),
    ],
  },
  {
    slug: 'riverhome',
    name: 'Riverhome 60',
    category: 'residensial',
    cover: w('2025/04/render-60-3.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'amandita-90',
    name: 'Amandita 90',
    category: 'residensial',
    cover: w('2025/04/master_90.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'c-home',
    name: 'C Home',
    category: 'residensial',
    cover: w('2025/12/facade-night-2.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'bale-pahat',
    name: 'Balé Pahat',
    category: 'residensial',
    cover: w('2025/04/jalan-masuk-1.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'the-view',
    name: 'The View',
    category: 'residensial',
    cover: w('2025/04/master-bedroom_1.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'mr-e-home',
    name: 'E Home',
    category: 'residensial',
    cover: w('2025/04/screenshot-2025-04-24-194300.png'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'ol-residence',
    name: 'O+L Residence',
    category: 'residensial',
    cover: w('2025/04/tampak-depan-02-edit02.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'brassia-120-at-damandita',
    name: 'Brassia 120',
    category: 'residensial',
    cover: w('2025/04/render-120-final-edit.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'cj-home',
    name: 'CJ Home',
    category: 'residensial',
    cover: w('2025/04/jadi.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'r-home',
    name: 'R Home',
    category: 'residensial',
    cover: w('2025/04/render-final-day-6-crop-edited.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'hj-residence',
    name: 'H+J Residence',
    category: 'residensial',
    cover: w('2025/04/sh9_new-edit-1.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'amandita-60',
    name: 'Amandita 60',
    category: 'residensial',
    cover: w('2025/04/living_60.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'a-home',
    name: 'A Home',
    category: 'residensial',
    cover: w('2025/04/detail-lounge.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'birdnest-cafe',
    name: 'Birdnest Cafe',
    category: 'publik',
    cover: w('2025/04/entrance.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'griya-anabatic',
    name: 'Griya Anabatic Dormitory',
    category: 'publik',
    cover: w('2025/04/griya-anabatic-apartment-view-03-1.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'gki-nusa-loka',
    name: 'GKI Nusa Loka BSD',
    category: 'publik',
    cover: w('2025/04/pucuk.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'gereja-katolik-st-polikarpus',
    name: 'Gereja Katolik St. Polikarpus',
    category: 'publik',
    cover: w('2025/04/p8213114.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'marketing-gallery-damandita',
    name: "Marketing Gallery D'Amandita",
    category: 'publik',
    cover: w('2025/04/enscape_2024-04-25-01-04-43.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'penara',
    name: 'Penara Co-Living',
    category: 'publik',
    cover: w('2025/08/whatsapp-image-2025-08-12-at-16.56.01-1.jpeg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'masjid-al-ammana',
    name: 'Masjid Al-Ammana',
    category: 'publik',
    cover: w('2025/04/entrance-masjid.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: 'hillside-sanctuary',
    name: 'Hillside Sanctuary, Club House',
    category: 'publik',
    cover: w('2025/04/clubhouse-3.jpg'),
    location: '',
    designYear: '',
    constructionPeriod: '',
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
];

// ---- Bagian di bawah ini tidak perlu diubah ----
const isUrl = (f) => /^https?:\/\//.test(f) || f.startsWith('/');
const inFolder = (slug) => (f) => (isUrl(f) ? f : `/images/projects/${slug}/${f}`);

export const projects = raw.map((p) => ({
  ...p,
  cover: inFolder(p.slug)(p.cover),
  description: p.description.trim(),
  gallery: p.gallery.map(inFolder(p.slug)),
}));
