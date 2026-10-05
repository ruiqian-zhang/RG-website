import members from '../content/members.json';
import subteams from '../content/subteams.json';

const memberCount = new Set(members.people.map((person) => person.name.trim().toLowerCase())).size;

export const teamStats = [
  { value: String(memberCount), label: 'Current members' },
  { value: String(subteams.teams.length), label: 'Subteams' },
  { value: '1', label: 'Shared mission' },
  { value: 'Top 4', label: 'Most consistent teams in ARC' },
];
