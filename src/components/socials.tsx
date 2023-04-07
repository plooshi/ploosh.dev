import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faBrands from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { Spacer, Collapse } from '@nextui-org/react';

function getInnerIcon(event: React.MouseEvent): Element {
    var elem = event.currentTarget;
    var innerIcons = elem.getElementsByClassName("icon");
    if (innerIcons.length == 0) throw new TypeError("No inner icon!"); 
    if (innerIcons.length > 1) throw new TypeError("Too many inner icons!");
    // now that we know we have exactly a single icon, get it from the DOM
    var innerIcon = innerIcons[0];

    return innerIcon;
}
function enableBounce(event: React.MouseEvent): void {
    event.preventDefault();
    
    var innerIcon = getInnerIcon(event);
    innerIcon.classList.add("fa-bounce");
}

function disableBounce(event: React.MouseEvent): void {
    event.preventDefault();
    
    var innerIcon = getInnerIcon(event);
    innerIcon.classList.remove("fa-bounce");
}

interface SocialProps {
    url: string;
    name: string;
    icon: faBrands.IconDefinition;
}

function Social(props: SocialProps) {
    return (
        <Link target="_blank" className="social" href={props.url} onMouseEnter={enableBounce} onMouseLeave={disableBounce}>
            <FontAwesomeIcon className="icon" id={props.name} icon={props.icon} />
        </Link>
    )
}

export default function Socials() {
    return (
        <center>
            <Collapse title="Socials" css={{
                fontFamily: "monospace",
                width: "250px"
            }} bordered={true} borderWeight={"normal"}>
                <Spacer y={0.5} />
                <div className="socials">
                    <Social url="https://discord.com/users/716250356803174511" name="discord" icon={faBrands.faDiscord} />
                    <Spacer x={1} />
                    <Social url="https://github.com/plooshi" name="github" icon={faBrands.faGithub} />
                    <Spacer x={1} />
                    <Social url="https://twitter.com/ploosh_ptr" name="twitter" icon={faBrands.faTwitter} />
                    <Spacer x={1} />
                    <Social url="https://procursus.social/@ploosh" name="mastodon" icon={faBrands.faMastodon} />
                </div>
            </Collapse>
        </center>
    )
}