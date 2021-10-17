import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import  {ConfirmedValidator} from '../../setting/confirmed.validator';
interface gender {
  value: string;

}

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  hide = true;
  form!: FormGroup;

  genders: gender[] = [
    { value: 'female' },
    { value: 'male' }

  ];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group(
      {
        
      
        phone: ['', Validators.required],
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
        birthday: ['', Validators.required],
      
        gender: [''],
        confirmpassword: [''],
        city: ['', Validators.required],
        wilaya: ['', Validators.required],
        codepostal: ['', Validators.required],
        address1: ['', Validators.required],
        address2: [''],
      }
      ,{
        validator: ConfirmedValidator('password', 'confirmpassword')
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
  //
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onClickSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

  }


  
}
