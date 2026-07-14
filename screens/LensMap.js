import React, { useMemo, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { styles } from '../components/styles';
import {
  GRAPH_ERAS,
  GRAPH_LENSES,
  GRAPH_PHASES,
  buildScriptureGraph,
  groupStationOccurrences,
} from '../lib/scriptureGraph';

const TRACK_TOP = 112;
const LANE_HEIGHT = 98;
const GRAPH_BOTTOM = 24;

function openStation(navigation, station, occurrence) {
  navigation.navigate('VerseDetail', {
    id: occurrence.id,
    idx: occurrence.idx,
    verseIndex: occurrence.verseIndex,
    verseRef: occurrence.verseRef,
    graphConnections: station.occurrences,
    graphStationRef: station.ref,
  });
}

function LensFilter({ lens, active, onPress }) {
  return (
    <TouchableOpacity
      accessibilityRole="checkbox"
      accessibilityState={{ checked: active }}
      accessibilityLabel={`${lens.id} lens`}
      accessibilityHint="Selects this path for comparison. When all paths are visible, selects only this path."
      onPress={onPress}
      style={[mapStyles.filter, active && { borderColor: lens.color, backgroundColor: `${lens.color}12` }]}
    >
      <View style={[mapStyles.filterDot, { backgroundColor: lens.color }]} />
      <Text style={[mapStyles.filterText, active && { color: lens.color }]}>{lens.short}</Text>
    </TouchableOpacity>
  );
}

function PassageStation({ navigation, station, lens, x, y, width }) {
  const occurrences = groupStationOccurrences(station, lens.id);
  if (!occurrences.length) return null;
  const primary = occurrences[0];
  const sourceCount = new Set(occurrences.map(item => item.id)).size;
  const connectionCount = station.occurrences.length;

  return (
    <TouchableOpacity
      accessibilityRole="link"
      accessibilityLabel={`${station.ref}, ${primary.segmentLabel}, ${lens.id}${station.isInterchange ? `, interchange with ${connectionCount} connections` : ''}`}
      accessibilityHint="Opens the existing Scripture detail and related map connections."
      onPress={() => openStation(navigation, station, primary)}
      style={[
        mapStyles.station,
        { left: x - width / 2, top: y - 32, width, borderColor: lens.color },
        station.isInterchange && mapStyles.interchangeStation,
      ]}
    >
      <View style={mapStyles.stationTop}>
        <Text numberOfLines={1} style={mapStyles.stationRef}>{station.ref}</Text>
        {station.isInterchange ? <Text style={mapStyles.interchangeBadge}>↔ {connectionCount}</Text> : null}
      </View>
      <Text numberOfLines={1} style={mapStyles.stationEvent}>{primary.segmentLabel}</Text>
      {sourceCount > 1 ? <Text style={mapStyles.stationSources}>{sourceCount} source threads</Text> : null}
    </TouchableOpacity>
  );
}

export function LensMap({ navigation }) {
  const allStations = useMemo(() => buildScriptureGraph(), []);
  const [selectedLensIds, setSelectedLensIds] = useState(() => new Set(GRAPH_LENSES.map(lens => lens.id)));
  const [compact, setCompact] = useState(false);
  const mapScrollRef = useRef(null);
  const activeLenses = GRAPH_LENSES.filter(lens => selectedLensIds.has(lens.id));
  const slotWidth = compact ? 126 : 158;
  const cardWidth = compact ? 112 : 142;
  const visibleStations = allStations.filter(station => station.lensIds.some(id => selectedLensIds.has(id)));
  const positionedStations = visibleStations.map((station, index) => ({ ...station, x: 100 + index * slotWidth }));
  const mapWidth = Math.max(360, 200 + Math.max(0, positionedStations.length - 1) * slotWidth);
  const mapHeight = TRACK_TOP + activeLenses.length * LANE_HEIGHT + GRAPH_BOTTOM;

  const eraLayouts = GRAPH_ERAS.map(era => {
    const eraStations = positionedStations.filter(station => station.eraId === era.id);
    if (!eraStations.length) return { ...era, hidden: true, startX: 0, width: 0 };
    const startX = Math.max(0, eraStations[0].x - slotWidth / 2);
    const endX = Math.min(mapWidth, eraStations[eraStations.length - 1].x + slotWidth / 2);
    return { ...era, startX, width: Math.max(slotWidth, endX - startX) };
  });

  const showAll = () => setSelectedLensIds(new Set(GRAPH_LENSES.map(lens => lens.id)));
  const toggleLens = lensId => {
    if (selectedLensIds.size === GRAPH_LENSES.length) {
      setSelectedLensIds(new Set([lensId]));
      return;
    }
    if (selectedLensIds.size === 1 && selectedLensIds.has(lensId)) {
      showAll();
      return;
    }
    const next = new Set(selectedLensIds);
    if (next.has(lensId) && next.size > 1) next.delete(lensId);
    else next.add(lensId);
    setSelectedLensIds(next);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <Header
        title="Lens Map"
        subtitleText="Trace seven biblical lenses from Genesis to Revelation."
        onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Lenses')}
      />
      <ScrollView contentContainerStyle={mapStyles.screenContent} nestedScrollEnabled>
        <View style={mapStyles.introCard}>
          <Text style={styles.noticeTitle}>How to explore</Text>
          <Text style={styles.noticeText}>Swipe the map sideways through the canon. Tap a station for its existing Scripture detail. A ↔ badge marks passages shared across lenses or source threads.</Text>
        </View>

        <View style={mapStyles.controlHeader}>
          <Text style={styles.bigLabel}>Legend & filters</Text>
          <View style={mapStyles.controlActions}>
            <TouchableOpacity accessibilityRole="button" onPress={showAll} style={mapStyles.textControl}>
              <Text style={mapStyles.textControlLabel}>Show all</Text>
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" onPress={() => setCompact(value => !value)} style={mapStyles.textControl}>
              <Text style={mapStyles.textControlLabel}>{compact ? 'Comfortable' : 'Compact'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={mapStyles.filters}>
          {GRAPH_LENSES.map(lens => (
            <LensFilter key={lens.id} lens={lens} active={selectedLensIds.has(lens.id)} onPress={() => toggleLens(lens.id)} />
          ))}
        </View>
        <Text style={mapStyles.filterHelp}>{activeLenses.length} of 7 lenses visible • Tap a lens to isolate it, then add others to compare</Text>

        <Text style={styles.bigLabel}>Jump to an era</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={mapStyles.eraJumps}>
          {eraLayouts.filter(era => !era.hidden).map(era => (
            <TouchableOpacity
              key={era.id}
              accessibilityRole="button"
              accessibilityLabel={`Jump to ${era.label}`}
              onPress={() => mapScrollRef.current?.scrollTo({ x: Math.max(0, era.startX - 12), animated: true })}
              style={mapStyles.eraJump}
            >
              <Text style={mapStyles.eraJumpText}>{era.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={mapStyles.mapShell}>
          <ScrollView
            ref={mapScrollRef}
            horizontal
            nestedScrollEnabled
            directionalLockEnabled
            showsHorizontalScrollIndicator
            accessibilityLabel="Horizontally scrollable canonical Lens Map"
            contentContainerStyle={{ width: mapWidth, height: mapHeight }}
          >
            <View style={{ width: mapWidth, height: mapHeight }}>
              {eraLayouts.filter(era => !era.hidden).map(era => {
                const phase = GRAPH_PHASES[era.phase];
                return (
                  <View key={era.id} pointerEvents="none" style={[mapStyles.eraBand, { left: era.startX, width: era.width, backgroundColor: phase.color }]}>
                    <Text numberOfLines={1} style={mapStyles.phaseLabel}>{phase.label}</Text>
                    <Text numberOfLines={1} style={mapStyles.eraLabel}>{era.label}</Text>
                    <Text numberOfLines={1} style={mapStyles.covenantLabel}>{era.books} • {era.covenant}</Text>
                  </View>
                );
              })}

              {activeLenses.map((lens, laneIndex) => {
                const y = TRACK_TOP + laneIndex * LANE_HEIGHT + LANE_HEIGHT / 2;
                return (
                  <React.Fragment key={lens.id}>
                    <View pointerEvents="none" style={[mapStyles.trackLine, { top: y - 2, width: mapWidth, backgroundColor: lens.color }]} />
                    <View pointerEvents="none" style={[mapStyles.laneLabel, { top: y - 42, borderColor: lens.color }]}>
                      <Text numberOfLines={1} style={[mapStyles.laneLabelText, { color: lens.color }]}>{lens.short}</Text>
                    </View>
                  </React.Fragment>
                );
              })}

              {positionedStations.map(station => {
                const stationLanes = activeLenses
                  .map((lens, index) => station.lensIds.includes(lens.id) ? index : -1)
                  .filter(index => index >= 0);
                if (stationLanes.length < 2) return null;
                const top = TRACK_TOP + stationLanes[0] * LANE_HEIGHT + LANE_HEIGHT / 2;
                const bottom = TRACK_TOP + stationLanes[stationLanes.length - 1] * LANE_HEIGHT + LANE_HEIGHT / 2;
                return <View key={`${station.key}-transfer`} pointerEvents="none" style={[mapStyles.transferLine, { left: station.x - 2, top, height: bottom - top }]} />;
              })}

              {positionedStations.flatMap(station => activeLenses.map((lens, laneIndex) => station.lensIds.includes(lens.id) ? (
                <PassageStation
                  key={`${station.key}-${lens.id}`}
                  navigation={navigation}
                  station={station}
                  lens={lens}
                  x={station.x}
                  y={TRACK_TOP + laneIndex * LANE_HEIGHT + LANE_HEIGHT / 2}
                  width={cardWidth}
                />
              ) : null))}
            </View>
          </ScrollView>
        </View>

        <View style={mapStyles.phaseLegend}>
          {Object.values(GRAPH_PHASES).map(phase => (
            <View key={phase.label} style={mapStyles.phaseLegendItem}>
              <View style={[mapStyles.phaseSwatch, { backgroundColor: phase.color }]} />
              <Text style={mapStyles.phaseLegendText}>{phase.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStyles = StyleSheet.create({
  screenContent: { padding: 16, paddingBottom: 48 },
  introCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderRadius: 18, padding: 14, marginBottom: 2 },
  controlHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 },
  controlActions: { flexDirection: 'row', gap: 8 },
  textControl: { minHeight: 44, paddingHorizontal: 10, justifyContent: 'center' },
  textControlLabel: { fontSize: 12, fontWeight: '900', color: '#2b2b2b' },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  filter: { minHeight: 44, flexDirection: 'row', alignItems: 'center', gap: 7, backgroundColor: '#fff', borderWidth: 1, borderColor: '#dedbd5', borderRadius: 999, paddingHorizontal: 12 },
  filterDot: { width: 9, height: 9, borderRadius: 5 },
  filterText: { fontSize: 12, fontWeight: '800', color: '#454545' },
  filterHelp: { fontSize: 12, color: '#6b6b6b', lineHeight: 17, marginTop: 8 },
  eraJumps: { gap: 8, paddingBottom: 4 },
  eraJump: { minHeight: 44, justifyContent: 'center', borderWidth: 1, borderColor: '#e1ded8', borderRadius: 13, backgroundColor: '#fff', paddingHorizontal: 12 },
  eraJumpText: { fontSize: 12, fontWeight: '800', color: '#333' },
  mapShell: { marginTop: 12, marginHorizontal: -16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#dedbd5', backgroundColor: '#fff' },
  eraBand: { position: 'absolute', top: 0, height: '100%', borderRightWidth: 1, borderRightColor: '#d9d4ca', paddingHorizontal: 12, paddingTop: 10 },
  phaseLabel: { fontSize: 9, lineHeight: 12, fontWeight: '900', letterSpacing: .5, textTransform: 'uppercase', color: '#6a655d' },
  eraLabel: { marginTop: 2, fontSize: 16, lineHeight: 20, fontWeight: '900', color: '#252525' },
  covenantLabel: { fontSize: 10, lineHeight: 14, color: '#68635c' },
  trackLine: { position: 'absolute', left: 0, height: 4, opacity: .78 },
  laneLabel: { position: 'absolute', left: 6, zIndex: 3, height: 25, minWidth: 70, maxWidth: 104, justifyContent: 'center', paddingHorizontal: 8, borderWidth: 1, borderRadius: 999, backgroundColor: '#fff' },
  laneLabelText: { fontSize: 10, fontWeight: '900' },
  transferLine: { position: 'absolute', width: 4, backgroundColor: '#343434', zIndex: 1 },
  station: { position: 'absolute', zIndex: 2, minHeight: 64, borderWidth: 2, borderRadius: 14, paddingHorizontal: 8, paddingVertical: 7, backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: .08, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 2 },
  interchangeStation: { borderWidth: 3, shadowOpacity: .14 },
  stationTop: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  stationRef: { flex: 1, fontSize: 11, lineHeight: 14, fontWeight: '900', color: '#202020' },
  interchangeBadge: { fontSize: 9, fontWeight: '900', color: '#333', backgroundColor: '#f0eee9', borderRadius: 7, paddingHorizontal: 4, paddingVertical: 2 },
  stationEvent: { fontSize: 10, lineHeight: 13, color: '#5b5b5b', marginTop: 3 },
  stationSources: { fontSize: 9, lineHeight: 12, fontWeight: '800', color: '#555', marginTop: 2 },
  phaseLegend: { marginTop: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  phaseLegendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  phaseSwatch: { width: 18, height: 18, borderRadius: 5, borderWidth: 1, borderColor: '#ddd7cc' },
  phaseLegendText: { fontSize: 11, color: '#5a5a5a' },
});
