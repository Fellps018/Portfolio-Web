import './Hero.css'
import Robot from './robot/robot'

const Hero = () => {
    return ( 
    <main>
    <section id="Apresentação" class="hero">
    <div class="hero-content">
        <h2>Criando Experiências <span class="span-title">Digitais Únicas</span></h2>
        <p class="hero-subtitle">Desenvolvedor Full Stack & Designer</p>
        <p class="hero-subtitle-2">Transformo ideias em soluções digitais inovadoras. Especializado em criar interfaces modernas e funcionais que conectam pessoas e tecnologia de forma intuitiva e elegante.</p>
        <div class="hero-buttons">
        <a href="#Projetos" class="btn-primary">Ver projetos <i class="fa-solid fa-arrow-right-long"></i></a>
        <a href="#Final" class="btn-secondary">Contato</a>
        </div>
    </div>
           <Robot></Robot>
         <div class="Section-Image">
            <div class="Section-Hero-Image">
    <img class="Hero-Image" src="src/components/Hero/Images/6c9266916b4a27f55771f1b41f4de056.jpg" />
            </div>
            </div>
    </section>
    </main>
    )}

    export default Hero