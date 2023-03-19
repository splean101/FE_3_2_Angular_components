import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() avatar = ''
  @Output() removeUser = new EventEmitter()

  img = 'https://blogs.nvidia.com/wp-content/uploads/2023/01/creators-collab-hero-image-kv-v2-1280x720.jpg'
  
}
