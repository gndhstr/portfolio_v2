import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
  Github,
  Loader2
} from "lucide-react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mwpqlkrj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 relative">
      <div className="flex flex-col md:flex-row md:items-start gap-10">
        {/* Info Section */}
        <div className="text-white space-y-6 order-1 md:order-2 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center md:text-left">
            <span className="text-purple-700">Get in</span> Touch
          </h2>
          <p className="text-white/70 text-center md:text-left">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>

          <div className="space-y-4">
            <ContactItem icon={<Phone size={18} />} label="Phone" value="+62 856-4742-2491" />
            <ContactItem icon={<Mail size={18} />} label="Email" value="ghandisatria@gmail.com" />
            <ContactItem icon={<MapPin size={18} />} label="Location" value="Semarang, Indonesia" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <a href="https://wa.me/6285647422491" target="_blank" rel="noopener noreferrer">
              <Phone size={24} className="hover:text-green-400 transition" />
            </a>
            <a href="https://github.com/gndhstr" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="hover:text-gray-300 transition" />
            </a>
            <a href="https://facebook.com/gndhstr" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="hover:text-blue-600 transition" />
            </a>
            <a href="https://instagram.com/gndhstr" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com/in/gndhstr" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="hover:text-blue-400 transition" />
            </a>
          </div>
          <p className="text-xs text-white/70">
            &copy; {new Date().getFullYear()} Gandhi Satria. All rights reserved.
          </p>
        </div>

        {/* Contact Form */}
        <div className="order-2 md:order-1 w-full md:w-1/2">
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-white text-sm">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-white text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-white text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
                  rows={4}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 text-white rounded-lg bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-600 hover:opacity-75 transition flex items-center justify-center gap-2"
              >
                {isLoading && <Loader2 className="animate-spin" size={18} />}
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 text-center w-80 shadow-xl">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Thank you!</h3>
            <p className="text-gray-700">Your message has been sent.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 text-white bg-purple-700 rounded hover:bg-purple-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <div className="text-white/80 pt-1">{icon}</div>
    <div>
      <div className="text-sm font-semibold">{label}</div>
      <div className="text-sm text-white/70">{value}</div>
    </div>
  </div>
);

export default Contact;
