"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const faqData = [
    {
        q: "Apa itu FAZCBT?",
        a: "FAZCBT adalah platform simulasi ujian berbasis komputer yang dirancang untuk membantu sekolah dan siswa mempersiapkan berbagai jenis asesmen seperti Simulasi ANBK, AKMI, UTBK, PISA, AKM Kelas, serta berbagai assessment test secara digital dan terstruktur.",
    },
    {
        q: "Siapa saja yang dapat menggunakan FAZCBT?",
        a: "Platform FAZCBT dapat digunakan oleh Sekolah Dasar (SD / MI), SMP / MTs, SMA / SMK / MA, Lembaga bimbingan belajar, serta institusi pendidikan lainnya.",
    },
    {
        q: "Apakah simulasi di FAZCBT menyerupai ujian sebenarnya?",
        a: "Ya. Sistem simulasi dirancang menyerupai tampilan dan mekanisme ujian resmi, sehingga siswa dapat berlatih dengan pengalaman yang realistis sebelum menghadapi ujian sebenarnya.",
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
        q: "Apa saja layanan simulasi yang tersedia di FAZCBT?",
        a: "Platform menyediakan berbagai jenis simulasi dan assessment: Simulasi ANBK, Simulasi AKMI, Simulasi UTBK, Simulasi PISA, Simulasi AKM Kelas, Assessment Test, Tes Gaya Belajar, dan Tes Minat & Bakat.",
    },
    {
        q: "Apakah sekolah dapat mengelola ujian sendiri?",
        a: "Ya. Sekolah akan mendapatkan dashboard admin yang memungkinkan untuk mengelola siswa, mengatur jadwal ujian, membuat soal, serta melihat hasil dan laporan.",
    },
    {
        q: "Apakah sistem dapat digunakan untuk banyak siswa sekaligus?",
        a: "Ya. Sistem FAZCBT dirancang untuk menangani ujian secara massal, sehingga dapat digunakan oleh banyak siswa secara bersamaan dengan performa yang stabil.",
    },
    {
        q: "Apakah data ujian aman?",
        a: "Keamanan data adalah prioritas utama. Sistem dilengkapi dengan proteksi akses, manajemen pengguna, dan penyimpanan data yang aman untuk menjaga kerahasiaan hasil ujian.",
    },
    {
        q: "Bagaimana cara sekolah mulai menggunakan FAZCBT?",
        a: "Sekolah dapat memulai dengan mudah melalui langkah berikut: Menghubungi tim FAZCBT, mendapatkan demo platform, registrasi sekolah, lalu mulai membuat simulasi ujian untuk siswa.",
    },
    {
        q: "Apakah tersedia demo sistem?",
        a: "Ya. Kami menyediakan demo platform agar sekolah dapat melihat langsung bagaimana sistem bekerja sebelum menggunakannya secara penuh.",
    },
    {
        q: "Bagaimana cara menghubungi tim FAZCBT?",
        a: "Anda dapat menghubungi tim kami melalui Email, WhatsApp, atau Form kontak pada website. Tim kami siap membantu sekolah dalam implementasi platform simulasi ujian.",
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
