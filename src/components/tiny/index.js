import { useRef } from 'react';
import { useText } from '../../hooks';
import Editor from './editor';

export default function Tiny() {
  const { text, saveText, saving } = useText();

  const ref = useRef();
  const setText = txt => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => saveText(txt), 1000);
  };

  return (
    <>
      <h2>TinyMCE v5</h2>
      <Editor setText={setText} text={text} />
      <p>{saving ? <span>Saving...</span> : <span>&nbsp;</span>}</p>
      <Features />
    </>
  );
}

function Features() {
  return (
    <>
      <h3>Pros</h3>
      <ul>
        <li>Familiarity: It's same editor used on V3, just updated.</li>
        <li>Advanced paste plugins are available (PowerPaste).</li>
        <li>Paste behavior is good even without plugins.</li>
        <li>Relatively easy to create new plugins.</li>
      </ul>

      <h3>Cons</h3>
      <ul>
        <li>
          Requires an API-key and registering the domain to remove the warning.
        </li>
        <li>TinyMCE branding is required in the free version.</li>
        <li>Paid versions can have limits on the number of editors loaded.</li>
        <li>
          Default onChange event happens on blur and on new line. Requires
          listening to onKeyUp for a better sync.
        </li>
      </ul>

      <h3>More Info</h3>
      <ul>
        <li>
          <a href="https://www.tiny.cloud/pricing/">TinyMCE Plans</a>
          <a href="https://www.tiny.cloud/docs/">Docs</a>
        </li>
      </ul>
    </>
  );
}
