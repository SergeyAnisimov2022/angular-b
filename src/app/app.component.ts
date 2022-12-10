import { Component } from '@angular/core';

export interface Posto {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Posto[] = [
    {title: 'Хочу выучить', text: 'Я все еще учу', id: 1},
    {title: 'Следующий', text: 'блок', id: 2},
  ]

  updatePosts(post: Posto) {
    this.posts.unshift(post)
    // console.log('Posto', post)
  }
}
