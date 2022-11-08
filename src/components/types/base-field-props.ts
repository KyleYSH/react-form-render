import { FieldPath, FieldPathValue, FieldValues } from "react-hook-form";


declare type RequiredProps<TFieldValues extends FieldValues = FieldValues, TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = Required<{
    name: TFieldName;
}>

declare type OptionalProps<TFieldValues extends FieldValues = FieldValues,
    TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TFieldValue extends FieldPathValue<TFieldValues, TFieldName> = FieldPathValue<TFieldValues, TFieldName>>
    = Partial<{
    defaultValue: TFieldValue
}>

declare type ModifiedBaseProps<TFieldValues extends FieldValues = FieldValues> = Partial<{}>

export declare type BaseFieldProps<TFieldValues extends FieldValues = FieldValues> = Readonly<
    RequiredProps<TFieldValues>> &
    OptionalProps<TFieldValues> &
    ModifiedBaseProps<TFieldValues>;