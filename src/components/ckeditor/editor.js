import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const { ClassicEditor } = window;

export default function TextEditor({ text, setText }) {
  const [initial, setInitial] = useState(null);
  useEffect(() => {
    if (initial === null && text) {
      setInitial(text);
    }
  }, [text, initial]);

  const onChange = (evt, editor) =>
    initial !== null && setText(editor.getData());

  return (
    <CKEditor
      editor={ClassicEditor}
      data={initial}
      onChange={onChange}
    />
  );
}
