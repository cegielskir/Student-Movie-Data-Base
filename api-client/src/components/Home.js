import React, {Component} from 'react';

import Slider from './Slider/Slider'
import Tabs from './Movies/Tabs/Tabs'

export default class Home extends Component {
    render() {
        return (
          <div>
            <Slider />
            <main>
              <section id="movies">
                <div className="container">
                  <Tabs />
                </div>
              </section>
            </main>
          </div>
        );
      }
}