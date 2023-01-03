import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>If you believe I can be of help to you, I would be grateful if you would get in touch with me.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:ydrissi9@gmail.com">ydrissi9@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone" />
          <a href="tel:+212624863845">(+212) 62486-3845</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}