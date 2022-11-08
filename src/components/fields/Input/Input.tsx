import React from "react";
import { Input as AntdInput } from "antd";
import { AsOtherComponent, BaseFieldProps } from "../../types";

export declare type SchemaConfig = {
    type: "input",
    props: Props
}

export declare type Props = BaseFieldProps & AsOtherComponent

const Input: React.FC<Props> = () => {
    return <AntdInput />
}

export default Input;