import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { sampleAnnouncements } from '../../services/announcementUtils';
import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './AnnouncementCard';

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(sampleAnnouncements);

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

  const handleOpenAnnouncement = (id: string) => {
    router.push({ pathname: '/announcements/[id]', params: { id } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.counter}>Unread Announcements: {unreadCount}</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        {announcements.map(announcement => (
          <AnnouncementCard
            key={announcement.id}
            id={announcement.id}
            title={announcement.title}
            category={announcement.category}
            read={announcement.read}
            onPress={() => handleOpenAnnouncement(announcement.id)}
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
    textAlign: 'left',
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
    marginBottom: 12,
    textAlign: 'left',
  },
  list: {
    width: '100%',
    paddingBottom: 12,
  },
});
