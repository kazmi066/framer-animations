import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { useFeatureStore } from './store';

type TitleProps = {
  children: React.ReactNode,
  id: string
}

export const Title = ({ children, id } : TitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setFeatureInView = useFeatureStore(state => state.setFeatureInView);
  const featureInView = useFeatureStore(state => state.featureInView);

  useEffect(() => {
    if (isInView) {
      setFeatureInView(id)
    }

    if (!isInView && featureInView === id) setFeatureInView(null);
  }, [id, isInView, setFeatureInView, featureInView])

  return (
    <p ref={ref} className={`py-20 lg:text-4xl text-2xl text-lighter-grey transition-colors ${isInView ? "text-white" : "text-[#414141]"}`}>
      {children}
    </p>
  )
}
