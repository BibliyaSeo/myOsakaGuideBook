import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {destinationList} from '../osakadatas/destinationList';
import DestinationCard from '../components/DestinationCard';
import {api} from '../api';
import {
  NOTION_DESTINATION_DATABASE_ID,
  NOTION_RESTAURANT_DATABASE_ID,
} from '@env';
import RestaurantCard from '../components/RestaurantCard';

export default function TouristDestinationScreen() {
  const [destinationList, setDestinationList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const body = {
      sorts: [
        {
          property: 'name',
          direction: 'descending',
        },
      ],
    };
    const getOsakaDestination = api.post(
      `/${NOTION_DESTINATION_DATABASE_ID}/query`,
      body,
    );

    const getOsakaRestaurant = api.post(
      `/${NOTION_RESTAURANT_DATABASE_ID}/query`,
      body,
    );

    const listArr = [getOsakaDestination, getOsakaRestaurant];
    Promise.all(listArr).then(res => {
      setDestinationList(res[0].data.results);
      setRestaurantList(res[1].data.results);
    });
  }, []);

  useEffect(() => {
    console.log('destinationList : ', destinationList);
    console.log('restaurantList: ', restaurantList);
  }, [destinationList, restaurantList]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 py-3 bg-sky-300">
        <Text className="text-xl font-extrabold">OSAKA</Text>
      </View>
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="text-extrabold text-lg">관광명소</Text>
          {/* 관광카드영역 */}
          <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}
            className="pt-4">
            {destinationList.map((item: any) => (
              <DestinationCard
                key={item.id}
                name={item.properties.name?.title[0]?.plain_text}
              />
            ))}
          </ScrollView>
        </View>
        <View className="px-5 py-2">
          <Text className="text-extrabold text-lg">식당</Text>
          {/* 식당카드영역 */}
          {restaurantList.map((item: any) => (
            <RestaurantCard
              key={item.id}
              name={item.properties.name.title[0].plain_text}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
