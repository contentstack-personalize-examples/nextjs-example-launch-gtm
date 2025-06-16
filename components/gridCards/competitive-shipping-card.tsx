'use client';

import React from 'react';

import { MarketingProgram } from '@/lib/types';

import {
  InfoCard,
  InfoCardLink,
  InfoCardTitle,
} from '../info-card';

interface CompetitiveShippingCardProps {
  competitiveShipping: MarketingProgram;
}

const CompetitiveShippingCard = ({ competitiveShipping }: CompetitiveShippingCardProps) => {
  return (
    <InfoCard className={'rounded-lg text-white bg-gray-700'}>
      <InfoCardTitle>{competitiveShipping.heading}</InfoCardTitle>
      <InfoCardLink href={competitiveShipping.cta.href}>{competitiveShipping.cta.title}</InfoCardLink>
    </InfoCard>
  );
};

export default CompetitiveShippingCard;
