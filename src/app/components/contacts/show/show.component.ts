import {Component, OnInit} from '@angular/core';
import {Contacts} from "../../../_models";
import {ContactService} from "../../../_services";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  contacts: Contacts[] = [];

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.showContacts();
  }

  showContacts(): void{
    this.contactService.getContacts()
      .subscribe(data => {
        this.contacts = data;
        console.log(this.contacts);
      });
  }

  addContact(): void {
    let user = {
     id: 3,
      phone: 93500000,
      name: 'nameTest',
      address: 'address test'
    }
    this.contacts.push(user);
  }

}
