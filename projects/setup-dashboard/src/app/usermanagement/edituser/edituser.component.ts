import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';
import  {ConfirmedValidator} from '../../setting/confirmed.validator';
interface gender {
  value: string;
}

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  hide = true;
  form!: FormGroup;

  genders: gender[] = [
    { value: 'female' },
    { value: 'male' }

  ];



  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EdituserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.dialogRef.updateSize('60%','70%');


    this.form = this.formBuilder.group(
      {
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
        confirmpassword: [
          ''
        ],
        birthday: [formatDate(this.data.user.birthday, 'yyyy-MM-dd', 'en'), Validators.required],

        gender: [this.data.user.gender],
     phone: [this.data.user.phone],
          city: [this.data.user.city, Validators.required],
        wilaya: [this.data.user.wilaya, Validators.required],
        codepostal: [this.data.user.codepostal, Validators.required],
        address1: [this.data.user.address1, Validators.required],
        address2: [this.data.user.address2, Validators.required],
      },
      {
        validator: ConfirmedValidator('password', 'confirmpassword')
      }
    );

  }
  onNoClick(): void {
    this.dialogRef.close();
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

  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onClickSubmit() {
    this.submitted = true;

    console.log(this.form.value)

  }

}
