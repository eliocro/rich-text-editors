import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import CustomBuild from './custom-build';

export default function TextEditor({ text, setText }) {
  const [initial, setInitial] = useState(null);
  useEffect(() => {
    if (initial === null && text) {
      setInitial(text);
    }
  }, [text, initial]);

  const onChange = (evt, editor) =>
    initial !== null && setText(editor.getData());

  return <CKEditor editor={CustomBuild} data={initial} onChange={onChange} />;
}
