import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_news } from '../../api';
import './index.css';


export function News() {
    const [noticias, setNoticias] = useState([]);
    const [newNoticia, setNewNoticia] = useState({ titulo: '', descricao: '' });
    const [editNoticia, setEditNoticia] = useState(null);

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

    async function atualizarNoticia(id) {
        try {
            const response = await api_news.put(`/noticia/${id}`, editNoticia);
            setNoticias(noticias.map(n => (n.id === id ? response.data : n)));
            setEditNoticia(null);
        } catch (error) {
            console.error('Erro ao atualizar notícia:', error);
        }
    }

    async function excluirNoticia(id) {
        try {
            await api_news.delete(`/noticia/${id}`);
            setNoticias(noticias.filter(n => n.id !== id));
        } catch (error) {
            console.error('Erro ao excluir notícia:', error);
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
                {noticias.map(noticia => (
                    <li key={noticia.id}>
                        {editNoticia?.id === noticia.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editNoticia.titulo}
                                    onChange={e => setEditNoticia({ ...editNoticia, titulo: e.target.value })}
                                />
                                <textarea
                                    value={editNoticia.descricao}
                                    onChange={e => setEditNoticia({ ...editNoticia, descricao: e.target.value })}
                                />
                                <button onClick={() => atualizarNoticia(noticia.id)}>Salvar</button>
                                <button onClick={() => setEditNoticia(null)}>Cancelar</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{noticia.titulo}</h3>
                                <p>{noticia.descricao}</p>
                                <button onClick={() => setEditNoticia(noticia)}>Editar</button>
                                <button onClick={() => excluirNoticia(noticia.id)}>Excluir</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
} 