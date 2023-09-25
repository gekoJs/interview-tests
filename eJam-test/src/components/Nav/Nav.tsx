import style from "./Nav.module.css";
import Check_guarantee from "../../assets/svg/Check_guarantee";
import Truck from "../../assets/svg/Truck";
import Heart_outline from "../../assets/svg/Heart_outline";
import Check_moneyBack from "../../assets/svg/Check_moneyBack";
import McAfee from "../../assets/svg/McAfee";
import Nonton from "../../assets/svg/Nonton";
import { useState, useEffect } from "react";
import ToRight from "../../assets/svg/ToRight";
import ToLeft from "../../assets/svg/ToLeft";

const Header = ({ pageWidth }: { pageWidth: number }) => {
  const [liToShow, setLiToShow] = useState(0);

  console.log(liToShow);
  const test = {
    a: <ToLeft />,
  };

  const headerLi = [
    {
      icon: <Check_guarantee />,
      text: "30-DAY SATISFACTION GUARANTEE",
    },
    {
      icon: <Truck />,
      text: "Free delivery on orders over $40.00",
    },
    {
      icon: <Heart_outline />,
      text: "50.000+ HAPPY CUSTOMERS",
    },
    {
      icon: <Check_moneyBack />,
      text: "100% Money Back Guarantee",
    },
  ];
  return (
    <ul className={style.ul}>
      {pageWidth <= 930 && (
        <button className={style.button} onClick={() => liToShow > 0 && setLiToShow(liToShow - 1)}>
          <ToLeft />
        </button>
      )}
      {headerLi.map((li, i) => {
        if (pageWidth <= 930) {
          if (i === liToShow) {
            return (
              <li key={li.text}>
                {li.icon} <p>{li.text}</p>
              </li>
            );
          }
        } else {
          return (
            <li key={li.text}>
              {li.icon} <p>{li.text}</p>
            </li>
          );
        }
      })}
      {pageWidth <= 930 && (
        <button className={style.button} onClick={() => liToShow < 3 && setLiToShow(liToShow + 1)}>
          <ToRight />
        </button>
      )}
    </ul>
  );
};

const Nav = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
  }, []);
  return (
    <nav className={style.container}>
      <div className={style.ulWrapper}>
        <Header pageWidth={pageWidth} />
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
