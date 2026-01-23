import { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import Lenis from "lenis";

const Navbar = () => {
  const navRef = useRef(null);
  const underlineRefs = useRef([]);
  const mobileMenuRef = useRef(null);
  const menuTl = useRef(null);
  const lastScrollY = useRef(0);

  // ---------- LENIS ----------
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // ---------- NAVBAR SCROLL + COLOR ----------
  useEffect(() => {
    const nav = navRef.current;

    const showNav = () => {
      gsap.to(nav, { y: 0, duration: 0.4, ease: "power2.out" });
    };

    const hideNav = () => {
      gsap.to(nav, { y: "-100%", duration: 0.4, ease: "power2.out" });
    };

    const onScroll = () => {
      const y = window.scrollY;

      // hide / show
      if (y > lastScrollY.current && y > 80) hideNav();
      else showNav();

      // color change
      if (y > 50) {
        nav.classList.add("bg-black/90");
        nav.classList.remove("bg-black/60");
      } else {
        nav.classList.add("bg-black/60");
        nav.classList.remove("bg-black/90");
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---------- MOBILE MENU ----------
  useEffect(() => {
    menuTl.current = gsap.timeline({ paused: true });

    menuTl.current.fromTo(
      mobileMenuRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.6, ease: "power4.out" }
    );
  }, []);

  const openMenu = () => menuTl.current.play();
  const closeMenu = () => menuTl.current.reverse();

  // ---------- UNDERLINE HOVER ----------
  const onEnter = (i) => {
    gsap.to(underlineRefs.current[i], {
      scaleX: 1,
      transformOrigin: "left",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onLeave = (i) => {
    gsap.to(underlineRefs.current[i], {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Programs", to: "/programs" },
    { name: "Trainers", to: "/trainers" },
    { name: "Pricing", to: "/pricing" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-md transition-colors"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 text-white">
          {/* LOGO */}
          <Link to="/" className="text-xl font-extrabold tracking-widest">
            IRON<span className="text-red-600">HELL</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden gap-8 md:flex">
            {links.map((link, i) => (
              <div
                key={i}
                className="relative cursor-pointer uppercase text-sm font-semibold"
                onMouseEnter={() => onEnter(i)}
                onMouseLeave={() => onLeave(i)}
              >
                <Link to={link.to}>{link.name}</Link>
                <span
                  ref={(el) => (underlineRefs.current[i] = el)}
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-red-600 rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={openMenu} className="md:hidden text-xl lg:hidden">
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 z-50 h-screen w-full bg-black text-white translate-x-full"
      >
        <button
          onClick={closeMenu}
          className="absolute right-6 top-6 text-2xl lg:hidden"
        >
          ✕
        </button>

        <div className="flex h-full flex-col items-center justify-center gap-8 text-2xl font-bold uppercase lg:hidden">
          {links.map((link, i) => (
            <Link key={i} to={link.to} onClick={closeMenu}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
