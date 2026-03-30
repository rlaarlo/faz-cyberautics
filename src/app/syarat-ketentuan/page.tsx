import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata = {
    title: 'Syarat dan Ketentuan - FAZCBT',
    description: 'Syarat dan ketentuan penggunaan platform FAZCBT oleh FAZ Cyberautics Solutions.',
};

export default function SyaratKetentuan() {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-white selection:bg-primary/30">
            {/* Header */}
            <nav className="fixed top-0 w-full bg-slate-950/50 backdrop-blur-xl z-50 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/assets/logo-header.png" alt="FAZCBT Logo" className="h-8 w-auto" />
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Syarat dan Ketentuan</h1>
                        <p className="text-xs text-white/40 mt-1">Terakhir diperbarui: 6 Maret 2026</p>
                    </div>
                </div>

                <div className="space-y-8 text-sm text-white/70 leading-relaxed">
                    {/* 1 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">1. Ketentuan Umum</h2>
                        <p>
                            Dengan mengakses dan menggunakan platform <span className="text-white font-medium">FAZCBT</span> yang dikembangkan oleh <span className="text-primary font-medium">FAZ Cyberautics Solutions</span>, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku. Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak menggunakan layanan kami.
                        </p>
                        <p>
                            Istilah &quot;kami&quot; merujuk pada FAZCBT dan FAZ Cyberautics Solutions. Istilah &quot;pengguna&quot; merujuk pada seluruh pihak yang menggunakan platform, termasuk siswa, guru, administrator sekolah, dan pihak institusi pendidikan.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">2. Layanan Platform</h2>
                        <p>FAZCBT menyediakan layanan platform simulasi ujian berbasis komputer (CBT) yang meliputi:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Simulasi ujian ANBK, AKMI, UTBK, PISA, dan AKM Kelas.</li>
                            <li>Assessment Test untuk evaluasi akademik.</li>
                            <li>Tes Gaya Belajar dan Tes Minat &amp; Bakat.</li>
                            <li>Dashboard admin untuk pengelolaan siswa, soal, jadwal ujian, dan laporan hasil.</li>
                            <li>Analisis hasil ujian dan laporan performa secara otomatis.</li>
                        </ul>
                        <p>
                            Kami berhak untuk menambah, mengubah, atau menghentikan fitur tertentu dari layanan kapan saja tanpa pemberitahuan sebelumnya.
                        </p>
                    </section>

                    {/* 3 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">3. Pendaftaran dan Akun</h2>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Pendaftaran dilakukan oleh pihak sekolah atau institusi pendidikan melalui proses registrasi resmi.</li>
                            <li>Setiap pengguna akan mendapatkan akun dengan kredensial unik (username dan password).</li>
                            <li>Pengguna bertanggung jawab penuh atas kerahasiaan kredensial akun masing-masing.</li>
                            <li>Pengguna dilarang membagikan akun kepada pihak lain yang tidak berwenang.</li>
                            <li>Kami berhak menonaktifkan atau menghapus akun yang terindikasi melanggar ketentuan.</li>
                        </ul>
                    </section>

                    {/* 4 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">4. Hak dan Kewajiban Pengguna</h2>
                        <p className="text-white font-medium">Pengguna berhak untuk:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Mengakses seluruh fitur layanan sesuai dengan paket yang didaftarkan.</li>
                            <li>Mendapatkan dukungan teknis terkait penggunaan platform.</li>
                            <li>Melihat hasil ujian dan laporan analisis secara transparan.</li>
                        </ul>
                        <p className="text-white font-medium mt-4">Pengguna wajib untuk:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Menggunakan platform sesuai dengan tujuan pendidikan dan evaluasi belajar.</li>
                            <li>Tidak melakukan tindakan kecurangan, manipulasi data, atau peretasan sistem.</li>
                            <li>Tidak menyebarkan, menggandakan, atau mendistribusikan konten soal tanpa izin.</li>
                            <li>Menjaga etika dan sopan santun dalam penggunaan platform.</li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">5. Hak Kekayaan Intelektual</h2>
                        <p>
                            Seluruh konten, desain, kode sumber, fitur, materi soal, logo, nama &quot;FAZCBT&quot;, dan &quot;FAZ Cyberautics Solutions&quot; merupakan hak kekayaan intelektual milik FAZ Cyberautics Solutions yang dilindungi oleh hukum yang berlaku di Indonesia.
                        </p>
                        <p>
                            Pengguna dilarang keras untuk menyalin, memodifikasi, mendistribusikan, menjual, atau menggunakan konten platform untuk kepentingan komersial tanpa persetujuan tertulis dari kami.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">6. Pembayaran dan Langganan</h2>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Layanan FAZCBT tersedia dalam berbagai paket berlangganan sesuai kebutuhan institusi.</li>
                            <li>Detail harga, durasi, dan cakupan fitur akan diinformasikan saat proses pendaftaran.</li>
                            <li>Pembayaran yang telah dilakukan bersifat <span className="text-white font-medium">tidak dapat dikembalikan (non-refundable)</span>, kecuali ditentukan lain dalam perjanjian tertulis.</li>
                            <li>Keterlambatan pembayaran dapat mengakibatkan penangguhan sementara akses layanan.</li>
                        </ul>
                    </section>

                    {/* 7 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">7. Ketersediaan Layanan</h2>
                        <p>
                            Kami berupaya menjaga ketersediaan platform secara optimal 24 jam sehari, 7 hari seminggu. Namun, kami tidak menjamin bahwa layanan akan selalu tersedia tanpa gangguan. Gangguan dapat terjadi karena:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Pemeliharaan sistem terjadwal maupun darurat.</li>
                            <li>Gangguan jaringan internet atau infrastruktur pihak ketiga.</li>
                            <li>Keadaan kahar (force majeure) seperti bencana alam atau kebijakan pemerintah.</li>
                        </ul>
                    </section>

                    {/* 8 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">8. Batasan Tanggung Jawab</h2>
                        <p>
                            FAZCBT dan FAZ Cyberautics Solutions <span className="text-white font-medium">tidak bertanggung jawab</span> atas:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Kerugian yang timbul akibat penggunaan platform yang tidak sesuai dengan ketentuan.</li>
                            <li>Kehilangan data akibat kelalaian pengguna dalam menjaga keamanan akun.</li>
                            <li>Gangguan layanan yang disebabkan oleh faktor di luar kendali kami.</li>
                            <li>Keputusan akademik atau institusional yang diambil berdasarkan hasil simulasi.</li>
                        </ul>
                        <p>
                            Hasil simulasi ujian pada platform merupakan alat bantu evaluasi dan <span className="text-white font-medium">bukan merupakan pengganti ujian resmi</span> yang diselenggarakan oleh lembaga pemerintah atau instansi terkait.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">9. Larangan</h2>
                        <p>Pengguna dilarang untuk:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Menggunakan platform untuk tujuan ilegal atau melanggar hukum.</li>
                            <li>Melakukan reverse engineering, decompiling, atau mengakses kode sumber platform.</li>
                            <li>Mengunggah konten yang bersifat SARA, pornografi, atau melanggar norma kesusilaan.</li>
                            <li>Menggunakan bot, script otomatis, atau alat lain untuk mengakses platform secara tidak sah.</li>
                            <li>Mengganggu, merusak, atau membebani infrastruktur dan server platform.</li>
                        </ul>
                    </section>

                    {/* 10 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">10. Pemutusan Layanan</h2>
                        <p>Kami berhak menangguhkan atau menghentikan akses pengguna terhadap platform jika:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Terbukti melanggar syarat dan ketentuan yang berlaku.</li>
                            <li>Terdapat indikasi kecurangan, penyalahgunaan, atau aktivitas mencurigakan.</li>
                            <li>Masa langganan telah berakhir dan tidak diperpanjang.</li>
                            <li>Atas permintaan resmi dari pihak sekolah/institusi yang bersangkutan.</li>
                        </ul>
                    </section>

                    {/* 11 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">11. Perubahan Syarat dan Ketentuan</h2>
                        <p>
                            Kami berhak mengubah atau memperbarui syarat dan ketentuan ini sewaktu-waktu. Perubahan akan dipublikasikan melalui platform dan berlaku efektif sejak tanggal publikasi. Penggunaan layanan setelah perubahan dipublikasikan dianggap sebagai persetujuan terhadap ketentuan yang diperbarui.
                        </p>
                    </section>

                    {/* 12 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">12. Hukum yang Berlaku</h2>
                        <p>
                            Syarat dan Ketentuan ini tunduk pada dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan secara musyawarah untuk mufakat. Apabila tidak tercapai kesepakatan, maka akan diselesaikan melalui jalur hukum yang berlaku di wilayah hukum Pengadilan Negeri Sukoharjo.
                        </p>
                    </section>

                    {/* 13 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">13. Hubungi Kami</h2>
                        <p>
                            Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami:
                        </p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-2">
                                <span className="text-secondary">📧</span>
                                <a href="mailto:info@fazcbt.id" className="text-secondary hover:underline">info@fazcbt.id</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-secondary">📱</span>
                                <a href="https://wa.me/62881080574850" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">+62 881-0805-74850 (WhatsApp)</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-secondary">📍</span>
                                <span>Jl. MT Haryono, Madegondo, Grogol, Sukoharjo</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Back button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/40"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Beranda
                    </Link>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-slate-900 border-t border-white/10 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} FAZCBT — by FAZ Cyberautics Solutions. Hak Cipta Dilindungi Undang-Undang.
                    </p>
                </div>
            </footer>
        </div>
    );
}
