import { Component, ContentChild, Input, ElementRef, OnInit } from '@angular/core';
import { Posto } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()  post!: Posto; //добавил восклицательный знак, иначе ошибка // нет инициализации
  @ContentChild('info', {static: true}) infoRef!: ElementRef //   !
 
  constructor(){}

  ngOnInit() {
    console.log(this.infoRef.nativeElement)   
  }
  
}
