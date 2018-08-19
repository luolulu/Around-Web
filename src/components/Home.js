import React  from 'react';
import { Tabs, Button } from 'antd';
import { GEO_OPTIONS, POS_KEY, AUTH_PREFIX, TOKEN_KEY, API_ROOT } from '../constants';


export class Home extends React.Component {

    state = {
        loadingGeoLocation: false,
    }
    componentDidMount() {
        this.getGeolocation();
        this.setState({ loadingGeoLocation: true, error: '' });
    }
    getGeolocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailedLoadGeolocation,
                GEO_OPTIONS,
            );
        } else {
            this.setState({ error: 'Your browser does not support geolocation!' });
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        this.setState({loadingGeoLocation: false});
        console.log(position);
        const { latitude, longitude } = position.coords;
        localStorage.setItem(POS_KEY, JSON.stringify( { lat: latitude, lon: longitude }));
    }

    onFailedLoadGeolocation = () => {
        console.log('failed to load geo location.');
        this.setState({loadingGeoLocation: false});

    }



    render() {
        const TabPane = Tabs.TabPane;
        const operations = <Button type="primary">Create New Post</Button>;
        return (
            <Tabs tabBarExtraContent={operations} className={"main-tabs"}>
                <TabPane tab="Image Posts" key="1">
                    {this.state.loadingGeoLocation ? 'loading geo location ...' : 'Content of tab 1'}
                    </TabPane>
                <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
                <TabPane tab="Map" key="3">Content of tab 3</TabPane>
            </Tabs>
        )
    };
}



