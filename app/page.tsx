import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/eee-technoverse-logo.png"
              alt="EEE Technoverse 2026 Logo"
              width={520}
              height={200}
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
            EEE TECHNOVERSE 2026
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            The Ultimate Tech & Culture Experience
          </p>

          {/* Event Info */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold">January 16–17, 2026</span>
            <br />
            Organized by the Department of Electrical & Electronic Engineering
            (EEE)
            <br />
            Atish Dipankar University of Science & Technology (ADUST)
          </p>
        </div>
      </section>

{/* NOTICE & NEWS SECTION */}
<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-5xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">
        📢 Notice & News
      </h2>
      <p className="mt-3 text-gray-600">
        Important announcements and latest updates regarding EEE Technoverse 2026
      </p>
    </div>

    {/* Notices */}
    <div className="space-y-6">

      {/* Notice 1 */}
      <div className="bg-white border-l-4 border-red-600 rounded-lg p-6 shadow-sm">
        <h3 className="font-semibold text-lg text-gray-900">
          EEE Technoverse 2026 - Technical Segments 
        </h3>
        <p className="mt-2 text-gray-700">
          Registration is now open for all segments of EEE Technoverse 2026.
          These segments are only open to ADUST students. Interested participants are requested to complete their registration
          through the designated registration links.
        </p>
        <a
          href="/segments/university"
          className="inline-block mt-3 text-blue-700 font-semibold underline"
        >
          Find further details and Register →
        </a>
      </div>

      {/* Notice 2 */}
      <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-sm">
        <h3 className="font-semibold text-lg text-gray-900">
          ElectroQuiz 2026 – Rules & Curriculum Released
        </h3>
        <p className="mt-2 text-gray-700">
          The detailed rules, syllabus, and competition format for ElectroQuiz 2026 have been published.
          ElectroQuiz is ONLY FOR COLLEGE AND POLYTECHNIC students.
        </p>
        <a
          href="/segments/college"
          className="inline-block mt-3 text-blue-700 font-semibold underline"
        >
          View ElectroQuiz Details →
        </a>
      </div>

      {/* Notice 3 */}
      <div className="bg-white border-l-4 border-indigo-600 rounded-lg p-6 shadow-sm">
        <h3 className="font-semibold text-lg text-gray-900">
          Virtual Competitions Registration Open
        </h3>
        <p className="mt-2 text-gray-700">
          Registration is now open for virtual photography, meme, and reel
          competitions. Open to all ADUST students.
        </p>
        <a
          href="/segments/Virtual"
          className="inline-block mt-3 text-blue-700 font-semibold underline"
        >
          Explore Virtual Competitions →
        </a>
      </div>

    </div>
  </div>
</section>






      {/* ABOUT EVENT SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About EEE Technoverse 2026
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              EEE TECHNOVERSE 2026 is a two-day celebration of innovation,
              creativity, culture, and community spirit. Organized by the
              Department of Electrical & Electronic Engineering (EEE), ADUST,
              the event brings together brilliant students, inspiring alumni,
              industry professionals, researchers, and innovators under one
              dynamic platform.
            </p>

            <p>
              From cutting-edge engineering challenges and robotics to creative
              showcases, quizzes, exhibitions, and cultural activities, EEE
              TECHNOVERSE 2026 is designed to ignite curiosity and collaboration
              across disciplines.
            </p>

            <p>
              Whether you are a technology enthusiast, an artist, a researcher,
              or a robotics-loving problem solver, EEE TECHNOVERSE 2026 offers
              something meaningful for everyone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
