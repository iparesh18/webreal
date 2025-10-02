import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const serviceID = "service_fco29i5";
    const templateID = "template_kukeq6o";
    const publicKey = "cLwQjjRedW49CVgfg";

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((res) => {
        console.log("Email sent successfully!", res.status, res.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Oops! Something went wrong.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#5e22a3] via-[#000] to-[#37174f] px-4">
      <div className="w-full max-w-2xl bg-black/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl text-white">
        <h2 className="text-4xl md:text-5xl font-gilroy-light mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-center mb-8 opacity-80">
          Have a project in mind? Let's make it happen!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-xl bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-4 rounded-xl bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r font-gilroy-light from-purple-600/10 to-blue-500/20 hover:bg-[#3c2660] py-4 rounded-xl font-bold text-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
