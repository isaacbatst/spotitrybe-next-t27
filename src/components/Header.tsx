import HeaderPlayer from "./HeaderPlayer";

const Header: React.FC = () => {
  return (
    <header className="p-5 bg-stone-900 flex justify-between items-center">
      <h1 className="text-4xl font-bold">Spotitrybe</h1>
      <HeaderPlayer />
    </header>
  )
}

export default Header;