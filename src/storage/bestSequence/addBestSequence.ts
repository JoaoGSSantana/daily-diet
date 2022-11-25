import AsyncStorage from "@react-native-async-storage/async-storage";

import { BEST_SEQUENCE } from "@storage/storageConfig";

import { getBestSequence } from "./getBestSequence";

export async function addBestSequence(newBestSequence: number) {
  try {
    const storedBestSequence = await getBestSequence();

    if (storedBestSequence < newBestSequence) {
      const storage = JSON.stringify(newBestSequence);

      await AsyncStorage.setItem(BEST_SEQUENCE, storage);
    }
  } catch (error) {
    throw error;
  }
}
