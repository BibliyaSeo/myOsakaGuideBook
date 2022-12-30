import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NOTION_PLAN_DATABASE_ID} from '@env';
import {api} from '../api';
import MainTitle from '../components/MainTitle';
import PlanCard from '../components/PlanCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PlanScreen() {
  const [planData, setPlanData] = useState([]);
  const [fontSizePlus, setFontSizePlus] = useState(false);

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
    <SafeAreaView className="flex-1 bg-white">
      <MainTitle title="OSAKA PLAN" />
      <ScrollView className="bg-gray-50">
        <View className="px-5 py-2">
          <View className="mb-2 flex-row justify-between items-center">
            <Text className="font-bold text-xl">일정</Text>
            <TouchableOpacity onPress={() => setFontSizePlus(!fontSizePlus)}>
              {fontSizePlus ? (
                <Ionicons name={'remove'} size={30} color={'lightgray'} />
              ) : (
                <Ionicons name={'add'} size={30} color={'lightgray'} />
              )}
            </TouchableOpacity>
          </View>
          {planData.map((item: any) => (
            <PlanCard
              key={item.id}
              date={item.properties.date.date.start}
              title={item.properties.title.title[0].plain_text}
              day={item.properties.day.select.name}
              memo={item.properties.memo.rich_text[0].plain_text}
              fontSizePlus={fontSizePlus}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
