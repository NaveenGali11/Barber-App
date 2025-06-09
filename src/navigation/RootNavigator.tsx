import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './RootStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export {RootNavigator};
