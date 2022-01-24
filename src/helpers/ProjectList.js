import icon2048 from '../assets/projectIcon/icon2048.svg';
import iconCadenas from '../assets/projectIcon/iconCadenas.svg';
import iconDinaTouch from '../assets/projectIcon/iconFinger.svg';
import iconFolio from '../assets/projectIcon/iconFolio.svg';
import iconMetro from '../assets/projectIcon/iconMetro.svg';
import iconTrad from '../assets/projectIcon/iconTrad.svg';
import iconUselessDG from '../assets/projectIcon/iconUselessDG.svg';
import iconVideo from '../assets/projectIcon/iconVideo.svg';
import iconFight from '../assets/projectIcon/iconFight.svg';

export const ProjectList = [
	{
		image: iconMetro,
		projectName: 'Public Transit System 🚅',
		textEN: 'Manage a public transportation network, via a graph (Stranded System and Compact Matrix) and solve the shortest path case with the Dijkstra algorith",		',
		textFR: "Gérer un réseau de transports en commun, via un graphe (Système à brins et Matrice Compacte) et résoudre le cas du plus court chemin avec l'algorithme de Dijkstra",
		additional: ['C'],
		date: ' déc. 2021 – janv. 2022 ',
	},
	{
		image: iconFolio,
		projectName: 'DinahWorld 🪐',
		textEN: 'My PortFolio made with ReactJS,MUI and FramerMotion (No Template, No Tuto)',
		textFR: 'Mon PortFolio réalisé ReactJS, MUI et FramerMotion',
		additional: ['JavaScript', 'ReactJS', 'HTML', 'CSS'],
		date: 'janv 2022',
	},
	{
		image: iconFight,
		projectName: 'University Fighter Street VIII 🥊',
		textEN: 'University Fighter VIII is an incremental game inspired by Street Fighter',
		textFR: 'University Fighter VIII est un jeu incrémental inspiré du jeu Street Fighter',
		additional: ['JavaScript', 'Canvas'],
		date: 'nov 2021',
	},
	{
		image: iconUselessDG,
		projectName: 'Useless Document Generator 📑',
		textEN: 'A document generator (CV, travel certificate, letters, etc.) coded in Rust with the GTK-rs library',
		textFR: 'Un générateur de documents (CV, Attestation de déplacement, de lettres,etc.) codé en Rust avec la libraire GTK-rs',
		additional: ['Rust', 'GTK-RS'],
		date: 'dec. 2021',
	},
	{
		image: iconVideo,
		projectName: ' DinaConverter_mp4 📹',
		textEN: 'A web application to download Youtube videos',
		textFR: 'Une application web pour télécharger des vidéos Youtube',
		additional: ['JavaScript', 'ExpressJS'],
		date: 'sept 2021',
	},
	{
		image: iconTrad,
		projectName: 'FR-EN translator on Linux Terminal 💻',
		textEN: 'Program to translate sentences into French or English',
		textFR: 'Programme pour traduire des phrases en français ou en anglais',
		additional: ['C', 'API Watson Additional Translator'],
		date: 'aout 2021',
	},
	{
		image: icon2048,
		projectName: '2048 🎲',
		textEN: 'The implementation of the famous Game 2048 in Java on a Linux distribution',
		textFR: "L'implémentation du célèbre Jeu 2048 en Java sur une distribution Linux",
		additional: ['Java', 'JavaFX'],
		date: 'avr. 2021',
	},
	{
		image: iconCadenas,
		projectName: 'TCP Chat with RSA and DH encryption 🔐',
		textEN: 'DH EncryptedChat is a TCP Chat that is fully encrypted using the Diffie Hellman cryptosystem',
		textFR: 'DH EncryptedChat est un TCP Chat qui est entièrement chiffré grâce au crypto-système de Diffie Hellman',
		additional: ['Python'],
		date: 'nov 2021',
	},
	{
		image: iconDinaTouch,
		projectName: 'DinaTouch ☝️',
		textEN: 'DinaTouch is a mobile application to help people who have difficulty using both hands',
		textFR: 'DinaTouch est une application mobile en aide pour les personnes ayant des difficultés à se servir de leurs deux mains',
		additional: ['Java', 'Android Studio'],
		date: 'dec 2021',
	},
];
