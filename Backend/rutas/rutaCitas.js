import { Router } from "express";
import controladorCitas from "../Controladores/controladorCitas.js";

const rutaCitas = Router();

rutaCitas.post("/appointments", controladorCitas.crearCita);

export default rutaCitas;
