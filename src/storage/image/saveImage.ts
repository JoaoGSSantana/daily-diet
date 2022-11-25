import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGE_STORAGE } from "@storage/storageConfig";

export async function saveImage(uri: string) {
  try {
    await AsyncStorage.setItem(IMAGE_STORAGE, uri);
  } catch (error) {
    throw error;
  }
}
