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
import MainTitle from '../components/MainTitle';

export default function TouristDestinationScreen() {
  const [destinationList, setDestinationList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const nameSort = {
      sorts: [
        {
          property: 'name',
          direction: 'descending',
        },
      ],
    };

    const daySort = {
      sorts: [
        {
          property: 'day',
          direction: 'ascending',
        },
      ],
    };

    const getOsakaDestination = api.post(
      `/${NOTION_DESTINATION_DATABASE_ID}/query`,
      daySort,
    );

    const getOsakaRestaurant = api.post(
      `/${NOTION_RESTAURANT_DATABASE_ID}/query`,
      nameSort,
    );

    const listArr = [getOsakaDestination, getOsakaRestaurant];
    Promise.all(listArr).then(res => {
      console.log(res[0]);
      setDestinationList(res[0].data.results);
      setRestaurantList(res[1].data.results);
    });
  }, []);

  useEffect(() => {
    destinationList.map((item: any) =>
      console.log('destinationList : ', item.properties.googleMap.url),
    );
    // console.log('restaurantList: ', restaurantList);
  }, [destinationList]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <MainTitle title={'OSAKA GUIDEBOOK'} />
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl mb-2">관광명소</Text>
          {/* 관광카드영역 */}
          <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}>
            {destinationList.map((item: any) => (
              <DestinationCard
                key={item.id}
                id={item.id}
                name={item.properties.name?.title[0]?.plain_text}
                image={item.properties.image.rich_text[0].plain_text}
                description={
                  item.properties.description.rich_text[0].plain_text
                }
                region={item.properties.region.select.name}
                day={item.properties.day.select.name}
                pass={item.properties.pass.select.name}
                worktime={item.properties.worktime.rich_text[0].plain_text}
                memo={item.properties.memo.rich_text[0]?.plain_text}
                googleMap={item.properties.googleMap.url}
              />
            ))}
          </ScrollView>
        </View>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl">식당</Text>
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
