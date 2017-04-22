import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  constructor(private afAuth: AngularFireAuth, private database: AngularFireDatabase) { }

  createUser() {
    this.afAuth.authState.map(user => {
      this.database.object(`users/${this.afAuth.auth.currentUser.uid}`).update(
        {name: user.displayName, achievements: []}
      );
    }).subscribe();
  }

  getUser() {
    if (!this.afAuth.auth.currentUser) {
      return Observable.of(null);
    }
    return this.database.object(`users/${this.afAuth.auth.currentUser.uid}`);
  }
}
