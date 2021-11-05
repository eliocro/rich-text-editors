import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

export default function TextEditor({ text, setText }) {
  const [initial, setInitial] = useState(null);
  useEffect(() => {
    if (initial === null && text !== null) {
      setInitial(text);
    }
  }, [text, initial]);

  const onChange = value => {
    if (initial !== null) {
      setInitial(value);
      setText(value);
    }
  };

  return <ReactQuill value={initial} onChange={onChange} />;
}
