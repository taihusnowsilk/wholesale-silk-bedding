'use client';

import { useState } from 'react';
import { Modal } from './ui/modal';
import { Button } from './ui/button';
import { ContactForm } from './ContactForm';

interface ContactButtonProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ContactButton({ className, children, title="Contact Us" }: ContactButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children}
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        <ContactForm />
      </Modal>
    </>
  );
} 