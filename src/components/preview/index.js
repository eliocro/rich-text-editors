import { useText } from '../../hooks';

export default function Preview() {
  const { text } = useText();
  return (
    <section>
      <h2>Content Preview</h2>
      <div
        className="preview preview-content"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      <ul>
        <li>Font: Roboto Condensed</li>
        <li>Font Size: 18px</li>
        <li>Line Height: 1.33</li>
        <li>Color: #333333</li>
      </ul>
    </section>
  );
}
