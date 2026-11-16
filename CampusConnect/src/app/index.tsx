import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ActionButton from '../components/ActionButton';
import AnnouncementPanel from '../components/AnnouncementPanel';
import SectionHeading from '../components/SectionHeading';

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
  const unread = sampleAnnouncements.filter((item) => !item.read);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.welcome}>
        <Text style={styles.title}>Campus Connect</Text>
        <Text style={styles.welcomeSubtitle}>One campus. Connected students.</Text>
        <Text style={styles.welcomeSubtitle}>
          Welcome to the Week 1 project foundation.
        </Text>
      </View>

      <View style={[styles.card, styles.hero]}>
        <SectionHeading
          title="Campus Announcements"
          subtitle="Stay updated with the latest campus news."
        />

        <ActionButton
          title="View All Announcements"
          onPress={() => undefined}
        />
        <Image
          source={require('../../assets/images/campus-banner.png')}
          style={styles.banner}
          accessibilityLabel="Santa Rita College campus seal"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Announcement Utility Test</Text>
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
      </View>

      <AnnouncementPanel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F6FA',
    paddingTop: 16,
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  welcome: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DDE7F3',
    shadowColor: '#000000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  hero: {
    marginBottom: 12,
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    width: '100%',
    fontSize: 13,
    color: '#526070',
    lineHeight: 18,
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
    textAlign: 'left',
  },
  cardText: {
    fontSize: 13,
    color: '#333333',
    lineHeight: 18,
    marginBottom: 2,
    textAlign: 'left',
  },
  banner: {
    width: '100%',
    height: 150,
    marginTop: 8,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: '#D9E4F3',
  },
});
