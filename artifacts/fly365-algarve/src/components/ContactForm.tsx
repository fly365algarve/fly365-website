import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@fly365algarve.co.uk?subject=Enquiry from Website&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email <span className="text-sky">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg bg-white border border-sky-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-colors text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message <span className="text-sky">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're looking for..."
          className="w-full px-4 py-3 rounded-lg bg-white border border-sky-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-colors resize-none text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full sky-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity duration-200 shadow-md"
      >
        <Send className="w-4 h-4" />
        {sent ? "Opening email client..." : "Send Message"}
      </button>
    </form>
  );
}
