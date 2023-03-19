import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  nameInputValue = '';
statusInputValue = '';
avaURLInputValue = '';

  onName(event:any){
    this.nameInputValue = event.target.value
  }

  onStatus(event:any){
    this.statusInputValue = event.target.value
  }

  onAvatar(event:any){
    this.avaURLInputValue = event.target.value
  }

  addNewUser(nameValue: string, statusValue:string, urlValue: string){
    const value = {
      name: nameValue,
      status: statusValue,
      url: urlValue
    }
  }
}
