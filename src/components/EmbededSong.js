import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
`

class EmbededSong extends Component {
    render() {
      const { src } = this.props;
      return (
          <Container>
              <iframe
                title="embededSong"
                width="220"
                height="80"
                src={src}
                frameBorder="0"
                allowtransparency="true"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </Container>
      )
  };
}

export default EmbededSong;
