import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import {
  simakeupA, simakeupB, simakeupC,
  bisindoA, bisindoB, bisindoC,
  ratingpageA, ratingpageB, ratingpageC,
  salerokitoA, salerokitoB, salerokitoC,
  diskominfoA, diskominfoB, diskominfoC,
  dalanganA, dalanganB, dalanganC,
  escA, escB, escC,
  eyecareA, vectorA, vectorB,
  tridA, tridB, tridC
} from "../../../assets/codingprjct/codingproject";

// === Data ===
const codingProjects = [
  {
    id: 1,
    title: "Company Financial Management System",
    description: "A web-based application to record company income and expenses.",
    image: simakeupA,
    carouselImages: [simakeupA, simakeupB, simakeupC],
  },
  {
    id: 2,
    title: "Indonesian Sign Language Translator",
    description: "A CNN-based translator application for Indonesian Sign Language (BISINDO).",
    image: bisindoA,
    carouselImages: [bisindoA, bisindoB, bisindoC],
  },
  {
    id: 3,
    title: "FT UNNES Service Rating Website",
    description: "A service satisfaction rating website for the Faculty of Engineering UNNES with real-time updates.",
    image: ratingpageA,
    carouselImages: [ratingpageA, ratingpageB, ratingpageC],
  },
  {
    id: 4,
    title: "Salero Kito Restaurant Website",
    description: "A website for the Padang restaurant Salero Kito, serving as an information and food ordering platform.",
    image: salerokitoA,
    carouselImages: [salerokitoA, salerokitoB, salerokitoC],
  },
  {
    id: 5,
    title: "Diskominfo Semarang Internship Website",
    description: "A web-based system to manage internship participants at Diskominfo, Semarang City.",
    image: diskominfoA,
    carouselImages: [diskominfoA, diskominfoB, diskominfoC],
  },
  {
    id: 6,
    title: "Dalangan Village Website",
    description: "A website introducing village information, potential, and local businesses (UMKM).",
    image: dalanganA,
    carouselImages: [dalanganA, dalanganB, dalanganC],
  },
  {
    id: 7,
    title: "Electrical Science Club Website",
    description: "An official website for the Electrical Science Club organization.",
    image: escA,
    carouselImages: [escA, escB, escC],
  },
];

const designProjects = [
  {
    title: "UI/UX Eyecare – Gemastik 2023",
    description: "UI/UX design for the Eyecare app submitted to the Gemastik 2023 competition.",
    image: eyecareA,
  },
  {
    title: "Ryujin Vector Art",
    description: "Vector artwork of Shin Ryujin.",
    image: vectorA,
  },
  {
    title: "Han So Hee Vector Art",
    description: "Vector artwork of Han So Hee.",
    image: vectorB,
  },
  {
    title: "3D Model – Faith",
    description: "A 3D model titled 'Faith', created using Blender.",
    image: tridA,
  },
  {
    title: "3D Model – Two Lost Souls",
    description: "A 3D model titled 'Two Lost Souls', created using Blender.",
    image: tridB,
  },
  {
    title: "3D Model – Vending Machine",
    description: "A 3D model of a vending machine, created using Blender.",
    image: tridC,
  },
];

// === Carousel Component ===
const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const x = useMotionValue(0);
  const ref = useRef();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    x.set(-current * (ref.current?.offsetWidth || 0));
  }, [current, x]);

  return (
    <div className="relative w-full overflow-hidden" ref={ref}>
      <motion.div className="flex" style={{ x }} transition={{ duration: 0.4 }}>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`carousel-${idx}`} className="min-w-full h-60 object-cover rounded-xl" />
        ))}
      </motion.div>

      {/* Arrows */}
      <button onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)} className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-md">
        ←
      </button>
      <button onClick={() => setCurrent((prev) => (prev + 1) % images.length)} className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-md">
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`w-2.5 h-2.5 rounded-full ${current === idx ? "bg-purple-500" : "bg-white/30"}`} />
        ))}
      </div>
    </div>
  );
};

// === Card Component ===
const ProjectCard = ({ project, onClick, isCoding }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-purple-500/30 p-4 transition-all"
  >
    <img src={project.image} alt={project.title} className="rounded-lg mb-3 h-40 w-full object-cover" />
    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
    <p className="text-sm text-gray-300 mb-2">{project.description}</p>
    <button onClick={onClick} className="mt-2 px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-full">
      {isCoding ? "Detail" : "View Image"}
    </button>
  </motion.div>
);

// === Main Component ===
export default function ProjectSwitcher() {
  const [activeTab, setActiveTab] = useState("coding");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllPopup, setShowAllPopup] = useState(false);

  const currentProjects = activeTab === "coding" ? codingProjects : designProjects;
  const visibleProjects = currentProjects.slice(0, 4);

  return (
    <div className="container w-full mx-auto">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 justify-center">
        <button onClick={() => { setActiveTab("coding"); setShowAllPopup(false); }} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "coding" ? "bg-purple-600 text-white" : "bg-white/10 text-white border border-white/20"}`}>
          Programming Project
        </button>
        <button onClick={() => { setActiveTab("design"); setShowAllPopup(false); }} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "design" ? "bg-purple-600 text-white" : "bg-white/10 text-white border border-white/20"}`}>
          Graphic Design Project
        </button>
      </div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} isCoding={activeTab === "coding"} onClick={() => setSelectedProject(project)} />
          ))}
        </motion.div>
      </AnimatePresence>

      {currentProjects.length > 4 && (
        <div className="flex justify-center mt-6">
          <button onClick={() => setShowAllPopup(true)} className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 text-sm">
            See More
          </button>
        </div>
      )}

      {/* Modal Detail Project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md flex items-center justify-center z-50" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} className="bg-[#111] rounded-xl p-6 max-w-lg w-full text-white">
              <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{selectedProject.description}</p>
              {selectedProject.carouselImages ? (
                <Carousel images={selectedProject.carouselImages} />
              ) : (
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg" />
              )}
              <button onClick={() => setSelectedProject(null)} className="mt-4 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 rounded-full">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Semua Project */}
      <AnimatePresence>
        {showAllPopup && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md flex items-center justify-center z-50" onClick={() => setShowAllPopup(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} className="bg-[#111] rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto text-white">
              <h2 className="text-xl font-bold mb-4">Semua Project {activeTab === "coding" ? "Coding" : "Desain"}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} isCoding={activeTab === "coding"} onClick={() => {
                    setSelectedProject(project);
                    setShowAllPopup(false);
                  }} />
                ))}
              </div>
              <button onClick={() => setShowAllPopup(false)} className="mt-6 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 rounded-full">
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
