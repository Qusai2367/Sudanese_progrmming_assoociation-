
import { useState } from "react";
import Comment from "./Comment";

const CommentSection = ({ comments: initialComments }) => {
    const [comments, setComments] = useState(initialComments || []);
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        const comment = {
            id: Date.now(),
            text: newComment,
            likes: 0,
            replies: [],
            author: "Anonymous",
            createdAt: new Date().toISOString(),
        };
        setComments([...comments, comment]);
        setNewComment("");
    };

    const addReply = (parentId, text) => {
        const newComments = comments.map((comment) =>
            comment.id === parentId
                ? {
                      ...comment,
                      replies: [
                          ...comment.replies,
                          {
                              id: Date.now(),
                              text,
                              likes: 0,
                              replies: [],
                          },
                      ],
                  }
                : comment
        );
        setComments(newComments);
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-white">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="my-4">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-2 bg-gray-800 rounded-lg text-white"
                    placeholder="Add a comment..."
                ></textarea>
                <button
                    type="submit"
                    className="px-4 py-2 mt-2 text-white bg-primary rounded-lg"
                >
                    Submit
                </button>
            </form>
            <div>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} addReply={addReply} />
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
