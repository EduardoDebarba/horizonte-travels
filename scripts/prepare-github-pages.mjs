import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const outDir = join(root, 'gh-pages');
const clientDir = join(root, 'dist', 'client');
const prerenderDir = join(root, 'dist', 'server', 'prerendered-routes');
const staticTarget = join(outDir, 'static');
const repositoryPath = '/horizonte-travels';

function resolveStaticSource() {
  const candidates = [
    join(clientDir, '_next', 'static'),
    join(clientDir, 'horizonte-travels', '_next', 'static'),
  ];

  const match = candidates.find((candidate) => existsSync(candidate));
  if (!match) {
    throw new Error('Could not find generated _next/static assets.');
  }

  return match;
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

function copyDirectoryContents(source, target) {
  mkdirSync(target, { recursive: true });

  for (const entry of readdirSync(source, { withFileTypes: true })) {
    const sourcePath = join(source, entry.name);
    const targetPath = join(target, entry.name);

    if (entry.isDirectory()) {
      copyDirectoryContents(sourcePath, targetPath);
    } else if (entry.isFile()) {
      copyFileSync(sourcePath, targetPath);
    }
  }
}

copyDirectoryContents(clientDir, outDir);
copyDirectoryContents(prerenderDir, outDir);

rmSync(join(outDir, '_next'), { recursive: true, force: true });
rmSync(join(outDir, 'horizonte-travels'), { recursive: true, force: true });
mkdirSync(staticTarget, { recursive: true });
copyDirectoryContents(resolveStaticSource(), staticTarget);

const rewritableExtensions = new Set(['.html', '.rsc', '.js', '.css']);

function rewriteFile(path) {
  if (![...rewritableExtensions].some((extension) => path.endsWith(extension))) {
    return;
  }

  const original = readFileSync(path, 'utf8');
  const rewritten = original
    .replaceAll(`${repositoryPath}/_next/static/`, `${repositoryPath}/static/`)
    .replaceAll('/_next/static/', `${repositoryPath}/static/`)
    .replace(/(href|src)="\/(?!horizonte-travels\/)/g, `$1="${repositoryPath}/`)
    .replace(/url\(\/(?!horizonte-travels\/)/g, `url(${repositoryPath}/`);

  if (rewritten !== original) {
    writeFileSync(path, rewritten);
  }
}

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(path);
    } else {
      rewriteFile(path);
    }
  }
}

walk(outDir);

writeFileSync(join(outDir, '.nojekyll'), '');

if (!existsSync(join(outDir, 'index.html'))) {
  throw new Error('GitHub Pages artifact is missing index.html.');
}

if (!existsSync(staticTarget)) {
  throw new Error('GitHub Pages artifact is missing static assets.');
}
