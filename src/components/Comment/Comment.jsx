
import { useState } from "react";
import LikeButton from "../UI/LikeButton";

const Comment = ({ comment, addReply }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [replyText, setReplyText] = useState("");

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (!replyText.trim()) return;
        addReply(comment.id, replyText);
        setReplyText("");
        setShowReplies(true);
    };

    return (
        <div className="p-4 my-2 bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>{comment.author || "Anonymous"}</span>
                <span>•</span>
                <span>{comment.createdAt ? new Date(comment.createdAt).toLocaleString() : ""}</span>
            </div>
            <p className="text-white mt-1">{comment.text}</p>
            <div className="flex items-center gap-4 mt-2">
                <LikeButton initialLikes={comment.likes} />
                <button
                    onClick={() => setShowReplies(!showReplies)}
                    className="text-white"
                >
                    {showReplies ? "Hide Replies" : "Show Replies"}
                </button>
            </div>
            <form onSubmit={handleReplySubmit} className="my-2">
                <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Reply..."
                    className="w-full p-2 bg-gray-700 text-white rounded-lg"
                />
                <button
                    type="submit"
                    className="px-3 py-1 mt-1 bg-primary text-white rounded-lg"
                >
                    Reply
                </button>
            </form>
            {showReplies && (
                <div className="ml-4">
                    {comment.replies.map((reply) => (
                        <Comment key={reply.id} comment={reply} addReply={addReply} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;
