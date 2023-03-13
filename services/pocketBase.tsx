import PocketBase from 'pocketbase';

export const getRecords = async (collection: string, pb: PocketBase) => {
  const records: any = (await pb.collection(`${collection}`).getList()).items;
  return records;
};
