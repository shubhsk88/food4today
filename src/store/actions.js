const filterRecipes = category => ({
  type: 'FILTER',
  category,
});

export const fetchInit = () => ({
  type: 'STORIES_FETCH_INIT',
});

export const fetchSuccess = data => ({
  type: 'STORIES_FETCH_SUCCESS',
  payload: data.meals,
});

export const fetchFailure = () => ({
  type: 'STORIES_FETCH_FAILURE',
})

export default filterRecipes;
