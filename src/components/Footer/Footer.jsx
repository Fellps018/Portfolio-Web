import './Footer.css'

function YearDisplay() {
    const currentYear = new Date().getFullYear();
    return currentYear
}



const Footer  = () => {
    return (
            <div id="Final" class="Footer">
                <div class="Footer-div">
                    <div class="Nav">
                        <h4>Contato:</h4>
                    <a href="mailto:felipe.catarino.dev@gmail.com"><i class="fa-solid fa-at"></i> felipe.catarino.dev@gmail.com</a>
                    <a href="https://wa.me/5515997238091"><i class="fa-solid fa-phone"></i> +55 15 99723-8091</a>
                    </div>
                    <div class="Nav">
                    <h4>Navegação:</h4>
                    <a href="#Apresentação"><i class="fa-solid fa-person-chalkboard"></i> Apresentação</a>
                    <a href="#Destaque"><i class="fas fa-user"></i>  Destaque</a>
                    <a href="#Projetos"><i class="fas fa-project-diagram"></i> Projetos</a>
                    <a href="#Final"><i class="fas fa-envelope"></i> Final</a>
                    
                    </div>
                    <div class="Nav">
                    <h4>Links:</h4>
                    <a href="https://www.linkedin.com/in/felipe-catarino-de-souza-8a0907373"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                    <a href="https://github.com/Fellps018"><i class="fa-brands fa-github"></i> GitHub</a>
                    </div>
                </div>
                <div class="div-p">
                <p class="p"><small><span id="year">{YearDisplay()}©</span> Felipe Catarino de Souza. Todos os direitos reservados.</small></p>
                </div>
            </div>
    )
}



export default Footer