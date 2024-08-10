import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class AppointmentService {
	private apiUrl = "http://localhost:3000/api/appointments"; // Cambia a la URL de tu backend

	constructor(private httpClient: HttpClient) {}

	createAppointment(appointment: any) {
		return this.httpClient.post(this.apiUrl, appointment);
	}
}
