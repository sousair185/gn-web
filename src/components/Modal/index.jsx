import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useTransition } from "transition-hook";
import whats from "./../../assets/whatsapp.png";

export default function Modal() {
  const [onOff, setOnOff] = useState(false);
  const alertTrans = useTransition(onOff, 300);
  const buttonTrans = useTransition(!alertTrans.shouldMount, 300);

  return (
    <div className="modal" style={{ margin: "1vmin", position: "relative" }}>
      {buttonTrans.shouldMount && (
        <Button
          className="btn-modal"
          size="lg"
          style={{
            transition: ".3s",
            opacity: buttonTrans.stage === "enter" ? 1 : 0,
            transform:
              buttonTrans.stage === "enter"
                ? "translateY(0)"
                : "translateY(50%)",
          }}
          onClick={() => setOnOff(true)}
        >
          <img src={whats} alt="whats" className="whats" /> Whatsapp
        </Button>
      )}

      {alertTrans.shouldMount && (
        <Alert
          className="alerta"
          variant="primary"
          style={{
            content: "X",
            maxWidth: 550,
            margin: "0 auto",
            transition: ".3s",
            opacity: alertTrans.stage === "enter" ? 1 : 0,
            filter: alertTrans.stage === "enter" ? "blur(0)" : "blur(20px)",
            transform: alertTrans.stage === "enter" ? "scale(1)" : "scale(.6)",
          }}
          onClose={() => setOnOff(false)}
          dismissible
        >
          <Alert.Heading> Whatsapp!</Alert.Heading>
          <p>Entre em contato conosco</p>
          <Button
            variant="link"
            as="a"
            href="https://whatsa.me/5519920032333/?t=Preciso%20de%20suporte"
            target="_blank"
          >
            <img src={whats} alt="whats" className="whats" />
          </Button>
        </Alert>
      )}
    </div>
  );
}
