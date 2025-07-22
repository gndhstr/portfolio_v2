import React from 'react'
import { IconCloud } from '../../components/ui/iconCloud/iconCLoud';

const slugs = [
  "typescript",
  "javascript",
  "jquery",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "mongodb",
  "amazonaws",
  "postgresql",
  "railway",
  "nginx",
  "vercel",
  "yarn",
  "refinedgithub",
  "cypress",
  "docker",
  "git",
  "nginxproxymanager",
  "github",
  "gitlab",
  "visualstudiocode",
  "archlinux",
  "python",
  "figma",
];

const Skills = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/ffffff`,
  );
  
  return (
    <div className='container'>
        <h1 className='text-3xl font-bold text-center mt-10 '><span className='text-purple-700'>What</span> i use ?</h1>
        <div className='flex-row lg:flex'>
          <div>
              <h2>Develop</h2>
              <p className="text-sm text-gray-300 mt-1 mb-3 max-w-lg">
                Tools and technologies I've used to build responsive, dynamic, and full-stack web and mobile applications.
              </p>

              <div className="flex flex-wrap gap-3 mt-3">
                {["HTML5", "CSS", "JavaScript", "Python", "React Js", "Laravel", "React Native", "Bootstrap", "Tailwind", "Node.js", "jQuery", "MySQL", "MongoDB"].map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/20  text-xs shadow-sm cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <h2 className='mt-5'>Design</h2>
              <p className="text-sm text-gray-300 mt-1 mb-3 max-w-lg">
                Tools I use for designing user interfaces, illustrations, branding assets, and motion graphics.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                {["Figma", "Photoshop", "Illustrator", "Canva", "Infinite Design", "Blender"].map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/20  text-xs shadow-sm cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-105 hover:shadow-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
          </div>
          <div
            className="rounded-xl p-0 m-0 hidden md:flex justify-center items-center h-full"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(255,255,255,0) 50%)',
            }}
          >
            <IconCloud images={images} />
          </div>
        </div>
    </div>
  )
}

export default Skills