'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  removeName,
  resetName,
  getDataFromAPI,
} from '../../app/store/slices/nameSlice';

export default function Name() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.nameReducer.names);
  const status = useSelector((state) => state.nameReducer.status);
  const error = useSelector((state) => state.nameReducer.error);

  useEffect(() => {
    dispatch(getDataFromAPI());
  }, []);
  return (
    <div>
      <h1>Names:</h1>
      {status === 'idle' && <div>No names found</div>}
      {status === 'loading' && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {name.map((name, index) => {
        return <div key={index}>{name}</div>;
      })}
    </div>
  );
}
