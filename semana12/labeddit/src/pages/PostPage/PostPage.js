import React from 'react'
import {
} from './styled'
import useProtectedPage from "../../hooks/useProtectedPage"

const PostPage = () => {
  useProtectedPage();
  return (
    <div>
      PostPage
    </div>
  )
  
};

export default PostPage;
