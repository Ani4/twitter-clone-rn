import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import Tweet from "../components/Tweet";
import tweets from "../data/tweets";

export type HomeScreenProps = {};
const HomeScreen = ({}: HomeScreenProps) => (
    <ScrollView>
        <Tweet tweet={tweets[0]} />
    </ScrollView>
);

export default HomeScreen;
const styles = StyleSheet.create({});
