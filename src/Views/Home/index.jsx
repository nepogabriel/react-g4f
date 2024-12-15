import { Link } from 'react-router-dom';
import './index.css';

export function Home() {
    return (
        <>
            <section className="container-home">
                <h1 className="title-home">Seja bem-vindo!</h1>
                
                <div className="container-buttons">
                    <Link to="/address" className="btn-home">Buscar Endereço</Link>
                    <Link to="/news" className="btn-home">Administrar Notícias</Link>
                </div>

                <div className="about">
                    <p>Desenvolvido por Gabriel Ribeiro.</p>

                    <div className="medial-social">
                        <a href="https://github.com/nepogabriel" target='_blank'><i className="fa fa-github" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/gabriel-ribeiro-br/" target='_blank'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    </div>
                </div>
            </section>
        </>
    );
} 