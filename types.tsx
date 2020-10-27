export type RootStackParamList = {
    Root: undefined;
    NewTweet: undefined;
    NotFound: undefined;
};

export type BottomTabParamList = {
    Home: undefined;
    Notification: undefined;
    Search: undefined;
    Message: undefined;
};

export type HomeNavigatorParamList = {
    HomeScreen: undefined;
};

export type TabTwoParamList = {
    TabTwoScreen: undefined;
};

export type UserType = {
    id: string;
    username: string;
    name: string;
    image: string;
};

export type TweetType = {
    id: string;
    user: UserType;
    createdAt: string;
    content: string;
    image: string;
    numberOfComment: number;
    numberOfRetweet: number;
    numberOfLike: number;
};
