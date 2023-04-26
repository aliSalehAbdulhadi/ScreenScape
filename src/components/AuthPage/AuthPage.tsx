'use client';

import React, { useState } from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <LoadingComponent>
      <div className="relative min-h-[78vh] w-[100vw] xs:overflow-hidden bg-black flex xs:items-center justify-center text-offWhite">
        <div className="flex flex-col-reverse justify-end xs:justify-normal xs:flex-col w-[30rem] xs:my-3 xs:h-[40rem] bg-primary rounded z-[2] auth-background-gradient">
          <div className="flex center justify-around text-white text-opacity-50 mt-14 xs:mt-0">
            <button
              onClick={() => setIsSignUp(false)}
              type="button"
              className={`w-[50%] h-full py-3 transition-all text-lg ${
                !isSignUp && 'text-white text-opacity-80 w-[70%] text-[26px]'
              }`}
            >
              Sign In
            </button>
            <div className="py-3">|</div>
            <button
              onClick={() => setIsSignUp(true)}
              type="button"
              className={`w-[50%] py-3 transition-all text-lg ${
                isSignUp && 'text-white text-opacity-80 w-[70%] text-[26px]'
              }`}
            >
              Sign Up
            </button>
          </div>

          <div>
            {isSignUp ? (
              <div className="fade-in">
                <SignUp />
              </div>
            ) : (
              <div className="fade-in">
                <SignIn />
              </div>
            )}
          </div>
        </div>
        <div className="fullscreen-background h-full w-full top-[-300px] hidden xs:block xs:left-[80px]  sm:left-[135px] md:left-[170px]  lg:left-[190px] xl:left-[230px] xxxl:left-[300px] absolute"></div>
        <div className="fullscreen-background-2 h-full w-full top-[-162px] hidden xs:block xs:left-[-180px] sm:left-[-270px]  md:left-[-370px] lg:left-[-400px] xxxl:left-[-630px] absolute"></div>
        <div className="h-full w-full bg-black opacity-20 absolute"></div>
      </div>
    </LoadingComponent>
  );
};

export default AuthPage;
