
export const ScrollButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className="btn" onClick={scrollToTop}>
            Back to top
        </button>
    )
}