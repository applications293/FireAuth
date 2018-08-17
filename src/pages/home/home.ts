import { SignUpPage } from './../sign-up/sign-up';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import { FormGroup } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  form: FormGroup;
  google={
    name:'',
    pic:'',
    email:'',
    logged: true
  };

  facebook={
    name:'',
    pic:'',
    email:'',
    logged: true
  };

  email;
  password;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  signUp(){
    //firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user =>{
      this.navCtrl.push('SignUpPage');
      //console.log(user);
    //})//method for email n password only
  }

  signIn(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user =>{
      this.navCtrl.push('DisplayPage');
    })
  }

  logInWithGoogle(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res) =>{
      console.log('Google');
      
      this.google.name = res.user.displayName;
      this.google.email = res.user.email;
      this.google.pic = res.user.photoURL;
      console.log(res);
    })
  }

  logInWithFaceBook(){
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res) =>{
      console.log('Facebook user logged in');
      
      this.facebook.name = res.user.displayName;
      this.facebook.email = res.user.email;
      this.facebook.pic = res.user.photoURL;
      console.log(res);
    })
  }
  logOut(){
    firebase.auth().signOut();
    this.google.name = ''
    this.google.email =''
    this.google.pic =''
    console.log('Google user signed out!');
  }
}
