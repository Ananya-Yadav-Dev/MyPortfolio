import React, { useState } from "react";
import styles from "./Contact.module.css";
import ContactImage from "/assets/contact/contactImage.png";

export function Contact() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loading state

    const formData = new FormData(event.target);
    formData.append("access_key", "299b95ac-fdb0-4e5f-a526-ab4c0b07c59b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessage("✅ Form submitted successfully!");
        event.target.reset(); // Reset form after submission
      } else {
        setMessage("❌ Form submission failed. Please try again.");
      }
    } catch (error) {
      setMessage("❌ Error submitting the form. Check your connection.");
    }

    setLoading(false); // Remove loading state
  };

  return (
    <section className={styles.container} id="contact">
      <div className={styles.contactLeft}>
        <img src={ContactImage} alt="Contact" />
      </div>
      <form onSubmit={onSubmit} className={styles.contactRight}>
        <div className={styles.title}>
          <h2>Get in Touch</h2>
          <hr />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.contactDetails}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.contactDetails}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={styles.contactDetails}
          required
        ></textarea>
        <button type="submit" className={styles.button} role="button" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </section>
  );
}
