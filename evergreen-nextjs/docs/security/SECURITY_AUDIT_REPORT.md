# Security Audit Report - Evergreen Chiropractic Next.js Website

**Audit Date:** 2025-11-21
**Auditor:** Security Auditor Agent
**Project:** Evergreen Chiropractic Nashville Website
**Framework:** Next.js 16.0.3, React 19.2.0
**Repository:** /mnt/c/projects/evergreen/evergreen-nextjs

---

## Executive Summary

This comprehensive security audit examined the Evergreen Chiropractic Next.js website for vulnerabilities across multiple categories including XSS, CSRF, authentication, code quality, and Next.js-specific security patterns. The application is a static/hybrid website with minimal attack surface due to the absence of custom API endpoints and user authentication systems.

**Overall Risk Level:** LOW to MEDIUM

**Key Statistics:**
- Critical Vulnerabilities: 0
- High Severity Issues: 1
- Medium Severity Issues: 6
- Low Severity Issues: 5

---

## Detailed Findings

### HIGH Severity

#### 1. Potential XSS via dangerouslySetInnerHTML in Blog Content

**File:** `/mnt/c/projects/evergreen/evergreen-nextjs/components/BlogPostClient.tsx`
**Line:** 97
**CWE:** CWE-79 (Cross-site Scripting)

**Description:**
The BlogPostClient component uses `dangerouslySetInnerHTML` to render blog post content:

```tsx
dangerouslySetInnerHTML={{ __html: post.content }}
```

**Current Mitigation:**
Blog content is currently hardcoded in `/mnt/c/projects/evergreen/evergreen-nextjs/lib/blogData.ts` as static strings controlled by developers. This significantly reduces the risk.

**Risk:**
If the application is modified to fetch blog content from Sanity CMS or any user-editable source in the future, this becomes a critical XSS vulnerability.

**Remediation:**
1. If CMS content is added, implement HTML sanitization using a library like DOMPurify:
```tsx
import DOMPurify from 'dompurify';
dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
```
2. Alternatively, use Sanity's PortableText component which handles escaping properly.

---

### MEDIUM Severity

#### 2. Missing Error Boundaries

**Files Affected:** All pages in `/mnt/c/projects/evergreen/evergreen-nextjs/app/`
**CWE:** CWE-755 (Improper Handling of Exceptional Conditions)

**Description:**
No `error.tsx` files exist in any route directory. Unhandled errors in React components could expose stack traces or cause poor user experience.

**Remediation:**
Create error boundary files for critical routes:
```tsx
// app/error.tsx
'use client'
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

---

#### 3. Unsafe TypeScript 'any' Types

**Files Affected:**
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/HomePageClient.tsx:24` - `settings: any`
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/AboutPageClient.tsx:19` - `bio?: any`
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/AboutPageClient.tsx:97` - `member: any`
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/AboutPageClient.tsx:291` - `member: any`
- `/mnt/c/projects/evergreen/evergreen-nextjs/lib/sanity/image.ts:6` - `source: any`
- `/mnt/c/projects/evergreen/evergreen-nextjs/sanity/schemas/objects/businessHours.ts:51` - `selection: any`

**CWE:** CWE-1321 (Improperly Controlled Modification of Object Prototype Attributes)

**Description:**
Using `any` type bypasses TypeScript's type checking, potentially allowing unexpected data shapes that could cause runtime errors or security issues.

**Remediation:**
Define proper interfaces for all data structures:
```tsx
interface SiteSettings {
  title?: string;
  tagline?: string;
  bookingUrl?: string;
  // ... other fields
}

interface HomePageClientProps {
  featuredServices: Service[];
  settings: SiteSettings | null;
}
```

---

#### 4. HTTP Link Instead of HTTPS

**File:** `/mnt/c/projects/evergreen/evergreen-nextjs/components/CFTPageClient.tsx`
**Line:** 97

**Description:**
External link uses insecure HTTP protocol:
```tsx
href="http://www.gillespieapproach.com/"
```

**Remediation:**
Update to HTTPS:
```tsx
href="https://www.gillespieapproach.com/"
```

---

#### 5. Missing Content Security Policy (CSP)

**File:** `/mnt/c/projects/evergreen/evergreen-nextjs/app/layout.tsx`
**CWE:** CWE-1021 (Improper Restriction of Rendered UI Layers)

**Description:**
No Content Security Policy headers are configured. CSP helps prevent XSS attacks by restricting resource loading.

**Remediation:**
Add CSP headers in `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; frame-src https://www.google.com https://maps.google.com;"
          },
        ],
      },
    ]
  },
}
```

---

#### 6. Contact Form Lacks Server-Side Validation

**File:** `/mnt/c/projects/evergreen/evergreen-nextjs/components/ContactPageClient.tsx`
**Lines:** 26-33

**Description:**
The contact form uses a `mailto:` link approach without server-side validation, rate limiting, or spam protection. This exposes the business email to potential abuse.

**Current Implementation:**
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  window.location.href = `mailto:drmcgetrick@evergreenchironash.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
```

**Remediation:**
Consider implementing:
1. Server-side API route with rate limiting
2. reCAPTCHA or honeypot field for spam prevention
3. Input sanitization and validation

---

#### 7. Sanity Studio Publicly Accessible

**File:** `/mnt/c/projects/evergreen/evergreen-nextjs/app/studio/[[...tool]]/page.tsx`

**Description:**
The Sanity Studio CMS is accessible at `/studio`. While Sanity handles its own authentication, this should be documented and monitored.

**Remediation:**
1. Ensure Sanity project has proper access controls configured
2. Consider IP whitelisting for production if possible
3. Monitor for unauthorized access attempts

---

### LOW Severity

#### 8. Missing rel="noopener noreferrer" on External Links

**Files Affected:**
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/Navigation.tsx:48`
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/Navigation.tsx:132`
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/HomePageClient.tsx:302`
- `/mnt/c/projects/evergreen/evergreen-nextjs/app/page.tsx:46`

