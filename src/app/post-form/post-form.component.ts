import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Posto } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  @Output() onAdd: EventEmitter<Posto> = new EventEmitter<Posto>()

  @ViewChild('titleInput') inputRef!: ElementRef //добавил !, иначе не работает

  title = ''
  text = ''
  
  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Posto = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)
      // console.log('New Post ', post)

      this.title = this.text = ''
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus()
  }

}
