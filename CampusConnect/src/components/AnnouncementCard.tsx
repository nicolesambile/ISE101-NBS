import { Pressable, StyleSheet, Text, View } from 'react-native';

type AnnouncementCardProps = {
  id: string;
  title: string;
  category: string;
  read: boolean;
  onPress?: () => void;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  id,
  title,
  category,
  read,
  onPress,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Open ${title}`}
        onPress={onPress}
        style={({ pressed }) => [styles.cardPressable, pressed && styles.cardPressed]}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>Category: {category}</Text>
        <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>
        <Text style={styles.linkText}>View details • ID {id}</Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={read ? `Mark ${title} as unread` : `Mark ${title} as read`}
        hitSlop={8}
        onPress={onMarkRead}
        style={({ pressed }) => [
          styles.button,
          read && styles.buttonRead,
          pressed && styles.buttonPressed,
        ]}
      >
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
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDE7F3',
    shadowColor: '#000000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardPressable: {
    width: '100%',
  },
  cardPressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
    textAlign: 'left',
  },
  category: {
    fontSize: 13,
    color: '#4B5563',
    textAlign: 'left',
  },
  status: {
    fontSize: 13,
    color: '#374151',
    marginTop: 6,
    marginBottom: 8,
    textAlign: 'left',
  },
  linkText: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  buttonRead: {
    backgroundColor: '#3B82F6',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
