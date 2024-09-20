import React, { useState } from "react";

export default function About(props) {
  
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btntext, setBtnText] = useState("Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color == "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("dark Mode");
  //   }
  // };

  let myStyle = {
    color : props.mode==='dark'?'white':'black',
    backgroundColor : props.mode==='dark'?'#a1a1cf':'white'
  }

  return (
    <div className="container my-4 py-2" style={myStyle}>
      <h1>About us</h1>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong>About Asqure text editor</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              Welcome to Asqure editor website, your go-to platform for seamless writing and editing! Designed for simplicity and efficiency, our intuitive interface allows users to create, format, and save documents effortlessly. Whether you're
              drafting an essay, coding, or jotting down ideas, our versatile tools enhance your productivity. With features like auto-save, collaboration options, and a distraction-free mode, you can focus on what truly matters—your content. Join
              our community of writers and unleash your creativity today!{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              Discover a treasure trove of resources with our website, where everything is free to use! Whether you’re looking for educational materials, creative tools, or inspiring content, we’ve curated a collection that caters to diverse
              interests. Enjoy easy navigation and user-friendly features that make it simple to find what you need. Join our community and start exploring today—your next great resource is just a click away!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <strong>Browse compatblity</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              Our website is designed with optimal compatibility in mind, ensuring a seamless browsing experience across all devices and browsers. Whether you’re using a smartphone, tablet, or desktop, you can easily access our content without any
              hiccups. We prioritize fast loading times and responsive design, so you can enjoy a user-friendly experience no matter where you are. Explore our site with confidence, knowing that we’ve made every effort to enhance your browsing
              journey!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
