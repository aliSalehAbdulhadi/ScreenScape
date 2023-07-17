'use client';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { HiMail } from 'react-icons/hi';
import { BsShieldLockFill } from 'react-icons/bs';
import { ImSpinner8 } from 'react-icons/im';
import useClickOutside from '@/src/hooks/useClickOutside';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

const SignIn = () => {
  const [focusPass, setFocusPass] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);

  const input = document.querySelector('input') as HTMLInputElement;
  const passwordInput = document.querySelector(
    'input[type="password"]'
  ) as HTMLInputElement;

  const passRef = useClickOutside(() => {
    setFocusPass(false);
  });
  const emailRef = useClickOutside(() => {
    setFocusEmail(false);
  });

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form className="flex flex-col items-center  h-[30.5rem]">
            <div className="my-10 text-lg text-white text-opacity-50">
              Enter your account information
            </div>

            <div className="outline-none h-[5rem] flex flex-col items-center justify-center  w-full fade-in">
              <div className=" relative">
                <div
                  className={`${
                    focusEmail ||
                    values.email ||
                    values.email !== input?.defaultValue
                      ? 'hidden'
                      : ''
                  }  `}
                >
                  <label
                    htmlFor="email"
                    className=" absolute left-6 pointer-events-none top-[15px] text-xs text-offWhite text-opacity-50"
                  >
                    Email Address
                  </label>
                  <HiMail className=" absolute right-3 top-[13px] text-white text-opacity-30 h-[22px] w-[22px]" />
                </div>
                <Field
                  innerRef={emailRef}
                  onFocus={() => setFocusEmail(true)}
                  type="email"
                  name="email"
                  autoComplete="off"
                  className="rounded py-3 bg-white bg-opacity-5 pl-2  outline-none text-sm"
                />
              </div>
              <div className="h-[2rem] mt-1">
                {errors.email && touched.email ? (
                  <div className="text-red-500 text-sm ml-1">
                    {errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="outline-none h-[5rem] flex flex-col items-center justify-center  w-full fade-in">
              <div className=" relative">
                <div
                  className={`${
                    focusPass ||
                    values.password ||
                    values.password !== passwordInput?.defaultValue
                      ? 'hidden'
                      : ''
                  }  `}
                >
                  <label
                    htmlFor="password"
                    className=" absolute left-6 pointer-events-none top-[14px] text-xs text-offWhite text-opacity-50"
                  >
                    Password
                  </label>
                  <BsShieldLockFill className=" absolute right-3 top-[13px] text-white text-opacity-30 h-5 w-5" />
                </div>
                <Field
                  innerRef={passRef}
                  onFocus={() => setFocusPass(true)}
                  type="password"
                  name="password"
                  autoComplete="off"
                  className="rounded py-3 bg-white bg-opacity-5 pl-2 outline-none text-sm"
                />
              </div>

              <div className="h-[2rem] text-white text-opacity-50 text-sm mt-3 mr-20 flex items-center justify-center">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember Me
                </label>
              </div>

              <div className="h-[2rem] mt-1">
                {errors.password && touched.password ? (
                  <div className="text-red-500 text-sm ml-1 flex items-center">
                    {errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="h-[2.5rem] w-[7rem] rounded bg-secondary bg-opacity-90 text-black mt-5 flex items-center justify-center hover:opacity-80 transition-all fade-in"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="animate-spin">
                  <ImSpinner8 />
                </div>
              ) : (
                <span> Submit</span>
              )}
            </button>

            <div className="text-xs mt-4  text-white text-opacity-50 cursor-pointer transition-all hover:text-opacity-60">
              <span>Forgot password?</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
