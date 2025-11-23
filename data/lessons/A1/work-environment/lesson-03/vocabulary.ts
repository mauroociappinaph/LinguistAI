export const vocabulary = [
  { item: "designer", explanation: "Creates the visual appearance and user experience (UX/UI).", example: "The designer creates the wireframes for the new feature.", pronunciation: "/dɪˈzaɪnər/" },
  { item: "QA (Quality Assurance)", explanation: "Ensures software quality by planning and supervising tests.", example: "Our QA team verifies all new features before release.", pronunciation: "/ˌkjuː ˈeɪ/" },
  { item: "PM (Product Manager)", explanation: "Defines the product vision, features, and priorities.", example: "The PM prioritizes the tasks for the next sprint.", pronunciation: "/ˈprɒdʌkt ˈmænɪdʒər/" },
  { item: "sysadmin (System Administrator)", explanation: "Maintains and operates a company's IT systems and servers.", example: "The sysadmin maintains the production servers.", pronunciation: "/ˈsɪsædmɪn/" },
  { item: "tester", explanation: "Finds and reports software bugs; a more specific role than QA.", example: "A tester checks the application for bugs.", pronunciation: "/ˈtɛstər/" },
  { item: "Could you repeat that?", explanation: "Ask someone to repeat the responsibility of a role.", example: "A: 'The sysadmin maintains the servers.' B: 'Sorry, could you repeat that?'", pronunciation: "/kʊd ju riˈpiːt ðæt/" },
  { item: "Could you spell 'sysadmin'?", explanation: "Ask for the spelling of a new role.", example: "I don't know that role. Could you spell 'sysadmin'?", pronunciation: "/kʊd ju spɛl sɪsˈædmɪn/" },
  { item: "What does a 'PM' do?", explanation: "Ask for an explanation of a role's tasks.", example: "What does a 'PM' do, exactly?", pronunciation: "/hwɒt dʌz ə piː ɛm duː/" },
  { item: "take ownership", explanation: "To take responsibility for a task or project.", example: "The designer takes ownership of the UI mockups.", pronunciation: "/teɪk ˈoʊnərʃɪp/" },
  { item: "assign a task", explanation: "To give someone a responsibility to complete.", example: "The PM assigns a task to each team member.", pronunciation: "/əˈsaɪn ə tæsk/" },
  { item: "lead a team", explanation: "To guide and manage a team to achieve a goal.", example: "The team lead leads a team effectively during sprints.", pronunciation: "/liːd ə tiːm/" },
  { item: "Jira ticket", explanation: "A task or issue tracked in the Jira project management system.", example: "Update the Jira ticket when the task is completed.", pronunciation: "/ˈdʒɪərə ˈtɪkət/" },
  { item: "Kanban board", explanation: "A visual tool for managing workflow and tasks.", example: "We track all ongoing tasks on the Kanban board.", pronunciation: "/ˈkænbæn bɔːrd/" },
  { item: "repository", explanation: "A storage location for code or files, usually in version control systems like Git.", example: "Push your updates to the main repository.", pronunciation: "/rɪˈpɒzɪtəri/" }
];

export const phrasalVerbs = [
  { item: "work on", explanation: "To work on a specific task.", example: "The developer works on the new feature.", pronunciation: "/wɜːrk ɒn/" },
  { item: "deal with", explanation: "To handle or take care of a situation or problem.", example: "The sysadmin deals with server issues.", pronunciation: "/diːl wɪð/" },
  { item: "follow up", explanation: "To check on the progress of a task or issue.", example: "The PM follows up on the assigned tasks daily.", pronunciation: "/ˈfɒləʊ ʌp/" }
];

export const compoundWords = [
  { item: "team member", explanation: "A member of the team.", example: "Each team member has a specific role.", pronunciation: "/tiːm ˈmɛmbər/" },
  { item: "project plan", explanation: "A document that describes the project plan.", example: "The PM creates the project plan.", pronunciation: "/ˈprɒdʒɛkt plæn/" },
  { item: "user story", explanation: "A description of a feature from the end-user perspective.", example: "Each user story is broken down into sub-tasks.", pronunciation: "/ˈjuːzər ˈstɔːri/" }
];

export const functionalChunks = {
  title: "Team Role Descriptions",
  chunks: [
    {
      chunk: "The [role] [verb-s] [responsibility]",
      usage: "Describe what someone does in their role"
    },
    {
      chunk: "Does the [role] [base verb] [task]?",
      usage: "Ask about team member responsibilities"
    },
    {
      chunk: "[Role] doesn't [base verb] [task]",
      usage: "Explain what someone doesn't do"
    },
    {
      chunk: "Who [verb-s] [task]?",
      usage: "Find out who handles specific tasks"
    }
  ]
};
