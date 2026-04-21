✅ AI Agent Prompt: Message Reveal Animation (Next.js + Tailwind)
🎯 Goal

Implement a smooth, premium message reveal animation when a user clicks:

“Specific Person” button
“Everyone” button

The message should open like an expanding card, not just appear abruptly.

🧠 Core Behavior
Trigger
Clicking:
Specific Person
Everyone
This sets the selected message and triggers the animation
State Management

Maintain:

const [activeMessage, setActiveMessage] = useState(null);
const [isOpen, setIsOpen] = useState(false);
Flow
Button click →
Set message →
Animate card opening →
Display full message content
Close Behavior
Close button OR click outside
Reverse animation smoothly
🎨 Animation Design (IMPORTANT)
✨ Opening Sequence
Card Expansion (Main Effect)
Starts from a compact state
Expands to centered modal/card
Transform Animation
Use:
scale: 0.95 → 1
opacity: 0 → 1
slight translateY(20px → 0)

Smooth Timing
Use Tailwind custom easing:

ease-[cubic-bezier(0.4,0,0.2,1)]
duration-300 or duration-500
Backdrop Effect

Dark overlay:

bg-black/40 backdrop-blur-sm
Fade in smoothly
⚙️ Implementation Strategy (RECOMMENDED)
✅ Use Framer Motion (Best Practice for Next.js)

Install:

npm install framer-motion
🧩 Component Structure
components/
 ├── MessageButtons.tsx
 ├── MessageModal.tsx
 └── MessageCard.tsx
🧱 Implementation Details
1. Button Click Logic
Buttons:
“Specific Person”
“Everyone”
On click:
setActiveMessage(messageData);
setIsOpen(true);
2. Modal with Animation (Framer Motion)

Use:

AnimatePresence
motion.div

Example behavior:

Backdrop
Fade in/out
Card Animation

Use:

initial={{ opacity: 0, scale: 0.95, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.95, y: 20 }}
transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
3. Layout Animation (Advanced / Recommended)

If messages originate from visible cards/buttons:

Use layoutId for shared layout transition

Example:

<motion.div layoutId={`message-${id}`}>

This creates a morphing effect from button → modal

4. Tailwind Styling

Modal container:

fixed inset-0 flex items-center justify-center z-50

Card:

bg-white rounded-2xl p-6 shadow-2xl max-w-lg w-full

Backdrop:

absolute inset-0 bg-black/40 backdrop-blur-sm
5. Content Reveal Animation

Inside the card:

Stagger content animation:
initial="hidden"
animate="visible"

variants={{
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}}

Child elements:

variants={{
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}}
🚀 Performance Best Practices
Use:
transform and opacity only
Avoid:
animating width/height directly
Add:
will-change: transform, opacity;
📱 Responsiveness
Mobile:

Full screen modal:

w-full h-full rounded-none
Desktop:
Centered card with max width
🧪 Acceptance Criteria
Clicking button opens message with smooth animation
Animation feels like card expanding, not popping
Closing reverses animation cleanly
No flicker or layout shift
Works across devices
🧱 Bonus Enhancements (Highly Recommended)
Add spring animation:
transition={{ type: "spring", stiffness: 300, damping: 25 }}
Add hover micro-interaction on buttons:
hover:scale-105 transition-transform
Add subtle glow/shadow on open
❗ Constraints
DO NOT break existing design/theme
ONLY enhance interaction and animation
Keep code clean, modular, and reusable
📂 Final Deliverables
Fully working animated message reveal
Clean component separation
Maintainable and scalable code