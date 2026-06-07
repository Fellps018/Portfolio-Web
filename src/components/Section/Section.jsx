import './Section.css'

const Section = () => {
    return (
        <div id="Destaque" class="Space-Section">
            <div class="Space-Section-tables">
                <div class="tables">
                    <h2 class="text-tables"><span class="span-title"  ><i class="fa-solid fa-quote-left"></i></span>
                    {frase}<span class="span-title"  ><i class="fa-solid fa-quote-right"></i></span>
                    </h2>
                    <br />
                    <div class="tables-text">
                        <p class="obra-text">{obra}</p>
                        <p class="author-text">{author}</p>
                    </div>
                </div>
                <div  class="tables-2">
                    <div class="tables-min">
                        <div class="div-item">
                        <p class="item"><i class="fa-solid fa-code"></i></p>
                        </div>
                        <p class="obra-text">Código Limpo</p>
                        <p class="div-text">Desenvolvimento com as melhores práticas e padrões da indústria</p>
                    </div>
                    <div class="tables-min">
                        <div class="div-item">
                        <p class="item"><i class="fa-solid fa-paintbrush"></i></p>
                        </div>
                        <p class="obra-text">Design Moderno</p>
                        <p class="div-text">Interfaces elegantes que combinam estética e funcionalidade</p>
                    </div>
                    <div class="tables-min">
                        <div class="div-item">
                        <p class="item"><i class="fa-solid fa-rocket"></i></p>
                        </div>
                        <p class="obra-text">Performance</p>
                        <p class="div-text">Otimização constante para experiências rápidas e fluidas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Frase Da seção
const frase = "A tecnologia é melhor quando aproxima as pessoas e simplifica suas vidas. Meu objetivo é criar soluções que não apenas funcionem perfeitamente, mas que também inspirem e encantem cada usuário."
const obra = "Filosofia de Trabalho"
const author ="Design centrado ao usuário"

export default Section