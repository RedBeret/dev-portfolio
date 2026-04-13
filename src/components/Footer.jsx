import React, { Component } from "react";

class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        const name = this.props.sharedBasicInfo?.name || "Steven Espinoza";
        const networks = this.props.sharedBasicInfo?.social?.map((network) => (
            <a
                aria-label={network.name}
                className="site-footer__social-link"
                href={network.url}
                key={network.name}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className={network.class}></i>
            </a>
        ));

        return (
            <footer className="site-footer" id="footer">
                <div className="section-shell site-footer__inner">
                    <div className="site-footer__copy">
                        <p className="site-footer__kicker">{name}</p>
                        <h2 className="site-footer__title">
                            Thoughtful software, calmer delivery, and public
                            work worth clicking into.
                        </h2>
                    </div>
                    <div className="site-footer__socials">{networks}</div>
                </div>
                <div className="site-footer__bottom">
                    <div className="section-shell">
                        <small>
                            Copyright &copy; {currentYear} {name}
                        </small>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
