export interface Component {
  attachTo(parent: HTMLElement, position: InsertPosition): void;
}

// Encapsulate the HTML element creation

export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    // 사용자에게 전달받은 데이터를 innerHTML에 설정하는 것은 좋지 않다.
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
