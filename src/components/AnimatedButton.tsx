import { Download } from 'lucide-react';

export const AnimatedButton = () => {
  return (
    <a 
    href="/Angel_Resume.pdf">
    <button className="relative inline-flex items-center px-6 py-3 mt-6 text-white
     bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden 
     group-hover:animate-pulse transition-colors duration-300 hover:from-blue-600 
     hover:to-purple-600 hover:scale-105 hover:font-semibold animate-fade-in-up delay-5 
     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
     animate-border-pulse overflow-visible">             
              {/* Animated svg border for the "Contact Me" button */}
              <svg 
                className="absolute inset-0 w-full h-full" animate-pulse pointerEvents="none" 
                viewBox="0 0 200 60" 
                preserveAspectRatio="none"
                style={{overflow: "visible"}}>

                <path 
                  d="M10 30 Q 50 0, 90 30 T 170 30 Q 210 60, 250 30 L 1, 30 A 1 1 0 0 1 10 30 Z"
                  fill="none " 
                  strokeWidth="2" 
                  strokeDasharray="420,570"
                  strokeDashoffset="410"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animated-border-path"
                />
                
              </svg>
              <span className='relative z-10 flex items-center justify-center gap-2 '>
                <Download className='w-5, h-5'/>
                Download Resume
              </span>
              </button>

              </a>

)};