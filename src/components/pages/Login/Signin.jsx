import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = async () => {
  // const { googleSignIn, user } = UserAuth();
  // const navigate = useNavigate();

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
  const result = await signInWithCredential(auth, credential);

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <div className='h-screen'>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;