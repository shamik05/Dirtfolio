/* eslint-disable */
import React, { Component } from "react";
import "./SayMyName.css";
import NameAudio from "../../Audio/Aisling_McCaffrey_Name_Audio.mp3";

const SayMyName = () => {

  const playAudio = (event) => {
    event.preventDefault();
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }
  
  const test = <i 
  className="fas fa-deaf" 
  data-tooltip 
  title="Click to read name pronunciation and learn a little about its origins"
  aria-hidden="true"
  >test</i>;

  //Make sure you add a working URL right below this line for your name URL
  //I added this for accessibility. Also good for people creeping on your profile
  //at work who don't want to reveal they're wasting time while they're supposed
  //to be working. 
  const NameUrl = "put a url here to your name page on babynames.com or something like that";
    
  return (
          <div>
              <button
                onClick={playAudio}
                className="pronunciation-button p-1">
                <i
                  className="fa fa-volume-up"
                  data-tooltip
                  title="Click to hear name pronunciation">
                  </i>
                  button
              </button>
              <h1>HEADING</h1>
              <audio className="audio-element">
                <source src={ NameAudio }></source>
              </audio>
              <a
                href={NameUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
                className="iconography p-1"
                alt="test"
              >
              {test ? test : test.content="test"}
                
              </a>
      </div>
    )
}

export default SayMyName;

{/* <i
                  className="fas fa-deaf"
                  data-tooltip
                  title="Click to read name pronunciation and learn a little about its origins"
                ></i>  */}
