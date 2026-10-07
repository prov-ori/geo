import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const f of ['index.html','style.css','app.js','core.js','content.js','countries.js','world.json','logo.svg','og-image.png']) await copyFile(f,`dist/${f}`);
console.log('Built GEO: static, offline-capable content, no runtime dependencies.');
