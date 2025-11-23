import { AccentSample } from '../../../../../../types';

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (East Coast Tech)",
    speakerBio: "Marcus, DevOps Engineer from New York",
    audioSrc: "",
    transcript: "The deployment pipeline that we built automates everything from code commit to production release. The scripts that run the tests are written in Bash and Python. Developers who want to add new stages to the pipeline need to modify the Jenkins file that defines the workflow. The monitoring tools that we use—Datadog and New Relic—send alerts to the Slack channel that our ops team monitors 24/7."
  },
  {
    accent: "British English (UK Startup)",
    speakerBio: "Olivia, Backend Developer from Manchester",
    audioSrc: "",
    transcript: "Our authentication service, which handles user logins, uses JWT tokens that expire after 24 hours. The database that stores user credentials is encrypted at rest. Engineers who work on security features must follow the OWASP guidelines that we've adopted as company policy. The API endpoints that require authentication check the token that clients send in the Authorization header. Users who forget their passwords can use the password reset flow that sends a secure link via email."
  }
];
