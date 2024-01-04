import { CSSResultGroup, LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import mainCss from './main-css'

@customElement('main-element')
export class MainElement extends LitElement {
  static styles?: CSSResultGroup | undefined = [mainCss]

  @property()
  count: number;

  constructor() {
    super()

    this.count = 0;
  }

  render() {
    return html`
      <div>
        ${this.count}
      Hello, World!
      </div>
    `
  }
}


