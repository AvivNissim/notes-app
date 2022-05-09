import * as eva from '@eva-design/eva';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import CreateNote from './Screens/CreateNote';
import AllNotes from './Screens/AllNotes';
import Note from './Screens/Note';

const { Navigator, Screen } = createBottomTabNavigator();


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Create' />
    <BottomNavigationTab title='All Notes' />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='CreateNote' component={CreateNote} />
    <Screen name='AllNotes' component={AllNotes} />
    <Screen name='Note' component={Note} />
  </Navigator>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
