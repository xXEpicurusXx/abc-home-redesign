import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail-icon.svg";
import phone_icon from "../../assets/phone-icon.svg";
import fax_icon from "../../assets/fax-icon.svg";
import location_icon from "../../assets/location-icon.svg";
import instagram from "../../assets/instagram-icon.jpg";
import blog from "../../assets/0000530839.png";
import zoom from "../../assets/zoom.jpg";
import reform_recipe from "../../assets/0000530838.png";
import my_best_pro from "../../assets/153898417812801.gif";
import moku from "../../assets/0000530837.png";
import health_prod from "../../assets/167885678267301.png";
// import idk from "../../assets/158328639368401.png"
// import qr_code from "../../assets/mobileqrcode.png"

const Info = () => {
  return (
    <div className="info">
      <div className="contact-col">
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            abchome@abchome.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            <a href="tel:0120-666-408">0120-666-408</a>

            <img src={phone_icon} alt="" />
            <a href="tel:0120-916-241">0120-916-241</a>

            <img src={phone_icon} alt="" />
            <a href="tel:0120-755-066">0120-755-066</a>
          </li>
          <li>
            <img src={fax_icon} alt="" />
            <a href="tel:0120-755-066">Fax: 048-250-6867</a>
            <img src={fax_icon} alt="" />
            <a href="tel:0120-755-066">Fax: 03-6661-8104</a>
            <img src={fax_icon} alt="" />
            <a href="tel:0120-755-066">Fax: 042‐595‐6134</a>
          </li>

          <li>
            <a href="https://www.google.com/maps/dir//%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%A8%E3%83%BC%E3%83%93%E3%83%BC%E3%82%B7%E3%83%BC%E3%83%9B%E3%83%BC%E3%83%A0+%E3%80%92332-0034+Saitama,+Kawaguchi,+Namiki,+2+Chome%E2%88%929%E2%88%9222+%E3%82%B3%E3%83%BC%E3%83%AF%E3%83%8F%E3%82%A4%E3%83%84/@35.8154012,139.7088854,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x601894a3caf25139:0xb1bdf21e44d4cda9!2m2!1d139.7089796!2d35.8153637?entry=ttu">
              <img src={location_icon} alt="" />
            </a>
            <p>川口店</p>
            <a href="https://www.google.com/maps/dir//1-ch%C5%8Dme-35-12+Higashimuk%C5%8Djima+Sumida+City,+Tokyo+131-0032/@35.7203415,139.8156338,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x60188f20c4e626ab:0xc3385f71b07da8f9!2m2!1d139.8156338!2d35.7203415?entry=ttu">
              <img src={location_icon} alt="" />
            </a>
            墨田店
            <a href="https://www.google.com/maps/dir//%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%A8%E3%83%BC%E3%83%93%E3%83%BC%E3%82%B7%E3%83%BC%E3%83%9B%E3%83%BC%E3%83%A0+%E3%80%92190-0015+%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%AB%8B%E5%B7%9D%E5%B8%82%E6%B3%89%E7%94%BA935%EF%BD%B01+%E3%82%89%E3%82%89%E3%81%BD%E3%83%BC%E3%81%A8%E7%AB%8B%E5%B7%9D%E7%AB%8B%E9%A3%9B+3%E9%9A%8E/@35.7120115,139.417252,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6018e1cbb5ebb225:0x9ad5597589e0e2da!2m2!1d139.417252!2d35.7120115?entry=ttu">
              <img src={location_icon} alt="" />
            </a>
            立川店
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <div className="col-right"></div>
        <a href="https://www.instagram.com/abchome_renovation_/">
          <img src={instagram} alt="" />
        </a>
        <a href="https://mbp-japan.com/saitama/abc-home//">
          <img src={my_best_pro} alt="" className="stickers" />
        </a>
        <a href="http://homeabc.blog17.fc2.com/">
          <img src={blog} alt="" className="stickers" />
        </a>
        <a href="https://zoom.us/">
          <img src={zoom} alt="" className="stickers" />
        </a>
        <a href="http://www.myreformjp.com/">
          <img src={reform_recipe} alt="" className="stickers" />
        </a>
        <a href="https://www.mokutaikyo.com/">
          <img src={moku} alt="" className="stickers" />
        </a>
        <a href="https://www.mokutaikyo.com/">
          <img src={health_prod} alt="" className="stickers" />
        </a>
      </div>
    </div>
  );
};

export default Info;
