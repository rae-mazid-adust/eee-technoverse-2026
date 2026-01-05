export default function VirtualCompetitions() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">

      {/* Header */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Virtual Photography, Meme & Reels Challenge
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Open for All ADUST Students
        </p>
      </section>

      {/* Cards Wrapper (IMPORTANT) */}
      <section className="space-y-8">

        {/* Photography Card */}
        <div className="max-w-xl mx-auto bg-white text-black rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-2">
            Photography Contest
          </h2>

          <p className="text-gray-600 mb-2">
            🎭⚙️ Creative Photography
          </p>

          <p className="mb-4">
            A unique platform where technology, humor, and creativity come together.
            Participants will showcase their photography skills.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScx6CNhoxn48D-9I51x2r4NkjYFheI4iTiRXiXRAGX5Ky0YCQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold"
          >
            Register Here →
          </a>
        </div>

        {/* Tech Meme & Reel Card */}
        <div className="max-w-xl mx-auto bg-white text-black rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-2">
            Tech Meme & Reel Challenge
          </h2>

          <p className="text-gray-600 mb-2">
            😂💡 When Tech Meets Creativity — It Goes VIRAL!
          </p>

          <p className="mb-4 space-y-1">
            <span className="block">🎥 Create tech-based memes or short reels</span>
            <span className="block">🚀 Blend innovation with creativity</span>
            <span className="block">😄 Make people laugh, think, and share</span>
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdh4XYo8Lw2Ne_caU6I1F5AUx0SjoDY_NlWAN7WAvMO6CY28A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold"
          >
            Register Here →
          </a>
        </div>

      </section>
    </main>
  );
}
