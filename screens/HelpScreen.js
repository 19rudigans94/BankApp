import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../AppContext'; 

export default function HelpScreen() {
    const { isDarkTheme } = useContext(AppContext); 

    return (
        <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
            <Text style={styles.title}>Помощь</Text>
            <Text style={styles.instructions}>Рекомендации по использованию приложения:</Text>
            <Text style={styles.step}>1. Используйте кнопку <Text style={styles.highlight}>Пополнить</Text> для увеличения баланса.</Text>
            <Text style={styles.step}>2. Используйте кнопку <Text style={styles.highlight}>Снять</Text> для уменьшения баланса.</Text>
            <Text style={styles.step}>3. Для получения информации о вашем счете переходите на экран <Text style={styles.highlight}>Ваш счет</Text>.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    darkContainer: {
        backgroundColor: '#343a40', 
        color: '#fff',
    },
    lightContainer: {
        backgroundColor: '#f8f9fa', 
        color: '#212529',
    },
    instructions: {
        fontSize: 18,
        marginBottom: 15,
        color: '#495057',
    },
    step: {
        fontSize: 16,
        marginBottom: 10,
        color: '#212529',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#007bff',
    },
});
