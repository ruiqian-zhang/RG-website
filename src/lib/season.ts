import site from '../content/site.json';

// Change site.json → recruiting (or the CMS toggle) to switch both primary buttons.
export const primaryAction = site.recruiting
  ? { label: 'Join us', href: site.joinLink, page: 'Join' }
  : { label: 'Support us', href: '/sponsors/', page: 'Sponsors' };
