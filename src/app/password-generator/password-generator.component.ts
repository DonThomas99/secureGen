import { Component } from '@angular/core';
import { HomePageComponent } from "../home-page/home-page.component";
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface StringOptions {
    numbers?:boolean;
    lowercase?:boolean;
    uppercase?:boolean;
    symbols?:boolean;
}

@Component({
    selector: 'app-password-generator',
    standalone: true,
    templateUrl: './password-generator.component.html',
    styleUrl: './password-generator.component.css',
    imports: [HomePageComponent, ReactiveFormsModule,CommonModule]
})
export class PasswordGeneratorComponent {
    form!:FormGroup
constructor(){
this.form = new FormGroup({
    length:new FormControl(8,[Validators.required,Validators.min(3),Validators.max(20)]),
    uppercase: new FormControl(true),
    lowercase: new FormControl(true),
    numbers: new FormControl(true),
    symbols: new FormControl(true),
    password: new FormControl('')
})
}

onSubmit(){
if(this.form.valid){
    const data = this.form.getRawValue();
    const {length, lowercase, uppercase, numbers, symbols } = data
    this.form.get('password')?.setValue(this.generateRandomString(length,{lowercase,uppercase,numbers,symbols}));
}
}

generateRandomString(length:number, options:StringOptions ={numbers:true,lowercase:true, uppercase:true, symbols:true}):string{
    let charSet = "";
    if (options.numbers) {
      charSet += "01234567890123456789";
    }
    if (options.uppercase) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (options.lowercase) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (options.symbols) {
      charSet += "!@#$%^&*()_+-=[]{};':\"\\|,<.>/?~";
    }

    if (!charSet.length) {
      return 'Please Select At least One'
    }

    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);

    return array.reduce((password, byte) => {
      const charIndex = byte % charSet.length;
      return password + charSet[charIndex];
    }, "");
}
}
