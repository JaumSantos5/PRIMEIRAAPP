import React from "react";
import Header from "../../components/header/header";
import "./comentarios.css"
import Footer from "../../components/footer.js/footer";
import Profile from "../../assets/ben-sweet-2LowviVHZ-E-unsplash.jpg"

function Comentarios (){
    return(
    <>
    <Header />
        <div className="comments-container">
            <div className="comments-content">
                <h2> Veja os comentários aqui </h2>
                <div className="comments-cards">
                    <div className="card-comments">
                        <span>Gabriel</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> Ótimo site para quem gosta de comprar ingressos pela internet.</span>
                    </div>
                    <div className="card-comments">
                        <span>Helena</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> Excelente! </span>
                    </div>
                    <div className="card-comments">
                        <span>Lucia</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> Comprei o ingresso e amei o filme!! </span>
                    </div>
                    <div className="card-comments">
                        <span>Leonardo</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> Esperava mais do filme, mas deu tudo certo com a compra do ingresso. Ótimo site para compra de ingresso. </span>
                    </div>
                    <div className="card-comments">
                        <span>Jeniffer</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> Realmente muito bom. </span>
                    </div>
                    <div className="card-comments">
                        <span>Maria</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> Filme espetacular.</span>
                    </div>
                    <div className="card-comments">
                        <span>Pedro</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> O filme é muito adulto para ser um super herói famoso entre as crianças, tirando isso, é muito bom. </span>
                    </div>
                    <div className="card-comments">
                        <span>Julia</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> Legal.</span>
                    </div>
                    <div className="card-comments">
                        <span>João</span>
                        <img className="comments-profile"  src={Profile}/>
                        <span className="comment"> A compra dos igressos foi um sucesso, site muito bom.</span>
                    </div>
                    <div className="card-comments">
                        <span>Lucas</span>
                        <img className="comments-profile" src={Profile}/>
                        <span className="comment"> Melhor herói de todos!!! </span>
                    </div>
                </div>
                <div className="divider-comments"></div>
                <h2> Comente também</h2>
                <div className="comments-add">
                    <form id="form" action="./contato.html">
                        <label for="text">Nome:</label>  
                        <input id="text" type="text" name="text" placeholder="Nome completo"/>
                        <label for="email">Email:</label>
                        <input id="email" type="email" name="email" placeholder="Coloque um email válido" />
                        <label for="text">Mensagem:</label>
                        <textarea name="message" placeholder="Escreva seu comentário aqui"></textarea>
                        <button id="botao">Enviar</button>  
                    </form>
                </div>
            </div>
        </div>
    <Footer />    
    </>
    )
}

export default Comentarios