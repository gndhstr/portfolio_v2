import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "Logika dan Algoritma Pemrograman",
    description: "Issued Aug 2023 - Expires Aug 2026",
    url: "https://gamelab.id/certificate/GL7082243507",
  },
  {
    title: "Critical Thinking: Meningkatkan Kualitas Hidup dengan Berpikir Kritis",
    description: "Issued Aug 2023 - Expires Aug 2026",
    url: "https://gamelab.id/certificate/GL8138617476",
  },
  {
    title: "JavaScript dan jQuery",
    description: "Issued Aug 2023 - Expires Aug 2026",
    url: "https://gamelab.id/certificate/GL3148801452",
  },
  {
    title: "HTML, CSS, dan JavaScript",
    description: "Issued Sep 2023 - Expires Sep 2026",
    url: "https://gamelab.id/certificate/GL6848094394",
  },
  {
    title: "Creativity: Meningkatkan Ketrampilan Berpikir Kreatif",
    description: "Issued Sep 2023 - Expires Sep 2026",
    url: "https://gamelab.id/certificate/GL8371823865",
  },
  {
    title: "PHP dan MySQL",
    description: "Issued Oct 2023 - Expires Oct 2026",
    url: "https://gamelab.id/certificate/GL2357681206",
  },
  {
    title: "Communication: Meningkatkan Ketrampilan Komunikasi Untuk Menunjang Karir",
    description: "Issued Oct 2023 - Expires Oct 2026",
    url: "https://gamelab.id/certificate/GL6723958226",
  },
  {
    title: "Collaboration: Mengembangkan Kemampuan Kolaborasi di Era Digital",
    description: "Issued Oct 2023 - Expires Oct 2026",
    url: "https://gamelab.id/certificate/GL2428553434",
  },
  {
    title: "Bootstrap dan SASS",
    description: "Issued Oct 2023 - Expires Oct 2026",
    url: "https://gamelab.id/certificate/GL7313147812",
  },
  {
    title: "Laravel Framework",
    description: "Issued Nov 2023 - Expires Nov 2026",
    url: "https://gamelab.id/certificate/GL4716581838",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-purple-500/30 p-4 transition-all"
  >
    <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all"
    >
      Show Credential
    </a>
  </motion.div>
);

export default function Certificate() {
  return (
    <div className="mt-4">
      <div className="container w-full">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certificates.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
