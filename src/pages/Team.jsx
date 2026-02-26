const departments = [
  {
    name: 'Management',
    members: [
      { name: 'Michael Scott', title: 'Regional Manager', initials: 'MS', color: '#1a4a7a', quote: "That's what she said." },
      { name: 'Dwight Schrute', title: 'Assistant (to the) Regional Manager', initials: 'DS', color: '#5b4a1e', quote: 'Identity theft is not a joke, Jim!' },
      { name: 'Andy Bernard', title: 'Regional Director of Sales', initials: 'AB', color: '#7a1a1a', quote: "I went to Cornell. Ever heard of it?" },
    ],
  },
  {
    name: 'Sales',
    members: [
      { name: 'Jim Halpert', title: 'Sales Representative', initials: 'JH', color: '#2d6a4f', quote: 'Bears. Beets. Battlestar Galactica.' },
      { name: 'Phyllis Vance', title: 'Sales Representative', initials: 'PV', color: '#7a4a6a', quote: "You've got a lot to learn about this town, sweetie." },
      { name: 'Stanley Hudson', title: 'Sales Representative', initials: 'SH', color: '#4a3728', quote: "Did I stutter?" },
    ],
  },
  {
    name: 'Accounting',
    members: [
      { name: 'Angela Martin', title: 'Head of Accounting', initials: 'AM', color: '#6a4a7a', quote: 'I have a very strict cat regimen.' },
      { name: 'Oscar Martinez', title: 'Accountant', initials: 'OM', color: '#1a6a5a', quote: "Actually..." },
      { name: 'Kevin Malone', title: 'Accountant', initials: 'KM', color: '#8a5a2a', quote: "Why waste time say lot word when few word do trick?" },
    ],
  },
  {
    name: 'Administration & Support',
    members: [
      { name: 'Pam Beesly-Halpert', title: 'Office Administrator', initials: 'PB', color: '#c45b8a', quote: "I feel God in this Chili's tonight." },
      { name: 'Ryan Howard', title: 'Temp / VP / Temp / Fired / Rehired / Temp', initials: 'RH', color: '#3a3a3a', quote: "I'd rather she be alone than with somebody. Is that love?" },
      { name: 'Kelly Kapoor', title: 'Customer Service Representative', initials: 'KK', color: '#e05a9c', quote: "I talk a lot, so I've learned to tune myself out." },
    ],
  },
  {
    name: 'Human Resources & Quality',
    members: [
      { name: 'Toby Flenderson', title: 'Human Resources Representative', initials: 'TF', color: '#7a8a6a', quote: "I'm not a part of this family." },
      { name: 'Creed Bratton', title: 'Quality Assurance', initials: 'CB', color: '#5a5a7a', quote: "I've been involved in a number of cults." },
      { name: 'Meredith Palmer', title: 'Supplier Relations', initials: 'MP', color: '#a05a3a', quote: "Who here has gotten a drunk driving ticket? Oh come on..." },
    ],
  },
  {
    name: 'Warehouse & Operations',
    members: [
      { name: 'Darryl Philbin', title: 'Warehouse Manager', initials: 'DP', color: '#2a4a6a', quote: "I taught Mike some new phrases. I've been up since four." },
    ],
  },
  {
    name: 'International Division',
    members: [
      {
        name: 'Aris Arsen Kashari',
        title: 'Chief Vibes Officer & International Paper Diplomat',
        initials: 'AK',
        color: '#c9a84c',
        quote: "I came from LinkedIn. I have no idea what's going on, but the paper is excellent.",
        featured: true,
        linkedin: 'https://nl.linkedin.com/in/aris-arsen-kashari-1755a363',
      },
    ],
  },
]

function Team() {
  return (
    <>
      <section className="team-hero">
        <h1>Our Team</h1>
        <p>The world&apos;s best paper company, staffed by the world&apos;s most interesting people.</p>
      </section>

      <div className="team-section">
        {departments.map((dept) => (
          <div key={dept.name} className="team-department">
            <h2>{dept.name}</h2>
            <div className="team-grid">
              {dept.members.map((member) => (
                <div key={member.name} className={`team-card${member.featured ? ' featured' : ''}`}>
                  <div className="avatar" style={{ background: member.color }}>
                    {member.initials}
                  </div>
                  <h3>{member.name}</h3>
                  <span className="title">{member.title}</span>
                  {member.quote && <p className="fun-quote">&ldquo;{member.quote}&rdquo;</p>}
                  {member.linkedin && (
                    <a
                      className="linkedin-link"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &#x1F517; LinkedIn Profile
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Team
