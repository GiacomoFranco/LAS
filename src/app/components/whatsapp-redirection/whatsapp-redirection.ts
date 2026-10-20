import { Component } from '@angular/core';
import { SOCIALS } from '@app/core/constants/socials.constant';

@Component({
  selector: 'app-whatsapp-redirection',
  imports: [],
  templateUrl: './whatsapp-redirection.html',
  styleUrl: './whatsapp-redirection.scss',
})
export class WhatsappRedirection {
  whatsAppLink = SOCIALS.find(social => social.social == 'WhatsApp')?.link;
}
