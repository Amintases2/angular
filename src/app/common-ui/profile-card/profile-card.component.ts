import { Component, Input } from '@angular/core';
import { Profile } from '@data/interface/profile.interface';
import { ProfileService } from '@data/services/profile.service';
import { ImgUrlPipe } from '@helpers/pipes/img-url.pipe';
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  @Input() profile!: Profile;

  constructor(private profileService: ProfileService) {}

  delete(id: number) {
    this.profileService.deleteAccount(id);
  }
}
