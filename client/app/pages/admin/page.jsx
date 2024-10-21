import React from 'react';
import Sidemenu from "./sidemenu";
import Overview from './overview';

const page = () => {
  return (
    <div className="flex flex-1">
      <Sidemenu />
      <Overview/>
    </div>
  );
}

export default page;