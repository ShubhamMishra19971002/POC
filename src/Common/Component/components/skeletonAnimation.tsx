import React from 'react'
import variables from '../../styles/variables.module.scss';
import { Container } from '../styles/layouts';
import '../styles/skeletonAnimation.scss';
import { CardContainer } from './card';


export const ActiveClaimSkeletonAnimation = () => {
  return(
    <CardContainer theme="outline" className="skeleton-anm-box inactive-light">
      <div className="d-flex items-center gap-9">
        <div className="w-full">
          <span className="skeleton-heading skeleton-anm mb-6" style={{ animationDelay: '0.29s', width: '80%' }}></span>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.35s' }}></span>
          <span className="skeleton-text skeleton-anm mb-4"style={{ animationDelay: '0.55s' }}></span>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.75s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.90s' }}></span>

        </div>
        <div className="skeleton-img skeleton-anm"></div>
      </div>
    </CardContainer>
  )
}

export const IntimateClaimSkeletonAnimation = () => {
  return(
    <CardContainer theme="outline" className="skeleton-anm-box inactive-light">
    <p className="skeleton-heading skeleton-anm mb-6" style={{ animationDelay: '0.29s', width: '80%' }}></p>
    <div className="d-flex items-center gap-9">
        <div className='w-full'>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.35s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.35s' }}></span>
        </div>
        <div className='w-full'>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.55s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.55s' }}></span>
        </div>
        <div className='w-full'>
        <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.75s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.75s' }}></span>
        </div>
    </div>
  </CardContainer>
  )
}


export const CoveredMembersSkeletonAnimation = () => {
  return(
    <div className="d-flex items-start gap-4 overflowX-auto -ml-6 -mr-6">
      <CardContainer theme="outline" className="skeleton-anm-box inactive-light ml-6" style={{ minWidth: '210px', maxWidth: '210px' }}>
        <div className='d-flex items-center gap-4 justify-between mb-4'>
          <div className="skeleton-img skeleton-anm" style={{ maxWidth: '40px', minWidth: '40px', height: '40px' }}></div>
          <p className="skeleton-text skeleton-anm" style={{ animationDelay: '0.29s', width: '30%' }}></p>
        </div>
        <p className="skeleton-heading skeleton-anm mb-6" style={{ animationDelay: '0.35s' }}></p>
        <div className='mb-4 d-flex items-center gap-2'>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.40s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.40s' }}></span>
        </div>
        <div className='d-flex items-center gap-2'>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.55s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.55s' }}></span>
        </div>
      </CardContainer>
      <CardContainer theme="outline" className="skeleton-anm-box inactive-light mr-6" style={{ minWidth: '210px', maxWidth: '210px' }}>
        <div className='d-flex items-center gap-4 justify-between mb-4'>
          <div className="skeleton-img skeleton-anm" style={{ maxWidth: '40px', minWidth: '40px', height: '40px' }}></div>
          <p className="skeleton-text skeleton-anm" style={{ animationDelay: '0.29s', width: '30%' }}></p>
        </div>
        <p className="skeleton-heading skeleton-anm mb-6" style={{ animationDelay: '0.35s' }}></p>
        <div className='mb-4 d-flex items-center gap-2'>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.40s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.40s' }}></span>
        </div>
        <div className='d-flex items-center gap-2'>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.55s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.55s' }}></span>
        </div>
      </CardContainer>
    </div>
  )
}


export const PolicyCardSkeletonAnimation = () => {
  return(
    <CardContainer theme="outline" className="skeleton-anm-box inactive-light">
      <div className='d-flex items-center gap-4 justify-between mb-6'>
        <div className="skeleton-img skeleton-anm" style={{ animationDelay: '0.45s', maxWidth: '40px', minWidth: '40px', height: '40px' }}></div>
        <p className="skeleton-heading skeleton-anm" style={{ animationDelay: '0.29s', width: '30%' }}></p>
      </div>
      <div className='d-flex items-start gap-4 justify-between'>
        <div style={{ width: '60%' }}>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.55s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.55s' }}></span>
        </div>
        <div style={{ width: '30%' }}>
          <span className="skeleton-label skeleton-anm mb-1"style={{ animationDelay: '0.80s' }}></span>
          <span className="skeleton-text skeleton-anm"style={{ animationDelay: '0.80s' }}></span>
        </div>
      </div>
    </CardContainer>
  )
}
