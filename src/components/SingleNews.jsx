import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews: data }) => {
  const {
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
    others_info,
    published_date,
  } = data;

  return (
    <div className="card w-full bg-base-100 shadow-xl border space-y-3">
      {/* Card Image */}
      <img
        src={data.thumbnail_url}
        alt="Thumbnail"
        className="w-full h-[400px] object-cover rounded-lg mb-4"
      />

      {/* Card Body */}
      <div className="card-body">
        {/* Author Section */}
        <div className="flex items-center mb-4">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full border mr-3"
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Card Title */}
        <h2 className="card-title text-lg font-bold">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-700">
          {details.length > 100 ? `${details.slice(0, 100)} ` : details}
          <br />
          <Link className="text-[#df9666] hover:underline mt-3 text-lg">
            Read More
          </Link>
        </p>

        {/* Card Footer */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center">
            {/* Rating */}
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-medium text-sm">{rating.number || 0}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            {/* Views */}
            <FaEye className="mr-1" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
