---
layout: post
title: 'First Things First'
date: 2016-02-24 09:00:00 -0500
---

The first one will be Photoshop.

<svg width="100%" height="100%" viewBox="0 0 1000 300"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path id="MyPath"
      d=" M 100 200
          C 200 100 300   0 400 100
          C 500 200 600 300 700 200
          C 800 100 900 100 900 100"/>
  </defs>
  <use xlink=:href="#MyPath" fill="none" stroke="red" />
  
  <text font-family="Verdana" font-size="42.5">
    <textPath xlink:href="#MyPath">
      Dynamic text over an organic shape. Whod'a 'thunk!?
    </textPath>
  </text>
  
  <rect x="1" y="1" width="998" height="298"
    fill="none" stroke="black" stroke-width="2" />
</svg>