interface IRestaurant {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
  time: string;
  googleMap: string;
  mainMenu: string;
  region: string;
  memo: string;
}

export const restaurantList: IRestaurant[] = [
  {
    id: 1,
    name: '라멘집',
    description: '오사카에서 제일 유명한 곳',
    address: '',
    image: '',
    time: '',
    googleMap: '',
    mainMenu: '',
    region: '',
    memo: '',
  },
  {
    id: 2,
    name: '돈부리집',
    description: '오사카에서 제일 유명한 곳',
    address: '',
    image: '',
    time: '',
    googleMap: '',
    mainMenu: '',
    region: '',
    memo: '',
  },
];
