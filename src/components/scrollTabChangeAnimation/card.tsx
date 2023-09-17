import React from 'react'
import { useFeatureStore } from './store';

type CardTypes = {
  image: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
}

export const Card = ({ children, image, id } : CardTypes) => {
  const featureInView = useFeatureStore((state) => state.featureInView);

  return (
    <div id={id} className={`
      absolute inset-0 rounded-2xl transition-opacity bg-cover
      ${image}
      ${featureInView === id ? 'opacity-100' : 'opacity-0'}
    `}>
      {children}
      <button
        onClick={() => null}
        className="show-me-btn absolute bottom-6 right-6 rounded-xl bg-black px-4 py-2 text-white shadow-lg"
      >
        Show me
      </button>
    </div>
  )
}

export const Todo = ({ id }: CardProps) => {
  return (
    <Card id={id} image="bg-feature-image-1">
      <span />
    </Card>
  );
};

export const Colors = ({ id }: CardProps) => {
  return (
    <Card id={id} image="bg-feature-image-2">
      <span />
    </Card>
  );
};

export const Availability = ({ id }: CardProps) => {
  return (
    <Card id={id} image="bg-feature-image-3">
      <span />
    </Card>
  );
};

export const SchedulingLinks = ({ id }: CardProps) => {
  return (
    <Card id={id} image="bg-feature-image-4">
      <span />
    </Card>
  );
};

export const Team = ({ id }: CardProps) => {
  return (
    <Card id={id} image="bg-feature-image-5">
      <span />
    </Card>
  );
};

