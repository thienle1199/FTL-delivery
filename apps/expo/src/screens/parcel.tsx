import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_app";

type Props = NativeStackScreenProps<RootStackParamList>;

export const Parcel = ({ navigation }: Props) => {
  return (
    <View className="h-full bg-white p-6">
      <Text className="text-2xl font-bold">
        Provide more details about your parcel.
      </Text>

      <Text>Height (cm)</Text>
      <TextInput keyboardType="number-pad" className="bg-gray-100 p-2" />

      <Text>Width (cm)</Text>
      <TextInput keyboardType="number-pad" className="bg-gray-100 p-2" />

      <Text>Weight (kg)</Text>
      <TextInput keyboardType="number-pad" className="bg-gray-100 p-2" />

      <Text>Quantity</Text>
      <TextInput keyboardType="number-pad" className="bg-gray-100 p-2" />
      <Text>Additional Note</Text>
      <TextInput multiline numberOfLines={4} className="bg-gray-100 p-2" />

      <Button
        title="Next"
        onPress={() => navigation.navigate("PackageImage")}
      />
    </View>
  );
};
