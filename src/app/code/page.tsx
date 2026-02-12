export default function Code() {
    return (
        <div className="container-custom pt-24 pb-12">
            <h1 className="text-3xl font-serif font-bold text-black">
                Code
            </h1>
            <div className="double-line-separator mb-12" />
            <div className="prose prose-lg font-serif text-justify leading-relaxed">
                <p>
                    Open source code and software tools will be listed here.
                </p>

                {/* Example Item */}
                <div className="mt-8 space-y-2">
                    <h3 className="text-xl font-bold text-black"><a href="#" className="hover:text-green-800 hover:underline">Project Name</a></h3>
                    <p className="text-black">Description of the codebase or tool.</p>
                    <div className="text-sm font-mono text-black/50">[Python/C++]</div>
                </div>
            </div>
        </div>
    );
}
