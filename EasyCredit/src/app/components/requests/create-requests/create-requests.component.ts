import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Request } from '../../../models/request';
import { RequestService	} from '../../../services/request.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-requests',
  templateUrl: './create-requests.component.html',
  styleUrls: ['./create-requests.component.css'],
  providers: [RequestService, UserService]
})
export class CreateRequestsComponent implements OnInit {
	public request: Request;
	public status: string;
	public token;
  public identity;
  public total;

  /**
   * Constructor, asigna los datos del usuario de la sesión, el token e inicializa la entidad request.
   * @param {ActivatedRoute} private route          Contiene informacion sobre una ruta asociada con un componente.
   * @param {Router}         private router         Proporciona las capacidades de navegación y manipulación de url.
   * @param {RequestService} private requestService Comparte la información de la clase RequestService.
   * @param {UserService}    private userService    Comparte la información de la clase UserService.
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private requestService: RequestService,
              private userService: UserService) {
  		this.request = new Request(1,0,'','',false,'',0,0);
  		this.identity = this.userService.getIdentity();
    	this.token = this.userService.getToken();
    }

   /**
   * Método de inicialización, verifica si la sesión se encuentra activa y asigna el id del usuario.
   */
  ngOnInit() {

  	if (this.identity == null) {
      this.router.navigate(['/']);
    }
    else{
    	this.request.user_id = this.identity.sub;
    }
  }

  /**
   * Recibe el formulario con los valores capturados y registra la solicitud.
   * @param {formGroup} form Recibe los datos capturados en el formulario.
   */
  onSubmit(form) {
    this.requestService.saveRequest(this.request, this.token).subscribe(
      responseIdentity => {
        if (responseIdentity.status == 'success') {
          this.request = responseIdentity.request;
          this.status = 'success';
          this.router.navigate(['requests']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  /**
   * Se ejecuta cuando se hace un cambio de plazo para recalcular el valor total.
   * @param {event} event Recibe el evento.
   */
  onChange(event) {  	
   	this.total = (parseInt(this.request.quantity) * parseInt(this.request.dead_line)) / 100;
   	this.request.total = this.total + parseInt(this.request.quantity);
  }

  /**
   * Permite agregar solo numeros.
   * @param {event} event Recibe la tecla presionada.
   */
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
}
