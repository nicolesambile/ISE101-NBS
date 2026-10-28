import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const stackItems = [
  {
    number: '01',
    title: 'React Native',
    description: 'Build a mobile interface with reusable components and JavaScript.',
  },
  {
    number: '02',
    title: 'Expo',
    description: 'Develop, preview, and build your app with a set of helpful tools.',
  },
  {
    number: '03',
    title: 'The ecosystem',
    description: 'Apps run on Android or iOS devices and may connect to APIs and app stores.',
  },
];

export default function App() {
  const [showTip, setShowTip] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="auto" />
      <View style={styles.content}>
        <View style={styles.eyebrow}>
          <View style={styles.eyebrowDot} />
          <Text style={styles.eyebrowText}>ISE101 · WEEK 1</Text>
        </View>

        <Text style={styles.title}>Your mobile journey starts here.</Text>
        <Text style={styles.subtitle}>
          Welcome to mobile programming. In this module, you’ll explore how
          mobile apps work and build your first interactive screen.
        </Text>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionLabel}>THE STARTER STACK</Text>
          <Text style={styles.sectionHint}>Three parts, one app</Text>
        </View>

        <View style={styles.stackList}>
          {stackItems.map((item) => (
            <View key={item.number} style={styles.stackCard}>
              <View style={styles.numberBadge}>
                <Text style={styles.numberText}>{item.number}</Text>
              </View>
              <View style={styles.cardCopy}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.interactionCard}>
          <Text style={styles.interactionTitle}>Try it out</Text>
          <Text style={styles.interactionDescription}>
            These controls use state to update what you see on screen.
          </Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={showTip ? 'Hide learning tip' : 'Show learning tip'}
            onPress={() => setShowTip((isVisible) => !isVisible)}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.primaryButtonText}>
              {showTip ? 'Hide learning tip' : 'Show learning tip'}
            </Text>
          </Pressable>

          {showTip && (
            <View style={styles.tip}>
              <Text style={styles.tipLabel}>LEARNING TIP</Text>
              <Text style={styles.tipText}>
                A component describes part of your UI. State lets that UI
                respond when a person interacts with it.
              </Text>
            </View>
          )}

          <View style={styles.divider} />
          <View style={styles.counterRow}>
            <View style={styles.counterCopy}>
              <Text style={styles.counterLabel}>Your practice taps</Text>
              <Text style={styles.counterValue}>{tapCount}</Text>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Count taps, currently ${tapCount}`}
              onPress={() => setTapCount((count) => count + 1)}
              style={({ pressed }) => [
                styles.counterButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.counterButtonText}>Count taps  +</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.footer}>
          Explore. Build. Test. Understand your code.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 22,
    paddingTop: 64,
    paddingBottom: 36,
  },
  content: {
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
  },
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  eyebrowDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3778F6',
    marginRight: 9,
  },
  eyebrowText: {
    color: '#3778F6',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    color: '#17243B',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
    letterSpacing: -0.7,
  },
  subtitle: {
    color: '#64718A',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 30,
  },
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionLabel: {
    color: '#64718A',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  sectionHint: {
    color: '#8A95A8',
    fontSize: 12,
  },
  stackList: {
    gap: 10,
  },
  stackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E8ECF3',
  },
  numberBadge: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#EAF1FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },
  numberText: {
    color: '#3778F6',
    fontSize: 12,
    fontWeight: '800',
  },
  cardCopy: {
    flex: 1,
  },
  cardTitle: {
    color: '#17243B',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#64718A',
    fontSize: 13,
    lineHeight: 19,
  },
  interactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#E8ECF3',
  },
  interactionTitle: {
    color: '#17243B',
    fontSize: 19,
    fontWeight: '800',
  },
  interactionDescription: {
    color: '#64718A',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
    marginBottom: 16,
  },
  primaryButton: {
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: '#3778F6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonPressed: {
    opacity: 0.78,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  tip: {
    backgroundColor: '#F0F5FF',
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
  },
  tipLabel: {
    color: '#3778F6',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 5,
  },
  tipText: {
    color: '#36445D',
    fontSize: 13,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8ECF3',
    marginVertical: 17,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  counterCopy: {
    flex: 1,
  },
  counterLabel: {
    color: '#64718A',
    fontSize: 12,
    marginBottom: 2,
  },
  counterValue: {
    color: '#17243B',
    fontSize: 25,
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
  },
  counterButton: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#D8E2F4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  counterButtonText: {
    color: '#3778F6',
    fontSize: 13,
    fontWeight: '700',
  },
  footer: {
    color: '#8A95A8',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 22,
  },
});
