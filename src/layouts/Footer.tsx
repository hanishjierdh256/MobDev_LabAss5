import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { ReactNode } from 'react';

function Footer(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>This is the footer.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Footer;