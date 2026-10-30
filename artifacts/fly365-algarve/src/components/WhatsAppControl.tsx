import { MessageCircle } from "lucide-react";
import { site } from "../config/site";

export function WhatsAppControl() {
  return (
    <a className="whatsapp-control" href={site.contact.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Fly365 Algarve on WhatsApp" data-testid="link-whatsapp">
      <MessageCircle aria-hidden="true" size={23} />
    </a>
  );
}
