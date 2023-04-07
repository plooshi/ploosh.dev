import { Image, Spacer, Text } from "@nextui-org/react";

export default function About() {
    return (
        <center>
            <div className="about">
                <div className="title-box">
                <Image src="https://avatars.githubusercontent.com/u/56302322" width="40px"></Image>
                <Spacer />
                <Text h2 id="title">Hey, I'm Ploosh!</Text>
                </div>
                <Text h4>An independent developer from the USA. My name is Tom, and I go by he/they.
                I enjoy writing C, so most of my code is written in that. I have kind of a nerdy personality.</Text>
            </div>
        </center>
    )
}