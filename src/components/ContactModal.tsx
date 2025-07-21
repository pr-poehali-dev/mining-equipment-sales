import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ContactForm from './ContactForm';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <Button 
        onClick={openModal}
        className="bg-primary hover:bg-primary/90 shadow-lg"
        size="lg"
      >
        <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
        Связаться с нами
      </Button>

      {/* Modal Backdrop & Content */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-md">
            <ContactForm onClose={closeModal} isModal={true} />
          </div>
        </div>
      )}
    </>
  );
}