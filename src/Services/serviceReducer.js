export default async (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return await http.get(`/rest/client-access?metafields=true&q={"tiemsUser": "${action.payload}"}&max=1`)
  };
}