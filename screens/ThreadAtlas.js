import React, { useMemo, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { styles } from '../components/styles';
import { GRAPH_ERAS, GRAPH_PHASES } from '../lib/scriptureGraph';
import { ATLAS_THREADS, buildThreadAtlas, getThreadMilestone } from '../lib/threadAtlas';

const TRACK_TOP = 112;
const LANE_HEIGHT = 132;
const ATLAS_BOTTOM = 26;

function ThreadFilter({ thread, active, onPress }) {
  return (
    <TouchableOpacity
      accessibilityRole="checkbox"
      accessibilityState={{ checked: active }}
      accessibilityLabel={`${thread.name} thread`}
      accessibilityHint="Selects this thread for comparison. When all threads are visible, selects only this thread."
      onPress={onPress}
      style={[atlasStyles.filter, active && { borderColor: thread.color, backgroundColor: '#f7f5f0' }]}
    >
      <Text style={atlasStyles.filterIcon}>{thread.icon}</Text>
      <Text style={atlasStyles.filterText}>{thread.short}</Text>
    </TouchableOpacity>
  );
}

function Milestone({ navigation, station, thread, x, y, width }) {
  const milestone = getThreadMilestone(station, thread.id);
  if (!milestone) return null;
  const supporting = milestone.supportingVerses[0];

  return (
    <View
      accessibilityLabel={`${station.ref}, ${milestone.segmentLabel}, ${thread.name}${station.isInterchange ? `, shared by ${station.threadIds.length} threads` : ''}`}
      style={[
        atlasStyles.station,
        { left: x - width / 2, top: y - 52, width, borderColor: thread.color },
        station.isInterchange && atlasStyles.interchangeStation,
      ]}
    >
      <TouchableOpacity
        accessibilityRole="link"
        accessibilityLabel={`Open ${milestone.segmentLabel} milestone in ${thread.name}`}
        onPress={() => navigation.navigate('Thread', { id: thread.id, idx: milestone.idx, verseRef: milestone.verseRef })}
        style={atlasStyles.stationMain}
      >
        <View style={atlasStyles.stationTop}>
          <Text numberOfLines={1} style={atlasStyles.stationRef}>{station.ref}</Text>
          {station.isInterchange ? <Text style={atlasStyles.interchangeBadge}>↔ {station.threadIds.length}</Text> : null}
        </View>
        <Text numberOfLines={1} style={atlasStyles.stationLabel}>{milestone.segmentLabel}</Text>
        <Text numberOfLines={1} style={atlasStyles.stationTitle}>{milestone.segmentTitle}</Text>
      </TouchableOpacity>
      {supporting ? (
        <TouchableOpacity
          accessibilityRole="link"
          accessibilityLabel={`Open supporting Scripture ${supporting.ref}`}
          onPress={() => navigation.navigate('VerseDetail', {
            id: thread.id,
            idx: milestone.idx,
            supportingIndex: 0,
            verseRef: supporting.ref,
          })}
          style={atlasStyles.supportButton}
        >
          <Text numberOfLines={1} style={atlasStyles.supportButtonText}>Supporting: {supporting.ref}</Text>
        </TouchableOpacity>
      ) : (
        <View style={atlasStyles.stationFooter}>
          <Text style={atlasStyles.stationFooterText}>Open milestone</Text>
        </View>
      )}
    </View>
  );
}

export function ThreadAtlas({ navigation }) {
  const allStations = useMemo(() => buildThreadAtlas(), []);
  const [selectedThreadIds, setSelectedThreadIds] = useState(() => new Set(ATLAS_THREADS.map(thread => thread.id)));
  const [compact, setCompact] = useState(false);
  const atlasScrollRef = useRef(null);
  const activeThreads = ATLAS_THREADS.filter(thread => selectedThreadIds.has(thread.id));
  const slotWidth = compact ? 158 : 194;
  const cardWidth = compact ? 144 : 178;
  const visibleStations = allStations.filter(station => station.threadIds.some(id => selectedThreadIds.has(id)));
  const positionedStations = visibleStations.map((station, index) => ({ ...station, x: 230 + index * slotWidth }));
  const atlasWidth = Math.max(460, 460 + Math.max(0, positionedStations.length - 1) * slotWidth);
  const atlasHeight = TRACK_TOP + activeThreads.length * LANE_HEIGHT + ATLAS_BOTTOM;

  const eraLayouts = GRAPH_ERAS.map(era => {
    const eraStations = positionedStations.filter(station => station.eraId === era.id);
    if (!eraStations.length) return { ...era, hidden: true, startX: 0, width: 0 };
    const startX = Math.max(0, eraStations[0].x - slotWidth / 2);
    const endX = Math.min(atlasWidth, eraStations[eraStations.length - 1].x + slotWidth / 2);
    return { ...era, startX, width: Math.max(slotWidth, endX - startX) };
  });

  const showAll = () => setSelectedThreadIds(new Set(ATLAS_THREADS.map(thread => thread.id)));
  const toggleThread = threadId => {
    if (selectedThreadIds.size === ATLAS_THREADS.length) {
      setSelectedThreadIds(new Set([threadId]));
      return;
    }
    if (selectedThreadIds.size === 1 && selectedThreadIds.has(threadId)) {
      showAll();
      return;
    }
    const next = new Set(selectedThreadIds);
    if (next.has(threadId) && next.size > 1) next.delete(threadId);
    else next.add(threadId);
    setSelectedThreadIds(next);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <Header
        title="Thread Atlas"
        subtitleText="Follow seven biblical threads across the story of Scripture."
        onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Threads')}
        right={<TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.searchTop}><Text style={styles.searchTopText}>Search</Text></TouchableOpacity>}
      />
      <ScrollView contentContainerStyle={atlasStyles.screenContent} nestedScrollEnabled>
        <View style={atlasStyles.introCard}>
          <Text style={styles.noticeTitle}>How to explore</Text>
          <Text style={styles.noticeText}>Swipe sideways from Genesis to Revelation. Tap a milestone to open its thread segment. Where available, use the supporting-Scripture link for direct study.</Text>
        </View>

        <View style={atlasStyles.controlHeader}>
          <Text style={styles.bigLabel}>Threads & filters</Text>
          <View style={atlasStyles.controlActions}>
            <TouchableOpacity accessibilityRole="button" onPress={showAll} style={atlasStyles.textControl}>
              <Text style={atlasStyles.textControlLabel}>Show all</Text>
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" onPress={() => setCompact(value => !value)} style={atlasStyles.textControl}>
              <Text style={atlasStyles.textControlLabel}>{compact ? 'Comfortable' : 'Compact'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={atlasStyles.filters}>
          {ATLAS_THREADS.map(thread => (
            <ThreadFilter key={thread.id} thread={thread} active={selectedThreadIds.has(thread.id)} onPress={() => toggleThread(thread.id)} />
          ))}
        </View>
        <Text style={atlasStyles.filterHelp}>{activeThreads.length} of 7 threads visible • Tap a thread to isolate it, then add others to compare</Text>

        <Text style={styles.bigLabel}>Jump to an era</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={atlasStyles.eraJumps}>
          {eraLayouts.filter(era => !era.hidden).map(era => (
            <TouchableOpacity
              key={era.id}
              accessibilityRole="button"
              accessibilityLabel={`Jump to ${era.label}`}
              onPress={() => atlasScrollRef.current?.scrollTo({ x: Math.max(0, era.startX - 12), animated: true })}
              style={atlasStyles.eraJump}
            >
              <Text style={atlasStyles.eraJumpText}>{era.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={atlasStyles.atlasShell}>
          <ScrollView
            ref={atlasScrollRef}
            horizontal
            nestedScrollEnabled
            directionalLockEnabled
            showsHorizontalScrollIndicator
            accessibilityLabel="Horizontally scrollable canonical Thread Atlas"
            contentContainerStyle={{ width: atlasWidth, height: atlasHeight }}
          >
            <View style={{ width: atlasWidth, height: atlasHeight }}>
              {eraLayouts.filter(era => !era.hidden).map(era => {
                const phase = GRAPH_PHASES[era.phase];
                return (
                  <View key={era.id} pointerEvents="none" style={[atlasStyles.eraBand, { left: era.startX, width: era.width, backgroundColor: phase.color }]}>
                    <Text numberOfLines={1} style={atlasStyles.phaseLabel}>{phase.label}</Text>
                    <Text numberOfLines={1} style={atlasStyles.eraLabel}>{era.label}</Text>
                    <Text numberOfLines={1} style={atlasStyles.covenantLabel}>{era.books} • {era.covenant}</Text>
                  </View>
                );
              })}

              {activeThreads.map((thread, laneIndex) => {
                const y = TRACK_TOP + laneIndex * LANE_HEIGHT + LANE_HEIGHT / 2;
                return (
                  <React.Fragment key={thread.id}>
                    <View pointerEvents="none" style={[atlasStyles.trackLine, { top: y - 2, width: atlasWidth, backgroundColor: thread.color }]} />
                    <View pointerEvents="none" style={[atlasStyles.laneLabel, { top: y - 52, borderColor: thread.color }]}>
                      <Text style={atlasStyles.laneIcon}>{thread.icon}</Text>
                      <Text numberOfLines={1} style={atlasStyles.laneLabelText}>{thread.short}</Text>
                    </View>
                  </React.Fragment>
                );
              })}

              {positionedStations.map(station => {
                const lanes = activeThreads.map((thread, index) => station.threadIds.includes(thread.id) ? index : -1).filter(index => index >= 0);
                if (lanes.length < 2) return null;
                const top = TRACK_TOP + lanes[0] * LANE_HEIGHT + LANE_HEIGHT / 2;
                const bottom = TRACK_TOP + lanes[lanes.length - 1] * LANE_HEIGHT + LANE_HEIGHT / 2;
                return <View key={`${station.key}-transfer`} pointerEvents="none" style={[atlasStyles.transferLine, { left: station.x - 2, top, height: bottom - top }]} />;
              })}

              {positionedStations.flatMap(station => activeThreads.map((thread, laneIndex) => station.threadIds.includes(thread.id) ? (
                <Milestone
                  key={`${station.key}-${thread.id}`}
                  navigation={navigation}
                  station={station}
                  thread={thread}
                  x={station.x}
                  y={TRACK_TOP + laneIndex * LANE_HEIGHT + LANE_HEIGHT / 2}
                  width={cardWidth}
                />
              ) : null))}
            </View>
          </ScrollView>
        </View>

        <View style={atlasStyles.phaseLegend}>
          {Object.values(GRAPH_PHASES).map(phase => (
            <View key={phase.label} style={atlasStyles.phaseLegendItem}>
              <View style={[atlasStyles.phaseSwatch, { backgroundColor: phase.color }]} />
              <Text style={atlasStyles.phaseLegendText}>{phase.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const atlasStyles = StyleSheet.create({
  screenContent: { padding: 16, paddingBottom: 48 },
  introCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderRadius: 18, padding: 14, marginBottom: 2 },
  controlHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 },
  controlActions: { flexDirection: 'row', gap: 8 },
  textControl: { minHeight: 44, paddingHorizontal: 10, justifyContent: 'center' },
  textControlLabel: { fontSize: 12, fontWeight: '900', color: '#2b2b2b' },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  filter: { minHeight: 44, flexDirection: 'row', alignItems: 'center', gap: 7, backgroundColor: '#fff', borderWidth: 1, borderColor: '#dedbd5', borderRadius: 999, paddingHorizontal: 12 },
  filterIcon: { fontSize: 13, color: '#2b2b2b' },
  filterText: { fontSize: 12, fontWeight: '800', color: '#454545' },
  filterHelp: { fontSize: 12, color: '#6b6b6b', lineHeight: 17, marginTop: 8 },
  eraJumps: { gap: 8, paddingBottom: 4 },
  eraJump: { minHeight: 44, justifyContent: 'center', borderWidth: 1, borderColor: '#e1ded8', borderRadius: 13, backgroundColor: '#fff', paddingHorizontal: 12 },
  eraJumpText: { fontSize: 12, fontWeight: '800', color: '#333' },
  atlasShell: { marginTop: 12, marginHorizontal: -16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#dedbd5', backgroundColor: '#fff' },
  eraBand: { position: 'absolute', top: 0, height: '100%', borderRightWidth: 1, borderRightColor: '#d9d4ca', paddingHorizontal: 12, paddingTop: 10 },
  phaseLabel: { fontSize: 9, lineHeight: 12, fontWeight: '900', letterSpacing: .5, textTransform: 'uppercase', color: '#6a655d' },
  eraLabel: { marginTop: 2, fontSize: 16, lineHeight: 20, fontWeight: '900', color: '#252525' },
  covenantLabel: { fontSize: 10, lineHeight: 14, color: '#68635c' },
  trackLine: { position: 'absolute', left: 0, height: 4, opacity: .78 },
  laneLabel: { position: 'absolute', left: 6, zIndex: 4, height: 30, minWidth: 108, maxWidth: 148, flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 8, borderWidth: 1, borderRadius: 999, backgroundColor: '#fff' },
  laneIcon: { fontSize: 11, color: '#333' },
  laneLabelText: { fontSize: 10, fontWeight: '900', color: '#333' },
  transferLine: { position: 'absolute', width: 4, backgroundColor: '#343434', zIndex: 1 },
  station: { position: 'absolute', zIndex: 2, minHeight: 106, borderWidth: 2, borderRadius: 15, backgroundColor: '#fff', overflow: 'hidden', shadowColor: '#000', shadowOpacity: .08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 2 },
  interchangeStation: { borderWidth: 3, shadowOpacity: .14 },
  stationMain: { minHeight: 62, paddingHorizontal: 9, paddingTop: 7, paddingBottom: 5 },
  stationTop: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  stationRef: { flex: 1, fontSize: 11, lineHeight: 14, fontWeight: '900', color: '#202020' },
  interchangeBadge: { fontSize: 9, fontWeight: '900', color: '#333', backgroundColor: '#f0eee9', borderRadius: 7, paddingHorizontal: 4, paddingVertical: 2 },
  stationLabel: { fontSize: 10, lineHeight: 13, fontWeight: '900', color: '#444', marginTop: 3 },
  stationTitle: { fontSize: 9, lineHeight: 12, color: '#676767', marginTop: 2 },
  supportButton: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 9, borderTopWidth: 1, borderTopColor: '#e8e6e2', backgroundColor: '#faf9f7' },
  supportButtonText: { fontSize: 9, lineHeight: 12, fontWeight: '900', color: '#333' },
  stationFooter: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 9, borderTopWidth: 1, borderTopColor: '#eeeae4' },
  stationFooterText: { fontSize: 9, lineHeight: 12, fontWeight: '800', color: '#777' },
  phaseLegend: { marginTop: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  phaseLegendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  phaseSwatch: { width: 18, height: 18, borderRadius: 5, borderWidth: 1, borderColor: '#ddd7cc' },
  phaseLegendText: { fontSize: 11, color: '#5a5a5a' },
});
