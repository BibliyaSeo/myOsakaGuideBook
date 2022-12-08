import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {api} from '../api';
import {NOTION_PAY_DATABASE_ID} from '@env';
import MainTitle from '../components/MainTitle';

export default function PayScreen() {
  useEffect(() => {
    const daySort = {
      sorts: [
        {
          property: 'date',
          direction: 'ascending',
        },
      ],
    };

    const getOsakaPay = async () => {
      try {
        const res = await api.post(`/${NOTION_PAY_DATABASE_ID}/query`);
        // console.log(res.data.results);
      } catch (error) {}
    };
    getOsakaPay();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <MainTitle title="OSAKA PAY" />
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl mb-2">가계부</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
