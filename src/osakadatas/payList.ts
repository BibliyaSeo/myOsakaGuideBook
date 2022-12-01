interface IPay {
  id: number;
  title: string;
  type: string;
  day: string;
  price: number;
  region: string;
  memo: string;
}

export const payList: IPay[] = [
  {
    id: 1,
    title: '도톤보리',
    type: '교통',
    day: '1',
    price: 1000,
    region: '',
    memo: '',
  },
  {
    id: 2,
    title: '도톤보리',
    type: '교통',
    day: '1',
    price: 1000,
    region: '',
    memo: '',
  },
];
