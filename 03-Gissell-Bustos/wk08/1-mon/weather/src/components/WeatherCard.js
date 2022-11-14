import React from "react";
import { Card, Feed } from "semantic-ui-react";

const WeaterCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>City</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <h5>Date</h5>
            <div className="weater-card">
              <div className="weater-card-child">Temperature</div>
              <div className="weater-card-child">Humidity</div>
            </div>
            <div className="weater-card">
              <div className="weater-card-child">Sunrise</div>
              <div className="weater-card-child">Sunset</div>
            </div>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default WeaterCard;
