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
import {setDestinationData} from '../redux/slices/destinationSlice';
import {RootState} from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';

export default function TouristDestinationScreen() {
  const dispatch = useDispatch();
  // const [destinationList, setDestinationList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const destinationData = useSelector(
    (state: RootState) => state.destination.destinationData,
  );

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

    const getMainData = async () => {
      const getOsakaDestination = api.post(
        `/${NOTION_DESTINATION_DATABASE_ID}/query`,
        daySort,
      );

      const getOsakaRestaurant = api.post(
        `/${NOTION_RESTAURANT_DATABASE_ID}/query`,
        nameSort,
      );

      const listArr = [getOsakaDestination, getOsakaRestaurant];

      await Promise.all(listArr).then(res => {
        const properties = res[0].data.results.map(
          (item: any) => item.properties,
        );
        // setDestinationList(res[0].data.results);
        dispatch(setDestinationData(properties));
        setRestaurantList(res[1].data.results);
      });
    };
    getMainData();
  }, []);

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
            {/* {destinationList.map((item: any) => ( */}
            {destinationData.map((item: any, index: number) => (
              <DestinationCard
                key={`${index}_destination`}
                id={`${index}`}
                name={item.name?.title[0]?.plain_text}
                image={item.image?.rich_text[0]?.plain_text}
                description={item.description.rich_text[0]?.plain_text}
                region={item.region.select?.name}
                day={item.day.select?.name}
                dayColor={item.day.select?.color}
                pass={item.pass.select?.name}
                worktime={item.worktime.rich_text[0]?.plain_text}
                memo={item.memo.rich_text[0]?.plain_text}
                googleMap={item.googleMap?.url}
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
