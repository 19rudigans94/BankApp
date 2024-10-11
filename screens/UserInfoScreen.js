import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AppContext } from '../AppContext'; 

export default function UserInfoScreen() {
    const { isDarkTheme } = useContext(AppContext); 

    return (
        <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
            <Image
                style={styles.avatar}
                source={require('../logo.png')}
            />
            <Text style={styles.title}>Информация о пользователе</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Имя: <Text style={styles.infoValue}>Иван Иванов</Text></Text>
                <Text style={styles.infoText}>Почта: <Text style={styles.infoValue}>ivan@example.com</Text></Text>
                <Text style={styles.infoText}>Телефон: <Text style={styles.infoValue}>+7 (999) 123-45-67</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#007bff',
        marginBottom: 20,
    },
    darkContainer: {
        backgroundColor: '#343a40', 
    },
    lightContainer: {
        backgroundColor: '#f5f5f5', 
    },
    infoContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        maxWidth: 400,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 5,
    },
    infoValue: {
        fontWeight: 'bold',
        color: '#007bff',
    },
});