import styles from "../../styles/Components/MeetOurTeam/MeetOurTeam.module.css";
import Image from "next/image";
import { useState } from "react";

export default function MeetOurTeam() {
  const executives = [
    { name: "Athavan Thambimuthu", position: "Director of Projects" },
  ];

  function MemberCard(props) {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = (event) => {
      setIsClicked((current) => !current);
    };

    return (
      <div className={styles.memberCard}>
        <div
          className={isClicked ? styles.flipcard : styles.flipcardclicked}
          onClick={handleClick}
        >
          <div className={styles.flipcardinner}>
            <div className={styles.flipcardfront}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.flipcardback}>
              <div className={styles.backname}>Athavan Thambimuthu</div>
              <div className={styles.backposition}>Director of Projects</div>
              <div className={styles.backcontent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
              </div>
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
      </div>
    );
  }

  return (
    <>
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

      <MemberCard name="Athavan Thambimuthu" position="Director of Projects" />

      <div className={styles.header2}>
        <div className={styles.title2}>
          <u>D</u>EVELOPERS
        </div>
      </div>
      <div className={styles.header2}>
        <div className={styles.title2}>
          <u>M</u>EDIA
        </div>
      </div>
    </>
  );
}
