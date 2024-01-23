import { useState, useEffect } from 'react';

type articleStructure = {
	title: string;
	slug: string;
	brief: string;
	coverImage: string;
	dateAdded: string;
	dateUpdated: string;
	_id: string;
	__v: number;
};
type responseType = {
	latest3: articleStructure[];
	articles: articleStructure[];
};

export const useFetch = (
	url: string,
	options?: RequestInit
): [responseType | null, boolean] => {
	const [data, setData] = useState<responseType | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const fetchData = async () => {
		try {
			const response = await fetch(url, options);
			const resData = await response.json();

			setData(resData.data.result);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return [data, isLoading];
};
