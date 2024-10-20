import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../home/home";
import { Calendar } from "../calendar/calendar";
import { Profile } from "../profile/profile";
import icon from "../../constants/icon";

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.home}
                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.calender}
                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.profile}
                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
