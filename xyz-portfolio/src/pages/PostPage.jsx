import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '@/data/posts';
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Navigation/>
      <div className="min-h-screen bg-paper-white">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet" />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-5xl mt-24">{post.title}</h2>
          <div className="font-display text-2xl text-paper-black mb-8">
            {post.date}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer/>
    </>
  );
}
