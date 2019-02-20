import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Container = styled.div`
    width: 100%;
    Height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Tab = styled.textarea`
    height: 85%;
    max-height: 85%;
    width: 45%;
    max-width: 70%;
    margin-top: 25px;
    overflow-y: scroll;
    border: none;
    text-align: center:
`

const onClickScroll = (e) => {
    //while(1) setTimeout(e.target.scrollBy(0,10), 500); don't do this!!!
}

class TabDisplay extends Component {
    render() {
      const { tab } = this.props;

      return (
          <Container>
            <Button variant="outlined" onClick={(e) => onClickScroll(e)}>Scroll</Button>
            <Tab value={tab ? tab : ''} readOnly />
          </Container>
      )
  };
}

export default TabDisplay;
