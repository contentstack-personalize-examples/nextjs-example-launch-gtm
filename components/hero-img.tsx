import React from 'react';

import { cn } from '@/lib/utils';

interface HeroImageProps {
  imageUrl: string;
  imageCaption: string;
  className?: string;
}

const HeroImage = ({ imageUrl, imageCaption, className }: HeroImageProps) => {
  return (
    <div className={cn(className, 'flex flex-col')}>
      <div className='relative flex-grow'>
        <img className='object-cover' src={`${imageUrl}?width=440&height=440&quality=50`} alt={imageCaption} />
      </div>
      <p className='text-center text-sm py-2'>{imageCaption}</p>
    </div>
  );
};

export default HeroImage;
