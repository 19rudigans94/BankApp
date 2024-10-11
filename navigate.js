import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HelpScreen from './screens/HelpScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import TransactionHistoryScreen from './screens/TransactionHistoryScreen'; 

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ваш счет' }} />
            <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Помощь' }} />
            <Stack.Screen name="UserInfo" component={UserInfoScreen} options={{ title: 'Информация о пользователе' }} />
            <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} options={{ title: 'История транзакций' }} />
        </Stack.Navigator>
    );
}