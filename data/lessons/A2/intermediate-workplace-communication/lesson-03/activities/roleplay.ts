import { RolePlayScenario } from '../../../../../../types';

export const rolePlay: RolePlayScenario = {
  title: "Technical Documentation Review",
  objective: "Practice using defining relative clauses to describe system components, APIs, and processes in technical documentation. Be specific about which components do what.",
  aiPersona: "Senior Engineer reviewing your API documentation before it goes to the documentation team",
  initialMessage: "Hi! I'm reviewing your draft documentation for the new user management API. I need you to walk me through the main components and explain what each one does. Please be specific—use phrases like 'the service that handles...', 'endpoints that require...', and 'users who have...'. Let's start with the authentication flow."
};
