import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
    id
  } = blog;
  return (
    <div className="mb-10">
      <img className="w-full rounded-lg" src={cover} alt={`Cover picture ${title}`} />
      <div className="flex justify-between mt-8">
        <div className="flex gap-6">
          <div>
            <img className="w-[60px]" src={author_img} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-base text-[#11111199] font-semibold">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-[20px] text-[#11111199] font-medium">{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl text-[#11111199]"><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h2 className="text-[40px] font-bold mt-4">{title}</h2>
      <p className="mt-4 text-[20px] text-[#11111199] font-medium">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={() => handleMarkAsRead(id, reading_time)}
       className="mt-5 text-[20px] text-[#6047EC] font-semibold underline">
      Mark as read
      </button>
      <hr className="border mt-8" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;
