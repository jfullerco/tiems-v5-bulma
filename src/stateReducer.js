export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userID: action.payload
      }
    case "GET_CLIENTS": 
      return {
        ...state,
        clients: action.payload
      };
    case "GET_SITES": 
      return {
        ...state,
        sites: action.payload
      };
    case "FOCUS_SITE":
      const inFocusSiteID = action.payload
      const inFocusSite = state.sites.map(site => {
        site._id === inFocusSiteID._id ? {site} : "No Site Details"
      })
      return inFocustSite;
    case "GET_ASSETS":
      return {
        ...state,
        assets: action.payload
      };
    case "FOCUS_ASSET":
      const inFocusAssetID = action.payload
      const inFocusAsset = state.assets.map(asset => {
        asset._id === inFocusAssetID._id ? {asset} : "No Asset Details"
      })
      return inFocusAsset;
  };
}
