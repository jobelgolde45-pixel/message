'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonConfig {
  id: string;
  label: string;
  icon: ReactNode;
}

interface MessageButtonsProps {
  buttons: ButtonConfig[];
  isLoaded: boolean;
  onSelect: (id: string) => void;
}

export default function MessageButtons({
  buttons,
  isLoaded,
  onSelect,
}: MessageButtonsProps) {
  return (
    <section className={`buttons ${isLoaded ? 'animate-in' : ''}`}>
      {buttons.map((button, index) => (
        <motion.button
          key={button.id}
          type="button"
          onClick={() => onSelect(button.id)}
          style={{ animationDelay: `${0.7 + index * 0.05}s` }}
          className="btn-animated"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="message-button-shell">
            <span className="message-button-icon">{button.icon}</span>
            <span>{button.label}</span>
          </span>
        </motion.button>
      ))}
    </section>
  );
}
