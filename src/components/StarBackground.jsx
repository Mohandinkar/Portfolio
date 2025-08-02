import { useEffect } from 'react'
import { useState } from 'react'

const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(()=>{
        generateStars();
    }, []);

    const generateStars = ()=>{
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        )

        const newStars = [];

        for(let i = 0; i < numberOfStars; i++) {
            const star = {
                id :i,
                size : Math.random() * 3 + 1, // size between 1 and 4
                x : Math.random() * 100,
                y : Math.random() * 100,
                opacity : Math.random() * 0.5 + 0.5, // opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // duration between 2 and 6 seconds
            };

            newStars.push(star);
        }

        // Set the stars state
        setStars(newStars);
    }

  return (
    <>
    <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
        {
            stars.map((star)=>(
                <div key={star.id} className='star animate-pulse-subtle' style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`,
                }} />
            ))
        }

    </div>
    </>
  )
}

export default StarBackground
