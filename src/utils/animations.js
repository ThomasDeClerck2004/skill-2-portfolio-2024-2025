export const slideIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : '100%',
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
            },
        },
    };
};