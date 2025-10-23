import { useEffect, useState } from "react";
import { Search, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ContactCard";
import AddContactModal from "@/components/AddContactModal";
import ContactDetailModal from "@/components/ContactDetailModal";
import AnimatedSearchBar from "@/components/AnimatedSearchBar";
import DarkModeToggle from "@/components/DarkModeToggle";
import { motion } from "framer-motion";
import GlowingCursor from "@/components/GlowingCursor";

interface Contact {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  profilePhoto?: string;
  address?: string;
}

const Index = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [overlayExited, setOverlayExited] = useState(false);
  const filteredContacts = contacts.filter((contact) => {
    const query = searchQuery.toLowerCase();
    return (
      contact.name.toLowerCase().includes(query) ||
      contact.mobile.includes(query) ||
      contact.email?.toLowerCase().includes(query)
    );
  });

  const handleAddContact = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
  };

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDetailModalOpen(true);
  };

  useEffect(() => {
    fetch("/server.json")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.contacts);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading contacts:", err));
  }, []);

  useEffect(() => {
    // Start exit animation after 1.5s
    const timer = setTimeout(() => {
      setOverlayExited(true);
      // Remove overlay after exit animation
      setTimeout(() => setShowOverlay(false), 800); // match bounce-out duration
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Loading contacts...</p>;

  return (
    <div className="min-h-screen bg-background">
      
      {showOverlay && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
          <img
            src="/contact-book.png"
            alt="Contact Icon"
            className={`w-24 h-24 ${overlayExited ? "animate-bounce-out" : "animate-bounce-in"
              }`}
          />
          <h1
            className={`mt-4 text-2xl font-bold text-gray-800 dark:text-gray-100 ${overlayExited ? "animate-bounce-out" : "animate-bounce-in"
              }`}
          >
            Find Your People
          </h1>
        </div>
      )}

      {!showOverlay && (
        <div className="container max-w-4xl mx-auto py-8 px-4">
          <GlowingCursor/>
          <DarkModeToggle  />
          <div className="text-center mb-12 animate-fade-in">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                My Contacts
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage your contacts in one beautiful place
              </p>
            </motion.h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="relative flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              </motion.div>
            </div>

            <Button
              onClick={() => setIsAddModalOpen(true)}
              className="h-12 px-6 bg-[#3b82f6] hover:bg-[#3b82f6] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Add Contact
            </Button>
          </div>

          {/* Contacts List */}
          <div className="space-y-3">
            {filteredContacts.length === 0 ? (
              <div className="text-center py-16 animate-fade-in">
                <p className="text-muted-foreground text-lg">
                  {searchQuery ? "No contacts found" : "No contacts yet. Add your first contact!"}
                </p>
              </div>
            ) : (
              filteredContacts.map((contact, index) => (
                <div
                  key={contact.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <motion.div
                key={contact.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -200 : 200,
                  scale: 0.9,
                  rotate: index % 2 === 0 ? -5 : 5,
                }}
                whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.1,
                }}
              >
                    <ContactCard contact={contact} onClick={() => handleContactClick(contact)} />
                  </motion.div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      {/* Modals */}
      <AddContactModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onAdd={handleAddContact}
      />

      <ContactDetailModal
        contact={selectedContact}
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
      />

    </div>
  );
};

export default Index;
