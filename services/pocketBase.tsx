import PocketBase from 'pocketbase';

export const getRecords = async (collection: string, pb: PocketBase) => {
  const records: any = (await pb.collection(`${collection}`).getList()).items;
  if (records) {
    return records;
  } else return null;
};
