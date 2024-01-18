import { NavigationContainer } from "@react-navigation/native";
import Feed from "./screens/tabScreens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TweetDetailScreen from "./screens/homeStack/TweetDetailsScreen";

//stack 

const HomeStack = createNativeStackNavigator();
//tab buttom 
function HomeStackGroup(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Feed" component={Feed}/>
            <HomeStack.Screen name="TweetDetailScreen" component={TweetDetailScreen}/>
        </HomeStack.Navigator>
    )
}
const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            // headerTitleAlign: "center",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "HomeStackGroup") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "ios-settings-sharp";
              } else if (route.name === "Notifications") {
                iconName = focused ? "ios-notifications" : "notifications-outline";
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#1DA1F2",
            tabBarInactiveTintColor: "gray",
          })}
        >
            <Tab.Screen name="HomeStackGroup" component={HomeStackGroup}
             options={{headerShown:false,tabBarLabel:"@redIndian"}}></Tab.Screen>
            <Tab.Screen name="Notifications" component={Notifications}></Tab.Screen>
            <Tab.Screen name="Settings" component={Settings}></Tab.Screen> 
        </Tab.Navigator>   
    )
}
export default function Navigation(){
    return(<NavigationContainer>
        <TabGroup/>
    </NavigationContainer>)
}





























