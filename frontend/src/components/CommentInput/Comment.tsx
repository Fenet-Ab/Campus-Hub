import {useState} from 'react'
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
  
const Comment = () => {
   
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostContent, setNewPostContent] = useState("");
    const [newPostCategory, setNewPostCategory] = useState("");
  
    
  return (
    <div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Share Something Helpful</h2>
        <input 
          type="text"
          placeholder="Post Title" 
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea 
          placeholder="What's on your mind?" 
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select 
          value={newPostCategory}
          onChange={(e) => setNewPostCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Choose Category</option>
          <option value="Academic">Academic</option>
          <option value="Social">Social</option>
          <option value="Jobs">Jobs & Internships</option>
        </select>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
          Post
        </button>
      </div> </div>
  )
}

export default Comment