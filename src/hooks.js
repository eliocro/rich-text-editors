import { useEffect, useState } from 'react';

const DELAY = 500;

export function useText() {
  const [text, setText] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTimeout(
      () =>
        setText(window.localStorage.getItem('editors-content') || ''),
      DELAY,
    );
  }, []);

  useEffect(() => {
    if (text !== null) {
      window.localStorage.setItem('editors-content', text);
    }
  }, [text]);

  function saveText(value) {
    setSaving(true);

    setTimeout(() => {
      setText(value);
      setSaving(false);
    }, DELAY * 2);
  }

  return {
    text,
    saveText,
    saving,
  };
}
