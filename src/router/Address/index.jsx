import { useEffect, useState } from "react";
import { api_viacep } from "../../api";
import './index.css';

export function Address() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState({});

    async function buscarCep() {
        if (cep.length === 8) {
            const x = await api_viacep.get(`/${cep}/json/`);

            setEndereco(x.data);
        }
    }

    useEffect(() => {
        buscarCep();
    }, [cep]);

    return (
        <>
            <section className="page-address">
                

                <form action="" method="post" className="form-address">
                    <h1 className="title-address">Endereço</h1>

                    <div className="form-warning">
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;
                        Preencha o campo CEP para buscar o endereço.
                    </div>

                    <div className="form-field">
                        <label htmlFor="cep" className="form-label">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            className="form-input"
                            maxLength="9"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            />
                    </div>

                    <div className="form-field">
                        <label htmlFor="logradouro" className="form-label">Logradouro:</label>
                        <input
                            type="text"
                            id="logradouro"
                            name="logradouro"
                            className="form-input"
                            readOnly
                            value={endereco.logradouro || ''}
                            />
                    </div>

                    <div className="form-field">
                        <label htmlFor="bairro" className="form-label">Bairro:</label>
                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            className="form-input"
                            readOnly
                            value={endereco.bairro || ''}
                            />
                    </div>

                    <div className="form-field">
                        <label htmlFor="cidade" className="form-label">Cidade:</label>
                        <input 
                            type="text"
                            id="cidade"
                            name="cidade"
                            className="form-input"
                            readOnly
                            value={endereco.localidade || ''}
                            />
                    </div>

                    <div className="form-field">
                        <label htmlFor="uf" className="form-label">UF:</label>
                        <input
                            type="text"
                            id="uf"
                            name="uf"
                            className="form-input"
                            maxLength="2" 
                            readOnly
                            value={endereco.uf || ''}
                            />
                    </div>

                    <div className="form-field">
                        <label htmlFor="estado" className="form-label">Estado:</label>
                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            className="form-input"
                            readOnly
                            value={endereco.estado || ''}
                            />
                    </div>
                </form>
            </section>
        </>
    );
} 