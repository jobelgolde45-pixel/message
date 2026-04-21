'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import MessageCard from './MessageCard';

interface ActiveMessage {
  id: string;
  title: string;
  content: string;
  tone: 'default' | 'signoff' | 'final';
}

interface MessageModalProps {
  activeMessage: ActiveMessage | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MessageModal({
  activeMessage,
  isOpen,
  onClose,
}: MessageModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && activeMessage ? (
        <motion.div
          key={activeMessage.id}
          className="message-modal-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
          onClick={onClose}
        >
          <motion.div
            className="message-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
          />
          <div className="message-modal-frame">
            <MessageCard
              content={activeMessage.content}
              title={activeMessage.title}
              tone={activeMessage.tone}
              onClose={onClose}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
