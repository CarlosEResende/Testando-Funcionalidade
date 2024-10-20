import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Tela1 from '../telas/tela1';
import Tela2 from '../telas/tela2';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {  

        let iconName;

            if (route.name === 'Tela 1') {
              iconName = focused
                ? 'chatbubble-ellipses'
                : 'chatbubble-ellipses-outline';
            } else if (route.name === 'Tela 2') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            
        return <Ionicons name={iconName} size={20} color="blue" />;
      },
    })}
  >
      <Tab.Screen name="Tela 1" component={Tela1} />
      <Tab.Screen name="Tela 2" component={Tela2} />

    </Tab.Navigator>


  );
}
