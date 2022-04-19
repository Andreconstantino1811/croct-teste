import { FunctionComponent, useCallback } from "react";
import styles from "./css/Canvas.module.css";

export const Canvas: FunctionComponent = () => {
  const onLabelText3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='labelText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onErrorContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image11']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLabelText5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCropContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='uploadContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLabelTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cropContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUploadContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='rectangleRectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.canvasDiv}>
      <div className={styles.updateDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.labelDiv}>
          Drop the image here or click to browse.
        </div>
        <div className={styles.labelDiv1}>Organization Logo</div>
        <img className={styles.media2Icon} alt="" src="media-2.svg" />
        <img
          className={styles.image1Icon}
          alt=""
          src="image-1@2x.png"
          data-scroll-to="image1"
        />
      </div>
      <div className={styles.errorDiv} onClick={onErrorContainerClick}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.labelDiv2}>Sorry, the upload failed.</div>
        <div className={styles.labelDiv3} onClick={onLabelText3Click}>
          Try again
        </div>
        <div className={styles.rectangleDiv2} />
        <img className={styles.attentionIcon} alt="" src="attention.svg" />
      </div>
      <div
        className={styles.cropDiv}
        data-scroll-to="cropContainer"
        onClick={onCropContainerClick}
      >
        <div className={styles.rectangleDiv3} />
        <div className={styles.labelDiv4}>Crop</div>
        <img className={styles.closeIcon} alt="" src="close.svg" />
        <img className={styles.closeIcon1} alt="" src="close1.svg" />
        <img
          className={styles.image1Icon1}
          alt=""
          src="image-11@2x.png"
          data-scroll-to="image11"
        />
        <img
          className={styles.slider1DiscretAKnobCopy}
          alt=""
          src="slider1-discreta-knob-copy-16.svg"
        />
        <div className={styles.rectangleDiv4} />
        <div className={styles.labelDiv5} onClick={onLabelText5Click}>
          Save
        </div>
      </div>
      <div
        className={styles.uploadDiv}
        data-scroll-to="uploadContainer"
        onClick={onUploadContainerClick}
      >
        <div
          className={styles.rectangleDiv}
          data-scroll-to="rectangleRectangle"
        />
        <div className={styles.labelDiv6}>
          Drop the image here or click to browse.
        </div>
        <div
          className={styles.labelDiv7}
          data-scroll-to="labelText"
          onClick={onLabelTextClick}
        >
          Organization Logo
        </div>
        <img className={styles.media2Icon1} alt="" src="media-21.svg" />
      </div>
    </div>
  );
};
