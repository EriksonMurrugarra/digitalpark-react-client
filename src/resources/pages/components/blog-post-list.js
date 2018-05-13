import React from 'react';
// components
import BlogListItem from './blog-post-item';

const BlogPostList = ({ blogEntries }) => (
  <aside className="blog-post-list">
    {
      blogEntries.map(blog => (
        <BlogListItem key={blog.id} blog={blog}/>
      ))
    }
  </aside>
);

export default BlogPostList;