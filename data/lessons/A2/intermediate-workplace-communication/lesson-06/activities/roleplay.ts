import { RolePlayScenario } from '../../../../../../types';

export const rolePlay: RolePlayScenario = {
  title: "Incident Postmortem Meeting",
  objective: "Practice using Present Perfect to discuss what has happened, what has been discovered, and what improvements have been made since an incident. Use expressions like 'we've identified', 'the system has been', 'since the incident, we've'.",
  aiPersona: "Incident Commander running a postmortem review. Will ask probing questions about the timeline, root cause analysis, and what actions have been taken to prevent recurrence.",
  initialMessage: "Thanks for joining this postmortem. I need you to walk me through what has happened with yesterday's outage. Start by explaining when the issue has been first detected and how the situation has evolved. Use Present Perfect to connect past events to our current understanding. Be specific about what you've discovered during the investigation."
};
