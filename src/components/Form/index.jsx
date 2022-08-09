import axios from "axios";
import { useState } from "react";

function Form() {
  const [campos, setCampos] = useState({
    nome: "",
    email: "",
    mensagem: "",
    anexo: "",
  });
  function handleInputChange(event) {
    if (event.target.name === "anexo")
      campos[event.target.name] = event.target.files[0];
    else campos[event.target.name] = event.target.value;
    setCampos(campos);
  }
  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach((key) => formData.append(key, campos[key]));
    axios
      .post("http://localhost:3030/send", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
    send(campos);
  }
  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach((key) => formData.append(key, campos[key]));
    axios
      .post("http://localhost:3030/send", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    send(campos);
  }
  return (
    <form onSubmit={handleFormSubmit} className="form">
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Seu email.."
        onChange={handleInputChange}
      />
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        placeholder="Nome.."
        onChange={handleInputChange}
      />
      <label htmlFor="fone">Telefone</label>
      <input
        type="phone"
        id="fone"
        name="fone"
        placeholder="Telefone.."
        onChange={handleInputChange}
        maxLength={11}
      />
      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        name="mensagem"
        placeholder="Deixe-nos uma mensagem.."
        className="textArea"
        onChange={handleInputChange}
      ></textarea>
      {/* 
      <label htmlFor="anexo">Anexo</label>
      <input type="file" id="anexo" name="anexo" onChange={handleInputChange} /> */}

      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Form;
