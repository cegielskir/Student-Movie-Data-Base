import React, {Component} from 'react';


import './Tab.css'

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
           <Tab label="Nadchodzące">
           <div className="row">
             <div className="col-md-2">
               <img src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"/>
             </div>
             <div className="col-md-2">
               <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"/>
             </div>
             <div className="col-md-2">
               <img src="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"/>
             </div>
             <div className="col-md-2">
               <img src="https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"/>
             </div>
             <div className="col-md-2">
               <img src="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"/>
             </div>
             <div className="col-md-2">
               <img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"/>
             </div>
            </div>
           </Tab>
           <Tab label="Popularne">
             <div>
              <p>Popularne</p>
             </div>
           </Tab>
           <Tab label="Często recenzowane">
             <div>
               <p>Często recenzowane</p>
             </div>
           </Tab>
           <Tab label="Najwyżej oceniane">
             <div>
               <p>Najwyżej oceniane</p>
             </div>
           </Tab>
         </Tabs>
        </div>
        
      )
    }
  }
  
class Tabs extends React.Component{
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

  
