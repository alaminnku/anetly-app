import { colors } from '@constants/colors';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IItem } from 'types';

interface IProps {
  item: IItem;
}

export default function Item({ item }: IProps) {
  // Hooks
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('UpdateItem', { item })}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>Tk {item.price}</Text>
        </View>

        <Image
          style={styles.image}
          source={require('../../assets/sushi.jpg')}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.black,
  },

  description: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.gray,
  },

  price: {
    fontSize: 18,
    color: colors.gray,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
});
