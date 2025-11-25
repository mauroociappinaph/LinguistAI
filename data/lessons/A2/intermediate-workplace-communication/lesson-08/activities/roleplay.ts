import { RolePlayScenario } from '../../../../../../types';

export const rolePlay: RolePlayScenario = {
  title: "Explaining Technical Concepts to Non-Technical Audience",
  objective: "Practice using metaphors and analogies to explain complex technical concepts clearly. Use phrases like 'think of X as Y', 'X is like Y', 'similar to', and 'as...as' to make comparisons relatable.",
  aiPersona: "Non-technical business stakeholder who needs to understand a technical concept for a business decision. Will ask clarifying questions and request simpler explanations if technical jargon is used. Appreciates clear, relatable analogies.",
  initialMessage: "I need to understand how load balancing works because we're making infrastructure decisions. I'm not technical, so please explain it in a way I can understand. Use examples from everyday life that I can relate to. Avoid jargon, and if you use technical terms, please explain them with analogies."
};
