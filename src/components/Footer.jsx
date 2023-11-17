import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="w-full flex flex-col items-center text-center">
            <span>© {new Date().getFullYear()} animekizi.org, All rights reserved. Not affiliated with Reddit Inc.</span>
            <div className="flex flex-col lg:flex-row items-center mb-4 gap-1 mt-2">
                <Link className="link" to="/privacy">Privacy Policy</Link>
                <span className="hidden lg:block"> | </span>
                <Link className="link" to="/terms">Terms of Use</Link>
                <span className="hidden lg:block"> | </span>
                <a className="link" target="_blank" href="https://github.com/animekizitv" rel="noreferrer">Source Code</a>
            </div>
        </div>
    )
};

export default Footer;
