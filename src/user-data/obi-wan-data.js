const obiWanInfo = {
	// Personal info
	name: 'Obi-Wan',
	surname: 'Kenobi',
	jobTitle: 'Force Persuasion Lecturer',
	about:
		"An international expert in the field of shadow work and persuasion. Head coach of Jedi Academy, where he conducts the top-ranked MBA course 'Mastering Emotions and Force Persuasion'. Former human rights activist.",
	email: 'obi-wan.kenobi@gmail.com',
	phone: '07987 654321',
	street: '19 Dalgleish Cres',
	city: 'Shrewsbury SY3 9FW',
	country: 'United Kingdom',

	//Experience
	jobs: [
		{
			company: 'Jedi Academy',
			position: 'Force Persuasion Lecturer',
			location: 'Dantooine',
			period: '1992 - currently',
			description:
				"Conducting the top-ranked MBA course 'Mastering Emotions and Force Persuasion', that raised a new generation of emotionally intelligent Jedi.",
			id: 1,
		},
		{
			company: 'Human Rights Without Frontiers',
			position: 'Diplomat',
			location: 'Brussels, BE',
			period: '1973 - 1992',
			description:
				'Publishing research, sharing information, organizing public events and speaking to political leaders about human rights issues.',
			id: 2,
		},
		{
			company: 'Jabba Collections',
			position: 'Debt Collector',
			location: 'Barrow, Alaska',
			period: '1972 - 1973',
			description:
				'Encouraging forgetful customers to regulate their liabilities.',
			id: 3,
		},
	],
	education: [
		{
			company: 'Jedi Academy',
			position: 'MBA Psychology & Mind Manipulation',
			location: 'Coruscant',
			period: '1967 - 1972',
			description: '',
			id: 1,
		},
	],
	skills: [
		{ skill: 'Mentoring', id: 1 },
		{ skill: 'Lightsaber combat', id: 2 },
		{ skill: 'Driving license (B cat.)', id: 3 },
		{ skill: 'Problem solving', id: 4 },
		{ skill: 'Telepathy', id: 5 },
	],
	hobbies: 'Desert gazing, coaching intergalactic heroes, playing with my dog.',
	jobBoilerplate: {
		company: '',
		position: '',
		location: '',
		period: '',
		description: '',
		id: 1,
	},
	skillBoilerplate: { skill: '', id: 1 },
};

export default obiWanInfo;
