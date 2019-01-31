import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  login(email, password){

  }

  logout(){

  }

  isLoggedIn(){

  }

  register(email, pasword, passwordRepeated){
    
  }

  getUser(){

  }

  saveUserSettings(settings){

  }

  getUserSettings(){
    
  }

}
