import fs from 'fs';
import path from 'path';
import React from 'react';

// Read available PDF filenames from public/papers at build time
let availablePapers: string[] = [];
try {
  const papersDir = path.join(process.cwd(), 'public', 'papers');
  availablePapers = fs.readdirSync(papersDir).filter((f) => /\.pdf$/i.test(f));
} catch (e) {
  availablePapers = [];
}

// Prefer explicit mapping file when available (created by tmp_confirm_pdfs.js)
let tmpMapping: Record<string, { year?: string; best?: string; score?: number }> = {};
try {
  const mapPath = path.join(process.cwd(), 'tmp_papers_mapping.json');
  if (fs.existsSync(mapPath)) {
    tmpMapping = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
  }
} catch (e) {
  tmpMapping = {};
}

const assignedMappedFiles = new Set<string>();

export function findMatchingFile(title: string): string | null {
  const mapped = tmpMapping[title];
  if (mapped && mapped.best && mapped.score && mapped.score >= 0.4) {
    const candidate = mapped.best;
    if (availablePapers.includes(candidate) && !assignedMappedFiles.has(candidate)) {
      assignedMappedFiles.add(candidate);
      return `/papers/${candidate}`;
    }
  }

  const titleWords = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  let best: { file: string; score: number } | null = null;
  for (const file of availablePapers) {
    const name = file.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const matches = titleWords.filter((w) => w.length > 2 && name.includes(w)).length;
    const score = matches / Math.max(1, titleWords.length);
    if (!best || score > best.score) best = { file, score };
  }

  if (best && best.score >= 0.35) {
    return `/papers/${best.file}`;
  }
  return null;
}

export default function PubLink({ title, url, children, className }: { title: string; url: string; children?: React.ReactNode; className?: string }) {
  const href = findMatchingFile(title) ?? url;
  const isLocalPdf = href?.startsWith('/papers/');
  const defaultCls = 'text-sm font-semibold font-serif text-black hover:text-green-800 hover:underline leading-snug';
  const ariaLabel = isLocalPdf
    ? `${title} — opens local PDF in a new tab`
    : `${title} — opens external link in a new tab`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} title={title} className={className ?? defaultCls}>
      {children ?? title}
    </a>
  );
}
