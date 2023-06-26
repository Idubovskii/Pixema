import { Fragment, type ReactNode } from 'react';

import { Tab, TabList, TabPanel, Tabs as ReactTabs } from 'react-tabs';
import './tabs.scss';

interface TabItem {
  txt?: string;
  condition?: unknown;
  content: ReactNode;
}

interface TabsProperties {
  tabs: TabItem[];
}

export const Tabs = ({ tabs }: TabsProperties) => {
  return (
    <ReactTabs className="tabs">
      <TabList>
        {tabs.map((element) => (
          <Fragment key={element.txt}>
            {element.condition ? <Tab>{element.txt}</Tab> : null}
          </Fragment>
        ))}
      </TabList>
      {tabs.map((element) => (
        <Fragment key={element.txt}>
          {element.condition ? (
            <TabPanel key={element.txt}>{element.content}</TabPanel>
          ) : null}
        </Fragment>
      ))}
    </ReactTabs>
  );
};
