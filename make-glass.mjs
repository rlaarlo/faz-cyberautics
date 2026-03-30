import fs from 'fs';
import path from 'path';

const pagePath = path.resolve('src/app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// The Goal: Dark web modern theme (Glassmorphism)

// 1. Root and backgrounds
content = content.replace(/min-h-screen bg-slate-50 font-sans text-slate-800/g, 'min-h-screen bg-slate-950 font-sans text-white relative overflow-x-hidden selection:bg-primary/30');

// Navbar
content = content.replace(/nav className="fixed top-0 w-full bg-white\/80 backdrop-blur-md z-50 border-b border-slate-200"/g, 'nav className="fixed top-0 w-full bg-slate-950/50 backdrop-blur-xl z-50 border-b border-white/10"');

// 2. Sections
// #tentang
content = content.replace(/section id="tentang" className="py-20 bg-white border-y border-slate-100"/g, 'section id="tentang" className="py-20 bg-white/5 backdrop-blur-sm border-y border-white/5"');
// #layanan
content = content.replace(/section id="layanan" className="py-24 bg-slate-50"/g, 'section id="layanan" className="py-24 bg-slate-950/80"');
// #keunggulan
content = content.replace(/section id="keunggulan" className="py-24 bg-white"/g, 'section id="keunggulan" className="py-24 bg-slate-950 relative"');

// 3. Typography
content = content.replace(/text-slate-800/g, 'text-white');
content = content.replace(/text-slate-700/g, 'text-white/90');
content = content.replace(/text-slate-600/g, 'text-white/70');
content = content.replace(/text-slate-500/g, 'text-white/50');

// 4. Cards and items
content = content.replace(/bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group/g, 'bg-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all group');
content = content.replace(/bg-white p-4 rounded-xl shadow-lg border border-white\/50/g, 'bg-slate-950/80 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/10');
content = content.replace(/bg-white\/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white\/50/g, 'bg-slate-950/80 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/10');

// "Request Demo" secondary button
content = content.replace(/bg-white text-white\/90 font-semibold rounded-full border-2 border-slate-200 hover:border-primary\/20 hover:bg-primary\/5/g, 'bg-white/5 backdrop-blur-md text-white font-semibold rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10');

// CheckCircle, icons that might use dark mode adaptations (ensure primary colors contrast well)
// The primary gradient is already bright and glowing.
content = content.replace(/shadow-primary\/25/g, 'shadow-primary/40');
content = content.replace(/shadow-primary\/30/g, 'shadow-primary/50');
content = content.replace(/bg-primary\/10/g, 'bg-primary/20');
content = content.replace(/bg-gradient-to-tr from-primary\/20 to-secondary\/20 rounded-3xl blur-2xl opacity-70/g, 'bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-[100px] opacity-40');

// Specific text adjustments for visibility:
content = content.replace(/text-white font-bold mb-4/g, 'text-white font-bold mb-4');

content = content.replace(/border-slate-800/g, 'border-white/10');
content = content.replace(/border-t border-white\/10 pt-8/g, 'border-t border-white/10 pt-8');

fs.writeFileSync(pagePath, content);
console.log('done applying dark glass theme');
