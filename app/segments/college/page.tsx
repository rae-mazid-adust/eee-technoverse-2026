export default function CollegeSegments() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">

      {/* Header */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          College & Polytechnic Level Event
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Academic competition exclusively for college and polytechnic students
        </p>
      </section>

      {/* Registration Banner */}
      <section className="max-w-4xl mx-auto mb-10 bg-indigo-500 text-white rounded-lg p-5 text-center font-semibold">
        👉 Registration for ElectroQuiz is open.{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe3U7YFK4CLRCu9t9JpeIeMhBPN30CaTCYEBqpVtydPKq9CgQ/viewform?usp=dialog"
          target="_blank"
          className="underline font-bold ml-1"
        >
          Register Here →
        </a>
      </section>

      {/* ElectroQuiz Card */}
      <section className="max-w-xl mx-auto bg-white text-black rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-2">
          🧠 ElectroQuiz: TechBrain Showdown
        </h2>

        <p className="text-gray-600 mb-2">
          🕒 11:00 AM – 12:30 PM
        </p>

        <p className="mb-4">
          Fast-paced academic quiz covering Physics, Electronics, Mathematics,
          and ICT fundamentals.
        </p>

        <p className="font-medium">
          🎯 Open to college & polytechnic students only 
        </p>
      </section>

    </main>
  );
}
