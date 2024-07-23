import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ProfileModalComponent } from '@common-ui/profile-modal/profile-modal.component';
import { InstallService } from '@data/services/install.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  subs: Subscription = new Subscription();
  isInstalled: boolean = false;

  constructor(
    public dialog: MatDialog,
    private installService: InstallService
  ) {
    this.subs = this.installService.isInstalled$.subscribe((value) => {
      console.log(value);
      this.isInstalled = value;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    console.log(this.isInstalled);
    this.dialog.open(ProfileModalComponent, {
      height: '400px',
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
