import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Past Tenses for Troubleshooting",
  explanation: "**Past Simple**: Specific debugging steps - 'I identified the bug yesterday'\n**Present Perfect**: Ongoing investigation - 'We have found the root cause'\n**Past Continuous**: Process description - 'System was processing requests when crash occurred'",
  usage: "Debug Communication:\n\n🔍 **Issue Description**: 'Application crashed this morning'\n🔧 **Investigation**: 'We have checked the logs'\n✅ **Resolution**: 'Problem was resolved by updating dependencies'",
  rules: [
    {
      from: "Specific debugging actions",
      to: "Past simple for completed troubleshooting steps (found, fixed)"
    },
    {
      from: "Ongoing investigation",
      to: "Present perfect for current status (have identified, have resolved)"
    },
    {
      from: "Process description",
      to: "Past continuous for system state during issue (was running, was processing)"
    }
  ],
  examples: [
    "**The application crashed** this morning and **was losing** database connections.",
    "**We have identified** the root cause; **it occurred** when synthetic monitoring tested the API.",
    "**Server was responding** but **database connection failed** during peak load.",
    "**Developers investigated** the logs **but did not find** the issue immediately."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "Complete the troubleshooting scenario: 'Server ___ (crash) last night while ___ (process) financial transactions. We ___ (identify) the issue and ___ (fix) it this morning.'",
    options: ["crashed, was processing, have identified, fixed", "crashed, processing, identified, fixed", "crashes, was processing, identified, fixed"],
    answer: "crashed, was processing, have identified, fixed"
  }
};
