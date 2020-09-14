import { get } from '../Services/networkProvider';

export const getToys = async () => {
  const res = await get('goods');
  return res
};