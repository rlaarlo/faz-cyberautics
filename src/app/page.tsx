"use client";

import React from 'react';
import {
  MonitorSmartphone,
  BookOpen,
  GraduationCap,
  Target,
  BrainCircuit,
  LineChart,
  ShieldCheck,
  Server,
  ArrowRight,
  School,
  Building,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  PlayCircle,
  Users,
  PencilRuler,
  Calculator,
  DraftingCompass,
  PieChart,
  FlaskConical,
  Microscope,
  Sigma,
  FunctionSquare
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import WaveBackground from '@/components/WaveBackground';
import FaqSection from '@/components/FaqSection';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/components/ThemeProvider';

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-sans relative overflow-x-hidden selection:bg-primary/30 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      {/* Full-screen Wave Animation */}
      <WaveBackground />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 border-b ${isDark ? 'bg-slate-950/50 backdrop-blur-xl border-white/10' : 'bg-white/80 backdrop-blur-xl border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <img src={isDark ? '/assets/logo-header.png' : '/assets/logo-header-light.png'} alt="FAZCBT Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#tentang" className={`text-sm font-medium transition-colors ${isDark ? 'text-white/70 hover:text-primary' : 'text-slate-600 hover:text-primary'}`}>Tentang Kami</Link>
              <Link href="#layanan" className={`text-sm font-medium transition-colors ${isDark ? 'text-white/70 hover:text-primary' : 'text-slate-600 hover:text-primary'}`}>Layanan</Link>
              <Link href="#roadmap-ai" className={`text-sm font-medium transition-colors ${isDark ? 'text-white/70 hover:text-primary' : 'text-slate-600 hover:text-primary'}`}>Roadmap</Link>
              <Link href="#faq" className={`text-sm font-medium transition-colors ${isDark ? 'text-white/70 hover:text-primary' : 'text-slate-600 hover:text-primary'}`}>FAQ</Link>
              <ThemeToggle />
              <a href="https://wa.me/62881080574850?text=Halo%20FAZCBT%2C%20saya%20ingin%20info%20lebih%20lanjut" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/50">
                Hubungi Kami
              </a>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Menu className={`w-5 h-5 ${isDark ? 'text-white/70' : 'text-slate-600'}`} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary-hover font-semibold text-xs border border-primary/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              EdTech Indonesia · Asesmen untuk Sekolah
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              FAZCBT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Asesmen Digital</span> untuk Sekolah
            </h1>
            <p className={`text-base md:text-lg leading-relaxed max-w-xl ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
              Bantu guru melihat kebutuhan belajar di balik nilai ujian. FAZCBT menyediakan simulasi CBT untuk sekolah dan madrasah, dengan arah pengembangan asisten AI untuk menyusun asesmen dan menyiapkan tindak lanjut belajar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://app.fazcbt.id/id/login" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm bg-primary text-white font-semibold rounded-full hover:shadow-primary/40 hover:-translate-y-0.5 hover:opacity-90 transition-all shadow-xl shadow-primary/40">
                Masuk Dashboard <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://app.fazcbt.id/id/exams" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm bg-secondary text-white font-semibold rounded-full hover:shadow-secondary/40 hover:-translate-y-0.5 hover:opacity-90 transition-all shadow-xl shadow-secondary/40">
                <PlayCircle className="w-4 h-4 text-white" /> Mulai Ujian
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-[100px] opacity-40 -z-10"></div>
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl border ${isDark ? 'border-slate-100' : 'border-slate-200'}`}>
              <img
                src="/assets/gambar-1.jpg"
                alt="Siswa mengerjakan ujian berbasis komputer"
                className="w-full h-full object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute bottom-3 left-3 right-3 backdrop-blur-xl p-3 rounded-lg shadow-2xl border flex flex-wrap gap-3 items-center justify-between ${isDark ? 'bg-slate-950/80 border-white/10' : 'bg-white/90 border-slate-200'}`}>
                <div>
                  <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Diskusikan kebutuhan sekolah</p>
                  <p className={`text-[10px] ${isDark ? 'text-white/70' : 'text-slate-500'}`}>Jadwalkan demo bersama tim</p>
                </div>
                <a href="https://wa.me/62881080574850?text=Halo%2520FAZCBT%252C%2520saya%2520ingin%2520info%2520lebih%2520lanjut" target="_blank" rel="noopener noreferrer" className="h-9 px-3 shrink-0 bg-primary/20 hover:bg-primary/40 transition-colors rounded-full flex items-center justify-center gap-2 text-xs text-primary font-bold">
                  Hubungi Kami <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang" className={`min-h-screen flex items-center border-y ${isDark ? 'bg-white/5 backdrop-blur-sm border-white/5' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Tentang <span className="text-primary">FAZCBT</span></h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto"></div>
            <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>FAZCBT</span> adalah produk teknologi pendidikan dari <span className="text-primary font-semibold">FAZ Cyberautics Solutions</span>. Fokus kami adalah membantu sekolah dan madrasah di Indonesia menghubungkan pelaksanaan ujian dengan keputusan pembelajaran yang lebih terarah.
            </p>
            <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
              Menyusun soal, membaca hasil per siswa, dan menyiapkan remedial membutuhkan waktu guru. Kami ingin menyatukan alur tersebut: mulai dari simulasi CBT, evaluasi hasil, hingga rencana bantuan AI yang dapat ditinjau guru sebelum digunakan di kelas.
            </p>
          </div>
        </div>
      </section>

      {/* Layanan Kami */}
      <section id="layanan" className={`min-h-screen flex items-center py-16 ${isDark ? 'bg-slate-950/80' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-2xl mx-auto pb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-xs">Layanan Kami</span>
            <h2 className={`text-2xl md:text-3xl font-bold mt-2 mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Program Assessment Digital</h2>
            <p className={`text-sm ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Solusi terintegrasi untuk berbagai kebutuhan evaluasi belajar, mulai dari asesmen nasional hingga tes pemetaan bakat.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border hover:-translate-y-1 transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
              <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Simulasi ANBK</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Latihan literasi dan numerasi berbasis komputer untuk membiasakan siswa dengan alur pengerjaan ANBK. Layanan latihan independen, bukan ujian resmi.
              </p>
            </div>

            {/* Card 2 */}
            <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border hover:-translate-y-1 transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
              <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors">
                <School className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Simulasi AKMI</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Latihan simulasi Asesmen Kompetensi Madrasah Indonesia dengan sistem CBT spesifik yang menyerupai ujian AKMI sebenarnya.
              </p>
            </div>

            {/* Card 3 */}
            <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border hover:-translate-y-1 transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
              <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Simulasi UTBK</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Simulasi UTBK SNBT berbasis komputer khusus untuk membantu siswa memahami pola soal tes masuk perguruan tinggi negeri dan manajemen waktu.
              </p>
            </div>

            {/* Card 4 */}
            <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border hover:-translate-y-1 transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
              <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Simulasi PISA</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Mengukur kesiapan siswa dalam kerangka internasional. Simulasi tes literasi dan numerasi standar komprehensif seperti PISA.
              </p>
            </div>

            {/* Card 5 */}
            <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border hover:-translate-y-1 transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
              <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors">
                <Target className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Simulasi AKM Kelas</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Assessment formatif khusus kelas. Evaluasi literasi dan numerasi untuk mengukur serta membedah kemampuan siswa secara spesifik.
              </p>
            </div>

            {/* Card 6 */}
            <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border hover:-translate-y-1 transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
              <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Assessment Test</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Tes evaluasi pemahaman akademik terpusat berbasis komputer untuk mengukur performa penguasaan materi siswa secara utuh dan terarah.
              </p>
            </div>

            {/* Card 7 */}
            <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border hover:-translate-y-1 transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
              <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Target className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Test Gaya Belajar</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Eksplorasi preferensi belajar sebagai bahan percakapan guru dan siswa, bukan diagnosis atau penetapan kemampuan belajar yang bersifat tetap.
              </p>
            </div>

            {/* Card 8 */}
            <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border hover:-translate-y-1 transition-all group ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}>
              <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Test Minat Bakat</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                Bahan refleksi untuk mengeksplorasi minat siswa dan mendukung diskusi pendampingan. Hasil tidak menggantikan asesmen profesional atau menentukan pilihan karier.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Keunggulan Sistem */}
      <section id="keunggulan" className={`min-h-screen flex items-center py-16 relative ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-x-0 -top-4 -bottom-4 bg-primary/5 rounded-3xl transform skew-y-3 -z-10"></div>
                <img
                  src="/assets/gambar-2.jpg"
                  alt="Dashboard Data Analisis"
                  className={`rounded-2xl shadow-2xl border ${isDark ? 'border-white' : 'border-slate-200'}`}
                />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-xs">Keunggulan Utama</span>
                <h2 className={`text-2xl md:text-3xl font-bold mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Mengapa Memilih Platform Kami?</h2>
                <p className={`mt-3 text-sm ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Satu alur kerja untuk pengelola sekolah dan guru: menyiapkan ujian, memantau pelaksanaan, lalu membaca hasil sebagai dasar evaluasi pembelajaran.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Sistem CBT Berbasis Web</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Tanpa perlu instalasi rumit, cukup buka browser dan ujian siap dimulai dari perangkat apapun.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><LineChart className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Real-time Hasil Ujian</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Nilai dan statistik pengerjaan langsung tampil seketika setelah siswa menyelesaikan ujian.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><BrainCircuit className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Analisis Nilai Otomatis</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Sistem kami langsung mengolah data nilai menjadi chart, report kompetensi, dan evaluasi mendalam.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><MonitorSmartphone className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Dashboard Interaktif</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Akses khusus bagi guru dan pihak sekolah untuk memantau performa siswa dari hulu ke hilir secara mudah.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><Server className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Perencanaan Pelaksanaan</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Diskusikan jumlah peserta, jadwal sesi, dan kesiapan koneksi dengan tim sebelum pelaksanaan ujian.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><ShieldCheck className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Kesiapan Sekolah</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Gunakan demo untuk meninjau alur akses, pengelolaan peserta, dan kebutuhan operasional bersama tim sekolah.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap-ai" className={`py-20 border-y ${isDark ? 'bg-slate-950/90 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-primary font-bold uppercase text-xs">Roadmap</span>
            <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>AI untuk asesmen yang lebih bermakna</h2>
            <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
              FAZCBT mengembangkan teknologi AI untuk menghubungkan tujuan pembelajaran, soal, dan hasil asesmen. Sebagian fitur dalam roadmap ini telah terimplementasi, sementara fitur lainnya dikembangkan secara bertahap. Fokusnya adalah membantu guru menyiapkan materi, memahami pola jawaban, dan menentukan tindak lanjut belajar yang sesuai dengan kebutuhan siswa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Penyusunan soal berbantuan AI', text: 'Guru menentukan tujuan belajar, topik, jenjang, dan tingkat kesulitan. AI dirancang untuk mengusulkan draf soal, kunci jawaban, serta pembahasan yang dapat diperiksa dan disunting guru sebelum diterbitkan.' },
              { icon: LineChart, title: 'Analisis hasil per kompetensi', text: 'Jawaban dan hasil asesmen yang dipetakan ke kompetensi menjadi dasar AI menyusun ringkasan penguasaan materi dan pola kesalahan. Guru dapat menelusuri data pendukung sebelum menetapkan area yang perlu diperkuat.' },
              { icon: BrainCircuit, title: 'Tindak lanjut belajar yang terarah', text: 'Berdasarkan hasil yang telah ditinjau, AI dirancang untuk menyarankan latihan remedial, pengayaan, dan penjelasan bertahap. Guru memilih serta menyesuaikan materi untuk kebutuhan siswa atau kelompok belajar.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className={`border-t pt-6 ${isDark ? 'border-white/15' : 'border-slate-300'}`}>
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-base font-semibold mb-3">{title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{text}</p>
              </div>
            ))}
          </div>
          <div className={`grid md:grid-cols-2 gap-10 mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Guru tetap memegang kendali</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>AI berperan sebagai asisten, bukan penentu nilai akhir atau pengganti pendidik. Alur yang direncanakan menempatkan peninjauan guru sebelum soal diterbitkan, ringkasan hasil digunakan, atau rekomendasi latihan diberikan kepada siswa.</p>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Evaluasi fitur akan berfokus pada kesesuaian soal dengan tujuan belajar, ketepatan kunci dan pembahasan, serta kesetiaan ringkasan terhadap data asesmen. Keluaran yang keliru atau tidak cukup didukung data perlu diperbaiki sebelum digunakan.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Data yang relevan, penggunaan yang bertanggung jawab</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Masukan AI direncanakan terbatas pada materi ajar, rubrik, dan data asesmen yang diperlukan. Rancangan perlindungan mencakup penghilangan identitas langsung siswa, pembatasan akses, serta peninjauan kebijakan pemrosesan data sebelum uji coba dengan data siswa.</p>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>Roadmap mencakup fitur yang telah terimplementasi dan pengembangan berikutnya. Prioritas selanjutnya adalah penyempurnaan kualitas rekomendasi, evaluasi bersama pendidik, dan perluasan manfaat bagi pekerjaan guru.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Pengguna */}
      <section className={`min-h-screen flex items-center py-16 overflow-hidden relative ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-600/20 blur-3xl mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Berangkat dari kebutuhan sekolah Indonesia</h2>
          <p className={`max-w-2xl mx-auto mb-10 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pasar yang dituju adalah sekolah, madrasah, dan lembaga bimbingan belajar. Pendekatan awal yang direncanakan: demo bersama pengelola, pilot dengan guru, lalu evaluasi penggunaan sebelum perluasan ke lebih banyak kelas.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className={`w-full sm:w-auto px-5 py-3.5 rounded-xl backdrop-blur-md border transition-all flex items-center gap-2.5 ${isDark ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}>
              <School className="w-5 h-5 text-accent" />
              <span className="font-semibold text-sm">Sekolah Dasar (SD)</span>
            </div>
            <div className={`w-full sm:w-auto px-5 py-3.5 rounded-xl backdrop-blur-md border transition-all flex items-center gap-2.5 ${isDark ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}>
              <School className="w-5 h-5 text-accent" />
              <span className="font-semibold text-sm">Sekolah Menengah Pertama (SMP)</span>
            </div>
            <div className={`w-full sm:w-auto px-5 py-3.5 rounded-xl backdrop-blur-md border transition-all flex items-center gap-2.5 ${isDark ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}>
              <School className="w-5 h-5 text-accent" />
              <span className="font-semibold text-sm">Sekolah Menengah Atas (SMA/SMK)</span>
            </div>
            <div className={`w-full sm:w-auto px-5 py-3.5 rounded-xl backdrop-blur-md border transition-all flex items-center gap-2.5 ${isDark ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}>
              <Building className="w-5 h-5 text-accent" />
              <span className="font-semibold text-sm">Madrasah (MI, MTs, MA)</span>
            </div>
            <div className={`w-full sm:w-auto px-5 py-3.5 rounded-xl backdrop-blur-md border transition-all flex items-center gap-2.5 ${isDark ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}>
              <Users className="w-5 h-5 text-accent" />
              <span className="font-semibold text-sm">Lembaga Bimbingan Belajar</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 border-t ${isDark ? 'bg-slate-950/90 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <h2 className="text-2xl md:text-3xl font-bold">Model bisnis yang dituju: SaaS untuk institusi pendidikan</h2>
          <div className={`space-y-4 text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            <p>Kami merencanakan langganan institusi untuk pengelolaan asesmen, dengan opsi fitur AI berbasis kuota penggunaan. Sekolah menjadi pelanggan, guru mengelola asesmen, dan siswa mengikuti kegiatan belajar.</p>
            <p>Harga dan paket akan divalidasi melalui diskusi kebutuhan dan pilot. Fokus validasi bisnis adalah penggunaan berulang, kesediaan institusi berlangganan, dan biaya layanan yang berkelanjutan setelah kredit API berakhir.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center py-16 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Mari mulai dari kebutuhan guru di sekolah Anda</h2>
          <p className="text-white/90 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Tinjau platform CBT melalui demo, diskusikan tantangan asesmen, atau bicarakan peluang menjadi mitra pilot untuk rencana pengembangan AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/62881080574850?text=Halo%20FAZCBT%2C%20saya%20ingin%20request%20demo%20gratis" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm bg-white text-primary font-bold rounded-full hover:bg-slate-50 transition-colors shadow-2xl">
              Jadwalkan Demo CBT
            </a>
            <a href="https://wa.me/62881080574850?text=Halo%20FAZCBT%2C%20saya%20ingin%20berdiskusi%20tentang%20rencana%20pilot%20AI" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm bg-transparent text-white font-bold rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors">
              Diskusikan Pilot AI
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <footer id="kontak" className={`pt-14 pb-8 border-t ${isDark ? 'bg-slate-900 text-slate-300 border-white/10' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={isDark ? '/assets/logo-header.png' : '/assets/logo-header-light.png'} alt="FAZCBT Logo" className="h-8 w-auto" />
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                FAZCBT adalah platform asesmen digital dari <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>FAZ Cyberautics Solutions</span>. Menghubungkan simulasi ujian dengan kebutuhan belajar, dengan rencana AI yang menempatkan guru sebagai pengambil keputusan.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold mb-6 uppercase tracking-wider text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Navigasi</h4>
              <ul className="space-y-3">
                <li><Link href="#tentang" className="hover:text-accent transition-colors text-sm">Tentang Kami</Link></li>
                <li><Link href="#layanan" className="hover:text-accent transition-colors text-sm">Layanan Asesmen</Link></li>
                <li><Link href="#keunggulan" className="hover:text-accent transition-colors text-sm">Keunggulan Platform</Link></li>
                <li><Link href="#roadmap-ai" className="hover:text-accent transition-colors text-sm">Roadmap</Link></li>
                <li><Link href="#faq" className="hover:text-accent transition-colors text-sm">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-semibold mb-6 uppercase tracking-wider text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Bantuan & Legal</h4>
              <ul className="space-y-3">
                <li><Link href="#faq" className="hover:text-accent transition-colors text-sm">Pusat Bantuan (FAQ)</Link></li>
                <li><a href="https://wa.me/62881080574850?text=Halo%20FAZCBT%2C%20saya%20butuh%20panduan%20pengguna" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-sm">Panduan Pengguna</a></li>
                <li><Link href="/syarat-ketentuan" className="hover:text-accent transition-colors text-sm">Syarat dan Ketentuan</Link></li>
                <li><Link href="/kebijakan-privasi" className="hover:text-accent transition-colors text-sm">Kebijakan Privasi</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-semibold mb-6 uppercase tracking-wider text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Kontak Kami</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Jl. MT Haryono, Madegondo, Grogol, Sukoharjo</span>
                </li>
                <li>
                  <a href="https://wa.me/62881080574850" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span>+62 881-0805-74850 (WhatsApp)</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@fazcbt.id" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <span>info@fazcbt.id</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <p className={`text-sm ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
              © {new Date().getFullYear()} FAZCBT — by FAZ Cyberautics Solutions. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/62881080574850" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center" title="WhatsApp">
                <span className="text-xs font-bold text-white">WA</span>
              </a>
              <a href="mailto:info@fazcbt.id" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer flex items-center justify-center" title="Email">
                <Mail className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
