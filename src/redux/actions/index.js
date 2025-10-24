export const SET_PERSONECONSIGLIATE_RESULTS = "SET_PERSONECONSIGLIATE_RESULTS";
export const setPersoneConsigliate = (personeConsigliate) => ({
  type: SET_PERSONECONSIGLIATE_RESULTS,
  payload: personeConsigliate,
});

export const fetchProfiles = () => {
  return async (dispatch) => {
    try {
      const token = import.meta.env.VITE_MY_SECRET_KEY;
      const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch(setPersoneConsigliate(data.slice(0, 5)));
    } catch (error) {
      console.error("Errore nel fetch:", error);
    }
  };
};
