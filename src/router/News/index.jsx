import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_news } from '../../api';
import './index.css';


export function News() {
    const [noticias, setNoticias] = useState([]);

    async function buscarNoticias() {
        try {
            const response = await api_news.get(`/noticia`);
            setNoticias(response.data);
        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
        }
    }

    useEffect(() => {
        buscarNoticias();
    }, []);

    return (
        <>
            <h1>NEWS</h1>

            <ul>
                {noticias.map((noticia, index) => (
                    <li key={index}>
                        <Link to={`/noticia/${noticia.id}`}>{noticia.titulo}</Link>
                        <p>{noticia.resumo}</p>
                    </li>
                ))}
            </ul>

        </>
    );
} 