import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
            <Link to="/blogs" className="text-[#006D77] font-semibold hover:underline">
              Voltar para blogs
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[#006D77] font-semibold hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={20} />
            Voltar para blogs
          </Link>

          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">🗓 {post.date}</span>
              <span className="flex items-center gap-2">⏱ {post.readTime}</span>
            </div>
          </div>

          <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-12">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-[#006D77] font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Voltar para blogs
            </Link>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
