import React from 'react';
// components
import BlogListItem from './blog-post-item';
import Loader from '../../loader/loader';

const BlogPostList = ({ blogEntries }) => (
  <aside className="blog-post-list">
    {
      !blogEntries &&
        <Loader/>
    }
    {
      blogEntries &&
        renderBlogList(blogEntries)
    }
  </aside>
);

const renderBlogList = (blogEntries) => {
  return blogEntries.map(blog => (
    <BlogListItem key={blog.key} blog={blog}/>
  ));
}

export default BlogPostList;