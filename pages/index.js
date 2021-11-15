import Head from "next/head";
import HomeNav from "../components/HomeNav";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("https://api.mwi.dev/content/home");
  const data = await res.json();
  return {
    props: { homeContent: data },
  };
};

export default function Home({ homeContent }) {
  return (
    <div className="home">
      <Head>
        <title>Midwestern | Home</title>
        <meta name="keywords" content="home"></meta>
      </Head>
      <HomeNav />
      <div className="grid-con">
        <div className="card">
          <img
            src={`/Talkie.png`}
            className="heading-img"
            alt="A walkie talkie."
          ></img>
          <h2 className="heading-title">{homeContent.data[0].title}</h2>
          <p className="card-disc"></p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="card">
          <img
            src={`/Rabbit.png`}
            className="heading-img"
            alt="A Rabbit."
          ></img>
          <h2 className="heading-title">{homeContent.data[1].title}</h2>
          <p className="card-disc"></p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="card">
          <img
            src={`/Shield.png`}
            className="heading-img"
            alt="A Sheild."
          ></img>
          <h2 className="heading-title">{homeContent.data[2].title}</h2>
          <p className="card-disc"></p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
}
