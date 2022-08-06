import React from "react";
import styles from "../../styles/SliderScreen.module.scss";
import drop from "../../img/Drop.png";

type Props = {};

const SliderScreen = (props: Props) => {
  return (
    <main className={`h-[660px] overflow-scroll relative ${styles.example}`}>
      <section
        className={`flex border-t-[1px] border-black h-[660px] justify-center ${styles.sectionItem}`}
      >
        <img src={drop} className="h-[54px] w-[160px] self-start"></img>
        <div className="absolute mt-3">{"1/3"}</div>
      </section>
      <section
        className={`flex border-t-[1px] border-b-[1px] border-black h-[660px] justify-center ${styles.sectionItem}`}
      >
        <img src={drop} className="h-[54px] w-[160px] self-start "></img>
        <div className="absolute mt-3">{"2/3"}</div>
      </section>
      <section
        className={`flex border-b-[1px] border-black h-[660px] justify-center ${styles.sectionItem}`}
      >
        <img src={drop} className="h-[54px] w-[160px] self-start "></img>
        <div className="absolute mt-3">{"3/3"}</div>
      </section>
    </main>
  );
};

export default SliderScreen;
