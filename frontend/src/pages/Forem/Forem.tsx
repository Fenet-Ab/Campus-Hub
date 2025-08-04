// ForumPage.tsx

import  { useState } from 'react';

import Comment from '../../components/CommentInput/Comment';

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "How to prepare for final exams?",
    content: "Any tips for staying focused during study week? I keep procrastinating.",
    category: "Academic",
    author: "@student123",
    createdAt: "2 hrs ago",
    likes: 5,
    comments: 2,
  },
  {
    id: 2,
    title: "Where can I find internship listings?",
    content: "Looking for summer internships related to software development.",
    category: "Jobs",
    author: "@devgirl",
    createdAt: "1 day ago",
    likes: 3,
    comments: 1,
  },
];

const Forum = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("");
 

  const filteredPosts = categoryFilter
    ? mockPosts.filter((post) => post.category === categoryFilter)
    : mockPosts;

  return (
    <div className="p-6 max-w-5xl mx-auto mt-20">
      <div className="flex justify-between items-center mb-6">
        <select 
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-[200px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Filter by Category</option>
          <option value="Academic">Academic</option>
          <option value="Social">Social</option>
          <option value="Jobs">Jobs & Internships</option>
        </select>
        <button className="bg-orange-500 hover:bg-orange-600  px-4 py-2 text-white  transition-colors">
          + New Post
        </button>
      </div>

      {filteredPosts.map((post) => (
        <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {post.category}
            </span>
          </div>
          <p className="text-sm mt-2 text-gray-700">{post.content}</p>
          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <span>By {post.author} • {post.createdAt}</span>
            <div className="flex gap-3 items-center">
              <span>👍 {post.likes}</span>
              <span>💬 {post.comments}</span>
              <span className="text-red-500 hover:underline cursor-pointer">Report</span>
            </div>
          </div>
        </div>
      ))}
      {/* <div>
        <Comment />
      </div> */}

     
    </div>
  );
};

export default Forum;
