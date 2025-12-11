import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {

  sendEmail(formElement: HTMLFormElement) {
    console.log('✅ BOUTON CLIQUE');

    emailjs.sendForm(
      'service_os97cer',
      'template_hiplvcr',
      formElement,
      'DaO-RZUkeFSawo7sr'
    )
    .then(res => {
      console.log('✅ EMAIL ENVOYÉ', res);
      alert('Message envoyé ✅');
      formElement.reset();
    })
    .catch(err => {
      console.error('❌ EMAIL ERROR', err);
      alert('Erreur EmailJS');
    });
  }
}
