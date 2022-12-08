export const mainColor = '#07337c';

export const dayColors = (dayColor: string) => {
  return dayColor === 'green'
    ? 'bg-green-200'
    : dayColor === 'red'
    ? 'bg-red-200'
    : dayColor === 'yellow'
    ? 'bg-yellow-200'
    : dayColor === 'blue'
    ? 'bg-blue-200'
    : dayColor === 'orange'
    ? 'bg-orange-200'
    : 'bg-gray-200';
};

export const regionColors = (region: string) => {
  return region === '오사카'
    ? 'bg-red-200'
    : region === '고베'
    ? 'bg-sky-200'
    : region === '교토'
    ? 'bg-yellow-200'
    : region === '유니버셜 스튜디오'
    ? 'bg-green-200'
    : 'bg-white';
};
