import { useState } from "react";

const CEPS = [
  { id: 1, cep: "13480000", desc: "cep geral de Limeira" },
  { id: 2, cep: "13480002", desc: "cep de teste 2" },
  { id: 3, cep: "13480003", desc: "cep de teste 3" },
  { id: 4, cep: "13480004", desc: "cep de teste 4" },
  { id: 5, cep: "13480005", desc: "cep de teste 5" },
];
function BuscaCep() {
  const [cep, setCep] = useState("");
  const [foundData, setFoundData] = useState(CEPS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = CEPS.filter((data) => {
        return data.cep
          ?.toLowerCase()
          ?.startsWith(keyword.toLowerCase()?.toString());
      });
      setFoundData(results);
    } else {
      setFoundData(CEPS);
    }
    setCep(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={cep}
        onChange={filter}
        className="input"
        placeholder="Informe seu CEP: Ex: 1348****"
      />
      <div className="data-list">
        {foundData && foundData.length > 0 ? (
          foundData.map((data) => (
            <li key={data.id} className="data">
              <span className="data-cep">
                {" "}
                Legal, nós estamos atualmente no seu cep: {data.cep},
              </span>
              <span className="data-desc"> {data.desc}</span>
            </li>
          ))
        ) : (
          <span>
            Nenhum cep encontrado, pode ser que a melhor internet ainda não
            esteja disponível em sua região, entre em contato conosco{" "}
            <a href="#" className="link">
              clique aqui
            </a>
          </span>
        )}
      </div>
    </div>
  );
}

export default BuscaCep;
