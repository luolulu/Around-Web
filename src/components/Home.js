import React  from 'react';
import { Tabs, Button } from 'antd';

export class Home extends React.Component {

    render() {
        const TabPane = Tabs.TabPane;
        const operations = <Button type="primary">Create New Post</Button>;
        return (
            <div>
                <Tabs tabBarExtraContent={operations} className={"main-tabs"}>
                    <TabPane tab="Image Posts" key="1">Content of tab 1</TabPane>
                    <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
                    <TabPane tab="Map" key="3">Content of tab 3</TabPane>
                </Tabs>,

            </div>
        )
    };
}



