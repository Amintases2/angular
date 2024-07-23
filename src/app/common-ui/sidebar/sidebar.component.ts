import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  menuItems = [
    {
      label: 'Главная',
      url: '/search',
    },
    {
      label: 'Профиль',
      url: '/profile',
    },
    {
      label: 'Store',
      url: '/store',
    },
  ];
}
