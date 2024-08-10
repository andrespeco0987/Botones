import express from "express";
import cors from "cors";
import rutaCitas from "./rutas/rutaCitas.js";

const servidor = express();

servidor.use(cors());
servidor.use(express.json());
servidor.use("/api", rutaCitas);

servidor.get("/", (solicitud, respuesta) => {
	respuesta.status(404).send("Oops! We can't find the page you're looking for.");
});

export default servidor;
