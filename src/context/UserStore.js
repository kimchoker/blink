import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserStore = (props) => {
	return(
		<UserContext.Provider value={null}>
			{props.children}
		</UserContext.Provider>
	);
}

export default UserStore;