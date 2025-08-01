import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  //   REUSABLE HANDLECHANGE
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_6z6cyw9",
        "template_fe9tilq",
        {
          from_name: form.name,
          to_name: "HarshaChiruvolu",
          from_email: form.email,
          to_email: "chiruvoluharsha@gmail.com",
          message: form.message,
        },
        "1K5heoQwWby7W9Vlg"
      );

      setLoading(false);

      alert("your message has been sent ");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {/* {alert.show && <Alert {...alert} />} */}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* TERMINAL WINDOW  */}
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container py-7 my-3">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-gray-400 mt-4 mb-0">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          {/* FORM CONTENT  */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            {/* NAME INPUT */}
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your Name"
              />
            </label>

            {/* Eamil Address Input  */}

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enteryouremail@gmail.com"
              />
            </label>

            {/* MESSAGE   */}

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            {/* SUBMIT OR SEND BUTTON  */}

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
