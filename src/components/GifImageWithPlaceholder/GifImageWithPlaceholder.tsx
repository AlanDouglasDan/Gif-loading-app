import { FC } from "react";
import { View, Image } from "react-native";

import { useGifImageWithPlaceholderLogic } from "./GifImageWithPlaceholderLogic";
import styles from "./GifImageWithPlaceholder.styles";

interface GifImageWithPlaceholderProps {
  gifUri: string;
  previewGifUri: string;
}

const GifImageWithPlaceholder: FC<GifImageWithPlaceholderProps> = ({
  gifUri,
  previewGifUri,
}) => {
  const { isGifLoaded, setIsGifLoaded } = useGifImageWithPlaceholderLogic({
    gifUri,
  });

  return (
    <View>
      {/* Main GIF */}
      <Image
        source={{ uri: gifUri }}
        style={styles.gifImage}
        resizeMode="cover"
        onLoad={() => setIsGifLoaded(true)}
        testID="original-gif-image"
      />

      {/* Preview Image, shown until main GIF is loaded */}
      {!isGifLoaded && (
        <Image
          source={{ uri: previewGifUri }}
          style={[styles.gifImage, styles.previewImage]}
          resizeMode="cover"
          testID="preview-image"
        />
      )}
    </View>
  );
};

export default GifImageWithPlaceholder;
