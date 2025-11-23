import { RolePlayScenario } from '../../../../../../types';

export const rolePlay: RolePlayScenario = {
  title: "Architecture Decision Discussion",
  objective: "Practice expressing trade-offs using while/although when discussing technical decisions. Present both advantages and disadvantages fairly before making a recommendation.",
  aiPersona: "Senior Architect challenging your technology choice. Will ask you to defend your recommendation by exploring trade-offs you might have missed.",
  initialMessage: "I've seen your proposal to migrate from REST to GraphQL. Before we proceed, I need you to walk me through the trade-offs honestly. What are we gaining and what are we sacrificing? Don't just sell me on GraphQL—I want to hear the downsides too. Use phrases like 'while GraphQL offers...', 'although it requires...'. Be balanced and realistic."
};
