import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Request } from '../../models/request';
import { RequestService} from '../../services/request.service';

@Component({
  selector: 'app-credit-history',
  templateUrl: './credit-history.component.html',
  styleUrls: ['./credit-history.component.css'],
  providers: [RequestService, UserService]
})
export class CreditHistoryComponent implements OnInit {
	public requests: Array<Request>;
	public identity;

  /**
   * Constructor, asigna los datos del usuario de la sesión.
   * @param {ActivatedRoute} private route          Contiene informacion sobre una ruta asociada con un componente.
   * @param {Router}         private router         Proporciona las capacidades de navegación y manipulación de url.
   * @param {RequestService} private requestService Comparte la información de la clase RequestService.
   * @param {UserService}    private userService    Comparte la información de la clase UserService.
   */
  constructor(private route: ActivatedRoute,
  			  private router: Router,
  			  private requestService: RequestService,
  			  private userService: UserService) {
  		this.identity = this.userService.getIdentity();
   }

   /**
   * Método de inicialización, verifica si la sesión se encuentra activa y consulta las solicitudes.
   */
  ngOnInit() {
  	if (this.identity == null) {
      this.router.navigate(['/']);
    } else {
      this.getRequests();
    }
  }

  /**
   * Consulta las solicitudes del usuario.
   */
  getRequests() {
  	this.requestService.getRequests(this.identity.sub).subscribe(
  		response => {
  			console.log(response);
  			if(response.status == 'success') {
  				this.requests = response.requests;
  			}
  		},
  		error => {
  			console.log(<any>error);
  		});
  }

}
