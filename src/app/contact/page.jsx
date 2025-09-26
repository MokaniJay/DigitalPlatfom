"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    firstn: "",
    lastn: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // form handling
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = `${formData.firstn} ${formData.lastn}`;
    const { email, message } = formData;

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, message }),
      });

      const data = await response.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ firstn: "", lastn: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Message failed to send.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ An error occurred.");
    }
  };

  return (
    <>
     
<div className="bg-white py-12">

  
  <div className="w-[90%] max-w-[1150px] mx-auto text-center">

   
    <div className="p-4">
        <section className="text-center mb-12 py-8 bg-yellow-900/50 rounded-lg border border-yellow-700">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">
            Development In Progress
          </h2>
          <p className="text-lg text-yellow-200">
            Please note that the platform is currently **under active development**. This page structure and its contents serve as the **core vision and feature set** for the final product. We are working diligently to bring this professional service to you!
          </p>
        </section>
      <h2
        className={`inline-block border border-black font-bold text-black mb-5 whitespace-nowrap ${
          isMobile
            ? "px-4 py-1 text-base tracking-[2px]"
            : "px-6 py-2 text-2xl tracking-[4px]"
        }`}
      >
        OUR PLATFORM
      </h2>

      <p className="text-sm sm:text-base font-medium text-black max-w-[750px] mx-auto leading-6">
        We provide a seamless platform for clients to showcase their catalogs,
        products, and services without needing a full website. By uploading
        catalogs or project PDFs, businesses can present their work in a
        professional, accessible format that effectively reaches their audience.
      </p>
    </div>
  </div>
</div>


      {/* Contact Form + Get In Touch */}
      <section className="bg-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Get A Quote Form */}
     <div className="bg-white p-8 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-black mb-6">Get A Quote</h2>

  <form onSubmit={handleSubmit} className="space-y-5">
    {/* Name Fields */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        name="firstn"
        value={formData.firstn}
        onChange={handleChange}
        placeholder="First Name"
        required
        className="w-full border border-black p-3 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-black"
      />
      <input
        type="text"
        name="lastn"
        value={formData.lastn}
        onChange={handleChange}
        placeholder="Last Name"
        required
        className="w-full border border-black p-3 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-black"
      />
    </div>

    {/* Email / Phone */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full border border-black p-3 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-black"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full border border-black p-3 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-black"
      />
    </div>

    {/* Message */}
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Enter your message..."
      required
      rows={4}
      className="w-full border border-black p-3 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-black"
    />

    {/* Button */}
    <button
      type="submit"
      className={`w-full sm:w-auto px-6 py-3 font-semibold rounded-md transition-colors ${
        isHovered
          ? "bg-white text-black border border-black shadow-md"
          : "bg-black text-white border border-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Send Message
    </button>
  </form>
</div>


          {/* Get In Touch */}
          <div className="bg-white p-6 rounded-lg shadow text-black">
            <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-6 text-sm">
              These are the phrases we stay by in everything we do. Each brand
              we build, and we create.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-400 rounded-full text-black">
                  <i className="flaticon-maps-and-flags" />
                </div>
                <div>
                  <h5 className="font-semibold">Location</h5>
                  <Link href="/" className="text-sm text-gray-700">
                    579 Gardenia Cir, Baton Rouge, LA 70809
                  </Link>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-400 rounded-full text-black">
                  <i className="flaticon-call" />
                </div>
                <div>
                  <h5 className="font-semibold">Call Now</h5>
                  <a href="tel:+9112345678910" className="text-sm text-gray-700">
                    +91 12345678910
                  </a>
                  <br />
                  <a href="tel:+9112345678910" className="text-sm text-gray-700">
                    +91 12345678910
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-400 rounded-full text-black">
                  <i className="flaticon-gmail-logo" />
                </div>
                <div>
                  <h5 className="font-semibold">Email Us</h5>
                  <a href="mailto:demo@.com" className="text-sm text-gray-700">
                    demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
