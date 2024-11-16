import { useLoaderData } from "react-router-dom";
import SingleNews from "../components/SingleNews";

const CategoryNew = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h1 className="text-lg font-bold">The Dragon News</h1>
      <p className="text-sm  text-gray-500 font-semibold">
        Total {news.length} News
      </p>
      <div>
        {news.map((singleNews) => (
          <SingleNews key={singleNews._id} singleNews={singleNews}></SingleNews>
        ))}
      </div>
    </div>
  );
};

export default CategoryNew;
