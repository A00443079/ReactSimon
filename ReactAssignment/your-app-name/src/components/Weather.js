import React, { Component } from 'react';
import Cold from './cold.png';
import Mild from './mild.png';
import Sunny from './sunny.png';

class Weather extends Component {

    state = {
        loading: true,
        person: null,
        kelvin: 0,
        celcius: 0,
        farenheit: 0,
        finalvalue: 0,
        flagcelcius: true,
        
        cold: false,
        mild: false,
        sunny: false,

    };

    async componentDidMount() {
        const location = "Hyderabad";
        const url = "https://api.openweathermap.org/data/2.5/onecall?lat=17.3850&lon=78.4867&exclude=minutely,hourly,daily,alerts&appid=b16f3090c65c3fb6b47c6222d3fbcd60";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.current, loading: false });

        //Set states as COLD, MILD, SUNNY
        if (this.state.person.temp - 273.15 <= 10) this.setState({ cold: true, mild: false, sunny: false });
        else if (this.state.person.temp - 273.15 > 10 && this.state.person.temp - 273.15 <= 20) this.setState({ cold: false, mild: true, sunny: false });
        else this.setState({ cold: false, mild: false, sunny: true });

    }




    
    render() {
        return (
            
            <div>
                <h1>WEATHER COMPONENT:</h1>
                {this.state.loading || !this.state.person ? (<div>loading...</div>)
                    :
                    (
                        <div>

                            {this.state.cold &&
                                <img src={Cold} />
                            }
                            {this.state.mild &&
                                <img src={Mild} />
                            }
                            {this.state.sunny &&
                                <img src={Sunny} />
                            }

                            {this.state.flagcelcius && 
                                <div>Temperature in <span>CELCIUS</span>: {this.state.person.temp - 273.15}</div>
                            }

                            {!this.state.flagcelcius &&
                                <div>Temperature in <span>FARENHEIT</span>: {(this.state.person.temp - 273.15) * 9 / 5 + 32}</div>
                            }   
                            
                            
                            
                            <div>Pressure: {this.state.person.pressure}</div>
                            <div>Humidity: {this.state.person.humidity}</div>
                            <div>Sky Condition: {this.state.person.weather[0].description} </div>
                            

                            <br/>
                        </div>
                    )}

                {this.state.flagcelcius &&
                    <a className="textdiv togglebutton" onClick={() => this.setState({ flagcelcius: !this.state.flagcelcius })}>Change to °F</a>
                }
                {!this.state.flagcelcius &&
                    <a className="textdiv togglebutton" onClick={() => this.setState({ flagcelcius: !this.state.flagcelcius })}>Change to °C</a>
                }
                <br /><br /><a className="textdiv togglebutton" onClick={() => this.componentDidMount()}>REFRESH</a>
            </div>
            );
    }

    

    

}

export default Weather;