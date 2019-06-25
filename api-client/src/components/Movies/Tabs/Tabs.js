import React, {Component} from 'react';

import MovieProvider from '../../../api/client';

import './Tab.css';

export default class AppTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: props.moviesList 
    };
   }
    
    render(){
      return(
        <div className="tabs">
          <h1>FILMY</h1>
         <Tabs>
           <Tab label="Popularne">
            <MovieProvider type="popular"/>
           </Tab>
           <Tab label="Nadchodzące">
             <div>
              <MovieProvider type="coming-soon"/>

             </div>
           </Tab>
           <Tab label="Często recenzowane">
             <div>
              <MovieProvider type="most-reviewed"/>
             </div>
           </Tab>
           <Tab label="Najwyżej oceniane">
             <div>
              <MovieProvider type="best-rated"/>
             </div>
           </Tab>
         </Tabs>
        </div>
        
      )
    }
  }
  
class Tabs extends Component{
    state ={
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {
        this.setState({ activeTab: tab });
    };
    render(){
        
        let content;
        let buttons = [];
        return (
        <div>
            {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
            })}
            
            <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
            <div className="tab-content">{content}</div>
            
        </div>
        );
    }
}

const TabButtons = ({buttons, changeTab, activeTab}) => {
    return(
        <div className="tab-buttons">
        {buttons.map(button =>{
            return <button key={button} className={button === activeTab? 'active': ''} onClick={() => changeTab(button)}>{button}</button>
        })}
        </div>
    )
}

const Tab = props =>{
    return(
        <React.Fragment>
        {props.children}
        </React.Fragment>
    )
}

  
