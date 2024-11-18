import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';
import { ReactNode } from 'react';

function MainLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.footer}>{children}</View>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    footer: {
        padding: 20,
        bottom: 0,
        left: 0,

    }
});

export default MainLayout;