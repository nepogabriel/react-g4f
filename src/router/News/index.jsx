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
        <section className="page-news">
            <h1 className="title-news">Notícias</h1>
            
            <div className="container-form-news">
                <h3>Criar Nova Notícia</h3>
                
                <input
                    className="form-input"
                    type="text"
                    placeholder="Título"
                    value={newNoticia.titulo}
                    onChange={e => setNewNoticia({ ...newNoticia, titulo: e.target.value })}
                />

                <textarea
                    className="form-textarea"
                    placeholder="Descrição"
                    value={newNoticia.descricao}
                    onChange={e => setNewNoticia({ ...newNoticia, descricao: e.target.value })}
                />

                <button className="form-button" onClick={criarNoticia}>Cadastrar Notícia</button>
            </div>

            <div className="container-news">
                {noticias.map(noticia => (
                    <div className="news" key={noticia.id}>
                        {editNoticia?.id === noticia.id ? (
                            <div className="form-edit-news">
                                <input
                                    className="form-input"
                                    type="text"
                                    value={editNoticia.titulo}
                                    onChange={e => setEditNoticia({ ...editNoticia, titulo: e.target.value })}
                                />

                                <textarea
                                    className="form-textarea"
                                    value={editNoticia.descricao}
                                    onChange={e => setEditNoticia({ ...editNoticia, descricao: e.target.value })}
                                />

                                <div className="container-button-edit">
                                    <button className="button-edit-save" onClick={() => atualizarNoticia(noticia.id)}>Salvar</button>
                                    <button className="button-edit-cancel" onClick={() => setEditNoticia(null)}>Cancelar</button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h3>{noticia.titulo}</h3>
                                <p>{noticia.descricao}</p>
                                <button className="button-edit-news" onClick={() => setEditNoticia(noticia)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                <button className="button-delete-news" onClick={() => excluirNoticia(noticia.id)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
        </>
    );
} 