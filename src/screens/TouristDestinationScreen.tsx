import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
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
import Picker from '@ouroboros/react-native-picker';
import {setRestaurantData} from '../redux/slices/restaurantSlice';

export default function TouristDestinationScreen() {
  const dispatch = useDispatch();
  // const [destinationList, setDestinationList] = useState([]);
  // const [restaurantList, setRestaurantList] = useState([]);
  const destinationData = useSelector(
    (state: RootState) => state.destination.destinationData,
  );
  const restaurantData = useSelector(
    (state: any) => state.restaurant.restaurantData,
  );

  const [selectedDay, setSelectedDay] = useState('all');

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
        const propertiesDest = res[0].data.results.map(
          (item: any) => item.properties,
        );
        const propertiesRest = res[1].data.results.map(
          (item: any) => item.properties,
        );
        // setDestinationList(res[0].data.results);
        dispatch(setDestinationData(propertiesDest));
        dispatch(setRestaurantData(propertiesRest));
      });
    };
    getMainData();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <MainTitle title={'OSAKA GUIDEBOOK'} />
      <ScrollView>
        <View className="px-5 py-2">
          {/* <View className="flex-row justify-between items-center">
            <Text className="font-bold text-xl mb-2">오사카 날씨</Text>
            <View></View>
          </View> */}
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-xl mb-2">관광명소</Text>
            <Picker
              onChanged={setSelectedDay}
              options={[
                {value: 'all', text: 'All Days'},
                {value: 'Day 1', text: 'Day 1'},
                {value: 'Day 2', text: 'Day 2'},
                {value: 'Day 3', text: 'Day 3'},
                {value: 'Day 4', text: 'Day 4'},
                {value: 'Day 5', text: 'Day 5'},
              ]}
              style={{padding: 5}}
              value={selectedDay}
            />
          </View>

          {/* 관광카드영역 */}
          <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}>
            {destinationData.map((item: any, index: number) =>
              selectedDay === 'all' ? (
                <DestinationCard
                  key={`${index}_destination`}
                  id={`${index}`}
                  name={item.name?.title[0]?.plain_text}
                  image={item.image?.rich_text[0]?.plain_text}
                  description={item.description.rich_text[0]?.plain_text}
                  region={item.region.select?.name}
                  day={item.day.select?.name}
                  pass={item.pass.select?.name}
                  worktime={item.worktime.rich_text[0]?.plain_text}
                  memo={item.memo.rich_text[0]?.plain_text}
                  googleMap={item.googleMap?.url}
                />
              ) : (
                item.day.select?.name === selectedDay && (
                  <DestinationCard
                    key={item.id}
                    id={`${index}`}
                    name={item.name?.title[0]?.plain_text}
                    image={item.image?.rich_text[0]?.plain_text}
                    description={item.description.rich_text[0]?.plain_text}
                    region={item.region.select?.name}
                    day={item.day.select?.name}
                    pass={item.pass.select?.name}
                    worktime={item.worktime.rich_text[0]?.plain_text}
                    memo={item.memo.rich_text[0]?.plain_text}
                    googleMap={item.googleMap?.url}
                  />
                )
              ),
            )}
          </ScrollView>
        </View>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl mb-2">식당</Text>
          {/* 식당카드영역 */}
          <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}>
            {restaurantData.map((item: any, index: number) => (
              <RestaurantCard
                key={item.id}
                id={`${index}`}
                name={item.name.title[0].plain_text}
                image={item.image?.rich_text[0]?.plain_text}
                region={item.region.select?.name}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
