import icon2048 from '../assets/projectIcon/icon2048.png';
import iconCadenas from '../assets/projectIcon/iconCadenas.png';
import iconDinaTouch from '../assets/projectIcon/iconFinger.png';
import iconFolio from '../assets/projectIcon/iconFolio.png';
import iconMetro from '../assets/projectIcon/iconMetro.png';
import iconTrad from '../assets/projectIcon/iconTrad.png';
import iconUselessDG from '../assets/projectIcon/iconUselessDG.png';
import iconVideo from '../assets/projectIcon/iconVideo.png';
import iconFight from '../assets/projectIcon/iconFight.png';

export const ProjectList = [
	{
		image: iconMetro,
		projectName: 'Réseau de Transport en Commun 🚅',
		text: "Gérer un réseau de transports en commun, via un graphe (Système à brins et Matrice Compacte) et résoudre le cas du plus court chemin avec l'algorithme de Dijkstra",
		additional: ['C'],
		date: ' déc. 2021 – janv. 2022 ',
	},
	{
		image: iconFolio,
		projectName: 'DinahWorld 🪐',
		text: 'Mon PortFolio réalisé ReactJS,MUI et FramerMotion',
		additional: ['JavaScript', 'ReactJS', 'HTML', 'CSS'],
		date: 'janv 2022',
	},
	{
		image: iconFight,
		projectName: 'University Fighter Street VIII 🥊',
		text: 'University Fighter VIII est un jeu incrémental inspiré du jeu Street Fighter',
		additional: ['JavaScript', 'Canvas'],
		date: 'nov 2021',
	},
	{
		image: iconUselessDG,
		projectName: 'Useless Document Generator 📑',
		text: 'Un générateur de documents (CV, Attestation de déplacement, de lettres,etc.) codé en Rust avec la libraire GTK-rs',
		additional: ['Rust', 'GTK-RS'],
		date: 'dec. 2021',
	},
	{
		image: iconVideo,
		projectName: ' DinaConverter_mp4 📹',
		text: 'Une application web pour télécharger des vidéos Youtube.',
		additional: ['JavaScript', 'ExpressJS'],
		date: 'sept 2021',
	},
	{
		image: iconTrad,
		projectName: 'Traducteur FR-EN sur Terminal Linux 💻',
		text: 'Programme pour traduire des phrases en français ou en anglais',
		additional: ['C', 'API Watson additional Translator'],
		date: 'aout 2021',
	},
	{
		image: icon2048,
		projectName: '2048 🎲',
		text: "L'implémentation du célèbre Jeu 2048 en Java sur une distribution Linux ",
		additional: ['Java', 'JavaFX'],
		date: 'avr. 2021',
	},
	{
		image: iconCadenas,
		projectName: 'TCP Chat avec chiffrement RSA et DH 🔐',
		text: 'DH EncryptedChat est un TCP Chat qui est entièrement chiffré grâce au crypto-système de Diffie Hellman.',
		additional: ['Python'],
		date: 'nov 2021',
	},
	{
		image: iconDinaTouch,
		projectName: 'DinaTouch ☝️',
		text: 'DinaTouch est une application mobile en aide pour les personnes ayant des difficultés à se servir de leurs deux mains.',
		additional: ['Java', 'Android Studio'],
		date: 'dec 2021',
	},
];
