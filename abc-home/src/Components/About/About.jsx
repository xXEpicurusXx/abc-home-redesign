import React from "react";
import "./About.css";
import about_1 from "../../assets/167385826850901.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_1} alt="" className="about-img" />
      </div>
      <div className="about-right">
        {/* <h3>会社案内</h3> */}
        <h2>会社案内</h2>
        <p>私たちABCホームは、</p>

        <p>
          一人ひとりのお客様と末長いお付き合いが出来るように、
          細かなところから誠心誠意をもってご対応しております
        </p>

        <p>
          お客様のライフスタイルや使い勝手の希望を十分にお聞きし、
          さまざまなプランや商品にも対応しアドバイスをさせていただきますベテランのみならず、
          20代、30代の若い建築のプロが活躍しているので、
        </p>

        <p>
          他では出せない斬新な目線でプラン作成できます。
          希望すること、叶えたいことありましたら何でもご相談ください。
        </p>

        <p>
          ABCホームにはその希望、叶えたいことを実現することのできる体制が整っています。
          まずは一度お試しください。
        </p>

        <p>
          お客様のご希望、夢に添えるよう社員一丸となってご協力させていただきたいと思っております。
        </p>
      </div>
    </div>
  );
};

export default About;
