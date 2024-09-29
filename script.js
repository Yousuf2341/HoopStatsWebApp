{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Calculate BMI\
function calculateBMI() \{\
    const weight = document.getElementById('weight').value;\
    const height = document.getElementById('height').value;\
\
    if (weight && height) \{\
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);\
        document.getElementById('bmi-result').innerText = `Your BMI is $\{bmi\}`;\
    \} else \{\
        document.getElementById('bmi-result').innerText = 'Please enter both weight and height!';\
    \}\
\}\
\
// Track Water Intake\
let waterIntake = 0;\
\
function addWater() \{\
    waterIntake += 250; // Increment water intake by 250 ml\
    document.getElementById('water-intake').innerText = waterIntake;\
\}\
\
// Check Posture Warning\
function checkPosture() \{\
    const status = Math.random() > 0.5 ? 'Good Posture!' : 'Warning: Sit Up Straight!';\
    document.getElementById('posture-status').innerText = status;\
\}\
\
// Save Game Stats\
function saveStats() \{\
    const shotPercentage = document.getElementById('shot-percentage').value;\
    const dribbles = document.getElementById('dribbles-per-game').value;\
    const points = document.getElementById('points-per-game').value;\
    const assists = document.getElementById('assists-per-game').value;\
    const rebounds = document.getElementById('rebounds-per-game').value;\
    const blocks = document.getElementById('blocks-per-game').value;\
    const steals = document.getElementById('steals-per-game').value;\
\
    const stats =\
}