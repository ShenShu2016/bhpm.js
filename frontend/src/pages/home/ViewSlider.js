import React, { useEffect } from "react";
import  { Component } from 'react';
import { fetchLotss, selectAllLotss } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import { CSSProperties } from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const createCarouselItemImage = (index, options = {}) => (
  <div key={index} style={{width: "25%"}}>
      <img src={`https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0144251-prod.s3.us-west-1.amazonaws.com/public/auction1/${index}_1.jpg`} />
      <p className="legend">Legend {index}</p>
  </div>
);

const baseChildren = <div>{[...Array(100).keys()].slice(1).map(createCarouselItemImage)}</div>;


class ViewSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 60,
            autoPlay: false,
        };
    }

    next = () => {
        this.setState((state) => ({

            currentSlide: state.currentSlide + 1,
        }));
    };

    prev = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide - 1,
        }));
    };

    changeAutoPlay = () => {
        this.setState((state) => ({
            autoPlay: !state.autoPlay,
        }));
    };

    updateCurrentSlide = (index) => {
        const { currentSlide } = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    };

    render() {
        const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
        const containerStyle = { margin: '5px 0 20px' };
        return (
            <div>
                <div style={containerStyle}>
                    <p>External slide value: {this.state.currentSlide}</p>
                    <button onClick={this.prev} style={buttonStyle}>
                        Prev
                    </button>
                    <button onClick={this.next} style={buttonStyle}>
                        Next
                    </button>
                    <button onClick={this.changeAutoPlay} style={buttonStyle}>
                        Toggle Autoplay ({this.state.autoPlay ? 'true' : 'false'})
                    </button>
                </div>
                <Carousel
                    autoPlay={this.state.autoPlay}
                    selectedItem={this.state.currentSlide}
                    onChange={this.updateCurrentSlide}
                    {...this.props}
                >
                    {baseChildren.props.children}
                </Carousel>
            </div>
        );
    }
};

export default ViewSlider;