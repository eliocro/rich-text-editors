export default function SaveStatus({ saving }) {
  return <div className="save-status">{saving && <span>Saving...</span>}</div>;
}
