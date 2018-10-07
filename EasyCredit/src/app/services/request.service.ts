import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
	public url: string;

  /**
    * Constructor, asigna la ruta de la api a la variable url.
    * @param {HttpClient} public _http Realiza solicitudes HTTP.
    */
  constructor(public http: HttpClient) {
  	this.url = Global.url;
   }

   /**
    * Consulta las solicitudes del usuario.
    * @param  {int}          id Id Usuario.
    * @return {Observable<any>}    Regresa un Observable con las solicitudes que tiene el usuario.
    */
   getRequests(id): Observable<any> {
   	  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   	  return this.http.get(this.url + 'request/' + id, {headers: headers});
   }

   /**
    * Guarda nueva solicitud para el usuario.
    * @param  {Request}          request Entidad solicitud.
    * @param  {string}          token   Cuenta con el token de la sesión.
    * @return {Observable<any>}         Regresa un Observable con el estatus si se registro correctamente o no la solicitud.
    */
   saveRequest(request, token): Observable<any> {
     console.log(request);
      let json = JSON.stringify(request);
      let params = 'json=' + json;
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                   .set('Authorization', token);

      return this.http.post(this.url + 'request', params, {headers: headers});
   }

}
