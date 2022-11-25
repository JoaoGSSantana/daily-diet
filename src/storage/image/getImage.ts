import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGE_STORAGE } from "@storage/storageConfig";

export async function getImage() {
  try {
    const storage = await AsyncStorage.getItem(IMAGE_STORAGE);

    return storage ? storage : "";
  } catch (error) {
    throw error;
  }
}
