import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

interface QuickCardProps {
  title: string
  icon?: string
//   onClick?: () => void
}

const QuickCard: React.FC<QuickCardProps> = ({ title, icon }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-300 p-4 cursor-pointer transition-transform hover:scale-105 duration-300 min-w-[120px] text-center w-30 h-40"
      style={{ backgroundColor: 'white' }} // Fallback style
    >
      <div className="flex flex-col items-center space-y-2">
        {/* Book Icon */}
        <div className="w-8 h-8 flex items-center justify-center">
            <img src={icon} alt="icon" className="w-8 h-8 object-contain"/>
         
        </div>
        
        {/* Title */}
        <span className="text-sm font-medium text-gray-700">
          {title}
        </span>
        <a href="#"className='text-sm text-orange-500 flex items-center gap-1'>view page <ArrowRightIcon className='w-4 h-4'/></a>
      </div>
    </div>
  )
}

export default QuickCard