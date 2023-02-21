export default function Header() {
  return (
    <nav className={"h-[70px] bg-primary/30 flex items-center text-secondary"}>
      <div className={"container"}>
        <ul className={"flex gap-10 font-medium"}>
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
      </div>
    </nav>
  );
}
