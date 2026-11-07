import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AlbumNavigation from "./components/AlbumNavigation";
import GrainOverlay from "./components/GrainOverlay";

import Cover from "./pages/Cover";
import Chandni from "./pages/Chandni";
import FadeIntoYou from "./pages/FadeIntoYou";
import LineWithoutHook from "./pages/LineWithoutHook";
import MrsMagic from "./pages/MrsMagic";
import HeavenIsYou from "./pages/HeavenIsYou";
import SideB from "./pages/SideB";

export default function App() {
  const location = useLocation();

  return (
    <>
      <GrainOverlay />
      <AlbumNavigation />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Cover />} />
          <Route path="/chandni" element={<Chandni />} />
          <Route path="/fade-into-you" element={<FadeIntoYou />} />
          <Route path="/line-without-a-hook" element={<LineWithoutHook />} />
          <Route path="/mrs-magic" element={<MrsMagic />} />
          <Route path="/heaven-is-you" element={<HeavenIsYou />} />
          <Route path="/side-b" element={<SideB />} />
          <Route path="*" element={<Cover />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
