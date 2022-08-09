export const CepList = ({ lista }) => {
  return (
    <ul>
      {lista.map((cep, index) => (
        <li key={index}>
          {cep.rua} - {cep.descricao}
        </li>
      ))}
    </ul>
  );
};
