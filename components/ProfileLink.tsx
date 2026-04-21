'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Heart } from 'lucide-react';
import { useState } from 'react';

const PROFILE_URL = 'https://www.facebook.com/cathlyne.gliponeo.5';

export default function ProfileLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="profile-link-wrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link-trigger"
      >
        <span className="profile-link-text">Cathlyne</span>
        <ExternalLink size={14} aria-hidden="true" />
      </a>

      <AnimatePresence>
        {isHovered ? (
          <motion.span
            className="profile-hover-card"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="profile-hover-border">
              <span className="profile-hover-inner">
                <span className="profile-hover-avatar">
                  <Image
                    src="/cathlyne-profile.jpeg"
                    alt="Cathlyne profile photo"
                    width={72}
                    height={72}
                  />
                </span>
                <span className="profile-hover-copy">
                  <span className="profile-hover-name">Cathlyne</span>
                  <span className="profile-hover-subtitle">Collection Fam 💖</span>
                  <span className="profile-hover-meta">
                    <Heart size={12} aria-hidden="true" />
                    Facebook profile
                  </span>
                </span>
              </span>
            </span>
          </motion.span>
        ) : null}
      </AnimatePresence>
    </span>
  );
}
