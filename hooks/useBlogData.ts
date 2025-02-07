import { useEffect, useState } from 'react';

type BlogPost = {
    id: number,
    title: string,
    subtitle: string,
    isStarred: boolean
}

export function toggleStarOnPost(id: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            const blogPost = data.find(post => post.id === id);
            if (blogPost) {
                blogPost.isStarred = !blogPost.isStarred;
            }
            resolve();
        }, 300);
    });
}

export default function useBlogData() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<BlogPost[] | null>(null);

    const fetch = async (optimisticData?: BlogPost[]) => {
        if (optimisticData) setData(optimisticData);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            if (Math.random() < 0.1) {
                // keep old data
                setError('Failed to fetch data');
            } else {
                setData(data);
                setError(null);
            }
        }, 400);
    }

    useEffect(() => {
        fetch();
    }, []);

    return {
        isLoading,
        data,
        error,
        refetch: fetch
    }
}

const data: BlogPost[] = [{
    id: 1,
    title: 'Hello, World!',
    subtitle: 'This is a subtitle',
    isStarred: true,
}, {
    id: 2,
    title: 'More blog posts!',
    subtitle: 'Wonder what this one brings',
    isStarred: false,
}, {
    id: 3,
    title: 'Yet another post',
    subtitle: 'This is a subtitle',
    isStarred: false
}, {
    id: 4,
    title: 'Last post',
    subtitle: 'This is a subtitle',
    isStarred: true,
}]