import { useQuery } from "react-query";

export const CreateReactQuery = (key, currentPage, findUrlName) => {
	return useQuery([key, currentPage], () => findUrlName, {
		keepPreviousData: true,
		enabled: true,
	});
};
