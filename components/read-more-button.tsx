'use client';

import { InfoCardButton } from './info-card';

export const ReadMoreButton = ({ title }: { title: string }) => {

  const handleOnClick = async () => {
  };

  return (
    <InfoCardButton id="read-more" onClick={handleOnClick}>
      {title}
    </InfoCardButton>
  );
}