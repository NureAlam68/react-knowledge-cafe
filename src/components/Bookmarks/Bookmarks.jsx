import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 ">
            <div className="px-[50px] py-[21px] bg-[#6047EC1A] mt-8 rounded-lg border border-[#6047EC]">
                <h2 className="text-2xl text-[#6047EC] font-bold">Spent time on read : {readingTime} min</h2>
            </div>
            <div className="mt-6 bg-[#1111110D] rounded-lg p-[30px]">
            <h3 className="text-2xl font-bold text-center">Bookmarked Blogs : {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;