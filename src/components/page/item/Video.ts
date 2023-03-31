// import { BaseComponent } from '../components.js';

// export class VideoComponent extends BaseComponent<HTMLElement> {
//   constructor(title: string, url: string) {
//     super(`<section>
//             <div class="video__holder">
//                 <iframe class="video__thumnail" frameborder="0"></iframe>
//             </div>
//             <p class="video__title"></p>
//         </section>`);

//     // 사용자에게 전달받은 데이터를 innerHTML에 설정하는 것은 좋지 않다.

//     const videoElement = this.element.querySelector(
//       '.video__thumnail'
//     )! as HTMLImageElement;
//     videoElement.src = url;
//     videoElement.alt = title;

//     const titleElement = this.element.querySelector(
//       '.video__title'
//     )! as HTMLParagraphElement;
//     titleElement.textContent = title;
//   }
// }
