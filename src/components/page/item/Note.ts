import { BaseComponent } from '../components.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, description: string) {
    super(`<section>
            <h1 class="page-item__title note__title"></h1>
            <p class="note__description"></p>
            </section>`);

    // 사용자에게 전달받은 데이터를 innerHTML에 설정하는 것은 좋지 않다.

    const titleElement = this.element.querySelector(
      '.note__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const desElement = this.element.querySelector(
      '.note__description'
    )! as HTMLParagraphElement;
    desElement.textContent = description;
  }
}
