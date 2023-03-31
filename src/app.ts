import { NoteComponent } from './components/page/item/Note.js';
import { TodoComponent } from './components/page/item/Todo.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    // const video = new VideoComponent(
    //   'video Title',
    //   'https://www.youtube.com/watch?v=3-BZxvKT6x4'
    // );
    // video.attachTo(appRoot, 'beforeend');

    const image = new ImageComponent(
      'image Title',
      'https://picsum.photos/200/300'
    );
    image.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('note Title', 'note description');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todo description');
    todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
