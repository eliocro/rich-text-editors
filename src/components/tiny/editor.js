import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor({ setText, text }) {

  const [initial, setInitial] = useState(null);
  useEffect(() => {
    if (initial === null && text) {
      setInitial(text);
    }
  }, [text, initial]);

  const editorRef = useRef(null);
  const onChange = () => setText(editorRef.current?.getContent());

  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initial}
        onKeyUp={onChange}
        init={{
          height: 400,
          menubar: false,
          plugins: ['lists link'],
          toolbar: `
            formatselect |
            bold italic underline | numlist bullist | link |
            forecolor backcolor | removeformat | copy
          `,
          // content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          content_style: 'body { background-color: #F5F5F5; }',
        }}
      />
    </>
  );
}
