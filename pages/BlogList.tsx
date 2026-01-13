import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const BlogList: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#006D77] font-semibold tracking-wider text-sm uppercase">Blogs</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Insights para cuidar da saúde mental</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore reflexões, artigos e conteúdos sobre bem-estar emocional e desenvolvimento pessoal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group cursor-pointer"
              >
                <article>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#006D77] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">🗓 {post.date}</span>
                    <span className="flex items-center gap-2">⏱ {post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogList;
