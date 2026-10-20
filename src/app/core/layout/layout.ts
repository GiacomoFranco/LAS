import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { WhatsappRedirection } from '@app/components/whatsapp-redirection/whatsapp-redirection';

@Component({
  selector: 'app-layout',
  imports: [Footer, WhatsappRedirection],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
