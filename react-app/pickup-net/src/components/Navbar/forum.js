import React, { useEffect, useState } from 'react';
import forumPostsData from './forumPosts.json';

function NewPostModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    const newPost = { id: Date.now(), title, content, author, date: new Date().toISOString().split('T')[0] };
    onSubmit(newPost);
    setTitle('');
    setContent('');
    setAuthor('');
    onClose();
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f3f3f3',
    color: '#333',
    padding: '20px',
    zIndex: 1000,
    borderRadius: '8px',
    boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)',
    outlineStyle: 'solid '
    
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: 'black'
  };

  return (
    <div style={modalStyle}>
      <h2>Add a New Post</h2>
      <input style={inputStyle} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea style={{ ...inputStyle, height: '100px' }} placeholder="Your question or post" value={content} onChange={(e) => setContent(e.target.value)} />
      <input style={inputStyle} type="text" placeholder="Your name" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button disabled={!title || !content || !author} onClick={handleSubmit} style={{ marginRight: '10px', backgroundColor: !title || !content || !author ? '#ccc' : 'blue', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: !title || !content || !author ? 'not-allowed' : 'pointer' }}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function Forum() {
  const [modalOpen, setModalOpen] = useState(false);
  const [forumPosts, setForumPosts] = useState(() => {
    const savedPosts = localStorage.getItem('forumPosts');
    return savedPosts ? JSON.parse(savedPosts) : forumPostsData;
  });

  useEffect(() => {
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
  }, [forumPosts]);

  const handleNewPost = (post) => {
      setForumPosts(currentPosts => [post, ...currentPosts]);
  };

    return (
        <div className='page'>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '50px' }}>
                <h2>Discussion Board</h2>
                <button onClick={() => setModalOpen(true)} style={{ backgroundColor: '#d0fd1b', color: 'black', border: 'none', padding: '10px 20px', borderRadius: '5px',fontWeight:'bold',boxShadow:'3px 3px 4px rgba(0, 0, 0, 0.434)' }}>Add Question</button>
            </div>
            <NewPostModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleNewPost} />
            {forumPosts.map((post, index) => (
                <div key={post.id || index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <small>Posted by {post.author} on {post.date}</small>
                </div>
            ))}
        </div>
    );
}

export default Forum;
