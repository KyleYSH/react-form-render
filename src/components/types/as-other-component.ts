import React from "react";

import { BaseFieldProps } from "./base-field-props";

export declare type AsOtherComponent<T extends BaseFieldProps = BaseFieldProps> =  Partial<(props: T) => React.ReactNode>;