import { useEffect, useRef } from "react";
import gsap from "gsap";

const plans = [
  {
    name: "BASIC",
    price: "₹999",
    duration: "/month",
    features: [
      "Gym Access",
      "Standard Equipment",
      "Locker Facility",
    ],
    highlight: false,
  },
  {
    name: "MONSTER",
    price: "₹1999",
    duration: "/month",
    features: [
      "All Basic Features",
      "Personal Trainer",
      "Diet Guidance",
      "Group Classes",
    ],
    highlight: true,
  },
  {
    name: "DEMON",
    price: "₹3499",
    duration: "/month",
    features: [
      "All Monster Features",
      "1-on-1 Coaching",
      "Custom Diet Plan",
      "24/7 Access",
      "Priority Support",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 120,
      opacity: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="bg-black px-6 py-24 text-white">
      <h2 className="mb-6 text-center text-4xl font-extrabold tracking-widest">
        PRICING
      </h2>
      <p className="mb-16 text-center text-sm opacity-70">
        Choose your level of destruction.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`relative rounded-xl border p-8 text-center transition-transform duration-300 hover:-translate-y-2
              ${
                plan.highlight
                  ? "border-red-600 bg-zinc-900 scale-105 shadow-[0_0_40px_rgba(255,0,0,0.35)]"
                  : "border-zinc-800 bg-zinc-950"
              }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-1 text-xs font-bold tracking-widest">
                MOST CHOSEN
              </span>
            )}

            <h3 className="mb-4 text-xl font-extrabold tracking-widest">
              {plan.name}
            </h3>

            <div className="mb-6">
              <span className="text-4xl font-extrabold">
                {plan.price}
              </span>
              <span className="text-sm opacity-70">
                {plan.duration}
              </span>
            </div>

            <ul className="mb-8 space-y-3 text-sm opacity-85">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            <button
              className={`w-full rounded py-3 font-bold uppercase tracking-wider transition
                ${
                  plan.highlight
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
