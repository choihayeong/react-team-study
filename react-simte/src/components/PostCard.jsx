// eslint-disable-next-line react/prop-types
const PostCard = ({ title, description, published_date }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{published_date}</p>
        </div>
    )
};

export default PostCard;