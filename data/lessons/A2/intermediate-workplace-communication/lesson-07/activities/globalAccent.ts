import { AccentSample } from '../../../../../../types';

export const globalAccentLab: AccentSample[] = [
  {
    accent: "British English (London Tech)",
    speakerBio: "Oliver, Solutions Architect from London",
    audioSrc: "",
    transcript: "I propose that we should migrate our monolithic application to a microservices architecture. This change would allow us to scale individual services independently, which could significantly reduce infrastructure costs. We might face some challenges during the migration, but the long-term benefits would outweigh the initial complexity. I would recommend starting with a proof-of-concept for the authentication service, which should give us valuable insights before we commit to a full migration."
  },
  {
    accent: "Singapore English",
    speakerBio: "Wei, Engineering Manager from Singapore",
    audioSrc: "",
    transcript: "We should consider implementing a caching layer to improve our API performance. Redis would be a good choice, and it could reduce our database load by about 70%. The implementation might take two to three weeks, but we must ensure proper cache invalidation strategies. I would suggest we could start with caching the most frequently accessed endpoints first. This approach should provide immediate value while we work on the complete solution."
  }
];
