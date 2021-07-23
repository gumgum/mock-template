import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>GumGum Prototype Template</title>
        <meta
          name="description"
          content="Template for GumGum internal applications"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Welcome to GumGum</p>
      <Link href={`/?modalItem=category`} as={`/examples/modal`}>
        <a className="gds-button gds-button--xs gds-button--primary">
          Add Category
        </a>
      </Link>
    </div>
  );
}
