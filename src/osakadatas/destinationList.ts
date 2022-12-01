export interface IDestination {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
  time: string;
  googleMap: string;
  passType: string;
  day: string;
  region: string;
  memo: string;
}

export const destinationList: IDestination[] = [
  {
    id: 1,
    name: '도톤보리',
    description: '오사카에서 제일 유명한 곳',
    address: '오사카시 도톤보리',
    image: '',
    time: '24시간',
    googleMap: 'www.goole.com',
    passType: '',
    day: '1',
    region: '오사카',
    memo: '야호',
  },
  {
    id: 2,
    name: '오사카성',
    description: '오사카에서 제일 유명한 곳',
    address: '오사카시 오사카성',
    image: '',
    time: '오전 9시-오후 6시',
    googleMap: 'www.naver.com',
    passType: '주유패스',
    day: '1',
    region: '오사카',
    memo: '',
  },
];
