import Image from "next/image"

export async function generateMetadata() {
 
  return {
    title: "Coming Soon",
    description: "",
    openGraph: {
      images: [
      ]
    }
  };
}

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center m-10 gap-10">
          <h1>Merhaba | Hello | Hallo | Salut | etc...</h1>
          <div><b>This website is under construction.</b></div>
          <div>most likely to be <i>ready handmade</i> between February - March &apos;25</div>
          <div>
            <Image
                className="rounded-3xl"
                src="/main.png"
                alt="ebs breaking a wall"
                width={350}
                height={350}
                priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
