import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Overview } from './screens/Overview';
import { Search } from './screens/Search';
import { Thread } from './screens/Thread';
import { VerseDetail } from './screens/VerseDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Bible Threads' }} />
        <Stack.Screen name="Overview" component={Overview} options={{ title: 'Overview' }} />
        <Stack.Screen name="Thread" component={Thread} options={{ title: 'Thread' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Verse Explorer' }} />
        <Stack.Screen name="VerseDetail" component={VerseDetail} options={{ title: 'Verse Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
