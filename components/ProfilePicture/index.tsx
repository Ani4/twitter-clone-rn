import React, { ReactElement } from "react";
import { Image } from "react-native";

export type ProfilePictureProps = {
    size?: number;
    image?: string;
};

const ProfilePicture = ({
    image = "https://img.icons8.com/android/240/000000/user.png",
    size = 50,
}: ProfilePictureProps) => (
    <Image
        source={{ uri: image }}
        style={{ width: size, height: size, borderRadius: size }}
    />
);

export default ProfilePicture;
