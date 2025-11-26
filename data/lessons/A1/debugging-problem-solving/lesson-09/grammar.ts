import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Present Continuous + Passive for Data Flow",
    explanation:
      "**Present Continuous**: Dynamic data behaviors - 'Data is flowing', 'Values are changing'\n**Passive + Continuous**: Describes data being processed - 'Data is being validated', 'Records are being filtered'\n\nData flow analysis:\n\n🔄 **Ongoing processes**: 'The cache is being updated'\n📊 **Data validation**: 'Input data is being verified'\n⚙️ **Transformation**: 'Raw data is being converted to JSON'",
    usage: "Data debugging conversations:\n\n💡 **Flow analysis**: 'Data is being filtered but not updated'\n🔍 **Investigation**: 'Values are changing unexpectedly'\n📈 **Transformation**: 'XML is being converted to JSON automatically'",
    rules: [
      {
        from: "Dynamic processes",
        to: "Data + is/are + verb-ing (data + is + flowing)"
      },
      {
        from: "Passive processes",
        to: "Data + is/are + being + past participle (data + is + being + processed)"
      },
      {
        from: "Current state",
        to: "is/are + happening now (data + is + corrupting)"
      }
    ],
    examples: [
      "The user data **is being encrypted** before storage but **is being corrupted** during transmission.",
      "API responses **are being cached** but **not expiring** properly.",
      "Database records **are being updated** asynchronously and **causing race conditions**.",
      "Input values **are being validated** but **empty strings are passing through**.",
      "The data pipeline **is processing** 10 records per second but **dropping critical fields**."
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The data ___ at each step of processing",
      options: ["is being verified", "verified", "will verify", "verifying"],
      answer: "is being verified"
    },
  commonMistakes
};
