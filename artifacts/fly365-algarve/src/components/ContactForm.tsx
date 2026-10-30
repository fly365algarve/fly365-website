import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    setError("");
    setIsSubmitting(true);
    try {
      const encoded = new URLSearchParams(Array.from(fields.entries()).map(([key, value]) => [key, String(value)]));
      const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: encoded.toString() });
      if (!response.ok) throw new Error("Form submission failed");
      setSent(true);
    } catch {
      setError("We couldn’t send your enquiry just now. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (sent) return <div role="status" aria-live="polite" className="border border-[var(--ocean)] bg-[#e9eee9] p-7 text-[var(--navy)]">
    <Check size={24} className="mb-3 text-[var(--ocean)]" />
    <h3 className="display-heading text-2xl">Thanks for your enquiry</h3>
    <p className="mt-2 text-sm leading-6">Your enquiry has been sent to the Fly365 team. We’ll be in touch as soon as we can.</p>
    <button type="button" onClick={() => setSent(false)} className="mt-5 text-sm font-semibold underline underline-offset-4">Send another message</button>
  </div>;

  return <form method="POST" data-netlify="true" name="contact" onSubmit={handleSubmit} className="space-y-5">
    <input type="hidden" name="form-name" value="contact" />
    {error && <p role="alert" className="border-l-2 border-[var(--ochre)] bg-[#eee4d4] px-4 py-3 text-sm leading-6 text-[var(--navy)]">{error}</p>}
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-semibold" htmlFor="contact-name">Name <span aria-hidden="true">*</span><input className="form-field mt-2 font-normal" id="contact-name" name="name" autoComplete="name" required /></label>
      <label className="block text-sm font-semibold" htmlFor="contact-email">Email <span aria-hidden="true">*</span><input className="form-field mt-2 font-normal" id="contact-email" name="email" type="email" autoComplete="email" required /></label>
    </div>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-semibold" htmlFor="contact-phone">Phone <span className="font-normal text-[var(--muted-foreground)]">(optional)</span><input className="form-field mt-2 font-normal" id="contact-phone" name="phone" type="tel" autoComplete="tel" /></label>
      <label className="block text-sm font-semibold" htmlFor="contact-interest">Interested in <select className="form-field mt-2 font-normal" id="contact-interest" name="interested-in" required defaultValue=""><option value="" disabled>Select one</option><option>Trial flight</option><option>Training course</option><option>Conversion</option><option>Other</option></select></label>
    </div>
    <label className="block text-sm font-semibold" htmlFor="contact-dates">Preferred dates <input className="form-field mt-2 font-normal" id="contact-dates" name="preferred-dates" placeholder="For example, early October" required /></label>
    <label className="block text-sm font-semibold" htmlFor="contact-message">Message <span aria-hidden="true">*</span><textarea className="form-field mt-2 min-h-32 resize-y font-normal" id="contact-message" name="message" required /></label>
    <button className="button-ochre inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest disabled:cursor-wait disabled:opacity-70" type="submit" disabled={isSubmitting}><Send size={16} />{isSubmitting ? "Sending enquiry…" : "Send enquiry"}</button>
  </form>;
}
