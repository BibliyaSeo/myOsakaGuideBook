interface IReservation {
  id: number;
  type: string;
  title: string;
  address: string;
  reservationTime: string;
  image: '';
  region: string;
  memo: string;
}

export const reservationList: IReservation[] = [
  {
    id: 1,
    type: '항공',
    title: '도톤보리',
    address: '',
    reservationTime: '',
    image: '',
    region: '',
    memo: '',
  },
  {
    id: 2,
    type: '숙소',
    title: '도톤보리2',
    address: '',
    reservationTime: '',
    image: '',
    region: '',
    memo: '',
  },
];
