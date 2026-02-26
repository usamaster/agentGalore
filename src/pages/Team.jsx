const departments = [
  {
    name: 'Management',
    members: [
      { name: 'Michael Scott', title: 'Regional Manager', photo: '/team/michael-scott.jpg', quote: "That's what she said." },
      { name: 'Dwight Schrute', title: 'Assistant (to the) Regional Manager', photo: '/team/dwight-schrute.jpg', quote: 'Identity theft is not a joke, Jim!' },
      { name: 'Andy Bernard', title: 'Regional Director of Sales', photo: '/team/andy-bernard.jpg', quote: "I went to Cornell. Ever heard of it?" },
    ],
  },
  {
    name: 'Sales',
    members: [
      { name: 'Jim Halpert', title: 'Sales Representative', photo: '/team/jim-halpert.jpg', quote: 'Bears. Beets. Battlestar Galactica.' },
      { name: 'Phyllis Vance', title: 'Sales Representative', photo: '/team/phyllis-vance.jpg', quote: "You've got a lot to learn about this town, sweetie." },
      { name: 'Stanley Hudson', title: 'Sales Representative', photo: '/team/stanley-hudson.jpg', quote: "Did I stutter?" },
    ],
  },
  {
    name: 'Accounting',
    members: [
      { name: 'Angela Martin', title: 'Head of Accounting', photo: '/team/angela-martin.jpg', quote: 'I have a very strict cat regimen.' },
      { name: 'Oscar Martinez', title: 'Accountant', photo: '/team/oscar-martinez.jpg', quote: "Actually..." },
      { name: 'Kevin Malone', title: 'Accountant', photo: '/team/kevin-malone.jpg', quote: "Why waste time say lot word when few word do trick?" },
    ],
  },
  {
    name: 'Administration & Support',
    members: [
      { name: 'Pam Beesly-Halpert', title: 'Office Administrator', photo: '/team/pam-beesly.jpg', quote: "I feel God in this Chili's tonight." },
      { name: 'Ryan Howard', title: 'Temp / VP / Temp / Fired / Rehired / Temp', photo: '/team/ryan-howard.jpg', quote: "I'd rather she be alone than with somebody. Is that love?" },
      { name: 'Kelly Kapoor', title: 'Customer Service Representative', photo: '/team/kelly-kapoor.jpg', quote: "I talk a lot, so I've learned to tune myself out." },
    ],
  },
  {
    name: 'Human Resources & Quality',
    members: [
      { name: 'Toby Flenderson', title: 'Human Resources Representative', photo: '/team/toby-flenderson.jpg', quote: "I'm not a part of this family." },
      { name: 'Creed Bratton', title: 'Quality Assurance', photo: '/team/creed-bratton.jpg', quote: "I've been involved in a number of cults." },
      { name: 'Meredith Palmer', title: 'Supplier Relations', photo: '/team/meredith-palmer.jpg', quote: "Who here has gotten a drunk driving ticket? Oh come on..." },
    ],
  },
  {
    name: 'Warehouse & Operations',
    members: [
      { name: 'Darryl Philbin', title: 'Warehouse Manager', photo: '/team/darryl-philbin.jpg', quote: "I taught Mike some new phrases. I've been up since four." },
    ],
  },
  {
    name: 'International Division',
    members: [
      {
        name: 'Aris Arsen Kashari',
        title: 'Chief Vibes Officer & International Paper Diplomat',
        photo: '/team/aris-kashari.jpg',
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
                  <img
                    className="avatar-photo"
                    src={member.photo}
                    alt={member.name}
                  />
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
