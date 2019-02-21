import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Container = styled.div`
    width: 100%;
    Height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Tab = styled.textarea`
    height: 85%;
    max-height: 85%;
    width: 55%;
    max-width: 75%;
    margin-top: 25px;
    overflow-y: scroll;
    border: none;
    text-align: center:
`

const StyledButton = styled(Button)`
    align-self: start;
`

const onClickScroll = (e) => {
    //while(1) setTimeout(e.target.scrollBy(0,10), 500); don't do this!!!
}

class TabDisplay extends Component {
    render() {
      const { tab } = this.props;

      return (
          <Container>
            <StyledButton variant="outlined" onClick={(e) => onClickScroll(e)}>Scroll</StyledButton>
            <Tab value={tab ? tab : ''} readOnly />
          </Container>
      )
  };
}

export default TabDisplay;
