import React, { useState, useEffect } from "react";
import "../App.scss";

const MEDIUM_FEED_URL = "https://medium.com/feed/@redberet";
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_FEED_URL)}&count=6`;

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);

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
        <section className="section-block section-block--blog" id="blog">
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
                            <article className="blog-card" key={post.guid}>
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
                                    className="blog-card__link"
                                    href={post.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
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
