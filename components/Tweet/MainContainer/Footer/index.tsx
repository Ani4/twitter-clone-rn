import {
    EvilIcons,
    Feather,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../../constants/Colors";
import tweets from "../../../../data/tweets";
import { TweetType } from "../../../../types";
import { Text, View } from "../../../Themed";

export type FooterProps = { tweet: TweetType };

const Footer = ({ tweet }: FooterProps) => {
    return (
        <View style={styles.iconGroup}>
            <TouchableOpacity>
                <View style={styles.iconInfo}>
                    <Feather
                        name="message-circle"
                        size={16}
                        color={Colors.light.secondaryText}
                    />
                    <Text
                        style={{
                            color: Colors.light.secondaryText,
                            paddingLeft: 2,
                        }}
                    >
                        {tweet.numberOfComment}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.iconInfo}>
                    <MaterialCommunityIcons
                        name="twitter-retweet"
                        size={20}
                        color={Colors.light.secondaryText}
                    />
                    <Text
                        style={{
                            color: Colors.light.secondaryText,
                            paddingLeft: 2,
                        }}
                    >
                        {tweet.numberOfRetweet}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.iconInfo}>
                    <MaterialCommunityIcons
                        name="heart-outline"
                        size={16}
                        color={Colors.light.secondaryText}
                    />
                    <Text
                        style={{
                            color: Colors.light.secondaryText,
                            paddingLeft: 2,
                        }}
                    >
                        {tweet.numberOfLike}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.iconInfo}>
                    <SimpleLineIcons
                        name="share"
                        size={16}
                        color={Colors.light.secondaryText}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    iconGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        color: Colors.light.secondaryText,
        paddingTop: 3,
        paddingRight: 10,
    },
    iconInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        color: Colors.light.secondaryText,
        alignItems: "center",
    },
});
