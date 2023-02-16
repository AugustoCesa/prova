import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import {FormuScreen} from "../screens/FormuScreen"

const Stack = createNativeStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={MaterialBottomTabNavigation}
                />
                <Stack.Screen
                    name="Form"
                    component={FormuScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const MaterialBottomTabNavigation = () => {
    return (
        <MaterialBottomTab.Navigator>
            <MaterialBottomTab.Screen
                name="Home"
                component={HomeScreen}
                opitions={{
                    tabBarIcon: "home"
                }}
            />

            <MaterialBottomTab.Screen
                name="Form"
                component={FormuScreen}
                opitions={{
                    tabBarIcon: "home"
                }}
            />

        </MaterialBottomTab.Navigator>
    );
};


