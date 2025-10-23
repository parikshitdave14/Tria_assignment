import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface Contact {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  profilePhoto?: string;
  address?: string;
}

interface AddContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (contact: Contact) => void;
}

const AddContactModal = ({ open, onOpenChange, onAdd }: AddContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    profilePhoto: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.mobile.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please fill in name and mobile number",
        variant: "destructive",
      });
      return;
    }

    const newContact: Contact = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      email: formData.email.trim() || undefined,
      profilePhoto: formData.profilePhoto.trim() || undefined,
      address: formData.address.trim() || undefined,
    };

    onAdd(newContact);
    setFormData({ name: "", mobile: "", email: "", profilePhoto: "", address: "" });
    onOpenChange(false);
    
    toast({
      title: "Contact added",
      description: `${newContact.name} has been added to your contacts`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md backdrop-blur-xl bg-card/95">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Add New Contact</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="transition-all duration-300 focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-foreground">
              Mobile Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="+1 234 567 8900"
              className="transition-all duration-300 focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-muted-foreground">Email (optional)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="transition-all duration-300 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="profilePhoto" className="text-muted-foreground">Profile Photo URL (optional)</Label>
            <Input
              id="profilePhoto"
              type="url"
              value={formData.profilePhoto}
              onChange={(e) => setFormData({ ...formData, profilePhoto: e.target.value })}
              placeholder="https://example.com/photo.jpg"
              className="transition-all duration-300 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-muted-foreground">Address (optional)</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="123 Main St, City, Country"
              className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 transition-all duration-300 hover:bg-secondary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Add Contact
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddContactModal;
