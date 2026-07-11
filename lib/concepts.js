export const CONCEPTS = {
  'Truth → Practice': {
    title: 'Truth → Practice',
    observation: 'Biblical truth is meant to shape faithful life, not remain only an idea.',
    pattern: 'Scripture often reveals who God is and what He has done, then calls His people to live in a way that fits that truth.',
    passages: ['John 1:14', 'Eph. 2:19–22', 'Rom. 12:1–2', 'James 1:22'],
    threadConnection: 'This concept helps readers move from seeing the thread clearly to asking how the thread should form worship, obedience, and hope.',
    childExplanation: 'God shows us what is true so we can learn how to live with Him.'
  },
  'Identity → Action': {
    title: 'Identity → Action',
    observation: 'God gives identity before calling His people into action.',
    pattern: 'The Bible repeatedly grounds obedience in belonging: God names, rescues, adopts, and forms a people, then teaches them how to walk.',
    passages: ['Ex. 6:7', 'Ex. 19:4–6', '1 Pet. 2:9–10', 'Eph. 4:1'],
    threadConnection: 'This concept is useful wherever a thread shows that vocation flows from who God has made His people to be.',
    childExplanation: 'God tells His people who they are, and then shows them how to live like His people.'
  },
  'Promise → Fulfillment': {
    title: 'Promise → Fulfillment',
    observation: 'God’s promises create expectation, and Scripture traces how He keeps them.',
    pattern: 'Promises may begin in seed form, grow through the storyline, and find their deepest fulfillment in Christ and new creation.',
    passages: ['Gen. 12:2–3', '2 Sam. 7:12–13', 'Luke 22:20', '2 Cor. 1:20'],
    threadConnection: 'This concept helps readers follow how earlier hopes, covenants, and patterns move toward completion.',
    childExplanation: 'God makes promises, and He always knows how to keep them.'
  },
  'Shadow → Reality': {
    title: 'Shadow → Reality',
    observation: 'Some earlier patterns point beyond themselves to a greater reality.',
    pattern: 'Scripture can describe tabernacle, sacrifice, priesthood, feast, and temple patterns as shadows that prepare for Christ and His finished work.',
    passages: ['Heb. 8:5', 'Col. 2:17', 'Heb. 9:11–12', 'John 2:19–21'],
    threadConnection: 'This concept helps keep typology controlled by texts that name the relationship between earlier patterns and later fulfillment.',
    childExplanation: 'A shadow helps you know something real is coming. The Bible’s shadows help us look for Jesus.'
  },
  'Grace → Authority': {
    title: 'Grace → Authority',
    observation: 'God’s authority is not separated from His grace.',
    pattern: 'God gives, rescues, and establishes relationship, then exercises authority for holy order, protection, and faithful life.',
    passages: ['Ex. 20:1–3', 'Ps. 72:4', 'Matt. 20:25–28', 'Titus 2:11–14'],
    threadConnection: 'This concept helps readers see commands, kingship, priesthood, and structure as responses to God’s gracious initiative.',
    childExplanation: 'God is in charge, and His rule is good because He loves and saves His people.'
  },
  'Rescue → Mission': {
    title: 'Rescue → Mission',
    observation: 'Biblical rescue creates a people with purpose.',
    pattern: 'God delivers His people from bondage or judgment and then sends them into worship, witness, service, and holy life.',
    passages: ['Ex. 19:4–6', 'Isa. 49:6', 'Luke 9:31', '1 Pet. 2:9–10'],
    threadConnection: 'This concept is especially useful in exodus-shaped movements where deliverance leads to vocation rather than mere escape.',
    childExplanation: 'God saves His people and gives them good work to do with Him.'
  },
  'Presence → Transformation': {
    title: 'Presence → Transformation',
    observation: 'God’s presence changes the people who dwell with Him.',
    pattern: 'The storyline moves from guarded presence to restored dwelling, and God’s nearness forms holiness, worship, and renewed life.',
    passages: ['Ex. 40:34', 'Ezek. 36:26', '2 Cor. 3:18', 'Rev. 21:3'],
    threadConnection: 'This concept helps connect temple, Spirit, new covenant, and new creation themes around God dwelling with His people.',
    childExplanation: 'When God comes near, He makes His people more like what He made them to be.'
  }
};

export function getConcept(id) {
  return CONCEPTS[id] || null;
}
