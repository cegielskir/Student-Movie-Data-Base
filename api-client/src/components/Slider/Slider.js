import React, {Component} from 'react';

import './Slider.css'


export default class Slider extends Component {

  constructor(props) {
      super(props);

      this.state = {
          slides: [
            {
              eachSlide: `url(images/banner1.jpg)`,
              title: 'Najlepsze filmy na studencki wieczór',
              subtitle: 'Już teraz zobacz jakie pozycję polecają koledzy z Twojej uczelni!',
            },
            {
              eachSlide: `url(images/banner1.jpg)`,
              title: 'Slide 2 title',
              subtitle: 'Lorem ipsum dolor sit amet',
            },
            {
              eachSlide: `url(images/banner1.jpg)`,
              title: 'Slide 3 title',
              subtitle: 'Lorem ipsum dolor sit amet',
            }
          ],
          autoplay: false,
          active: 0,
          max: 0
      };

      this.state.max = this.state.slides.length;
      this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
  }

  componentDidMount() {
      this.interval = setInterval( () => this.intervalBetweenSlides(), 3000); 
  }

  componentWillUnmount() {
      clearInterval( this.interval );
  }

  intervalBetweenSlides() {
      if (this.state.autoplay === true) {
          let currSlide = this.state.active;
          if (currSlide === this.state.max - 1) {
              this.setState({
                active: 0
              }); 
          } else {
            this.setState({
                active: currSlide+1
            }); 
          }
          this.setState({
              active: this.state.active
          });
      }
  }

  toggleAutoPlay() {
      this.setState({
          autoplay: !this.state.autoplay
      });
  }

  nextOne() {
      if (this.state.active < this.state.max - 1) {
          this.setState({
              active: this.state.active + 1
          });
      } else {
        this.setState({
            active: 0
        });
      }
  }

  prevOne() {
      if (this.state.active > 0) {
          this.setState({
              active: this.state.active - 1
          });
      } else {
        this.setState({
            active: this.state.max - 1
        });
      }
  }

  dots(index, event) {
      this.setState({
          active: index
      });
  }

  isActive(value) {
      if(this.state.active === value){
          return 'active';
      }
  }

  setSliderStyles() {
      const transition = this.state.active * - 100;
      
      return {
        width: ( this.state.slides.length * 100 ) + 'vw',
        transform: 'translateX(' + transition + 'vw)'
      }
  }

  renderSlides() {
      return this.state.slides.map( (item, index) => (
              <div 
                  className='each-slide' 
                  key={ index } 
                  style={{ backgroundImage: item.eachSlide }}>
                <div className="caption-wrapper">
                    <h2>{ item.title }</h2>
                    <h5>{ item.subtitle }</h5>
                </div> 
                <div className="button-wrapper">
                    <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect slider__button">Sprawdź</button>
                </div>
              </div>    
          )
      );
  }

  renderDots() {

      return this.state.slides.map( (item, index) => (

              <li 
              className={this.isActive(index) + ' dots' }   
              key={ index } 
              ref='dots' 
              onClick={ this.dots.bind(this, index) } >
                  <i>&#9679;</i>
              </li> 
          )
      );
  }

  renderPlayStop() {

      let playStop;

      if(this.state.autoplay){
          
          playStop =  <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                          <path d='M0 0h24v24H0z' fill='none'/>
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
                      </svg>;
      }else {
          playStop =  <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                          <path d='M0 0h24v24H0z' fill='none'/>
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                      </svg>;
      }

      return playStop;
  }

  renderArrows() {
      
      return (
          
          <div>
              <button 
              type='button'
              className='arrows prev' 
              onClick={ this.prevOne.bind(this) } >
                  <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                      <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                      <path d='M0 0h24v24H0z' fill='none'/>
                  </svg>
              </button>

              <button 
              type='button'
              className='arrows next' 
              onClick={this.nextOne.bind(this)} > 
                  <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                      <path d='M0 0h24v24H0z' fill='none'/>
                  </svg>
              </button>
          </div>
      );
  }

  render(){

      return (
          <div>
              <div className='slider'>
                  
                  <div 
                  className='wrapper' 
                  style={ this.setSliderStyles() }>
                  
                      { this.renderSlides() }
                  </div>
   
                  { this.renderArrows() }

                  <ul className='dots-container'>
                      { this.renderDots() }
                  </ul>

                  <i 
                  className='toggle-play' 
                  onClick={ this.toggleAutoPlay.bind(this) }> 
                      { this.renderPlayStop() }
                  </i>

              </div>
          </div>
      );
  }
};


