import { useParams } from "react-router-dom";
import { posts } from "../../data/posts";
import LikeButton from "../UI/LikeButton";
import CommentSection from "../Comment/CommentSection";

const PostDetails = () => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }


    return (
        <div className="p-8 text-white">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-sm text-gray-500 mt-1">
                {new Date(post.createdAt).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                })}
            </p>
            <div className="my-4">
                <img src={post.PostImage} alt={post.title} className="w-full h-auto object-cover rounded-md max-h-[500px]" />
            </div>
            <p className="mt-4">{post.content}</p>
            <div className="mt-4">
                <LikeButton initialLikes={post.likes} />
            </div>
            <div className="flex items-center mt-4">
                <img
                    src={post.author.photo}
                    alt={post.author.name}
                    className="rounded-full w-10 h-10 mr-2"
                />
                <div>
                    <p className="font-bold">{post.author.name}</p>
                    <p className="text-gray-500">Author</p>
                </div>
            </div>
            <CommentSection comments={post.comments || []} />
        </div>
    );
};

export default PostDetails;
