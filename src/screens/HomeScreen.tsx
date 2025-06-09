import {Text, View} from 'react-native';
import {TYPOGRAPHY} from '../constants/typography.ts';

const HomeScreen = () => {
  return (
    <View>
      <Text
        style={{
          ...TYPOGRAPHY.h3,
        }}>
        Home Screen
      </Text>
    </View>
  );
};

export {HomeScreen};
