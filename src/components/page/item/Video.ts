import { BaseComponent } from '../components.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section>
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
            </div>
            <h3 class="video__title"></h3>
        </section>`);

    // 사용자에게 전달받은 데이터를 innerHTML에 설정하는 것은 좋지 않다.

    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    console.log(url);
    iframe.src = 'https://www.youtube.com/embed/3-BZxvKT6x4'; // url -> videoId

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// <iframe
//   width="1354"
//   height="762"
//   src="https://www.youtube.com/embed/3-BZxvKT6x4"
//   title="축신이라 불리는 사나이의 마지막 / 2022 FIFA 카타르월드컵 결승전 아르헨티나 vs 프랑스 [습츠_월드컵 클래식]"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowfullscreen
// ></iframe>;
