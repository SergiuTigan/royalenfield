import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    message: new FormControl('')
  });
  contactData = [
    {
      header: 'Contactează-ne',
      subHeader: '+40 799 666 555',
      imageSource: 'fa fa-phone'
    },
    {
      header: 'Întrebări Generale',
      subHeader: 'contact@royalenfieldcluj.ro',
      imageSource: 'fa fa-envelope'
    },
    {
      header: 'Locația Showroom-ului',
      subHeader: 'Parcarea E3, Strada Avram Iancu, Cluj-Napoca',
      imageSource: 'fa fa-map-marker'
    }];

  constructor() {
  }

  onSubmit(): void {
  }
}
