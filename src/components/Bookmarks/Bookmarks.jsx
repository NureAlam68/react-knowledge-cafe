import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 mt-8 bg-[#1111110D] rounded-lg p-[30px]">
            <h3 className="text-2xl font-bold text-center">Bookmarked Blogs :{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;