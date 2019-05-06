import React, {Component} from 'react';

import Slider from './Slider/Slider'
import Tabs from './Movies/Tabs/Tabs'
import Carousel from './Rankings/Carousel'
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

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
              <section id="rankings">
                <div className="container">
                  <Carousel />
                </div>

              </section>
              <section id="reviews">
                <div className="container">
                  <h1 className="text-center section-title">RECENZJE</h1>
                  <div className="row">
                    <div className="col-md-6">
                      <Card style={{ width: '100%' }}>
                        <CardImg style={{ padding: '12px' }} variant="top" src="https://images.unsplash.com/photo-1482678264299-6eb83b49cb42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
                        <CardBody>
                          <CardTitle>Lorem ipsum</CardTitle>
                          <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Quisque erat mi, dictum pulvinar felis vitae, imperdiet dapibus felis. 
                          </CardText>
                          <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect reviews__button ">Zobacz recenzje</button>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-md-6">
                    <Card style={{ width: '100%' }}>
                        <CardImg style={{ padding: '12px' }} variant="top" src="https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                        <CardBody>
                        <CardTitle>Lorem ipsum</CardTitle>
                          <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Quisque erat mi, dictum pulvinar felis vitae, imperdiet dapibus felis. 
                          </CardText>
                          <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect reviews__button ">Zobacz recenzje</button>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        );
      }
}