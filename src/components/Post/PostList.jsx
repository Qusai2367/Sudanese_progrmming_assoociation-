import { Link } from "react-router-dom";
import { posts } from "../../data/posts";
import LikeButton from "../UI/LikeButton";

const PostList = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-white">Blog</h1>
            <div className="grid grid-cols-1 gap-8 mt-8 ">
                {posts.length === 0 ? (
                    <div className="flex items-center justify-center col-span-full min-h-[50vh]">
                        <p className="text-gray-400 text-lg m-auto flex items-center justify-center h-100">
                            No posts found
                        </p>
                    </div>
                ) : (
                    posts.map((post) => (
                        <div key={post.id}>
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <Link to={`/post/${post.id}`}>
                                    <div>
                                        <img
                                            src={post.PostImage}
                                            alt={post.title}
                                            className={`cursor-pointer ${
                                                post.PostImage
                                                    ? "w-full h-125 cover rounded-md mb-3"
                                                    : "hidden"
                                            }`}
                                        />
                                        <h2 className="text-2xl font-bold text-white mb-2">
                                            {post.title}
                                        </h2>
                                        <p className="mt-2 text-gray-400">
                                            {post.content.substring(0, 130)}...
                                        </p>
                                    </div>
                                </Link>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center">
                                        <img
                                            src={post.author.photo}
                                            alt={post.author.name}
                                            className="w-8 h-8 rounded-full mr-2"
                                        />
                                        <div>
                                            <h4 className="font-semibold">
                                                {post.author.name}
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                {new Date(
                                                    post.createdAt
                                                ).toLocaleString("en-US", {
                                                    dateStyle: "medium",
                                                    timeStyle: "short",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <LikeButton initialLikes={post.likes} />
                                        <span className="text-gray-500 text-sm">
                                            {post.comments.length} comments
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PostList;
