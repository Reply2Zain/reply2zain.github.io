import {SvgIcon} from "../../common/SvgIcon";

interface SocialLinkProps {
    href: string;
    src: string;
}

const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={src}
            aria-label={src}
            style={{marginRight:'25px'}}
        >
            <SvgIcon src={src} width="25px" height="25px" />
        </a>
    );
};

export const SocialButtons = () => {
    return (
        <>
            <SocialLink
                href="https://github.com/reply2zain"
                src="github.svg"
            />
            <SocialLink
                href="https://www.linkedin.com/in/zain-aaban/"
                src="linkedin.svg"
            />
            <SocialLink
                href="https://www.keepandshare.com/doc18/22721/zain-aaban-resume-pdf-53k?dn=y&dnad=y"
                src="resume.svg"
            />
            {/*<SocialLink*/}
            {/*    href="https://twitter.com/Adrinlolx"*/}
            {/*    src="twitter.svg"*/}
            {/*/>*/}
            {/*<SocialLink*/}
            {/*    href="https://medium.com/@lashakakabadze/"*/}
            {/*    src="medium.svg"*/}
            {/*/>*/}
        </>
    )
}

