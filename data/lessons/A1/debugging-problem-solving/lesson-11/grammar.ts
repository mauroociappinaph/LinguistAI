import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Present Continuous + Connectors for Performance Issues",
    explanation:
      "**Present Continuous**: Ongoing performance problems - 'System is slowing down', 'Database is lagging'\n**Connectors**: Link performance issues and causes - 'Because, When, Results in, Leads to'\n\nPerformance analysis:\n\n🐌 **Current issues**: 'Database is taking 5 seconds to respond'\n⚡ **Cause/effect**: 'Responses are slowing down because queries are getting complex'\n📊 **Consequences**: 'Page load leads to timeouts'",
    usage:
      "Performance debugging:\n\n⚡ **Identification**: 'API is responding slowly when traffic increases'\n🔍 **Analysis**: 'CPU utilization is spiking during data processing'\n📈 **Impact**: 'User experience degrades when network is slow'",
    rules: [
      {
        from: "Ongoing slowdowns",
        to: "Subject + is/are + verb-ing (database + is + slowing)"
      },
      {
        from: "Performance connectors",
        to: "because/so/results in (slowing + because + overload)"
      },
      {
        from: "Impact statements",
        to: "leads to/results in (overload + leads to + crashes)"
      }
    ],
    examples: [
      "The application **is slowing down** because **memory usage is increasing** exponentially.",
      "**When** users **upload** large files, **the server is lagging** badly.",
      "Database queries **are taking** 3 seconds **because** indexes are missing.",
      "Page load time **results in** higher bounce rates and **lost revenue**.",
      "CPU utilization **leads to** server timeouts during peak traffic."
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The server ___ because memory ___",
      options: ["is slowing down, is leaking", "slowed down, leaked", "slows down, leaks", "will slow down, will leak"],
      answer: "is slowing down, is leaking"
    },
  commonMistakes
};
