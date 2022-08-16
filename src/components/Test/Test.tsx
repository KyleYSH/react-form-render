import React from "react";

export declare type Props = {
    content: string;
}

const Test: React.FC<Props> = (props) => {
    return <>
        {props.content}
    </>
}

export default Test;