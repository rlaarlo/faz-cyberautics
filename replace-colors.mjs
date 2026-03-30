import fs from 'fs';
import path from 'path';

const pagePath = path.resolve('src/app/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// The goal: 
// 1. Text colors: text-slate-900 -> text-slate-800
// 2. primary buttons (bg-blue-600) -> bg-gradient-to-br from-primary to-secondary 
// 3. icons and highlights (text-blue-600, border-blue-600, bg-blue-600, etc)

content = content.replace(/text-slate-900/g, 'text-slate-800');

// Replace standard blue classes to primary
content = content.replace(/bg-blue-600/g, 'bg-primary');
content = content.replace(/text-blue-600/g, 'text-primary');
content = content.replace(/border-blue-600/g, 'border-primary');
content = content.replace(/bg-blue-700/g, 'bg-primary-hover');
content = content.replace(/text-blue-700/g, 'text-primary-hover');
content = content.replace(/border-blue-200/g, 'border-primary\/20');
content = content.replace(/bg-blue-100\/50/g, 'bg-primary\/10');
content = content.replace(/bg-blue-100/g, 'bg-primary\/10');
content = content.replace(/bg-blue-50/g, 'bg-primary\/5');
content = content.replace(/shadow-blue-600\/20/g, 'shadow-primary\/30');
content = content.replace(/text-blue-500/g, 'text-primary');
content = content.replace(/text-blue-400/g, 'text-accent');

// For cyan and indigo used in some cards:
content = content.replace(/bg-cyan-50/g, 'bg-secondary\/10');
content = content.replace(/text-cyan-600/g, 'text-secondary');
content = content.replace(/group-hover:bg-cyan-600/g, 'group-hover:bg-secondary');

content = content.replace(/bg-indigo-50/g, 'bg-accent\/10');
content = content.replace(/text-indigo-600/g, 'text-accent');
content = content.replace(/group-hover:bg-indigo-600/g, 'group-hover:bg-accent');

// Gradients:
// from-blue-600 to-cyan-500 => from-primary to-secondary
content = content.replace(/from-blue-600 to-cyan-500/g, 'from-primary to-secondary');
content = content.replace(/from-blue-100 to-cyan-50/g, 'from-primary\/20 to-secondary\/20');

// Specific spots:
// Button fixes: any button with primary needs gradient
// 'px-5 py-2.5 bg-primary' => 'px-5 py-2.5 bg-gradient-to-r from-primary to-secondary hover:opacity-90'
content = content.replace(/bg-primary text-white font-medium rounded-full hover:bg-primary-hover transition-colors shadow-lg shadow-primary\/30/g, 'bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary\/30');

// Hero button
content = content.replace(/bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all shadow-xl shadow-blue-600\/25 hover:shadow-blue-600\/40 hover:-translate-y-0\.5/g, 'bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-primary\/40 hover:-translate-y-0.5 hover:opacity-90 transition-all shadow-xl shadow-primary\/25');

// CTA Buttons (bottom)
content = content.replace(/bg-primary text-white font-bold rounded-full hover:bg-slate-50 transition-colors shadow-2xl/g, 'bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:opacity-90 transition-opacity shadow-2xl hover:scale-105 transform');

// CTA section full background
content = content.replace(/section className="py-24 bg-primary relative overflow-hidden"/g, 'section className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden"');

// Fix text colors in cards
content = content.replace(/group-hover:bg-primary/g, 'group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary');

fs.writeFileSync(pagePath, content);
console.log('done replacing colors');
