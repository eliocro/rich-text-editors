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
      <h2>Quill</h2>
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
        <li>Relatively simple to setup and use.</li>
        <li>Lightweight.</li>
      </ul>
      <h3>Cons</h3>
      <ul>
        <li>React package is outdated.</li>
        <li>Custom toolbar requires creating it manually.</li>
        <li>Harder to override editor styles.</li>
      </ul>
      <h3>More Info</h3>
      <ul>
        <li><a href="https://quilljs.com/docs/quickstart/">Docs</a></li>
        <li><a href="https://github.com/zenoamaro/react-quill">React Quill</a></li>
      </ul>
    </section>
  );
}
