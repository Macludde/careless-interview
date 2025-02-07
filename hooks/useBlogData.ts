import { useEffect, useState } from 'react';

type BlogPost = {
    id: number;
    title: string;
    body: string;
    subtitle: string;
    imageUrl: string;
    isFavourite: boolean;
};

export function toggleStarOnPost(id: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            const blogPost = data.find((post) => post.id === id);
            if (blogPost) {
                blogPost.isFavourite = !blogPost.isFavourite;
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
                data?.sort((a, b) => {
                    if (a.isFavourite && !b.isFavourite) return -1;
                    if (!a.isFavourite && b.isFavourite) return 1;
                    return a.id - b.id;
                });
                setData(data);
                setError(null);
            }
        }, 400);
    };

    useEffect(() => {
        fetch();
    }, []);

    return {
        isLoading,
        data,
        error,
        refetch: fetch,
    };
}

const data: BlogPost[] = [
    {
        id: 1,
        title: 'Trip to Tokyo',
        subtitle: 'Very nice',
        body: "The moment I stepped off the plane at Narita Airport, a wave of excitement hit me. The air smelled different—clean and crisp with a hint of something foreign yet familiar. I had dreamed of this trip for years, poring over travel blogs, memorizing subway maps, and imagining the dazzling city lights of Tokyo. And now, I was finally here.\n\nThe journey into the city was an adventure in itself. The Narita Express train glided smoothly through the countryside before transitioning into the endless sprawl of Tokyo's suburbs. I stared out the window, mesmerized by the contrast of modern skyscrapers and tiny traditional houses squeezed into every available space. When the train pulled into Shinjuku Station, I was immediately swept into the organized chaos of one of the busiest railway hubs in the world.\n\nShinjuku at night was electric. Neon signs bathed the streets in an artificial glow, advertising everything from ramen shops to pachinko parlors. The energy was intoxicating. I dragged my suitcase through the narrow alleys of Golden Gai, the historic district famous for its tiny bars, each only big enough to fit a handful of people. The scent of sizzling yakitori wafted through the air, making my stomach rumble. I had planned to check into my hotel first, but hunger won. I ducked into a tiny izakaya, where an elderly man behind the counter greeted me with a nod. I pointed to a few skewers on the menu, and soon, I was savoring grilled chicken glazed with a perfect balance of soy sauce and sweetness. It was simple yet unforgettable.\n\nn\nThe next morning, I woke early, still jet-lagged but eager to explore. My first stop was the Meiji Shrine, an oasis of tranquility in the heart of the city. The towering torii gate at the entrance made me feel like I was stepping into another world. Walking through the lush forested path, I could hear nothing but the sound of my own footsteps and the occasional rustle of leaves. At the main shrine, I watched as visitors bowed and clapped in reverence, making their wishes for good fortune. I followed suit, tossing a coin into the offering box and making my own silent wish.\n\nn\nFrom there, I ventured to Harajuku’s Takeshita Street, a stark contrast to the serene shrine. The street was alive with color—young fashionistas in outlandish outfits, trendy stores selling everything from gothic Lolita dresses to rainbow-colored cotton candy, and the unmistakable smell of freshly made crepes. Unable to resist, I bought one filled with matcha ice cream and red bean paste. It was every bit as delicious as I had hoped.\n\nIn the afternoon, I found myself in Akihabara, Tokyo’s mecca for anime and gaming. Towering buildings flashed with digital advertisements of the latest anime series, and arcades buzzed with the sound of button-mashing and excited cheers. I wandered into a retro gaming store, marveling at the sheer variety of old consoles and cartridges. Before I knew it, I was immersed in a row of claw machines, determined to win a plushie. After several failed attempts, I finally snagged a tiny Pikachu, feeling triumphant despite my lighter wallet.\n\nn\nAs evening fell, I headed to Shibuya to witness the legendary Scramble Crossing. The sight of hundreds—maybe even thousands—of people crossing the street in perfect harmony was mesmerizing. I joined the crowd, feeling the pulse of the city in my veins. From there, I made my way to an observation deck, where I gazed out at Tokyo’s sprawling skyline, the city stretching endlessly in every direction. The blinking lights, the moving trains, the sheer scale of it all—it was breathtaking.\n\nn\nFor dinner, I treated myself to a bowl of authentic tonkotsu ramen in a small shop tucked away in an alley. The rich, creamy broth, the perfectly chewy noodles, and the tender slices of chashu melted in my mouth. I ate slowly, savoring every bite, knowing that this moment—this feeling of complete contentment—was exactly why I had come to Tokyo.\n\nn\nAs I walked back to my hotel, taking in the sights and sounds of the city one last time for the night, I realized something: Tokyo was everything I had dreamed of and more. It was a place of contrasts—tradition and modernity, serenity and chaos, simplicity and extravagance. And this was only my first day. I couldn’t wait to see what the rest of the trip had in store.",
        imageUrl:
            'https://res.cloudinary.com/dbbvi3hom/image/upload/v1738919906/luans%20blog/f7ytbywhjuoln1f7ozzj.jpg',
        isFavourite: false,
    },
    {
        id: 2,
        title: 'Is AI taking over?',
        subtitle: "I'm not scared",
        body: 'With advancements in artificial intelligence, many wonder if AI will dominate the future. Should we be concerned?',
        imageUrl:
            'https://res.cloudinary.com/dbbvi3hom/image/upload/v1738919906/luans%20blog/kjvzucpjl2kdz0p9jjep.jpg',
        isFavourite: false,
    },
    {
        id: 3,
        title: 'Fashion for men',
        subtitle: 'Not only for women',
        body: "Men's fashion is evolving rapidly, blending comfort with style. Here’s how you can stay trendy.",
        imageUrl:
            'https://res.cloudinary.com/dbbvi3hom/image/upload/v1738919906/luans%20blog/uydloz9hgotynjntdhha.jpg',
        isFavourite: false,
    },
    {
        id: 4,
        title: 'Best beer in London',
        subtitle: 'Which one is best?',
        body: 'London has a rich beer culture with a variety of pubs offering some of the finest brews. Here’s our top picks!',
        imageUrl:
            'https://res.cloudinary.com/dbbvi3hom/image/upload/v1738919906/luans%20blog/lgwxwixuhbx4fmiylxhb.jpg',
        isFavourite: false,
    },
    {
        id: 5,
        title: 'Makeup for men',
        subtitle: 'Can we use it too?',
        body: 'Makeup is for everyone! More men are embracing cosmetics as a tool for confidence and self-expression.',
        imageUrl:
            'https://res.cloudinary.com/dbbvi3hom/image/upload/v1738919906/luans%20blog/p9prs3wfd64rsw0ttvj2.jpg',
        isFavourite: false,
    },
    {
        id: 6,
        title: 'Teletubbies for kids?',
        subtitle: 'Maybe for adults?',
        body: 'A nostalgic show for many, but is it really just for kids? Some adults still enjoy watching Teletubbies!',
        imageUrl:
            'https://res.cloudinary.com/dbbvi3hom/image/upload/v1738919906/luans%20blog/ylawsdos3mvu9zsgsa9s.avif',
        isFavourite: false,
    },
];

