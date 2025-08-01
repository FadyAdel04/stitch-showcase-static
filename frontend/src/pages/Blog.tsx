import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Minimalist Dressing",
      excerpt: "Discover how to build a capsule wardrobe with timeless pieces that transcend seasons and trends.",
      category: "Style Guide",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Fashion: Making Conscious Choices",
      excerpt: "Learn about eco-friendly fabrics and ethical manufacturing practices that make a difference.",
      category: "Sustainability",
      author: "Marcus Rodriguez",
      date: "December 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Transitional Pieces for Every Season",
      excerpt: "Essential items that effortlessly carry you from summer to fall and beyond.",
      category: "Seasonal",
      author: "Elena Kim",
      date: "December 10, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Care Guide: Making Your Clothes Last",
      excerpt: "Expert tips on washing, storing, and maintaining your investment pieces.",
      category: "Care Tips",
      author: "Sarah Chen",
      date: "December 8, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558618864-faa9bf2e8b8c?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "The Perfect Blazer: A Styling Guide",
      excerpt: "From boardroom to brunch, discover versatile ways to style your favorite blazer.",
      category: "Style Guide",
      author: "Elena Kim",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Behind the Scenes: Our Design Process",
      excerpt: "Take a look at how our team creates each piece, from concept to completion.",
      category: "Behind the Scenes",
      author: "Marcus Rodriguez",
      date: "December 3, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
    }
  ];

  const categories = ["All", "Style Guide", "Sustainability", "Seasonal", "Care Tips", "Behind the Scenes"];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Fashion Journal
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto">
            Insights on style, sustainability, and the art of mindful dressing.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "sage" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-card rounded-lg shadow-medium overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="default" className="bg-sage text-white w-fit mb-4">
                  Featured
                </Badge>
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-warm-gray mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-warm-gray mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button variant="sage" size="lg" className="w-fit">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-card rounded-lg shadow-soft overflow-hidden hover:shadow-medium transition-smooth">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-3">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-3 hover:text-sage transition-smooth">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-warm-gray text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-warm-gray">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-hero rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4">
            Never Miss a Story
          </h2>
          <p className="text-warm-gray mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest fashion insights, styling tips, and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-sage"
            />
            <Button variant="sage" size="default">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;