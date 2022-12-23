import './styles.css'

export const PostCard = ({ title, body, cover }) => (
    <div className='post'>
        <img src={cover} alt={title}></img>
        <div className='post-content'>
        <h1>{title}</h1>
        <p>{body}</p>
        </div>
    </div>
)