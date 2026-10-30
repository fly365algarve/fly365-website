import { SiWhatsapp } from "react-icons/si";
import { site } from "../config/site";

export function WhatsAppControl() {
  return (
    <a className="whatsapp-control" href={site.contact.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Fly365 Algarve on WhatsApp" data-testid="link-whatsapp">
      <SiWhatsapp aria-hidden="true" size={22} />
      <span className="whatsapp-label">Chat with us</span>
    </a>
  );
}
