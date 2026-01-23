import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const hero = useRef(null);
  const bg = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // intro
      gsap.from(bg.current, {
        scale: 1.2,
        duration: 1.4,
        ease: "power2.out",
      });

      // SAFE SCROLL EFFECT (NO PIN)
      gsap.to(bg.current, {
        y: 120,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: hero.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={hero}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div
        ref={bg}
        className="absolute inset-0 bg-black bg-cover bg-center"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col justify-center px-6 text-white">
        <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-extrabold">
          BUILD THE BEAST
        </h1>
        <p className="mt-4 opacity-80">
          Train. Destroy. Repeat.
        </p>
      </div>
    </section>
  );
};

export default Home;
