import { Link } from "@remix-run/react";
import { card } from "../lib/interface";

function Card({ imageurl, title, shortdesc, slug }: card) {
    return (
        <div className="max-w-sm w-full bg-white pb-5 overflow-hidden">
            <Link to={`/blog/${slug}`}>
                <div className="relative w-full h-80 overflow-hidden rounded-xl">
                    <img
                        src={imageurl}
                        alt={title}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
            </Link>
            <div className="pt-3 h-35 flex flex-col justify-start items-start">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{shortdesc}</p>
            </div>
        </div>
    );
}

export default Card;
