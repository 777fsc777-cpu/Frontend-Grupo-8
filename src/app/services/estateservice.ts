import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Estate } from "../models/Estate";
import { environment } from "../../environments/environment";
const base_url = environment.base
@Injectable({
    providedIn: 'root'
})

export class estateServices{
    private url = `http://localhost:8080/Estate`

    constructor(private http: HttpClient){}

    list(): Observable<Estate[]>{
        return this.http.get<Estate[]>(`${this.url}/listAll`)
    }
}