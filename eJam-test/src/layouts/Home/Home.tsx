import Check from "../../assets/svg/Check";
import ItemToBuy from "../../components/ItemToBuy/ItemToBuy";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
const Steps = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
  }, []);
  return (
    <ul className={style.ul}>
      <li>
        <span className={`${style.checkMark} ${style.checkMark_done}`}>
          <Check />
        </span>
        <p>{pageWidth > 715 ? "Step 1 : " : ""} Cart Review</p>
      </li>
      <li>
        <span className={`${style.checkMark} ${style.checkMark_done}`}>
          <Check />
        </span>
        <p>{pageWidth > 715 ? "Step 2 : " : ""} Checkout</p>
      </li>
      <li>
        <span className={`${style.checkMark} ${style.checkMark_selected}`}>
          3
        </span>
        <p>{pageWidth > 715 ? "Step 3 : " : ""} <strong>Special Ofter</strong></p>
      </li>
      <li>
        <span className={`${style.checkMark} ${style.checkMark_left}`}>4</span>
        <p>{pageWidth > 715 ? "Step 4 : " : ""} Confirmation</p>
      </li>
    </ul>
  );
};

const Home = () => {
  return (
    <main className={style.container}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h3>Wait! Your Order in Progress.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
        </div>

        <Steps />

        <ItemToBuy />
      </div>
    </main>
  );
};

export default Home;
