import Comment from './Comment.js';

export default ({comments}) => (
    <>
    {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
    ))}

    </>
)