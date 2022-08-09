const mailer = require("nodemailer");

module.exports = (email, nome, mensagem, anexo) => {
  const smtpTransport = mailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false, //SSL/TLS
    auth: {
      user: "adm@cocrie.com.br",
      pass: "XXXXX",
    },
  });

  const mail = {
    from: "GN - Site <adm@cocrie.com.br>",
    to: email,
    subject: `${nome} te enviou uma mensagem`,
    text: mensagem,
    //html: "<b>Opcionalmente, pode enviar como HTML</b>"
  };

  if (anexo) {
    mail.attachments = [];
    mail.attachments.push({
      filename: anexo.originalname,
      content: anexo.buffer,
    });
  }

  return new Promise((resolve, reject) => {
    smtpTransport
      .sendMail(mail)
      .then((response) => {
        smtpTransport.close();
        return resolve(response);
      })
      .catch((error) => {
        smtpTransport.close();
        return reject(error);
      });
  });
};
