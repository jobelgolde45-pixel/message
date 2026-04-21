✅ AI Agent Prompt: Clickable “Cathlyne” Name with Modern Profile Hover
🎯 Goal

Make the name “Cathlyne”:

Clickable → redirects to her Facebook profile
Enhanced with a modern hover interaction
Displays a profile preview (avatar + short info) on hover

Facebook link:

https://www.facebook.com/cathlyne.gliponeo.5
⚠️ IMPORTANT CONSTRAINT (READ FIRST)

You CANNOT directly fetch profile data or image from Facebook dynamically due to:

CORS restrictions
Facebook privacy/security limitations
✅ Required Solution
Manually use a profile image (provided or approximated)
Place it inside:
/public/cathlyne-profile.jpeg

If no image is provided:

Use a placeholder temporarily
Structure code so it can be easily replaced later
🧠 Behavior Requirements
1. Clickable Name
The name Cathlyne must:
Open Facebook profile in a new tab
Use secure linking:
target="_blank" rel="noopener noreferrer"
2. Hover Interaction (Core Feature)

When hovering the name:

Show a floating profile card
Smooth animation (fade + slide)
No layout shift
🎨 UI/UX Design Requirements
✨ Name Styling

Use a modern interactive text style:

text-pink-500 font-semibold relative cursor-pointer

Hover effects:

Gradient or underline animation
Slight glow or color transition

Example:

hover:text-pink-600 transition-all duration-300
✨ Profile Hover Card
Content:
Profile Image
Name: Cathlyne
Optional subtitle:
“Collection Fam 💖”
or “OJT Intern”
Style:
absolute z-50 w-64 p-4 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border
⚙️ Animation Requirements
Hover Card Animation

Use:

opacity: 0 → 1
translateY(10px → 0)
slight scale(0.95 → 1)

Tailwind example:

transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
🧩 Implementation Strategy
Option A (Recommended – Simple + Clean)

Use:

group hover in Tailwind

Structure:

<div class="relative inline-block group">
  <!-- Name -->
  <a href="..." target="_blank" rel="noopener noreferrer">
    Cathlyne
  </a>

  <!-- Hover Card -->
  <div class="absolute hidden group-hover:block ...">
    <!-- Profile content -->
  </div>
</div>
Option B (Advanced – Framer Motion)

If already using Framer Motion:

Use motion.div
Add smooth entrance/exit animation
Use AnimatePresence if needed
🧱 Example Behavior Logic
Hover in → show card
Hover out → hide smoothly
Prevent flicker:
Add slight delay or padding buffer
🚀 Performance Best Practices
Use:
will-change: transform, opacity;
Avoid:
heavy re-renders
layout shifts
📱 Responsiveness
On mobile:
Disable hover card
Only clickable link remains

Optional:

Show profile in a modal on tap
🧪 Acceptance Criteria
“Cathlyne” is clickable and opens Facebook
Hover shows smooth profile preview
No flicker or jump
Matches modern UI design
Works across screen sizes
🧱 Bonus Enhancements (Optional)
Add subtle glow behind avatar
Add gradient border:
bg-gradient-to-r from-pink-400 to-purple-500 p-[1px]
Add micro-interaction:
Slight tilt or parallax
📂 File Expectations
Update component where “Cathlyne” appears
Add image:
/public/cathlyne-profile.jpg
❗ Constraints
DO NOT break existing layout/theme
Keep it clean and minimal
Follow modern UI/UX best practices