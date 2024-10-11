import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppContext } from '../AppContext';

export default function TransactionHistoryScreen() {
    const { transactions, isDarkTheme } = useContext(AppContext);

    const renderItem = ({ item, index }) => (
        <View style={[styles.transactionItem, index % 2 === 1 && styles.oddList]}>
            <Text style={[styles.transactionText, isDarkTheme ? styles.darkText : styles.lightText]}>
                {item.type}: {item.amount} Тенге Время: {item.date}
            </Text>
        </View>
    );

    return (
        <View style={[styles.container, isDarkTheme ? styles.darkContainer : styles.lightContainer]}>
            <Text style={[styles.title, isDarkTheme ? styles.darkText : styles.lightText]}>История транзакций</Text>
            <FlatList
                data={transactions}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    transactionItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    transactionText: {
        fontSize: 18,
    },
    darkText: {
        color: '#fff',
    },
    lightText: {
        color: '#000',
    },
    list: {
        paddingBottom: 20,
    },
    oddList: {
        backgroundColor: '#f5f5f5',
    },
    darkContainer: {
        backgroundColor: '#343a40',
    },
    lightContainer: {
        backgroundColor: '#ffffff',
    },
});