import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-router-dom";
import video from "../assets/video.MP4";
export default function Player() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </Container>
  );
}

const Container = styled.div``;
