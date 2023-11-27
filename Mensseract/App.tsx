import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/Login';
import CreateAccountPage from './pages/CreateAccount';
import { NavigationStackProp } from 'react-navigation-stack';
import ContactsPage from './pages/ContactsPage';
import ChatPage from './pages/ChatPage';

export type nav = NavigationStackProp<any,any>
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={LoginPage} />
          <Stack.Screen name='CreateAccount' component={CreateAccountPage} />
          <Stack.Screen name='ChatPage11' component={ChatPage} />
          <Stack.Screen name='ContactsPage' options = {{gestureEnabled: false, headerBackVisible: false}} component={ContactsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
}

