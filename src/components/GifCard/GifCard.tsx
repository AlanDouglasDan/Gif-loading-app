import { FC } from "react";
import { View, Text } from "react-native";

import { GifImageWithPlaceholder } from "../GifImageWithPlaceholder";
import { formatEmptyValue } from "../../core/utils";
import { GifObject } from "../../core/types";
import styles from "./GifCard.styles";

interface GifCardProps {
  gifObject: GifObject;
}

const GifCard: FC<GifCardProps> = ({ gifObject }) => {
  return (
    <View>
      <GifImageWithPlaceholder
        gifUri={gifObject.images.original.url}
        previewGifUri={gifObject.images.preview_gif.url}
      />

      {/* for comparing load times between optimized gif component and direct display of gif */}
      {/* <Image
        source={{ uri: gifObject.images.original.url }}
        style={styles.gifImage}
        resizeMode="cover"
      /> */}

      <View style={styles.flexedRow}>
        <View style={styles.flex}>
          <Text style={styles.header16}>
            {formatEmptyValue(gifObject.title)}
          </Text>

          <Text style={styles.text14}>{gifObject.url}</Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{gifObject.rating.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
};

export default GifCard;
