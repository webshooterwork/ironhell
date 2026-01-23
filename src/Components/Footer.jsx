import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-extrabold tracking-widest">
            IRON<span className="text-red-600">HELL</span>
          </h3>
          <p className="mt-4 text-sm opacity-70 leading-relaxed">
            Built for discipline.  
            Designed for transformation.  
            Weakness does not belong here.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest opacity-80">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500">About</Link></li>
            <li><Link to="/programs" className="hover:text-red-500">Programs</Link></li>
            <li><Link to="/trainers" className="hover:text-red-500">Trainers</Link></li>
            <li><Link to="/pricing" className="hover:text-red-500">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest opacity-80">
            Contact
          </h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li>📍 Sector 17, Chandigarh</li>
            <li>📞 +91 98765 43210</li>
            <li>✉ ironhell@gym.com</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest opacity-80">
            Final Call
          </h4>
          <p className="mb-4 text-sm opacity-70">
            If you are ready to train seriously — start now.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-red-700"
          >
            Join the Hell
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-zinc-800 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} IRONHELL GYM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
