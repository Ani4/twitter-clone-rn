import React from "react";
import { View, FlatList } from "react-native";
import tweets from "../../data/tweets";
import Tweet from "../Tweet";

export type FeedProps = {};
const Feed = ({}: FeedProps) => (
    <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
    />
);

export default Feed;
