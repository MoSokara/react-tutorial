import Tag from "./Tag";

export default function SideMenu() {
  const tags = ["Tag 1", "Tag 2", "Tag 3"];

  return (
    <aside className="side-menu">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </aside>
  );
}
