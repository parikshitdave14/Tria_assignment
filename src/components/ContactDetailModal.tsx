import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Contact {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  profilePhoto?: string;
  address?: string;
}

interface ContactDetailModalProps {
  contact: Contact | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDetailModal = ({ contact, open, onOpenChange }: ContactDetailModalProps) => {
  if (!contact) return null;

  const initials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg backdrop-blur-xl bg-card/95 border-primary/20">
        <div className="flex flex-col items-center text-center pt-6 pb-4">
          <Avatar className="h-24 w-24 ring-4 ring-primary/30 mb-4 transition-all duration-500 hover:ring-primary/50">
            <AvatarImage src={contact.profilePhoto} alt={contact.name} />
            <AvatarFallback className="bg-primary/20 text-primary text-2xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <h2 className="text-3xl font-bold text-foreground mb-1">{contact.name}</h2>
          <p className="text-sm text-muted-foreground">Contact</p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-4 pb-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Contact Details
          </h3>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 transition-all duration-300 hover:bg-secondary">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">Phone</p>
                <p className="font-medium text-foreground break-all">{contact.mobile}</p>
              </div>
            </div>

            {contact.email && (
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 transition-all duration-300 hover:bg-secondary">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-medium text-accent hover:underline break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            )}

            {contact.address && (
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 transition-all duration-300 hover:bg-secondary">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Address</p>
                  <p className="font-medium text-foreground break-words">{contact.address}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDetailModal;
