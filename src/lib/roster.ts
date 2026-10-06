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

// Compare roster identities consistently even if editors change case or spacing.
const memberIdentity = (name: string) => name.trim().replace(/\s+/g, ' ').toLocaleLowerCase('en');
const isPresident = (role = '') => /^president\b/i.test(role.trim());

export function filterAlumni<T extends { name: string; role?: string }>(
  alumni: T[],
  currentMembers: { name: string; role?: string }[],
): T[] {
  const currentNames = new Set(currentMembers.map((person) => memberIdentity(person.name)));
  const currentPresidents = new Set(currentMembers.filter((person) => isPresident(person.role)).map((person) => memberIdentity(person.name)));
  return alumni.filter((person) =>
    !currentNames.has(memberIdentity(person.name)) ||
    isPresident(person.role) ||
    currentPresidents.has(memberIdentity(person.name)),
  );
}
