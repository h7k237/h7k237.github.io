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

  return (
    <>
      <Navigation/>
      <div className="min-h-screen bg-paper-white">
        <div className="animate-fade-in max-w-2xl mx-auto px-4 py-12">
          {post ? (
            <>
              <h2 className="text-5xl mt-24">{post.title}</h2>
              <div className="font-display text-2xl text-paper-black mb-8">
                {post.date}
              </div>
              <div className="mt-16 mb-48" dangerouslySetInnerHTML={{ __html: post.content }} />
            </>
          ) : (
            <h2 className="text-5xl mt-24">Post not found :(</h2>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}
