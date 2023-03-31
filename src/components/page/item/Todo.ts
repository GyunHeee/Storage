import { BaseComponent } from '../components.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, description: string) {
    super(`<section>
            <h1 class="todo__title"></h1>
            <input class="todo__description" type="checkbox">
        </section>`);

    // 사용자에게 전달받은 데이터를 innerHTML에 설정하는 것은 좋지 않다.

    const titleElement = this.element.querySelector(
      '.todo__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const desElement = this.element.querySelector(
      '.todo__description'
    )! as HTMLInputElement;
    desElement.insertAdjacentText('afterend', description);
  }
}
