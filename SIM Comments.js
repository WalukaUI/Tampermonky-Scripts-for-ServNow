// ==UserScript==
// @name         SIM comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Pre genarated comments
// @author       walukg
// @match        https://t.corp.amazon.com/*
// @match        http://t.corp.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //add your custom comment to the below  array
    const comments=["WIP....","Checked all RF scanner stations.","Checked all departments. All feeds are running as expected.","Checked all breakrooms.  Computers are running as expected..","Checked all departments,Had to restart thin client ","Found a damaged scanner Asset/serial number                      issue                                                         solutionS20072520100843                      Damaged Arm                              Move to RMA shelf to send to RAD1 and issued asset number 9912306395","Updated asset numbers.."];

    //-------code------

      function addCommentToArea(e){
        let commentToPut=e.target.value;
        let commentLine=document.getElementById("sim-communicationActions--createComment");
        commentLine.value=commentToPut;
      }

      window.addEventListener('load', function () {
      function myFunction(){
      let comSelector=document.getElementById("commentSelector");
      if(!comSelector){
          setTimeout(()=>{
            let cc=document.getElementsByClassName("sim-communicationActions--header")
            const selector = document.createElement("select");
                          selector.id = "commentSelector";
            let mainOpt = document.createElement("option");
            mainOpt.innerText="Select a Comment";
            selector.appendChild(mainOpt);
            comments.forEach((e)=>{
                let opt = document.createElement("option");
                    opt.innerText=e;
                    opt.value=e;
                selector.appendChild(opt);
            });
            cc[0].appendChild(selector);
            document.getElementById("commentSelector").style.backgroundColor = '#F5EBEB';
            document.getElementById("commentSelector").style.maxWidth = '200px';
            document.getElementById("commentSelector").onchange = function(e) {addCommentToArea(e)};
          },2000)
      }
      }

      let getAddress=document.getElementsByClassName("awsui_tabs-tab_14rmt_1c36e_227");
      let splittedAddress=window.location.href.split("/");
              if(splittedAddress[4] === "communication"){
                  myFunction();
              }

              setTimeout(()=>{
                   for(let i=0; i<getAddress.length;i++){
                     if(i==1){
                       getAddress[i].addEventListener('click', myFunction, false);
                            }
                          }
              },2000)
})

})();