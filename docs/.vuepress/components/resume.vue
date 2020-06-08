<script>
export default {
    data() {
        return {
			name: 'ZhangXiang',
			title: 'Developer · FE',
			email: '1657422967@qq.com',
			lead: 'Development and design of web applications for startups and large companies',
			skills: [{
					exp: '+ 2 years',
					title: 'Object programming & frameworks',
					desc: 'TS, Vue, React, …'
				}, {
					exp: '+ 2 years',
					title: 'Design integration',
					desc: 'Style and tools, JS Frameworks'
				}, {
					exp: '+ 1 years',
					title: 'Object programming & frameworks',
					desc: 'TS, Vue, React, …'
				}
			],
			interests: [{
					title: 'Scripting languages',
					desc: 'PHP, JS, Bash, Python'
				}, {
					title: 'Hacking',
					desc: 'Linux, Crawlers, Bots, Network'
				}
			],
			achievements: [{
					level: {num: 60, more: true, percent: false},
					title: 'Projects',
					desc: "Adapting and creating solutions for customer's needs"
				}, {
					level: {num: 50, more: false, percent: true},
					title: 'Web',
					desc: 'Applications development integrating third-party services and mobile client(s)'
				}, {
					level: {num: 30, more: false, percent: true},
					title: 'Technical solutions',
					desc: 'Such as web services, scripts, configurations'
				}, {
					level: {num: 30, more: false, percent: true},
					title: 'Leading',
					desc: 'Web projects and ensure the quality of delivery'
				}
			],
			timeeline: [{
					line: 'Education',
					desc: 'bachelor degree：Electronic Information Engineering',
					date: 'Apr. 2012 - Sep. 2016'
				}, {
					line: '',
					desc: "master's degree：Electronics and Communication Engineering",
					date: 'Apr. 2016 - Sep. 2019'
				}, {
					line: 'Experiences',
					desc: 'Development and design of for AEducation Technology Co., Ltd.',
					date: 'Apr. 2019 - Sep. 2020'
				}, {
					line: '',
					desc: 'Art & Design studies',
					date: 'Apr. 2020 - Sep. 2020'
				}
			]
        };
    },
    components: {
    },
    computed: {
    },
    methods: {
    },
    async created() {
    }
};
</script>

<template>
    <div class="container-content">
		<div class="container">
			<div class="hero">
				<h1 class="name">{{name}}</h1>
				<span class="job-title">{{title}}</span>
				<span class="email">{{email}}</span>
				<h2 class="lead">{{lead}}</h2>
			</div>
		</div>
		<!-- Skills and intrest section -->
		<div class="container">
			<div class="sections">
				<h2 class="section-title">Skills</h2>
				<div class="list-card" v-for="item in skills">
					<span class="exp">{{item.exp}}</span>
					<div>
						<h3>{{item.title}}</h3>
						<span>{{item.desc}}</span>
					</div>
				</div>
			</div>
			<div class="sections">
				<h2 class="section-title">Interests</h2>
				<div class="list-card" v-for="item in interests">
					<div>
						<h3>{{item.title}}</h3>
						<span>{{item.desc}}</span>
					</div>
				</div>	
			</div>
		</div>
		<!-- Achievements -->
		<div class="container cards">
			<div class="card" v-for="item in achievements">
				<div class="skill-level">
					<span v-if="item.level.more">+</span>
					<h2>{{item.level.num}}</h2>
					<span v-if="item.level.percent">%</span>
				</div>
				<div class="skill-meta">
					<h3>{{item.title}}</h3>
					<span>{{item.desc}}</span>
				</div>
			</div>
		</div>
		<!-- Timeeline -->
		<div class="container">
			<ol class="timeline">
				<li v-for="item in timeeline">
					<p class="line">{{item.line}}</p>
					<span class="point"></span>
					<p class="description">{{item.desc}}</p>
					<span class="date">{{item.date}}</span>
				</li>
			</ol>
		</div>
	</div>
</template>

