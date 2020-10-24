import React from "react";
import { TweetType } from "../../../types";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import moment from "moment";
import Footer from "./Footer";

export type MainContainerProps = { tweet: TweetType };

const MainContainer = ({ tweet }: MainContainerProps) => (
    <View>
        <View style={styles.tweetHeader}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {tweet.user.name}
            </Text>
            <Text style={{ color: Colors.light.secondaryText }}>
                {" · "}@{tweet.user.username}
                {" · "}
                {moment(new Date(tweet.createdAt)).fromNow(true)}
            </Text>
        </View>
        <View>
            <Text>{tweet.content}</Text>
        </View>
        {!!tweet.image && (
            <View>
                <Image source={{ uri: tweet.image }} style={{width:20,height:20}} />
            </View>
        )}
        <Footer tweet={tweet} />
    </View>
);

export default MainContainer;

const styles = StyleSheet.create({
    tweetHeader: {
        flexDirection: "row",
        paddingBottom: 5,
    },
});
