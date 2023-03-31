import { BaseComponent } from '../components.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section>
            <div class="image__holder">
                <img class="image__thumnail" />
            </div>
            <p class="image__title"></p>
        </section>`);

    // 사용자에게 전달받은 데이터를 innerHTML에 설정하는 것은 좋지 않다.

    const imageElement = this.element.querySelector(
      '.image__thumnail'
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      '.image__title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
