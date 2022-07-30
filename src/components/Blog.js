import React, { useState } from 'react'

const Blog = ({ blog, handleLikeClick, user, handleDelete }) => {
  const [hide, setHide] = useState(true)

  const toggleVisibility = () => setHide(!hide)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const {
    title = '',
    author = '',
    likes = 0,
    url = '',
    user: blogEditor = {},
  } = blog ?? {}

  const { username = '' } = user ?? {}

  return (
    <div style={blogStyle}>
      <div className="blogTitle">
        {title} {author}
        <button onClick={toggleVisibility}>{hide ? 'View' : 'Hide'}</button>
      </div>
      <div style={{ display: hide ? 'none' : '' }} className="blogContent">
        <p className="blogUrl">{url}</p>
        <p className="blogLikes">
          {`likes ${likes}`}
          <button onClick={handleLikeClick}>like</button>
        </p>
        <p>{blogEditor?.name}</p>
        {username === blogEditor.username && (
          <button
            onClick={handleDelete}
            style={{
              background: 'lightblue',
              border: '1px solid grey',
              borderRadius: '5px',
            }}
          >
            remove
          </button>
        )}
      </div>
    </div>
  )
}

export default Blog
