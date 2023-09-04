// import React from "react";
// import Header  from "../Header/Header";
// import hero_image from "../../assets/hero_image.png";
// import hero_image_back from "../../assets/hero_image_back.png";
// import Calories from "../../assets/calories.png"
// import Heart from "../../assets/heart.png";
// import './Hero.css';

// const Hero = () =>{
//     return (
//         <div className="hero">
//           {/* left-h started */}
//           <div className="left-h">
//             <Header/>

//              {/* the best ad */}
//             <div className="the-best-ad">
//               <div></div>
//               <span>the best fitness club in the town</span>
//             </div>

//             {/* Hero Heading*/}
//             <div className="hero-text">
//               <div>
//                 <span className='stroke-text'>Shape </span>
//                 <span>Your</span>
//                 </div>

//                 <div>
//                   <span>Ideal Body</span>
//                 </div> 

//                 <div>
//                   <span>
//                   In here we will help you to shape and build your ideal body and 
//                   Live up your life to fullest
//                   </span>
//                 </div>
//             </div>


//             {/* figures */}
//              <div className="figures">
//               <div>
//                 <span>+140</span>
//                 <span>expert cosches</span>
//               </div>

//               <div>
//                 <span>+978</span>
//                 <span>members joined</span>
//               </div>

//               <div>
//                 <span>+50</span>
//                 <span>fitness programs</span>
//               </div>

//              </div>

//             {/* hero btns */}

//              <div className="hero-btns">
//               <button className="btn">Get started</button>
//               <button className="btn">Learn More</button>
//              </div>

           
//            </div>
//            {/* left-h ended */}

           
//           <div className="right-h">
//             <button className="buttn">Join Now</button>

//             <div className="heart-rate">
//               <img src={Heart} alt="" />
//               <span>Heart Rate</span>
//               <span>116 bpm</span>
//             </div>
              

//              {/* hero images */}
//              {/* <img src={hero_image} alt="hero-image" /> */}
//              <img src={hero_image_back} alt="hero-image-back" />
//           </div>
//         </div>
//     );
// }
// export default Hero;












import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import {Link} from 'react-scroll'
const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={878} delay={4} preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
        <button className="btn">
          <Link to = 'join-us' smooth={true} spy={true}>
          Join Now
          </Link>
          </button>

        {/* heart rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img className="hero-image" src={hero_image} alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-image-back"
          src={hero_image_back}
          alt=""
        />

        {/* calories */}
        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
