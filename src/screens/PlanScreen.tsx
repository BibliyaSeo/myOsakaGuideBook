import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NOTION_PLAN_DATABASE_ID} from '@env';
import {api} from '../api';
import MainTitle from '../components/MainTitle';
import PlanCard from '../components/PlanCard';

export default function PlanScreen() {
  const [planData, setPlanData] = useState([]);

  const daySort = {
    sorts: [
      {
        property: 'day',
        direction: 'ascending',
      },
    ],
  };

  useEffect(() => {
    const getOsakaPlan = async () => {
      const res = await api.post(`/${NOTION_PLAN_DATABASE_ID}/query`, daySort);
      setPlanData(res.data?.results);
    };
    getOsakaPlan();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <MainTitle title="OSAKA PLAN" />
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl mb-2">일정</Text>
          {planData.map((item: any) => (
            <PlanCard
              key={item.id}
              date={item.properties.date.date.start}
              title={item.properties.title.title[0].plain_text}
              day={item.properties.day.select.name}
              memo={item.properties.memo.rich_text[0].plain_text}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
