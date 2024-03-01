import 'react-native-gesture-handler';
import { Tabs } from 'expo-router/tabs';

import { Provider } from 'react-redux';

import { store } from '../store/store';
import IconButton from '../components/IconButton';

const Layout = () => {
  return (
    <Provider store={store}>
      <Tabs
        initialRouteName='index'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon='home' size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
};

export default Layout;

// initialRouteName='index'
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#f4511e',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                 },
//                 tabBarIcon: ({ color, size }) => ( // Add tabBarIcon prop
//                     <Ionicons name="home" size={size} color={color} /> // Use Ionicons component with desired icon name
//                 ),
//             }}
