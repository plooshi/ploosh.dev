import { Avatar, Spacer, Text } from "@nextui-org/react";

export default function About() {
    return (
        <center>
            <div className="about">
                <div className="title-box">
                    <Avatar src="https://avatars.githubusercontent.com/u/56302322" width="40px" />
                    <Spacer x={1} />
                    <Text h2 id="title">ploosh</Text>
                </div>
                <Spacer y={1} />
                <Text h4 id="about_text">C++ & x64 assembly dev</Text>
            </div>
        </center>
    )
}
