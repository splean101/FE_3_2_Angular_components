import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
@Output( ) onUser = new EventEmitter();

  nameInputValue = '';
statusInputValue = '';
avaURLInputValue = '';

  onName(event:any){
    this.nameInputValue = event.target.value
  }

  onStatus(event:any){
    if (event.target.value.length > 50) {
      this.statusInputValue = event.target.value.slice(49)
      return
    }
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
    this.onUser.emit(value)
    this.nameInputValue = ''
    this.statusInputValue = ''
    this.avaURLInputValue = ''
  }
}
