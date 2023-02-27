import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Formulario from "../screens/FormularioScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { Ionicons } from '@expo/vector-icons';
import IMCTable, { AvaliaScreen } from "../screens/AvaliaScreen";

const Stack = createNativeStackNavigator();

const MaterialBottomTab = createMaterialBottomTabNavigator();

export const RootNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={MaterialBottomTabNavigation}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Formulario"
                    component={Formulario}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Avalia"
                    component={IMCTable}
                    options={{
                        headerShown: false,
                    }}
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

                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={100} />
                        }
                        return <Ionicons name="home-outline" size={size} color={100} />
                    }

                }}
            />

            <MaterialBottomTab.Screen
                name="Formulario"
                component={Formulario}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="person" size={size} color={100} />
                        }
                        return <Ionicons name="person-outline" size={size} color={100} />
                    }
                }}
            />


            <MaterialBottomTab.Screen
                name="Avaliar"
                component={IMCTable}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="happy" size={size} color={100} />
                        }
                        return <Ionicons name="happy-outline" size={size} color={100} />
                    }
                }}
            />



        </MaterialBottomTab.Navigator>
    );


};

