import { FC } from "react";
import { Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";

import { RandomGifScreen, GifDetailsScreen } from "../screens";
import { GifObject } from "../core/types";

export type StackNavParams = {
  "Random Gif": undefined;
  "Gif Details": { gifObject: GifObject };
};

const Stack = createNativeStackNavigator<StackNavParams>();

const StackNav: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Random Gif"
        component={RandomGifScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="Gif Details"
        component={GifDetailsScreen}
        options={({ navigation }) => ({
          headerTitleStyle: { color: "#333", fontSize: 18 },
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesome name="angle-left" size={30} color={"#333"} />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
