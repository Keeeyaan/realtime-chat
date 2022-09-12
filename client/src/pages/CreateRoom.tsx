import React from 'react';

import Page from './Page';
import Header from '../components/Header';

const CreateRoom = () => {
  return (
    <Page title='Create Room'>
      <div className='bg-gradient-to-b from-indigo-900 h-[300px]'>
        <Header />
        <div className='flex justify-center h-[90vh] items-center'>
          <div className='shadow h-[350px] w-[500px] bg-slate-600 rounded'></div>
        </div>
      </div>
    </Page>
  );
};

export default CreateRoom;
