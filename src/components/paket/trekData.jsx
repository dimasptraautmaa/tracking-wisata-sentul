const trekData = [
    {
        type: "Jalur A",
        color: "var(--green)",
        title: 'TREKKING EASY',
        waktu: "2-3 Jam",
        jarak: "2-5 KM",
        harga: "Rp 150.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20easy%20jalur%20A",
        rute: [
            "Pesawahan",
            "Sungai Sangkuriang",
            "Hutan Pinus",
            "Kebun Singkong & Kebun Sereh",
            "Perbukitan",
            "Curug Leuwi Asih"
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
        harga: "Rp 150.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20easy%20jalur%20B",
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
        harga: "Rp 150.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20easy%20jalur%20D",
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
        color: "var(--yellow)",
        title: 'TREKKING MEDIUM',
        waktu: "3-4 Jam",
        jarak: "7-8 KM",
        harga: "Rp 165.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20medium%20jalur%20A",
        rute: [
            "Pesawahan",
            "Sungai Sangkuriang",
            "Hutan Pinus",
            "Perbukitan",
            "Perkebunan Singkong",
            "Goa Agung Garunggang (lokasi wisata bersejarah)",
            "Perkebunan Serai",
            "Curug Leuwi Asih"
        ],
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
        color: "var(--yellow)",
        title: 'TREKKING MEDIUM',
        waktu: "3-4 Jam",
        jarak: "7-8 KM",
        harga: "Rp 165.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20medium%20jalur%20B",
        rute: [
            "Perkampungan Penduduk",
            "Pesawahan",
            "Perbukitan",
            "Hutan Kopi"
        ],
        wisata: {
            1: ["Curug Barong", "Leuwi Cepet", "Leuwi Liek"],
        },
        step : [
            {
                title: "Melanjutkan perjalanan menuju :",
                destination: ["Curug Baliung"]
            },
            {
                title: "Melanjutkan perjalanan menuju :",
                destination: ["Leuwi Hejo - lokasi wisata penutup"]
            },
        ],
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trek B Medium menghadirkan perjalanan dengan jalur menengah yang memadukan keindahan alam dan nuansa lokal khas Sentul. Cocok untuk Anda yang ingin merasakan petualangan ringan namun tetap penuh variasi.",
    },
    {
        type: "Jalur C",
        color: "var(--yellow)",
        title: 'TREKKING MEDIUM',
        waktu: "4-5 Jam",
        jarak: "7-8 KM",
        harga: "Rp 165.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20medium%20jalur%20C",
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
        color: "var(--oren)",
        title: 'TREKKING SEMI-EXTREME',
        waktu: "5-6 Jam",
        jarak: "12 KM",
        harga: "Rp 195.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20semi-extreme",
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
    {
        type: "",
        color: "var(--red)",
        title: 'TREKKING EXTREME',
        waktu: "6-7 Jam",
        jarak: "20 KM",
        harga: "Rp 250.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20extreme",
        rute: [
            "Perbukitan",
            "Kebun Singkong",
            "Bukit Gunung Pancar",
            "Bukit Paniisan (850 MDPL)",
            "Hutan Kopi",
            "Hutan Bambu",
            "Danau Cisadon"
        ],
        wisata: {
            1: ["Gunung Pancar", "Bukit Paniisan (850 MDPL)"],
            2: ["Curug Love", "Curug Putri", "Danau Cisadon"],
        },
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trek Extreme ini cocok untuk kamu yang siap berkeringat dan ingin merasakan petualangan alam yang utuh!",
    },
]

export default trekData;