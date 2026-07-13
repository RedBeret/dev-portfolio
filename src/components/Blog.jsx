import React, { Component } from "react";
import "../App.scss";

class Blog extends Component {
    render() {
        const posts = this.props.posts || [];

        if (!posts.length) {
            return null;
        }

        return (
            <section className="section-block section-block--blog" id="blog">
                <div className="section-shell">
                    <div className="section-heading">
                        <p className="section-kicker">Writing</p>
                        <h2 className="section-title">Latest Blog Posts</h2>
                        <p className="section-intro">
                            Notes and technical write-ups from the public side of
                            my work: how the projects were built, what I learned,
                            and the thinking behind them.
                        </p>
                    </div>

                    <div className="blog-grid">
                        {posts.map((post) => {
                            const body = (
                                <>
                                    {post.tag ? (
                                        <span className="blog-card__tag">
                                            {post.tag}
                                        </span>
                                    ) : null}
                                    <div className="blog-card__meta">
                                        <span>{post.date}</span>
                                        {post.readingTime ? (
                                            <span>{post.readingTime}</span>
                                        ) : null}
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p className="blog-post-description">
                                        {post.description}
                                    </p>
                                    {post.link ? (
                                        <span className="blog-card__link">
                                            Read more
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    ) : null}
                                </>
                            );

                            return post.link ? (
                                <a
                                    className="blog-card blog-card--link"
                                    href={post.link}
                                    key={post.title}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {body}
                                </a>
                            ) : (
                                <article className="blog-card" key={post.title}>
                                    {body}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
