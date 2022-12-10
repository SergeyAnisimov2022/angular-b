import { Component, Input } from '@angular/core';
import { Posto } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent   {

  @Input()  post!: Posto; //добавил восклицательный знак, иначе ошибка 
  // нет инициализации
 
}
