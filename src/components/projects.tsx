import { Button, Link, Modal, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";

interface ProjectType {
    description: string;
    url: string;
}

var projects : Object = {
    "palera1n": {
        description: "iOS 15.x-16.x jailbreak for checkm8 devices (A8-A11). I write the patches needed to boot the device jailbroken.",
        url: "https://palera.in"
    },
    "Dyld64Patcher": {
        description: "WIP patcher for dyld (dynamic linker) on iOS. I write the patches & the patching framework.",
        url: "https://github.com/plooshi/Dyld64Patcher"
    },
    "plooshfinder": {
        description: "WIP patching framework for arm64, made from scratch by me.",
        url: "https://github.com/plooshi/plooshfinder"
    }
};

interface ProjectProps {
    name: string;
}

function Project(props: ProjectProps) {
    const [visible, setVisible] = useState(false);
    const openHandler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };

    var projName: string = props.name;
    var proj: ProjectType = projects[props.name as keyof Object] as any;

    return (
        <div className={projName}>
            <Button onPress={openHandler}>{projName}</Button>

            <Modal closeButton aria-labelledby={projName} open={visible} onClose={closeHandler}>
                <Modal.Header>
                    <Text h3 b id={projName}>{projName}</Text>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <Text h4>{proj.description}</Text>
                        <Spacer y={1} />
                        <Link target="_blank" className="project_link" href={proj.url}>
                            <Button>Open project</Button>
                        </Link>
                    </center>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default function Projects() {
    return (
        <center>
            <Text h3 id="projects_title">Projects</Text>
            <div className="projects">
                <Button.Group color="primary" bordered className="projects_group">
                    <Project name="palera1n" />
                    <Spacer x={1} />
                    <Project name="Dyld64Patcher" />
                    <Spacer x={1} />
                    <Project name="plooshfinder" />
                </Button.Group>
            </div>
        </center>
    )
}