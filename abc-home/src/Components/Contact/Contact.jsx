import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.svg'
import mail_icon from '../../assets/mail-icon.svg'
import phone_icon from '../../assets/phone-icon.svg'
import location_icon from '../../assets/location-icon.svg'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fb14a114-ebf8-4c41-b2c3-0f5bedb62d97");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
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
        <h3>メッセージを送ります <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut,
          corporis facilis ex quasi iusto neque repellat molestias aliquid nobis
          quo sit accusamus itaque labore nam perspiciatis pariatur. Fugiat,
          temporibus.
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="" />123-456-7891</li>
            <li><img src={location_icon} alt="" />This is the addresss for the offices</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>お名前</label>
            <input type="text" name = 'name' placeholder="お名前" required/>
            <label>電話番号	</label>
            <input type="tel" name = 'phone' placeholder="電話番号" required/>
            <label>メッセージ</label>
            <textarea name="message" rows="6" placeholder="メッセージ" required></textarea> 
            <button type="submit" className="btn dark-btn">確認<img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
