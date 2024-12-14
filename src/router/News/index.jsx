import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_news } from '../../api';
import './index.css';


export function News() {
    const [noticias, setNoticias] = useState([]);
    const [newNoticia, setNewNoticia] = useState({ titulo: '', descricao: '' });

    async function buscarNoticias() {
        try {
            const response = await api_news.get(`/noticia`);
            setNoticias(response.data);
        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
        }
    }

    async function criarNoticia() {
        try {
            const response = await api_news.post(`/noticia`, newNoticia);
            setNoticias([...noticias, response.data]);
            setNewNoticia({ titulo: '', descricao: '' });
        } catch (error) {
            console.error('Erro ao criar notícia:', error);
        }
    }

    useEffect(() => {
        buscarNoticias();
    }, []);

    return (
        <>
            <h1>NEWS</h1>
            
            <div>
                <h2>Criar Nova Notícia</h2>
                <input
                    type="text"
                    placeholder="Título"
                    value={newNoticia.titulo}
                    onChange={e => setNewNoticia({ ...newNoticia, titulo: e.target.value })}
                />
                <textarea
                    placeholder="descricao"
                    value={newNoticia.descricao}
                    onChange={e => setNewNoticia({ ...newNoticia, descricao: e.target.value })}
                />
                <button onClick={criarNoticia}>Criar</button>
            </div>

            <ul>
                {noticias.map((noticia, index) => (
                    <li key={index}>
                        <Link to={`/noticia/${noticia.id}`}>{noticia.titulo}</Link>
                        <p>{noticia.descricao}</p>
                    </li>
                ))}
            </ul>

        </>
    );
} 