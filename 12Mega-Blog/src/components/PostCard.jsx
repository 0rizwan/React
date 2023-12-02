import React from 'react'
import { Link } from 'react-router-dom'
import services from '../appwrite/config'

const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post${$id}`}>
            <div className='rounded-lg bg-gray-100 w-full p-4 '>
                <div className='w-full justify-center mb-4'>
                    <img src={services.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
