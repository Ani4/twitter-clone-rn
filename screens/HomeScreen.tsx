import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Feed from "../components/Feed";

import { Text, View } from "../components/Themed";

export type HomeScreenProps = {};
const HomeScreen = ({}: HomeScreenProps) => (
    <ScrollView>
        <Feed />
    </ScrollView>
);

export default HomeScreen;
const styles = StyleSheet.create({});
