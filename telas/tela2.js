import { View, Text, Button } from 'react-native';
import viewStyles from '../component/viewStyle';

export default function Tela2({ navigation }) {
  return (
    <View style={viewStyles.container}>
      <Text style={viewStyles.title}>Tela 2</Text>
      <Text style={viewStyles.subtitle}>Você navegou para a Tela 2</Text>

    </View>
  );
}
