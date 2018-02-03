import React,{Component} from 'react';
import {View} from 'react-native';
import ImageSlider from 'react-native-image-slider';


class Slider extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render(){
        return(
            <View style={Styles.sliderStyle}>
                <ImageSlider images={[
                    '/Users/lanet/Desktop/React-Native/MyShop/images/slider_1.jpg',
                    '/Users/lanet/Desktop/React-Native/MyShop/images/slider_2.jpg',
                    '/Users/lanet/Desktop/React-Native/MyShop/images/slider_3.jpeg'
                ]}
                             position={this.state.position}
                             onPositionChanged={position => this.setState({position})}
                             style={{height:50}}
                />
            </View>
        );
    }
}

const Styles={
    sliderStyle:{
        height:165,
    }
}

export default Slider;