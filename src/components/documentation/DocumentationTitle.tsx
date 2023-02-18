import ExtendedLink from "@/components/global/extended-link/ExtendedLink";
import { PropsWithChildren } from "react";

interface DocumentationTitleProps extends PropsWithChildren {
    id: string;
}

export default function DocumentationTitle(props: DocumentationTitleProps) {
    return (
        <h4 className="text-xl font-bold" id={props.id}>
            <ExtendedLink href={{ hash: props.id }} prefetch={false}>
                {props.children}
            </ExtendedLink>
        </h4>
    );
}
