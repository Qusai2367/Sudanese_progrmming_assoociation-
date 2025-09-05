
import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "feather-icons-react";

const LikeButton = ({ initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);
    const [dislikes, setDislikes] = useState(0);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
            if (isDisliked) {
                setDislikes(dislikes - 1);
                setIsDisliked(false);
            }
        }
        setIsLiked(!isLiked);
    };

    const handleDislike = () => {
        if (isDisliked) {
            setDislikes(dislikes - 1);
        } else {
            setDislikes(dislikes + 1);
            if (isLiked) {
                setLikes(likes - 1);
                setIsLiked(false);
            }
        }
        setIsDisliked(!isDisliked);
    };

    return (
        <div className="flex gap-4">
            <button
                onClick={handleLike}
                className={`flex items-center gap-2 text-white ${isLiked ? "text-primary" : ""}`}>
                <ThumbsUp size={20} />
                <span>{likes}</span>
            </button>
            <button
                onClick={handleDislike}
                className={`flex items-center gap-2 text-white ${isDisliked ? "text-red-500" : ""}`}>
                <ThumbsDown size={20} />
                <span>{dislikes}</span>
            </button>
        </div>
    );
};

export default LikeButton;
