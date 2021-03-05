import React, { useState } from "react";

export function Semaforo() {
	let [luz, encenderLuz] = useState("");

	let rojaAgregado = "";
	let amarillaAgregado = "";
	let verdeAgregado = "";

	if (luz == "roja") {
		rojaAgregado = "seleccionado";
	} else if (luz == "amarilla") {
		amarillaAgregado = "seleccionado";
	} else if (luz == "verde") {
		verdeAgregado = "seleccionado";
	}

	return (
		<div className="principal">
			<div className="parteSuperior"></div>
			<div className="cuerpoSemaforo">
				<div
					className={"luzRoja " + rojaAgregado}
					onClick={() => encenderLuz("roja")}></div>
				<div
					className={"luzAmarilla " + amarillaAgregado}
					onClick={() => encenderLuz("amarilla")}></div>
				<div
					className={"luzVerde " + verdeAgregado}
					onClick={() => encenderLuz("verde")}></div>
			</div>
		</div>
	);
}
