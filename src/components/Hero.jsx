
import "../css/Hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <img src="/hero-images.png" alt="collection of images" className="hero--img" />
            <div className="hero--title">
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>

    )
}