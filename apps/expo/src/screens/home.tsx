import React from "react";

import {
  Text,
  View,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_app";

interface ServiceItemProps extends TouchableOpacityProps {
  title: string;
  description: string;
}

type Props = NativeStackScreenProps<RootStackParamList>;

const ServiceItem = ({
  title,
  description,
  className,
  ...rest
}: ServiceItemProps) => {
  return (
    <TouchableOpacity
      className={`rounded-lg border-2 border-gray-500 p-4 ${className}`}
      {...rest}
    >
      <Text className="text-xl font-semibold">{title}</Text>
      <Text className="text-green-500">{description}</Text>
    </TouchableOpacity>
  );
};

export const HomeScreen = ({ navigation }: Props) => {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <View className="w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold">
          Hi <Text className="text-gray-400">{user?.fullName}</Text>
        </Text>
        <Text className="text-2xl">What are you sending today ?</Text>

        <View className="flex flex-row flex-wrap items-center">
          <ServiceItem
            className="mr-8"
            title="Food Delivery"
            description="(less than 10 kg)"
          />
          <ServiceItem
            className="mt-8"
            title="Parcel"
            description="(less than 10 kg)"
            onPress={() => navigation.navigate("Parcel")}
          />
          <ServiceItem title="Groceries" description="(less than 10 kg)" />
        </View>
      </View>
    </SafeAreaView>
  );
};
