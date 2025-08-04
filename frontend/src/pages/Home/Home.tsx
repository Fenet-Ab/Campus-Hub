import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header.tsx';
import Card from '../../components/Card/Card.tsx';
import QuickCard from '../../components/QuickLinks/QuickCard.tsx';
import LoginPopup from '../../components/LoginPopup/LoginPopup.tsx';
import { assets } from '../../assets/assets.ts';

const Home: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div>
            <Header setShowLogin={setShowLogin} />
            
            {/* Login Popup with proper background */}
            {showLogin && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <LoginPopup setShowLogin={setShowLogin} />
                </div>
            )}
            
            <h2 className="text-xl font-bold text-gray-800  header">Explore Campus Hub</h2>
            <div className='container'>
          
            <Card
        image="/forem.png"
        title="Vibrant Forums"
        description="Engage in discussions, ask questions, and share knowledge with your peers on a wide range of academic and social topics."
        buttonText="Explore Forum"
        onClick={() => alert("Clicked Software Engineering")}
      />
       <Card
        image="/market.jpg"
        title="Student Marketplace"
        description="Buy and sell cosmetics, educational materials, clothes, and more!"
        buttonText="Browse Marketplace"
        onClick={() => alert("Clicked Software Engineering")}
      />
       <Card
        image="/event.png"
        title="Campus Events"
        description="Stay updated on all campus events, workshops, and social gatherings. Never miss out on what's happening around you."
        buttonText="Discover Events"
        onClick={() => alert("Clicked Software Engineering")}
      />
    </div>
    <div className="flex flex-col justify-center items-center ">
        <h2 className='text-2xl font-bold text-gray-800 mb-2 header'>Quick Links</h2>
        <div className='flex justify-between items-center p-4 gap-16'>
        <QuickCard title="Study Groups" icon={assets.studyGroup} />
        <QuickCard title="Connect with Mentors" icon={assets.connect}/>
        <QuickCard title="Academic Resources and Calender" icon={assets.graduationCap}/>
        <QuickCard title="Career Services" icon={assets.briefcase}/>
        <QuickCard title="Lost & Found" icon={assets.bell}/>
        <QuickCard title="Campus News" icon={assets.mail}/>

        </div>
        
        
    </div>
            

        </div>
    );
};

export default Home; 