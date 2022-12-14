import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Events from '../Screens/Events';
import LostItems from '../Screens/LostItems';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Lost from '../Screens/Lost';
import Found from '../Screens/Found';
import BottomTabNavigator from './TabNavigator';
import Announcements from '../Screens/Announcements';
import ItemDetails from '../Screens/ItemDetails';
import Chatting from '../Screens/Chatting';
import EventDetails from '../Screens/EventDetails';
import AnnouncementDetails from '../Screens/AnnouncementDetails';
import EventAdd from '../Screens/EventAdd';
import AnnouncementAdd from '../Screens/AnnouncementAdd';
import LostItemAdd from '../Screens/LostItemAdd';
import FoundItemAdd from '../Screens/FoundItemAdd';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/Screen4';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Screen1" component={Screen1} />
         <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="LostItems" component={LostItems} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="EventAdd" component={EventAdd} />
        <Stack.Screen name="EventDetails" component={EventDetails} />       
        <Stack.Screen name="Announcements" component={Announcements}/>
        <Stack.Screen name="AnnouncementDetails" component={AnnouncementDetails}/>
        <Stack.Screen name="AnnouncementAdd" component={AnnouncementAdd}/>
        <Stack.Screen name="Lost" component={Lost}/>
        <Stack.Screen name="LostItemAdd" component={LostItemAdd}/>
        <Stack.Screen name="FoundItemAdd" component={FoundItemAdd}/>
        <Stack.Screen name="Found" component={Found} options={{ animation: 'none' }}/>
        <Stack.Screen name="ItemDetails" component={ItemDetails}/> 
        <Stack.Screen name="Chat" component={BottomTabNavigator} />
        <Stack.Screen name="Chatting" component={Chatting}/>
        <Stack.Screen name="Profile" component={BottomTabNavigator}/> 
      </Stack.Navigator>
    );
  }

export default StackNavigator;