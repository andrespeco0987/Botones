import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AppointmentService } from "../../services/appointment.service";

@Component({
	selector: "app-botones-citas",
	standalone: true,
	imports: [FormsModule],
	templateUrl: "./botones-citas.component.html",
	styleUrl: "./botones-citas.component.css"
})
export class BotonesCitasComponent {
	appointment = {
		hogarTemporal: false,
		paseadorCanino: false,
		voluntariadoDeLimpieza: false,
		veterinaria: false,
		donar: false,
		fecha: ""
	};

	constructor(private appointmentService: AppointmentService) {}

	makeAppointment() {
		console.log("Datos del formulario:", this.appointment);
		this.appointmentService.createAppointment(this.appointment).subscribe(
			(response) => {
				console.log("Cita agendada exitosamente", response);
			},
			(error) => {
				console.error("Error al agendar la cita", error);
			}
		);
	}
}
