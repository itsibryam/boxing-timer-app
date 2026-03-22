import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { SettingsScreen } from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#4ECDC4',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({ color, focused }) => {
            let icon: string;

            if (route.name === 'Home') {
              icon = focused ? '⏱️' : '⏱️';
            } else if (route.name === 'History') {
              icon = focused ? '📊' : '📊';
            } else {
              icon = focused ? '⚙️' : '⚙️';
            }

            return <Text style={{ fontSize: 24 }}>{icon}</Text>;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Timer' }} />
        <Tab.Screen name="History" component={HistoryScreen} options={{ title: 'History' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    height: 60,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: -5,
  },
});

export default App;