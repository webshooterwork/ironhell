import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: "Strength Training",
    desc: "Pure power. No excuses.",
  },
  {
    title: "CrossFit",
    desc: "Endurance meets brutality.",
  },
  {
    title: "Fat Loss",
    desc: "Burn until nothing remains.",
  },
  {
    title: "Powerlifting",
    desc: "Lift heavy. Rule silently.",
  },
];

const Programs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // STAGGER IN
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 120,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D HOVER
  const handleMove = (e, i) => {
    const card = cardsRef.current[i];
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -15;
    const rotateY = ((x / rect.width) - 0.5) * 15;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (i) => {
    gsap.to(cardsRef.current[i], {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black px-6 py-24 text-white"
    >
      <h2 className="mb-16 text-center text-4xl font-extrabold tracking-widest">
        PROGRAMS
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 perspective-1000">
        {programs.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            onMouseMove={(e) => handleMove(e, i)}
            onMouseLeave={() => handleLeave(i)}
            className="relative rounded-xl bg-zinc-900 p-8 transition-shadow hover:shadow-[0_0_40px_rgba(255,0,0,0.3)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-xl font-bold tracking-wide">
              {p.title}
            </h3>
            <p className="mt-4 text-sm opacity-80">
              {p.desc}
            </p>

            {/* accent */}
            <span className="absolute bottom-0 left-0 h-1 w-full bg-red-600" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
