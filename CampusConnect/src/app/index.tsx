
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import AnnouncementPanel from '../components/AnnouncementPanel';

const sampleAnnouncements = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus Orientation',
    category: 'Events',
    read: true,
  },
];

export default function HomeScreen() {
  const unread = sampleAnnouncements.filter(
    (item) => !item.read
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>

      <Text style={styles.subtitle}>
        One campus. Connected students.
      </Text>

      <Text style={styles.subtitle}>
        Welcome to the Week 1 project foundation.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Announcement Utility Test
        </Text>

        <Text style={styles.cardText}>
          Total Announcements: {sampleAnnouncements.length}
        </Text>

        <Text style={styles.cardText}>
          Unread Announcements: {unread.length}
        </Text>

        {unread.map((item) => (
          <Text key={item.id} style={styles.cardText}>
            • {item.title}
          </Text>
        ))}

        <AnnouncementPanel />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F6FA',
    paddingTop: 24,
    paddingHorizontal: 18,
    paddingBottom: 32,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: '#444F5F',
    lineHeight: 22,
    textAlign: 'center',
  },

  card: {
    width: '100%',
    maxWidth: 720,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginTop: 22,
    borderWidth: 1,
    borderColor: '#DCE3EC',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: '#111827',
  },

  cardText: {
    fontSize: 13,
    color: '#333333',
    marginBottom: 2,
  },
});
