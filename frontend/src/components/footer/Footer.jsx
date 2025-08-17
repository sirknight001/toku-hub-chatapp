import React from 'react'

const Footer = () => {
  return (
    <div>
        <p className="text-center text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} TokuHub by 
            <span className="font-medium"> Sirk </span>  
            <a 
              href="https://github.com/sirknight001" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-500"
            >
              GitHub
            </a> 
              <span> |</span>
            <a 
              href="https://www.linkedin.com/in/christian-t-243759159/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-500 ml-1"
            >
              LinkedIn
            </a>
            <span> |</span>
            <a 
              href="https://sirk-personal-portfolio.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-500 ml-1"
            >
              Portfolio
            </a>
        </p>
    </div>
  )
}

export default Footer