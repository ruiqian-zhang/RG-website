import site from '../content/site.json';

// Change site.json → recruitment.open (or the CMS toggle) to switch both primary buttons.
export const primaryAction = site.recruitment.open
  ? { label: site.recruitment.joinLabel, href: site.recruitment.joinUrl, page: 'Join' }
  : { label: site.recruitment.supportLabel, href: site.recruitment.supportUrl, page: 'Sponsors' };

export const joinPageAction = site.recruitment.open
  ? { label: site.recruitment.applicationLabel, href: site.recruitment.applicationUrl }
  : { label: 'Explore our subteams', href: '/#subteams' };

export const recruitmentDescription = site.recruitment.open
  ? site.recruitment.openDescription
  : site.recruitment.closedDescription;
