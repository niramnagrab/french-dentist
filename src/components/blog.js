import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function Blog() {
    const { t } = useTranslation();
    return (
        <div className="blogpage">

            <div className="bloghero">
                <div className="blogherotext">
                    <h1 className="title-header-left">{t("blogheader")}</h1>
                    <p className="normal-p-text">{t("blogintro")}</p>
                </div>
                <div className="blogheroimage">
                    <img src="./homepics/blog.jpeg" alt="blog-photo-dentist"  />
                </div>
            </div>

            <div className="blogs">
                <h2 className="title-header-center">{t("blogmore")}</h2>
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