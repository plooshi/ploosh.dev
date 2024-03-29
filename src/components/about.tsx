import { Avatar, Spacer, Text } from "@nextui-org/react";

export default function About() {
    return (
        <center>
            <div className="about">
                <div className="title-box">
                    <Avatar src="https://avatars.githubusercontent.com/u/56302322" width="40px" />
                    <Spacer x={1} />
                    <Text h2 id="title">Hey, I'm Ploosh!</Text>
                </div>
                <Spacer y={1} />
                <Text h4 id="about_text">I am a developer from the USA. My name is Tom, and I go by he/him.
                I enjoy writing C++, so most of my code is written in that.</Text>
            </div>
        </center>
    )
}
