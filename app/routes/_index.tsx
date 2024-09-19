import Card from "../components/Card";
import { urlFor } from "../lib/sanity";
import type { SanityDocument } from "@sanity/client";
import { loadQuery } from "../lib/loader.server";
import { POSTS_QUERY } from "../lib/sanity";
import { useLoaderData } from "@remix-run/react";
export const loader = async () => {
    const { data } = await loadQuery<SanityDocument[]>(POSTS_QUERY);
    return { data };
};

function Home() {
    const { data } = useLoaderData<typeof loader>();

    return (
        <main className="mt-8 w-full max-w-7xl mx-auto mb-6 px-4">
            <div className="flex flex-1 pb-12">
                <span>
                    <p className="font-semibold">Resources</p>
                    <h1 className="font-semibold text-5xl">CX Insights</h1>
                </span>
                <ul className="hidden md:flex flex-1 gap-4 justify-end items-end ">
                    <li>All</li>
                    <li>Website</li>
                    <li>eCommerce</li>
                    <li>Marketing</li>
                    <li>More</li>
                </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                {data.map((post, index) => {
                    const imageUrl = urlFor(post.titleImage)?.url() || "/fallback-image.jpg";
                    return <Card key={index} imageurl={imageUrl} title={post.title} shortdesc={post.smallDescription} slug={post.currentSlug} />;
                })}
            </div>
            <div className="flex justify-center items-center mt-6 mb-16">
                <button className="bg-[#1A28C9] text-white px-[22px] py-[14px] gap-5 rounded-xl text-[16px]">Load More Insights  {">"}</button>
            </div>
        </main>
    );
}

export default Home;
