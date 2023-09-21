import style from "./Footer.module.css";
import Lock from "../../assets/Lock";

const Footer = () => {
  return (
    <footer className={style.container}>
      <ul className={style.ul}>
        <li>Copyright (C) 2023 | Clarifionsupport@clarifion.com</li>
        <li>
          <Lock /> Secure 256-Bit SSLEncryption.
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
