import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAVIGATION_ELEMENTS } from '@app/core/constants/footer.constant';
import { SOCIALS } from '@app/core/constants/socials.constant';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  navigationGroups = NAVIGATION_ELEMENTS;
  socials = SOCIALS;
}
