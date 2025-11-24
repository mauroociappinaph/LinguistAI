import { AccentSample } from '../../../../../../types';

export const globalAccentLab: AccentSample[] = [
  {
    accent: "Indian English (Bangalore Tech)",
    speakerBio: "Priya, Senior SRE from Bangalore",
    audioSrc: "",
    transcript: "We've been monitoring the application performance for the past three weeks. The response time has improved significantly since we've implemented the caching layer. However, we've observed some memory leaks that have been affecting the long-running processes. The metrics have shown a steady increase in memory consumption, and we've narrowed down the issue to the background job processor. Since implementing the fix, performance has been stable."
  },
  {
    accent: "Australian English (Sydney)",
    speakerBio: "James, DevOps Lead from Sydney",
    audioSrc: "",
    transcript: "G'day team. We've had a bit of a rough week with the infrastructure. The database has been experiencing slow queries since the migration last Monday, and we've already rolled back one deployment that was causing issues. But we've identified the bottleneck—it was an missing index on the user_activities table.Performance has been stable for the last 48 hours since we've added the index."
  }
];
