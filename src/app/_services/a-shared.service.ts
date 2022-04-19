import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ASharedService {

  private updateList = new Subject<void>();
  private sendId = new Subject();

  getList = this.updateList.asObservable();
  getId = this.sendId.asObservable();

  callList(): void {
    this.updateList.next();
  }

  editContact(id: number): void {
    this.sendId.next(id);
  }


}
