import { Component } from '@angular/core';
import { FOOTER_QUICK_LINKS, FOOTER_CATEGORIES, FOOTER_CONTACT_INFO, FOOTER_SOCIALS, FOOTER_INFO } from '../../core/constants/footer-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  quickLinks = FOOTER_QUICK_LINKS;
  categories = FOOTER_CATEGORIES;
  contactInfo = FOOTER_CONTACT_INFO;
  socials = FOOTER_SOCIALS;
  info = FOOTER_INFO;
  currentYear = new Date().getFullYear();

  subscribed = false;

  onSubscribe(event: Event, emailEl: HTMLInputElement) {
    event.preventDefault();
    if (emailEl.value && emailEl.value.includes('@')) {
      this.subscribed = true;
      emailEl.value = '';
    }
  }

}
