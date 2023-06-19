// ==UserScript==
// @name         SOW comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Pre genarated comments
// @author       walukg
// @match        https://sn.opstechit.amazon.dev/now/sow/record/incident/*
// @match        http://sn.opstechit.amazon.dev/now/sow/record/incident/*
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
        setTimeout(()=>{
          let targetLocation=document.getElementsByTagName('body')[0].firstChild;
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
          targetLocation.appendChild(selector);
          document.getElementById("commentSelector").style.backgroundColor = '#F5EBEB';
          document.getElementById("commentSelector").style.maxWidth = '200px';
          document.getElementById("commentSelector").onchange = function(e) {addCommentToArea(e)};
        },10000)
      
})

})();

