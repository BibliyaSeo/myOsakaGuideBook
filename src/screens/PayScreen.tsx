import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {api} from '../api';
import {NOTION_PAY_DATABASE_ID} from '@env';
import MainTitle from '../components/MainTitle';
import PayCard from '../components/PayCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PayScreen() {
  const [payData, setPayData] = useState([]);
  const [won, setWon] = useState([]);
  const [wonTotal, setWonTotal] = useState(0);
  const [yen, setYen] = useState([]);
  const [yenTotal, setYenTotal] = useState(0);
  const [subTotal, setSubTotal] = useState([]);
  const [total, setTotal] = useState(0);
  const [fontSizePlus, setFontSizePlus] = useState(false);

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
        const res = await api.post(`/${NOTION_PAY_DATABASE_ID}/query`, daySort);
        setPayData(res.data.results);
        setWon(res.data.results.map((item: any) => item.properties.won.number));
        setYen(res.data.results.map((item: any) => item.properties.yen.number));
        setSubTotal(
          res.data.results.map(
            (item: any) => item.properties.total.formula.number,
          ),
        );
      } catch (error) {}
    };
    getOsakaPay();
  }, []);

  useEffect(() => {
    if (won.length !== 0) {
      setWonTotal(
        won.reduce((sum, currValue) => {
          return sum + currValue;
        }, 0),
      );
    }
    if (yen.length !== 0) {
      setYenTotal(
        yen.reduce((sum, currValue) => {
          return sum + currValue;
        }, 0),
      );
    }
    if (subTotal.length !== 0) {
      setTotal(
        subTotal.reduce((sum, currValue) => {
          return sum + currValue;
        }, 0),
      );
    }
  }, [subTotal.length]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <MainTitle title="OSAKA PAY" />
      <ScrollView className="bg-gray-50">
        <View className="px-5 py-2">
          <View className="mb-2 flex-row justify-between items-center">
            <Text className="font-bold text-xl">?????????</Text>
            <TouchableOpacity onPress={() => setFontSizePlus(!fontSizePlus)}>
              {fontSizePlus ? (
                <Ionicons name={'remove'} size={30} color={'lightgray'} />
              ) : (
                <Ionicons name={'add'} size={30} color={'lightgray'} />
              )}
            </TouchableOpacity>
          </View>
          {payData.map((item: any) => (
            <PayCard
              key={item.id}
              list={item.properties.list.title[0].plain_text}
              date={item.properties.date.date.start}
              day={item.properties.day.select.name}
              memo={item.properties.memo.rich_text[0]?.plain_text}
              type={item.properties.type.select.name}
              won={item.properties.won.number}
              yen={item.properties.yen.number}
              fontSizePlus={fontSizePlus}
            />
          ))}
          <View className="flex p-4 border-y border-gray-300 my-2">
            <View className="flex-row justify-center space-x-6 mb-2">
              <View className="flex justify-center items-center">
                <Text>?????? ??????</Text>
                <Text className="text-[16px]">
                  {wonTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}???
                </Text>
              </View>
              <View className="flex justify-center items-center">
                <Text>?????? ??????</Text>
                <Text className="text-[16px]">
                  {yenTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}???
                </Text>
              </View>
            </View>

            <View className="flex justify-center items-center">
              <Text>??? ?????? ??????</Text>
              <Text className={`${fontSizePlus ? 'text-xl' : 'text-[16px]'}`}>
                {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}???
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
