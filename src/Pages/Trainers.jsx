import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trainers = [
  {
    name: "RAVEN",
    role: "Strength Coach",
    bio: "Specialist in raw strength, discipline, and brutal consistency.",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
  },
  {
    name: "BLADE",
    role: "CrossFit Expert",
    bio: "Explosive endurance and high-intensity combat conditioning.",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
  {
    name: "ONYX",
    role: "Powerlifting",
    bio: "Heavy lifts. Silent dominance. Absolute control.",
    img: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50",
  },
  {
    name: "FURY",
    role: "Fat Loss Specialist",
    bio: "Burn fat, reshape mentality, rebuild identity.",
    img: "https://images.unsplash.com/photo-1571019613914-85f342c55f7f",
  },
];

const Trainers = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const modalRef = useRef(null);

  const [activeTrainer, setActiveTrainer] = useState(null);
  const [loaded, setLoaded] = useState({});

  // 🔥 STAGGER IN
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🔥 MODAL ANIMATION
  useEffect(() => {
  if (activeTrainer) {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  return () => {
    // 🔥 CLEANUP — VERY IMPORTANT
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };
}, [activeTrainer]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-zinc-950 px-6 py-24 text-white overflow-hidden"
    >
      <h2 className="mb-16 text-center text-4xl font-extrabold tracking-widest">
        TRAINERS
      </h2>

      {/* GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {trainers.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            onClick={() => setActiveTrainer(t)}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-900"
          >
            {/* SKELETON */}
            {!loaded[i] && (
              <div className="absolute inset-0 animate-pulse bg-zinc-800" />
            )}

            {/* IMAGE */}
            <img
              src={`${t.img}?auto=format&fit=crop&w=800&q=80`}
              loading="lazy"
              onLoad={() => setLoaded((p) => ({ ...p, [i]: true }))}
              alt={t.name}
              className={`h-105 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 ${
                loaded[i] ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

            {/* TEXT */}
            <div className="absolute bottom-6 left-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-sm opacity-80">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeTrainer && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveTrainer(null)}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] max-w-md rounded-xl bg-zinc-900 p-8 text-center"
          >
            <h3 className="text-2xl font-bold">{activeTrainer.name}</h3>
            <p className="mt-1 text-sm text-red-500">
              {activeTrainer.role}
            </p>
            <p className="mt-4 text-sm opacity-80">
              {activeTrainer.bio}
            </p>

            <button
              onClick={() => setActiveTrainer(null)}
              className="mt-6 rounded bg-red-600 px-6 py-2 font-semibold hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trainers;
