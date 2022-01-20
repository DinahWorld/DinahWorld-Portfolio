import React from 'react';
import { useMousePosition } from './useMousePosition';

function Stars1(x0, y0) {
	let pos = x0 + ' ' + y0 + ' 628 335';
	return (
		<svg viewBox={pos} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='21.2301' cy='86.3028' r='0.816743' fill='white' />

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
				cx='528.754'
				cy='103.152'
				r='0.816743'
				transform='rotate(-62.2212 528.754 103.152)'
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
		</svg>
	);
}
function PlanetBottom(x0, y0) {
	let pos = -500 + x0 + ' ' + (-180 + y0) + ' 800 800';
	return (
		<svg viewBox={pos} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle
				cx='289'
				cy='289'
				r='228'
				fill='url(#paint0_linear_123_174)'
				fill-opacity='0.5'
			/>
			<circle
				cx='289'
				cy='289'
				r='268'
				fill='url(#paint1_linear_123_174)'
				fill-opacity='0.4'
			/>
			<circle
				cx='289'
				cy='289'
				r='289'
				fill='url(#paint2_linear_123_174)'
				fill-opacity='0.1'
			/>
			<circle
				cx='288.5'
				cy='288.5'
				r='178.5'
				fill='url(#paint3_linear_123_174)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_123_174'
					x1='517'
					y1='-66.0924'
					x2='113.37'
					y2='517'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FEC659' stop-opacity='0.5' />
					<stop offset='1' stop-color='#C892FF' stop-opacity='0.5' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_123_174'
					x1='557'
					y1='-128.389'
					x2='82.5574'
					y2='557'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FEC659' stop-opacity='0.5' />
					<stop offset='1' stop-color='#C892FF' stop-opacity='0.5' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_123_174'
					x1='578'
					y1='-161.095'
					x2='66.381'
					y2='578'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FEC659' stop-opacity='0.5' />
					<stop offset='1' stop-color='#C892FF' stop-opacity='0.5' />
				</linearGradient>
				<linearGradient
					id='paint3_linear_123_174'
					x1='467'
					y1='10.5'
					x2='151'
					y2='467'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FEC659' />
					<stop offset='1' stop-color='#C892FF' />
				</linearGradient>
			</defs>
		</svg>
	);
}
function PlanetTop(x0, y0) {
	let pos = x0 + ' ' + (-300 + y0) + ' 2000 2000';
	return (
		<svg viewBox={pos} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle
				cx='142.5'
				cy='142.5'
				r='110.5'
				fill='url(#paint0_linear_123_175)'
				fill-opacity='0.5'
			/>
			<circle
				cx='142.5'
				cy='142.5'
				r='129.5'
				fill='url(#paint1_linear_123_175)'
				fill-opacity='0.4'
			/>
			<circle
				cx='142.5'
				cy='142.5'
				r='142.5'
				fill='url(#paint2_linear_123_175)'
				fill-opacity='0.2'
			/>
			<circle
				cx='142.5'
				cy='144.5'
				r='91.5'
				fill='url(#paint3_linear_123_175)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_123_175'
					x1='253'
					y1='-29.5952'
					x2='57.381'
					y2='253'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FEC659' stop-opacity='0.5' />
					<stop offset='1' stop-color='#C892FF' stop-opacity='0.5' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_123_175'
					x1='272'
					y1='-59.1863'
					x2='42.7451'
					y2='272'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FEC659' stop-opacity='0.5' />
					<stop offset='1' stop-color='#C892FF' stop-opacity='0.5' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_123_175'
					x1='285'
					y1='-79.4328'
					x2='32.7311'
					y2='285'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FEC659' stop-opacity='0.5' />
					<stop offset='1' stop-color='#C892FF' stop-opacity='0.5' />
				</linearGradient>
				<linearGradient
					id='paint3_linear_123_175'
					x1='234'
					y1='1.9958'
					x2='72.0168'
					y2='236'
					gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FEC659' />
					<stop offset='1' stop-color='#C892FF' />
				</linearGradient>
			</defs>
		</svg>
	);
}
function Meteor2(x0, y0) {
	let pos = x0 + ' ' + y0 + ' 10 300';
	return (
		<svg viewBox={pos} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M2.52209 42.0778L60.2544 0.665131L10.9894 50.8464C10.7944 51.0768 10.5829 51.2919 10.3572 51.4903L10.1224 51.7295L10.1015 51.703C8.81367 52.7166 7.12387 53.2124 5.37696 52.9388C2.04384 52.4167 -0.234962 49.2915 0.28711 45.9583C0.535559 44.3721 1.37356 43.0247 2.54295 42.1043L2.52209 42.0778Z'
				fill='url(#paint0_linear_18_61)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_18_61'
					x1='6.6796'
					y1='45.2316'
					x2='61.853'
					y2='-2.01784'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.109375' stopColor='#B6AFFF' />
					<stop offset='1' stopColor='#B6AFFF' stopOpacity='0' />
				</linearGradient>
			</defs>
		</svg>
	);
}
function Meteor3(x0, y0) {
	let pos = -60 + x0 + ' ' + (-30 + y0) + ' 350 100';

	return (
		<svg viewBox={pos} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M1.9533 25.8323L36.6375 0.952515L7.03999 31.1005C6.92296 31.2388 6.79612 31.3678 6.66072 31.4869L6.51939 31.6308L6.50685 31.6149C5.73312 32.2239 4.71791 32.5217 3.6684 32.3573C1.66594 32.0437 0.296883 30.1661 0.610532 28.1636C0.759796 27.2107 1.26326 26.4012 1.96581 25.8482L1.9533 25.8323Z'
				fill='url(#paint0_linear_18_62)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_18_62'
					x1='4.45107'
					y1='27.727'
					x2='37.598'
					y2='-0.659357'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.109375' stopColor='#B6AFFF' />
					<stop offset='1' stopColor='#B6AFFF' stopOpacity='0' />
				</linearGradient>
			</defs>
		</svg>
	);
}
function Meteor1(x0, y0) {
	let pos = x0 + ' ' + y0 + ' 30 90';

	return (
		<svg viewBox={pos} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M4.50487 64.2375L94.0567 0L17.6385 77.8394C17.3362 78.1965 17.0086 78.5299 16.6588 78.8373L16.2941 79.2088L16.2618 79.1677C14.2641 80.74 11.6429 81.509 8.93314 81.0846C3.76295 80.2748 0.228175 75.427 1.03799 70.2569C1.42338 67.7964 2.72326 65.7063 4.5372 64.2786L4.50487 64.2375Z'
				fill='url(#paint0_linear_18_63)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_18_63'
					x1='10.9539'
					y1='69.1296'
					x2='96.5365'
					y2='-4.16159'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.109375' stopColor='#B6AFFF' />
					<stop offset='1' stopColor='#B6AFFF' stopOpacity='0' />
				</linearGradient>
			</defs>
		</svg>
	);
}

function Galaxy() {
	const position = useMousePosition();
	let pos = 0 + ' ' + 0 + ' ' + window.innerWidth + ' ' + window.innerHeight;
	let meteor1 = Meteor1(position.x / 30, position.y / 30);
	let meteor2 = Meteor2(position.x / 30, position.y / 30);
	let stars1 = Stars1(position.x / 90, position.y / 90);
	let planetBot = PlanetBottom(position.x / 100, position.y / 100);
	let planetTop = PlanetTop(position.x / 90, position.y / 90);

	let meteor3 = Meteor3(position.x / 60, position.y / 60);
	return (
		<svg viewBox={pos} fill='none' xmlns='http://www.w3.org/2000/svg'>
			{meteor3}
			{stars1}
			{meteor2}
			{planetBot}
			{planetTop}
			{meteor1}
		</svg>
	);
}

export default Galaxy;
