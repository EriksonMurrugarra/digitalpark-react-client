import React, { Component } from 'react';
// components
import BlogPostList from '../components/blog-post-list';

class BlogPage extends Component {

  blogEntries = [
    { id: "docker_nodejs",
      title: "Dockerizando correctamente una aplicacion Node.js",
      description: "Aprende a crear una imagen de Docker correctamente de un REST Api construido en Node.js utilizando Express.js",
      author: "erikson",
      topics: ["Docker", "NodeJS"],
      createdAt: "hace 1 dia"
    },
    { id: "docker_nodejs2",
      title: "Creando un Rest API con ExpressJS",
      description: "Aprende a crear una imagen de Docker correctamente de un REST Api construido en Node.js utilizando Express.js",
      author: "erikson",
      topics: ["ExpressJS", "NodeJS"],
      createdAt: "hace 1 dia"
    },
    { id: "docker_nodejs3",
      title: "Fundamentos de Pipeline as Code con Jenkins",
      description: "Aprende a crear una imagen de Docker correctamente de un REST Api construido en Node.js utilizando Express.js",
      author: "erikson",
      topics: ["Jenkins", "DevOps"],
      createdAt: "hace 1 dia"
    }
  ]

  render () {
    return (
      <section className="blog-page">
        <BlogPostList blogEntries={this.blogEntries}/>
      </section>
    );
  }
}

export default BlogPage;