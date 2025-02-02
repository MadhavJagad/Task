import { useState } from "react";
import styles from "./Tabs.module.scss";
import TabContent1 from "./TabContents/TabContent1";
import TabContent2 from "./TabContents/TabContent2";
import TabContent3 from "./TabContents/TabContent3";
import TabContent4 from "./TabContents/TabContent4";
import TabContent5 from "./TabContents/TabContent5";
import TabContent6 from "./TabContents/TabContent6";
import TabContent7 from "./TabContents/TabContent7";
import TabContent9 from "./TabContents/TabContent9";
import TabContent8 from "./TabContents/TabContent8";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "TimeTable", component: <TabContent1 /> },
    { title: "Eilgibility Checker", component: <TabContent2 /> },
    { title: "Hall Ticket", component: <TabContent3 /> },
    { title: "SuperVisors", component: <TabContent4 /> },
    { title: "Paper Print", component: <TabContent5 /> },
    { title: "SuperVisors", component: <TabContent6 /> },
    { title: "Signature Sheet", component: <TabContent7 /> },
    { title: "Paper Check", component: <TabContent8 /> },
    { title: "Marks Entry", component: <TabContent9 /> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tab} ${
                activeTab === index ? styles.active : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.content}>{tabs[activeTab].component}</div>
    </div>
  );
};

export default Tabs;
