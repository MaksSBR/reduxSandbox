// action creator
export const inc = () => {
  return { type: 'INC' };
};
export const dec = () => ( { type: 'DEC' } );

// export const rnd = (payload) => ( { type: 'RND', payload } );
export const rnd = () => {
  return {
    type: 'RND',
    payload: Math.floor(Math.random()*9),
  };
};
