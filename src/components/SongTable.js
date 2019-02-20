import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Query } from "react-apollo";
import gql from "graphql-tag";
const {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} = require('@material-ui/core');

const songQuery = gql`
    query{
      songs{
        id
        name
        artists
        youtubeURL
        lessonURL
        lyricsURL
        spotifyEmbedLink
        key
        notes
        tab
      }
    }
`

const onClickAddPlay = () => {
    // TODO: Toggle view of modal to add/edit spotify and youtube links
}

const onClickAddTab = () => {
    // TODO: Toggle add/edit for tabs
}

class SongTable extends Component {
    render() {
      const { onClickSong, onClickTab } = this.props;
      return (
      <Query
          query={songQuery}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :( ({error.message})</p>;
            const songs = data.songs

            return (
                <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Artist</TableCell>
                          <TableCell>Play</TableCell>
                          <TableCell>Tab</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {songs.map(song => (
                          <TableRow key={song.id}>
                              <TableCell>{song.name}</TableCell>
                              <TableCell>{song.artists}</TableCell>
                              <TableCell>
                                <Button variant="outlined" onClick={() => onClickSong(song.youtubeURL)} disabled={!song.youtubeURL}>Youtube</Button>
                                <Button variant="outlined" onClick={() => onClickSong(song.spotifyEmbedLink)} disabled={!song.spotifyEmbedLink}>Spotify</Button>
                                <Button variant="outlined" onClick={() => onClickAddPlay()}>Add</Button>
                              </TableCell>
                              <TableCell>
                                <Button variant="outlined" onClick={() => onClickTab(song.tab)} disabled={!song.tab}>Tab</Button>
                                <Button variant="outlined" onClick={() => onClickAddTab()}>Add</Button>
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
                </Table>
            )
          }}
      </Query>
  )
  };
}

export default SongTable;
