const trekData = [
    {
        type: "Jalur A",
        color: "var(--green)",
        title: 'TREKKING EASY',
        waktu: "2-3 Jam",
        jarak: "2-5 KM",
        rute: [
            "Pesawahan",
            "Sungai Sangkuriang",
            "Hutan Pinus",
            "Kebun Singkong & Kebun Sereh",
            "Perbukitan",
            "Curug Leuwi"
        ],
        wisata: {},
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Easy Jalur A ini cocok banget buat kamu yang pengen nyobain trekking tapi tetep santai, Jalurnya ringan, tapi pemandangannya tetap luar biasa! sambil jalan santai, kamu bisa nikmatin segarnya alam dan susana yang bikin rileks.",
    },

    {
        type: "Jalur B",
        color: "var(--green)",
        title: 'TREKKING EASY',
        waktu: "2-3 Jam",
        jarak: "2-4 KM",
        rute: [
            "Perkampungan Penduduk",
            "Pesawahan",
            "Hutan Kopi",
            "Air Terjun Curug Baring",
            "Leuwi Cepet & Leuwi Lieuk",
            "Perbukitan",
            "Curug Leuwi Hejo"
        ],
        wisata: {},
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Easy Jalur B adalah cara ideal untuk memulai petualangan trekking Anda. Dirancang sebagai pengalaman santai, rute ini memungkinkan Anda menikmati keindahan alam tanpa harus mengorbankan kenyamanan dan kesenangan.",
    },

    {
        type: "Jalur D",
        color: "var(--green)",
        title: 'TREKKING EASY',
        waktu: "2-3 Jam",
        jarak: "2-4 KM",
        rute: [
            "Perkampungan Penduduk",
            "Sungai Putri Kencana",
            "Perkebunan Kopi",
            "Curug Putri Kencana",
            "Hutan Bambu",
            "Curug Cinta",
            "Hutan Kopi"
        ],
        wisata: {},
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Mulailah petualangan trekking Anda dengan Trekking Easy Jalur D, pilihan sempurna untuk Anda yang ingin menikmati alam dalam suasana santai namun tetap berkesan. Rute ini dirancang untuk pemula maupun pecinta alam yang mencari pengalaman ringan tapi tetap kaya panorama.",
    },

    // MEDIUM TREK \\
    {
        type: "Jalur A",
        color: "var(--oren)",
        title: 'TREKKING MEDIUM',
        waktu: "3-4 Jam",
        jarak: "7-8 KM",
        rute: [
            "Susur Sungai",
            "Terasering & Pesawahan",
            "Hutan Pinus",
            "Bukit",
            "Perkebunan Singkong",
            "Goa Agung Galunggung",
            "Perkebunan Serai",
            "Curug Leuwi Asih"
        ],
        wisata: {
            1: ["Goa Agung Galunggung"]
        },
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Medium Jalur A adalah pilihan ideal bagi Anda yang ingin merasakan petualangan dengan tantangan sedang, namun tetap nyaman dinikmati. Rute ini menghadirkan perpaduan alam yang indah dan rute yang variatif — cocok untuk petualang yang ingin mengeksplorasi lebih banyak, tanpa harus ekstrem.",
    },
    {
        type: "Jalur B",
        color: "var(--oren)",
        title: 'TREKKING MEDIUM',
        waktu: "3-4 Jam",
        jarak: "7-8 KM",
        rute: [
            "Susur Sungai",
            "Terasering & Pesawahan",
            "Hutan Pinus",
            "Bukit",
            "Perkebunan Singkong",
            "Goa Agung Galunggung",
            "Perkebunan Serai",
            "Curug Leuwi Asih"
        ],
        wisata: {
            1: ["Curug Bareng", "Leuwi Cepet", "Leuwi Liek"],
            2: ["Leuwi Baliung"],
            3: ["Leuwi Hejo"]
        },
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trek Medium Jalur B memberikan pengalaman menyegarkan, cocok untuk Anda yang ingin menjelajah lebih jauh, menyatu dengan alam, dan mengeksplorasi keindahan tersembunyi Sentul.",
    },
    {
        type: "Jalur C",
        color: "var(--oren)",
        title: 'TREKKING MEDIUM',
        waktu: "4-5 Jam",
        jarak: "7-8 KM",
        rute: [
            "Hutan Jaibon",
            "Perkebunan Kopi",
            "Susur Sungai",
            "Leuwi Lesung",
            "Curug Ciburial",
            "Hutan Kopi",
            "Curug Kembar & Curug Hordeng",
            "Perbukitan"
        ],
        wisata: {
            1: ["Curug Ciburial", "Curug Kembar & Curug Hordeng"],
            2: ["Leuwi Lesung"],
        },
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Medium Jalur C ini pilihan tepat bagi Anda yang mencari petualangan dengan tingkat kesulitan sedang. Rute ini menawarkan tantangan yang menggembirakan, sekaligus menyuguhkan keindahan alam Sentul yang luar biasa.",
    },
    // SEMI EXTREME \\
    {
        type: "",
        color: "var(--red)",
        title: 'TREKKING SEMI-EXTREME',
        waktu: "5-6 Jam",
        jarak: "12 KM",
        rute: [
            "Perbukitan",
            "Kebun Singkong",
            "Bukit Gunung Pancar",
            "Bukit Paniisan (850 MDPL)",
            "Hutan Kopi",
            "Hutan Bambu",
            "Curug Cibimbim",
            "Curug Ngumpet"
        ],
        wisata: {
            1: ["Gunung Pancar", "Bukit Paniisan (850 MDPL)"],
            2: ["Curug Cibimbim", "Curug Ngumpet"],
        },
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Bagi kamu yang siap menghadapi tantangan lebih serius, Trek Semi Ekstrem adalah pilihan tepat. Rute ini menyajikan medan variatif dengan elevasi yang menantang, lanskap alami yang menakjubkan, serta destinasi tersembunyi yang memuaskan jiwa petualang Anda.",
    },
]

export default trekData;