/*
  ======================  PANDUAN MENGISI PROYEK  ======================
  Tidak perlu paham kode. Cukup cari nama proyek di bawah, lalu isi
  HANYA bagian di antara tanda kutip ' ' atau tanda ` `. Jangan hapus
  koma (,) di ujung baris dan jangan ubah kata di kiri titik dua.

  location            Lokasi proyek.            Contoh: 'Serpong, Tangerang Selatan'
  projectYear          Tahun desain.             Contoh: '2025'
  GFA  Masa pembangunan.         Contoh: '2025 - 2026'
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
const w = (path) =>
  `https://jonathan7cbc389f6d.wordpress.com/wp-content/uploads/${path}`;

export const categories = { residensial: "Residensial", publik: "Publik" };

const raw = [
  {
    slug: "amic-extension",
    name: "AMIC Extension",
    category: "publik",
    cover: "/images/amic_extension/Al-Madinah Islamic Center Facade (1).png",
    location: "Serpong, BSD",
    projectYear: "2026",
    GFA: "80 m²",
    description:
      "Seiring bertambahnya peserta didik, Sekolah Al-Madinah Islamic Center memerlukan penambahan ruang-ruang serta fasad baru yang lebih segar. Rancangan ini menghadirkan tampilan baru di area publik sekolah untuk meningkatkan kenyamanan peserta didik dan para wali murid dalam beraktivitas di dalam sekolah.",
    gallery: [
      "/images/amic_extension/Al-Madinah Islamic Center Facade (1).png",
      // "/images/amic_extension/Al-Madinah Islamic Center Exterior.png",
      "/images/amic_extension/Modern Green Islamic Center Entrance.png",
      "/images/amic_extension/Modern Islamic Center Entrance (1).png",
      "/images/amic_extension/Modern Islamic Center Entrance.png",
      "/images/amic_extension/Modern Rooftop School Gathering.png",
    ],
  },
  {
    slug: "aa-home",
    name: "AA Home",
    category: "residensial",
    cover:
      "/images/aa_home/Modern Living Room with Piano and Marble Accents.png",
    location: "Permata Buana, Jakarta Barat",
    projectYear: "",
    GFA: "120 m²",
    description: "",
    gallery: [
      "/images/aa_home/Modern Living Room with Piano and Marble Accents.png",
      "/images/aa_home/Luxurious Modern Living Room with Piano.png",
      "/images/aa_home/Sunlit Modern Bedroom with TV Wall.png",
      "/images/aa_home/Warm Minimalist Bedroom with City View.png",
      "/images/aa_home/Warm Minimalist Living Room with Marble Table.png",
    ],
  },
  {
    slug: "a-resto",
    name: "A Resto",
    category: "publik",
    cover: "/images/a_resto/3.png",
    location: "Maggiore Junction, Gading Serpong",
    projectYear: "2025",
    GFA: "60 m²",
    description:
      "Sebuah restoran yang menyajikan menu khas Nusantara. Nuansa yang dibuat dalam restoran ini mencerminkan identitas menunya, dengan elemen-elemen bambu dan kayu tropis, melengkapi pengalaman menyantap berbagai hidangan Indonesia.",
    gallery: [
      "/images/a_resto/3.png",
      "/images/a_resto/1.png",
      "/images/a_resto/2.png",
      "/images/a_resto/4.png",
    ],
  },
  {
    slug: "the-kasa",
    name: "The Kasablanka",
    category: "publik",
    cover: "/images/the_kasa/CONCIERGE.jpg",
    location: "Mall Kota Kasablanka, Kuningan, Jakarta Selatan",
    projectYear: "2026",
    GFA: "1000 m²",
    description:
      "Peremajaan suatu conference hall di dalam Mall Kota Kasablanka. Setelah peremajaan, ruang-ruang konferensi The Kasablanka mendapat gaya baru yang lebih segar dengan perawatan mudah, sehingga siap kembali untuk mendukung berbagai macam acara.",
    gallery: [
      "/images/the_kasa/CONCIERGE.jpg",
      "/images/the_kasa/MARTINIQUE 02.png",
      "/images/the_kasa/MARTINIQUE 01.png",
    ],
  },
  {
    slug: "onepadel-bsd",
    name: "One Padel BSD",
    category: "publik",
    cover: "/images/padel_bsd/Gated Café Terrace at Golden Hour.png",
    location: "Pagedangan, BSD",
    projectYear: "2026",
    GFA: "1200 m²",
    description:
      "Suatu pusat olahraga padel yang dirancang mixed-use dengan memadukan fungsi olahraga dan berkomunitas dalam satu tempat. Dirancang dengan bentuk yang unik dan tetap memperhatikan pencahayaan & pengudaraan alami, One Padel BSD menghadirkan pengalaman baru bagi para pecinta olahraga ini.",
    gallery: [
      "/images/padel_bsd/Gated Café Terrace at Golden Hour.png",
      "/images/padel_bsd/Golden Courtyard Café at Dusk.png",
      "/images/padel_bsd/Golden Hour at the Scandinavian Café.png",
      "/images/padel_bsd/Golden Hour Café Sports Terrace.png",
      "/images/padel_bsd/Modern Garden Café Pavilion.png",
      "/images/padel_bsd/Sunlit Modern Café Counter.png",
      "/images/padel_bsd/Sunlit Modern Café Interior.png",
      "/images/padel_bsd/Sunlit Modern Café Market Corner.png",
      "/images/padel_bsd/Sunlit Scandinavian Café Workspace.png",
      "/images/padel_bsd/Warm Modern Cafe Courtyard.png",
    ],
  },
  {
    slug: "intermark-bistro",
    name: "Intermark Bistro",
    category: "publik",
    cover: "/images/intermark_bistro/04.png",
    location: "Intermark BSD, Serpong",
    projectYear: "2023",
    GFA: "150 m²",
    description:
      "Ruang dengan ukuran terbatas bukan halangan untuk mewujudkan suatu cafe tematik. Di dalam apartemen Intermark, bistro ini menjadi ruang ketiga yang terkesan 'homy' dengan menghadirkan elemen-elemen natural dan penggunaan warna gelap, dipadukan dengan cahaya dari bukaan yang besar di satu sisi yang menciptakan kontras sekaligus membuat ruang cafe ini terasa lega.",
    gallery: [
      "/images/intermark_bistro/04.png",
      "/images/intermark_bistro/01.png",
      "/images/intermark_bistro/02.png",
      "/images/intermark_bistro/03.png",
    ],
  },
  {
    slug: "hq-am",
    name: "HQ AM - The Prominence",
    category: "publik",
    cover: "/images/hq_am/Modern Adilmart Reception Lobby.png",
    location: "The Prominence Tower, Alam Sutera",
    projectYear: "2026",
    GFA: "420 m²",
    description:
      "Rancangan interior kantor yang menunjang produktivitas dan kolaborasi di dalam ruang kerja yang membawa nilai-nilai dan identitas perusahaan.",
    gallery: [
      "/images/hq_am/Modern Adilmart Reception Lobby.png",
      "/images/hq_am/Luxurious Executive Office with City View.png",
      "/images/hq_am/Photorealistic Modern Office Pantry Lounge.png",
      "/images/hq_am/Sunlit Modern Executive Meeting Room.png",
      "/images/hq_am/Sunlit Modern Office Walkway.png",
      "/images/hq_am/Warm Modern Executive Office Lounge.png",
    ],
  },
  {
    slug: "hs-residence",
    name: "H+S Residence",
    category: "residensial",
    cover: w("2025/10/front-elev-2.jpg"),
    location: "Puspita Loka, BSD, Tangerang Selatan",
    projectYear: "2025",
    GFA: "1070 m²",
    description: `H+S Residence adalah rumah tinggal keluarga besar yang terletak di lingkungan perumahan BSD yang sejuk dan asri. Rumah ini difungsikan sebagai rumah singgah apabila keluarga besar datang dan berkumpul, sehingga di atas 3 kavling dirancang sebuah bangunan dengan ruang-ruang multifungsi, mulai dari ruang istirahat, ruang berkumpul, hingga ruang rekreasi.

Hunian ini memiliki konsep tropis futuristik dengan pendekatan khas desain tropis; bukaan besar yang ternaungi, ventilasi silang, dilengkapi dengan banyaknya perbedaan level lantai sehingga menciptakan pengalaman ruang yang dinamis dan eksploratif bagi penghuninya.`,
    gallery: [
      // '01.jpg',
    ],
  },
  {
    slug: "w-home",
    name: "W Home",
    category: "residensial",
    cover: "/images/w_home/Modern Three-Story House with BMW and Greenery.png",
    location: "Serpong, Tangerang Selatan",
    projectYear: "2025",
    GFA: "315 m²",
    description: `W Home adalah sebuah hunian di suatu kompleks perumahan yang sudah terbangun sejak tahun 90-an, dan sekarang keluarga ini menginginkan pembaruan total untuk rumahnya agar menjadi lebih nyaman dihuni dengan memaksimalkan semua potensi tapak yang ada.

Rumah ini dirancang untuk menjadi ruang hidup bagi keluarga beranggotakan 6 orang. Semua kamar keluarga ini berada di lantai 2, dan lantai dasar dikonsepkan sebagai ruang komunal untuk keluarga ini berkumpul bersama, dengan rancangan open plan agar tercipta ruang yang berkelanjutan dari ruang tamu, ruang keluarga, dan ruang makan.

Secara arsitektural, rumah ini dirancang untuk memaksimalkan pencahayaan dan penghawaan alami bahkan di lantai dasar, dengan adanya bukaan courtyard dan backyard yang memungkinkan sinar matahari tetap dapat menyinari ruang-ruang terdalam dan terjadinya ventilasi silang. Untuk ruang-ruang di lantai 2, digunakan sirip-sirip pada balkon untuk mengurangi paparan panas matahari langsung, mengingat rumah ini menghadap arah timur laut.

Area rooftop adalah area yang dikhususkan untuk hewan-hewan peliharaan Mr. W, yang telah menjadi bagian dari keluarga ini untuk waktu yang lama.

`,
    gallery: [
      "/images/w_home/Modern Three-Story House with BMW and Greenery.png",
      "/images/w_home/Serene Modern Living Room with Aquarium.png",
      "/images/w_home/Minimalist Living Room with Stone Media Wall.png",
      "/images/w_home/Warm Minimalist Kitchen with Natural Light.png",
      "/images/w_home/Kamar Tidur Mewah dengan Tirai Privasi Lembut.png",
      "/images/w_home/Minimalist Terrazzo Bathroom with Wood Accents.png",
    ],
  },
  {
    slug: "riverhome",
    name: "Riverhome 60",
    category: "residensial",
    cover: w("2025/04/render-60-3.jpg"),
    location: "Babakan Madang, Bogor",
    projectYear: "2024",
    GFA: "60 m²",
    description: `Riverhome adalah rumah tinggal berkonsep tropis minimalis yang hemat energi, efisien, dan ramah lingkungan yang terletak di kawasan Babakan Madang, Bogor. Rumah ini memiliki konsep open plan di lantai 1 dan dilengkapi dengan sebuah ruang kerja untuk mendukung gaya hidup modern, serta 2 buah kamar di lantai 2 dengan bukaan-bukaan besar yang membiarkan cahaya matahari selalu menyinari ruang-ruang dari rumah ini.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "amandita-90",
    name: "Amandita 90",
    category: "residensial",
    cover: "/images/amandita-90/00.png",
    location: "Sentul, Bogor",
    projectYear: "2024",
    GFA: "90 m²",
    description: `Amandita 90 adalah project interior show unit untuk D’Amandita Tipe 90. Desain ini mengusung tema modern luxurious karena bertempat di tipe paling eksklusif cluster perumahan D’Amandita.`,
    gallery: [
      "/images/amandita-90/01.png",
      "/images/amandita-90/02.png",
      "/images/amandita-90/03.png",
      "/images/amandita-90/04.png",
    ],
  },
  {
    slug: "c-home",
    name: "C Home",
    category: "residensial",
    cover: w("2025/12/facade-night-2.jpg"),
    location: "Jakarta Timur",
    projectYear: "2025",
    GFA: "120 m²",
    description: `Project desain arsitektur ini kami panggil dengan nama “Inner Court Home” karena keberadaannya yang menjadi pusat dari ruang-ruang yang ada di dalam hunian serta menjadi solusi menghadirkan pencahayaan dan penghawaan alami di luas lahan terbatas, sehingga rumah tetap sehat, nyaman, dan hemat energi.

Keberadaan inner court di dalam hunian kompak membantu alur ventilasi dengan prinsip perbedaan tekanan. Udara hangat yang lebih ringan akan naik ke tempat lebih tinggi hingga keluar dari rumah. Untuk menggantikannya, udara sejuk baru yang bertekanan tinggi akan masuk ke dalam bangunan. Prosesnya berlangsung sepanjang hari secara natural.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "bale-pahat",
    name: "Balé Pahat",
    category: "residensial",
    cover: w("2025/04/jalan-masuk-1.jpg"),
    location: "Bukit Dago Utara, Bandung",
    projectYear: "2021",
    GFA: "450 m²",
    description: `Balé Pahat adalah sebuah rancangan multifungsi dalam suatu kavling di Bukit Dago Utara, Bandung. Terdiri dari 2 buah bangunan, bangunan pertama yang menghadap jalan adalah sebuah galeri kecil untuk seorang seniman pahat memamerkan hasil karyanya. Bangunan kedua yang berada di belakangnya adalah rumah tinggal bagi keluarga seniman ini.

Terletak di kawasan Bukit Dago yang berkontur, rancangan ini memanfaatkan dengan sebaik-baiknya potensi yang ada dari kontur menurun yang ada di tapak. Posisi bangunan yang sifatnya lebih privat ada di bawah, sementara bangunan split-level yang menjadi ruang pamer ada di atas untuk memudahkan akses pengunjung.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "the-view-90",
    name: "The View 90",
    category: "residensial",
    cover: "/images/theview-90/00.png",
    location: "Jombang, Bintaro",
    projectYear: "2024",
    GFA: "",
    description: `The View adalah proyek kawasan rumah tinggal yang terletak di Jombang, Bintaro. Pada kesempatan kali ini, kami merancang interior untuk show unit rumah tinggal tipe 74 dan tipe 90.

Desain interior yang dirancang untuk The View ini memilki konsep luxury living, yang memungkinkan pemilik rumah untuk tinggal di ruang yang serba ada, layaknya menginap di hotel berbintang. Di dalam kamar utama dirancang untuk memiliki walk-in closet, ruang kerja, dan ruang baca, di samping ruang tidurnya.

Rumah The View juga memilki rooftop garden yang dapat digunakan untuk bersantai di sore hari sambil menikmati pemandangan dari lantai paling tinggi.`,
    gallery: [
      "/images/theview-90/00.png",
      "/images/theview-90/01.png",
      "/images/theview-90/02.png",
      "/images/theview-90/03.png",
      "/images/theview-90/04.png",
    ],
  },
  {
    slug: "mr-e-home",
    name: "E Home",
    category: "residensial",
    cover: w("2025/04/screenshot-2025-04-24-194300.png"),
    location: "BSD, Tangerang",
    projectYear: "2024",
    GFA: "60 m²",
    description: `Mr. E Home adalah sebuah unit apartemen 2 bedroom yang berada di kompleks apartemen Branz BSD, bagian dari kawasan bisnis terpadu pusat BSD City. Pada project ini, dilakukan perancangan serta pembuatan furnitur interior untuk unit apartemen yang berada di lantai 26 ini.

Ruang ini dirancang agar terlihat mewah, sesuai dengan karakteristik kawasannya, tetapi tetap fungsional mengingat luasan unit yang terbatas, sehingga terdapat banyak hidden storage di berbagai sisi ruangan.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "ol-residence",
    name: "O+L Residence",
    category: "residensial",
    cover: w("2025/04/tampak-depan-02-edit02.jpg"),
    location: "Serpong, Tangerang Selatan",
    projectYear: "2024",
    GFA: "300 m²",
    description: `Setelah tinggal di suatu perumahan selama puluhan tahun, pasangan suami-istri pemilik dari O+L Residence memutuskan untuk merenovasi total rumahnya sehingga mendapatkan ruang hidup baru yang lebih luas, modern, dan megah. Pada rancangan ini, diangkat tema mediterranean classic untuk mendapatkan kesan mewah dan timeless seperti yang diinginkan pemilik, tetapi juga berbaur di lingkungan yang juga terdapat beberapa rumah lain yang mengangkat tema mediterranean.

Warna utama yang dipilih adalah putih kekuningan, sengaja dipilih warna yang netral untuk meminimalisir gangguan terhadap visual perumahan yang sudah terbangun. Ketika malam tiba, rumah ini dipenuhi cahaya kekuningan dari dalam.

Tapak rumah ini sangatlah menarik, karena tepat di depannya terdapat taman hamparan rumput yang cukup luas. Kamar utama dengan balkon memanjang ke depan dan bukaan yang besar menjadi putusan rancangan yang dapat memaksimalkan potensi tapak ini.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "brassia-120-at-damandita",
    name: "Brassia 120",
    category: "residensial",
    cover: w("2025/04/render-120-final-edit.jpg"),
    location: "Sentul, Bogor",
    projectYear: "2024",
    GFA: "120 m²",
    description: `Brassia 120 adalah tipe eksklusif dari perumahan D’Amandita Sentul, sebuah perumahan yang terletak di puncak bukit Hambalang, Sentul yang dilalui oleh Jalan Puncak 2. Tipe ini menghadirkan ruang hidup yang paling memadai dengan rancang bangun berkonsep natural, sehingga keberadaan arsitektur bangunan ini tampak selaras dengan lingkungan pegunungannya. Ini terwujud dari konsep arsitektur tropis, dilengkapi dengan seleksi material bertema “earth-tone”.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "cj-home",
    name: "CJ Home",
    category: "residensial",
    cover: "/images/cj-home/00.png",
    location: "DePark BSD",
    projectYear: "2025",
    GFA: "550 m²",
    description: `CJ Home adalah sebuah project renovasi total yang dilakukan oleh pemilik rumah di kawasan DePark BSD. Mengusung konsep modern-minimalis dengan banyak ruang terbuka, CJ Home menjadi rumah yang tidak hanya nyaman ditinggali, tetapi juga bersifat ‘rekreatif’, karena adanya kantong-kantong hijau di dalam tapak.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "r-home",
    name: "R Home",
    category: "residensial",
    cover: w("2025/04/render-final-day-6-crop-edited.jpg"),
    location: "Kelapa Gading, Jakarta Utara",
    projectYear: "2012",
    GFA: "625 m²",
    description: `R Home adalah sebuah hunian bernuansa minimalis yang kuat, dirancang sedemikian supaya tidak memerlukan banyak perawatan di masa mendatang. Aksen yang ditonjolkan dari rumah ini adalah keberadaan kanopi teras berwarna merah yang sangat ‘stand-out’ dibandingkan bidang-bidang lain, sehingga membuat hunian ini sangat dapat dengan mudah dikenali dari kejauhan.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "hj-residence",
    name: "H+J Residence",
    category: "residensial",
    cover: "/images/hj_res/00.png",
    location: "Alam Sutera, Tangerang Selatan",
    projectYear: "2024",
    GFA: "535 m²",
    description: `H+J Residence adalah rancangan rumah tinggal untuk sebuah keluarga 4 orang yang menginginkan rumah baru untuk ditinggali. Keluarga ini merasa sangat nyaman tinggal di lingkungan Alam Sutera, sehingga untuk rumah baru ini pun tetap berada di Alam Sutera, terletak di cluster yang lebih strategis.

Rumah ini pun dirancang ‘familiar’ untuk penghuninya, dengan besaran ruang yang hampir sama, tetapi perbedaannya terletak pada desain bukaan-bukaan yang lebih besar dan tampak muka yang lebih modern, sehingga keluarga ini dapat merasa lebih nyaman tinggal di rumah barunya.

Satu hal yang paling signifikan dari rancangan rumah ini adalah ‘minim maintenance’. Pemilik rumah ini tidak menginginkan banyak perawatan yang harus dilakukan, sehingga semua aspek rancangan, baik dari bentuk sampai pemilihan material adalah yang tahan lama, simpel, dan fungsional.`,
    gallery: [
      "/images/hj_res/00.png",
      "/images/hj_res/01.png",
      "/images/hj_res/GUEST.png",
      "/images/hj_res/LIVING.png",
      "/images/hj_res/DINING.png",
    ],
  },
  {
    slug: "amandita-60",
    name: "Amandita 60",
    category: "residensial",
    cover: "/images/amandita-60/00.png",
    location: "Sentul, Bogor",
    projectYear: "2024",
    GFA: "60 m²",
    description: `Amandita 60 adalah project interior show unit untuk D’Amandita Tipe 60. Desain ini mengusung tema japandi-style untuk mengoptimalkan baik fungsi maupun estetika, serta menciptakan nuansa terang dan luas untuk sebuah hunian mungil dengan sebuah attic yang memiliki view indah ke arah pegunungan di Sentul.`,
    gallery: [
      "/images/amandita-60/00.png",
      "/images/amandita-60/01.png",
      "/images/amandita-60/02.png",
      "/images/amandita-60/03.png",
      "/images/amandita-60/04.png",
    ],
  },
  {
    slug: "a-home",
    name: "A Home",
    category: "residensial",
    cover: w("2025/04/detail-lounge.jpg"),
    location: "Alam Sutera, Tangerang Selatan",
    projectYear: "2010",
    GFA: "320 m²",
    description: `A Home adalah salah satu karya paling terdahulu dari studio kami, yang terletak di salah satu cluster di Alam Sutera, Tangerang Selatan. Rumah ini mengusung konsep tropis-minimalis. Letaknya di kavling sudut membuatnya memiliki dua muka, karakter inilah yang ditonjolkan dalam gubahan bentuk dan fasad, yaitu dua wajah yang sama kuat dan menghadap ke arah berbeda, tetapi disatukan oleh ruang lounge yang menonjol di antara keduanya.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "birdnest-cafe",
    name: "Birdnest Cafe",
    category: "publik",
    cover: "/images/cafe-birdnest/00.png",
    location: "BSD, Tangerang Selatan",
    projectYear: "2023",
    GFA: "750 m²",
    description: `Birdnest Cafe adalah sebuah compound space yang menggabungkan fungsi cafe dan ruang temu, dengan ciri khas ‘wedangan’ ala Surakarta, semuanya dikemas dalam rancang bangun yang fungsional dengan wajah modern.

Perencanaan tapak dibuat dengan adanya satu bangunan utama di tengah, diikuti dengan bangunan-bangunan berkonsep semi-outdoor yang mengelilingi bangunan utama, dihubungkan dengan jalur beratap yang dapat dilalui pengunjung dengan berjalan kaki. Di ujung belakang terdapat sebuah communal space yang dapat digunakan untuk berbagai macam acara skala kecil.`,
    gallery: [
      "/images/cafe-birdnest/00.png",
      "/images/cafe-birdnest/01.png",
      "/images/cafe-birdnest/02.png",
      "/images/cafe-birdnest/03.png",
      "/images/cafe-birdnest/04.png",
      "/images/cafe-birdnest/05.png",
    ],
  },
  {
    slug: "griya-anabatic",
    name: "Griya Anabatic Dormitory",
    category: "publik",
    cover: w("2025/04/griya-anabatic-apartment-view-03-1.jpg"),
    location: "Legok, Tangerang",
    projectYear: "2016",
    GFA: "6.800 m²",
    description: `Sebuah dormitori yang dirancang khusus untuk karyawan Anabatic Group, Griya Anabatic yang terletak di Jl. Raya Legok ini menawarkan hunian yang sehat, nyaman, dan asri. Fasilitas yang dapat diakses oleh penghuni antara lain food park, lapangan olahraga, dan area komersial.

Rancangan tapak memastikan keamanan dan kemudahan akses bagi semua jenis kendaraan dan bagi pejalan kaki. Di sisi barat dari gedung dormitori, terdapat gedung service area untuk utilitas bangunan yang ditutup oleh green wall yang membuat suasana menjadi rindang.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "gki-nusa-loka",
    name: "GKI Nusa Loka BSD",
    category: "publik",
    cover: w("2025/04/pucuk.jpg"),
    location: "BSD, Tangerang Selatan",
    projectYear: "2023",
    GFA: "900 m²",
    description: `Guna membantu mengatasi masalah kekurangan kapasitas gereja di gedung yang lama, sekumpulan umat GKI Serpong memutuskan untuk melakukan perluasan dengan membangun gedung gereja baru di cluster yang berbeda di kawasan BSD City. Lahan dari gereja baru ini adalah lahan yang sudah disiapkan pengembang dengan peruntukan sarana peribadatan.

Rancangan gereja baru ini terinspirasi dari bentuk kapel, mengingat luas lahan yang terbatas, sehingga kapasitas umat yang ditampung tidak sebanyak pada gedung gereja sebelumnya. Gereja ini juga langsung menghadap Jalan Tol Jakarta-Serpong yang dilintasi rel kereta komuter, sehingga diperlukan penanganan khusus dalam desain, sehingga menciptakan akustik yang baik untuk dilangsungkannya acara peribadatan di dalam gedung. Untuk mempertegas fungsinya sebagai gereja, gedung ini didesain memiliki salib yang besar yang memiliki peran juga untuk menopang rangka segitiganya. Secara filosofis, ini berarti kehidupan gereja hanya akan dapat berdiri ketika dilandasi oleh salib yang dipikulnya.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "gereja-katolik-st-polikarpus",
    name: "Gereja Katolik St. Polikarpus",
    category: "publik",
    cover: w("2025/04/p8213114.jpg"),
    location: "Jl. Nurdin, Grogol",
    projectYear: "2011",
    GFA: "",
    description: `Gereja Katolik St. Polikarpus adalah rumah ibadah bagi umat Paroki Grogol. Gereja ini adalah bangunan ketiga milik paroki untuk menampung tambahan 700 umat yang sudah tidak dapat diakomodasi di bangunan gereja utama.

Gereja ini dirancang dengan gaya yang berbeda dari gedung gereja utama untuk menciptakan identitas sendiri dengan gaya neo-klasik yang menghadirkan suasana agung dan megah dengan perhatian kepada penggunaan material-material baru yang berkelanjutan.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "marketing-gallery-damandita",
    name: "Marketing Gallery D'Amandita",
    category: "publik",
    cover: w("2025/04/enscape_2024-04-25-01-04-43.jpg"),
    location: "",
    projectYear: "",
    GFA: "",
    description: ``,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
  {
    slug: "penara",
    name: "Penara Co-Living",
    category: "publik",
    cover: "/images/cove-penara/00.png",
    location: "Denpasar, Bali",
    projectYear: "2023",
    GFA: "850 m²",
    description: `Penara Co-Living adalah sebuah boarding home yang dikhususkan bagi pekerja dan mahasiswa yang berkegiatan di daerah Denpasar, Bali. Sebagai boarding home 4 lantai, selain fungsional dan estetis, bangunan ini dirancang memiliki fasilitas dapur bersama dan semi-outdoor communal space di lantai dasar sebagai titik kumpul seluruh penghuni boarding home, menciptakan suasana akrab dan guyub.`,
    gallery: [
      "/images/cove-penara/00.png",
      "/images/cove-penara/01.jpeg",
      "/images/cove-penara/02.jpeg",
      "/images/cove-penara/03.jpeg",
      "/images/cove-penara/04.jpeg",
      "/images/cove-penara/05.jpeg",
      "/images/cove-penara/06.jpeg",
    ],
  },
  {
    slug: "masjid-al-ammana",
    name: "Masjid Al-Ammana",
    category: "publik",
    cover: "/images/al-ammana/00.png",
    location: "Sentul, Bogor",
    projectYear: "2024",
    GFA: "1200 m²",
    description: `Masjid Jami’ Al-Ammana adalah sebuah masjid yang diperuntukkan bagi warga D’Amandita Sentul dan umat yang sedang melintas di Jalan Alternatif Puncak 2. Masjid ini memiliki kapasitas sekitar 1000 umat dengan lahan parkir dan fasilitas penunjang yang memadai.

Desain fasad masjid ini terinspirasi dari peristiwa nuzulnya ayat-ayat Al-Quran yang turun secara bertahap sebanyak 30 juz, inilah yang menjadi tiga puluh modul fasad yang dirancang dengan bentuk utama persegi panjang seperti halaman ayat-ayat yang terkandung dalam tiap juz.

Selain itu, ornamentasi lain-lain kental dengan nuanasa geometris, selaras dengan kultur yang berkembang dalam tradisi islam.`,
    gallery: [
      "/images/al-ammana/00.png",
      "/images/al-ammana/01.png",
      "/images/al-ammana/02.png",
      "/images/al-ammana/03.png",
    ],
  },
  {
    slug: "hillside-sanctuary",
    name: "Hillside Sanctuary, Club House",
    category: "publik",
    cover: w("2025/04/clubhouse-3.jpg"),
    location: "Sentul, Bogor",
    projectYear: "2024",
    GFA: "",
    description: `Sebuah gedung komunal yang berada di kawasan perumahan D’Amandita Sentul, dirancang untuk melengkapi kebutuhan penghuni serta tamu dari berbagai tempat mengingat lokasinya yang strategis di sepanjang jalan rencana, Jalan Puncak 2. Bangunan ini dirancang untuk menjadi sebuah ruang aman, ruang yang terletak di lereng perbukitan Sentul. Oleh karena itu, bentuk bangunan ini seolah-olah ‘melingkupi’ semua aktivitas di dalamnya.

Dengan memanfaatkan kontur tanah asli, didapatkan rancang ruang yang berbeda-beda di setiap levelnya. Bangunan ini dapat terlihat 2 lantai dari depan, tapi menjadi 4 lantai jika dilihat dari dalam, dilengkapi dengan berbagai faslitas seperti meeting room, gymnastics, tennis court, dan jogging track, serta infinity pool dengan view area perbukitan di sekitar Sentul, Bogor.`,
    gallery: [
      // '01.jpg',
      // '02.jpg',
    ],
  },
];

// ---- Bagian di bawah ini tidak perlu diubah ----
const isUrl = (f) => /^https?:\/\//.test(f) || f.startsWith("/");
const inFolder = (slug) => (f) =>
  isUrl(f) ? f : `/images/projects/${slug}/${f}`;

// Urutan: tahun terbaru dulu. Proyek tanpa tahun ada di paling akhir.
const yearOf = (p) => parseInt(p.projectYear, 10) || 0;

export const projects = raw
  .map((p) => ({
    ...p,
    cover: inFolder(p.slug)(p.cover),
    description: p.description.trim(),
    gallery: p.gallery.map(inFolder(p.slug)),
  }))
  .sort((a, b) => yearOf(b) - yearOf(a));
