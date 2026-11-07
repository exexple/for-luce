import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { albumMeta, navOrder } from "../data/album";

export default function AlbumNavigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);

  // Keep the opening screen uncluttered; show the index inside the album.
  if (location.pathname === "/") return null;

  const linkClass = ({ isActive }) =>
    `transition-opacity hover:opacity-100 ${isActive ? "opacity-100" : "opacity-45"}`;

  return (
    <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm bg-ivory/40">
      <div className="flex items-center justify-between px-5 sm:px-8 py-4 font-sans text-xs">
        <NavLink to="/" className="font-serif text-base tracking-wide">
          {albumMeta.siteName}
        </NavLink>

        <ul className="hidden md:flex items-center gap-6 tracking-wide">
          {navOrder.map((item) => (
            <li key={item.route}>
              <NavLink to={item.route} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="md:hidden tracking-widest2 uppercase opacity-60"
          aria-expanded={open}
          aria-controls="album-index"
        >
          {open ? "close" : "index"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="album-index"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-ivory/95 px-5 pb-4 font-sans text-sm"
          >
            {navOrder.map((item) => (
              <li key={item.route} className="py-2 border-t border-ink/10">
                <NavLink to={item.route} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
