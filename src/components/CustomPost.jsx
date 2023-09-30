import React, {useState} from 'react';

const CustomPost = ({post, currentCatImage, description, onEditPost, onDeletePost}) => {


    const [editing, setEditing] = useState(false)
    const [customTitle, setCustomTitle] = useState(post.title)
    const [customDescription, setCustomDescription] = useState(description)


    const handleEditClick = () => setEditing(true)
    const handleSaveClick = () => {
        onEditPost(post.id,{title: customTitle, description: customDescription})
        setEditing(false)
    }

    const handledeleteClick = () => onDeletePost(post.id)

    return (
        <div>
            <div>
                <div>
                    <img src={currentCatImage} alt='cat'/>
                </div>
                <div>
                    <h3>{customTitle}</h3>
                    <p>{customDescription}</p>
                </div>
                <div>
                    <button onClick={handleEditClick}>EDIT</button>
                    <button onClick={handledeleteClick}>DELETE</button>
                </div>
            </div>
            {editing && (
                <div>
                    <input type="text"
                    value={customTitle}
                    onChange={e => setCustomTitle(e.target.value)}/>
                    <textarea value={customDescription} onChange={e => setCustomDescription(e.target.value)}></textarea>
                    <button onClick={handleSaveClick}>save</button>
                </div>
            )}
        </div>
    );
};

export default CustomPost;