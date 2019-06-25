import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
                        <CardImg style={{ padding: '12px' }} variant="top" src="http://iammyrongaines.com/wp-content/uploads/2018/10/dark-netflix-series-785x450.jpg" />
                        <CardBody>
                          <CardTitle>Allein in der Dunkelheit</CardTitle>
                          <CardText>
                          "Dark" to niezwykła saga rozgrywająca się we współczesnych Niemczech. Zaginięcie dwojga małych dzieci...
                          </CardText>
                          <Link to="/review/Allein in der Dunkelheit">
                          <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect reviews__button ">Zobacz recenzje</button>
                          </Link>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-md-6">
                    <Card style={{ width: '100%' }}>
                        <CardImg style={{ padding: '12px' }} variant="top" src="https://edge.slashgear.com/wp-content/uploads/2018/04/142027593-980x620.jpg" />
                        <CardBody>
                        <CardTitle>Ścieżka rowerowa</CardTitle>
                          <CardText>
                          Chyba każdy z nas marzył o świecie magicznym, w którym mógłby stać się bohaterem i stawić czoła najstraszliwszym... 
                          </CardText>
                          <Link to="/review/sciezka rowerowa">
                          <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect reviews__button ">Zobacz recenzje</button>
                          </Link>
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