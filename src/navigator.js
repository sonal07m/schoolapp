import React from "react";
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import StudentDetail from "./components/studentDetail";


const TabNavigator = createStackNavigator({
  Home: {
    screen: createBottomTabNavigator({
      Student: Tab1,
      Teacher: Tab2,
      Class: Tab3,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;

          if (routeName === "Student") {
            iconName = "human-child";
          } else if (routeName === "Teacher") {
            iconName = "teach";
          } else if (routeName === "Class") {
            iconName = "google-classroom";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: "#01a699",
        inactiveTintColor: "gray",
      },
    }),
    navigationOptions: () => ({
      title: "SchoolApp",
    }),
  },
  StudentDetail: {
    screen: StudentDetail,
    navigationOptions: ({ navigation }) => ({
      title: "Student Detail",
      headerLeft: <View style={{ marginLeft: 10 }}><Icon name="ios-arrow-back" size={25} onPress={() => navigation.goBack()} /></View>
    }),
  },
});

export default createAppContainer(TabNavigator);
