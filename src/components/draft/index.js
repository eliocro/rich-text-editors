import { useRef } from 'react';
import { useText } from '../../hooks';

import SaveStatus from '../save-status';
import TextEditor from './editor';

export default function Draft() {
  const { text, saveText, saving } = useText();

  const ref = useRef();
  const setText = txt => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => saveText(txt), 1000);
  };

  return (
    <main>
      <h2>Draft.js</h2>
      <TextEditor text={text} setText={setText} />
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
        <li>Maintained by Facebook (although no releases in over a year).</li>
        <li>Possibility to select just the features we want.</li>
        <li>Follows an immutable design pattern.</li>
      </ul>
      <h3>Cons</h3>
      <ul>
        <li>
          Based on blocks. No HTML output by default! 🤦
          (<a href="https://github.com/facebook/draft-js/issues/319">Issue</a>)
          Can be solved with plugins.
        </li>
        <li>Barebones library. Hard to setup. Reading the docs is necessary.</li>
        <li>No styling out of the box.</li>
        <li>Editor components (eg. button bar) have to be created and styled manually.</li>
        <li>Editor events are also handled manually.</li>
      </ul>
      <h3>More Info</h3>
      <ul>
        <li>
          <a href="https://draftjs.org/docs/getting-started">Getting started</a>
        </li>
        <li>
          <a href="https://draftjs.org/docs/api-reference-editor">API Reference</a>
        </li>
      </ul>
    </section>
  );
}