**CWE:** CWE-1022 (Use of Web Link to Untrusted Target with window.opener Access)

**Description:**
Several external links with `target="_blank"` are missing the `rel="noopener noreferrer"` attribute.

**Example (Navigation.tsx:48):**
```tsx
<Link
  href="https://evergreenchironash.janeapp.com"
  target="_blank"
  // Missing: rel="noopener noreferrer"
```

**Remediation:**
Add `rel="noopener noreferrer"` to all external links:
```tsx
<Link
  href="https://evergreenchironash.janeapp.com"
  target="_blank"
  rel="noopener noreferrer"
```

---

#### 9. Google Maps iframe Without Sandbox Attribute

**Files Affected:**
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/ContactPageClient.tsx:168-176`
- `/mnt/c/projects/evergreen/evergreen-nextjs/components/HomePageClient.tsx:324-332`

**Description:**
Google Maps embeds don't use the `sandbox` attribute. While Google Maps is a trusted source, adding sandbox provides defense in depth.

**Remediation:**
```tsx
<iframe
  src="https://www.google.com/maps/embed?..."
  sandbox="allow-scripts allow-same-origin"
  // ... other attributes
/>
```

---

#### 10. dangerouslySetInnerHTML for JSON-LD (Acceptable Risk)

**Files Affected:** Multiple page files for structured data

**Description:**
JSON-LD schema markup uses `dangerouslySetInnerHTML`:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(localBusinessSchema),
  }}
/>
```

**Assessment:**
This is LOW risk because:
1. Data comes from server-side functions (`generateLocalBusinessSchema`, etc.)
2. Content is controlled by developers, not users
3. JSON.stringify provides implicit escaping
4. This is standard practice for structured data in Next.js

---

#### 11. PortableText Rendering from CMS

**File:** `/mnt/c/projects/evergreen/evergreen-nextjs/components/AboutPageClient.tsx:331`

**Description:**
```tsx
<PortableText value={member.bio} />
```

**Assessment:**
LOW risk - PortableText from @portabletext/react properly escapes content by default. Only custom components could introduce vulnerabilities.

---

#### 12. Environment Variable Exposure Consideration

**File:** `/mnt/c/projects/evergreen/evergreen-nextjs/.env.local`

**Description:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID` is public (this is expected for Sanity)
- `SANITY_API_TOKEN` is currently empty (good)
- `.gitignore` correctly excludes `.env*` files

**Recommendation:**
Ensure `.env.local` is never committed. Current `.gitignore` configuration appears correct.

---

## Dependency Security

**File:** `/mnt/c/projects/evergreen/evergreen-nextjs/package.json`

**Current Dependencies:**
- next: 16.0.3 (latest)
- react: 19.2.0 (latest)
- @sanity/client: ^7.13.0
- sanity: ^4.16.0

**Recommendation:**
Run periodic security audits:
```bash
npm audit
npm audit fix
```

---

## Positive Security Findings

The following security best practices are correctly implemented:

1. **External Links:** Most external links properly use `rel="noopener noreferrer"`
2. **Image Optimization:** Uses Next.js Image component with proper configuration
3. **Remote Patterns:** Image sources are restricted to specific domains in `next.config.ts`
4. **notFound() Handling:** Blog pages properly handle missing content with `notFound()`
5. **React 19:** Uses latest React with improved security defaults
6. **HTTPS:** All external resources use HTTPS (except one noted HTTP link)
7. **No API Routes:** Absence of custom API endpoints reduces attack surface
8. **No Database:** No direct database connections to protect
9. **No Authentication:** No user authentication means no credential storage vulnerabilities

---

## Security Recommendations Priority

### Immediate Actions (This Week)
1. Add `rel="noopener noreferrer"` to missing external links
2. Change HTTP link to HTTPS in CFTPageClient.tsx
3. Create basic error.tsx file in app directory

### Short-Term Actions (This Month)
4. Add Content Security Policy headers
5. Replace `any` types with proper TypeScript interfaces
6. Add HTML sanitization to BlogPostClient.tsx as preventive measure

### Long-Term Improvements
7. Implement server-side contact form with rate limiting
8. Add security headers (X-Frame-Options, X-Content-Type-Options)
9. Set up automated dependency vulnerability scanning
10. Consider adding honeypot fields or CAPTCHA to contact form

---

## Compliance Notes

**OWASP Top 10 2021 Coverage:**
- A01:2021 Broken Access Control: N/A (no auth system)
- A02:2021 Cryptographic Failures: N/A (no sensitive data storage)
- A03:2021 Injection: MEDIUM RISK - dangerouslySetInnerHTML usage noted
- A04:2021 Insecure Design: LOW RISK - minimal attack surface
- A05:2021 Security Misconfiguration: MEDIUM RISK - missing CSP
- A06:2021 Vulnerable Components: LOW RISK - using latest versions
- A07:2021 Auth Failures: N/A (no auth system)
- A08:2021 Software/Data Integrity: LOW RISK
- A09:2021 Security Logging: NOT IMPLEMENTED
- A10:2021 SSRF: N/A (no server-side requests to user-controlled URLs)

---

## Conclusion

The Evergreen Chiropractic website has a relatively low security risk profile due to its static nature and minimal user interaction. The most significant concerns are potential XSS vectors if blog content sourcing changes, and the lack of defensive headers like CSP. The recommended fixes are straightforward to implement and would significantly improve the security posture of the application.

---

*Report generated by Security Auditor Agent*
*Next audit recommended: 2026-02-21 (3 months)*
