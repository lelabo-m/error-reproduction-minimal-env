import { $path } from "next-typesafe-url";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full py-4">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to my Minimal Error Reproduction Repo
        </h1>

        <div className="py-4 flex flex-col gap-4">
          <Link
            className="text-white hover:text-red-700"
            href={$path({
              route: "/example/[slug]",
              routeParams: {
                slug: "foo",
              },
            })}
          >
            Route params link
          </Link>
          <Link
            className="text-white hover:text-blue-700"
            href={$path({
              route: "/example",
              searchParams: {
                query: "bar",
              },
            })}
          >
            Search params Link
          </Link>
        </div>
      </div>
    </div>
  );
}
