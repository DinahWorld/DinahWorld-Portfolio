import React from 'react';
import '../styles/Home.css';
import { ReactComponent as HomeLogo } from '../assets/homeLogo.svg';
import { useMousePosition } from './useMousePosition';

let x, y, pos;
let x0 = 0;
let y0 = 0;

function Stars() {
	const position = useMousePosition();
	x0 = position.x / 50;
	y0 = position.y / 50;
	pos = x0 + ' ' + y0 + ' 628 335';
	console.log(x0);
	return (
		<svg
			width='628'
			height='335'
			viewBox={pos}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='21.2301' cy='86.3028' r='0.816743' fill='white' />
			<circle cx='21.2301' cy='86.3028' r='0.816743' fill='white' />
			<circle cx='37.5649' cy='207.181' r='0.816743' fill='white' />
			<circle cx='37.5649' cy='207.181' r='0.816743' fill='white' />
			<circle cx='84.936' cy='123.873' r='2.45023' fill='white' />
			<circle cx='84.936' cy='123.873' r='2.45023' fill='white' />
			<circle cx='65.3342' cy='83.0358' r='2.45023' fill='white' />
			<circle cx='65.3342' cy='83.0358' r='2.45023' fill='white' />
			<circle cx='3.26173' cy='151.642' r='2.45023' fill='white' />
			<circle cx='3.26173' cy='151.642' r='2.45023' fill='white' />
			<circle
				cx='191.614'
				cy='78.4587'
				r='0.816743'
				transform='rotate(-78.9592 191.614 78.4587)'
				fill='white'
			/>
			<circle
				cx='191.614'
				cy='78.4587'
				r='0.816743'
				transform='rotate(-78.9592 191.614 78.4587)'
				fill='white'
			/>
			<circle
				cx='313.383'
				cy='85.5754'
				r='0.816743'
				transform='rotate(-78.9592 313.383 85.5754)'
				fill='white'
			/>
			<circle
				cx='313.383'
				cy='85.5754'
				r='0.816743'
				transform='rotate(-78.9592 313.383 85.5754)'
				fill='white'
			/>
			<circle
				cx='240.689'
				cy='23.127'
				r='2.45023'
				transform='rotate(-78.9592 240.689 23.127)'
				fill='white'
			/>
			<circle
				cx='240.689'
				cy='23.127'
				r='2.45023'
				transform='rotate(-78.9592 240.689 23.127)'
				fill='white'
			/>
			<circle
				cx='337.705'
				cy='148.571'
				r='2.45023'
				transform='rotate(-78.9592 337.705 148.571)'
				fill='white'
			/>
			<circle
				cx='337.705'
				cy='148.571'
				r='2.45023'
				transform='rotate(-78.9592 337.705 148.571)'
				fill='white'
			/>
			<circle
				cx='252.303'
				cy='108.608'
				r='2.45023'
				transform='rotate(-78.9592 252.303 108.608)'
				fill='white'
			/>
			<circle
				cx='252.303'
				cy='108.608'
				r='2.45023'
				transform='rotate(-78.9592 252.303 108.608)'
				fill='white'
			/>
			<circle
				cx='414.194'
				cy='61.2678'
				r='0.816743'
				transform='rotate(-62.2212 414.194 61.2678)'
				fill='white'
			/>
			<circle
				cx='414.194'
				cy='61.2678'
				r='0.816743'
				transform='rotate(-62.2212 414.194 61.2678)'
				fill='white'
			/>
			<circle
				cx='528.754'
				cy='103.152'
				r='0.816743'
				transform='rotate(-62.2212 528.754 103.152)'
				fill='white'
			/>
			<circle
				cx='528.754'
				cy='103.152'
				r='0.816743'
				transform='rotate(-62.2212 528.754 103.152)'
				fill='white'
			/>
			<circle
				cx='477.125'
				cy='22.4137'
				r='2.45023'
				transform='rotate(-62.2212 477.125 22.4137)'
				fill='white'
			/>
			<circle
				cx='477.125'
				cy='22.4137'
				r='2.45023'
				transform='rotate(-62.2212 477.125 22.4137)'
				fill='white'
			/>
			<circle
				cx='431.859'
				cy='20.7239'
				r='2.45023'
				transform='rotate(-62.2212 431.859 20.7239)'
				fill='white'
			/>
			<circle
				cx='431.859'
				cy='20.7239'
				r='2.45023'
				transform='rotate(-62.2212 431.859 20.7239)'
				fill='white'
			/>
			<circle
				cx='563.224'
				cy='306.101'
				r='2.45023'
				transform='rotate(84.7399 563.224 306.101)'
				fill='white'
			/>
			<circle
				cx='563.224'
				cy='306.101'
				r='2.45023'
				transform='rotate(84.7399 563.224 306.101)'
				fill='white'
			/>
			<circle
				cx='597.641'
				cy='270.124'
				r='0.816743'
				transform='rotate(84.7399 597.641 270.124)'
				fill='white'
			/>
			<circle
				cx='597.641'
				cy='270.124'
				r='0.816743'
				transform='rotate(84.7399 597.641 270.124)'
				fill='white'
			/>
			<circle
				cx='624.586'
				cy='295.53'
				r='2.45023'
				transform='rotate(84.7399 624.586 295.53)'
				fill='white'
			/>
			<circle
				cx='624.586'
				cy='295.53'
				r='2.45023'
				transform='rotate(84.7399 624.586 295.53)'
				fill='white'
			/>
			<circle
				cx='605.572'
				cy='222.643'
				r='3.26697'
				transform='rotate(84.7399 605.572 222.643)'
				fill='white'
			/>
			<circle
				cx='605.572'
				cy='222.643'
				r='3.26697'
				transform='rotate(84.7399 605.572 222.643)'
				fill='white'
			/>
			<circle
				cx='236.627'
				cy='276.638'
				r='1.44348'
				transform='rotate(-131.519 236.627 276.638)'
				fill='white'
			/>
			<circle
				cx='236.627'
				cy='276.638'
				r='1.44348'
				transform='rotate(-131.519 236.627 276.638)'
				fill='white'
			/>
			<circle
				cx='377.447'
				cy='113.411'
				r='1.44348'
				transform='rotate(-131.519 377.447 113.411)'
				fill='white'
			/>
			<circle
				cx='377.447'
				cy='113.411'
				r='1.44348'
				transform='rotate(-131.519 377.447 113.411)'
				fill='white'
			/>
			<circle
				cx='491.98'
				cy='146.965'
				r='4.33044'
				transform='rotate(-131.519 491.98 146.965)'
				fill='white'
			/>
			<circle
				cx='491.98'
				cy='146.965'
				r='4.33044'
				transform='rotate(-131.519 491.98 146.965)'
				fill='white'
			/>
			<circle
				cx='344.141'
				cy='223.869'
				r='4.33044'
				transform='rotate(-131.519 344.141 223.869)'
				fill='white'
			/>
			<circle
				cx='344.141'
				cy='223.869'
				r='4.33044'
				transform='rotate(-131.519 344.141 223.869)'
				fill='white'
			/>
		</svg>
	);
}
function Planet() {
	const position = useMousePosition();
	x0 = position.x / 100;
	y0 = position.y / 100;
	pos = x0 + ' ' + y0 + ' 642 348';

	return (
		<svg
			width='642'
			height='348'
			viewBox={pos}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<Stars />

			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M97.6037 239.571H17.9219C8.02389 239.571 0 247.595 0 257.493C0 267.391 8.02391 275.415 17.9219 275.415L346.961 275.415C364.838 275.475 364.822 311.258 346.916 311.258L364.838 311.258H547.896L565.818 311.258C547.913 311.258 547.897 275.48 565.77 275.415H623.424C633.322 275.415 641.346 267.391 641.346 257.493C641.346 247.595 633.322 239.571 623.424 239.571H550.665C550.646 208.193 544.787 177.126 533.421 148.136C522.037 119.099 505.351 92.7145 484.316 70.4902C463.28 48.266 438.308 30.6367 410.824 18.609C383.34 6.58135 353.883 0.390786 324.134 0.390787C294.386 0.390788 264.929 6.58136 237.445 18.609C209.961 30.6367 184.988 48.266 163.953 70.4902C142.918 92.7145 126.232 119.099 114.847 148.136C103.482 177.126 97.6229 208.193 97.6037 239.571ZM235.544 311.258C225.646 311.258 217.622 319.282 217.622 329.18C217.622 339.078 225.646 347.102 235.544 347.102H602.942C612.84 347.102 620.864 339.078 620.864 329.18C620.864 319.282 612.84 311.258 602.942 311.258H235.544Z'
				fill='url(#paint0_linear_18_59)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_18_59'
					x1='320.673'
					y1='0.390778'
					x2='320.673'
					y2='347.102'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#FEC659' />
					<stop offset='0.729167' stop-color='#C892FF' />
				</linearGradient>
			</defs>
			<Meteor />
		</svg>
	);
}
function Meteor() {
	const position = useMousePosition();
	x0 = position.x / 5;
	y0 = position.y / 5;
	pos = x0 + ' ' + y0 + ' 621 355';

	return (
		<svg
			width='621'
			height='355'
			viewBox={pos}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M505.106 82.4444L620.04 0L521.962 99.9014C521.574 100.36 521.154 100.788 520.705 101.182L520.237 101.659L520.195 101.606C517.631 103.624 514.267 104.611 510.789 104.066C504.154 103.027 499.617 96.8054 500.657 90.1698C501.151 87.012 502.819 84.3295 505.148 82.4971L505.106 82.4444Z'
				fill='url(#paint0_linear_26_2)'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M564.719 346.311L609.234 314.38L571.248 353.073C571.098 353.25 570.935 353.416 570.761 353.568L570.58 353.753L570.563 353.733C569.57 354.514 568.267 354.896 566.921 354.685C564.35 354.283 562.593 351.873 562.996 349.303C563.188 348.08 563.834 347.041 564.735 346.331L564.719 346.311Z'
				fill='url(#paint1_linear_26_2)'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M3.30672 201.598L77.4021 148.448L14.1739 212.852C13.9236 213.148 13.6523 213.424 13.3626 213.679L13.0612 213.986L13.0344 213.952C11.3815 215.253 9.21278 215.889 6.97074 215.538C2.69292 214.868 -0.231769 210.857 0.438273 206.579C0.757142 204.543 1.83266 202.814 3.33349 201.632L3.30672 201.598Z'
				fill='url(#paint2_linear_26_2)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_26_2'
					x1='513.383'
					y1='88.723'
					x2='623.222'
					y2='-5.34112'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0.109375' stop-color='#B6AFFF' />
					<stop offset='1' stop-color='#B6AFFF' stop-opacity='0' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_26_2'
					x1='567.925'
					y1='348.743'
					x2='610.467'
					y2='312.311'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0.109375' stop-color='#B6AFFF' />
					<stop offset='1' stop-color='#B6AFFF' stop-opacity='0' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_26_2'
					x1='8.64259'
					y1='205.646'
					x2='79.4538'
					y2='145.005'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0.109375' stop-color='#B6AFFF' />
					<stop offset='1' stop-color='#B6AFFF' stop-opacity='0' />
				</linearGradient>
			</defs>
		</svg>
	);
}

function Home() {
	return (
		<div className='home'>
			<div className='homeLeftSide'>
				<h1>
					Hi. I'm Dinath. <br /> A CS Student.
				</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div className='homeRightSide'>
				<Planet />
			</div>
		</div>
	);
}
export default Home;
