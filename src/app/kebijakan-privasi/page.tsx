import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Kebijakan Privasi - FAZCBT',
    description: 'Kebijakan privasi platform FAZCBT oleh FAZ Cyberautics Solutions.',
};

export default function KebijakanPrivasi() {
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
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Kebijakan Privasi</h1>
                        <p className="text-xs text-white/40 mt-1">Terakhir diperbarui: 6 Maret 2026</p>
                    </div>
                </div>

                <div className="space-y-8 text-sm text-white/70 leading-relaxed">
                    {/* 1 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">1. Pendahuluan</h2>
                        <p>
                            FAZCBT (&quot;kami&quot;, &quot;platform&quot;), yang dikembangkan oleh <span className="text-white font-medium">FAZ Cyberautics Solutions</span>, berkomitmen untuk melindungi privasi dan keamanan data pribadi seluruh pengguna, termasuk siswa, guru, tenaga pendidik, dan pihak sekolah/institusi pendidikan yang menggunakan layanan platform simulasi ujian kami.
                        </p>
                        <p>
                            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan platform FAZCBT.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">2. Informasi yang Kami Kumpulkan</h2>
                        <p>Kami mengumpulkan beberapa jenis informasi saat Anda menggunakan platform:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li><span className="text-white font-medium">Data Identitas:</span> Nama lengkap, Nomor Induk Siswa Nasional (NISN), kelas, dan nama sekolah.</li>
                            <li><span className="text-white font-medium">Data Akun:</span> Alamat email, username, dan kata sandi yang terenkripsi.</li>
                            <li><span className="text-white font-medium">Data Akademik:</span> Hasil ujian simulasi, skor, jawaban siswa, log aktivitas pengerjaan, waktu penyelesaian, dan laporan evaluasi.</li>
                            <li><span className="text-white font-medium">Data Teknis:</span> Alamat IP, jenis perangkat, sistem operasi, versi browser, dan log akses untuk keperluan keamanan.</li>
                            <li><span className="text-white font-medium">Data Sekolah/Institusi:</span> Nama sekolah, alamat, dan informasi kontak administrator.</li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">3. Penggunaan Informasi</h2>
                        <p>Informasi yang dikumpulkan digunakan untuk:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Menyediakan dan mengelola layanan simulasi ujian CBT.</li>
                            <li>Menampilkan hasil ujian, analisis nilai, dan laporan performa kepada siswa dan guru.</li>
                            <li>Mengembangkan dan meningkatkan kualitas layanan, fitur, dan pengalaman pengguna.</li>
                            <li>Memastikan keamanan dan mencegah penyalahgunaan atau kecurangan saat ujian berlangsung.</li>
                            <li>Komunikasi terkait layanan, pembaruan, dan dukungan teknis.</li>
                            <li>Memenuhi persyaratan hukum dan regulasi yang berlaku.</li>
                        </ul>
                    </section>

                    {/* 4 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">4. Perlindungan Data</h2>
                        <p>Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang memadai untuk melindungi data pribadi Anda, termasuk:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Enkripsi data dalam penyimpanan dan transmisi (SSL/TLS).</li>
                            <li>Sistem autentikasi dan otorisasi berlapis untuk mengontrol akses.</li>
                            <li>Pencadangan (backup) data secara berkala untuk mencegah kehilangan data.</li>
                            <li>Pembatasan akses hanya kepada personel yang berwenang.</li>
                            <li>Pemantauan dan pencatatan aktivitas sistem secara real-time.</li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">5. Berbagi Data dengan Pihak Ketiga</h2>
                        <p>
                            Kami <span className="text-white font-medium">tidak menjual, menyewakan, atau memperdagangkan</span> data pribadi pengguna kepada pihak ketiga mana pun. Data hanya dapat dibagikan dalam kondisi berikut:
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Kepada pihak sekolah/institusi terkait yang telah mendaftarkan siswa dalam sistem.</li>
                            <li>Kepada penyedia layanan infrastruktur (hosting, cloud) yang terikat perjanjian kerahasiaan.</li>
                            <li>Bila diwajibkan oleh hukum, peraturan pemerintah, atau perintah pengadilan yang berlaku.</li>
                        </ul>
                    </section>

                    {/* 6 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">6. Penyimpanan Data</h2>
                        <p>
                            Data pribadi akan disimpan selama diperlukan untuk menyediakan layanan, atau selama diwajibkan oleh ketentuan hukum yang berlaku. Jika data tidak lagi diperlukan, kami akan menghapus atau menganonimkan data tersebut secara aman.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">7. Hak Pengguna</h2>
                        <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
                        <ul className="list-disc list-inside space-y-2 pl-2">
                            <li>Mengakses dan melihat data pribadi Anda yang tersimpan dalam sistem.</li>
                            <li>Meminta koreksi atas data yang tidak akurat atau tidak lengkap.</li>
                            <li>Meminta penghapusan data pribadi Anda, selama tidak bertentangan dengan kewajiban hukum.</li>
                            <li>Menarik persetujuan penggunaan data kapan saja melalui kontak resmi kami.</li>
                        </ul>
                    </section>

                    {/* 8 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">8. Cookie dan Teknologi Pelacakan</h2>
                        <p>
                            Platform kami dapat menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman pengguna, menganalisis performa platform, dan menjaga keamanan sesi login. Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">9. Perlindungan Data Anak (Siswa)</h2>
                        <p>
                            Kami menyadari bahwa sebagian pengguna platform adalah anak-anak di bawah umur. Pengumpulan data siswa hanya dilakukan melalui akun sekolah/institusi yang terdaftar. Kami tidak mengumpulkan informasi secara langsung dari anak-anak tanpa sepengetahuan dan izin dari pihak sekolah atau wali yang berwenang.
                        </p>
                    </section>

                    {/* 10 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">10. Perubahan Kebijakan</h2>
                        <p>
                            Kami berhak untuk memperbarui atau mengubah Kebijakan Privasi ini sewaktu-waktu. Setiap perubahan akan diumumkan melalui platform dan/atau email terdaftar. Dengan terus menggunakan layanan setelah perubahan dipublikasikan, Anda dianggap menyetujui kebijakan yang telah diperbarui.
                        </p>
                    </section>

                    {/* 11 */}
                    <section className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                        <h2 className="text-base font-semibold text-white">11. Hubungi Kami</h2>
                        <p>
                            Jika Anda memiliki pertanyaan, keluhan, atau membutuhkan informasi lebih lanjut mengenai Kebijakan Privasi ini, silakan hubungi kami melalui:
                        </p>
                        <ul className="space-y-2 pl-2">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">📧</span>
                                <a href="mailto:info@fazcbt.id" className="text-primary hover:underline">info@fazcbt.id</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">📱</span>
                                <a href="https://wa.me/62881080574850" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+62 881-0805-74850 (WhatsApp)</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">📍</span>
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
