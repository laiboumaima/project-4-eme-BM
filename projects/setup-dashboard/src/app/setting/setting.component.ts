import { Company } from './../model/company';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ConfirmedValidator } from './confirmed.validator';
import { FormControl } from '@angular/forms';
interface gender {
  value: string;

}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  hide = true;
  form!: FormGroup;
  formcompany!: FormGroup;
  genders: gender[] = [
    { value: 'female' },
    { value: 'male' }

  ];

 
  user = new User()
  compani = new Company()
  account: boolean = false;
  company: boolean = true;
  day: any
  imagelogo: any

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    //fake data
    this.user.fullname = " Oumaima Laib"
    this.user.gender = "female"
    this.user.birthday = new Date(1999, 8, 22).toISOString().split('T')[0];
    this.user.username = "oumaima123"
    this.user.email = "o.lb@gmail.com"
    this.user.address1 = "cite 8 mai "
    this.user.codepostal = 3900
    this.user.city = "eloued"
    this.user.wilaya = "elouad"
    this.user.address1 = "cite 8 mai "
    this.user.address2 = " "
    this.user.phone = "213542258245"
    //fake data company
    this.compani.address1 = "kkddkfjj kkskkkkd kkfkkf"
    this.compani.address2 = "kkddkfjj kkskkkkd kkfkkf"
    this.compani.city = "elouad"
    this.compani.name = "Klakala"
    this.compani.codepostal = 3900
    this.compani.wilaya = "elouad"
    this.compani.email = "o.lb@gmail.com"
    this.compani.logo = "https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png"
    this.compani.phone = "+213542258245"
    this.compani.website = "https://www.linkedin.com/in/oumaima-laib-95a3a5155/"
    this.imagelogo = this.compani.logo

    ///form
    this.formcompany = this.formBuilder.group(
      {
        address: [this.compani.address1, Validators.required],
        address2: [this.compani.address2],
        email: [this.compani.email, [Validators.required
          , Validators.email]],
        phone: [this.compani.phone, [Validators.required
          ,
        Validators.pattern('^[0-9]+$')]],
        website: [this.compani.website, Validators.required],
        logo: [this.imagelogo, Validators.required],
        city: [this.compani.city, Validators.required],
        wilaya: [this.compani.wilaya, Validators.required],
        codepostal: [this.compani.codepostal, Validators.required],
       name: [this.compani.name, Validators.required],
      }
    );
    this.form = this.formBuilder.group(
      {
        newpw: [''],
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required,
        Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),

          ]
        ],
        birthday: [formatDate(this.user.birthday, 'yyyy-MM-dd', 'en'), Validators.required],

        gender: [this.user.gender],
        role: [this.user.role, Validators.required],
        confirmpassword: [''],
        phone: [this.user.phone,Validators.required],
          city: [this.user.city, Validators.required],
        wilaya: [this.user.wilaya, Validators.required],
        codepostal: [this.user.codepostal, Validators.required],
        address1: [this.user.address1, Validators.required],
        address2: [this.user.address2],
      }, {
      validator: ConfirmedValidator('newpw', 'confirmpassword')
    }
    );


  }


  //
  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  formControl = new FormControl(new Date());
  //imageupload
  fileToUpload!: File;

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    //show image
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagelogo = event.target.result
    }
    reader.readAsDataURL(file)
  }
  //
  submitted = false;
  get g(): { [key: string]: AbstractControl } {
    return this.formcompany.controls;
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onClickSubmit() {
    this.submitted = true;

    console.log(this.form.value)

  }
  onClickSubmitcompany() {
    this.submitted = true;

    console.log(this.form.value)

  }
  iscompany() {
    this.company = true
    this.account = false
  }
  isaccount() {
    this.account = true
    this.company = false
  }
}
