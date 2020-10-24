import React from "react";
import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";
import { View } from "../../Themed";

export type LeftContainerProps = {
    user: UserType;
};

const LeftContainer = ({ user }: LeftContainerProps) => (
    <View>
        <ProfilePicture image={user.image} size={60} />
    </View>
);

export default LeftContainer;
