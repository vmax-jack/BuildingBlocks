// // @ts-check
// import { defineConfig } from 'astro/config';

// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });


// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. 請改成你的 GitHub Page 網址前綴 (通常是 https://你的帳號.github.io)
  site: 'https://vmax-jack.github.io', 
  
  // 2. 請改成你的 GitHub 專案名稱 (Repository Name)
  // 如果你的倉庫網址是 github.com/jack/block-jack-site
  // 這裡就要寫 '/block-jack-site' (前面一定要有斜線)
  base: '/BuildingBlocks', 

  vite: {
    plugins: [tailwindcss()]
  }
});

