import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="relative isolate pt-14 dark:bg-gray-900">
        <div className="absolute inset-x-0 top-28 -z-10 transform-gou overflow-hidden blur-3xl"
        aria-hidden="true">
        </div>
      </div>
      <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Chat flawless
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Language is not a barrier.{" "}
                <span className="text-indigo-600 dark:text-indigo-500">
                  More efficient, more helpful
                </span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/chat"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm 
                font-semibold text-white dark:text-white shadow-sm hover:b  g-indigo-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Chat Now
                </Link>
                {/* <button type="button" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm 
                  font-semibold text-white dark:text-white shadow-sm hover:b  g-indigo-500 
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Default
                </button> */}
                <Link href="/pricing"
                className="text-sm font-semibold leading-6 text-grey-900 dark:text:grey-300">
                  View Pricing <span>&#8594;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
