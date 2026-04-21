'use client';

import { motion, Variants } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';

interface MessageCardProps {
  content: string;
  title: string;
  tone: 'default' | 'signoff' | 'final';
  onClose: () => void;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

// Modern content reveal animation variants - properly typed
const contentContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const charVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -15,
    filter: 'blur(4px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
      delay: i * 0.02,
    },
  }),
};

// Splits text into characters with proper spacing handling
const splitTextIntoChars = (text: string) => {
  return text.split('').map((char, i) => ({
    char: char === ' ' ? '\u00A0' : char,
    key: i,
    isSpace: char === ' ',
  }));
};

export default function MessageCard({
  content,
  title,
  tone,
  onClose,
}: MessageCardProps) {
  const characters = splitTextIntoChars(content);

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
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
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
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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
        <motion.h2
          id="message-modal-title"
          className="message-modal-title"
          variants={itemVariants}
        >
          {title}
        </motion.h2>

        {/* Modern character-by-character reveal animation for content */}
        <motion.div
          className="message-modal-content-wrapper"
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="message-modal-content">
            {characters.map(({ char, key, isSpace }) => (
              <motion.span
                key={key}
                custom={key}
                variants={charVariants}
                className="message-content-char"
                style={{
                  display: 'inline-block',
                  whiteSpace: 'pre',
                  marginRight: isSpace ? '0.25em' : '0',
                }}
                aria-hidden="true"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .message-modal-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.95) 100%);
          backdrop-filter: blur(10px);
          border-radius: 32px;
          padding: 28px;
          max-width: 480px;
          width: 90vw;
          box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.25),
                      0 2px 8px -4px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .message-modal-sheen {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            115deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: skewX(-15deg);
          pointer-events: none;
          z-index: 1;
        }

        .message-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .message-modal-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #666;
          backdrop-filter: blur(4px);
        }

        .message-modal-close {
          background: rgba(0, 0, 0, 0.05);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #666;
        }

        .message-modal-close:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #000;
        }

        .message-modal-body {
          position: relative;
          z-index: 2;
        }

        .message-modal-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .message-modal-content-wrapper {
          margin-top: 8px;
        }

        .message-modal-content {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #2c3e50;
          white-space: pre-wrap;
          word-break: break-word;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
        }

        .message-content-char {
          display: inline-block;
          will-change: transform, opacity, filter;
        }

        /* Tone-specific styles */
        .message-tone-final .message-modal-title {
          background: linear-gradient(135deg, #c9184a, #ff6b6b);
          -webkit-background-clip: text;
          background-clip: text;
        }

        .message-tone-signoff .message-modal-title {
          background: linear-gradient(135deg, #4a4e69, #9a8c98);
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .message-modal-card {
            background: linear-gradient(135deg, 
              rgba(30, 30, 40, 0.98) 0%,
              rgba(20, 20, 30, 0.95) 100%);
            border-color: rgba(255, 255, 255, 0.1);
          }

          .message-modal-badge {
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
          }

          .message-modal-close {
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
          }

          .message-modal-close:hover {
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
          }

          .message-modal-content {
            color: #e0e0e0;
          }
        }
      `}</style>
    </motion.div>
  );
}
