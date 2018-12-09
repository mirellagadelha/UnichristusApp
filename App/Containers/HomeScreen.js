import React, { Component } from 'react';
import { Image } from 'react-native';
import moment from 'moment';
import { strings } from '../i18n/index';

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Thumbnail,
  Button,
  Left,
  Body,
} from 'native-base';

import styles from './Styles/HomeScreenStyles';
import ServiceNews from '../Services/ServiceNews';


export default class HomeScreen extends Component {
  constructor(props) {
		super(props);

		this.state = {
			data: []
		};
  }
  
  getData = async() => {
    const newsData = await ServiceNews.getDataFromDB();
    this.setState({
       data: JSON.parse(newsData) 
    });
  }
  
  componentDidMount() {
    ServiceNews.getDataFromAPIAndSave();
    this.getData();
  }

  render() {
    moment.locale('en');
    return (
      <Container>
        <Content>
          {this.state.data.map((news, index) => (
            <Card style={styles.cardContent} key={index}>
              <CardItem key={index}>
                <Left>
                  <Thumbnail source={{uri: news.image}} />
                  <Body>
                    <Text>{news.title}</Text>
                    <Text note>{moment(news.title.created).format('d MMM YY')}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image style={styles.imageLogo} source={{uri: news.image}} />
                  <Text style={styles.textBody}>{news.description}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon name="ios-heart" style={{ color: '#ED4A6A' }} />
                    <Text style={styles.iconLike}>{news.likes}</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}
