import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const images = [
    "/public/1.png",
    "/public/2.png",
    "/public/3.png",
    "/public/4.png",
    "/public/5.png",
    "/public/6.png",
  ];

  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          markers: true,
          scrub: true,
        },
      });
    });
  });

  return (
    <main className="w-full text-white flex flex-col gap-5 items-center py-[15vh] pb-[20vh]">
      {images.map((image, index) => {
        return (
          <div
            id={index}
            className="card sticky top-[15vh] items-center text-center w-[27vw] flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#383027]"
          >
            <img className="w-[150px]" src={image} alt="" />
            <h1 className="text-4xl">
              The <br />
              <span className="font-bold">Algorithm</span>
            </h1>
            <p className="font-thin">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.quasi
              maxime aliquam, non accusamus id exercitationem?
            </p>
          </div>
        );
      })}
    </main>
  );
}

export default Cards;
