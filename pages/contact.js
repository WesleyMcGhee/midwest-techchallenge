import Head from "next/head";
import React, { useState } from "react";
import ContactNav from "../components/ContactNav";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const getStaticProps = async () => {
  const res = await fetch("https://api.mwi.dev/content/contact");
  const data = await res.json();
  return {
    props: { contactContent: data },
  };
};

export default function contact({ contactContent }) {
  const [change, setChange] = useState({
    fname: "",
    lname: "",
    title: "",
    email: "",
    message: "",
  });
  const { fname, lname, title, email, message } = change;
  const onChange = (e) => {
    setChange({ ...change, [e.target.name]: e.target.value });
  };
  const sendIt = async (e) => {
    e.preventDefault();
    try {
      const body = { fname, lname, title, email, message };

      const response = await fetch("http://localhost:4500/messages", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      toast.success("Message posted to the DB!");
      setChange({
        fname: "",
        lname: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (err) {
      console.error(err.message);
      toast.error("Uh oh something went wrong.");
    }
  };
  return (
    <div>
      <Head>
        <title>Midwestern | Contact</title>
      </Head>
      <ContactNav />
      <div className="contact-con">
        <div className="text-side">
          <div className="contact-text-con">
            <h1 className="heading-two">{contactContent.data[0].title}</h1>
            <p className="challenge-disc">{contactContent.data[0].content}</p>
          </div>
        </div>
        <div className="form-side">
          <div className="form-con">
            <h2 className="heading-three">Heading Two</h2>
            <form
              onSubmit={(e) => {
                sendIt(e);
              }}
            >
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                value={change.fname}
                className="form-input half"
                onChange={(e) => {
                  onChange(e);
                }}
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                value={change.lname}
                className="form-input half"
                onChange={(e) => {
                  onChange(e);
                }}
              ></input>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={change.title}
                className="form-input half"
                onChange={(e) => {
                  onChange(e);
                }}
              ></input>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={change.email}
                className="form-input half"
                required
                onChange={(e) => {
                  onChange(e);
                }}
              ></input>
              <textarea
                placeholder="Message"
                name="message"
                value={change.message}
                className="form-input full"
                onChange={(e) => {
                  onChange(e);
                }}
              ></textarea>
              <div className="learn-more-con">
                <input type="submit" className="btn"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
