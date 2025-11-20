# Nature Animation Components

Beautiful, peaceful nature-themed animations for the Evergreen Chiropractic website.

## Components

### FallingLeaves
Animated falling leaves with swaying motion.

```tsx
import { FallingLeaves } from '@/components/animations'

<FallingLeaves />
```

**Features:**
- 15 randomly positioned leaves
- Multiple leaf types (maple, oak, birch)
- Realistic swaying and rotation
- Automatic infinite loop
- Respects `prefers-reduced-motion`

---

### NatureBackground
Parallax forest background with swaying trees.

```tsx
import { NatureBackground } from '@/components/animations'

<NatureBackground variant="forest" showTrees={true}>
  <YourContent />
</NatureBackground>
```

**Props:**
- `variant`: 'forest' | 'subtle' | 'lush' (default: 'forest')
- `showTrees`: boolean (default: true)
- `className`: string (optional)

**Features:**
- Parallax scrolling effect
- Animated swaying trees
- Multiple gradient variants
- Scroll-based animation

---

### GlassmorphicCard
Reusable glassmorphic card with animations.

```tsx
import { GlassmorphicCard } from '@/components/animations'

<GlassmorphicCard variant="medium" hoverEffect={true}>
  <YourContent />
</GlassmorphicCard>
```

**Props:**
- `variant`: 'light' | 'medium' | 'strong' (default: 'medium')
- `hoverEffect`: boolean (default: true)
- `animateOnView`: boolean (default: true)
- `className`: string (optional)

**Features:**
- Glassmorphism with backdrop blur
- Smooth hover animations
- Entrance animations on scroll
- Glass reflection effect

---

### GlassmorphicContainer
Enhanced glassmorphic container with breathing glow.

```tsx
import { GlassmorphicContainer } from '@/components/animations'

<GlassmorphicContainer>
  <YourContent />
</GlassmorphicContainer>
```

**Features:**
- Breathing glow animation
- Glassmorphic styling
- Entrance animation

---

### AnimatedVines
Growing/flowing vines decoration.

```tsx
import { AnimatedVines } from '@/components/animations'

<AnimatedVines position="left" variant="detailed" />
```

**Props:**
- `position`: 'left' | 'right' | 'top' | 'bottom' (default: 'left')
- `variant`: 'simple' | 'detailed' (default: 'detailed')
- `className`: string (optional)

**Features:**
- Animated vine growth
- Leaves that sway
- Multiple positions
- Simple or detailed variants

---

### FloatingLeafDecoration
Single floating leaf decoration.

```tsx
import { FloatingLeafDecoration } from '@/components/animations'

<FloatingLeafDecoration className="top-10 right-10 opacity-20" />
```

**Features:**
- Gentle floating motion
- Subtle rotation
- Customizable positioning

---

### PageTransition
Smooth page transition wrapper.

```tsx
import { PageTransition } from '@/components/animations'

<PageTransition>
  <YourPageContent />
</PageTransition>
```

**Features:**
- Fade in/out on mount/unmount
- Smooth easing

---

### FadeIn
Entrance animation component.

```tsx
import { FadeIn } from '@/components/animations'

<FadeIn delay={0.2} direction="up">
  <YourContent />
</FadeIn>
```

**Props:**
- `delay`: number (default: 0)
- `direction`: 'up' | 'down' | 'left' | 'right' (default: 'up')
- `className`: string (optional)

**Features:**
- Scroll-triggered animation
- Multiple directions
- Customizable delay

---

### StaggerContainer & StaggerItem
Staggered children animations.

```tsx
import { StaggerContainer, StaggerItem } from '@/components/animations'

<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerContainer>
```

**Props (Container):**
- `staggerDelay`: number (default: 0.1)
- `className`: string (optional)

**Features:**
- Sequential animation of children
- Scroll-triggered
- Customizable stagger timing

---

### RippleEffect
Interactive ripple effect on click.

```tsx
import { RippleEffect } from '@/components/animations'

<RippleEffect rippleColor="rgba(16, 185, 129, 0.3)">
  <YourClickableContent />
</RippleEffect>
```

**Props:**
- `rippleColor`: string (default: 'rgba(16, 185, 129, 0.3)')
- `className`: string (optional)

**Features:**
- Click-triggered ripple
- Customizable color
- Automatic cleanup

---

## Usage Examples

### Homepage with Full Animation Suite

```tsx
import {
  FallingLeaves,
  NatureBackground,
  GlassmorphicCard,
  AnimatedVines,
  FadeIn,
  StaggerContainer,
  StaggerItem
} from '@/components/animations'

export default function HomePage() {
  return (
    <>
      <FallingLeaves />
      <AnimatedVines position="left" />
      <AnimatedVines position="right" />

      <NatureBackground variant="forest">
        <FadeIn>
          <h1>Welcome</h1>
        </FadeIn>

        <StaggerContainer>
          {items.map(item => (
            <StaggerItem key={item.id}>
              <GlassmorphicCard>
                {item.content}
              </GlassmorphicCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </NatureBackground>
    </>
  )
}
```

## Performance Considerations

- All animations use `will-change` and GPU acceleration
- Animations respect `prefers-reduced-motion`
- Components use client-side rendering only when needed
- Leaf animations limited to 15 elements for performance
- Tree animations use CSS transforms for 60fps

## Accessibility

All components respect the user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are disabled or minimized */
}
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with touch optimizations
