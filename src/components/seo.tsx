import Head from "next/head";

export function SEO({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Head>
      <title>toniagost | {title}</title>

      {description ? <meta name="description" content={description} /> : null}

      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
