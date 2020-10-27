import {
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { View } from "../Themed";
export type NewTweetButtonProps = {};

function NewTweetButton({}: NewTweetButtonProps) {
    const navigation = useNavigation();
    const newTweet = () => {
        navigation.navigate("NewTweet");
    };
    return (
        <View style={styles.newTweet}>
            <TouchableOpacity activeOpacity={0.6} onPress={newTweet}>
                <View style={styles.forPlus}>
                    <FontAwesome5 name="plus" size={15} color="white" />
                </View>

                <MaterialCommunityIcons
                    name="feather"
                    size={40}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    newTweet: {
        backgroundColor: Colors.light.tint,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        right: 20,
        bottom: 20,
        borderRadius: 40,
        height: 60,
        width: 60,
        // padding: 12,
    },
    forPlus: {
        position: "absolute",
        backgroundColor: Colors.light.tint,
        bottom: 20,
    },
});
export default NewTweetButton;
