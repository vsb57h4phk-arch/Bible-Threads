import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Threads } from './screens/Threads';
import { Lenses } from './screens/Lenses';
import { Overview } from './screens/Overview';
import { Search } from './screens/Search';
import { Thread } from './screens/Thread';
import { VerseDetail } from './screens/VerseDetail';
import { ConceptDetail } from './screens/ConceptDetail';
import { LensMap } from './screens/LensMap';
import { ThreadAtlas } from './screens/ThreadAtlas';
import { ScriptureExplorer } from './screens/ScriptureExplorer';
import { ChapterDetail } from './screens/ChapterDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Bible Threads' }} />
        <Stack.Screen name="Threads" component={Threads} options={{ title: 'Explore Threads' }} />
        <Stack.Screen name="Lenses" component={Lenses} options={{ title: 'Explore Lenses' }} />
        <Stack.Screen name="Overview" component={Overview} options={{ title: 'Overview' }} />
        <Stack.Screen name="Thread" component={Thread} options={{ title: 'Thread' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Verse Explorer' }} />
        <Stack.Screen name="VerseDetail" component={VerseDetail} options={{ title: 'Verse Detail' }} />
        <Stack.Screen name="ConceptDetail" component={ConceptDetail} options={{ title: 'Concept Detail' }} />
        <Stack.Screen name="LensMap" component={LensMap} options={{ title: 'Lens Map' }} />
        <Stack.Screen name="ThreadAtlas" component={ThreadAtlas} options={{ title: 'Thread Atlas' }} />
        <Stack.Screen name="ScriptureExplorer" component={ScriptureExplorer} options={{ title: 'Explore Scripture' }} />
        <Stack.Screen name="ChapterDetail" component={ChapterDetail} options={{ title: 'Chapter Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
