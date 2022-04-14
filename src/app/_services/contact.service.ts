import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Contacts, User} from "../_models";

const SETTING_LOCATION = 'assets/appsettings.json';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Contacts[]> {
    return this.http.get<User>(SETTING_LOCATION)
      .pipe(map(result => result['user']));
  }

}
