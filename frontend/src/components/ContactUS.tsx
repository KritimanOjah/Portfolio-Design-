import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import IconStack from "./IconStack";
import Cross from "./Cross";
import Copy from "./Copy";
import emailjs from "@emailjs/browser";

const inputVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.7 } },
};

const buttonVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.9 } },
};

type SubmissionStatus = "success" | "error" | null;

interface ContactUSProps {
  closeModal: () => void;
}

const ContactUS: React.FC<ContactUSProps> = ({ closeModal }) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSubmissionStatus(null);

    const time = new Date().toLocaleString();

    try {
      const result = await emailjs.send(
        "service_h2phb8h",
        "template_p4fdaem",
        {
          name: email,
          message,
          time ,
          reply_to: email,
        },
        "S95T4aXgU7bHmKRJw"
      );

      if (result.status === 200) {
        setSubmissionStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmissionStatus("error");
    }

    setIsSending(false);
  };

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex h-auto flex-col bg-gradient-to-br from-[#222222] to-[#1a1a1a] mx-auto w-full max-w-md rounded-xl shadow-2xl border border-neutral-800 overflow-hidden"
      style={{ pointerEvents: "auto" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute top-3 left-3 text-neutral-400 hover:text-neutral-200 transition-colors duration-200">
        <Cross onClick={closeModal}></Cross>
      </div>

      <div className="px-6 py-8 sm:px-8 flex flex-col justify-between h-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email input */}
          <div>
            <motion.label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-300"
              variants={inputVariants}
              initial="initial"
              animate="animate"
            >
              Your email
            </motion.label>
            <motion.div
              className="mt-1"
              variants={inputVariants}
              initial="initial"
              animate="animate"
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-neutral-700 bg-neutral-900 text-neutral-200 rounded-md py-3 px-4"
                required
              />
            </motion.div>
          </div>

          {/* Message input */}
          <div>
            <motion.label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-300"
              variants={inputVariants}
              initial="initial"
              animate="animate"
            >
              Your message
            </motion.label>
            <motion.div
              className="mt-1"
              variants={inputVariants}
              initial="initial"
              animate="animate"
            >
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project or opportunity"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-neutral-700 bg-neutral-900 text-neutral-200 rounded-md py-3 px-4"
                required
              ></textarea>
            </motion.div>
          </div>

          {/* Submit button */}
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="animate"
          >
            <button
              type="submit"
              className={`inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors duration-200 ${
                isSending
                  ? "bg-gray-400 text-white cursor-wait"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              } w-full py-3 px-4`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.div>

          {submissionStatus === "success" && (
            <div className="text-green-500 text-sm mt-2">
              Message sent successfully!
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="text-red-500 text-sm mt-2">
              There was an error sending your message. Please try again.
            </div>
          )}
        </form>

        {/* Extra contact buttons and icons */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <motion.a
            href="mailto:hello@aayushbharti.in?subject=Let's%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 transition-colors duration-200 bg-neutral-800 text-neutral-200 hover:bg-neutral-700 py-3 px-4"
            variants={inputVariants}
            initial="initial"
            animate="animate"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Email Me
          </motion.a>
          <Copy />
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <IconStack />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUS;
