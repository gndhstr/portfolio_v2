import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Data Pengalaman ---
const experienceItems = [
  {
    title: "Village Website Developer",
    company: "UNNES GIAT 10, Klaten",
    date: "Nov 2024 – Jan 2025",
    description: "Developed a village information portal including tourism, business, and profiles. Built with usability in mind for non-technical users.",
  },
  {
    title: "Collaborative Web Project",
    company: "Faculty of Engineering, UNNES",
    date: "Jun 2024 – Aug 2024",
    description: "Designed and implemented a responsive UI for a public service satisfaction evaluation website integrated with real-time API.",
  },
  {
    title: "Internship",
    company: "Diskominfo Semarang City",
    date: "Feb 2024 – Jul 2024",
    description: "Monitored and maintained local government websites. Developed an internship management platform to support intern tracking.",
  },
  {
    title: "Fullstack Web Developer Bootcamp",
    company: "Gamelab.id (MSIB Program)",
    date: "Aug 2023 – Dec 2023",
    description: "Learned Laravel, JavaScript, PHP, HTML/CSS, and built a financial management system in a team project.",
  },
  {
    title: "Virtual Tour Website Developer",
    company: "SMKN 1 Semarang – Community Service",
    date: "Mar 2023 – Aug 2023",
    description: "Built a 3Sixty-based virtual school tour website in collaboration with university lecturers.",
  },
  {
    title: "Lab Assistant - Numerical Methods",
    company: "Universitas Negeri Semarang",
    date: "Feb 2023 – Apr 2023",
    description: "Assisted students in implementing numerical algorithms using MATLAB for computation exercises.",
  },
  {
    title: "Head of Communication Division",
    company: "Electrical Science Club – UNNES",
    date: "Feb 2022 – Feb 2024",
    description: "Led digital publications and created graphic designs for organizational activities. Participated in technical skill development programs.",
  },
];

// --- Komponen Item ---
const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

// --- Komponen Utama ---
const AnimatedList = ({
  items = experienceItems,
  onItemSelect,
  enableArrowNavigation = true,
  className = '',
  itemClassName = "bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-purple-500/30 transition-all duration-300",
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const scrollable = scrollHeight - clientHeight;
    const percent = (scrollTop / scrollable) * 100;
    setScrollProgress(scrollable > 0 ? percent : 0);
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) onItemSelect(items[selectedIndex], selectedIndex);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Scroll Container */}
      <div
        ref={listRef}
        onScroll={handleScroll}
        className="max-h-[400px] md:max-h-[350px] mt-2 mb-10 overflow-y-auto pt-4 pr-6 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.05 * index}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) onItemSelect(item, index);
            }}
          >
            <div className={`p-4 rounded-lg ${selectedIndex === index ? 'bg-[#222]' : 'bg-[#111]'} ${itemClassName}`}>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-purple-300">{item.company}</p>
              <p className="text-xs text-gray-400 italic">{item.date}</p>
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>

      <div className="absolute top-0 right-0 h-full w-2 bg-white/10 rounded">
        <div
          className="w-full bg-purple-500 rounded transition-all duration-200 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
  
};

export default AnimatedList;
