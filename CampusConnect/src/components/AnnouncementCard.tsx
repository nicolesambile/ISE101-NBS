import { Pressable, StyleSheet, Text, View } from 'react-native';

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>
      <Pressable
        onPress={onMarkRead}
        style={[styles.button, read && styles.buttonRead]}>
        <Text style={styles.buttonText}>
          {read ? 'Mark as Unread' : 'Mark as Read'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE7F3',
    shadowColor: '#000000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
  },
  category: {
    fontSize: 13,
    color: '#4B5563',
  },
  status: {
    fontSize: 13,
    color: '#374151',
    marginTop: 6,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonRead: {
    backgroundColor: '#3B82F6',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
