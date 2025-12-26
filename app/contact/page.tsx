export default function Contact() {
  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold mb-8 text-center">
          Contact & Venue Information
        </h1>

        {/* CONTACT PERSONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Contact Persons
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Md. Niaz Mostakim</strong><br />
              Assistant Professor & Coordinator, Department of EEE, ADUST<br />
              📞 Contact: <a href="tel:+8801621480052" className="text-blue-600 underline">
                +880 1621-480052
              </a>
            </p>

            <p>
              <strong>Mazid Ishtique Ahmed</strong><br />
              Assistant Professor, Department of EEE, ADUST<br />
              Chairman, RAE<br />
              📞 Contact: <a href="tel:+8801917266806" className="text-blue-600 underline">
                +880 1917-266806
              </a>
            </p>
          </div>
        </section>

        {/* VENUE MAP */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Event Venue
          </h2>

          <p className="text-gray-700 mb-4">
            Atish Dipankar University of Science & Technology (ADUST)
          </p>

          <div className="w-full h-[450px] border">
            <iframe
              src="https://maps.google.com/maps?q=Atish%20Dipankar%20University%20of%20Science%20and%20Technology&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>

          <p className="mt-4">
            🔗 <a
              href="https://maps.app.goo.gl/DQmzcVr5xJMA35ix7"
              target="_blank"
              className="text-blue-600 underline"
            >
              Open location in Google Maps
            </a>
          </p>
        </section>
      </section>
    </main>
  );
}
