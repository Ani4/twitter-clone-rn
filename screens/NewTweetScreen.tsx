import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
    Directions,
    TextInput,
    TouchableOpacity,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePicture from "../components/ProfilePicture";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export type NewTweetScreenProps = {};
const NewTweetScreen = ({}: NewTweetScreenProps) => {
    const [tweet, setTweet] = React.useState("");
    const [imgUrl, setImgUrl] = React.useState("");
    const postTweet = () => {
        console.log({ tweet, imgUrl });
    };
    const nav = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Fontisto
                    name="close-a"
                    size={20}
                    color={Colors.light.tint}
                    onPress={nav.goBack}
                />
                <TouchableOpacity activeOpacity={0.8} onPress={postTweet}>
                    <Text style={styles.tweet}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <ProfilePicture image="https://pbs.twimg.com/profile_images/1311342687581138945/VRVIsJIv_200x200.jpg" />
                <View style={styles.textField}>
                    <TextInput
                        value={tweet}
                        placeholder="What's happening"
                        style={styles.inputTweet}
                        numberOfLines={3}
                        multiline={true}
                        onChangeText={setTweet}
                    />
                    <TextInput
                        style={styles.inputImage}
                        placeholder="Image Upload here"
                        value={imgUrl}
                        onChangeText={setImgUrl}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NewTweetScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",

        backgroundColor: "white",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        padding: 15,
    },
    tweet: {
        backgroundColor: Colors.light.tint,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 20,
    },
    contentContainer: { padding: 15, flexDirection: "row", flex: 1 },
    textField: { marginHorizontal: 10 },
    inputTweet: {
        height: 100,
        maxHeight: 300,
        fontSize: 20,
        alignItems: "flex-start",
    },
    imputImage: {},
});
