"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const faqData = [
    {
        q: "Apa itu FAZCBT?",
        a: "FAZCBT adalah platform asesmen digital dari FAZ Cyberautics Solutions untuk sekolah, madrasah, dan lembaga bimbingan belajar di Indonesia. Produk berfokus pada simulasi CBT, dengan rencana pengembangan asisten AI untuk membantu pekerjaan guru sebelum dan setelah ujian.",
    },
    {
        q: "Siapa saja yang dapat menggunakan FAZCBT?",
        a: "Platform FAZCBT dapat digunakan oleh Sekolah Dasar (SD / MI), SMP / MTs, SMA / SMK / MA, Lembaga bimbingan belajar, serta institusi pendidikan lainnya.",
    },
    {
        q: "Apakah simulasi di FAZCBT menyerupai ujian sebenarnya?",
        a: "Simulasi membantu siswa berlatih alur ujian berbasis komputer. FAZCBT adalah layanan latihan independen, bukan penyelenggara ujian resmi dan tidak menjamin kesamaan soal atau hasil pada ujian sebenarnya.",
    },
    {
        q: "Apakah siswa dapat langsung melihat hasil ujian?",
        a: "Ya. Setelah ujian selesai, sistem dapat menampilkan hasil dan analisis nilai secara otomatis, sehingga siswa dan guru dapat melihat performa secara langsung.",
    },
    {
        q: "Apakah FAZCBT dapat digunakan secara online?",
        a: "Ya. FAZCBT adalah platform berbasis web yang dapat diakses melalui Komputer / Laptop, Tablet, dan Smartphone. Selama perangkat terhubung ke internet, sistem dapat digunakan dengan mudah.",
    },
    {
        q: "Bagaimana status implementasi fitur dalam roadmap FAZCBT?",
        a: "Sebagian fitur dalam roadmap FAZCBT telah terimplementasi, sementara fitur lainnya masih dikembangkan secara bertahap. Roadmap mencakup penyusunan soal berbantuan AI, analisis hasil per kompetensi, dan tindak lanjut belajar. Hubungi tim untuk mengetahui fitur yang sudah dapat digunakan dan melihat alurnya melalui demo.",
    },
    {
        q: "Apakah sekolah dapat mengelola ujian sendiri?",
        a: "Ya. Sekolah akan mendapatkan dashboard admin yang memungkinkan untuk mengelola siswa, mengatur jadwal ujian, membuat soal, serta melihat hasil dan laporan.",
    },
    {
        q: "Apakah AI akan menentukan nilai atau menggantikan guru?",
        a: "Tidak dalam rencana penggunaan kami. Keluaran AI akan berupa draf atau saran yang wajib ditinjau guru sebelum digunakan. Ketepatan materi, kesesuaian rubrik, dan keputusan pembelajaran tetap menjadi tanggung jawab pendidik, bukan model AI.",
    },
    {
        q: "Bagaimana rencana perlindungan data pada fitur AI?",
        a: "Prototipe awal direncanakan menggunakan materi uji tanpa data pribadi siswa. Sebelum pilot dengan data siswa, kami perlu meninjau dasar pemrosesan, kebijakan privasi, pembatasan akses, serta penghilangan identitas langsung dari masukan API. Ini adalah rencana pengamanan, bukan klaim bahwa integrasinya sudah diterapkan.",
    },
    {
        q: "Bagaimana cara sekolah mulai menggunakan FAZCBT?",
        a: "Sekolah dapat memulai dengan mudah melalui langkah berikut: Menghubungi tim FAZCBT, mendapatkan demo platform, registrasi sekolah, lalu mulai membuat simulasi ujian untuk siswa.",
    },
    {
        q: "Bagaimana model langganan dan rencana pilot AI?",
        a: "Model yang dituju adalah langganan institusi untuk asesmen, dengan opsi AI berbasis kuota. Harga, ruang lingkup, dan jadwal pilot belum ditetapkan di halaman ini. Hubungi tim untuk demo CBT atau diskusi pilot; rencana evaluasi mencakup waktu kerja guru, kualitas keluaran, dan biaya penggunaan API.",
    },
    {
        q: "Bagaimana cara menghubungi tim FAZCBT?",
        a: "Hubungi info@fazcbt.id atau WhatsApp +62 881-0805-74850 untuk demo CBT, kebutuhan sekolah, atau diskusi rencana pilot AI. Sertakan nama institusi dan kebutuhan asesmen, tanpa mengirim data pribadi siswa.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    // Split into 2 columns
    const half = Math.ceil(faqData.length / 2);
    const col1 = faqData.slice(0, half);
    const col2 = faqData.slice(half);

    const renderItem = (item: (typeof faqData)[0], index: number) => (
        <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-all ${isDark ? 'border-white/10 hover:border-white/20' : 'border-slate-200 hover:border-slate-300'}`}
        >
            <button
                onClick={() => toggle(index)}
                className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-50 hover:bg-slate-100'}`}
            >
                <span className={`text-sm font-semibold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.q}
                </span>
                <ChevronDown
                    className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className={`px-5 py-4 text-xs leading-relaxed border-t ${isDark ? 'text-white/60 border-white/5' : 'text-slate-500 border-slate-100'}`}>
                        {item.a}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <section
            id="faq"
            className={`min-h-screen flex items-center py-16 relative ${isDark ? 'bg-slate-950/90' : 'bg-slate-50'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-xs">
                        FAQ
                    </span>
                    <h2 className={`text-2xl md:text-3xl font-bold mt-2 mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className={`text-sm max-w-xl mx-auto ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                        Temukan jawaban atas pertanyaan umum tentang platform FAZCBT dan
                        layanan yang kami sediakan.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    <div className="space-y-3">
                        {col1.map((item, i) => renderItem(item, i))}
                    </div>
                    <div className="space-y-3">
                        {col2.map((item, i) => renderItem(item, i + half))}
                    </div>
                </div>
            </div>
        </section>
    );
}
