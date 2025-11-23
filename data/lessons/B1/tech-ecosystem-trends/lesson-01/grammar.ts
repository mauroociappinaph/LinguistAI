export const grammar = {
  title: "Acronyms and Technical Jargon",
  explanation: "**Acronyms recognition**: CI/CD (Continuous Integration/Continuous Delivery), IaaS/PaaS/SaaS (Infrastructure/Platform/Software as a Service)\n**Jargon expansion**: 'What does CI stand for?' → 'CI stands for Continuous Integration.'\n**Technical abbreviations**: K8s (Kubernetes), IaC (Infrastructure as Code), CDN (Content Delivery Network)\n**Industry terms**: MVP (Minimum Viable Product), ROI (Return on Investment), ETL (Extract, Transform, Load)",
  usage: "DevOps & Cloud Discussions:\n\n🛠️ **Deployment conversations**: 'Our CI/CD pipeline needs improvement'\n☁️ **Cloud architecture**: 'We're using IaaS for scalability'\n🔧 **Infrastructure planning**: 'IaC allows us to version control our infrastructure'\n📊 **Business discussions**: 'The MVP will help us measure ROI'",
  rules: [
    {
      from: "Acronym expansion questions",
      to: "What does [acronym] stand for? → [acronym] stands for [full expansion]."
    },
    {
      from: "Jargon in context",
      to: "Use full terms first, then acronyms: 'Continuous Integration (CI) ensures code quality'"
    },
    {
      from: "Technical abbreviations",
      to: "Some acronyms are universal: AWS, Git, HTTP, API, SQL"
    }
  ],
  examples: [
    "**'What does CI stand for?' 'CI stands for Continuous Integration.'**",
    "**Our CI/CD pipeline automates testing and deployment processes.**",
    "**We're using IaC to manage our infrastructure as code.**",
    "**The application runs on IaaS for better scalability.**",
    "**Kubernetes orchestration simplifies container management.**",
    "**The MVP approach helped us achieve faster market entry.**"
  ],
  commonMistakes: [
    {
      incorrect: "Our CI/CD is broken.",
      correct: "Our Continuous Integration/Continuous Delivery pipeline is broken.",
      explanation: "Provide full expansions when introducing new acronyms to ensure understanding."
    },
    {
      incorrect: "We use PaaS.",
      correct: "We use PaaS (Platform as a Service) for application hosting.",
      explanation: "Define acronyms when they're central to understanding the concept."
    },
    {
      incorrect: "K8s is complex.",
      correct: "Kubernetes (often abbreviated as K8s) orchestration can be complex initially.",
      explanation: "Explain abbreviations that might not be universally familiar."
    }
  ],
  interactiveExercise: {
    type: "acronym-expansion",
    question: "Expand these technical acronyms used in DevOps and cloud discussions:",
    options: [
      "CI - Continuous Integration, CD - Continuous Deployment",
      "IaaS - Infrastructure as a Service, PaaS - Platform as a Service, SaaS - Software as a Service",
      "IaC - Infrastructure as Code, CDN - Content Delivery Network",
      "All of the above are correct"
    ],
    answer: "All of the above are correct"
  }
};
