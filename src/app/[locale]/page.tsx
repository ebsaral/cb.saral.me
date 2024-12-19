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
  return (<div className="flex flex-col items-center m-10 gap-10">
    <div>Hello. This website is under construction.</div>
    <div>most likely to be online between February - March &apos;25</div>
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
    <div>
      <b>To-do(s):</b>
      <ul>
        <li>- design home page</li>
        <li>- implement mdx support with localization</li>
        <li>- add pages to display projects (ideas), theories, articles (essays) and stories</li>
        <li>- add functionality to search in content</li>
        <li>- add rss support</li>
      </ul>
    </div>
  </div>);
}
