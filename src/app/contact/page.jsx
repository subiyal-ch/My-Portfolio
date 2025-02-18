"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const text = "Say Hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center text-5xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 text-gray-600 bg-red-50 rounded-xl text-xl flex flex-col justify-center p-24"
        >
          <span>Dear Subiyal,</span>
          <textarea
            name="user_message"
            placeholder="Write your message here..."
            rows={6}
            className="bg-transparent  border-b-2 border-b-gray-600 outline-none resize-none mb-4"
          />
          <span>Email</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent  border-b-2 border-b-gray-600 outline-none mb-4"
          />
          <span>Regards</span>
          <input
            name="user_name"
            type="text"
            className="bg-transparent  border-b-2 border-b-gray-600 outline-none mb-4"
          />
          <button className="border-2 p-2 font-semibold border-gray-600 rounded bg-purple-200 hover:bg-red-100">
            Send
          </button>
          {success && (
            <span className="text-green-600 ">
              Your message has been sent Successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 ">Something went wrong!</span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
