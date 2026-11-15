
import { StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus Orientation', category: 'Events', read: true },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text>One campus. Connected students.</Text>
      <Text>Welcome to the Week 1 project foundation.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Announcement Utility Test</Text>
        <Text style={styles.cardText}>Total Announcements: {sampleAnnouncements.length}</Text>
        <Text style={styles.cardText}>Unread Announcements: {unread.length}</Text>

        {unread.map(item => (
          <Text key={item.id} style={styles.cardText}>
            • {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginTop: 22,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },

  cardText: {
    fontSize: 13,
    color: '#333333',
    marginBottom: 2,
  },
});
