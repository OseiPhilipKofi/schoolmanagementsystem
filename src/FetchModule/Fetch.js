import { useEffect, useState } from "react";

export default function FetchResults(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        } catch (err) {
        setError(err);
        } finally {
        setLoading(false);
        }
    };

    fetchData();
    }, [url]); // Re-run effect when URL changes

    return { data, loading, error };
};
