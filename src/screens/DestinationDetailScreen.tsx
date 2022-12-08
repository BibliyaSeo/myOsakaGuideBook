import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IDestinationCard} from '../components/DestinationCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useBottomBarHeight} from '../hooks/useBottomBarHeight';
import {destinationImages} from '../utils/destinationImages';
import {dayColors, regionColors} from '../utils/colors';
import {RootState} from '../redux/store';
import {useSelector} from 'react-redux';

interface IDestiantionDetailScreen {
  params: IDestinationCard;
}

export default function DestinationDetailScreen() {
  const navigation = useNavigation();

  const destinationData = useSelector(
    (state: RootState) => state.destination.destinationData,
  );

  const {
    params: {id},
  }: IDestiantionDetailScreen = useRoute<any>();
  const bottomBarHeight = useBottomBarHeight;

  const [eachDestination, setEachDestination] = useState<any>({});
  const [index, setIndex] = useState<any>();

  useEffect(() => {
    setIndex(Number(id));
  }, [id]);

  useEffect(() => {
    if (index !== undefined) {
      setEachDestination(destinationData[index]);
    }
  }, [index]);

  const names = destinationImages.find((item: any) => {
    return item.name === eachDestination.image?.rich_text[0]?.plain_text;
  });

  return (
    <SafeAreaView className={`pb-[${bottomBarHeight}px]`}>
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
          <Image source={names?.require} className="h-56 w-full" />
        </View>
        <View className="p-4">
          <Text className="text-xl font-bold mb-2">
            {eachDestination.name?.title[0]?.plain_text}
          </Text>
          <View className="flex-row space-x-2">
            <View
              className={`py-1.5 mb-2 ${regionColors(
                eachDestination.region?.select?.name,
              )} rounded-md w-14 flex-row justify-center`}>
              <Text>{eachDestination.region?.select?.name}</Text>
            </View>
            <View
              className={`px-2 py-1.5 mb-2 rounded-md w-14 
              flex-row justify-center ${dayColors(
                eachDestination.day?.select?.color,
              )}`}>
              <Text>{eachDestination.day?.select?.name}</Text>
            </View>
            <View className="px-2 py-1.5 mb-2 bg-gray-200 rounded-md w-20 flex-row justify-center">
              <Text>{eachDestination.pass?.select?.name}</Text>
            </View>
          </View>
          <View className="border-b h-2 border-gray-300"></View>
          <View className="py-4">
            <View className="mb-2">
              <Text>
                영업시간: {eachDestination.worktime?.rich_text[0]?.plain_text}
              </Text>
            </View>
            <Text>{eachDestination.description?.rich_text[0]?.plain_text}</Text>
          </View>
          <View className="border-b h-2 border-gray-300"></View>
          <View className="py-2 mt-1.5">
            <Text>메모: {eachDestination.memo?.rich_text[0]?.plain_text}</Text>
          </View>
          <View className="border-t border-gray-300"></View>
          <View className="pt-2 flex-row items-center">
            <View className="flex justify-center mr-2">
              <TouchableOpacity
                onPress={() => Linking.openURL(eachDestination.googleMap?.url)}>
                <Text>{eachDestination.name?.title[0]?.plain_text} 구글맵</Text>
              </TouchableOpacity>
            </View>
            <Ionicons name={'open-outline'} size={20} color={'gray'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
