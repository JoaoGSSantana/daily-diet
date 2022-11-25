import { useEffect, useState } from "react";
import { Avatar, BorderImage, Container, Logo } from "./styles";
import * as ImagePicker from "expo-image-picker";

import logo from "@assets/logo.png";

import { saveImage } from "@storage/image/saveImage";
import { getImage } from "@storage/image/getImage";

export function HomeHeader() {
  const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      saveImage(result.uri);
    }
  };

  async function fetchImage() {
    setImage(await getImage());
  }
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Container onPress={pickImage}>
      <Logo source={logo} />
      <BorderImage>{image && <Avatar source={{ uri: image }} />}</BorderImage>
    </Container>
  );
}
