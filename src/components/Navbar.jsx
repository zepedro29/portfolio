import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const offset = 120; // Ajuste isso conforme necessário
    const targetElement = document.getElementById(targetId);
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Fecha o menu após a navegação
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-4 left-4 right-4 mx-auto w-auto max-w-3xl ${isScrolled ? 'bg-opacity-60 backdrop-blur-md' : 'bg-opacity-60'} bg-neutral-100 shadow-md rounded-full py-2 sm:py-4 px-4 sm:px-8 flex items-center justify-between z-50 transition-all duration-300`}>
      <div className="flex items-center mr-4">
        <a href="/CVJoseVilaca.pdf" download className="p-2 bg-neutral-600 text-white rounded-full hover:bg-neutral-700 text-sm">
          Download CV
        </a>
      </div>
      <div className="hidden sm:flex items-center justify-center gap-4 text-sm">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-neutral-600 hover:text-black">About me</a>
        <a href="#technologies" onClick={(e) => handleScroll(e, 'technologies')} className="text-neutral-600 hover:text-black">Technologies</a>
        <a href="#education" onClick={(e) => handleScroll(e, 'education')} className="text-neutral-600 hover:text-black">Education</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-neutral-600 hover:text-black">Projects</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-neutral-600 hover:text-black">Contact</a>
      </div>
      <div className="flex items-center ml-4 gap-3 text-xl">
        <a href="https://www.linkedin.com/in/josevilaca01/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-neutral-600 hover:text-neutral-900" />
        </a>
        <a href="https://github.com/zepedro29" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-neutral-600 hover:text-neutral-900" />
        </a>
      </div>
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none text-neutral-600 hover:text-neutral-900">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 mx-auto w-11/12 bg-neutral-100 bg-opacity-90 shadow-md rounded-lg py-4 px-4 flex flex-col items-center space-y-4 z-40 sm:hidden">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-neutral-600 hover:text-black">About me</a>
          <a href="#technologies" onClick={(e) => handleScroll(e, 'technologies')} className="text-neutral-600 hover:text-black">Technologies</a>
          <a href="#education" onClick={(e) => handleScroll(e, 'education')} className="text-neutral-600 hover:text-black">Education</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-neutral-600 hover:text-black">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-neutral-600 hover:text-black">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
