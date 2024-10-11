import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Keyboard, Switch } from 'react-native';
import { AppContext } from '../AppContext';

export default function HomeScreen({ navigation }) {
    const { isDarkTheme, setIsDarkTheme, transactions, setTransactions } = useContext(AppContext);
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState('');

    const handleDeposit = () => {
        if (amount) {
            const newBalance = balance + parseFloat(amount);
            setBalance(newBalance);
            setTransactions([...transactions, { type: 'Пополнение', amount: parseFloat(amount), date: new Date().toLocaleString() }]);
            setAmount('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Ошибка', 'Введите сумму для пополнения.');
        }
    };

    const handleWithdraw = () => {
        if (!amount) {
            Alert.alert('Ошибка', 'Введите сумму для снятия.');
            return;
        }
        const withdrawalAmount = parseFloat(amount);
        if (balance >= withdrawalAmount) {
            const newBalance = balance - withdrawalAmount;
            setBalance(newBalance);
            setTransactions([...transactions, { type: 'Снятие', amount: withdrawalAmount, date: new Date().toLocaleString() }]);
            setAmount('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Ошибка', 'Недостаточно средств.');
        }
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
            <View style={styles.themeSwitchContainer}>
                <Text style={[styles.themeText, isDarkTheme ? styles.darkText : styles.lightText]}>{isDarkTheme ? 'Темная тема' : 'Светлая тема'}</Text>
                <Switch value={isDarkTheme} onValueChange={toggleTheme} />
            </View>
            <View style={styles.balanceContainer}>
                <Text style={styles.title}>Ваш счет</Text>
                <Text style={styles.balanceText}>
                    {balance.toFixed(1)} Тенге
                </Text>
                <TextInput
                    style={[styles.input, isDarkTheme ? styles.darkInput : styles.lightInput]}
                    placeholder="Введите сумму"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.depositButton]} onPress={handleDeposit}>
                        <Text style={styles.buttonText}>Пополнить</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.withdrawButton]} onPress={handleWithdraw}>
                        <Text style={styles.buttonText}>Снять</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.navigationContainer}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('TransactionHistory')}>
                    <Text style={styles.navButtonText}>История транзакций</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('UserInfo')}>
                    <Text style={styles.navButtonText}>Информация о пользователе</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Help')}>
                    <Text style={styles.navButtonText}>Помощь</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    lightContainer: {
        backgroundColor: '#f8f9fa',
    },
    darkContainer: {
        backgroundColor: '#212529',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#212529',
    },
    balance: {
        fontSize: 26,
        marginBottom: 20,
    },
    balanceDarkText: {
        color: '#f8f9fa',
    },
    balanceLightText: {
        color: '#212529',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    lightInput: {
        backgroundColor: '#fff',
    },
    darkInput: {
        backgroundColor: '#495057',
        color: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
        elevation: 3,
    },
    depositButton: {
        backgroundColor: '#28a745', // Зеленая кнопка
    },
    withdrawButton: {
        backgroundColor: '#dc3545', // Красная кнопка для снятия
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    navigationContainer: {
        marginTop: 20,
        width: '100%',
    },
    navButton: {
        backgroundColor: '#007bff', // Синяя кнопка для навигации
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        elevation: 2,
    },
    navButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    balanceContainer: {
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
    themeSwitchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    themeSwitchText: {
        color: '#212529',
    },
    themeSwitch: {
        width: 50,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ccc',
        position: 'relative',
    },
    themeSwitchActive: {
        backgroundColor: '#007bff',
    },
    themeSwitchDot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 5,
        left: 5,
    },
});