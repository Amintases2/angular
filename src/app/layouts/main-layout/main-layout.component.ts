import { Component } from '@angular/core';
import { SidebarComponent } from '@common-ui/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ProfileService } from '@data/services/profile.service';
import { Profile } from '@data/interface/profile.interface';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SidebarComponent, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  constructor(private profileService: ProfileService) {}

  // ngOnInit(): void {
  //   this.profileService.getMe().subscribe((res: Profile) => {
  //   });
  // }
}
