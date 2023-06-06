import ChooseCategory from "@/components/ChooseCategory";
import ChoosePlaylist from "@/components/ChoosePlaylist";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="flex flex-1 gap-10 justify-evenly py-10">
        <ChooseCategory />
        <ChoosePlaylist />
        <ChoosePlaylist />
      </section>
    </main>
  )
}
