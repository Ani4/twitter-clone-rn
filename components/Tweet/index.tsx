import React from "react";
import { TweetType } from "../../types";
import { View } from "../Themed";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import { StyleSheet } from "react-native";

export type TweetProps = {
    tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => (
    <View style={styles.tweetContainer}>
        <View style={styles.leftContainer}>
            <LeftContainer user={tweet.user} />
        </View>
        <View style={styles.mainContainer}>
            <MainContainer tweet={tweet} />
        </View>
    </View>
);

export default Tweet;

const styles = StyleSheet.create({
    tweetContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
    },
    leftContainer: { flex: 2 },
    mainContainer: { flex: 7 },
});
