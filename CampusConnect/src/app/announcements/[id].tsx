import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { getAnnouncementById } from '@/services/announcementUtils';

export default function AnnouncementDetailScreen() {
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const rawId = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : undefined;
  const normalizedId = rawId?.trim();

  if (!normalizedId) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Announcement Not Found</Text>
        <Text style={styles.message}>No announcement ID was provided.</Text>
        <Pressable onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const announcement = getAnnouncementById(normalizedId);

  if (!announcement) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Announcement Not Found</Text>
        <Text style={styles.message}>We could not find an announcement with ID: {normalizedId}</Text>
        <Pressable onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.badge}>{announcement.category}</Text>
        <Text style={styles.title}>{announcement.title}</Text>
        <Text style={styles.meta}>Announcement ID: {announcement.id}</Text>
        <Text style={styles.meta}>Status: {announcement.read ? 'Read' : 'Unread'}</Text>

        <Text style={styles.label}>Details</Text>
        <Text style={styles.description}>
          {announcement.details ?? 'No additional details are available for this announcement.'}
        </Text>

        <Pressable onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Back to Announcements</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F3F6FA',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F6FA',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDE7F3',
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0F2FE',
    color: '#075985',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
  },
  meta: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginTop: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#334155',
  },
  message: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
