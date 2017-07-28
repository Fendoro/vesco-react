import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { BlueButton, UseNavigate } from '../Button';
import ScrollAnimation from '../ScrollAnimation';
import Section from '../Section';
import ContentTitle from '../ContentTitle';
import { ID as WorkId } from '../Work';
import './assets/styles.css';

export const ID = 'about';
const About = () => {
  const Button = UseNavigate(BlueButton);
  return (
    <div>
      <div id="about-bg-diagonal" className="bg-parallax" />
      <Grid>
        <Row>
          <Col md={4}>
            <div id="about-content-box">
              <div id="about-content-box-outer">
                <div id="about-content-box-inner">
                  <ContentTitle title="About Vesco" />
                  <ScrollAnimation animateIn="fadeInUp">
                    <div id="about-description">
                      <p>Excepteur sint reprehenderit dolor dolore laboris ad cillum laborum sunt. Amet aliqua
                         commodo tempor sit ad voluptate nisi Lorem cupidatat cillum veniam voluptate nulla
                         minim. Reprehenderit eu aliqua excepteur ex exercitation dolor. Deserunt ad sunt
                         cillum cupidatat est do Lorem et nulla velit deserunt eiusmod et. Officia deserunt
                         cupidatat anim ipsum elit amet velit ex magna incididunt anim deserunt nisi magna.
                         Ex anim est Lorem fugiat incididunt occaecat deserunt qui proident.</p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp">
                    <div id="about-btn">
                      <Button
                        bsSize="lg"
                        href={`#${WorkId}`}
                        type="button"
                      >
                        View Our Work
                      </Button>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Section(About, ID);
