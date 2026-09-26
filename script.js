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
        { kanji: "日", onyomi: "NICHI, JITSU", kunyomi: "hi, ka", meaning: "Matahari / Hari" },
        { kanji: "月", onyomi: "GETSU, GATSU", kunyomi: "tsuki", meaning: "Bulan" },
        { kanji: "水", onyomi: "SUI", kunyomi: "mizu", meaning: "Air" }
    ],
    N4: [
        { kanji: "犬", onyomi: "KEN", kunyomi: "inu", meaning: "Anjing" },
        { kanji: "花", onyomi: "KA", kunyomi: "hana", meaning: "Bunga" }
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