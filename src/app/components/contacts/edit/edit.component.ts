import { Component, OnInit } from '@angular/core';
import {ASharedService} from "../../../_services/a-shared.service";
import {ContactService} from "../../../_services";
import {Contacts} from "../../../_models";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  userId: any;
  contact: Contacts;
  name: string;
  phones: number;
  addresses: string;
  emails: string;


  constructor(private sharedService: ASharedService,
              private contactService: ContactService) { }

  ngOnInit(): void {
  this.callServices();
  }

  callServices(): void{
    this.sharedService.getId.subscribe(data => {
      this.userId = data;
      this.getById();
    });
  }

  getById(): void {
    this.contactService.getById(this.userId)
      .subscribe(data => {
        this.contact = data;
        this.name = this.contact.name;
        this.phones = this.contact.phones;
        this.addresses = this.contact.addresses;
        this.emails = this.contact.emails;
      });
  }

  editById(): void {
    this.contactService.editById(this.userId, this.name, this.phones, this.addresses, this.emails)
      .subscribe(() => {
        this.sharedService.callList();
      });
  }


}
