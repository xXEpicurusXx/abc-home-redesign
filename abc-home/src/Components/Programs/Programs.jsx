import React from "react";
import "./Programs.css";
import program_1 from "../../assets/0000535483.jpg";
import program_2 from "../../assets/164655047394901.jpg";
import program_3 from "../../assets/164655638988101.jpg";


const Programs2 = () => {
  return (
    <div className="programs">

      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <h3>フルリフォーム・マンション</h3>
          <h3>(価格目安:150万～900万円)</h3>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <h3>フルリフォーム・戸建</h3>
          <h3>(価格目安:350万～1,300万円)</h3>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <h3>水廻り4点</h3>
          <h3>(価格目安:98万～500万円)</h3>
        </div>
      </div>
    </div>

    
    
  );
};

export default Programs2;
