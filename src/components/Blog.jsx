import React, { useState, useEffect } from "react";
import "../App.scss";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const API_URL =
                "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40redberet&api_key=csw8px55sdk5vdbdt5jpfxml2xdhoa90sf5wezp9&count=6";

            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setPosts(
                    data.items.map((item) => {
                        const descriptionWithoutFigures =
                            item.description.replace(
                                /<figure[^>]*>.*?<\/figure>/g,
                                ""
                            );
                        const descriptionText = descriptionWithoutFigures
                            .replace(/<[^>]+>/g, " ")
                            .replace(/\s+/g, " ")
                            .trim();

                        return {
                            ...item,
                            description: descriptionText,
                        };
                    })
                );
            } catch (fetchError) {
                console.error("Error fetching blog posts:", fetchError);
                setError("Failed to load blog posts. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section id="blog" className="section-block section-block--blog">
            <div className="section-shell">
                <div className="section-heading">
                    <p className="section-kicker">Writing</p>
                    <h2 className="section-title">Latest Blog Posts</h2>
                    <p className="section-intro">
                        A few recent posts from the public side of my work:
                        notes, ideas, and technical writing that add more
                        context beyond the project cards.
                    </p>
                </div>

                {loading ? (
                    <p className="status-message">Loading blog posts...</p>
                ) : null}
                {error ? <p className="status-message">{error}</p> : null}

                {!loading && !error ? (
                    <div className="blog-grid">
                        {posts.map((post) => (
                            <article key={post.guid} className="blog-card">
                                <div className="blog-card__meta">
                                    <span>
                                        {new Date(post.pubDate).toLocaleDateString()}
                                    </span>
                                </div>
                                <h3>{post.title}</h3>
                                <p className="blog-post-description">
                                    {post.description.substring(0, 320)}...
                                </p>
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="blog-card__link"
                                >
                                    Read more
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </article>
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default Blog;
