import { Component } from './components/page/components.js';
import { NoteComponent } from './components/page/item/Note.js';
import { TodoComponent } from './components/page/item/Todo.js';
import { VideoComponent } from './components/page/item/Video.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot, 'afterbegin');

    const video = new VideoComponent(
      'video Title',
      'https://www.youtube.com/watch?v=3-BZxvKT6x4'
    );
    this.page.addChild(video);

    const image = new ImageComponent(
      'image Title',
      'https://picsum.photos/200/300'
    );
    this.page.addChild(image);

    const note = new NoteComponent('note Title', 'note description');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo description');
    this.page.addChild(todo);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
