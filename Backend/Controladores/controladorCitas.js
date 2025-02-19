import modeloCita from "../Modelos/modeloCita.js";

const controladorCitas = {
	crearCita: async (req, res) => {
		try {
			console.log("Datos recibidos:", req.body);
			const appointment = new modeloCita(req.body);
			await appointment.save();
			res.status(201).send(appointment);
		} catch (error) {
			res.status(400).send(error);
		}
	}
};

export default controladorCitas;
