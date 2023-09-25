import Amex from "../../assets/svg/Amex";
import Apple_pay from "../../assets/svg/Apple_pay";
import Check from "../../assets/svg/Check";
import Gpay from "../../assets/svg/Gpay";
import Lock from "../../assets/svg/Lock";
import Mastercard from "../../assets/svg/Mastercard";
import Right_arrow from "../../assets/svg/Right_arrow";
import Shoppay from "../../assets/svg/Shoppay";
import Star from "../../assets/svg/Star";
import Visa from "../../assets/svg/Visa";
import Comentary from "../comentary/Comentary";
import style from "./ItemToBuy.module.css";

const ItemToBuy = () => {
  return (
    <article className={style.container}>
      <div className={`${style.imageWrapper} ${style.hide_mob}`}>
        <img src="./png/itemToBuy.png" alt="" />
        <div>
          <Comentary />
        </div>
      </div>

      <div className={style.detailsWrapper}>
        <h4 className={style.title}>
          <strong>ONE TIME ONLY</strong> special price for 6 extra Clarifion for
          only <strong>$14 each</strong> ($84.00 total!)
        </h4>

        <div className={style.specifications}>
          <div className={`${style.imgWrapper}`}>
            <img src="./png/itemToBuy_tiny.png" alt="" />
          </div>
          <div className={style.specDetails}>
            <div className={style.subTitleWrapper}>
              <h6>Clarifion Air Ionizer</h6>

              <div className={style.pricesWrapper}>
                <p className={style.original_price}>$180</p>
                <p className={style.discount_price}>$84</p>
              </div>
            </div>

            <div className={style.starContainer}>
              {Array.from({ length: 5 }, () => {
                return (
                  <span key={crypto.randomUUID()}>
                    <Star />
                  </span>
                );
              })}
            </div>

            <p>
              <span className={style.dot} />
              12 left in Stock
            </p>

            <p>
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>

        <div className={style.caracteristics}>
          <div>
            <Check stroke="#2C7EF8" />
            <p>
              Negative Ion Technology may <strong>help with allergens</strong>
            </p>
          </div>
          <div>
            <Check stroke="#2C7EF8" />
            <p>
              Designed for <strong>air rejuvenation</strong>
            </p>
          </div>
          <div>
            <Check stroke="#2C7EF8" />
            <p>
              <strong>Perfect for every room</strong> in all types of places.
            </p>
          </div>
        </div>

        <div className={style.tip}>
          <div className={style.porcent}>%</div>
          <p>
            Save <span>53%</span> and get <span>6 extra Clarifision</span> for
            only <span>$14 Each</span>.
          </p>
        </div>

        <div className={style.claimWrapper}>
          <button className={style.claim_button}>
            YES-CLAIM MY DISCOUNT <Right_arrow />
          </button>
          <div className={style.payMethods}>
            <p>Free Shiping</p>
            <hr />
            <p>
              <span>
                <Lock stroke="#4D5254 " />
              </span>
              Secure 256-Bit SSL Encription.
            </p>

            <hr className={style.hide} />

            <div className={style.svgWrapper}>
              <Visa />
              <Shoppay />
              <Mastercard />
              <Gpay />
              <Apple_pay />
              <Amex />
            </div>
          </div>

          <button className={style.reject}>
            NO THANKS, I DON'T WANT THIS.
          </button>
        </div>

        <div className={style.guarantee}>
          <img src="./png/seal.png" alt="" />
          <p>
            If you are not completely thrilled with your Clarifion - We have a
            <strong>30 day satisfaction guarantee</strong>. Please refer to our
            return policy at the bottom of the page for more details. Happy
            Shopping!
          </p>
        </div>
      </div>
    </article>
  );
};

export default ItemToBuy;
