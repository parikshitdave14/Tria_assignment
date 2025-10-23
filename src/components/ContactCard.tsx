import { User, Mail, Phone, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Contact {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  profilePhoto?: string;
  address?: string;
}

interface ContactCardProps {
  contact: Contact;
  onClick: () => void;
}

const ContactCard = ({ contact, onClick }: ContactCardProps) => {
  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card
      onClick={onClick}
      className="p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#3b82f6] bg-card"
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14 ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
          <AvatarImage src={contact.profilePhoto} alt={contact.name} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-lg truncate">
            {contact.name}
          </h3>
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{contact.mobile}</span>
            </div>
            {contact.email && (
              <div className="flex items-center gap-2 text-sm text-accent">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate">{contact.email}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-4 ">
  <a href={`${contact.mobile}`}>
    <Phone className="w-6 h-6 hover:animate-wiggle hover:text-[#3b82f6]" /> 
  </a>

  <a href={`https://wa.me/${contact.mobile}`} target="_blank">
    <MessageCircle className="w-6 h-6 hover:animate-wiggle hover:text-[#3b82f6]" />
  </a>

  <a href="mailto:youremail@example.com?subject=Inquiry">
     <Mail className="w-6 h-6 hover:animate-wiggle hover:text-[#3b82f6]"/>
  </a>
</div>
      </div>
    </Card>
  );
};

export default ContactCard;
