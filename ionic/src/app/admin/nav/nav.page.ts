import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceType } from 'src/app/models/auth.model';
import { UserRole } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {
  role: UserRole = UserRole.FORESTER;
  ResourceType = ResourceType;
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }
  ionViewDidEnter () {
    console.log('Helloooooooo');
    this.role = this.authService.getRole();

  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.authService.clearLocalStorage();
      this.router.navigateByUrl('/')
    });
  }
}
