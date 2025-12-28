import SegmentCard from "@/components/SegmentCard";

export default function SegmentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black px-4 py-16">

      {/* Page Header */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Event Segments
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Event details are as following (subject to revision by the organizers)
        </p>
      </section>

      {/* DAY 1 */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-white mb-2">
          🔥 Day 1: Tech Innovation & Knowledge Fest
        </h2>
        <p className="text-slate-400 mb-8">
          Prototypes • Research • Hardware • Networking
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <SegmentCard
            category="⚙️ Hardware"
            title="Tech Expo: Project Showdown 2026"
            time="11:30 AM – 12:45 PM"
            description="Student-built tech prototypes from all departments showcasing innovation and impact."
            participants="15–20 teams"
            teamSize="Maximum 3 members"
            awards="Hardware • Automation • Green • AI"
          />

          <SegmentCard
            category="🧠 Knowledge"
            title="Tech Poster Presentation"
            description="Research-focused poster showcase highlighting final-year projects and emerging ideas."
            participants="Final-year & research-driven teams"
            teamSize="Maximum 3 members"
            awards="Best Technical Paper • Most Promising Idea"
          />

          <SegmentCard
            category="⚡ Hardware"
            title="Circuit Combat – Design Challenge"
            description="Fast-paced hardware design challenge testing creativity, speed, and circuit mastery."
            participants="20–25 teams"
            teamSize="Maximum 3 members"
            awards="Winner • Runner-Up medals"
          />

          <SegmentCard
            category="🤝 Networking"
            title="Networking Session: Bridging Generations"
            time="2:30 PM – 3:15 PM"
            description="Meet senior alumni, exchange experiences, and expand your professional network."
            participants="Outgoing & incoming batches"
          />

          <SegmentCard
            category="💡 Innovation"
            title="TechFusion Fair – Cross-disciplinary Booths"
            time="3:30 PM – 4:15 PM"
            description="Cross-disciplinary booths blending engineering, AI, IoT, and design innovation."
            participants="10–12 teams"
            teamSize="Maximum 3 members"
            awards="Best Interdisciplinary Project"
          />

          <SegmentCard
            category="🌱 Sustainability"
            title="EEE Green Initiative & Faculty–Student Tech Talk"
            time="4:16 PM – 5:15 PM"
            description="Faculty–student discussions on sustainability, energy efficiency, and green technologies."
          />
        </div>

        {/* Cultural Evening – Full Width */}
        <div className="mt-10">
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-sm font-semibold text-slate-600 mb-2">
              🎭 Cultural
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Cultural Evening: Lights of Innovation
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              🕕 6:00 PM – 9:00 PM
            </p>
            <p className="text-slate-700 mb-2">
              An open cultural night celebrating creativity, diversity, and community spirit.
            </p>
            <p className="text-slate-700">
              🎯 Open to all EEE students & guests
            </p>
          </div>
        </div>
      </section>

      {/* DAY 2 */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">
          🎉 Day 2: Culture, Fun & Connection
        </h2>
        <p className="text-slate-400 mb-8">
          Competitions • Creativity • Performance
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <SegmentCard
            category="🤖 Hardware"
            title="RoboRace & Line Follower Showdown"
            time="9:30 AM – 11:00 AM"
            description="Autonomous robots compete in speed, precision, and control challenges."
            participants="15–20 teams"
            teamSize="Maximum 3 members"
            awards="Winner • Runner-Up"
          />

          <SegmentCard
            category="💻 Software"
            title="Hack the Grid – Mini Hackathon"
            time="9:30 AM – 5:00 PM (Parallel Event)"
            description="Full-day coding and embedded challenge solving real-world engineering problems."
            participants="Programmers & embedded teams"
            teamSize="Maximum 3 members"
            awards="Champion Crest + Cash Prize"
          />

          <SegmentCard
            category="🧠 Quiz"
            title="ElectroQuiz: TechBrain Showdown"
            time="11:00 AM – 12:30 PM"
            description="Fast-paced quiz covering physics, electronics, math, and ICT fundamentals."
            participants="150–200 college students"
          />

          <SegmentCard
            category="🎤 Stage"
            title="EEE’s Got Talent – Stage Show"
            time="2:15 PM – 3:30 PM"
            description="Stage performances showcasing music, dance, comedy, and creative expression."
            participants="Performers from all EEE batches"
          />

          <SegmentCard
            category="🎨 Creative"
            title="Tech Meme & Reels Challenge"
            time="2:15 PM – 4:00 PM"
            description="Tech-based memes and short videos turning innovation into viral creativity."
            awards="Funniest • Most Creative"
          />
        </div>
      </section>

      {/* Footer Note */}
      <section className="max-w-7xl mx-auto mt-20 text-center">
        <p className="text-slate-300">
          👉 Registration for all segments is available via the{" "}
          <span className="font-semibold text-white">“Register”</span> tab in the navigation.
        </p>
      </section>

    </main>
  );
}
