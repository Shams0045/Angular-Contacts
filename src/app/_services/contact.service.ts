import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contacts} from "../_models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  localServer = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {
  }

  postContact(data: any) {
    return this.http.post<Contacts>(this.localServer, data);
  }

  getContactList() {
    return this.http.get<Contacts[]>(this.localServer);
  }

  getById(id: number) {
    return this.http.get<any>(`http://localhost:3000/contacts/${id}`);
  }

  deleteById(id: number) {
    return this.http.delete(`http://localhost:3000/contacts/${id}`);
  }

  editById(id: number, name: string, phones: number, addresses: string, emails: string): Observable<Contacts> {
    return this.http.put<Contacts>(`http://localhost:3000/contacts/${id}`, {name, phones, addresses, emails});
  }

}
