import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson05: Lesson = {
  id: "we5",
  title: "Needs and Abilities in Tech Work",
  level: Difficulty.A1,
  description: "Learn to express professional needs and abilities using 'can/can't', 'need to', and vocabulary for workplace requirements and skills development in tech environments.",
  didYouKnow: "According to LinkedIn's 2024 Workplace Learning Report, 94% of workers would stay at a company longer if it invested in their professional development. Learning new technologies and getting certifications in skills like cloud computing, data analysis, and cybersecurity is becoming essential for career advancement in tech.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Discussing your current tech skills and professional development needs during a performance review with your manager.",
  speaking: "I can work with React and Node.js effectively, but I need to improve my DevOps skills. Our team can handle frontend development, but we need to learn more about cloud architecture for scalability.",
  speakingPracticeMode: "conversation",

  readingActivity: {
    title: "Reading: Tech Skills Assessment",
    text: "A comprehensive skills assessment revealed that our development team has strong proficiency in JavaScript frameworks, but there's a gap in cloud technologies. While individual developers **can** implement complex user interfaces and database queries, the team **needs to** acquire expertise in AWS, Docker, and Kubernetes. To address this limitation, we're implementing targeted training programs and certification tracks. Our goal is to build capabilities in modern infrastructure while maintaining our current competency in application development. Professional development resources include online courses, workshops, and mentorship opportunities.",
    comprehensionQuestions: [
      {
        question: "What does the team have strong proficiency in?",
        answer: "JavaScript frameworks."
      },
      {
        question: "What expertise does the team need to acquire?",
        answer: "AWS, Docker, and Kubernetes."
      },
      {
        question: "How will they address the skills gap?",
        answer: "Implementing targeted training programs and certification tracks."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Career Development Discussion",
    transcript: "Welcome to your 6-month review. You've shown great growth in frontend development - you can handle complex React applications really well. However, you mentioned you can't work with APIs yet, and that might be a limitation for your next role. Our team needs developers who can integrate backend services. I recommend you need to attend our API training workshop next month. Also, certification in cloud computing would open up new opportunities. Do you have any specific development needs I should know about?",
    comprehensionQuestions: [
      {
        question: "What has the employee shown growth in?",
        answer: "Frontend development."
      },
      {
        question: "What is mentioned as a potential limitation?",
        answer: "Not being able to work with APIs."
      },
      {
        question: "What is recommended for the employee?",
        answer: "Attend API training workshop."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Professional Skills Terms",
    explanation: "Master the pronunciation of essential workplace vocabulary for discussing abilities, requirements, and professional development in tech environments.",
    examples: [
      {
        term: "ability",
        phonetic: "/əˈbɪləti/",
        tip: "Four syllables: 'a-bil-i-ty'. Stress on second syllable. Don't pronounce as 'abilitay'."
      },
      {
        term: "certification",
        phonetic: "/ˌsɜːrtɪfɪˈkeɪʃən/",
        tip: "Five syllables: 'sur-ti-fi-kay-shun'. Stress on penultimate syllable. The 'ti' is not 'tih'."
      },
      {
        term: "competency",
        phonetic: "/ˈkɑːmpɪtənsi/",
        tip: "Four syllables: 'kom-pi-ten-see'. Stress on first syllable. Ends with clear 'see', not 'cy'."
      },
      {
        term: "limitation",
        phonetic: "/ˌlɪmɪˈteɪʃən/",
        tip: "Five syllables: 'lim-i-tay-shun'. Stress on second-to-last syllable. Watch the double 'm'."
      },
      {
        term: "resource",
        phonetic: "/rɪˈsɔːrs/",
        tip: "Three syllables: 'ri-sors'. Stress on second syllable. Don't add 'es' sound - it's 'sors'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Boston)",
      speakerBio: "Alex, Senior Engineer from Boston",
      audioSrc: "",
      transcript: "Look, you can write great code, but you need to understand architectural patterns too. Our system needs to handle scale - can your current approach handle 10,000 users? We can build features fast, but we can't maintain technical debt forever. Let's assess what skills you need to develop."
    },
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Sophie, Tech Lead from Sydney",
      audioSrc: "",
      transcript: "Mate, you've got solid coding abilities, but you need to shore up your testing skills. The team can handle feature development, can't they? We need to think about our competency gaps though. What resources do you need to upskill in automated testing?"
    }
  ],

  rolePlay: {
    title: "Skills Development Planning Session",
    objective: "Have a conversation with your manager about your current abilities, areas for improvement, and professional development needs using appropriate business English vocabulary.",
    aiPersona: "HR Manager conducting development planning",
    initialMessage: "Let's talk about your current role and where you'd like to develop. What skills do you think you need to improve upon? How can we help you close any competency gaps?"
  }
};
