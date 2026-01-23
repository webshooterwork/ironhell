import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TITLE
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // BLOCKS
      gsap.from(blocksRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black px-6 py-24 text-white"
    >
      {/* TITLE */}
      <div className="mx-auto mb-20 max-w-4xl text-center">
        <h2
          ref={titleRef}
          className="text-4xl font-extrabold tracking-widest"
        >
          ABOUT US
        </h2>
        <p className="mt-6 text-sm opacity-75 leading-relaxed">
          We are not built for comfort.  
          We are built for transformation.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
        <div
          ref={(el) => (blocksRef.current[0] = el)}
          className="rounded-xl bg-zinc-900 p-8"
        >
          <h3 className="mb-4 text-xl font-bold tracking-wide">
            OUR PHILOSOPHY
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Discipline beats motivation.  
            Consistency beats talent.  
            We train the body to obey the mind.
          </p>
        </div>

        <div
          ref={(el) => (blocksRef.current[1] = el)}
          className="rounded-xl bg-zinc-900 p-8"
        >
          <h3 className="mb-4 text-xl font-bold tracking-wide">
            THE ENVIRONMENT
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            No mirrors for ego.  
            No shortcuts.  
            Just iron, sweat, and accountability.
          </p>
        </div>

        <div
          ref={(el) => (blocksRef.current[2] = el)}
          className="rounded-xl bg-zinc-900 p-8"
        >
          <h3 className="mb-4 text-xl font-bold tracking-wide">
            THE RESULT
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Stronger bodies.  
            Sharper minds.  
            People who do not quit when it hurts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
