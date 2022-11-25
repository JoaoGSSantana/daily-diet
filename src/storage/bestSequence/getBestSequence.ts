import AsyncStorage from "@react-native-async-storage/async-storage";

import { BEST_SEQUENCE } from "@storage/storageConfig";

export async function getBestSequence() {
  try {
    const storage = await AsyncStorage.getItem(BEST_SEQUENCE);

    const bestSequence: number = storage ? JSON.parse(storage) : 0;

    return bestSequence;
  } catch (error) {
    throw error;
  }
}
