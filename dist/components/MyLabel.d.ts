/// <reference types="react" />
import "./myLabel.css";
export interface MyLabelProps {
    /**
     *Configure el texto de la etiqueta
     */
    label: string;
    /**
     *Seleccione el tamaño del label
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     *true: Capitaliza toda la palabra
     */
    allCaps?: boolean;
    /**
     *color: Primary or Secondary or tertiary
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     *customFontColor: Color personalizado para el texto, se debe enviar en las props
     */
    customFontColor?: string;
    /**
     *backgroundColor: Color personalizado para el fondo, se debe enviar en las props
     */
    backgroundColor?: string;
}
/**
 * Label UI component for user interaction
 */
export declare const MyLabel: ({ label, size, allCaps, color, customFontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
