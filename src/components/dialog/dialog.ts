import { BaseComponent, Component } from '../page/components.js';
import { Composable } from '../page/page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;

  constructor() {
    super(`<section class="dialog">
            <div class="dialog__container">
                <button class="close">$times</button>
                <div id="dialog__body"></div>
                <button class="dialog__submit">ADD</button>
            </div>
        </section>`);

    const closeBtn = this.element.querySelector('.close');
    closeBtn?.addEventListener('click', () => {
      // 외부로부터 리스터를 등록받아서 있다면 호출한다.
      this.closeListener && this.closeListener();
    });

    const submitBton = this.element.querySelector('.dialog__submit');
    submitBton?.addEventListener('click', () => {
      // 외부로부터 리스터를 등록받아서 있다면 호출한다.
      this.submitListener && this.submitListener();
    });
  }

  setOnCloseListenr(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListenr(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component): void {
    const body = this.element.querySelector('#dialog__body')! as HTMLElement;
    child.attachTo(body, 'afterbegin');
  }
}
