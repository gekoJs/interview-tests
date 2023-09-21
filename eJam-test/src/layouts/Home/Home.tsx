import Check from "../../assets/svg/Check";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div>
          <h3>Wait! Your Order in Progress.</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
        </div>

        <ul>
          <li>
            <span className={style.checkMark}>
              <Check />
            </span>
            <p>Step 1 : Cart Review</p>
          </li>
          <li>
            <span className={style.checkMark}>
              <Check />
            </span>
            <p>Step 2 : Checkout</p>
          </li>
          <li>
            <span className={style.checkMark}>3</span>
            <p>Step 3 : Special Ofter</p>
          </li>
          <li>
            <span className={style.checkMark}>4</span>
            <p>Step 4 : Confirmation</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
