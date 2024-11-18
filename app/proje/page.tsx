import { Posts } from 'app/components/posts'
import { Metadata } from './info'

export const metadata = {
  title: Metadata.title,
  description: Metadata.description,
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{Metadata.title}</h1>
      <Posts section={Metadata.section}/>
    </section>
  )
}
