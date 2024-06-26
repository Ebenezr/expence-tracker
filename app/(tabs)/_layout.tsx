import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import IconButton from '@/components/IconButton';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon='hours-24' size={size} color={color} />
          ),
          headerRight: () => (
            <Pressable>
              {({ pressed }) => (
                <View style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}>
                  <Link href='/modal' asChild>
                    <IconButton
                      icon='plus-circle'
                      size={25}
                      color={Colors.dark.text}
                    />
                  </Link>
                </View>
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name='Expence'
        options={{
          title: 'All Expences',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon='calendar' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
