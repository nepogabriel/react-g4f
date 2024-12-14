import { useEffect, useState } from "react";
import { api_viacep } from "../../api";
import './index.css';

const cep = 77015346;

export function Home({count}) {
    const [endereco, setEndereco] = useState({});

    async function buscarCep() {
        const x = await api_viacep.get(`/${cep}/json/`);

        setEndereco(x.data);
    }

    useEffect(() => {
        buscarCep();
    }, []);

    return (
        <>
           {/* <h1>{count}</h1>

            <div id="id-teste">{endereco.bairro}</div> */}
            <section className="page-address">
                <h1 class="title-address">Endereço</h1>

                <form action="" method="post" class="form-address">
                    <div class="form-field">
                        <label for="cep" class="form-label">CEP:</label>
                        <input type="text" id="cep" name="cep" class="form-input" maxlength="9" />
                    </div>

                    <div class="form-field">
                        <label for="logradouro" class="form-label">Logradouro:</label>
                        <input type="text" id="logradouro" name="logradouro" class="form-input" />
                    </div>

                    <div class="form-field">
                        <label for="bairro" class="form-label">Bairro:</label>
                        <input type="text" id="bairro" name="bairro" class="form-input" />
                    </div>

                    <div class="form-field">
                        <label for="cidade" class="form-label">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" class="form-input" />
                    </div>

                    <div class="form-field">
                        <label for="uf" class="form-label">UF:</label>
                        <input type="text" id="uf" name="uf" class="form-input" maxlength="2" />
                    </div>

                    <div class="form-field">
                        <label for="estado" class="form-label">Estado:</label>
                        <input type="text" id="estado" name="estado" class="form-input" />
                    </div>

                    <button type="submit" class="form-button">Cadastrar</button>
                </form>
            </section>
        </>
    )
} 