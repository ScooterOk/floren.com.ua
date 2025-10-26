import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функція для витягування title зі змінної {% set title %}
function extractTitle(content) {
  const titleMatch = content.match(
    /\{%\s*set\s+title\s*=\s*["']([^"']+)["']\s*%\}/
  );
  return titleMatch ? titleMatch[1] : null;
}

// Функція для отримання всіх .njk файлів з папки pages
function getPages() {
  const pagesDir = path.join(__dirname, '../pages');
  const files = fs.readdirSync(pagesDir);

  const pages = files
    .filter((file) => file.endsWith('.njk') && file !== 'project-preview.njk')
    .map((file) => {
      const name = file.replace('.njk', '');
      const filePath = path.join(pagesDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Отримуємо title з файлу або генеруємо з імені
      const title =
        extractTitle(content) ||
        name
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

      return {
        name: name,
        title: title,
        filename: file,
        url: `/${name}.html`,
      };
    })
    .sort((a, b) => {
      // index.njk завжди перший
      if (a.name === 'index') return -1;
      if (b.name === 'index') return 1;
      // Решта сортується за алфавітом
      return a.name.localeCompare(b.name);
    });

  return pages;
}

export default {
  pages: getPages(),
};
