import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  types: object = [];
  submitted: boolean = false;
  api: object;

  constructor(private _fb: FormBuilder, private _http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this._http.get('assets/data/app.json').subscribe((data) => {
      this.types = data['types'];
    });
    this.contactForm = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      date: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  submitContact() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.userService.postContact(this.contactForm.value).subscribe((data) => {
        console.log(data);
      });
    }
  }

}
