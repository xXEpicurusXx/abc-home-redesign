import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/avatar-1293744_640.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} alt="" />
      <img
        src={back_icon}
        className="back-btn"
        onClick={slideBackward}
        alt=""
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>M様邸</h3>
                  <span>満足度：100％　2024/2月</span>
                </div>
              </div>
              <p>
                自分で直接見聞きし、経験したことのみ話す営業マンさんは信憑性が高く信頼の置ける人だと感じました。
                <br />
                そして、図面を片手に事前準備を怠らず、予想外の出来事も臨機応変に対応。
                <br />
                何よりも楽しそうに仕事をしている姿を見れば結果は言わずと知れたこと。素晴らしい出来栄えでした！！
                <br />
                <br />
                そんな職人さんに次回、キッチンのリフォームをお願いしました。営業の小川さん、職人の宇田川さん、2人は最強のコンビだと思います。
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>S様邸</h3>
                  <span>満足度：100％　2024/2月</span>
                </div>
              </div>
              <p>
                リフォームのチラシを見てショールームに伺わせていただきました。
                <br />
                ショールームで対応してくれたのが小川さんでこちらの要望を聞いてもらい担当になっていただきました。
                <br />
                <br />
                趣味やセンスがお互いに似ており、ユニットバスの色決めはスムーズに決めることが出来ました。
                <br />
                様々な要望に臨機応変に応じていただきありがとうございました。また、何かありましたら小川さんにお願いしたいです。
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>A様邸</h3>
                  <span>満足度：100％　2024/1月</span>
                </div>
              </div>
              <p>
                理想の洗面所に仕上がり大大大満足です！ <br />
                ありがとうございました。
                <br />
                <br />
                担当営業　立川店　堀江　より一言：
                <br />
                白を基調にしたデザインで仕上げさせていただきました。
                <br />
                床もフロアタイルの良さが出て良かったです。
                <br />
                大変ご満足いただき、ありがとうございます。
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>O様邸</h3>
                  <span>満足度：100％　2023/12月</span>
                </div>
              </div>
              <p>
                とても丁寧ですぐに動いていただき、とても良かったです。
                <br />
                <br />
                担当営業　川口店　佐島　より一言：
                <br />
                とても喜んでいただき、こちらもうれしくなりました。
                <br />
                ご満足いただき、ありがとうございます。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
