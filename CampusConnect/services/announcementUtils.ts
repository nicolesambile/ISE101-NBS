import type { Announcement } from '../types/announcement';

export const sampleAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment Reminder',
    category: 'Academic',
    read: false,
    details:
      'Please check your student portal to confirm your course registration and complete any final enrollment steps before the deadline.',
  },
  {
    id: 'a2',
    title: 'Campus Orientation',
    category: 'Events',
    read: true,
    details:
      'Join the campus orientation event next Friday to learn about student services, event schedules, and campus resources available for new and returning students.',
  },
  {
    id: 'a3',
    title: 'Campus Clean-up Drive',
    category: 'Community',
    read: true,
    details:
      'Volunteers are invited to help improve the campus grounds and participate in the clean-up drive happening this Saturday morning.',
  },
];

export function getUnreadAnnouncements(items: Announcement[]): Announcement[] {
  return items.filter(item => !item.read);
}

export function getAnnouncementById(id: string | string[] | undefined): Announcement | undefined {
  if (typeof id === 'string') {
    const normalizedId = id.trim().toLowerCase();
    if (!normalizedId) {
      return undefined;
    }

    return sampleAnnouncements.find(item => item.id.toLowerCase() === normalizedId);
  }

  if (Array.isArray(id)) {
    return getAnnouncementById(id[0]);
  }

  return undefined;
}