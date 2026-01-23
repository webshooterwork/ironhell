import { useEffect, useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from([leftRef.current, formRef.current], {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div ref={leftRef}>
          <h2 className="text-4xl font-extrabold tracking-widest">
            CONTACT
          </h2>
          <p className="mt-6 text-sm opacity-80 leading-relaxed">
            This is not a casual gym.  
            If you are ready to train with discipline, intensity, and purpose —
            reach out.
          </p>

          <div className="mt-8 space-y-4 text-sm opacity-85">
            <p>📍 Sector 17, Chandigarh</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ ironhell@gym.com</p>
          </div>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          className="rounded-xl bg-zinc-900 p-8"
        >
          <div className="mb-6">
            <label className="mb-2 block text-xs uppercase tracking-widest opacity-70">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded bg-zinc-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-xs uppercase tracking-widest opacity-70">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded bg-zinc-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div className="mb-8">
            <label className="mb-2 block text-xs uppercase tracking-widest opacity-70">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us why you want to train here"
              className="w-full rounded bg-zinc-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-red-600 py-3 font-bold uppercase tracking-wider transition hover:bg-red-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
