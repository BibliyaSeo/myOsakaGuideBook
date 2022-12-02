import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IDestinationCard} from '../components/DestinationCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {mainColor} from '../utils/colors';

interface IDestiantionDetailScreen {
  params: IDestinationCard;
}

export default function DestinationDetailScreen() {
  const navigation = useNavigation();
  const {
    params: {id, name, image, description, region, day, pass, worktime, memo},
  }: IDestiantionDetailScreen = useRoute<any>();
  return (
    <SafeAreaView>
      <View className="flex-row space-x-3 items-center py-1 px-2">
        <TouchableOpacity
          className=""
          onPress={() => navigation.navigate('관광명소')}>
          <Ionicons name={'ios-arrow-back'} size={40} color={'black'} />
        </TouchableOpacity>
        <View>
          <Text className="text-xl font-bold">관광명소</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <Image source={{uri: `${image}`}} className="h-56 w-full" />
        </View>
        <View className="p-4">
          <Text className="text-xl font-bold">{name}</Text>
          <Text>{description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
