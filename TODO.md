Create an interactive cursor-based image reveal effect on the .hero-banner section of the web app.

🎯 Goal

When the user hovers over the hero-banner, an image (public/background-picture.jpeg) should be revealed only inside a circular area that follows the cursor. The rest of the section remains unchanged.

🧠 Behavior Requirements
Cursor Tracking
Track the mouse position inside .hero-banner.
The reveal area must follow the cursor smoothly (no lag/jitter).
Reveal Effect
Use a masking technique (CSS mask-image or clip-path) OR a positioned overlay.
The revealed portion should be a circle (or soft radial gradient).
Outside the circle → image is hidden.
Inside the circle → image is visible.
Smoothness
Apply easing using:
requestAnimationFrame OR
CSS transitions (transform, opacity)
Movement must feel fluid and premium (60fps target).
Hover Activation
Effect only activates when hovering .hero-banner.
On mouse leave:
Fade out the reveal smoothly.
Reset position gracefully.
🎨 Styling Requirements
The .hero-banner should:
Maintain existing design (DO NOT break layout or theme).
Have position: relative and overflow: hidden.
The reveal layer:
Use position: absolute and cover full banner.

Background image:

background-image: url('/background-picture.jpeg');
background-size: cover;
background-position: center;
Initially hidden (opacity: 0).
Reveal circle:
Size: ~150px–250px radius (responsive if possible).
Soft edge using radial-gradient mask for premium feel.
⚙️ Implementation Approach (Preferred)

Use CSS + JavaScript (or React if Next.js):

Option A (Recommended):

Use a div overlay with:

mask-image: radial-gradient(circle at center, white 0%, transparent 80%);

Dynamically update mask position via CSS variables:

--x: 50%;
--y: 50%;
Option B:
Use clip-path: circle() and update position dynamically.
🧩 Example Logic (JS)
On mousemove:
Get cursor position relative to .hero-banner

Update CSS variables:

element.style.setProperty('--x', `${x}px`);
element.style.setProperty('--y', `${y}px`);
On mouseenter:
Fade in overlay
On mouseleave:
Fade out overlay
🚀 Performance Best Practices
Use will-change: transform, opacity
Avoid heavy DOM updates
Use requestAnimationFrame if needed
Debounce unnecessary calculations
📱 Responsiveness
On mobile:
Disable or fallback (since hover doesn't exist)
Option: show static background instead
🧪 Acceptance Criteria
Cursor reveals image smoothly
No lag or flicker
Works across modern browsers
Does not break layout or existing styles
Clean, maintainable code (modular if using React)
🧱 Bonus Enhancements (Optional but Recommended)
Add slight scale or parallax effect to background image
Add subtle glow around reveal circle
Make circle size slightly dynamic based on speed
📂 File Expectations
Update:
HeroBanner component (or equivalent)
CSS module / Tailwind / global styles

Ensure image is loaded from:

/public/background-picture.jpeg