import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens';

const NativeStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Home" component={HomeScreen} />
    </NativeStack.Navigator>
  );
};

export {RootStackNavigator};
