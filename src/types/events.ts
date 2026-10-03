export interface EventRound {
  title: string;
  duration?: string;
  points?: string;
  rules: string[];
}

export interface SquadMemberRole {
  role: string;
  count: string;
}

export interface EventItem {
  id: string;
  name: string;
  subtitle?: string;
  badge: string;
  slot: string;
  timing: string;
  venue: string;
  teamSize: string;
  theme?: string;
  description: string;
  icon: string;
  posterImage?: string;
  rules: string[];
  rounds?: EventRound[];
  squadComposition?: SquadMemberRole[];
}
