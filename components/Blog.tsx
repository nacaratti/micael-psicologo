
import React from 'react';
import { BlogPost } from '../types';

const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Atendimentos por ansiedade aumentam significativamente no SUS',
    date: '28 de abr. de 2025',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/seed/anxiety/600/400'
  },
  {
    id: '2',
    title: 'O luto além da perda: uma perspectiva psicanalítica',
    date: '12 de abr. de 2025',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/seed/grief/600/400'
  },
  {
    id: '3',
    title: 'O impacto emocional do fim de um relacionamento',
    date: '6 de abr. de 2025',
    readTime: '4 min read',
    imageUrl: 'https://picsum.photos/seed/relationship/600/400'
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#006D77] font-semibold tracking-wider text-sm uppercase">Blogs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Insights para cuidar da saúde mental</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore reflexões, artigos e conteúdos sobre bem-estar emocional e desenvolvimento pessoal.
          </p>
          <div className="pt-4">
            <button className="text-gray-900 font-bold hover:text-[#006D77] transition-colors flex items-center gap-2 mx-auto">
              View all blog <span className="text-lg">↗</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#006D77] transition-colors leading-tight">
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">🗓 {post.date}</span>
                <span className="flex items-center gap-2">⏱ {post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
