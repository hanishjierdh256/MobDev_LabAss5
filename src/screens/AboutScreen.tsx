import React from "react";
import {
    View, Text, StyleSheet
} from "react-native";
import MainLayout from "../layouts/MainLayout";

function AboutScreen(): React.JSX.Element {
    return (
        <MainLayout>
            <View>
                <Text>Navigation and Routing</Text>
                <Text>Hanish Jierdh</Text>
                <Text>Nov 18, 2024</Text>
            </View>
        </MainLayout>
    );
}
const styles = StyleSheet.create({
});

export default AboutScreen;
