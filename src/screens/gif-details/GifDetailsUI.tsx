import React, { FC } from "react";
import { ScrollView } from "react-native";

import { GifCard } from "../../components/GifCard";
import { GifObject } from "../../core/types";
import styles from "./GifDetails.styles";

type GifDetailsUIProps = {
  gifObject: GifObject;
};

export const GifDetailsUI: FC<GifDetailsUIProps> = ({ gifObject }) => (
  <ScrollView
    style={styles.innerContainer}
    contentContainerStyle={styles.contentContainer}
  >
    <GifCard gifObject={gifObject} />
  </ScrollView>
);
