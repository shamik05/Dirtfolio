import Image from 'next/image';
import { ChessKnight, ChessPawn } from './ChessPieces';
import email from '../assets/icons/email.svg';
import linkedin from '../assets/icons/linkedin.svg'; 
import github from '../assets/icons/github.svg';

export default function Hero() {
  return (
    <section className="min-h-screen bg-chess-light flex items-center justify-center px-4 relative">
      <div className="hidden md:flex flex-col items-center space-y-6 absolute left-8 lg:left-12">
        <div className="flex flex-col items-center space-y-6">
          <a 
            href="mailto:shamikhaldar05@gmail.com" 
            className="transition-all hover:scale-110 hover:translate-x-1"
            aria-label="Email"
          >
            <Image src={email} alt="Email" width={32} height={32} className="w-8 h-8" />
          </a>
          <a 
            href="http://www.linkedin.com/in/shamik-h/" 
            className="transition-all hover:scale-110 hover:translate-x-1"
            aria-label="LinkedIn"
          >
            <Image src={linkedin} alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
          </a>
          <a 
            href="https://github.com/shamik05" 
            className="transition-all hover:scale-110 hover:translate-x-1"
            aria-label="GitHub"
          >
            <Image src={github} alt="GitHub" width={32} height={32} className="w-8 h-8" />
          </a>
        </div>
        <div className="h-24 w-0.5 bg-chess-brown/30 mt-4"></div>
      </div>

      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <ChessKnight className="w-24 h-24 mx-auto text-chess-brown" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-chess-dark mb-4">
          Shamik Haldar
        </h1>
        <p className="text-xl md:text-2xl text-chess-dark mb-6">
          Full Stack Developer
        </p>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          Strategic code, calculated moves
        </p>
        
        <button className="bg-chess-green hover:bg-chess-dark text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mb-12 shadow-lg">
          View My Work →
        </button>
        
        <div className="flex md:hidden justify-center space-x-8 mb-16">
          <a 
            href="mailto:shamikhaldar05@gmail.com" 
            className="transition-transform hover:scale-110"
            aria-label="Email"
          >
            <Image src={email} alt="Email" width={32} height={32} className="w-8 h-8" />
          </a>
          <a 
            href="http://www.linkedin.com/in/shamik-h/" 
            className="transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Image src={linkedin} alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
          </a>
          <a 
            href="https://github.com/shamik05" 
            className="transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <Image src={github} alt="GitHub" width={32} height={32} className="w-8 h-8" />
          </a>
        </div>
        
        <div className="animate-bounce">
          <ChessPawn className="w-6 h-6 mx-auto text-chess-brown" />
        </div>
      </div>
    </section>
  )
}