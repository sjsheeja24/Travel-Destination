import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* 🔸 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50"
      >
        <source src={process.env.PUBLIC_URL + "/videos/mount.mp4"} type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Contact Form */}
      <div className="bg-gradient-to-r from-violet-950 to-rose-950 p-8 sm:p-10 rounded-xl shadow-xl w-full max-w-2xl text-white animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        {status && (
          <p
            className={`mb-4 text-center ${
              status.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* 🔸 Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-red-400 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
