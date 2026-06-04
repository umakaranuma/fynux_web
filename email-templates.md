# Automated Email Response Flow Templates

These templates are designed to be used in your automated CRM or Email Provider (like Resend, SendGrid, or Mailchimp) when a client submits an inquiry through the Fynux Contact Form.

## Email 1: Immediate Auto-Response
**Trigger:** Sent instantly upon form submission.
**Purpose:** Reassures the client that their inquiry was received and establishes professionalism.

**Subject:** Thank you for contacting Fynux – Inbound Project Inquiry

**Body:**
```text
Hello {{Client.Name}},

Thank you for reaching out to Fynux. We have successfully received your inquiry regarding your upcoming mobile/web development project.

Our team specializes in engineering high-performance cross-platform applications, custom native integrations, and scalable full-stack architectures. We understand how critical a seamless digital product is to your business goals, and we are excited to learn more about yours.

What happens next?
Our principal architect is currently reviewing your project details and checking our development pipeline capacity. You can expect a personalized response from us within 1 business day to discuss the next steps or to schedule a brief discovery call.

In the meantime, feel free to explore our recent open-source packages and development case studies on our portfolio.

Best regards,

The Project Engineering Team
Fynux
https://fynux.com
```

---

## Email 2: Personalized Follow-Up
**Trigger:** Sent manually by you within 24 hours of receiving the lead.
**Purpose:** Books a discovery call to move qualified leads down the sales funnel.

**Subject:** Discovery Call: Application Architecture for {{Client.Company_Name}}

**Body:**
```text
Hi {{Client.Name}},

I personally reviewed your submission regarding the {{Client.Project_Type}} project. Your goals for this application—specifically regarding [mention 1 detail they wrote, e.g., the secure checkout or real-time tracking]—align perfectly with our core engineering expertise.

To give you an accurate scope, timeline, and architectural proposal, I would love to hop on a brief, 15-minute introductory discovery call.

On this call, we will:
1. Clarify your technical and business feature requirements.
2. Discuss the optimal technology stack (e.g., Flutter frontend backed by a robust NestJS/Django API environment).
3. Align on timeline milestones and budget expectations.

You can pick a time slot that works best for you directly through my scheduling link here: [Insert Calendly/Booking Link].

Looking forward to collaborating on building a high-impact solution for your business.

Best professional regards,

Umakaran Ampigaipagan
Principal Software Engineer
Fynux
+1 (555) 123-4567
```
