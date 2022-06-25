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
	 *customFontColor: Color personalizado para el fondo, se debe enviar en las props
	 */
	customFontColor?: string;
}

/**
 * Label UI component for user interaction
 */
export const MyLabel = ({
	label = "No Label",
	size = "normal",
	allCaps = false,
	color = "primary",
	customFontColor,
}: MyLabelProps) => {
	return (
		<span className={`label ${size} text-${color}`} style={{ color: customFontColor }}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
