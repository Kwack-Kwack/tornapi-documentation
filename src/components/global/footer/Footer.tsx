import { PropsWithChildren } from "react";
import Link from "next/link";

function DiscordLink(props: PropsWithChildren) {
    return (
        <Link href="https://discord.gg/2wb7GKN" target="_blank" className="text-accent link">
            {props.children}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="fixed bottom-0 bg-base-300 available-width text-center p-1">
            <span className="text-primary-content">
                Brought to you by <DiscordLink>the TornAPI Discord</DiscordLink>.
            </span>
        </footer>
    );
}
