import React, { useState } from "react";
import styles from "@/styles/contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Thanks for contacting us. We will get back to you soon.");
        setname("");
        setemail("");
        setphone("");
        setdesc("");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setname(e.target.value);
    } else if (e.target.name === "email") {
      setemail(e.target.value);
    } else if (e.target.name === "phone") {
      setphone(e.target.value);
    } else if (e.target.name === "desc") {
      setdesc(e.target.value);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className={styles.input}
            id="name"
            name="name"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className={styles.input}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className={styles.formtext}>
            We will never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Enter your phone number:{" "}
          </label>
          <input
            type="phone"
            value={phone}
            onChange={handleChange}
            className={styles.input}
            name="phone"
            id="phone"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
            Elaborate your concern
          </label>
          <textarea
            value={desc}
            className={styles.input}
            onChange={handleChange}
            name="desc"
            id="desc"
            rows="3"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
