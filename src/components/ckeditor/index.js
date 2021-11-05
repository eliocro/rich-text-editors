import { useRef } from 'react';
import { useText } from '../../hooks';

import SaveStatus from '../save-status';
import TextEditor from './editor';

export default function CKEditor() {
  const { text, saveText, saving } = useText();

  const ref = useRef();
  const setText = txt => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => saveText(txt), 1000);
  };

  return (
    <main>
      <h2>CKEditor 5</h2>
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
        <li>Similar to TinyMCE.</li>
        <li>Relatively easy to setup.</li>
        <li>Paste from Office is available as a free plugin.</li>
        <li>Solid and stable library with tons of features.</li>
      </ul>
      <h3>Cons</h3>
      <ul>
        <li>
          Our toolbar configuration requires a custom build! (<a href="https://github.com/ckeditor/ckeditor5/issues/2072">Discussion</a>)
        </li>
        <li>
          Harder to update due to custom builds. There is an <a href="https://ckeditor.com/ckeditor-5/online-builder/">online
          configurator</a>. We can either publish a new npm package or include a minified build.
        </li>
      </ul>
      <h3>More Info</h3>
      <ul>
        <li>
          <a href="https://ckeditor.com/docs/ckeditor5/latest/api/index.html">CKEditor API</a>
        </li>
        <li>
          <a href="https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html">React integration docs</a>
        </li>
      </ul>
    </section>
  );
}
