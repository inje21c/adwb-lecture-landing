import type { Locale } from "./ko";

const en: Locale = {
  nav: {
    items: [
      { label: "Problem", href: "problem" },
      { label: "Solution", href: "solution" },
      { label: "12 Steps", href: "steps" },
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
      "arriving at a clear RFP through a 12-step pipeline.",
    ],
    pipelineSteps: [
      "Press Release", "KPI", "Prompt", "Lovable", "GitHub",
      "Claude Code", "Demo", "Deploy", "Review", "Iterate", "Design Doc", "RFP",
    ],
    repeatNote: "Steps 9–10 repeat until requirements ",
    repeatHighlight: "converge",
    repeatSuffix: ".",
    repeatEngine: "This iteration cycle is the core engine of the methodology.",
    iterateLabel: "Iterate",
  },

  steps: {
    tag: "12 Steps in Detail",
    headline: "The Methodology in 3 Areas",
    areas: [
      {
        key: "A", label: "Area A", subtitle: "Goal Clarity + Prompt Design",
        steps: [
          { num: 1, name: "Write Press Release", purpose: "Define customer value", tool: "ChatGPT / Claude" },
          { num: 2, name: "Define KPIs", purpose: "Set success criteria", tool: "ChatGPT / Claude" },
          { num: 3, name: "Develop UI Prompt", purpose: "Create visual blueprint", tool: "ChatGPT + Behance/Dribbble" },
        ],
      },
      {
        key: "B", label: "Area B", subtitle: "Iterative Refinement — Core Engine",
        steps: [
          { num: 4, name: "Generate UI with Lovable", purpose: "Visualize screens", tool: "Lovable" },
          { num: 5, name: "Push & Clone on GitHub", purpose: "Secure codebase", tool: "GitHub" },
          { num: 6, name: "Clean Up Source", purpose: "Structure for iteration", tool: "Claude Code" },
          { num: 7, name: "Build Demo Features", purpose: "Add working functionality", tool: "Codex + Claude Code" },
          { num: 8, name: "Deploy to Firebase", purpose: "Make it demo-ready", tool: "Firebase" },
          { num: 9, name: "Demo & Feedback", purpose: "Explore requirements", tool: "People + Demo" },
          { num: 10, name: "Iterate & Revise", purpose: "Converge requirements", tool: "Claude Code" },
        ],
      },
      {
        key: "C", label: "Area C", subtitle: "Finalize Deliverables",
        steps: [
          { num: 11, name: "Write Design Doc", purpose: "Document final structure", tool: "Claude Code + ChatGPT" },
          { num: 12, name: "Write RFP", purpose: "Prepare for procurement", tool: "ChatGPT / Claude" },
        ],
      },
    ],
  },

  positioning: {
    tag: "Core Positioning",
    headline: "Vibe coding is not a development tool.",
    quote1: "\"Building an enterprise system end-to-end with vibe coding alone is not realistic.",
    quote2Pre: "But when used to make business thinking ",
    quote2Highlight: "'visible'",
    quote2Mid: " and iteratively refine it into a clear RFP — it is ",
    quote2Bold: "remarkably effective.",
    quote2End: "\"",
    tagline: "Technology is a tool. People are at the center.",
  },

  comparison: {
    tag: "Comparison",
    headline: "Traditional vs AI-Driven Working Backwards",
    colLabel: "Criteria",
    colBefore: "Traditional",
    colAfter: "AI-Driven WB",
    rows: [
      { label: "Requirement Delivery", before: "Business → Planner → IT (3-stage distortion)", after: "Business reviews demo directly (1 stage)" },
      { label: "First Deliverable", before: "4–8 weeks", after: "3–4 days" },
      { label: "Requirement Refinement", before: "Document review meetings (abstract)", after: "Demo → Feedback → Revise cycle (concrete)" },
      { label: "RFP Format", before: "Text-heavy, vague scope", after: "Demo URL + Mockup + Design doc attached" },
      { label: "Estimate Variance", before: "2x+ gap between vendors", after: "Clear scope via mockup, minimal variance" },
      { label: "Post-dev CR", before: "Frequent (\"not what we wanted\")", after: "Minimized (pre-aligned via demo)" },
      { label: "Cost", before: "Planning consultancy: tens of millions KRW", after: "AI tools: ~$50/mo + internal staff" },
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

  footer: {
    tagline: "Technology is a tool. People are at the center.",
    copyright: "© 2026. AI-Driven Working Backwards Methodology.",
  },
};

export { en };
