import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './AnnouncementCard';

const initialAnnouncements: Announcement[] = [
  {
    id: 'ANN-001',
    title: 'Enrollment Reminder',
    category: 'Academic',
    read: false,
  },
  {
    id: 'ANN-002',
    title: 'Sports Festival Announcement',
    category: 'Events',
    read: false,
  },
  {
    id: 'ANN-003',
    title: 'Campus Clean-up Drive',
    category: 'Community',
    read: true,
  },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);

  const unreadCount = useMemo(
    () => announcements.filter(announcement => !announcement.read).length,
    [announcements],
  );

  const handleMarkRead = (id: string) => {
    setAnnouncements(currentAnnouncements =>
      currentAnnouncements.map(announcement =>
        announcement.id === id
          ? { ...announcement, read: !announcement.read }
          : announcement,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.counter}>Unread Announcements: {unreadCount}</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        {announcements.map(announcement => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            category={announcement.category}
            read={announcement.read}
            onMarkRead={() => handleMarkRead(announcement.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
  },
  heading: {
    fontSize: 21,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
    marginBottom: 12,
  },
  list: {
    width: '100%',
    paddingBottom: 12,
  },
});
