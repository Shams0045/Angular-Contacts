import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, AbstractControl} from '@angular/forms';
import {ContactService} from "../../../_services";
import {ASharedService} from "../../../_services/a-shared.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userForm: FormGroup;
  counter: number;

  constructor(private fb: FormBuilder,
              private contactService: ContactService,
              private sharedService: ASharedService) {
    this.counter = 0;
    this.userForm = this.fb.group({
      id: this.counter,
      name: '',
      phones: this.fb.array([
        this.fb.control(null)
      ]),
      addresses: this.fb.array([
        this.fb.control(null)
      ]),
      emails: this.fb.array([
        this.fb.control(null)
      ]),
    });
  }


  ngOnInit(): void {
  }

  addPhone(): void {
    (this.userForm.get('phones') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index: number) {
    (this.userForm.get('phones') as FormArray).removeAt(index);
  }

  getPhonesFormControls(): AbstractControl[] {
    return (<FormArray>this.userForm.get('phones')).controls
  }

  addAddress(): void {
    (this.userForm.get('addresses') as FormArray).push(
      this.fb.control(null)
    );
  }

  removeAddress(index: number) {
    (this.userForm.get('addresses') as FormArray).removeAt(index);
  }

  getAddressesFormControls(): AbstractControl[] {
    return (<FormArray>this.userForm.get('addresses')).controls
  }

  addEmail(): void {
    (this.userForm.get('emails') as FormArray).push(
      this.fb.control(null)
    );
  }

  removeEmail(index: number) {
    (this.userForm.get('emails') as FormArray).removeAt(index);
  }

  getEmailsFormControls(): AbstractControl[] {
    return (<FormArray>this.userForm.get('emails')).controls
  }

  send(values: any) {
    this.counter = this.counter + 1;
    this.contactService.postContact(values)
      .subscribe(() => {
        this.userForm.reset();
        this.sharedService.callList();
      });
  }

}

