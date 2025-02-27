import React from 'react';
import Button from '../components/Button';

const Resume = () => {
  return (
    <div className="resume relative flex items-center justify-center w-full min-h-min z-10" id="resume">
      {/* Replace the 'href' with the path to your resume file and add 'download' attribute */}
      <a href="/GunaSekharParisaH.pdf" download className="w-fit">
        <Button name="Download My Resume" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
      </a>
    </div>
  );
};

export default Resume;
