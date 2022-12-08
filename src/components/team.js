import React from "react";
import "../styles/style.css";
import { useTranslation } from "react-i18next";
import ReadMore from "./util-components/ReadMore";

function Team() {
  const { t } = useTranslation();
  return (
    <div>
      {/* <div className="team-hero">
                <img className="teamcover" src="./homepics/teamhero.jpg" alt="" />
                <div className="teamhero iphone">
                    <h1 className="mb-5 maintxtteam h2-bold ">{t("part61")} <br /> {t("part62")}</h1>
                    <p className="iphonetxt p-text">{t("part63")}</p>
                </div>
            </div> */}

      <div className="home-hero">
        <div className="hero-img">
          <img src="./homepics/aboutus7.png" alt="blog-photo-dentist" />
        </div>
        <div className="main">
          <p className="title">
            A team of <span>international dentists</span>
          </p>
          <p className="text">
            French Dentist dentists and staff were selected for their
            experience, commitment to excellent results and quality patient
            care. Our mission is to provide a patient-first focus on ensuring
            you are always comfortable during your visit.
          </p>
          <a href="/contact" className="hero-btn">
            Call us now
          </a>
        </div>
      </div>

      <div className="new-doctor">
        <div className="doctor-image">
          <img src="./homepics/zheng.jpg" alt="" />
        </div>

        <div className="doctor-description">
          <h1>Dr. Louis Costa</h1>
          <p>Dental surgeon and implantologist</p>
          <ReadMore
            text={[
              "Dr. Louis Costa is a dedicated dental specialist with over 20 years of experience in Implant Surgery, Endodontic, Periodontics and Esthetic Dentistry. Dr. Costa earned his dental Surgery degree from Marseille University in France, where he also later served as a Clinical instructor. Following his time at Marseille, he completed a Partnership Research Program in Rome, Italy. Prior to moving to Shanghai, Dr Costa practiced in private dental clinics in Monaco, Geneva and finally Moscow where he stayed 5 years, specializing in aesthetic and full-mouth rehabilitation. During his first visit to Shanghai in 2004, Dr Costa realize the lack of patient-focused dental and medical care in Shanghai. That is how French Dentist was born, with one goal: create a kind, safe, reliable modern dental practice where compassion and commitments towards patients is essential. Since then, Dr. Costa has been artistically creating beautiful smiles, and his patients love their transformations. It is his attention to detail and exceptional care that has earned him the reputation as leading cosmetic dentist Shanghai has to offer. Dr. Costa is committed to advanced continuing education, attending lectures, and completed his general practice with multiple certificates in various specializations, including aesthetic dentistry, and a master degree in medical and biological sciences. Dr Costa is also the proud cofounder of a charity association named A.D.H.E.P curing Vietnamese orphans. Outside of dentistry, Dr Costa keeps a busy life with his four children. He loves to play tennis,golf and his discerning eye for detail make him an occasional brilliant sculptor. He is fluent in French, English, Italian and conversant in Russian",
              false
            ]}
            readMore={"Read More"}
            seeLess={"See Less"}
          />
        </div>
      </div>

      <div className="new-doctor">
        <div className="doctor-description">
          <h1>Dr Honda Zheng</h1>
          <p>Dental surgeon and cosmetic dentist</p>
          <ReadMore
            text={[
              " Dr. HD Zheng is a second generation Chinese from Montreal, Canada where he received his Doctor in Dental Medicine at the University of Montreal, Canada's top 5 dental school. After graduating, he did his residency at the St-Luc hospital affiliated with University of Montreal (CHUM) mostly focusing on dental trauma and emergency dentistry. After working in a private clinic for 4 years in Montreal, he decided to move to Shanghai in 2019 to pursue his career. With an engaging personality and attention to detail, Dr. HD Zheng prides himself in establishing a natural rapport with his patients. He truly believes in patient-centered care in which he works with the patient to choose the treatment that suits best patient&#39;s needs. Dr HD Zheng is a Canadian trained and licensed dentist with a special interest in prosthodontics (dental crowns) and aesthetic dentistry (dental veneers). His approach is suited to patients with any level of anxiety. During his free time, Dr. Zheng enjoys discovering different parts of China and also improving his mandarin Chinese. He speaks fluently English, French and is improving on his Mandarin on a daily basis.",
              false
            ]}
            readMore={"Read More"}
            seeLess={"See Less"}
          />
        </div>
        <div className="doctor-image">
          <img src="./homepics/zheng.jpg" alt="" />
        </div>
      </div>

      <div className="new-doctor">
        <div className="doctor-image">
          <img src="./homepics/chiou.jpg" alt="" />
        </div>

        <div className="doctor-description">
          <h1>Dr Daan Chiou</h1>
          <p>Pediatric dentist and orthodontist</p>
          <ReadMore
            text={[
              "Dr. Chiou grew up in Canada with his family. He in 2009 at Kingston University (Canada) and was keen China. In 2010, he moved to Shanghai where he complete his dental degree in JiaoTong University. Since Chiou is working in Shanghai in international clinicsyears at Malo Clinic as Pedodontist &amp; Dr Chiou decided it was time for him to look for a That is how he met with Dr Costa and French Dentist’s Teaminsight and caring nature have been evident as into our philosophy and patient’s needs ». says Dr Costa. confident that he is a fantastic addition to French Dentist are all thrilled to have Dr Chiou joining us.» Dr Chiou’s make each dental visit positive, fun and comfortable most anxious patient. He cares for child’s teeth, from infancy through the teen years. Moreover, Dr orthodontist &amp; a certified Invisalign® orthodontistextensive experience, he will recommend the most appliance depending on each individual’s needs and in both English and Mandarin, he is passionate helping others.",
              false
            ]}
            readMore={"Read More"}
            seeLess={"See Less"}
          />
        </div>
      </div>

      {/* 
            <div className="teamsect text-justify p-text">
                <img className="costa-photo mr-5" src="./homepics/teamimg.png" alt="" />
                <div className="mt-5">
                    <h3>{t("part64")}</h3>
                    <h5>{t("part65")}</h5> <br />
                    <p>{t("part66")}<br /><br />

                    {t("part67")} <br /><br />

                    {t("part68")}<br /> <br />

                    {t("part69")}</p>
                </div>
            </div>

            <div className="teamsect text-justify p-text">
                <div className="mt-5">
                    <h3>{t("part70")}</h3>
                    <h5>{t("part71")}</h5> <br />
                    <p>{t("part72")}
                        <br />
                        <br />
                        {t("part73")}
                        <br />
                        <br />
                        {t("part74")}</p>
                </div>
                <img className="ml-5" src="./homepics/Zheng.jpg" alt="" />
            </div>

            <div className="teamsect text-justify p-text">
                <img className="mr-5" src="./homepics/chiou.jpg" alt="" />
                <div className="mt-5">
                    <h3>{t("part75")}</h3>
                    <h5>{t("part76")}</h5> <br />
                    <p>{t("part77")}
                        <br />
                        <br />
                        {t("part78")}
                        <br />
                        <br />
                        {t("part79")}
                    </p>
                </div>
            </div> */}
    </div>
  );
}

export default Team;
