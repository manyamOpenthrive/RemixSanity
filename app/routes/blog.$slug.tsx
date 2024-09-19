import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../lib/sanity";
import type { fullblog } from "~/lib/interface";
import { json } from "@remix-run/node";
import { SLUG_QUERY } from "../lib/sanity";

export const loader: LoaderFunction = async ({ params }) => {
    const { slug } = params;
    if (!slug) throw new Error("Slug is required");
    const query = SLUG_QUERY;
    const data: fullblog = await client.fetch(query, { slug });
    return json({ data });
};

export default function BlogPage() {
    const { data } = useLoaderData<typeof loader>();

    return (
        <div className="w-full">
            <div className="relative w-full overflow-hidden">
                <img
                    src={urlFor(data.titleImage).url()}
                    width={1200}
                    height={700}
                    alt="Title Image"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 z-10 p-4 md:p-8 text-white pb-16 md:pb-32">
                    <p className="text-sm md:text-lg">Website</p>
                    <h1 className="text-2xl md:text-3xl lg:text-8xl font-bold">
                        {data.title}
                    </h1>
                    <p className="text-sm md:text-lg mt-2">Author • Oct 25, 2024</p>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16">
                <aside className="lg:col-span-1 mb-8 lg:mb-0">
                    <div className="top-24">
                        <h2 className="text-lg font-bold mb-2">Table Of Content</h2>
                        <ul className="space-y-2">
                            <li>Sales meetings pinpoint which to contact</li>
                            <li>Sales meetings which to</li>
                            <li>Meetings which to contact</li>
                            <li>Sales meetings which to</li>
                            <li>Meetings which to contact</li>
                        </ul>
                    </div>
                </aside>

                <section className="lg:col-span-4 mb-5">
                    <div className="prose max-w-none prose-lg">
                        <PortableText value={data.content} />
                    </div>
                </section>
            </div>
        </div>
    );
}