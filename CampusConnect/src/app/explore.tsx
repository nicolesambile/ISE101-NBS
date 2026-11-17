import { StyleSheet, View } from 'react-native';

import AnnouncementPanel from '@/components/AnnouncementPanel';

export default function AnnouncementsScreen() {
  return (
    <View style={styles.container}>
      <AnnouncementPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 24,
  },
});
