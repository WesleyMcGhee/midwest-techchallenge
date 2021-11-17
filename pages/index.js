import Head from "next/head";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeNav from "../components/HomeNav";
import Image from "next/image";
toast.configure();

export const getStaticProps = async () => {
  const res = await fetch("https://api.mwi.dev/content/home");
  const data = await res.json();
  return {
    props: { homeContent: data },
  };
};

export default function Home({ homeContent }) {
  const [clicked, setClicked] = useState(false);
  const [arr, setArr] = useState([]);

  const array1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
  const array2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];

  const objectSort = () => {
    const newArr = array1.concat(array2);
    const newState = [...new Set(newArr)];
    setArr(newState);
    setClicked(true);
    if (clicked) {
      toast.error("You've already pushed that!!");
    }
  };

  return (
    <div className="home">
      <Head>
        <title>Midwestern | Home</title>
        <meta name="keywords" content="home"></meta>
      </Head>
      <HomeNav />
      <div className="card-con">
        <div className="card">
          <div className="img-con">
            <img
              src={`/Talkie.png`}
              className="heading-img-talkie"
              alt="A walkie talkie."
            ></img>
          </div>
          <h2 className="heading-title">{homeContent.data[0].title}</h2>
          <p className="card-disc">{homeContent.data[0].content}</p>
          <div className="learn-more-con">
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="card">
          <div className="img-con-rabbit">
            <img
              src={`/Rabbit.png`}
              className="heading-img-rabbit"
              alt="A Rabbit."
            ></img>
          </div>
          <h2 className="heading-title">{homeContent.data[1].title}</h2>
          <p className="card-disc">{homeContent.data[0].content}</p>
          <div className="learn-more-con">
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="card">
          <div className="img-con">
            <img
              src={`/Shield.png`}
              className="heading-img-shield"
              alt="A Sheild."
            ></img>
          </div>
          <h2 className="heading-title">{homeContent.data[2].title}</h2>
          <p className="card-disc">{homeContent.data[0].content}</p>
          <div className="learn-more-con">
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>
      <div className="challenge-con">
        <h2 className="heading-one">
          <span className="underline">Heading</span> one
        </h2>
        <p className="challenge-disc">
          Remove the duplicates in 3 Javascript objects and output the list of
          distinct names in an unordered list when{" "}
          <a
            className="challenge-link"
            onClick={() => {
              objectSort();
            }}
          >
            this link
          </a>{" "}
          is clicked. if the operation has been completed already notify the
          user that this has already been done.
        </p>
        {arr.map((index) => (
          <ul>
            <li key={index} className="names">
              {index}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
