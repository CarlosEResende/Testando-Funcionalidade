import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './navegacao/bottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  );
}
