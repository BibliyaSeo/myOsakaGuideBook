import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {api} from '../api';
import MainTitle from '../components/MainTitle';
import {NOTION_RESERVATION_DATABASE_ID} from '@env';
import ReservationCard from '../components/ReservationCard';

export default function ReservationScreen() {
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {
    const dateSort = {
      sorts: [
        {
          property: 'date',
          direction: 'ascending',
        },
      ],
    };

    const getReservationOsakaData = async () => {
      try {
        const res = await api.post(
          `/${NOTION_RESERVATION_DATABASE_ID}/query`,
          dateSort,
        );
        setReservationData(res.data.results);
        console.log(res.data.results.map((item: any) => item.properties.name));
      } catch (error) {}
    };
    getReservationOsakaData();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <MainTitle title="OSAKA RESERVATION" />
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl mb-2">예약</Text>
          {reservationData.map((item: any) => (
            <ReservationCard
              key={item.id}
              name={item.properties.name?.title[0]?.plain_text}
              date={item.properties.date.date.start}
              memo={item.properties.memo.rich_text[0].plain_text}
              url={item.properties.url?.url}
              reservationNumber={
                item.properties.reservationNumber.rich_text[0].plain_text
              }
              type={item.properties.type.select?.name}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
