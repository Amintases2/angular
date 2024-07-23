import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { InstallService } from '@data/services/install.service';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.css',
})
export class ProfileModalComponent {
  constructor(private installService: InstallService) {}

  install() {
    this.installService.changeInstalled(true);
  }

  uninstall() {
    this.installService.changeInstalled(false);
  }
}
