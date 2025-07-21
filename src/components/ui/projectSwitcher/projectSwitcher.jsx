import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { simakeupA, simakeupB, simakeupC, bisindoA, bisindoB, bisindoC, ratingpageA, ratingpageB, ratingpageC, 
  salerokitoA, salerokitoB, salerokitoC, diskominfoA, diskominfoB, diskominfoC, dalanganA, dalanganB, dalanganC,
  escA, escB, escC, eyecareA, eyecareB, eyecareC, tridA, tridB, tridC, vectorA, vectorB } from "../../../assets/codingprjct/codingproject"

const codingProjects = [
  {
    id: 1,
    title: "Sistem Manajemen Keuangan Perusahaan",
    description: "Aplikasi berbasis web untuk mencatat pemasukan dan pengeluaran perusahaan.",
    image: simakeupA,
    carouselImages: [
      simakeupA,
      simakeupB,
      simakeupC,

    ],
  },
  {
    id: 2,
    title: "Aplikasi Penerjemah Bahasa Isyarat Indonesia",
    description: "Aplikasi penerjemah bahasa isyarat indonesia (BISINDO) berbasis CNN.",
    image: bisindoA,
    carouselImages: [
      bisindoA,
      bisindoB,
      bisindoC,
    ],
  },
  {
    id: 3,
    title: "Website Rating Page FT UNNES",
    description: "Website rating kepuasan layanan Fakultas Teknik UNNES dengan real time update.",
    image: ratingpageA,
    carouselImages: [
      ratingpageA,
      ratingpageB,
      ratingpageC,
    ],
  },
  {
    id: 4,
    title: "Website Rumah Makan Padang",
    description: "Website rumah makan padang Salero Kito sebagai media informasi dan pemesanan makanan.",
    image: salerokitoA,
    carouselImages: [
      salerokitoA,
      salerokitoB,
      salerokitoC,
    ],
  },
  {
    id: 5,
    title: "Website Magang Diskominfo Kota Semarang",
    description: "Website manajemen peserta magang di Diskominfo Kota Semarang.",
    image: diskominfoA,
    carouselImages: [
      diskominfoA,
      diskominfoB,
      diskominfoC,
    ],
  },
  {
    id: 6,
    title: "Website Desa Dalangan Klaten",
    description: "Website sebagai media pengenalan informasi, potensi, dan umkm desa.",
    image: dalanganA,
    carouselImages: [
      dalanganA,
      dalanganB,
      dalanganC,
    ],
  },
  {
    id: 7,
    title: "Website Electrical Science Club",
    description: "Website organisasi Electrical Science Club.",
    image: escA,
    carouselImages: [
      escA,
      escB,
      escC,
    ],
  },
];

const designProjects = [
  {
    title: "UI/UX Eyecare - Gemastik 2023",
    description: "Desain UI/UX aplikasi eyecare untuk Gemastik 2023.",
    image: eyecareA,
  },
  {
    title: "Vector Ryujin",
    description: "Vector art Shin RyuJin.",
    image: vectorA,
  },
  {
    title: "Vector HanSooHee",
    description: "Vector art Han Soo Hee.",
    image: vectorB,
  },
  {
    title: "3d Model - Faith",
    description: "3d Model - Faith made with blender 3d.",
    image: tridA,
  },
  {
    title: "3d Model - Two Lost Souls",
    description: "3d Model - Faith made with blender 3d.",
    image: tridB,
  },
  {
    title: "3d Model - Vending Machine",
    description: "3d Model - Vending machine made with blender 3d.",
    image: tridC,
  },
];

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const x = useMotionValue(0);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const translateX = useTransform(x, [0, 1], [0, -100]);

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex transition-transform ease-in-out duration-500"
        style={{ x: `-${current * 100}%` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`carousel-${idx}`}
            className="w-full object-cover rounded-xl"
          />
        ))}
      </motion.div>
    </div>
  );
};

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
    <button
      onClick={onClick}
      className="mt-2 px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-full"
    >
      {isCoding ? "Selengkapnya" : "Lihat Gambar"}
    </button>
  </motion.div>
);

export default function ProjectSwitcher() {
  const [activeTab, setActiveTab] = useState("coding");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container w-full mx-auto">
      <div className="flex gap-4 mb-6 justify-center">
        <button
          onClick={() => setActiveTab("coding")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === "coding"
              ? "bg-purple-600 text-white"
              : "bg-white/10 text-white border border-white/20"
          }`}
        >
          Programming Project
        </button>
        <button
          onClick={() => setActiveTab("design")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === "design"
              ? "bg-purple-600 text-white"
              : "bg-white/10 text-white border border-white/20"
          }`}
        >
          Graphic Design Project
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {(activeTab === "coding" ? codingProjects : designProjects).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isCoding={activeTab === "coding"}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] rounded-xl p-6 max-w-lg w-full text-white"
            >
              <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{selectedProject.description}</p>
              {selectedProject.carouselImages ? (
                <Carousel images={selectedProject.carouselImages} />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 rounded-full"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
