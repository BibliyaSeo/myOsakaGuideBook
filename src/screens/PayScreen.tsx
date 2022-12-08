import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {api} from '../api';
import {NOTION_PAY_DATABASE_ID} from '@env';

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
    <SafeAreaView>
      <Text>PayScreen</Text>
    </SafeAreaView>
  );
}
