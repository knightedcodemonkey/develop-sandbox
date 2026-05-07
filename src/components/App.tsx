import { LitElement, html, css } from 'https://esm.sh/lit';
import { createRoot } from 'https://esm.sh/react-dom/client';
import { reactJsx } from 'https://esm.sh/@knighted/jsx/react';

import { ReactButton } from './button.js'

class ReactInLit extends LitElement {
  constructor() {
    super();
    this._reactRoot = null;
    this._root = null;
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    this._root = this.querySelector('#react-root');
    this._reactRoot = createRoot(this._root);
    this._renderReact();
  }

  _renderReact() {
    const ui = reactJsx`
      <${ReactButton} 
        label="Click Me (React)" 
        onClick={${() => console.log(2)}}
      />
    `;
    this._reactRoot.render(ui);
  }

  render() {
    return html`
      <div class="lit-wrapper">
        <h3>Host: Lit Element</h3>
        <div id="react-root"></div>
      </div>
    `;
  }
}
customElements.define('react-in-lit', ReactInLit);

const App = () => {
  return <react-in-lit />
}

