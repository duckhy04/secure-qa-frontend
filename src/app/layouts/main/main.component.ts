import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { StorageService } from '../../core/services/services';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  isAuthentication: boolean = false;
  isAdmin: boolean = false;

  constructor(private storageService: StorageService) {
    
  }

  ngOnInit() {
    this.checkAuthentication();
  }

  checkAuthentication() {
    (this.storageService.getToken()) ? this.isAuthentication = true : this.isAuthentication = false;
    (this.storageService.getRole() === '[ROLE_ADMIN]') ? this.isAdmin = true : this.isAdmin = false;
  }

}
