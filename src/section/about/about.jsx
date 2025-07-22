import React from 'react'
import TiltedCard from '../../components/ui/cardt/cardt'
import { FaLinkedin, FaExternalLinkAlt, FaCode, FaCertificate, FaBriefcase} from "react-icons/fa";
import Typing from '../../components/ui/typing/typing';
import SpotlightCard from '../../components/ui/componentCard/componentCard';
import profileImg from '../../assets/profilepic.png';


const About = () => {

  const typingSequence = [
    'IT Enthusiast',
    1500,
    'FullStack Developer',
    1500,
    'Graphic Designer',
    2000,
  ];

  return (
    <div className='container'>
      <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className='order-2 md:order-1'>
            <h1 className='text-3xl font-bold mb-3'>Hi, I'm Gandhi 👋</h1>
            <Typing sequence={typingSequence} className='text-purple-700' />
            <p className='text-justify'>
            Graduated top of class in Informatics and Computer Engineering Education (GPA 3.92/4.00) at Universitas Negeri Semarang. 
            Passionate about programming and design, with 3+ years of hands-on web development experience. Quick to adapt, strong in teamwork, and thrive under pressure.
            </p>
            <div className="flex gap-4 mt-4">
            <a
              href="/cv-gandhi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-white rounded-lg bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-600 hover:opacity-65 transition"
            >
              <FaExternalLinkAlt/>
              Lihat CV
            </a>
                <a href="https://www.linkedin.com/in/gndhstr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-purple-700 text-purple-700 rounded hover:bg-purple-700 hover:text-white transition" >
                    <FaLinkedin />
                </a>
            </div>
            </div>
            <div className='order-1 md:order-2'>
              <TiltedCard
                imageSrc={profileImg}
                imageHeight="h-[200px] md:h-[300px]"
                imageWidth="w-[200px] md:w-[300px]"
                containerHeight="h-[200px] md:h-[300px]"
                containerWidth="w-[200px] md:w-[300px]"
                showMobileWarning={false}
              />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          <SpotlightCard
            spotlightColor="rgba(126, 34, 206, 0.1)"
            className="p-6 rounded-xl bg-white/10 backdrop-blur-sm text-white shadow-xl border border-white/20 flex items-center gap-4"
          >
            <FaCode className="text-4xl text-white" />
            <div>
              <h3 className="text-2xl font-bold mb-1">15+</h3>
              <p className="text-sm opacity-80">Total Projects</p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(126, 34, 206, 0.2)"
            className="p-6 rounded-xl bg-white/10 backdrop-blur-md text-white shadow-xl border border-white/20 flex items-center gap-4"
          >
            <FaCertificate className="text-4xl text-white" />
            <div>
              <h3 className="text-2xl font-bold mb-1">10</h3>
              <p className="text-sm opacity-80">Certificates Earned</p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(126, 34, 206, 0.2)"
            className="p-6 rounded-xl bg-white/10 backdrop-blur-lg text-white shadow-xl border border-white/20 flex items-center gap-4"
          >
            <FaBriefcase className="text-4xl text-white" />
            <div>
              <h3 className="text-2xl font-bold mb-1">3 Years</h3>
              <p className="text-sm opacity-80">Web Dev Experience</p>
            </div>
          </SpotlightCard>
        </div>
    </div>
  )
}

export default About