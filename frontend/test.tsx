import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formcarry.com/s/XXXXXXX", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();

      if (result.code === 200) {
        setSubmitted(true);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center text-white p-6 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl max-w-md mx-auto mt-20">
        <h2 className="text-2xl font-semibold">🎉 Thank you!</h2>
        <p>We've received your message.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-[rgba(255,255,255,0.1)_0px_30px_60px_-12px,rgba(255,255,255,0.05)_0px_18px_36px_-18px] border border-white/10 transform transition hover:scale-[1.02]"
      >
        <h2 className="text-white text-3xl font-bold mb-6 text-center drop-shadow-md">
          ✉️ Contact Us
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-inner"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-inner"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-white font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-inner"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95"
        >
          🚀 Send Message
        </button>
      </form>
    </div>
  );
}
