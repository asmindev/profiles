import React from 'react';
import { HeartIcon } from '@heroicons/react/solid'

// eslint-disable-next-line func-names
export default function () {
  return (
    <div className="w-full p-4 bg-slate-800 text-slate-400 text-center text-xs">

      <h1 className="">Made with <HeartIcon className="inline-block w-4 text-red-500" /> by Asmin</h1>
      <h1 id="visits" className="text-xs text-center text-slate-500 p-4">Load</h1>
    </div>
  );
}
