import type { Locale } from "./ko";

const en: Locale = {
  nav: {
    items: [
      { label: "Problem", href: "problem" },
      { label: "Solution", href: "solution" },
      { label: "Step Detail", href: "steps" },
      { label: "Compare", href: "comparison" },
      { label: "Workshop", href: "cta" },
    ],
    menuLabel: "Menu",
  },

  hero: {
    tag: "AI-Driven Working Backwards",
    headline: "From Press Release to RFP,",
    highlight: "in 3–4 Days.",
    subhead: "Amazon Working Backwards + AI Vibe Coding",
    subheadCont: "= Visual Requirements Built by Business Users",
    ctaPrimary: "Explore the Method",
    ctaSecondary: "Inquire About Workshop",
    scrollLabel: "Scroll down",
  },

  problem: {
    tag: "Problem",
    headlinePre: "80% of IT projects fail not because of ",
    headlineHighlight: "technology, but because of requirements",
    headlinePost: ".",
    narratives: [
      "Business users can only express what they want in text — or at best, a PowerPoint.",
      "A planner listens, writes it up, and IT interprets it.\nThrough these 3 stages, half the original intent disappears and the other half is distorted.",
      "RFPs are packed with text,\neach vendor reads them differently,\nestimates vary by 2x,\nand after development, both sides say \"that's not what we agreed on.\"",
      "These are the classic pain points that requirements engineering has long identified.",
    ],
    distortion: [
      { label: "Business", pct: "100%" },
      { label: "Planner", pct: "60%" },
      { label: "IT", pct: "30%" },
    ],
    distortionNote: "→ Through 3 stages, half the intent is lost and the rest is distorted.",
    painPoints: [
      { title: "Text-heavy RFP", desc: "Ambiguous documents interpreted differently by each vendor" },
      { title: "2x Estimate Gap", desc: "Cost variance from unclear scope" },
      { title: "3-stage Distortion", desc: "Intent lost across Business → Planner → IT" },
      { title: "Post-dev Disputes", desc: "\"That's not what we agreed\" — recurring CRs" },
    ],
  },

  solution: {
    tag: "Solution",
    headline: "Amazon knew the answer 20 years ago.",
    quote: "\"Write the press release before building the product.\" — Working Backwards",
    aiIntro: "I combined this with AI.",
    descTitle: "AI-Driven Working Backwards:",
    descLines: [
      "Starting from a press release, building mockups with AI vibe coding,",
      "iterating through cycles where business users experience and give feedback,",
      "arriving at a clear RFP through a 6-phase pipeline.",
    ],
    phases: [
      { phase: 1, title: "Press Release", tool: "ChatGPT · Claude · Gemini", tag: "1–2 days" },
      { phase: 2, title: "KPI Backtrack", tool: "AI Conversational Refinement", tag: "Feature Listing" },
      { phase: 3, title: "Prompt Design", tool: "Reference Combination (Reverse-eng.)", tag: "UI/UX Requirements" },
      { phase: 4, title: "Mockup Creation", tool: "Lovable · Stitch · Figma", tag: "Step-by-step / Components" },
      { phase: 5, title: "Design Doc", tool: "Codex · Claude Code", tag: "Functional / Screen Specs" },
      { phase: 6, title: "RFP Writing", tool: "AI Document Automation", tag: "Procurement Ready" },
    ],
    summary: "Total time: 3–4 business days per person (80–90% reduction vs. traditional)",
  },

  workingBackwards: {
    tag: "What is Working Backwards?",
    headline: "Amazon's Product Development Philosophy",
    origin: "A methodology born inside Amazon in 2004 — think from the customer's perspective before building anything.",
    description:
      "Working Backwards starts by imagining launch day and writing the press release first. This single act forces a team to clearly align on what they are actually building and why.",
    corePrinciple: "Define the outcome (press release) first, then work backwards to start development.",
    steps: [
      {
        num: "01",
        name: "Write the Press Release",
        description:
          "Write the press release customers will read on launch day. Compress the product's value and customer benefit into a single page.",
      },
      {
        num: "02",
        name: "Write the FAQ",
        description:
          "Pre-answer every question customers and internal stakeholders will ask. Eliminate ambiguous assumptions before they become bugs.",
      },
      {
        num: "03",
        name: "Visualize the User Experience",
        description:
          "Concretely map the journey a real customer takes through the product. Only after this does development begin.",
      },
    ],
    connection:
      "Traditional Working Backwards converges on text documents (press release + FAQ). ADWB goes one step further — AI vibe coding turns those documents into a live, working demo that aligns the whole team visually.",
  },

  steps: {
    tag: "Steps in Detail",
    headline: "Pipeline Phases in Detail",
    areas: [
      {
        key: "12",
        phaseRange: "Phase 1 & 2",
        label: "Goal Clarity",
        subtitle: "The Forcing Function",
        description: "Vague planning documents are forcibly converted into a clear 'value proposition' from the customer's perspective.",
        steps: [
          { num: 1, name: "Write Press Release", purpose: "Define customer value", tool: "ChatGPT · Claude · Gemini" },
          { num: 2, name: "KPI Backtrack", purpose: "Quantify success criteria", tool: "AI Conversational Refinement" },
        ],
      },
      {
        key: "34",
        phaseRange: "Phase 3 & 4",
        label: "Visualizing Thought",
        subtitle: "Visualizing Thought",
        description: "Without a designer or developer, a business user generates a working mockup in a single day.",
        steps: [
          { num: 3, name: "Prompt Design", purpose: "Create visual blueprint", tool: "Reference Combination (Reverse-eng.)" },
          { num: 4, name: "Mockup Creation", purpose: "Visualize screens", tool: "Lovable · Stitch · Figma" },
        ],
      },
      {
        key: "56",
        phaseRange: "Phase 5 & 6",
        label: "Automated Blueprinting",
        subtitle: "Automated Blueprinting",
        description: "Based on actual working screens — not abstract text — scope is defined with zero room for misinterpretation.",
        steps: [
          { num: 5, name: "Design Doc", purpose: "Document final structure", tool: "Codex · Claude Code" },
          { num: 6, name: "RFP Writing", purpose: "Prepare for procurement", tool: "AI Document Automation" },
        ],
      },
    ],
  },

  positioning: {
    tag: "Core Positioning",
    headline: "Vibe coding is not just a development tool.",
    quote1: "\"Building an enterprise system end-to-end with vibe coding alone is not realistic.",
    quote2Pre: "But when used to make business thinking ",
    quote2Highlight: "'visible'",
    quote2Mid: " and iteratively refine it into a clear RFP — it is ",
    quote2Bold: "remarkably effective.",
    quote2End: "\"",
    tagline: "Technology is a tool. People are at the center.",
  },

  methodologyContext: {
    tag: "Methodology Context",
    headline: "What Software Engineering Already Knew",
    intro:
      "Evolutionary Prototyping, Throwaway Prototyping, Participatory Design — SE already has similar concepts. ADWB is not a new invention. But it is clearly distinguished along three dimensions.",
    labelTraditional: "Traditional",
    labelAdwb: "ADWB",
    differentiators: [
      {
        dimension: "Entry Point",
        traditional: "Starts after requirements are fixed. A tool for development kickoff.",
        adwb: "Starts before requirements exist. Generates requirements directly from non-technical language (press release).",
      },
      {
        dimension: "Who Executes",
        traditional: "Requires specialist developers. High entry cost makes pre-procurement use impractical.",
        adwb: "Non-developers execute directly with AI tools. Business users access it through natural language and visualize outcomes themselves.",
      },
      {
        dimension: "Output Purpose",
        traditional: "Prototype → development kickoff. Aimed at internal team alignment.",
        adwb: "Mockup → RFP + procurement. Specialized for stakeholder persuasion, budget acquisition, and vendor tendering.",
      },
    ],
    honestPositioning:
      "This is not a new invention. It is existing SE concepts re-applied to the procurement context, with AI lowering the execution cost. IEEE Software 2025 (Borg et al.) already points in the same direction. That is precisely what makes it credible.",
  },

  comparison: {
    tag: "Comparison",
    headline: "Traditional vs AI-Driven Working Backwards",
    colLabel: "Criteria",
    colBefore: "Traditional",
    colAfter: "AI-Driven WB",
    rows: [
      { label: "Requirements Discovery", before: "Business → Planner → IT (3-stage, meaning distorted)", after: "Press release forces clarity → business users verify via mockup directly" },
      { label: "Time to First Deliverable", before: "4–8 weeks", after: "3–4 days (6-phase pipeline)" },
      { label: "Requirements Refinement", before: "Document review meetings (abstract)", after: "Mockup → Feedback → Revise cycle (concrete)" },
      { label: "RFP Format", before: "Text-heavy, open to interpretation", after: "Working mockup + screen design doc + RFP draft" },
      { label: "Estimate Variance", before: "2x+ gap between vendors", after: "Scope defined via design doc, misinterpretation eliminated" },
      { label: "Post-dev CR", before: "Frequent (\"not what we wanted\")", after: "Minimized (pre-aligned via mockup)" },
      { label: "Cost to Start", before: "Planning consultancy: tens of millions KRW", after: "AI tool subscriptions + internal staff (minimal cost)" },
    ],
  },

  academic: {
    tag: "Academic Evidence",
    headline: "Recognized by IEEE and Academia",
    references: [
      { source: "IEEE Software", author: "Borg, Bjarnason & Hedin (2025)", summary: "Analyzes vibe coding as a prototyping tool from a requirements engineering perspective" },
      { source: "Empirical Software Engineering", author: "Bjarnason et al. (2023)", summary: "Proposes the Prototyping Aspects Model (PAM) with 5 dimensions" },
      { source: "IET Software", author: "Pacheco & Garcia (2018)", summary: "Scenario + prototyping combination effective for preventing requirement defects" },
      { source: "The Pragmatic Engineer", author: "1M+ subscribers (2025)", summary: "Vibe coding is most suitable for prototyping" },
      { source: "Martin Fowler Blog", author: "Martin Fowler (2025)", summary: "Acknowledges vibe coding's \"narrow but useful\" application" },
    ],
  },

  tools: {
    tag: "Tool Stack",
    headline: "Tools Powering the Pipeline",
    items: [
      { role: "Planning / Ideation" },
      { role: "UI Reference" },
      { role: "UI Generation" },
      { role: "Code Management" },
      { role: "Development / Editing" },
      { role: "Deploy / Demo" },
      { role: "Infrastructure" },
    ],
  },

  cta: {
    tag: "Workshop",
    headline: "Experience This Methodology Firsthand.",
    cards: [
      { title: "1-Day Workshop (8 hrs)", desc: "From press release to RFP in one day — experience the full end-to-end pipeline hands-on." },
      { title: "What You Take Away", desc: "Finalized press release + KPI definition, Lovable mockup + structured source code, working demo site (Firebase URL), design doc + RFP draft" },
      { title: "Who It's For", desc: "Developers: leverage vibe coding for requirement specification · Non-devs: turn ideas into visual mockups (planners/sales/PMs) · Leaders: innovate IT procurement in the AI era" },
    ],
    button: "Inquire About Workshop",
    contactNote: "Reach out via DM or email.",
  },

  contactForm: {
    title: "Inquire About Workshop",
    description: "Fill in the details below and we'll get back to you shortly.",
    nameLabel: "Name",
    namePlaceholder: "John Doe",
    orgLabel: "Organization / Company",
    orgPlaceholder: "(Optional) Company or organization",
    contactLabel: "Contact (Email or Phone)",
    contactPlaceholder: "email@example.com or +82-10-0000-0000",
    messageLabel: "Message",
    messagePlaceholder: "Tell us what you'd like to know about the workshop.",
    submitButton: "Send Inquiry",
    sendingButton: "Sending...",
    successMessage: "Your inquiry has been submitted. We'll contact you soon!",
    fallbackMessage: "Your email app will open. Please review and send.",
  },

  footer: {
    tagline: "Technology is a tool. People are at the center.",
    copyright: "© 2026. AI-Driven Working Backwards Methodology.",
  },
};

export { en };
