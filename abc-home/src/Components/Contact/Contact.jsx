import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.svg";
import white_arrow from "../../assets/white-arrow.png";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fb14a114-ebf8-4c41-b2c3-0f5bedb62d97");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Successfully Submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          メッセージを送ります <img src={msg_icon} alt="" />
        </h3>
        <p>どんな些細な事でも結構です。お気軽にお問い合わせください。</p>
        <p>
          無料資料請求・お問い合わせ・お見積依頼は、以下のフォームに必要事項をご入力の上、ご送信ください。
        </p>
        <p>追って、担当者よりご返答させていただきます</p>
        <p>パソコン操作に不慣れな方は、FAX・お電話でもお待ちしております。</p>
        <br />
        <h4>フォームの注意事項</h4>
        <p>◆ 必要事項をご記入いただき、[送信]ボタンをクリックしてください</p>
        <p>◆ メールアドレスは半角英数字で入力し、送信前に誤りがない事をご確認ください。</p>
        <p>◆ 半角カナ入力は文字化けの原因となりますのでご注意ください。</p>
        <p>◆ 全角のダッシュ「―」波形「～」は文字化けの原因となりますのでご注意ください。</p>
        <br />
        <p>※ ご記入いただいたアドレス宛に記入内容が自動返信されます</p>
        <p>もしこちらが届かなかった場合はメールアドレスが間違っている可能性があるためお電話にてお問い合わせください</p>

      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>お名前</label>
          <input type="text" name="name" placeholder="お名前" required />
          <label>メールアドレス</label>
          <input type="email" name="email" placeholder="メールアドレス" required />
          <label>電話番号 </label>
          <input type="tel" name="phone" placeholder="電話番号" required />
          <label>ご住所</label>
          <input type="text" name="address" placeholder="ご住所" required />
          <label>メッセージ</label>
          <textarea
            name="message"
            rows="8"
            placeholder="メッセージ"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            確認
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
