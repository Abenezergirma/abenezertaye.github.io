import Image from 'next/image';

type Props = {
  title: string;
  authors: string;
  venue: string;
  year?: string;
  imageSrc: string;
  pdfPath?: string;
  codeUrl?: string;
};

function formatVenue(v: string, y?: string) {
  const venue = v || '';
  const year = y || '';
  if (/\b\d{4}\b/.test(venue)) return venue;
  const lower = venue.toLowerCase();

  if (lower.includes('scitech') || lower.includes('science and technology')) {
    return `AIAA SciTech, Orlando, FL, Jan. ${year}`;
  }
  if (lower.includes('aviation')) {
    return `AIAA Aviation, San Diego, CA, Jun. ${year}`;
  }
  if (lower.includes('dasc') || lower.includes('digital avionics')) {
    return `AIAA/IEEE Digital Avionics Systems Conference (DASC), Montreal, Canada, Sep. ${year}`;
  }

  return `${venue}${year ? `, ${year}` : ''}`;
}

export default function ResearchItem({ title, authors, venue, year, imageSrc, pdfPath, codeUrl }: Props) {
  return (
    <div className="flex gap-6 md:gap-8 items-start">
      <div className="shrink-0 w-36 md:w-72">
        <div className="w-full h-28 md:h-44 relative bg-gray-50 border border-gray-100 rounded-sm overflow-hidden">
          <Image src={imageSrc} alt={title} fill className="object-contain object-center" />
        </div>
      </div>

      <div className="flex-1 font-serif">
        <div className="flex flex-wrap items-center gap-x-2 mb-1">
          <h3 className="text-base font-bold text-black leading-snug">{title}</h3>
          <div className="flex items-center gap-2">
            {pdfPath ? (
              <a href={pdfPath} className="text-black/60 hover:text-green-800 transition-colors" title="PDF">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h8"></path><path d="M8 9h2"></path></svg>
              </a>
            ) : null}
            {codeUrl ? (
              <a href={codeUrl} className="hover:opacity-80 transition-opacity flex items-center" title="Code">
                <Image src="/images/icons/github_standard.png" alt="Github" width={20} height={20} className="rounded-full" />
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
