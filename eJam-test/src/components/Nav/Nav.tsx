import style from "./Nav.module.css";
import Check_guarantee from "../../assets/svg/Check_guarantee";
import Truck from "../../assets/svg/Truck";
import Heart_outline from "../../assets/svg/Heart_outline";
import Check_moneyBack from "../../assets/svg/Check_moneyBack";
import McAfee from "../../assets/svg/McAfee";
import Nonton from "../../assets/svg/Nonton";

const Header = () => {
  return (
    <ul className={style.ul}>
      <li>
        <Check_guarantee />
        <p>30-DAY SATISFACTION GUARANTEE </p>
      </li>
      <li>
        <Truck />
        <p>Free delivery on orders over $40.00 </p>
      </li>
      <li>
        <Heart_outline />
        <p>50.000+ HAPPY CUSTOMERS</p>
      </li>
      <li>
        <Check_moneyBack />
        <p>100% Money Back Guarantee</p>
      </li>
    </ul>
  );
};

const Nav = () => {
  return (
    <nav className={style.container}>
      <div className={style.ulWrapper}>
        <Header />
      </div>

      <div className={style.logoWrapper}>
        <button className={style.button}>
          <img src="./png/Clarifion_Logo.png" alt="" />
        </button>
        <div className={style.secCertifications}>
          <McAfee />
          <Nonton />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
