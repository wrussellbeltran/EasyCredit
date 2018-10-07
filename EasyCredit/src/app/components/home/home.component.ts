import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public identity;

  /**
   * Constructor, asigna los datos del usuario de la sesión.
   * @param {Router}      private router      Proporciona las capacidades de navegación y manipulación de url.
   * @param {UserService} private userService Comparte la información de la clase UserService.
   */
  constructor(private router: Router,
  			  private userService: UserService) {
  		this.identity = this.userService.getIdentity();
   }

   /**
   * Método de inicialización.
   */
  ngOnInit() {
  	if (this.identity == null) {
      this.router.navigate(['/']);
    }
  }

}
