import React from 'react';
import { paperPdf } from '@/lib/publications';

export default function PubLink({ title, url, children, className }: { title: string; url: string; children?: React.ReactNode; className?: string }) {
  const href = paperPdf(title) ?? url;
  const isLocalPdf = href.startsWith('/papers/');
  const defaultCls = 'text-sm font-semibold font-serif text-black hover:text-green-800 hover:underline leading-snug';
  const ariaLabel = isLocalPdf
    ? `${title} (PDF, opens in a new tab)`
    : `${title} (publisher page, opens in a new tab)`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} title={title} className={className ?? defaultCls}>
      {children ?? title}
    </a>
  );
}
