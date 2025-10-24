export const SET_PERSONECONSIGLIATE_RESULTS = "SET_PERSONECONSIGLIATE_RESULTS";
export const setPersoneConsigliate = (personeConsigliate) => ({
  type: SET_PERSONECONSIGLIATE_RESULTS,
  payload: {
    personeConsigliate,
  },
});

export const fetchProfiles = (personeConsigliate) => {
  return async (dispatch) => {
    try {
      const token = import.meta.env.VITE_MY_SECRET_KEY;
      const res = fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { data } = res.json();
      dispatch(setPersoneConsigliate(data.slice(0, 5), personeConsigliate));
    } catch (error) {
      console.error("Errore nel fetch:", error);
    }
  };
};
