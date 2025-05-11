import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="my-16 px-5 md:my-32 flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 patterns">
      {/* Image or container on the right */}
      <div className="w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div>
      {/* Text on the left */}
      <div className="max-w-md space-y-5 md:mr-10">
        <h1 className="text-5xl font-bold md:text-6xl">
          Hello, I am Gowtham Prasath
        </h1>
        <p className="tracking-wide leading-relaxed">
          As a Software Developer with 2+ years of experience, I specialize in
          building and maintaining scalable web applications using React.js,
          Node.js, PostgreSQL, Mongodb. I focus on creating intuitive
          interfaces, optimizing databases, and developing robust RESTful APIs.
          A strong team player with a passion for leveraging technology to drive
          operational efficiency and deliver high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
