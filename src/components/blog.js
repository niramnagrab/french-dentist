import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function Blog() {
    const { t } = useTranslation();
    return (
        <div className="blogpage">

            <div className="bloghero">
                <div className="blogherotext">
                    <h1 className="h2-bold">The best international dental clinic in Shanghai since 2007</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="blogheroimage">
                    <img src="./homepics/blog.jpeg" alt="blog-photo-dentist"  />
                </div>
            </div>

            <div className="blogs">
                <h2 className="h2-bold">More From Our blog</h2>
                <div className="blogtiles">
                <div className="blogtile">
                    <div className="blogtileimage"> <img src="./homepics/blog.jpeg" alt="blog-photo-dentist"  /> </div>
                    <h3>What happens during a root canal?</h3>
                    <p>What Happens During a Root Canal? According to the American Association of Endodontists, more than 15 million root canals are performed every year to remove.</p>
                </div>
                <div className="blogtile">
                    <div className="blogtileimage"> <img src="./homepics/blog.jpeg" alt="blog-photo-dentist"  /> </div>
                    <h3>What happens during a root canal?</h3>
                    <p>What Happens During a Root Canal? According to the American Association of Endodontists, more than 15 million root canals are performed every year to remove.</p>
                </div>
                <div className="blogtile">
                    <div className="blogtileimage"> <img src="./homepics/blog.jpeg" alt="blog-photo-dentist"  /> </div>
                    <h3>What happens during a root canal?</h3>
                    <p>What Happens During a Root Canal? According to the American Association of Endodontists, more than 15 million root canals are performed every year to remove.</p>
                </div>
                </div>
            </div>
           
        </div>
    )
}

export default Blog