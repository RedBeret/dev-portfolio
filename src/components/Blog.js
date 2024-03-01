import React, { useState, useEffect } from "react";
import "../App.scss";

const Blog = ({ theme }) => {
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
                        return {
                            ...item,
                            description: descriptionWithoutFigures,
                        };
                    })
                );
            } catch (error) {
                console.error("Error fetching blog posts:", error);
                setError("Failed to load blog posts. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading)
        return <p className="loading-error-message">Loading blog posts...</p>;
    if (error) return <p className="loading-error-message">{error}</p>;

    return (
        <div id="blog" className={`blog-container ${theme}-theme`}>
            <h2>Latest Blog Posts</h2>
            <ul className="blog-posts-list">
                {posts.map((post) => (
                    <li key={post.guid} className="polaroidBlog">
                        <h3>{post.title}</h3>
                        <p>
                            Published on:{" "}
                            {new Date(post.pubDate).toLocaleDateString()}
                        </p>
                        <div
                            className="blog-post-description"
                            dangerouslySetInnerHTML={{
                                __html:
                                    post.description.substring(0, 2000) + "...",
                            }}
                        />
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read More
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
