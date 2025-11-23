import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Present Simple for System Architecture",
  explanation: "**Present Simple (base form)**: Describes how systems work - 'Application stores data in memory'\n**Universal Facts**: 'Cache improves performance'\n**General Rules**: 'Load balancer distributes traffic'\n**Patterns & Behaviors**: 'Algorithm sorts data efficiently'",
  usage: "Architecture Explanations:\n\n🏗️ **Design patterns**: 'Singleton pattern ensures single instance'\n⚙️ **System behaviors**: 'Queue processes messages asynchronously'\n📊 **Data flow**: 'API validates input before processing'",
  rules: [
    {
      from: "Current system behaviors",
      to: "Subject + verb (Cache + improves, API + validates)"
    },
    {
      from: "Universal technical facts",
      to: "Statement of immutable truths (Docker containers package applications)"
    },
    {
      from: "Architecture descriptions",
      to: "Passive or active forms as appropriate (Data flows through pipeline)"
    }
  ],
  examples: [
    "**Application processes** requests in defined order.",
    "**Cache stores** frequently accessed data.",
    "**Load balancer distributes** traffic across servers.",
    "**API validates** input before processing.",
    "**Database indexes** improve query performance."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "Complete with present simple: 'The microservice architecture ___ (decouple) services so each ___ (can deploy) independently.'",
    options: [
      "decouples, can deploy",
      "decouples, deploys",
      "decoupling, can deployed",
      "decoupled, deployed"
    ],
    answer: "decouples, can deploy"
  }
};
