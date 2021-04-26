import React from 'react'
import {
} from './styled'
import useProtectedPage from "../../hooks/useProtectedPage"

const CreatePostPage = () => {
  useProtectedPage();
  return (
    <div>
      CreatePostPage
    </div>
  )
  
};

export default CreatePostPage;