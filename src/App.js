import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import SongTable from './components/SongTable';
import EmbededSong from './components/EmbededSong';
import TabDisplay from './components/TabDisplay';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  state = {
      songEmbedURL: '',
      tab: null,
  }

  onClickSong = (songEmbedURL) => {
      this.setState({
          songEmbedURL,
      });
  }

  onClickTab = (tab) => {
      this.setState({
          tab,
      });
  }

  render() {
    return (
     <ApolloProvider client={client}>
        <div className="App">
            <EmbededSong src={this.state.songEmbedURL} />
            <TabDisplay tab={this.state.tab} />
            <SongTable onClickSong={this.onClickSong} onClickTab={this.onClickTab} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
