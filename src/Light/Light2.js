import React from 'react';
import './Light.css';
import Circle from '../Circle';

const colors = {
    red: {
      backgroundColor: "#cc3232"
    },
    yellow: {
      backgroundColor: "#e7b416"
    },
    green: {
      backgroundColor: "#2dc937"
    },
    grey: {
      backgroundColor: "grey"
    }
  };
  
  class Light2 extends React.Component {
    state = {
        red: colors.grey,
        yellow: colors.grey,
        green: colors.green,
        next: 'yellow'
      }
  
      handeLightChange = () => {
        switch (this.state.next) {
          case "red":
            this.setState({
              red: colors.red,
              yellow: colors.grey,
              green: colors.grey,
              next: 'green'
            });
            this.waitRedInterval();
            break;
          case "yellow":
            this.setState({
              red: colors.grey,
              yellow: colors.yellow,
              green: colors.grey,
              next: 'red'
            });
            this.waitYellowtInterval();
            break;
          case "green":
            this.setState({
              red: colors.grey,
              yellow: colors.grey,
              green: colors.green,
              next: 'yellow'
            });
            this.waitGreenInterval();
            break;
        }
      }
  
      waitRedInterval() {
        setTimeout(this.handeLightChange, 4500);
      }
    
      waitYellowtInterval() {
        setTimeout(this.handeLightChange, 1500);
      }

      waitGreenInterval() {
        setTimeout(this.handeLightChange, 3000)
      }
      componentDidMount() {
        this.waitGreenInterval();
      }
  
      
  
    render() {
      return (
        <><div class="light">
          <Circle color={this.state.red} />
          <Circle color={this.state.yellow} />
          <Circle color={this.state.green} />
        </div></>
      )
    }
  }
  
  export default Light2;