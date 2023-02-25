import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";

import { HomeScreen } from "./screens/home";
import { SignInSignUpScreen } from "./screens/signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "./utils/cache";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Parcel } from "./screens/parcel";
import { Button, Text } from "react-native";
import { PackageImage } from "./screens/packageImage";

export type RootStackParamList = {
  Home: undefined;
  Parcel: undefined;
  PackageImage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SignedIn>
        <TRPCProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />

                <Stack.Group
                  screenOptions={{ presentation: "fullScreenModal" }}
                >
                  <Stack.Screen
                    options={({ navigation }) => ({
                      headerTitle: () => null,
                      headerRight: () => (
                        <Button
                          onPress={() => navigation.navigate("Home")}
                          title="Cancel Order"
                        />
                      ),
                      headerLeft: () => (
                        <Button
                          onPress={() => navigation.navigate("Home")}
                          title="Back"
                        />
                      ),
                    })}
                    name="Parcel"
                    component={Parcel}
                  />
                  <Stack.Screen
                    options={({ navigation }) => ({
                      headerTitle: () => null,
                      headerRight: () => (
                        <Button
                          onPress={() => navigation.navigate("Home")}
                          title="Cancel Order"
                        />
                      ),
                      headerLeft: () => (
                        <Button
                          onPress={() => navigation.navigate("Parcel")}
                          title="Back"
                        />
                      ),
                    })}
                    name="PackageImage"
                    component={PackageImage}
                  />
                </Stack.Group>
              </Stack.Navigator>
            </NavigationContainer>
            <StatusBar />
          </SafeAreaProvider>
        </TRPCProvider>
      </SignedIn>
      <SignedOut>
        <SignInSignUpScreen />
      </SignedOut>
    </ClerkProvider>
  );
};
