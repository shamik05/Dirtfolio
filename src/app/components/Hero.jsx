import Image from 'next/image';
import { ChessKnight, ChessPawn } from './ChessPieces';
import email from '../assets/icons/email.svg';
import linkedin from '../assets/icons/linkedin.svg'; 
import github from '../assets/icons/github.svg';
import './hero.css';

export default function Hero() {
  return (
    <section className="min-h-screen bg-chess-light flex items-center justify-center px-4 relative">
      {/* Chess Board Background Pattern - USING CSS CLASS */}
      <div className="absolute inset-0 opacity-5 chess-board-bg"></div>

      {/* Vertical Social Links - Desktop */}
      <div className="hidden md:flex flex-col items-center space-y-6 absolute left-8 lg:left-12 z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative group">
            <a 
              href="mailto:shamikhaldar05@gmail.com" 
              className="transition-all hover:scale-110 hover:translate-x-1 block"
              aria-label="Email"
            >
              <Image src={email} alt="Email" width={32} height={32} className="w-8 h-8" />
            </a>
            <div className="absolute left-full ml-2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Email Me
            </div>
          </div>

          <div className="relative group">
            <a 
              href="http://www.linkedin.com/in/shamik-h/" 
              className="transition-all hover:scale-110 hover:translate-x-1 block"
              aria-label="LinkedIn"
            >
              <Image src={linkedin} alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
            </a>
            <div className="absolute left-full ml-2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              LinkedIn
            </div>
          </div>

          <div className="relative group">
            <a 
              href="https://github.com/shamik05" 
              className="transition-all hover:scale-110 hover:translate-x-1 block"
              aria-label="GitHub"
            >
              <Image src={github} alt="GitHub" width={32} height={32} className="w-8 h-8" />
            </a>
            <div className="absolute left-full ml-2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              GitHub
            </div>
          </div>
        </div>
        
        {/* Animated Vertical Line */}
        <div className="h-0 w-0.5 bg-chess-brown/30 mt-4 animate-grow"></div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-2xl relative z-10">
        {/* Interactive Knight Icon */}
        <div className="mb-8 group cursor-pointer">
          <ChessKnight className="w-24 h-24 mx-auto text-chess-brown transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-chess-green" />
          <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Clicking this won't actually do anything... yet! ♟️
          </p>
        </div>
        
        {/* Name & Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-chess-dark mb-4">
          Shamik Haldar
        </h1>
        <p className="text-xl md:text-2xl text-chess-dark mb-6">
          Full Stack Developer
        </p>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          Strategic code, calculated moves
        </p>
        
        {/* CTA Button */}
        <button className="bg-chess-green hover:bg-chess-dark text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mb-12 shadow-lg hover:shadow-xl">
          View My Work →
        </button>
        
        {/* Mobile Social Links - Horizontal with Tooltips */}
        <div className="flex md:hidden justify-center space-x-8 mb-16">
          {[
            { href: "mailto:shamikhaldar05@gmail.com", icon: email, label: "Email", tooltip: "Email Me" },
            { href: "http://www.linkedin.com/in/shamik-h/", icon: linkedin, label: "LinkedIn", tooltip: "LinkedIn" },
            { href: "https://github.com/shamik05", icon: github, label: "GitHub", tooltip: "GitHub" }
          ].map((social, index) => (
            <div key={index} className="relative group">
              <a 
                href={social.href}
                className="transition-transform hover:scale-110 block"
                aria-label={social.label}
              >
                <Image src={social.icon} alt={social.label} width={32} height={32} className="w-8 h-8" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.tooltip}
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChessPawn className="w-6 h-6 mx-auto text-chess-brown" />
        </div>
      </div>
    </section>
  )
}