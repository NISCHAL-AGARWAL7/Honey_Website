import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h1 className="font-bold text-xl">OrganicHerbsand</h1>
      <ThemeToggle />
    </nav>
  );
}