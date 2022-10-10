import styles from "../../styles/Components/MeetOurTeam/MeetOurTeam.module.css";
import Image from "next/image";
import { useState } from "react";

export default function MeetOurTeam() {
  const executives = [
    {
      name: "Athavan Thambimuthu",
      position: "Director of Projects",
      image: "https://media-exp2.licdn.com/dms/image/C4E03AQFG2LpVKJk3Sg/profile-displayphoto-shrink_200_200/0/1588706616470?e=2147483647&v=beta&t=M-TbLvPl6KY02n-fFQ21H3pGwAjYPVoUWWrhj3-MY_I",
      description: "",
    },
    {
      name: "Athavan Thambimuthu",
      position: "Director of Projects",
      image: "https://media-exp2.licdn.com/dms/image/C4E03AQFG2LpVKJk3Sg/profile-displayphoto-shrink_200_200/0/1588706616470?e=2147483647&v=beta&t=M-TbLvPl6KY02n-fFQ21H3pGwAjYPVoUWWrhj3-MY_I",
      description: "",
    },
    {
      name: "Athavan Thambimuthu",
      position: "Director of Projects",
      image: "https://media-exp2.licdn.com/dms/image/C4E03AQFG2LpVKJk3Sg/profile-displayphoto-shrink_200_200/0/1588706616470?e=2147483647&v=beta&t=M-TbLvPl6KY02n-fFQ21H3pGwAjYPVoUWWrhj3-MY_I",
      description: "",
    }
  ];

  function MemberCard(props) {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = (event) => {
      setIsClicked((current) => !current);
    };

    return (
      <div
        className={isClicked ? styles.flipcard : styles.flipcardclicked}
        onClick={handleClick}
      >
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <div
              className={styles.frontimage}
              style={{ backgroundImage: `url('${props.image}')` }}
            >
              {" "}
            </div>
            <div className={styles.frontname}> {props.name} </div>
            <div className={styles.frontposition}> {props.position}</div>
          </div>
          <div className={styles.flipcardback}>
            <div className={styles.backname}>{props.name}</div>
            <div className={styles.backposition}>{props.position}</div>
            <div className={styles.backcontent}>{props.description}</div>
            <div className={styles.imageContainer}>
              <div className={styles.logo}>
                <Image
                  width={30}
                  height={30}
                  src="/assets/linkedinIcon.png"
                />
              </div>
              <div className={styles.logo}>
                <Image width={30} height={30} src="/assets/githubIcon.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <u>M</u>EET OUR TEAM
        </div>
      </div>
      <div className={styles.header2}>
        <div className={styles.title2}>
          <u>E</u>XECUTIVES
        </div>
      </div>
      <div className={styles.section}>
        {executives.map((executive) => (
          <MemberCard
            name={executive.name}
            position={executive.position}
            image={executive.image}
            description={executive.description}
          />
        ))}</div>

      <div className={styles.header2}>
        <div className={styles.title2}>
          <u>D</u>EVELOPERS
        </div>
      </div>
      <div className={styles.section}>
        {executives.map((executive) => (
          <MemberCard
            name={executive.name}
            position={executive.position}
            image={executive.image}
            description={executive.description}
          />
        ))}</div>
      <div className={styles.header2}>
        <div className={styles.title2}>
          <u>M</u>EDIA
        </div>
      </div>
      <div className={styles.section}>
        {executives.map((executive) => (
          <MemberCard
            name={executive.name}
            position={executive.position}
            image={executive.image}
            description={executive.description}
          />
        ))}</div>
    </div>
  );
}
