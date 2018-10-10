import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import '../css/App.css';

class TransitionComp extends Component{

    state = {
        show:true
    }

    showDiv = () => {
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        return(
            <div>

                <Transition
                    in={this.state.show}
                    timeout={{
                        enter: 2000,
                        exit: 2000
                    }}
                >
                    {state => 
                        <div className={`square square-${state}`}>
                            {`square square-${state}`}
                        </div>
                    }
                </Transition>

                <button onClick={this.showDiv} class="showDiv">ShowDiv</button>
            </div>

        )
    }
}


export default TransitionComp;