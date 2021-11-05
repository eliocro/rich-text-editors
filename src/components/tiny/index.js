import { useRef } from 'react';
import { useText } from '../../hooks';

import SaveStatus from '../save-status';
import TextEditor from './editor';

export default function Tiny() {
  const { text, saveText, saving } = useText();

  const ref = useRef();
  const setText = txt => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => saveText(txt), 1000);
  };

  return (
    <main>
      <h2>TinyMCE v5</h2>
      <TextEditor setText={setText} text={text} />
      <SaveStatus saving={saving} />
      <Features />
    </main>
  );
}

function Features() {
  return (
    <section>
      <h3>Pros</h3>
      <ul>
        <li>Familiarity: It's same editor used on Prevent V3, just updated.</li>
        <li>Easy to setup</li>
        <li>Advanced paste plugins are available (PowerPaste).</li>
        <li>Paste behavior is good even without plugins.</li>
      </ul>

      <h3>Cons</h3>
      <ul>
        <li>
          Requires an API-key and registering the domain to remove the warning.
        </li>
        <li>TinyMCE branding is required in the free version.</li>
        <li>Paid versions can have limits on the number of editors loaded.</li>
        <li>Styling body content requires an external stylesheet.</li>
      </ul>

      <h3>More Info</h3>
      <ul>
        <li>
          <a href="https://www.tiny.cloud/pricing/">TinyMCE Plans</a>
        </li>
        <li>
          <a href="https://www.tiny.cloud/docs/">Docs</a>
        </li>
      </ul>
    </section>
  );
}
