// ==========================================
// 1. BANK DATA UTAMA
// ==========================================

const kanaData = {
    hiragana: [
        { char: "あ", romaji: "a" }, { char: "い", romaji: "i" }, { char: "う", romaji: "u" }, { char: "え", romaji: "e" }, { char: "お", romaji: "o" },
        { char: "か", romaji: "ka" }, { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }, { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" }
    ],
    katakana: [
        { char: "ア", romaji: "a" }, { char: "イ", romaji: "i" }, { char: "ウ", romaji: "u" }, { char: "エ", romaji: "e" }, { char: "オ", romaji: "o" },
        { char: "カ", romaji: "ka" }, { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" }, { char: "ケ", romaji: "ke" }, { char: "コ", romaji: "ko" }
    ]
};

const kanjiData = {
    N5: [
        { kanji: "人", kunyomi: "ひと (hito)", onyomi: "ジン (JIN), ニン (NIN)", meaning: "Orang" },
    { kanji: "大", kunyomi: "おお-きい (oo-kii)", onyomi: "ダイ (DAI), タイ (TAI)", meaning: "Besar" },
    { kanji: "一", kunyomi: "ひと-つ (hito-tsu)", onyomi: "イチ (ICHI), イツ (ITSU)", meaning: "Satu" },
    { kanji: "分", kunyomi: "わ-かる (wa-karu)", onyomi: "フン (FUN), ブ (BU), プン (PUN)", meaning: "Bagian / Menit" },
    { kanji: "見", kunyomi: "み-る (mi-ru)", onyomi: "ケン (KEN)", meaning: "Melihat" },
    { kanji: "出", kunyomi: "で-る (de-ru), だ-す (da-su)", onyomi: "シュツ (SHUTSU)", meaning: "Keluar" },
    { kanji: "日", kunyomi: "ひ (hi), び (bi)", onyomi: "ニチ (NICHI), ジツ (JITSU)", meaning: "Hari / Matahari" },
    { kanji: "行", kunyomi: "い-く (i-ku), おこな-う (okona-u)", onyomi: "コウ (KOU), ギョウ (GYOU)", meaning: "Pergi" },
    { kanji: "前", kunyomi: "まえ (mae)", onyomi: "ゼン (ZEN)", meaning: "Depan / Sebelum" },
    { kanji: "時", kunyomi: "とき (toki)", onyomi: "ジ (JI)", meaning: "Waktu / Jam" },
    { kanji: "生", kunyomi: "い-きる (i-kiru), う-まれる (u-mareru)", onyomi: "セイ (SEI), ジョウ (JOU)", meaning: "Hidup / Lahir" },
    { kanji: "本", kunyomi: "moto", onyomi: "ホン (HON)", meaning: "Buku / Asal" },
    { kanji: "中", kunyomi: "なか (naka)", onyomi: "チュウ (CHUUK), ジュウ (JUU)", meaning: "Dalam / Tengah" },
    { kanji: "今", kunyomi: "いま (ima)", onyomi: "コン (KON), キン (KIN)", meaning: "Sekarang" },
    { kanji: "間", kunyomi: "あいだ (aida), ま (ma)", onyomi: "カン (KAN),ケン (KEN)", meaning: "Interval / Antara" },
    { kanji: "年", kunyomi: "とし (toshi)", onyomi: "ネン (NEN)", meaning: "Tahun" },
    { kanji: "子", kunyomi: "こ (ko)", onyomi: "シ (SHI), ス (SU)", meaning: "Anak" },
    { kanji: "長", kunyomi: "なが-い (naga-i)", onyomi: "チョウ (CHOU)", meaning: "Panjang / Pemimpin" },
    { kanji: "上", kunyomi: "うえ (ue), あ-がる (a-garu)", onyomi: "ジョウ (JOU)", meaning: "Atas" },
    { kanji: "入", kunyomi: "はい-る (hai-ru), い-れる (i-reru)", onyomi: "ニュウ (NYUU)", meaning: "Masuk" },
    { kanji: "後", kunyomi: "あと (ato), のち (nochi), うしろ (ushiro)", onyomi: "ゴ (GO), コウ (KOU)", meaning: "Belakang / Setelah" },
    { kanji: "気", kunyomi: "-", onyomi: "キ (KI), ケ (KE)", meaning: "Semangat / Perasaan" },
    { kanji: "来", kunyomi: "く-る (ku-ru), き-ます (ki-masu)", onyomi: "ライ (RAI)", meaning: "Datang" },
    { kanji: "話", kunyomi: "はな-す (hana-su), はなし (hanashi)", onyomi: "ワ (WA)", meaning: "Bicara / Cerita" },
    { kanji: "女", kunyomi: "おんな (onna)", onyomi: "ジョ (JO), ニョ (NYO)", meaning: "Wanita" },
    { kanji: "国", kunyomi: "くに (kuni)", onyomi: "コク (KOKU)", meaning: "Negara" },
    { kanji: "金", kunyomi: "かね (kane)", onyomi: "キン (KIN), コン (KON)", meaning: "Emas / Uang" },
    { kanji: "高", kunyomi: "たか-い (taka-i)", onyomi: "コウ (KOU)", meaning: "Tinggi / Mahal" },
    { kanji: "下", kunyomi: "した (shita), さ-げる (sa-geru)", onyomi: "カ (KA), ゲ (GE)", meaning: "Bawah" },
    { kanji: "学", kunyomi: "まな-ぶ (mana-bu)", onyomi: "ガク (GAKU)", meaning: "Belajar" },
    { kanji: "先", kunyomi: "さき (saki)", onyomi: "セン (SEN)", meaning: "Sebelum / Dahulu" },
    { kanji: "外", kunyomi: "そと (soto), ほか (hoka)", onyomi: "ガイ (GAI), ゲ (GE)", meaning: "Luar" },
    { kanji: "何", kunyomi: "なに (nani), なん (nan)", onyomi: "カ (KA)", meaning: "Apa" },
    { kanji: "男", kunyomi: "おとこ (otoko)", onyomi: "ダン (DAN),ナン (NAN)", meaning: "Laki-laki" },
    { kanji: "名", kunyomi: "な (na)", onyomi: "メイ (MEI), ミョウ (MYOU)", meaning: "Nama" },
    { kanji: "月", kunyomi: "つき (tsuki)", onyomi: "ゲツ (GETSU), ガツ (GATSU)", meaning: "Bulan" },
    { kanji: "小", kunyomi: "ちい-さい (chii-sai), こ (ko)", onyomi: "ショウ (SHOU)", meaning: "Kecil" },
    { kanji: "聞", kunyomi: "き-く (ki-ku)", onyomi: "ブン (BUN), モン (MON)", meaning: "Mendengar" },
    { kanji: "食", kunyomi: "た-べる (ta-beru)", onyomi: "ショク (SHOKU), ジキ (JIKI)", meaning: "Makan" },
    { kanji: "書", kunyomi: "か-く (ka-ku)", onyomi: "ショ (SHOU)", meaning: "Menulis" },
    { kanji: "山", kunyomi: "やま (yama)", onyomi: "サン (SAN)", meaning: "Gunung" },
    { kanji: "電", kunyomi: "-", onyomi: "デン (DEN)", meaning: "Listrik" },
    { kanji: "二", kunyomi: "ふた-つ (futa-tsu)", onyomi: "ニ (NI)", meaning: "Dua" },
    { kanji: "車", kunyomi: "くるま (kuruma)", onyomi: "シャ (SHA)", meaning: "Mobil / Roda" },
    { kanji: "水", kunyomi: "みず (mizu)", onyomi: "スイ (SUI)", meaning: "Air" },
    { kanji: "木", kunyomi: "き (ki)", onyomi: "モク (MOKU), ボク (BOKU)", meaning: "Pohon / Kayu" },
    { kanji: "母", kunyomi: "はは (haha)", onyomi: "ボ (BO)", meaning: "Ibu" },
    { kanji: "校", kunyomi: "-", onyomi: "コウ (KOU)", meaning: "Sekolah" },

    // --- HALAMAN 2 (Foto 2) ---
    { kanji: "父", kunyomi: "ちち (chichi)", onyomi: "フ (FU)", meaning: "Ayah" },
    { kanji: "白", kunyomi: "しろ-い (shiro-i)", onyomi: "ハク (HAKU), ビャク (BYAKU)", meaning: "Putih" },
    { kanji: "語", kunyomi: "かた-る (kata-ru)", onyomi: "ゴ (GO)", meaning: "Bahasa / Kata" },
    { kanji: "十", kunyomi: "とお (too)", onyomi: "ジュウ (JUU), ジッ (JIK)", meaning: "Sepuluh" },
    { kanji: "万", kunyomi: "-", onyomi: "マン (MAN), バン (BAN)", meaning: "Sepuluh Ribu" },
    { kanji: "友", kunyomi: "とも (tomo)", onyomi: "ユウ (YUU)", meaning: "Teman" },
    { kanji: "川", kunyomi: "かわ (kawa)", onyomi: "セン (SEN)", meaning: "Sungai" },
    { kanji: "三", kunyomi: "みッ-つ (mit-tsu)", onyomi: "サン (SAN)", meaning: "Tiga" },
    { kanji: "天", kunyomi: "あまつ (amatsu)", onyomi: "テン (TEN)", meaning: "Surga / Langit" },
    { kanji: "東", kunyomi: "ひがし (higashi)", onyomi: "トウ (TOU)", meaning: "Timur" },
    { kanji: "半", kunyomi: "なか-ば (naka-ba)", onyomi: "ハン (HAN)", meaning: "Setengah" },
    { kanji: "北", kunyomi: "きた (kita)", onyomi: "ホク (HOKU)", meaning: "Utara" },
    { kanji: "火", kunyomi: "ひ (hi)", onyomi: "カ (KA)", meaning: "Api" },
    { kanji: "土", kunyomi: "つち (tsuchi)", onyomi: "ド (DO), ト (TO)", meaning: "Tanah" },
    { kanji: "南", kunyomi: "みなみ (minami)", onyomi: "ナン (NAN)", meaning: "Selatan" },
    { kanji: "千", kunyomi: "ち (chi)", onyomi: "セン (SEN)", meaning: "Seribu" },
    { kanji: "西", kunyomi: "にし (nishi)", onyomi: "セイ (SEI), サイ (SAI)", meaning: "Barat" },
    { kanji: "毎", kunyomi: "-", onyomi: "マイ (MAI)", meaning: "Setiap" },
    { kanji: "休", kunyomi: "やす-む (yasu-mu)", onyomi: "キュウ (KYUU)", meaning: "Istirahat" },
    { kanji: "八", kunyomi: "やッ-つ (yat-tsu)", onyomi: "ハチ (HACHI)", meaning: "Delapan" },
    { kanji: "読", kunyomi: "よ-む (yo-mu)", onyomi: "ドク (DOKU)", meaning: "Membaca" },
    { kanji: "五", kunyomi: "いつ-つ (itsu-tsu)", onyomi: "ゴ (GO)", meaning: "Lima" },
    { kanji: "四", kunyomi: "よッ-つ (yot-tsu), よん (yon)", onyomi: "シ (SHI)", meaning: "Empat" },
    { kanji: "百", kunyomi: "-", onyomi: "ヒャク (HYAKU)", meaning: "Ratus" },
    { kanji: "円", kunyomi: "まる-い (maru-i)", onyomi: "エン (EN)", meaning: "Yen / Lingkaran" },
    { kanji: "午", kunyomi: "-", onyomi: "ゴ (GO)", meaning: "Siang / Tengah Hari" },
    { kanji: "七", kunyomi: "なな-つ (nana-tsu)", onyomi: "シチ (SHICHI)", meaning: "Tujuh" },
    { kanji: "左", kunyomi: "ひだり (hidari)", onyomi: "サ (SA)", meaning: "Kiri" },
    { kanji: "右", kunyomi: "みぎ (migi)", onyomi: "ウ (U), ユウ (YUU)", meaning: "Kanan" },
    { kanji: "雨", kunyomi: "あめ (ame)", onyomi: "ウ (U)", meaning: "Hujan" },
    { kanji: "六", kunyomi: "むッ-つ (mut-tsu)", onyomi: "ロク (ROKU)", meaning: "Enam" },
    { kanji: "九", kunyomi: "ここの-つ (kokono-tsu)", onyomi: "キュウ (KYUU), ク (KU)", meaning: "Sembilan" } 
            ],
    N4: [
       { kanji: "事", kunyomi: "こと (koto)", onyomi: "ジ (JI), ズ (ZU)", arti: "Hal / Masalah / Urusan" },
    { kanji: "会", kunyomi: "あ-う (a-u)", onyomi: "カイ (KAI), エ (E)", arti: "Bertemu / Pertemuan" },
    { kanji: "自", kunyomi: "みずか-ら (mizuka-ra)", onyomi: "ジ (JI), シ (SHI)", arti: "Diri sendiri" },
    { kanji: "手", kunyomi: "て (te), た (ta)", onyomi: "シュ (SHU), ズ (ZU)", arti: "Tangan" },
    { kanji: "言", kunyomi: "い-う (i-u), こと (koto)", onyomi: "ゲン (GEN), ゴン (GON)", arti: "Katakan / Kata" },
    { kanji: "者", kunyomi: "もの (mono)", onyomi: "シャ (SHA)", arti: "Seseorang / Orang" },
    { kanji: "同", kunyomi: "おな-じ (ona-ji)", onyomi: "ドウ (DOU)", arti: "Sama" },
    { kanji: "方", kunyomi: "かた (kata)", onyomi: "ホウ (HOU)", arti: "Arah / Cara / Orang" },
    { kanji: "目", kunyomi: "め (me), ま (ma)", onyomi: "モク (MOKU), ボク (BOKU)", arti: "Mata" },
    { kanji: "理", kunyomi: "kotowari", onyomi: "リ (RI)", arti: "Alasan / Logika" },
    { kanji: "力", kunyomi: "ちから (chikara)", onyomi: "リョク (RYOKU), リキ (RIKI)", arti: "Kekuatan" },
    { kanji: "場", kunyomi: "ば (ba)", onyomi: "ジョウ (JOU)", arti: "Tempat / Lokasi" },
    { kanji: "思", kunyomi: "おも-う (omo-u)", onyomi: "シ (SHI)", arti: "Berpikir / Mengira" },
    { kanji: "家", kunyomi: "いえ (ie), や (ya), うち (uchi)", onyomi: "カ (KA), ケ (KE)", arti: "Rumah / Keluarga" },
    { kanji: "動", kunyomi: "うご-く (ugo-ku)", onyomi: "ドウ (DOU)", arti: "Bergerak" },
    { kanji: "地", kunyomi: "-", onyomi: "チ (CHI), ジ (JI)", arti: "Tanah / Bumi" },
    { kanji: "体", kunyomi: "karada", onyomi: "タイ (TAI), テイ (TEI)", arti: "Tubuh" },
    { kanji: "作", kunyomi: "tsuku-ru", onyomi: "サク (SAKU), サ (SA)", arti: "Membuat" },
    { kanji: "持", kunyomi: "mo-tsu", onyomi: "ジ (JI)", arti: "Membawa / Memegang" },
    { kanji: "明", kunyomi: "aka-rui, aki-raka", onyomi: "メイ (MEI), ミョウ (MYOU)", arti: "Cerah / Terang" },
    { kanji: "私", kunyomi: "watashi, watakushi", onyomi: "シ (SHI)", arti: "Saya / Pribadi" },
    { kanji: "発", kunyomi: "-", onyomi: "ハツ (HATSU), ホツ (HOTSU)", arti: "Berangkat / Memancar" },
    { kanji: "心", kunyomi: "kokoro", onyomi: "シン (SHIN)", arti: "Hati / Jantung" },
    { kanji: "意", kunyomi: "-", onyomi: "イ (I)", arti: "Niat / Ide / Maksud" },
    { kanji: "度", kunyomi: "tabi", onyomi: "ド (DO), ト (TO), タク (TAKU)", arti: "Derajat / Kali" },
    { kanji: "知", kunyomi: "shi-ru", onyomi: "チ (CHI)", arti: "Tahu / Mengenal" },
    { kanji: "立", kunyomi: "ta-tsu", onyomi: "リツ (RITSU), リュウ (RYUU)", arti: "Berdiri" },
    { kanji: "通", kunyomi: "too-ru, kayo-u", onyomi: "ツウ (TSUU), ツ (TSU)", arti: "Lalu lintas / Melewati" },
    { kanji: "不", kunyomi: "-", onyomi: "フ (FU), ブ (BU)", arti: "Tidak / Negatif" },
    { kanji: "員", kunyomi: "-", onyomi: "イン (IN)", arti: "Anggota / Karyawan" },
    { kanji: "物", kunyomi: "mono", onyomi: "ブツ (BUTSU), モツ (MOTSU)", arti: "Benda / Barang" },
    { kanji: "的", kunyomi: "mato", onyomi: "テキ (TEKI)", arti: "Mata banteng / Sasaran" },
    { kanji: "問", kunyomi: "to-u", onyomi: "モン (MON)", arti: "Pertanyaan / Bertanya" },
    { kanji: "用", kunyomi: "mochi-iru", onyomi: "ヨウ (YOU)", arti: "Gunakan / Keperluan" },
    { kanji: "新", kunyomi: "atara-shii, ara-ta", onyomi: "シン (SHIN)", arti: "Baru" },
    { kanji: "田", kunyomi: "ta", onyomi: "デン (DEN)", arti: "Sawah" },
    { kanji: "代", kunyomi: "ka-waru, yo", onyomi: "ダイ (DAI), タイ (TAI)", arti: "Pengganti / Generasi" },
    { kanji: "世", kunyomi: "yo", onyomi: "セイ (SEI), セ (SE)", arti: "Dunia / Generasi" },
    { kanji: "死", kunyomi: "shi-nu", onyomi: "シ (SHI)", arti: "Mati / Kematian" },
    { kanji: "開", kunyomi: "ahi-raku, a-keru", onyomi: "カイ (KAI)", arti: "Buka" },
    { kanji: "社", kunyomi: "yashiro", onyomi: "シャ (SHA)", arti: "Perusahaan / Kuil" },
    { kanji: "無", kunyomi: "na-i", onyomi: "ム (MU), ブ (BU)", arti: "Ketiadaan / Tanpa" },
    { kanji: "強", kunyomi: "tsuyo-i, shi-reru", onyomi: "キョウ (KYOU), ゴウ (GOU)", arti: "Kuat" },
    { kanji: "教", kunyomi: "oshi-eru, oswa-ru", onyomi: "キョウ (KYOU)", arti: "Mengajar / Agama" },
    { kanji: "野", kunyomi: "no", onyomi: "ヤ (YA), ショ (SHO)", arti: "Dataran / Lapangan" },
    { kanji: "正", kunyomi: "tada-shii, masa", onyomi: "セイ (SEI), ショウ (SHOU)", arti: "Benar / Tepat" },
    { kanji: "業", kunyomi: "waza", onyomi: "ギョウ (GYOU), ゴウ (GOU)", arti: "Bisnis / Kerjaan" },
    { kanji: "題", kunyomi: "-", onyomi: "ダイ (DAI)", arti: "Topik / Judul" },

    // --- HALAMAN 2 (Foto 2) ---
    { kanji: "使", kunyomi: "tsuka-u", onyomi: "シ (SHI)", arti: "Menggunakan" },
    { kanji: "考", kunyomi: "kanga-eru", onyomi: "コウ (KOU)", arti: "Pertimbangan / Berpikir" },
    { kanji: "界", kunyomi: "-", onyomi: "カイ (KAI)", arti: "Dunia / Batas" },
    { kanji: "別", kunyomi: "waka-reru", onyomi: "ベツ (BETSU)", arti: "Pisahkan / Berbeda" },
    { kanji: "元", kunyomi: "moto", onyomi: "ゲン (GEN), ガン (GAN)", arti: "Awal / Asal / Sehat" },
    { kanji: "以", kunyomi: "mo-tte", onyomi: "イ (I)", arti: "Dengan / Karena / Dari" },
    { kanji: "待", kunyomi: "ma-tsu", onyomi: "タイ (TAI)", arti: "Menunggu" },
    { kanji: "安", kunyomi: "yasu-i", onyomi: "アン (AN)", arti: "Murah / Bersantai / Aman" },
    { kanji: "近", kunyomi: "chika-i", onyomi: "キン (KIN), コン (KON)", arti: "Dekat" },
    { kanji: "真", kunyomi: "ma, makoto", onyomi: "シン (SHIN)", arti: "Benar / Sungguh" },
    { kanji: "少", kunyomi: "suku-nai, suko-shi", onyomi: "ショウ (SHOU)", arti: "Sedikit / Beberapa" },
    { kanji: "切", kunyomi: "ki-ru", onyomi: "セツ (SETSU), サイ (SAI)", arti: "Potong / Penting" },
    { kanji: "主", kunyomi: "nushi, omo", onyomi: "シュ (SHU), ス (SU)", arti: "Tuan / Utama" },
    { kanji: "終", kunyomi: "owa-ru", onyomi: "シュウ (SHUU)", arti: "Akhir / Selesai" },
    { kanji: "楽", kunyomi: "tano-shii, tano-shimu", onyomi: "ガク (GAKU), ラク (RAKU)", arti: "Musik / Senang" },
    { kanji: "音", kunyomi: "oto, ne", onyomi: "オン (ON), イン (IN)", arti: "Suara / Bunyi" },
    { kanji: "道", kunyomi: "michi", onyomi: "ドウ (DOU), トウ (TOU)", arti: "Jalan raya / Jalur" },
    { kanji: "着", kunyomi: "ki-ru, tsu-ku", onyomi: "チャク (CHAKU), チャ (CHA)", arti: "Tiba / Memakai" },
    { kanji: "親", kunyomi: "oya, shita-shii", onyomi: "シン (SHIN)", arti: "Orang tua / Akrab" },
    { kanji: "始", kunyomi: "haji-meru", onyomi: "シ (SHI)", arti: "Mulai" },
    { kanji: "多", kunyomi: "oo-i", onyomi: "タ (TA)", arti: "Banyak" },
    { kanji: "早", kunyomi: "haya-i", onyomi: "ソウ (SOU), サッ (SAT)", arti: "Awal / Cepat" },
    { kanji: "仕", kunyomi: "tsuka-eru", onyomi: "シ (SHI), ジ (JI)", arti: "Menghadiri / Melayani" },
    { kanji: "海", kunyomi: "umi", onyomi: "カイ (KAI)", arti: "Laut" },
    { kanji: "悪", kunyomi: "waru-i", onyomi: "アク (AKU), オ (O)", arti: "Buruk / Jahat" },
    { kanji: "止", kunyomi: "to-maru, ya-meru", onyomi: "シ (SHI)", arti: "Berhenti" },
    { kanji: "重", kunyomi: "omo-i, kasa-neru", onyomi: "ジュウ (JUU), チョウ (CHOU)", arti: "Berat / Menumpuk" },
    { kanji: "画", kunyomi: "ega-ku", onyomi: "ガ (GA), カク (KAKU)", arti: "Gambar / Lukisan" },
    { kanji: "口", kunyomi: "kuchi", onyomi: "コウ (KOU), ク (KU)", arti: "Mulut" },
    { kanji: "味", kunyomi: "aji", onyomi: "ミ (MI)", arti: "Rasa" },
    { kanji: "空", kunyomi: "sora, a-ku, kara", onyomi: "クウ (KUU)", arti: "Kosong / Langit" },
    { kanji: "身", kunyomi: "mi", onyomi: "シン (SHIN)", arti: "Tubuh / Diri seseorang" },
    { kanji: "運", kunyomi: "hako-bu", onyomi: "ウン (UN)", arti: "Membawa / Nasib" },
    { kanji: "帰", kunyomi: "kae-ru", onyomi: "キ (KI)", arti: "Pulang" },
    { kanji: "集", kunyomi: "atsuma-ru", onyomi: "シュウ (SHUU)", arti: "Mengumpulkan" },
    { kanji: "急", kunyomi: "iso-gu", onyomi: "キュウ (KYUU)", arti: "Cepat / Cepat-cepat" },
    { kanji: "足", kunyomi: "ashi, ta-riro", onyomi: "ソク (SOKU)", arti: "Kaki / Cukup" },
    { kanji: "売", kunyomi: "u-ru", onyomi: "バイ (BAI)", arti: "Jual" },
    { kanji: "起", kunyomi: "oki-ru", onyomi: "キ (KI)", arti: "Membangkitkan / Bangun" },
    { kanji: "夜", kunyomi: "yo, yoru", onyomi: "ヤ (YA)", arti: "Malam" },
    { kanji: "料", kunyomi: "-", onyomi: "リョウ (RYOU)", arti: "Biaya / Bahan" },
    { kanji: "特", kunyomi: "-", onyomi: "トク (TOKU)", arti: "Khusus / Spesial" },
    { kanji: "品", kunyomi: "shina", onyomi: "ヒン (HIN)", arti: "Barang / Kualitas" },
    { kanji: "計", kunyomi: "haka-ru", onyomi: "ケイ (KEI)", arti: "Rencana / Mengukur" },
    { kanji: "店", kunyomi: "mise", onyomi: "テン (TEN)", arti: "Toko" },
    { kanji: "送", kunyomi: "oku-ru", onyomi: "ソウ (SOU)", arti: "Mengirim" },
    { kanji: "族", kunyomi: "-", onyomi: "ゾク (ZOKU)", arti: "Suku / Keluarga" },
    { kanji: "文", kunyomi: "fumi", onyomi: "ブン (BUN), モン (MON)", arti: "Kalimat / Teks" },

    // --- HALAMAN 3 (Foto 3) ---
    { kanji: "院", kunyomi: "-", onyomi: "イン (IN)", arti: "Institusi / Rumah Sakit" },
    { kanji: "朝", kunyomi: "asa", onyomi: "チョウ (CHOU)", arti: "Pagi" },
    { kanji: "転", kunyomi: "koro-garu", onyomi: "テン (TEN)", arti: "Berputar / Jatuh" },
    { kanji: "公", kunyomi: "ooyake", onyomi: "コウ (KOU)", arti: "Umum / Publik" },
    { kanji: "可", kunyomi: "-", onyomi: "カ (KA)", arti: "Boleh / Dapat" },
    { kanji: "病", kunyomi: "yama-i", onyomi: "ビョウ (BYOU), ヘイ (HEI)", arti: "Sakit" },
    { kanji: "住", kunyomi: "su-mu", onyomi: "ジュウ (JUU)", arti: "Tinggal / Huni" },
    { kanji: "屋", kunyomi: "ya", onyomi: "オク (OKU)", arti: "Atap / Toko" },
    { kanji: "買", kunyomi: "ka-u", onyomi: "バイ (BAI)", arti: "Beli" },
    { kanji: "有", kunyomi: "a-ru", onyomi: "ユウ (YUU), ウ (U)", arti: "Memiliki / Ada" },
    { kanji: "試", kunyomi: "tames-u, kokoromi-ru", onyomi: "シ (SHI)", arti: "Ujian / Mencoba" },
    { kanji: "質", kunyomi: "-", onyomi: "シツ (SHITSU), シチ (SHICHI)", arti: "Kualitas / Zat" },
    { kanji: "医", kunyomi: "-", onyomi: "イ (I)", arti: "Dokter / Medis" },
    { kanji: "映", kunyomi: "utsu-ru", onyomi: "エイ (EI)", arti: "Merefleksikan / Tayang" },
    { kanji: "室", kunyomi: "muro", onyomi: "シツ (SHITSU)", arti: "Kamar / Ruangan" },
    { kanji: "台", kunyomi: "-", onyomi: "ダイ (DAI), タイ (TAI)", arti: "Tatakan / Perangkat" },
    { kanji: "験", kunyomi: "tames-u", onyomi: "ケン (KEN), ゲン (GEN)", arti: "Uji / Verifikasi" },
    { kanji: "歌", kunyomi: "uta, uta-u", onyomi: "カ (KA)", arti: "Lagu / Menyanyi" },
    { kanji: "去", kunyomi: "sa-ru", onyomi: "キョ (KYO), コ (KO)", arti: "Pergi / Berlalu" },
    { kanji: "風", kunyomi: "kaze", onyomi: "フウ (FUU), フ (FU)", arti: "Angin / Gaya" },
    { kanji: "歩", kunyomi: "aru-ku, ayu-mu", onyomi: "ホ (HO), ブ (BU)", arti: "Berjalan" },
    { kanji: "広", kunyomi: "hiro-i", onyomi: "コウ (KOU)", arti: "Lebar / Luas" },
    { kanji: "週", kunyomi: "-", onyomi: "シュウ (SHUU)", arti: "Minggu" },
    { kanji: "写", kunyomi: "utsu-su", onyomi: "シャ (SHA)", arti: "Salin / Foto" },
    { kanji: "花", kunyomi: "hana", onyomi: "カ (KA)", arti: "Bunga" },
    { kanji: "黒", kunyomi: "kuro, kuro-i", onyomi: "コク (KOKU)", arti: "Hitam" },
    { kanji: "答", kunyomi: "kota-eru", onyomi: "トウ (TOU)", arti: "Solusi / Jawab" },
    { kanji: "赤", kunyomi: "aka, aka-i", onyomi: "セキ (SEKI), シャク (SHAKU)", arti: "Merah" },
    { kanji: "色", kunyomi: "iro", onyomi: "シキ (SHIKI), ショク (SHOKU)", arti: "Warna" },
    { kanji: "町", kunyomi: "machi", onyomi: "チョウ (CHOU)", arti: "Kota" },
    { kanji: "銀", kunyomi: "-", onyomi: "ギン (GIN)", arti: "Perak" },
    { kanji: "工", kunyomi: "-", onyomi: "コウ (KOU), ク (KU)", arti: "Kerajinan / Teknik" },
    { kanji: "字", kunyomi: "aza", onyomi: "ジ (JI)", arti: "Karakter / Huruf" },
    { kanji: "飲", kunyomi: "no-mu", onyomi: "イン (IN)", arti: "Minum" },
    { kanji: "注", kunyomi: "soso-gu", onyomi: "チュウ (CHUU)", arti: "Menuangkan / Catatan" },
    { kanji: "走", kunyomi: "hashi-ru", onyomi: "ソウ (SOU)", arti: "Lari" },
    { kanji: "京", kunyomi: "miyako", onyomi: "キョウ (KYOU), ケイ (KEI)", arti: "Ibukota" },
    { kanji: "古", kunyomi: "furu-i", onyomi: "コ (KO)", arti: "Tua / Lama" },
    { kanji: "英", kunyomi: "-", onyomi: "エイ (EI)", arti: "Inggris / Unggul" },
    { kanji: "習", kunyomi: "nara-u", onyomi: "シュウ (SHUU)", arti: "Belajar / Belajar dari guru" },
    { kanji: "兄", kunyomi: "ani", onyomi: "ケイ (KEI), キョウ (KYOU)", arti: "Kakak laki-laki" },
    { kanji: "服", kunyomi: "-", onyomi: "フク (FUKU)", arti: "Pakaian" },
    { kanji: "建", kunyomi: "ta-teru", onyomi: "ケン (KEN), コン (KON)", arti: "Membangun" },
    { kanji: "青", kunyomi: "ao, ao-i", onyomi: "セイ (SEI), ショウ (SHOU)", arti: "Biru" },
    { kanji: "研", kunyomi: "to-gu", onyomi: "ケン (KEN)", arti: "Mengaas / Penelitian" },
    { kanji: "紙", kunyomi: "kami", onyomi: "シ (SHI)", arti: "Kertas" },
    { kanji: "究", kunyomi: "kiwa-meru", onyomi: "キュウ (KYUU)", arti: "Penelitian / Meneliti" },
    { kanji: "春", kunyomi: "haru", onyomi: "シュン (SHUN)", arti: "Musim semi" },

    // --- HALAMAN 4 (Foto 4) ---
    { kanji: "図", kunyomi: "haka-ru", onyomi: "ズ (ZU), ト (TO)", arti: "Peta / Gambar / Bagian" },
    { kanji: "旅", kunyomi: "tabi", onyomi: "リョ (RYO)", arti: "Perjalanan / Travel" },
    { kanji: "肉", kunyomi: "-", onyomi: "ニク (NIKU)", arti: "Daging" },
    { kanji: "夏", kunyomi: "natsu", onyomi: "カ (KA), ゲ (GE)", arti: "Musim panas" },
    { kanji: "弟", kunyomi: "otouto", onyomi: "テイ (TEI), ダイ (DAI)", arti: "Adik laki-laki" },
    { kanji: "犬", kunyomi: "inu", onyomi: "ケン (KEN)", arti: "Anjing" },
    { kanji: "飯", kunyomi: "meshi", onyomi: "ハン (HAN)", arti: "Makanan / Nasi" },
    { kanji: "館", kunyomi: "yakata", onyomi: "カン (KAN)", arti: "Bangunan / Gedung" },
    { kanji: "貸", kunyomi: "ka-su", onyomi: "タイ (TAI)", arti: "Meminjamkan" },
    { kanji: "堂", kunyomi: "-", onyomi: "ドウ (DOU)", arti: "Ruang publik / Aula" },
    { kanji: "借", kunyomi: "bi-ru", onyomi: "シャク (SHAKU)", arti: "Meminjam" },
    { kanji: "秋", kunyomi: "aki", onyomi: "シュウ (SHUU)", arti: "Musim gugur" },
    { kanji: "姉", kunyomi: "ane", onyomi: "シ (SHI)", arti: "Kakak perempuan" },
    { kanji: "曜", kunyomi: "-", onyomi: "ヨウ (YOU)", arti: "Hari kerja / Hari minggu" },
    { kanji: "鳥", kunyomi: "tori", onyomi: "チョウ (CHOU)", arti: "Burung" },
    { kanji: "夕", kunyomi: "yuu", onyomi: "セキ (SEKI)", arti: "Malam / Sore" },
    { kanji: "茶", kunyomi: "-", onyomi: "チャ (CHA), サ (SA)", arti: "Teh" },
    { kanji: "魚", kunyomi: "sakana, uo", onyomi: "ギョ (GYO)", arti: "Ikan" },
    { kanji: "妹", kunyomi: "imouto", onyomi: "マイ (MAI)", arti: "Adik perempuan" },
    { kanji: "勉", kunyomi: "tsuto-meru", onyomi: "ベン (BEN)", arti: "Usaha / Giat" },
    { kanji: "洋", kunyomi: "-", onyomi: "ヨウ (YOU)", arti: "Samudera / Gaya Barat" },
    { kanji: "昼", kunyomi: "hiru", onyomi: "チュウ (CHUU)", arti: "Siang hari" },
    { kanji: "牛", kunyomi: "ushi", onyomi: "ギュウ (GYUU)", arti: "Sapi" },
    { kanji: "冬", kunyomi: "fuyu", onyomi: "トウ (TOU)", arti: "Musim dingin" },
    { kanji: "駅", kunyomi: "-", onyomi: "エキ (EKI)", arti: "Stasiun" },
    { kanji: "漢", kunyomi: "-", onyomi: "カン (KAN)", arti: "Cina / Karakter" }
    ],
    N3: [
        { kanji: "愛", onyomi: "AI", kunyomi: "itoshii", meaning: "Cinta" }
    ],
    N2: [], N1: []
};

const bunpouData = [
    { level: "N5", pattern: "~ は ~ です", desc: "Pola kalimat dasar menyatakan identitas / status.", example: "わたしは はいだる です。(Saya adalah Haidar.)" },
    { level: "N4", pattern: "~ ています", desc: "Menyatakan kegiatan yang sedang berlangsung.", example: "いま ほんを よんでいます。(Sekarang sedang membaca buku.)" }
];
const vocabData = [
    { kanji: "食べる", romaji: "Taberu", arti: "Makan", kate: "Kerja" },
    { kanji: "飲む", romaji: "Nomu", arti: "Minum", kate: "Kerja" },
    { kanji: "行く", romaji: "Iku", arti: "Pergi", kate: "Kerja" },
    { kanji: "来る", romaji: "Kuru", arti: "Datang", kate: "Kerja" },
    { kanji: "帰る", romaji: "Kaeru", arti: "Pulang", kate: "Kerja" },
    { kanji: "見る", romaji: "Miru", arti: "Melihat / Menonton", kate: "Kerja" },
    { kanji: "聞く", romaji: "Kiku", arti: "Mendengar / Bertanya", kate: "Kerja" },
    { kanji: "読む", romaji: "Yomu", arti: "Membaca", kate: "Kerja" },
    { kanji: "書く", romaji: "Kaku", arti: "Menulis", kate: "Kerja" },
    { kanji: "話す", romaji: "Hanasu", arti: "Berbicara", kate: "Kerja" },
    { kanji: "買う", romaji: "Kau", arti: "Membeli", kate: "Kerja" },
    { kanji: "起きる", romaji: "Okiru", arti: "Bangun tidur", kate: "Kerja" },
    { kanji: "寝る", romaji: "Neru", arti: "Tidur", kate: "Kerja" },
    { kanji: "する", romaji: "Suru", arti: "Melakukan", kate: "Kerja" },
    { kanji: "勉強する", romaji: "Benkyou suru", arti: "Belajar", kate: "Kerja" },
    { kanji: "歩く", romaji: "Aruku", arti: "Berjalan kaki", kate: "Kerja" },
    { kanji: "走る", romaji: "Hashiru", arti: "Berlari", kate: "Kerja" },
    { kanji: "会う", romaji: "Au", arti: "Bertemu", kate: "Kerja" },
    { kanji: "待つ", romaji: "Matsu", arti: "Menunggu", kate: "Kerja" }
];

const conversationData = [
    { sender: "A", name: "Tanaka", text: "おはようございます！ (Selamat pagi!)" },
    { sender: "B", name: "Haidar", text: "おはようございます。おげんきですか？ (Selamat pagi. Apa kabar?)" },
    { sender: "A", name: "Tanaka", text: "はい、げんきです！ (Ya, saya sehat!)" }
];

const sswData = [
    { sector: "Konstruksi", title: "Istilah Keselamatan Kerja (Anzen)", desc: "Mempelajari kosakata K3 dan peralatan medis dasar di lokasi kerja." },
    { sector: "Perawat", title: "Bahasa Jepang Keperawatan (Kaigo)", desc: "Istilah komunikasi dasar dengan lansia dan peralatan rumah sakit." },
    { sector: "Pengolahan Makanan", title: "Higiene Kebersihan (HACCP)", desc: "Standar kebersihan pabrik dan pengolahan bahan makanan." },
    { sector: "Pertanian", title: "Teknik Tanaman & Alat", desc: "Pengenalan alat perkebunan serta instruksi kerja di ladang." },
    { sector: "Perhotelan", title: "Layanan Pelanggan (Omotenashi)", desc: "Frasa penyambutan tamu hotel dan penanganan reservasi." }
];

const quizData = [
    {
        question: "Apa arti dari kata '水 (みず / Mizu)'?",
        options: ["Api", "Batu", "Air", "Angin"],
        answer: 2
    },
    {
        question: "Aksara Hiragana dari bunyi 'KA' adalah...",
        options: ["き", "か", "く", "け"],
        answer: 1
    }
];

let currentQuizIndex = 0;

// ==========================================
// 2. NAVIGASI SEAMLESS & BACK BUTTON
// ==========================================

function showFeature(featureId) {
    const targetId = featureId.toLowerCase();
    
    // Sembunyikan semua tampilan
    const views = document.querySelectorAll('.feature-view');
    views.forEach(view => view.style.display = 'none');

    // Tampilkan tampilan terpilih
    const selected = document.getElementById('feature-' + targetId);
    if (selected) {
        selected.style.display = 'block';
    }

    // Perbarui status aktif di Navbar
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    const activeNav = document.getElementById('nav-' + targetId);
    if (activeNav) {
        activeNav.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 3. INTI RENDERING
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    switchKana('hiragana');
    switchKanji('N5');
    filterBunpou('all');
    renderVocab();
    renderConversation();
    filterSSW();
    loadQuiz();
});

// Render Kana
function switchKana(type) {
    const grid = document.getElementById('kanaGrid');
    if (!grid) return;
    
    const data = kanaData[type] || [];
    grid.innerHTML = data.map(item => `
        <div class="kana-card">
            <div class="kana-main">${item.char}</div>
            <div class="kana-romaji">${item.romaji}</div>
        </div>
    `).join('');
}

// Render Kanji
function switchKanji(level) {
    const grid = document.getElementById('kanjiGrid');
    if (!grid) return;
    
    const data = kanjiData[level] || [];
    if(data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-muted);">Belum ada data Kanji untuk level ${level}.</p>`;
        return;
    }
    
    grid.innerHTML = data.map(item => `
        <div class="kanji-card">
            <div class="kanji-main">${item.kanji}</div>
            <p style="font-size: 0.85rem; margin-top: 5px;"><strong>Onyomi:</strong> ${item.onyomi}</p>
            <p style="font-size: 0.85rem;"><strong>Kunyomi:</strong> ${item.kunyomi}</p>
            <p style="font-size: 0.85rem; color: var(--accent-blue);"><strong>Arti:</strong> ${item.meaning}</p>
        </div>
    `).join('');
}

// Render Tata Bahasa
function filterBunpou(level) {
    const grid = document.getElementById('bunpouGrid');
    if (!grid) return;
    
    const filtered = level === 'all' ? bunpouData : bunpouData.filter(b => b.level === level);
    
    grid.innerHTML = filtered.map(item => `
        <div class="bunpou-card">
            <span class="tag-badge">${item.level}</span>
            <h3 style="color: var(--primary-color); margin-bottom: 8px;">${item.pattern}</h3>
            <p>${item.desc}</p>
            <p style="margin-top: 10px; font-style: italic; color: var(--accent-blue); font-size: 0.9rem;">${item.example}</p>
        </div>
    `).join('');
}

// Render & Filter Kosakata ke Dalam Tabel
function filterVocab() {
    const searchVal = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const catVal = document.getElementById('categoryFilter')?.value || 'all';
    
    const tbody = document.getElementById('vocabTableBody');
    if (!tbody) return;

    const filtered = vocabData.filter(item => {
        const matchesSearch = item.kanji.toLowerCase().includes(searchVal) ||
                              item.romaji.toLowerCase().includes(searchVal) ||
                              item.arti.toLowerCase().includes(searchVal);
        const matchesCat = catVal === 'all' || item.kate === catVal;
        return matchesSearch && matchesCat;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 20px;">
                    Tidak ada kosakata yang ditemukan.
                </td>
            </tr>
        `;
    } else {
        tbody.innerHTML = filtered.map(item => `
            <tr>
                <td><span class="jp-text">${item.kanji}</span></td>
                <td><span class="romaji-text">${item.romaji}</span></td>
                <td>${item.arti}</td>
                <td><span class="table-badge">${item.kate}</span></td>
                <td>
                    <button class="table-audio-btn" onclick="speakText('${item.kanji}')" title="Dengarkan Pelafalan">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    const countElem = document.getElementById('vocabCount');
    if(countElem) countElem.textContent = `Menampilkan ${filtered.length} kosakata`;
}
// Render Percakapan
function renderConversation() {
    const box = document.getElementById('conversationBox');
    if (!box) return;

    box.innerHTML = conversationData.map(item => `
        <div class="chat-bubble ${item.sender === 'A' ? 'chat-left' : 'chat-right'}">
            <strong>${item.name}:</strong>
            <p>${item.text}</p>
        </div>
    `).join('');
}

// Render SSW (Disegarkan Agar Dapat Dipencet)
function filterSSW() {
    const grid = document.getElementById('sswGrid');
    const filter = document.getElementById('sswCategoryFilter')?.value || 'all';
    if (!grid) return;

    const filtered = filter === 'all' ? sswData : sswData.filter(s => s.sector === filter);

    if(filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-muted);">Materi untuk sektor ini akan segera diperbarui.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div class="ssw-card">
            <span class="tag-badge">${item.sector}</span>
            <h3 style="color: #ffffff; margin-bottom: 8px;">${item.title}</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted);">${item.desc}</p>
        </div>
    `).join('');
}

// Kuis Interaktif
function loadQuiz() {
    const q = quizData[currentQuizIndex];
    const qTitle = document.getElementById('quizQuestion');
    const qOptions = document.getElementById('quizOptions');
    const feedback = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('nextQuizBtn');

    if(!qTitle) return;

    qTitle.textContent = `${currentQuizIndex + 1}. ${q.question}`;
    feedback.textContent = '';
    nextBtn.style.display = 'none';

    qOptions.innerHTML = q.options.map((opt, idx) => `
        <button class="quiz-opt-btn" onclick="checkAnswer(${idx})">${opt}</button>
    `).join('');
}

function checkAnswer(selectedIdx) {
    const q = quizData[currentQuizIndex];
    const feedback = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('nextQuizBtn');

    if(selectedIdx === q.answer) {
        feedback.textContent = "Jawaban Benar! 🎉";
        feedback.style.color = "#4ade80";
    } else {
        feedback.textContent = `Jawaban Salah! Jawaban benar: ${q.options[q.answer]}`;
        feedback.style.color = "#f87171";
    }

    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
    loadQuiz();
}

// Text to Speech
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    }
}