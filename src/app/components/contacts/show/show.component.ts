import {Component, OnInit} from '@angular/core';
import {Contacts} from "../../../_models";
import {ContactService} from "../../../_services";
import {ASharedService} from "../../../_services/a-shared.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  contacts: Contacts[] = [];

  constructor(private contactService: ContactService,
              private sharedService: ASharedService) {
  }

  ngOnInit(): void {
    this.callServices();
    this.showContacts();
  }

  callServices(): void {
    this.sharedService.getList.subscribe(()=> {
      this.showContacts();
    });
  }

  showContacts(): void{
    this.contactService.getContactList()
      .subscribe(data => {
        this.contacts = data;
      });
  }

  edit(id: number): void {
     this.sharedService.editContact(id);
  }

  delete(id: number): void {
    this.contactService.deleteById(id)
      .subscribe(() => {
        this.showContacts();
      });

  }

}











