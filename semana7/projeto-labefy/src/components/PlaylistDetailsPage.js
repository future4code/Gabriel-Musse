import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import styled from "styled-components";

const PageTitle = styled.h1`
  margin: 0;
  color: grey;
`;

const ListDiv = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
`;

const ListContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  width: 50%;
`;
const PlaylistInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

const NamesDiv = styled.div`
  margin: 10px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background-color:#d94d34;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 120px;
  height: auto;
  padding: 1px;
  transition: 150ms;
  margin-left: 30px;
  &:hover {
    background-color: #8f3221;
    cursor: pointer;
  }
`;

const AddButton = styled.button`
  background-color: #fd7d02;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  width: 120px;
  padding: 1px;
  transition: 150ms;
  &:hover {
    background-color: #c76303;
    cursor: pointer;
  }
`;

export default class PlaylistDetailsPage extends React.Component {
  state = {
    inputNameValue: "",
    inputArtistValue: "",
    inputUrlValue: "",
    addingTrack: "false",
  };

  addTrackToPlaylist = (playlist) => {
    const body = {
      name: this.state.inputNameValue,
      artist: this.state.inputArtistValue,
      url: this.state.inputUrlValue,
    };
    axios
      .post(`${baseUrl}/${playlist.id}/tracks`, body, axiosConfig)
      .then((res) => {
        console.log("Add Track Sucessful");
        alert("Add Track Sucessful");
        this.setState({ inputNameValue: "" });
        this.setState({ inputArtistValue: "" });
        this.setState({ inputUrlValue: "" });
        this.setState({ addingTrack: "false" });
        this.props.getPlaylistTracks(playlist)
      })
      .catch((err) => {
        console.log("add track error:", err);
      });
  };

  removeTrackFromPlaylist = (track,playlist) => {
      axios
      .delete(`${baseUrl}/${playlist.id}/tracks/${track.id} `, axiosConfig)
      .then((res) => {
        console.log("Remove Track Sucessful");
        alert("Remove Track Sucessful");
        this.props.getPlaylistTracks(playlist)
      })
      .catch((err) => {
        console.log("remove track error:", err);
      });
  }

  handleAddTrackChange = () => {
    this.setState({ addingTrack: "true" });
  };

  handleInputNameChange = (e) => {
    this.setState({ inputNameValue: e.target.value });
  };
  handleInputArtistChange = (e) => {
    this.setState({ inputArtistValue: e.target.value });
  };
  handleInputUrlChange = (e) => {
    this.setState({ inputUrlValue: e.target.value });
  };
  render() {
    const track = this.props.track;
    const playlist = this.props.playlist;
    console.log("playlist:", playlist);
    console.log("track:", track);
    if (this.state.addingTrack == "true") {
      return (
        <div>
          <input
            placeholder={"Track Name"}
            value={this.state.inputNameValue}
            onChange={this.handleInputNameChange}
          />
          <input
            placeholder={"Artist Name"}
            value={this.state.inputArtistValue}
            onChange={this.handleInputArtistChange}
          />
          <input
            placeholder={"Url"}
            value={this.state.inputUrlValue}
            onChange={this.handleInputUrlChange}
          />
          <AddButton onClick={() => this.addTrackToPlaylist(playlist)}>
            CONFIRM EDIT
          </AddButton>
        </div>
      );
    } else {
      return (
        <ListDiv>
          <PageTitle>{playlist.name}'s Tracks</PageTitle>
          {this.props.track.map((track) => (
            <ListContainer>
            <PlaylistInfo key={track.id}>
              <NamesDiv>{track.name}</NamesDiv>
              <NamesDiv>{track.artist}</NamesDiv>
              <NamesDiv>{track.url}</NamesDiv>
              <RemoveButton onClick={() => this. removeTrackFromPlaylist(track,playlist)}>REMOVE TRACK</RemoveButton>
            </PlaylistInfo>
            </ListContainer>
          ))}
          <AddButton onClick={this.handleAddTrackChange}>ADD TRACK</AddButton>
        </ListDiv>
      );
    }
  }
}

//
