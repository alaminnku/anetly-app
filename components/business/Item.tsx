import { View, Text } from 'react-native';
import { IItem } from 'types';

interface IProps {
  item: IItem;
}

export default function Item({ item }: IProps) {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
    </View>
  );
}
