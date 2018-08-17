
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  email;
  password;
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      last_name: new FormControl('',Validators.required),
      email: new FormControl('', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
      password: new FormControl('', Validators.maxLength(5)),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user =>{
      this.navCtrl.push('DisplayPage');
      console.log(user);
    })
  }

}
