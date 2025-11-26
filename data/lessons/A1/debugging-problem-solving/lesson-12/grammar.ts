import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
  title: "Past + Future Tenses for Post-Mortem Analysis",
  explanation:
    "**Past**: What happened - 'Server crashed, Users lost access'\n**Future**: Prevention measures - 'Will implement monitoring, Won't repeat mistake'\n\nIncident analysis:\n\n📝 **Chronicle**: 'Incident started when traffic spiked'\n🎯 **Preventions**: 'Will add load balancers, Implement circuit breakers'\n📚 **Lessons**: 'Should have tested failover earlier'",
  usage:
    "Post-mortem discussions:\n\n🔮 **Planning**: 'Will add alerts for high memory usage'\n📋 **Prevention**: 'Should implement rollback procedures'\n🚀 **Improvements**: 'Won't deploy without proper testing'",
  rules: [
    {
      from: "Past incident description",
      to: "verb-ed/had + past participle (started, had crashed)"
    },
    {
      from: "Future preventions",
      to: "will/won't + verb (will implement, won't delay)"
    },
    {
      from: "Conditional lessons",
      to: "should/shouldn't have + past participle (should have tested)"
    },
  ],
  examples: [
    "The server **crashed** unexpectedly, so **we will implement** automated recovery.",
    "**If** traffic **had spiked** again, **users would have remained** online.",
    "**We should have tested** failover procedures before deployment.",
    "**We won't deploy** without proper monitoring going forward.",
    "**Traffic increased** gradually, but **we will add** threshold alerts now."
  ],
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "The bug occurred because we ___ , so next time we ___ monitoring.",
    options: [
      "didn't test, will implement",
      "don't test, implemented",
      "hadn't tested, will have implemented",
      "aren't testing, implement"
    ],
    answer: "didn't test, will implement"
  },
  commonMistakes
};
