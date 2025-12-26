import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/eee-technoverse-logo.png"
              alt="EEE Technoverse 2026 Logo"
              width={520}
              height={200}
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            EEE TECHNOVERSE 2026
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6">
            The Ultimate Tech & Culture Experience
          </p>

          <p className="text-base md:text-lg text-gray-600">
            January 9–10, 2026 <br />
            Organized by the Department of Electrical & Electronic Engineering
            (EEE), Atish Dipankar University of Science & Technology (ADUST)
          </p>
        </div>
      </section>

      {/* ABOUT EVENT SECTION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            About EEE Technoverse 2026
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            EEE TECHNOVERSE 2026 is a two-day celebration of innovation,
            creativity, culture, and community spirit. Organized by the
            Department of Electrical & Electronic Engineering (EEE), ADUST, the
            event brings together brilliant students, inspiring alumni,
            industry professionals, researchers, and innovators under one
            dynamic platform.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            From cutting-edge engineering challenges and robotics to creative
            showcases, quizzes, exhibitions, and cultural activities, EEE
            TECHNOVERSE 2026 is designed to ignite curiosity and collaboration
            across disciplines.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you are a technology enthusiast, an artist, a researcher,
            or a robotics-loving problem solver, EEE TECHNOVERSE 2026 offers
            something meaningful for everyone.
          </p>
        </div>
      </section>
    </main>
  );
}
