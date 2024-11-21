// src/App.js
import React from 'react';
import Header from './Header';
import FeaturedImage from './FeaturedImage';
import ArticleCard from './ArticleCard';
import TutorialCard from './TutorialCard';
import SignUpForm from './SignUpForm';
import Footer from './Footer';
import './App.css';

const App = () => {

  const articles = [
    { title: "React vs Vue", description: "React or Vue: Which one to choose?", author: "John Doe", rating: 5, image: "https://picsum.photos/id/1011/200/300" },
    { title: "Node.js Performance", description: "Boosting performance in Node.js apps", author: "Jane Smith", rating: 4.5, image: "https://picsum.photos/id/1015/200/300" },
    { title: "Understanding React Hooks", description: "Dive into React Hooks", author: "Michael Lee", rating: 4.8, image: "https://picsum.photos/id/1025/200/300" },
  ];

  const tutorials = [
    { title: "React Router Basics", description: "Learn routing with React Router", author: "Chris Evans", rating: 5, image: "https://picsum.photos/id/1016/200/300" },
    { title: "Express.js Basics", description: "Introduction to Express.js", author: "Emily Clark", rating: 4.9, image: "https://picsum.photos/id/1020/200/300" },
    { title: "Understanding React Context", description: "How to use React Context API", author: "Anna Williams", rating: 4.7, image: "https://picsum.photos/id/1040/200/300" },
  ];

  return (
    <div>
      <Header />
      <FeaturedImage />
      
      <section className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="article-list">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </section>

      <section className="featured-tutorials">
        <h2>Featured Tutorials</h2>
        <div className="tutorial-list">
          {tutorials.map((tutorial, index) => (
            <TutorialCard key={index} tutorial={tutorial} />
          ))}
        </div>
      </section>

      <SignUpForm />
      <Footer />
    </div>
  );
};

export default App;