import { useState, useEffect } from 'react';
import './Nav-Style.css';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Fechar menu quando a tela for redimensionada para desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 792) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll suave para as seções
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        // Fechar menu no mobile após clicar
        if (window.innerWidth <= 792) {
            setIsMenuOpen(false);
        }
    };

    // Alternar menu mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fechar menu ao clicar no overlay
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <a title="Sobre mim" href="https://fellps018.github.io/Error-404/" className="logo-link" onClick={(e) => handleNavClick(e, 'home')}>
                    <img className="image" src="src/components/Navegation/Images/Trabalho.jpeg" alt="Foto de perfil"/>
                </a>
                
                <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
                <div>
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`} id="mainNav">
                    <a href="#Apresentação" className="nav-link" onClick={(e) => handleNavClick(e, 'Apresentação')}>
                        <i className="fa-solid fa-person-chalkboard"></i> Apresentação
                    </a>
                    <a href="#Projetos" className="nav-link" onClick={(e) => handleNavClick(e, 'Projetos')}>
                        <i className="fas fa-project-diagram"></i> Projetos
                    </a>
                    <a href="#Destaque" className="nav-link" onClick={(e) => handleNavClick(e, 'Destaque')}>
                        <i className="fas fa-user"></i> Destaque
                    </a>
                    <a href="#Final" className="nav-link" onClick={(e) => handleNavClick(e, 'Final')}>
                        <i className="fas fa-envelope"></i> Contato
                    </a>
                </nav>
                </div>
                {/* Botão WhatsApp para desktop */}
                <a href="https://wa.me/5515997238091" 
                    title="Entrar em contato via WhatsApp" 
                    className="menu-toggle desktop-menu-toggle"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> Vamos Conversar
                </a>
            </div>
            
            {/* Overlay para mobile */}
            <div 
                className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} 
                id="mobileOverlay" 
                onClick={closeMenu}
            ></div>
        </header>
    );
};

export default Nav;