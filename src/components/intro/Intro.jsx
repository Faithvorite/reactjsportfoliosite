import "./intro.css";
import Me from "../../img/me.png";
// import BG from "../../img/bridgegirls.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="header">

        <div className="i-name">FAITH NGUYEN</div>
      </div>
        <div className="body">

      <div className="i-left">
      
        {/* <img src={BG} alt="" className="i-bg" /> */}
        <img src={Me} alt="" className="i-img" />
        
      </div>
      <div className="i-right">

          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        </div>
      </div>
    
  );
};

export default Intro;