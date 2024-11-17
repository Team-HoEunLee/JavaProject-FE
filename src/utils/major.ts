import { UserMajorValues } from '../constants/index';

const majorToNumberMap: { [key: string]: number } = UserMajorValues.reduce(
  (acc, major, index) => {
    acc[major] = index + 1;
    return acc;
  },
  {} as { [key: string]: number },
);

export default majorToNumberMap;
