import style from "./Footer.module.css";
import Lock from "../../assets/svg/Lock";

const Footer = () => {
  return (
    <footer className={style.container}>
      <ul className={style.ul}>
        <li>
          <p>Copyright (C) 2023</p>
          <p>|</p>
          <p>clarifionsupport@clarifion.com</p>
        </li>
        <li>
          <Lock />
          <p>Secure 256-Bit SSLEncryption.</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
