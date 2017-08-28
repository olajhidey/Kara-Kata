import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class AuthServiceProvider {

  HAS_LOGGED_IN = 'hasLoggedIn';


  constructor( public event : Events, public store: Storage, private afauth : AngularFireAuth, private afdb : AngularFireDatabase) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(email: string, password: any): any {

   this.afauth.auth.signInWithEmailAndPassword(email, password).then(data=> {
        this.store.set(this.HAS_LOGGED_IN, true);
        this.setUsername(email);
        this.event.publish('user:login', email, Date.now());
      }).catch(error => {
        console.log(error);
      })

  

      
  }

  signup(email: string, password:any):void {

    try{
    
      this.afauth.auth.createUserWithEmailAndPassword(email, password).then(data=> {
        
              this.store.set(this.HAS_LOGGED_IN, true);
              this.setUsername(email);
              this.event.publish('user:login', email, Date.now());
            }).catch(error=> {
        
              console.log(error);
            })

    }catch(error) {

      console.log(error)
    }

    
  }

  logout():void{

    this.afauth.auth.signOut().then(data=>{
      this.store.remove(this.HAS_LOGGED_IN);
      this.store.remove('username');
      this.event.publish('user:logout');

    })
  }

  setUsername(username): void {
    this.store.set('username', username);
  }


}
