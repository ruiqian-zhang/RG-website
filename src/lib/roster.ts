export function leadershipRank(role = '') {
  if (/^president\b/i.test(role)) return 0;
  if (/^vice president\b/i.test(role)) return 1;
  if (/faculty.*advisor|advisor.*faculty/i.test(role)) return 5;
  if (/project\s+lead/i.test(role)) return 3;
  if (/lead|technical\s+advisor/i.test(role)) return 2;
  return 4;
}

export function compareMembers(a: { name: string; role?: string }, b: { name: string; role?: string }) {
  return leadershipRank(a.role) - leadershipRank(b.role) || a.name.localeCompare(b.name, 'en');
}

export function presidencyYear(role = '') {
  return Number(role.match(/\b(20\d{2})\b/)?.[1] || 0);
}
