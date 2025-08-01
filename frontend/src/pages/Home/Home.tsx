import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header.tsx';
import Card from '../../components/Card/Card.tsx';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h2 className="text-xl font-bold text-gray-800 mb-2 header">Explore Campus Hub</h2>
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
            

        </div>
    );
};

export default Home; 