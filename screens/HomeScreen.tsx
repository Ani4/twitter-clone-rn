import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";

import { Text, View } from "../components/Themed";

export type HomeScreenProps = {};
const HomeScreen = ({}: HomeScreenProps) => (
    <>
        <View>
            <Feed />
        </View>
        <NewTweetButton />
    </>
);

export default HomeScreen;
const styles = StyleSheet.create({});
