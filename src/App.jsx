import {useEffect, useState} from 'react'
import axios from "axios";
import './App.css'
import CustomAddPost from "./components/CustomAddPost.jsx";
import CustomPost from "./components/CustomPost.jsx";

function App() {

    const [customPosts, setCustomPosts] = useState([])
    const [customCatImage, setCustomCatImage] = useState('')
    const [customUsedImages, setCustomUsedImages] = useState([])


    useEffect(()=>{
        axios.get('https://cataas.com/cat')
            .then(({data: newImage})=>{
                setCustomCatImage(newImage)
            })
            .catch(error => {
                console.error("ошибка", error)
            })

    },[])


    const addCustomPost = (newPost, newImage) => {
        setCustomPosts(posts => [...posts, newPost])
        setCustomCatImage(newImage)
        setCustomUsedImages(images => [...images, newImage])
    }


    const editCustomPost = (postId, updatedPost) => {
        setCustomPosts(posts =>
            posts.map(post =>
            post.id === postId ? {...post, ...updatedPost} : post
            )
        )
    }


    const  deleteCustomPost = postId => {
        setCustomPosts(posts => posts.filter(post => post.id !== postId))

    }


  return (
    <>
        <h1>cats</h1>
        <CustomAddPost
            onAddPost = {addCustomPost}
            currentCatImage = {customCatImage}
            setCurrentCatImage = { setCustomCatImage}
            usedImages = {customUsedImages}
        />
        <div>
            {customPosts.map(post => (
                <CustomPost
                key = {post.id}
                post = {post}
                currentCatImage = {post.image}
                description = {post.description}
                onEditPost = {editCustomPost}
                onDeletePost = {deleteCustomPost}
                />
            ))}
        </div>
    </>
  )
}

export default App
