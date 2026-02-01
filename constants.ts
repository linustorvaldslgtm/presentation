import { SlideContent, SlideType } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    type: SlideType.COVER,
    title: "Geografi: Hidrosfer & Lithosfer",
    subtitle: "Danau, Erosi, dan Karst",
    body: "Sebuah tinjauan mendalam mengenai proses pembentukan danau, dinamika erosi tanah, dan bentang alam karst.",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    imageCaption: "Pemandangan Danau Alami"
  },
  {
    id: 2,
    type: SlideType.CONTENT_LEFT,
    title: "Anggota Kelompok",
    imageUrl: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format&fit=crop",
    body: "1. Shakira Aulia Fidza\n2. Dwi Ajeng Kamarti Zahira Valentisa"
  },
  {
    id: 3,
    type: SlideType.CONTENT_RIGHT,
    title: "Pengertian & Proses Danau",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    body: "Danau adalah kumpulan air tawar atau asin berukuran besar yang menempati cekungan di daratan dan tidak terhubung langsung dengan laut, kecuali melalui sungai.\n\nTerbentuk akibat adanya cekungan di permukaan bumi yang terisi air (hujan, tanah, atau sungai) melalui berbagai proses alamiah seperti tektonik, vulkanik, gletser, dan pelarutan karst."
  },
  {
    id: 4,
    type: SlideType.LIST_GRID,
    title: "Jenis Danau Berdasarkan Terbentuknya",
    imageUrl: "https://images.unsplash.com/photo-1621516843883-206e23652c7c?q=80&w=2070&auto=format&fit=crop",
    listItems: [
      { title: "Tektonik", desc: "Akibat penurunan permukaan bumi (patahan). Contoh: Danau Singkarak." },
      { title: "Vulkanik", desc: "Di kawah gunung berapi aktif/mati. Contoh: Danau Batur." },
      { title: "Tektovulkanik", desc: "Kombinasi tektonik & vulkanik. Contoh: Danau Toba." },
      { title: "Karst", desc: "Terbentuk dari pelarutan batuan kapur." },
      { title: "Glasial", desc: "Terbentuk dari pencairan es atau gletser." },
      { title: "Buatan (Waduk)", desc: "Dibuat manusia untuk irigasi/PLTA." }
    ]
  },
  {
    id: 5,
    type: SlideType.SPLIT_LIST,
    title: "Manfaat dan Fungsi Danau",
    imageUrl: "",
    listItems: [
      { title: "Ekologis", desc: "Pengatur tata air (reservoir), pengendali banjir, pengisi air tanah, habitat flora/fauna." },
      { title: "Ekonomi", desc: "Sumber irigasi, air minum, perikanan, PLTA, dan pariwisata." }
    ]
  },
  {
    id: 6,
    type: SlideType.CONTENT_LEFT,
    title: "Erosi (Pengikisan)",
    subtitle: "Proses, Penyebab, dan Dampak",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2070&auto=format&fit=crop",
    body: "Erosi adalah proses pengikisan, pelepasan, dan pemindahan material tanah atau batuan secara alami oleh agen pengangkut (air, angin, es).\n\nFaktor: Curah hujan, kemiringan lereng, vegetasi, aktivitas manusia.\nDampak: Hilangnya tanah subur, sedimentasi sungai, longsor."
  },
  {
    id: 7,
    type: SlideType.LIST_GRID,
    title: "Klasifikasi Erosi",
    imageUrl: "https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?q=80&w=2070&auto=format&fit=crop",
    listItems: [
      { title: "Abrasi (Marin)", desc: "Pengikisan pantai oleh gelombang laut." },
      { title: "Ablasi (Air)", desc: "Pengikisan oleh air mengalir (sungai/hujan)." },
      { title: "Deflasi (Angin)", desc: "Pengikisan batuan oleh angin (gurun)." },
      { title: "Glasial", desc: "Pengikisan oleh pergerakan es." },
      { title: "Berdasarkan Bentuk", desc: "Percik (Splash), Lembar (Sheet), Alur (Rill), Selokan (Gully)." }
    ]
  },
  {
    id: 8,
    type: SlideType.FULL_IMAGE,
    title: "Bentang Alam Karst",
    imageUrl: "https://images.unsplash.com/photo-1533241240379-d17e3f6a27f6?q=80&w=2070&auto=format&fit=crop",
    body: "Bentuk bentang alam khas di wilayah berbatu gamping/kapur akibat pelarutan kimia oleh air.\n\nKarakteristik: Lubang runtuhan, sungai bawah tanah, gua, dan stalaktit/stalagmit."
  },
  {
    id: 9,
    type: SlideType.COVER,
    title: "Terima Kasih",
    subtitle: "Presentasi Geografi",
    body: "Semoga materi tentang hidrosfer dan pedosfer ini bermanfaat.",
    imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop"
  }
];