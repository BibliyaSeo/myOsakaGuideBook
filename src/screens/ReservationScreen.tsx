import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {api} from '../api';
import MainTitle from '../components/MainTitle';
import {NOTION_RESERVATION_DATABASE_ID} from '@env';

export default function ReservationScreen() {
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {
    const dateSort = {
      sorts: [
        {
          property: 'date',
          direction: 'descending',
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
      } catch (error) {}
    };
    getReservationOsakaData();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <MainTitle title="OSAKA RESERVATION" />
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl mb-2">예약</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
