import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6">
        <img
          src="/GoldenHiveLogo.png"
          alt="Golden Hive Logo"
          className="w-80 mb-12"
        />
        <h1 className="text-5xl font-bold text-yellow-500 mb-4">
          Golden Hive Mobile Detailers
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-300">
          Luxury, premium mobile detailing - bringing shine & protection right
          to your driveway in and across Utah.
        </p>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 italic mb-6">
          This site is still under construction — thank you for your patience. The quote button still works.
        </p>

        <p className="text-xl font-semibold mb-8">(619) 370-0433</p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-400 transition"
        >
          Get a Quote Today
        </button>
      </section>

      {/* BOOKING POPUP */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-neutral-900 p-8 rounded-xl w-full max-w-lg shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-yellow-500 mb-6">
              Book Your Appointment
            </h2>
            <form
              action="https://formspree.io/f/xjkoqbrq"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-neutral-800 text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-neutral-800 text-white focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                className="w-full p-3 rounded bg-neutral-800 text-white focus:outline-none"
              />
              <select
                name="service"
                className="w-full p-3 rounded bg-neutral-800 text-white focus:outline-none"
                required
              >
                <option value="">Select Service</option>
                <option>Exterior Detail</option>
                <option>Interior Detail</option>
                <option>Full Detail</option>
                <option>Ceramic Coating</option>
              </select>
              <textarea
                name="message"
                placeholder="Additional details..."
                className="w-full p-3 rounded bg-neutral-800 text-white focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ABOUT SECTION */}
      <section className="py-16 bg-neutral-900 text-center px-6">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">Why Choose Us?</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          At Golden Hive, every detail is treated like a work of art. Our expert
          team uses top-tier products and meticulous care to give your vehicle
          the shine and protection it deserves — all from the comfort of your
          home.
        </p>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 bg-black text-center px-6">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-neutral-900 p-6 rounded-lg shadow">
            <p className="text-gray-300 italic">
              "Best detailing I’ve ever had. My car looks brand new!"
            </p>
            <p className="mt-4 font-bold text-yellow-500">— Erin C.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-lg shadow">
            <p className="text-gray-300 italic">
              "They came right to my house in Park City. Couldn’t be easier."
            </p>
            <p className="mt-4 font-bold text-yellow-500">— Austin P.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-lg shadow">
            <p className="text-gray-300 italic">
              "Luxury service, professional results. Worth every penny."
            </p>
            <p className="mt-4 font-bold text-yellow-500">— Pierson L.</p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16 bg-neutral-900 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">Placeholder Photos</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          <img src="/gallery/img1.jpg" alt="Detail 1" className="rounded-lg shadow-lg" />
          <img src="/gallery/img2.jpg" alt="Detail 2" className="rounded-lg shadow-lg" />
          <img src="/gallery/img3.jpg" alt="Detail 3" className="rounded-lg shadow-lg" />
          <img src="/gallery/img4.jpg" alt="Detail 4" className="rounded-lg shadow-lg" />
          <img src="/gallery/img5.jpg" alt="Detail 5" className="rounded-lg shadow-lg" />
          <img src="/gallery/img6.jpg" alt="Detail 6" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="py-10 bg-black text-center">
        <p className="text-lg">
          Call us at{" "}
          <a href="tel:+16193700433" className="text-yellow-500 font-bold">
            (619) 370-0433
          </a>{" "}
          or email us at{" "}
          <a
            href="mailto:goldenhivedetailers@gmail.com"
            className="text-yellow-500 font-bold"
          >
            goldenhivedetailers@gmail.com
          </a>
        </p>
        <p className="text-gray-500 mt-4">
          © {new Date().getFullYear()} Golden Hive Detailers. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