<style scoped>
/* Reset Styles */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
a{
	text-decoration: none;
	text-transform: none;
	color: #4A90E2;
}
.tlinks{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}
body {
	line-height: 1;
	font-family: lato, ubuntu,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
	text-rendering : optimizeLegibility;
	-webkit-font-smoothing : antialiased;
	font-size: 19px;
	background-color: #FEFEFE;
	color: #04143A;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

p {
	color: #15171a;
	font-size: 17;
	line-height: 31px;
}

strong {
	font-weight: 600;
}

div , footer {
	box-sizing: border-box;
}
/* Reset ends */


/*Hero section*/
.container-content {
	padding-bottom: 50px;
}

.container {
	max-width: 1100px;
	height: auto;
	margin: 60px auto;
}

.hero {
	margin: 50px auto; 
	position: relative;
}

h1.name {
	font-size: 40px;
	font-weight: 200;
	display: inline-block;
}

.job-title {
	vertical-align: top;
	background-color: #D9E7F8;
	color: #4A90E2;
	font-weight: 600;
	margin-top: 5px;
	margin-left: 20px;
	border-radius: 5px;
	display: inline-block;
	padding: 15px 25px;
}

.email {
	display: block;
	font-size: 18px;
	font-weight: 300;
	color: #81899C;
	margin-top: 10px;
}

.lead {
	font-size: 24px;
	font-weight: 300;
	margin-top: 60px;
	line-height: 55px;
}
/*hero ends*/

/*skills & intrests*/
.sections {
	vertical-align: top;
	display: inline-block;
	width: 49.7%;
}

.section-title {
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 15px;
}

.list-card {
	margin: 20px 0;
}

.list-card .exp , .list-card div{
	display: inline-block;
	vertical-align: top;
}

.list-card .exp {
	margin-right: 15px;
	color: #4A90E2;
	font-weight: 600;
	width: 100px;
}

.list-card div {
	width: 70%;
}

.list-card h3 {
	font-size: 18px;
	font-weight: 600;
	color: #5B6A9A;
	line-height: 26px;
	margin-bottom: 8px;
}

.list-card div span {
	font-size: 16px;
	color: #81899C;
	line-height: 22px;
}
/*skill and intrests ends*/

/* Achievements */
.cards {
	max-width: 1120px;
	display: block;
}

.card {
	width: 47.9%;
	height: 200px;
	background-color: #EEF0F7;
	display: inline-block;
	margin: 7px 5px;
	vertical-align: top;
	border-radius: 10px;
	text-align: center;
	padding-top: 50px
}

.card-active , .card:hover{
	transform: scale(1.02);
	transition: 0.5s;
	background-color: #fff;
	box-shadow: 0px 5px 50px -8px #ddd;
	cursor: pointer;
}


.skill-level {
	display: inline-block;
	max-width: 160px;
}

.skill-level span {
	font-size: 28px;
	font-weight: 300;
	color: #5B6A9A;
	vertical-align: top;
}

.skill-level h2 {
	font-size: 65px;
	font-weight: 300;
	display: inline-block;
	vertical-align: top;
	color: #5B6A9A;
	letter-spacing: -5px;
}

.skill-meta {
	vertical-align: top;
	display: inline-block;
	max-width: 200px;
	text-align: left;
	margin-top: 15px;
	margin-left: 15px;
}

.skill-meta h3 {
	font-size: 20px;
	font-weight: 800;
	color: #5B6A9A;
	margin-bottom: 5px;
}

.skill-meta span{
	color: #81899C;
	line-height: 20px;
	font-size: 16px;
}
/* Achievements ends */

/* Timeline styles*/
ol {
	position: relative;
	display: block;
	margin: 100px 0;
	height: 2px;
	background: #EEF0F7;

}
ol::before,
ol::after {
	content: "";
	position: absolute;
	top: -10px;
	display: block;
	width: 0;
	height: 0;
  	border-radius: 10px;
	border: 0px solid #31708F;
}
ol::before {
	left: -5px;
}
ol::after {
	right: -10px;
	border: 0px solid transparent;
	border-right: 0;
	border-left: 20px solid #31708F;
  	border-radius: 3px;
}

/* ---- Timeline elements ---- */
li {
	position: relative;
	display: inline-block;
	float: left;
	width: 25%;
  	height: 50px;
}
li .line {
  position: absolute;
  top: -47px;
  left: 1%;
  font-size: 20px;
  font-weight: 600;
  color: #04143A;
}
li .point {
	content: "";
	top: -7px;
	left: 0%;
	display: block;
	width: 8px;
	height: 8px;
	border: 4px solid #fff;
	border-radius: 10px;
	background: #4A90E2;
  position: absolute;
}
li .description {
  display: none;
  padding: 10px 0;
  margin-top: 20px;
  position: relative;
  font-weight: normal;
  z-index: 1;
  max-width: 95%;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  color: #5B6A9A;
}
.description::before {
  content: '';
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #f4f4f4;
  position: absolute;
  top: -5px;
  left: 43%;
}


.timeline .date{
	font-size: 14px;
	color: #81899C;
	font-weight: 300;
}

/* ---- Hover effects ---- */
li:hover {
  color: #48A4D2;
}
li .description {
  display: block;
}
/*timeline ends*/

/* Media queries*/
@media(max-width: 1024px){
	.container {
		padding: 15px;
		margin: 0px auto;
	}
}

@media(max-width: 768px){
	.container {
		padding: 15px;
		margin: 0px auto;
	}

	.card {
		padding: 15px;
		text-align: left;
	}
	.card h2 {
		font-size: 55px;
	}
		.card , .sections {
		width: 100%;
		height: auto;
		margin: 10px 0;
		float: left;
	}

	.timeline{
		border: none;
		background-color: rgba(0,0,0,0);
	}

	.timeline li{
		margin-top: 70px;
		height: 150px;
	}
}

@media(max-width: 425px) {
	h1.name {
		font-size: 40px;
	}

	.card , .sections {
		width: 100%;
		height: auto;
		margin: 10px 0;
		float: left;
	}

	.timeline{
		display: none;
		}

	.job-title {
		position: absolute;
		font-size: 15px;
		top: -40px;
		right: 20px;
		padding: 10px
	}

	.lead {
		margin-top: 15px;
		font-size: 20px;
		line-height: 28px;
	}
	.container {
		margin: 0px;
		padding: 0 15px;
	}
	footer {
		margin-top: 2050px;
	}
}	
</style>