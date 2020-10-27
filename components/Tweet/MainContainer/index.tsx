import React from "react";
import { TweetType } from "../../../types";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../../../constants/Colors";
import moment from "moment";
import Footer from "./Footer";
import { Entypo } from "@expo/vector-icons";

export type MainContainerProps = { tweet: TweetType };

const MainContainer = ({ tweet }: MainContainerProps) => (
    <View>
        <View style={styles.tweetHeader}>
            <Text style={styles.username} numberOfLines={1}>
                {tweet.user.name}
            </Text>
            <Text style={styles.createdAt} numberOfLines={1}>
                @{tweet.user.username}
            </Text>

            <Text style={styles.createdAt} numberOfLines={1}>
                {" · "}
                {moment(new Date(tweet.createdAt)).fromNow(true)}
                <TouchableOpacity>
                    <Entypo
                        name="chevron-down"
                        size={16}
                        color={Colors.light.secondaryText}
                    />
                </TouchableOpacity>
            </Text>
        </View>
        <View>
            <Text style={styles.content} numberOfLines={6}>
                {tweet.content}
            </Text>
            {tweet.image ? (
                <Image
                    source={{ uri: tweet.user.image }}
                    style={styles.image}
                />
            ) : null}
        </View>

        <Footer tweet={tweet} />
    </View>
);

export default MainContainer;

const styles = StyleSheet.create({
    tweetHeader: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 5,
        justifyContent: "space-between",
        alignItems: "center",
    },
    username: {
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
    },
    createdAt: {
        color: Colors.light.secondaryText,
    },
    content: {
        marginTop: 5,
        lineHeight: 16,
    },
    image: {
        marginVertical: 10,
        flex: 1,
        height: 200,
        resizeMode: "cover",
        borderRadius: 10,
    },
});
