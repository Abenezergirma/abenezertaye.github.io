export default function Things() {
    const vcpsChapters = [
        {
            label: "Chapters 1–2",
            titles: ['"Introduction"', '"Modeling Computation"'],
            pdf: "/VCPS/Verfiying%20CPS%201-2.pdf",
        },
        {
            label: "Chapter 3",
            titles: ['"Modeling Physical Systems"'],
            pdf: "/VCPS/Verfiying%20CPS%203-4.pdf",
        },
        {
            label: "Chapters 4–5",
            titles: ['"Modeling Cyberphysical Systems"', '"Composing Models"'],
            pdf: "/VCPS/Verifying%20CPS%204-5.pdf",
        },
        {
            label: "Chapter 6",
            titles: ['"Specifying Requirements"'],
            pdf: "/VCPS/Verfiying%20CPS%206.pdf",
        },
        {
            label: "Chapter 7",
            titles: ['"Verifying Invariants"'],
            pdf: "/VCPS/VCPS%207.pdf",
        },
        {
            label: "Chapter 8",
            titles: ['"Abstractions and Compositional Reasoning"'],
            pdf: "/VCPS/VCPS%208.pdf",
        },
        {
            label: "Chapter 9",
            titles: ['"Reachability Analysis"'],
            pdf: "/VCPS/VCPS%209.pdf",
        },
    ];

    return (
        <div className="container-custom pt-24 pb-12">
            <h1 className="text-3xl font-serif font-bold text-black">Things</h1>
            <div className="double-line-separator mb-12" />

            <div className="prose prose-lg text-black font-serif text-justify leading-relaxed mb-12">
                <p>Technical notes, unpublished works, and slides.</p>
            </div>

            {/* B.Sc. Thesis */}
            <section className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-black mb-2">B.Sc. Thesis</h2>
                <div className="double-line-separator mb-8" />

                <div className="relative bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
                    <div className="pl-6 p-4">
                        <a
                            href="/pdf/bsc_thesis.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold font-serif text-black hover:text-green-800 hover:underline leading-snug"
                        >
                            Design and Control of Autonomous Forklift for EPHARM Pharmaceuticals
                        </a>
                        <p className="text-xs text-gray-500 mt-1 font-serif">B.Sc. Thesis</p>
                    </div>
                </div>
            </section>

            {/* VCPS Seminar Slides */}
            <section className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-black mb-2">
                    Seminar Slides: <em>Verifying Cyber-Physical Systems</em>
                </h2>
                <div className="double-line-separator mb-8" />

                <div className="prose prose-lg text-black font-serif text-justify leading-relaxed mb-8">
                    <p>
                        I initiated, designed, and taught an informal seminar based on Prof. Sayan Mitra&apos;s book{' '}
                        <a
                            href="https://mitpress.mit.edu/9780262045292/verifying-cyber-physical-systems/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-green-800 hover:underline italic"
                        >
                            Verifying Cyber-Physical Systems
                        </a>
                        . The group met monthly and was primarily intended for PhD students interested in
                        safety-critical cyber-physical systems research.
                    </p>
                </div>

                <div className="space-y-3">
                    {vcpsChapters.map((ch, i) => (
                        <div
                            key={i}
                            className="relative bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
                            <div className="pl-6 p-4">
                                <span className="text-xs text-gray-500 font-serif uppercase tracking-wide">
                                    {ch.label}
                                </span>
                                <p className="text-sm font-serif text-black mt-0.5">
                                    {ch.pdf ? (
                                        <a
                                            href={ch.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-semibold text-black hover:text-green-800 hover:underline"
                                        >
                                            {ch.titles.join(' & ')}
                                        </a>
                                    ) : (
                                        ch.titles.join(' & ')
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
