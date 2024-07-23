import { Component } from '@angular/core';
import { ProfileCardComponent } from '@common-ui/profile-card/profile-card.component';
import { ProfileService } from '@data/services/profile.service';
import { Profile } from '@data/interface/profile.interface';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent, AsyncPipe, JsonPipe],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  sub: Subscription = new Subscription();
  profiles$: BehaviorSubject<Profile[]> = this.profilesService.accounts$;

  constructor(private profilesService: ProfileService) {}
}
