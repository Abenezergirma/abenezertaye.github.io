import Image from 'next/image';

export default function PersonalInterests() {
    const interests = [
        {
            src: '/images/personal/aircraft_flying.jpg',
            alt: 'Flying a GA aircraft',
            description: 'Learning to Fly',
            aspectRatio: 'aspect-[4/3]', // Adjust based on actual image dims if needed
        },
        {
            src: '/images/personal/biking.jpg',
            alt: 'Biking in DC',
            description: 'Biking – Washington DC',
            aspectRatio: 'aspect-[4/3]',
        },
        {
            src: '/images/personal/soccer.jpg',
            alt: 'Playing soccer',
            description: 'Playing soccer – Washington DC',
            aspectRatio: 'aspect-[4/3]',
        },
        {
            src: '/images/personal/hiking.jpeg',
            alt: 'Hiking in Harpers Ferry',
            description: 'Hiking – Harpers Ferry, West Virginia',
            aspectRatio: 'aspect-[4/3]',
        },
    ];

    return (
        <div className="container-custom pt-24 pb-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-serif font-bold text-black">
                    Personal Interests
                </h1>
                <div className="double-line-separator mb-12" />

                <div className="prose prose-lg text-black font-serif text-justify leading-relaxed mb-12">
                    <p>
                        When I’m not working on my research, I like to spend time outdoors biking, hiking, and flying an aircraft. I also enjoy running, playing soccer, and reading nonfiction books.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={interest.src}
                                    alt={interest.alt}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>

                            <div className="p-4 bg-white">
                                <p className="text-gray-800 font-medium text-center font-serif">
                                    {interest.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
