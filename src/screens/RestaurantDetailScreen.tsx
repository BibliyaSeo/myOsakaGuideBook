import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useBottomBarHeight} from '../hooks/useBottomBarHeight';
import {restaurantImages} from '../utils/restaurantImages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {menuColors, regionColors} from '../utils/colors';
import {fontSizeSetting} from '../utils/fontSetting';

export default function RestaurantDetailScreen() {
  const {
    params: {id},
  } = useRoute<any>();

  const navigation = useNavigation();
  const restaurantData = useSelector(
    (state: any) => state.restaurant.restaurantData,
  );

  const bottomBarHeight = useBottomBarHeight;

  const [eachRestaurant, setEachRestaurant] = useState<any>({});
  const [index, setIndex] = useState<any>();
  const [fontSizePlus, setFontSizePlus] = useState(false);
  const last = restaurantData.length - 1;

  useEffect(() => {
    setIndex(Number(id));
  }, [id]);

  useEffect(() => {
    if (index !== undefined) {
      setEachRestaurant(restaurantData[index]);
    }
  }, [index]);

  const goToPrevPage = () => {
    const prev = index - 1;
    let id = `${prev}`;

    if (prev < 0) {
      id = `${last}`;
      navigation.navigate('RestaurantDetail', {id});
      return;
    }
    navigation.navigate('RestaurantDetail', {id});
  };

  const goToNextPage = () => {
    const next = index + 1;
    let id = `${next}`;
    if (next - 1 === last) {
      id = '0';
      navigation.navigate('RestaurantDetail', {id});
      return;
    }

    navigation.navigate('RestaurantDetail', {id});
  };

  const names = restaurantImages.find((item: any) => {
    return item.name === eachRestaurant?.image?.rich_text[0]?.plain_text;
  });

  return (
    <SafeAreaView className={`flex-1 bg-white pb-[${bottomBarHeight}px]`}>
      <View className="flex-row justify-between items-center py-1 px-2">
        <TouchableOpacity onPress={() => setFontSizePlus(!fontSizePlus)}>
          {fontSizePlus ? (
            <Ionicons name={'remove'} size={40} color={'#eeeeee'} />
          ) : (
            <Ionicons name={'add'} size={40} color={'#eeeeee'} />
          )}
        </TouchableOpacity>
        <View>
          <Text className="text-xl font-bold">??????</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('????????????')}>
          <Ionicons name={'close'} size={40} color={'black'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <Image source={names?.require} className="h-56 w-full" />
        </View>
        <View className="p-4">
          <View className="flex flex-row justify-between items-center mb-4">
            <TouchableOpacity onPress={goToPrevPage}>
              <Ionicons name={'chevron-back'} size={40} color={'#d6d6d6'} />
            </TouchableOpacity>
            <Text className="text-xl font-bold">
              {eachRestaurant?.name?.title[0]?.plain_text}
            </Text>
            <TouchableOpacity onPress={goToNextPage}>
              <Ionicons name={'chevron-forward'} size={40} color={'#d6d6d6'} />
            </TouchableOpacity>
          </View>

          <View className="flex-row space-x-2 justify-center mb-2">
            <View
              className={`py-1.5 mb-2 ${regionColors(
                eachRestaurant?.region?.select?.name,
              )} rounded-md w-14 flex-row justify-center`}>
              <Text>{eachRestaurant?.region?.select?.name}</Text>
            </View>
            <View
              className={`py-1.5 mb-2 rounded-md w-14 flex-row justify-center ${menuColors(
                eachRestaurant?.menu?.select?.name,
              )}`}>
              <Text>{eachRestaurant?.menu?.select?.name}</Text>
            </View>
          </View>
          <View className="border-b h-2 border-gray-300"></View>
          <View className="pt-4 pb-2">
            <View className="mb-2">
              <Text className={`${fontSizeSetting(fontSizePlus)}`}>
                ????????????: {eachRestaurant?.worktime?.rich_text[0]?.plain_text}
              </Text>
            </View>
            <View className="mb-2">
              <Text className={`${fontSizeSetting(fontSizePlus)}`}>
                ?????? ??????: {eachRestaurant?.price?.rich_text[0]?.plain_text}
              </Text>
            </View>
            <Text className={`${fontSizeSetting(fontSizePlus)}`}>
              {eachRestaurant?.description?.rich_text[0]?.plain_text}
            </Text>
          </View>
          <View className="border-b h-2 border-gray-300"></View>
          <View className="py-2 mt-1.5">
            <Text className={`${fontSizeSetting(fontSizePlus)}`}>
              ??????: {eachRestaurant?.memo?.rich_text[0]?.plain_text}
            </Text>
          </View>
          <View className="border-t border-gray-300"></View>
          <View className="pt-2 flex-row items-center">
            <View className="flex justify-center mr-2">
              <TouchableOpacity
                onPress={() => Linking.openURL(eachRestaurant?.googleMap?.url)}>
                <Text className={`${fontSizeSetting(fontSizePlus)}`}>
                  {eachRestaurant?.name?.title[0]?.plain_text} ?????????
                </Text>
              </TouchableOpacity>
            </View>
            <Ionicons name={'open-outline'} size={20} color={'gray'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
