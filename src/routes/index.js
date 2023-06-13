import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../pages/welcome";
import SignIn from "../pages/signin";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#38a69d"} barStyle={"light-content"} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Welcome}
          // * Essa atributo opcional "headerShown" serve para definirmos se vamos, ou não,
          //*  mostrar o header da navegação que irá ter o nome de acordo com o atributo "name".
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
