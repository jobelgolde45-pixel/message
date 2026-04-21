'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';

interface MessageCardProps {
  content: string;
  title: string;
  tone: 'default' | 'signoff' | 'final';
  onClose: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function MessageCard({
  content,
  title,
  tone,
  onClose,
}: MessageCardProps) {
  return (
    <motion.div
      className={`message-modal-card message-tone-${tone}`}
      initial={{ opacity: 0, scale: 0.96, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 18 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 28,
        mass: 1,
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="message-modal-title"
      onClick={(event) => event.stopPropagation()}
    >
      <motion.div
        className="message-modal-sheen"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.24 }}
      />

      <motion.div
        className="message-modal-header"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="message-modal-badge" variants={itemVariants}>
          {tone === 'final' ? <Heart size={14} /> : <Sparkles size={14} />}
          Message
        </motion.div>

        <motion.button
          type="button"
          className="message-modal-close"
          onClick={onClose}
          variants={itemVariants}
          whileTap={{ scale: 0.94 }}
          aria-label="Close message"
        >
          <X size={18} />
        </motion.button>
      </motion.div>

      <motion.div
        className="message-modal-body"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.h2 id="message-modal-title" className="message-modal-title" variants={itemVariants}>
          {title}
        </motion.h2>
        <motion.pre className="message-modal-content" variants={itemVariants}>
          {content}
        </motion.pre>
      </motion.div>
    </motion.div>
  );
}
