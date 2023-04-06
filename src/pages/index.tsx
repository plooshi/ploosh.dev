import Header from "@/components/header"
import Socials from "@/components/socials"
import About from "@/components/about"
import { Spacer } from "@nextui-org/react"
import Projects from "@/components/projects"

export default function Home() {
    return (
        <>
        <Header />
        <div className="body">
            <Spacer y={1} />
            <About />
            <Spacer y={1} />
            <Projects />
            <Spacer y={1} />
            <Socials />
        </div>
        </>
    )
}