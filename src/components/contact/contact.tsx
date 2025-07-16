import React, { useState, useEffect } from "react";
import { initializeApp, getApps, getApp } from "firebase/app"; // Import getApps and getApp
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  signInWithCustomToken,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig =
  typeof __firebase_config !== "undefined" && __firebase_config
    ? JSON.parse(__firebase_config)
    : {
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: "nsih-79712.firebaseapp.com",
        projectId: "nsih-79712",
        storageBucket: "nsih-79712.firebasestorage.app",
        messagingSenderId: "231389351424",
        appId: "1:231389351424:web:1bd210267e3c8587c892e5",
        measurementId: "G-C6HTYFJ8F5",
      };

const appId = typeof __app_id !== "undefined" ? __app_id : "default-app-id";
const initialAuthToken =
  typeof __initial_auth_token !== "undefined" ? __initial_auth_token : null;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    let app;

    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApp();
    }

    try {
      const firestore = getFirestore(app);
      const firebaseAuth = getAuth(app);

      setDb(firestore);
      setAuth(firebaseAuth);

      const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          try {
            if (initialAuthToken) {
              await signInWithCustomToken(firebaseAuth, initialAuthToken);
            } else {
              await signInAnonymously(firebaseAuth);
            }
            setUserId(firebaseAuth.currentUser?.uid || crypto.randomUUID());
          } catch (error) {
            console.error("Firebase authentication error:", error);
            setSubmitError("Failed to authenticate. Please try again.");
          }
        }
        setIsAuthReady(true);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Firebase initialization failed:", error);
      setSubmitError(
        "Failed to initialize the application. Please try again later."
      );
    }
  }, []);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!db || !userId) {
      setSubmitError(
        "Application not ready. Please wait a moment and try again."
      );
      return;
    }

    setIsLoading(true);
    setSubmitError("");
    setIsSubmitted(false);

    try {
      const messagesCollectionRef = collection(
        db,
        `artifacts/${appId}/public/data/contactMessages`
      );

      await addDoc(messagesCollectionRef, {
        name: name,
        email: email,
        message: message,
        timestamp: serverTimestamp(),
        userId: userId,
      });

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      console.log("Message successfully sent to Firestore!");
    } catch (error) {
      console.error("Error writing document: ", error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setIsSubmitted(false);
        setSubmitError("");
      }, 5000);
    }
  };

  if (!isAuthReady) {
    return (
      <section
        id="Getconnected"
        className="py-20 px-4 bg-gray-100 dark:bg-gray-900 flex justify-center items-center"
      >
        <p className="text-gray-700 dark:text-gray-300">
          Loading contact form...
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-screen mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
          Get in Touch
        </h2>

        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">
              Your message has been sent.
            </span>
          </div>
        )}

        {submitError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{submitError}</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
        >
          {/* Name Input Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Your Name"
              required
              disabled={isLoading}
            />
          </div>

          {/* Email Input Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="your.email@example.com"
              required
              disabled={isLoading}
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              rows="6"
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 resize-y"
              placeholder="Your message..."
              required
              disabled={isLoading}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
