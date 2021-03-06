import React from "react";
import { View, Image, Text, StyleSheet, Platform } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Tutorial from "./src/Components/Tutorial/Tutorial";
import Search from "./src/Components/SearchScreen/Search";
import UdemyDetail from "./src/Components/UdemyDetail/Detail";
import Tips from "./src/Components/Tips/Tips";
import HeaderRight from "./src/Components/Header/Header";

const platform = Platform.OS;

const App = () => {
  return <AppContainer />;
};

const LearnNowApp = createStackNavigator({
  SearchScreen: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <View style={styles.HeaderView}>
          <Image
            styles={styles.HeaderImage}
            source={require("./assets/rocket.png")}
          />
          <Text style={styles.HeaderTitle}>LearnNow</Text>
        </View>
      ),
      headerLeft: null,
      headerRight: (
        <HeaderRight
          navigate={screen => NavigateToScreen(navigation, screen)}
        />
      )
    })
  },
  UdemyDetailScreen: {
    screen: UdemyDetail,
    navigationOptions: () => ({
      headerTransparent: platform === "ios" ? false : true,
      headerLeft: platform === "ios" ? undefined : null
    })
  },
  TipsScreen: {
    screen: Tips,
    navigationOptions: {
      title: "Tips"
    }
  }
});

const AppNavigator = createSwitchNavigator({
  Tutorial: Tutorial,
  LearnNowApp: LearnNowApp
});

const NavigateToScreen = (navigation, screen) => {
  navigation.navigate(screen);
};

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  HeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15
  },
  HeaderImage: {
    width: 100,
    height: 100
  },
  HeaderTitle: {
    fontSize: 19,
    fontWeight: "700",
    marginLeft: 10
  }
});

export default App;
