import './Projects.css'
import ProjectsGrid from './projetos/projetos'


const Projects = () => {
    return (
        <div id="Projetos" class="Projects">
            <div class="Projects-div">
                <div class="Projects-div-p">
                <p class="Projects-p">portfólio</p>
                </div>
                <h2 class="Projects-h2">Projetos <span class="span-title">Selecionados</span></h2>
                <p class="Projects-text">Uma seleção dos meus trabalhos mais recentes, demonstrando expertise em diferentes tecnologias e soluções</p>
            </div>
                <div class="section-container">
                    <div class="projects-grid">
                        {ProjectsGrid()}
                    </div>
                </div>
                <a href="https://fellps018.github.io/Error-404/" class="projects-btn">Ver todos os projetos <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
    )
}




export default Projects