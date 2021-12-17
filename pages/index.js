import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CRM Software</title>
        <meta name="description" content="CRM Software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="text-center">
          <div className="h-60 lg:h-72 relative">
            <Image src="/customer.svg" layout="fill" />
          </div>
          <h1 className="font-bold text-4xl lg:text-6xl mb-5">CRM Software</h1>
          <p>A simple demo of a customer relationship management software</p>
        </section>
        <section className="text-center my-10">
          <Link href="/" passHref>
            <a>
              <button className="bg-primary-100 px-5 py-3 rounded-2xl text-white font-semibold hover:bg-primary-200 hover:shadow">
                View Demo
              </button>
            </a>
          </Link>
        </section>
      </main>

      <footer className="text-center">
        Built using
        <Link href="https://nextjs.org/" passHref>
          <a className="font-semibold cursor-pointer"> Next.js</a>
        </Link>
        ,
        <Link href="https://tailwindcss.com/" passHref>
          <a className="font-semibold cursor-pointer"> TailwindCSS</a>
        </Link>
        , and
        <Link href="https://fauna.com/" passHref>
          <a className="font-semibold cursor-pointer"> FaunaDB</a>
        </Link>
      </footer>
    </div>
  );
}
