import Image from "next/image";

const galleryItems = [
  {
    title: "EEE Green Initiative & Faculty–Student Tech Talk",
    image: "/images/eee-green-initiative.jpeg",
  },
  {
    title: "EEE’s Got Talent & Tech Meme / Reels Challenge",
    image: "/images/eees-got-talent.jpeg",
  },
  {
    title: "Hack the Grid – Mini Hackathon",
    image: "/images/hack-the-grid.jpeg",
  },
  {
    title: "RoboRace & Line Follower Showdown",
    image: "/images/roborace-lfr.jpeg",
  },
  {
    title: "Tech Expo, Poster Presentation & Circuit Combat",
    image: "/images/tech-expo-poster-circuit.jpeg",
  },
  {
    title: "Networking Session – Bridging Generations",
    image: "/images/bridging-generations.jpeg",
  },
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Event Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              <div className="p-4">
                <h3 className="text-center text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
