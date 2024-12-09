import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Yapım aşamasında...
      </h1>
      <p className="mb-4">
        {`I feel therefore I am, etc.`}
      </p>
      {"< "} <Link href="https://saral.me">saral.me</Link> {" >"} 
    </section>
  )
}
