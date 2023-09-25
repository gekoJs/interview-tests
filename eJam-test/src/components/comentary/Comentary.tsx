import Star from "../../assets/svg/Star";
import Verify from "../../assets/svg/Verify";
import style from "./Comentary.module.css";

const Comentary = () => {
  return (
    <div className={style.container}>
      <div className={style.user_description}>
        <img src="./png/user.png" alt="" />

        <div>
          <div className={style.rating}>
            {Array.from({ length: 5 }, () => {
              return (
                <div key={crypto.randomUUID()}>
                  <Star />
                </div>
              );
            })}
          </div>

          <div className={style.nameWrapper}>
            <p>Ken T.</p>
            <Verify />
            <p>
              <span>Verified Customer</span>
            </p>
          </div>
        </div>
      </div>

      <p>
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </p>
    </div>
  );
};

export default Comentary;
