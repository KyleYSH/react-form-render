import React from "react";
import styles from "./Test.module.scss";

export declare type Props = {
    content: string;
}

const Test: React.FC<Props> = (props) => {

    console.log("styles", styles)
    return <div className={styles.test}>
        {props.content}
    </div>
}

export default Test;