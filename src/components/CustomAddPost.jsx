import React, {useState} from 'react';
import axios from "axios";

const CustomAddPost = ({onAddPost, currentCatImage, setCurrentCatImage, usedImages}) => {

    const [customTitle, setCustomTitle] = useState('')

    const handleAddClick = () => {
        axios.get('https://cataas.com/cat')
            .then(response =>{
                const newImage = response.data
                if (!usedImages.includes(newImage)){
                    setCurrentCatImage(newImage)
                    const newPost = {
                        id: Date.now(),
                        title: customTitle,
                        description: '',
                        image: newImage,
                    }

                    onAddPost(newPost, newImage)
                    setCustomTitle('')
                } else {
                    alert('выберите другое изображение')
                }
            })
            .catch(error => {console.error('ошибка', error)})
    }


    const handleTitleChange = (e) => {
        setCustomTitle(e.target.value)
        setCurrentCatImage('https://cataas.com/cat')
    }

    return (
        <div>
            <h2>addPost</h2>
            <input type="text" value={customTitle} onChange={handleTitleChange}/>
            <div>
                <img src={currentCatImage} alt="cat"/>
            </div>
            <button onClick={handleAddClick}>Добавить</button>
        </div>
    );
};

export default CustomAddPost;