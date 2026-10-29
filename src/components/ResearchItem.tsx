import Image from 'next/image';
import { formatVenue } from '@/lib/publications';

type Props = {
  title: string;
  authors: string;
  venue: string;
  year?: string;
  imageSrc: string;
  pdfPath?: string;
  codeUrl?: string;
};

export default function ResearchItem({ title, authors, venue, year, imageSrc, pdfPath, codeUrl }: Props) {
  const isLocalPdf = pdfPath?.startsWith('/papers/');
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
      <div className="shrink-0 w-full sm:w-40 md:w-72">
        <div className="w-full h-48 sm:h-40 md:h-56 relative bg-transparent rounded-lg overflow-hidden">
          <Image src={imageSrc} alt={title} fill className="object-contain object-center" />
        </div>
      </div>

      <div className="flex-1 font-serif">
        <div className="flex flex-wrap items-center gap-x-2 mb-1">
          <h3 className="text-base font-bold text-black leading-snug">
            {pdfPath ? (
              <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="hover:text-green-800 hover:underline">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <div className="flex items-center gap-2">
            {pdfPath ? (
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-green-800 transition-colors"
                title={isLocalPdf ? 'PDF' : 'Paper'}
                aria-label={`${title} (${isLocalPdf ? 'PDF' : 'publisher page'}, opens in a new tab)`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h8"></path><path d="M8 9h2"></path></svg>
              </a>
            ) : null}
            {codeUrl ? (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center" title="Code" aria-label={`${title} code on GitHub`}>
                <Image src="/images/icons/github_standard.png" alt="" width={20} height={20} className="rounded-full" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="text-black text-sm mb-1">
          <span dangerouslySetInnerHTML={{ __html: authors }} />
        </div>

        <div className="text-black text-sm italic">
          {formatVenue(venue, year)}
        </div>
      </div>
    </div>
  );
}
