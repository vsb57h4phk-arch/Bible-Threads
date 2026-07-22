// Canonical Protestant book order. These IDs match the book IDs already used by
// the Scripture graph and leave room for chapter data from all 66 books.
export const CANONICAL_BOOK_ORDER = [
  'gen', 'ex', 'lev', 'num', 'deut',
  'josh', 'judg', 'ruth', '1sam', '2sam',
  '1kgs', '2kgs', '1chr', '2chr', 'ezra',
  'neh', 'esth', 'job', 'ps', 'prov',
  'eccl', 'song', 'isa', 'jer', 'lam',
  'ezek', 'dan', 'hos', 'joel', 'amos',
  'obad', 'jonah', 'mic', 'nah', 'hab',
  'zeph', 'hag', 'zech', 'mal', 'matt',
  'mark', 'luke', 'john', 'acts', 'rom',
  '1cor', '2cor', 'gal', 'eph', 'phil',
  'col', '1thess', '2thess', '1tim', '2tim',
  'titus', 'phlm', 'heb', 'james', '1pet',
  '2pet', '1john', '2john', '3john', 'jude',
  'rev',
];

// `summary` and `observations` describe what the chapter explicitly says and
// should remain grounded in the chapter rather than importing later ideas.
// `scriptureConnections` and `connectedPassages` hold broader canonical links.
// `threads`, `lenses`, and `concepts` contain exact identifiers exported by the
// existing data modules, not separately authored display text.

export const SCRIPTURE_CHAPTERS = {
  ruth: {
    id: 'ruth',
    title: 'Ruth',
    testament: 'Old Testament',
    era: 'kingdom',
    historicalSetting: 'During the days of the judges',
    chapterCount: 4,
    chapters: {
      1: {
        reference: 'Ruth 1',
        summary:
          'During a famine in the days of the judges, Elimelech moves from Bethlehem to Moab with Naomi and their two sons. Elimelech and both sons die, leaving Naomi, Ruth, and Orpah widowed. When Naomi hears that the Lord has provided food for Judah, she starts home; Orpah returns to her people, but Ruth pledges to remain with Naomi and to share her people and God. Naomi and Ruth reach Bethlehem at the beginning of the barley harvest, with Naomi grieving the emptiness of her losses.',
        observations: [
          'A famine leads Elimelech, Naomi, and their sons to leave Bethlehem and live in Moab.',
          'After Elimelech dies, Mahlon and Chilion marry Moabite women named Ruth and Orpah.',
          'Naomi, Ruth, and Orpah are all left widowed when Naomi’s two sons also die.',
          'Naomi hears that the Lord has provided food for his people and decides to return to Judah.',
          'Naomi urges both daughters-in-law to return to their mothers’ homes; Orpah leaves, but Ruth remains with Naomi.',
          'Ruth commits herself to Naomi’s people and God and promises to stay with Naomi until death.',
          'The women arrive in Bethlehem at the beginning of the barley harvest, while Naomi describes herself as bitter and empty.',
        ],
        threads: ['covenant'],
        lenses: ['Identity → Action', 'Truth → Practice'],
        concepts: ['Identity → Action', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'Famine, migration, and return',
            explanation:
              'Ruth opens with a family leaving home during famine, a circumstance also seen in the patriarchal narratives. Unlike those earlier accounts, Ruth focuses on Naomi’s bereavement in a foreign land and her return when she hears that the Lord has given food to Judah.',
            passages: ['Ruth 1:1–6', 'Gen. 12:10', 'Gen. 26:1–3'],
          },
          {
            title: 'Ruth chooses a people and their God',
            explanation:
              'Ruth’s pledge joins loyalty to Naomi with belonging among Israel and allegiance to the Lord. Joshua likewise records Rahab, another foreign woman, confessing Israel’s God and being received among Israel, though the women enter Israel under different circumstances.',
            passages: ['Ruth 1:16–18', 'Josh. 2:9–11', 'Josh. 6:25'],
          },
          {
            title: 'Naomi’s lament and the book’s movement',
            explanation:
              'Naomi honestly names her grief and interprets her return through bitterness and emptiness. Ruth 4 later answers her emptiness with renewed family and care, while biblical laments show that sorrow can be spoken openly before God without pretending that loss is small.',
            passages: ['Ruth 1:19–22', 'Ruth 4:14–17', 'Ps. 13:1–6'],
          },
          {
            title: 'Return at the beginning of harvest',
            explanation:
              'The chapter closes by placing Naomi and Ruth in Bethlehem as the barley harvest begins. The Torah’s harvest commands make provision for the poor and the sojourner, preparing readers for the means of care that becomes central in Ruth 2.',
            passages: ['Ruth 1:22', 'Lev. 19:9–10', 'Deut. 24:19–22'],
          },
        ],
        whyItMatters:
          'Ruth 1 establishes the book’s movement from famine, death, and perceived emptiness toward return and the possibility of provision. Ruth’s costly loyalty places a Moabite widow within the life of Israel, while the harvest setting points toward care made possible through God’s commands and ordinary human faithfulness. The chapter does not yet explain how Naomi’s losses will be answered, so its hope remains real but deliberately incomplete.',
        connectedPassages: [
          'Judg. 21:25',
          'Ruth 2:1–3',
          'Ruth 4:14–17',
          'Gen. 12:10',
          'Josh. 2:9–11',
          'Josh. 6:25',
          'Lev. 19:9–10',
          'Deut. 24:19–22',
          'Ps. 13:1–6',
        ],
        kidSummary:
          'Naomi lost her husband and sons and was very sad. Ruth would not leave her; she went with Naomi to Bethlehem and chose Naomi’s people and God. They arrived just as the barley harvest began.',
        reflectionQuestions: [
          'Why did Naomi’s family leave Bethlehem, and what losses happened in Moab?',
          'What did Ruth promise Naomi in Ruth 1:16–17?',
          'Why is the beginning of the barley harvest important for what happens next?',
          'How does Naomi describe her situation when she returns to Bethlehem?',
        ],
      },
      2: {
        reference: 'Ruth 2',
        summary:
          'Ruth goes out to glean grain so that she and Naomi can eat, and she comes to a field belonging to Boaz, a relative of Elimelech. Boaz learns about Ruth’s loyalty to Naomi and orders his workers to protect her, welcome her at the meal, and leave extra grain for her. He blesses Ruth for seeking refuge under the Lord’s wings. Ruth returns with abundant food, and Naomi identifies Boaz as one of their family redeemers and urges Ruth to remain in his fields through the harvests.',
        observations: [
          'Ruth asks Naomi for permission to glean behind harvesters who will show her favor.',
          'Ruth comes to the portion of the field belonging to Boaz, a man from Elimelech’s family.',
          'Boaz asks about Ruth and is told that she is the Moabite woman who returned with Naomi.',
          'Boaz tells Ruth to remain with his women, offers her water, and commands the men not to touch her.',
          'Boaz says he has heard how Ruth left her homeland to care for Naomi and blesses her for seeking refuge under the Lord’s wings.',
          'Boaz welcomes Ruth to his meal and instructs his workers to pull out grain for her without rebuking her.',
          'Naomi recognizes the large amount Ruth gathered and identifies Boaz as a close relative and family redeemer.',
        ],
        threads: ['covenant', 'creation'],
        lenses: ['Grace → Authority', 'Identity → Action', 'Truth → Practice'],
        concepts: ['Grace → Authority', 'Identity → Action', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'Gleaning and care for vulnerable people',
            explanation:
              'The Torah commands landowners to leave part of the harvest for the poor, the sojourner, the fatherless, and the widow. Ruth contributes to this pattern by showing Boaz applying those commands generously to a foreign widow who works for food.',
            passages: ['Ruth 2:2–3', 'Ruth 2:15–16', 'Lev. 19:9–10', 'Deut. 24:19–22'],
          },
          {
            title: 'Refuge under the Lord’s wings',
            explanation:
              'Boaz describes Ruth as having come to take refuge under the Lord’s wings. The Psalms use the same image for trust in God’s protective care, and Ruth 3 later echoes the language when Ruth asks Boaz to spread his wing over her.',
            passages: ['Ruth 2:12', 'Ruth 3:9', 'Ps. 36:7', 'Ps. 57:1'],
          },
          {
            title: 'A family redeemer enters the story',
            explanation:
              'Naomi identifies Boaz as one of the family’s redeemers. The Torah describes a close relative acting to preserve family property and freedom; Ruth will develop that responsibility in relation to Elimelech’s land and the continuation of the family line.',
            passages: ['Ruth 2:20', 'Lev. 25:25', 'Lev. 25:47–49', 'Ruth 4:3–10'],
          },
          {
            title: 'Providence through ordinary faithfulness',
            explanation:
              'The narrator says Ruth happened to come to Boaz’s field, then shows Ruth working, Boaz obeying God’s law, and Naomi recognizing kindness. The chapter presents provision through a convergence of ordinary choices without narrating a miracle or explaining every event directly.',
            passages: ['Ruth 2:3', 'Ruth 2:11–12', 'Ruth 2:19–20', 'Prov. 16:9'],
          },
        ],
        whyItMatters:
          'Ruth 2 shows how God’s covenant commands create concrete care for people with little social or economic protection. Ruth’s labor and Boaz’s authority, restraint, and generosity work together so that Naomi’s household receives food and new hope. Boaz is not presented as a one-to-one symbol of Christ, but his role begins a redemption pattern that the chapter grounds in Israel’s family and land responsibilities.',
        connectedPassages: [
          'Ruth 1:22',
          'Ruth 3:9–13',
          'Ruth 4:3–10',
          'Lev. 19:9–10',
          'Lev. 25:25',
          'Deut. 24:19–22',
          'Ps. 36:7',
          'Ps. 57:1',
          'Prov. 16:9',
        ],
        kidSummary:
          'Ruth worked hard gathering grain so she and Naomi would have food. Boaz protected her and gave her extra because he had heard about her faithful care for Naomi. God’s law taught landowners to leave food for people who needed help.',
        reflectionQuestions: [
          'Why did Ruth go into the fields, and whose field did she enter?',
          'What did Boaz do to protect and provide for Ruth?',
          'How do the gleaning commands in Leviticus 19 and Deuteronomy 24 help explain this chapter?',
          'What does Naomi learn about Boaz when Ruth returns home?',
          'How does the chapter show provision taking place through ordinary actions?',
        ],
      },
      3: {
        reference: 'Ruth 3',
        summary:
          'Naomi seeks a secure home for Ruth and instructs her to approach Boaz at the threshing floor after the work and meal are finished. Ruth follows the plan and, when Boaz wakes, asks him to spread his wing over her because he is a family redeemer. Boaz praises Ruth’s character and agrees to act, but explains that a nearer redeemer has the first right. He protects Ruth’s reputation, sends her home with barley, and Naomi tells her to wait while Boaz settles the matter.',
        observations: [
          'Naomi says she wants to seek rest and well-being for Ruth.',
          'Naomi instructs Ruth to wash, dress, observe where Boaz lies down, and approach him after he has finished eating and drinking.',
          'Ruth follows Naomi’s instructions and lies down at Boaz’s feet.',
          'When Boaz wakes, Ruth identifies herself and asks him to spread his wing over her because he is a family redeemer.',
          'Boaz calls Ruth a worthy woman and says that her present kindness is greater than her earlier kindness.',
          'Boaz agrees to redeem Ruth if the nearer family redeemer will not do so.',
          'Boaz sends Ruth away before daylight with six measures of barley, and Naomi tells her to wait for the matter to be resolved.',
        ],
        threads: ['covenant'],
        lenses: ['Grace → Authority', 'Truth → Practice'],
        concepts: ['Grace → Authority', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'From refuge under God’s wings to Boaz’s wing',
            explanation:
              'In Ruth 2, Boaz blesses Ruth for seeking refuge under the Lord’s wings. Ruth’s request in chapter 3 echoes that wording as she asks Boaz to take covenantal responsibility as redeemer, showing human faithfulness becoming a means of the protection Boaz had prayed for.',
            passages: ['Ruth 2:12', 'Ruth 3:9', 'Ps. 91:1–4'],
          },
          {
            title: 'Related family duties in the Torah',
            explanation:
              'Ruth combines concerns addressed by related but distinct Torah provisions: redeeming family land and preserving the name of a deceased man. The narrative adapts these responsibilities to its own situation and does not present Boaz as simply performing the standard levirate-marriage command.',
            passages: ['Ruth 3:9–13', 'Lev. 25:25', 'Deut. 25:5–10', 'Ruth 4:5–10'],
          },
          {
            title: 'Ruth as a worthy woman',
            explanation:
              'Boaz calls Ruth a worthy woman, using language also associated with the capable woman in Proverbs 31. The connection highlights publicly recognized character, diligence, and care for a household rather than merely romantic attraction.',
            passages: ['Ruth 3:11', 'Prov. 31:10–31'],
          },
          {
            title: 'Redemption pursued with integrity',
            explanation:
              'Boaz is willing to redeem, yet he acknowledges the nearer relative’s prior claim and promises to address it. Ruth 4 shows him keeping that promise publicly before the elders rather than securing the outcome in secret.',
            passages: ['Ruth 3:12–13', 'Ruth 3:18', 'Ruth 4:1–10'],
          },
        ],
        whyItMatters:
          'Ruth 3 moves the story from provision during harvest toward a lawful commitment to family redemption. Ruth acts boldly within a vulnerable situation, while Boaz responds with self-control, protection, and respect for the nearer redeemer’s right. The chapter’s wing imagery links trust in God with responsible human action, but the outcome must still wait for a public and just resolution.',
        connectedPassages: [
          'Ruth 1:9',
          'Ruth 2:12',
          'Ruth 4:1–10',
          'Lev. 25:25',
          'Deut. 25:5–10',
          'Ps. 91:1–4',
          'Prov. 31:10–31',
        ],
        kidSummary:
          'Naomi helped Ruth ask Boaz whether he would care for their family as a redeemer. Boaz promised to help, but he first had to speak with a closer relative and do what was right. Ruth and Naomi waited for him to settle the matter.',
        reflectionQuestions: [
          'What did Naomi hope to find for Ruth, and what plan did she give her?',
          'What did Ruth ask Boaz to do when she called him a family redeemer?',
          'Why did Boaz not act immediately even though he was willing to redeem?',
          'How does Ruth’s request connect with Boaz’s blessing in Ruth 2:12?',
          'What details show Boaz’s concern for an honorable and lawful outcome?',
        ],
      },
      4: {
        reference: 'Ruth 4',
        summary:
          'Boaz goes to the city gate, gathers the nearer redeemer and ten elders, and publicly presents the matter of Elimelech’s land and Ruth. The nearer redeemer declines because he fears harming his own inheritance, so the transaction is confirmed and Boaz commits to redeem the property and marry Ruth. Ruth bears Obed, and the women of Bethlehem celebrate the Lord’s provision and Naomi’s renewed family. The book closes with a genealogy tracing Perez’s line through Obed to David.',
        observations: [
          'Boaz sits at the city gate and gathers the nearer redeemer and ten elders as witnesses.',
          'The nearer redeemer first agrees to redeem Elimelech’s land but declines when Boaz explains the responsibility involving Ruth and the deceased man’s name.',
          'A sandal is exchanged to confirm the redemption transaction according to the custom described by the narrator.',
          'Boaz publicly commits to acquire the family property and take Ruth as his wife in order to preserve the name of the dead.',
          'The elders and people bless Ruth and Boaz with references to Rachel, Leah, and Tamar.',
          'The Lord enables Ruth to conceive, and she gives birth to a son named Obed.',
          'The women celebrate Naomi’s redeemer and restored family, and the genealogy identifies Obed as the grandfather of David.',
        ],
        threads: ['covenant', 'reign', 'image'],
        lenses: ['Promise → Fulfillment', 'Grace → Authority', 'Identity → Action'],
        concepts: ['Promise → Fulfillment', 'Grace → Authority', 'Identity → Action'],
        scriptureConnections: [
          {
            title: 'Redemption at the city gate',
            explanation:
              'Boaz resolves the matter publicly before the nearer relative and elders, joining the redemption of family property with preserving the deceased man’s name. The Torah provides the background for both concerns, while Ruth records the particular legal custom used in Bethlehem.',
            passages: ['Ruth 4:1–10', 'Lev. 25:25', 'Deut. 25:5–10'],
          },
          {
            title: 'Ruth joins Israel’s family story',
            explanation:
              'The witnesses bless Ruth by recalling Rachel, Leah, and Tamar, placing this Moabite woman within the remembered story of Israel’s mothers and Judah’s family. The connection is made explicitly by the people at the gate before the genealogy is given.',
            passages: ['Ruth 4:11–12', 'Gen. 29:31–30:24', 'Gen. 38:27–30'],
          },
          {
            title: 'Naomi’s emptiness answered with family',
            explanation:
              'Naomi returned asking to be called bitter and saying she had come home empty. At the end, Bethlehem’s women praise the Lord for providing a redeemer and place Obed in Naomi’s care; the story answers her earlier lament without erasing the deaths she endured.',
            passages: ['Ruth 1:20–21', 'Ruth 4:13–17'],
          },
          {
            title: 'The family line leads to David',
            explanation:
              'Ruth’s final genealogy identifies Obed as David’s grandfather, giving this family redemption significance for Israel’s later kingship. First Samuel introduces David within that later history, and God’s promise to David develops the royal hope further.',
            passages: ['Ruth 4:17–22', '1 Sam. 16:1–13', '2 Sam. 7:12–16'],
          },
          {
            title: 'Matthew includes Ruth in Jesus’ genealogy',
            explanation:
              'Matthew later names Ruth and Boaz in the genealogy that moves through David and leads to Jesus. Ruth itself ends with David rather than making a direct prediction about Jesus; Matthew supplies the later canonical connection and presents this family line within the Gospel’s account of Christ.',
            passages: ['Ruth 4:17–22', 'Matt. 1:1–6', 'Matt. 1:16'],
          },
        ],
        whyItMatters:
          'Ruth 4 resolves the threats to land, family name, and household security through a public act of redemption, then widens the outcome from one Bethlehem family to the line of David. The Lord’s gift of a child brings genuine restoration to Ruth and Naomi, while the genealogy shows that their ordinary family story belongs within Israel’s royal history. Matthew later interprets that same line as leading to Jesus, so the Gospel connection rests on an explicit genealogy rather than on treating Boaz as a direct allegory of Christ.',
        connectedPassages: [
          'Ruth 1:20–22',
          'Ruth 3:12–13',
          'Lev. 25:25',
          'Deut. 25:5–10',
          'Gen. 38:27–30',
          '1 Sam. 16:1–13',
          '2 Sam. 7:12–16',
          'Matt. 1:1–6',
          'Matt. 1:16',
        ],
        kidSummary:
          'Boaz kept his promise and became the redeemer for Ruth and Naomi’s family. Ruth and Boaz had a son named Obed, and Naomi’s family was filled with joy again. Obed became King David’s grandfather, and much later Jesus was born in this family line.',
        reflectionQuestions: [
          'How did Boaz settle the redemption matter at the city gate?',
          'Why did the nearer redeemer decide not to redeem the property and family line?',
          'How is Naomi’s situation at the end different from her words in Ruth 1:20–21?',
          'Why does the genealogy ending with David matter for the book of Ruth?',
          'How does Matthew 1 develop the family line recorded in Ruth 4?',
        ],
      },
    },
  },
  hab: {
    id: 'hab',
    title: 'Habakkuk',
    testament: 'Old Testament',
    genre: 'Minor Prophet / Prophetic Dialogue',
    era: 'Divided Kingdom / approaching Babylonian judgment',
    historicalSetting:
      'Judah faces violence and injustice while Babylon is rising as the instrument of coming judgment.',
    chapterCount: 3,
    chapters: {
      1: {
        reference: 'Habakkuk 1',
        summary:
          'Habakkuk sees violence, wrongdoing, conflict, and distorted justice among God’s people and asks how long the Lord will allow it to continue. God answers that he is raising the Chaldeans, or Babylonians, whose speed and violence will bring judgment. The answer astonishes rather than settles Habakkuk: because he knows the Lord as eternal, holy, and just, he asks how God can use a nation more wicked than Judah and seemingly allow it to swallow other peoples.',
        observations: [
          'Habakkuk brings his complaint to the Lord and continues speaking to him rather than walking away.',
          'Violence, wrongdoing, destruction, conflict, and strife have become normal in Habakkuk’s view of Judah.',
          'The law appears powerless and justice is distorted because the wicked surround the righteous.',
          'God says that he is already at work, although his announced action is not what Habakkuk expects.',
          'The Chaldeans are described as swift, feared, violent, and committed to expanding their own power.',
          'Babylon treats its own strength as its god.',
          'Habakkuk’s second question grows from what he confesses about the Lord’s eternity, holiness, and role as judge.',
        ],
        threads: ['reign', 'covenant', 'exodus'],
        lenses: ['Truth → Practice', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'Faithful lament asks “How long?”',
            explanation:
              'Habakkuk’s opening complaint belongs beside prayers that bring confusion and apparent delay directly to God. Psalm 13 begins with the same question, while Jeremiah also wrestles with the prosperity of the wicked. These passages invite readers to compare honest lament without pretending that every speaker receives the same answer.',
            passages: ['Hab. 1:2–4', 'Ps. 13:1–2', 'Jer. 12:1'],
          },
          {
            title: 'The troubling success of the wicked',
            explanation:
              'Habakkuk’s questions resemble the struggles voiced in Job 21 and Psalm 73: violent or arrogant people can appear to flourish. Psalm 73 reaches a clearer perspective in God’s sanctuary, while Habakkuk must keep watching for a further answer.',
            passages: ['Hab. 1:12–17', 'Job 21:7–15', 'Ps. 73:2–17'],
          },
          {
            title: 'Power becomes an object of worship',
            explanation:
              'The Chaldeans credit their strength as a god and gather nations like fish. Romans 1 describes a broader human exchange in which created things receive the honor due to the Creator. Reading the passages together exposes how self-made power can become idolatrous without making the two settings identical.',
            passages: ['Hab. 1:11, 14–17', 'Rom. 1:18–25'],
          },
          {
            title: 'Paul repeats the warning to wonder',
            explanation:
              'In Acts 13, Paul quotes Habakkuk 1:5 while warning his hearers not to dismiss the work God announces through the gospel. The original verse concerns the astonishing rise of Babylon; Acts applies its warning language in a new setting and directs readers to consider both contexts.',
            passages: ['Hab. 1:5', 'Acts 13:40–41'],
          },
        ],
        whyItMatters:
          'Habakkuk 1 gives language for bringing injustice and bewilderment before God while holding tightly to what God has revealed about himself. It also preserves the hard tension of God’s answer: divine action may be real even when it is delayed from our perspective or takes a form we do not understand. The chapter does not ask readers to call Babylon good; it exposes Babylon’s violence and drives the prophet to seek a fuller account of God’s just rule and covenant faithfulness.',
        connectedPassages: [
          'Ps. 13:1–2',
          'Ps. 73:2–17',
          'Job 21:7–15',
          'Jer. 12:1',
          'Rom. 1:18–25',
          'Acts 13:40–41',
        ],
        kidSummary:
          'Habakkuk saw people hurting one another and wondered why God had not stopped them. God told him that he had seen everything and was already working, but his answer surprised Habakkuk. Habakkuk kept talking to God because he knew God was good, even when he did not understand what God was doing.',
        reflectionQuestions: [
          'What problem does Habakkuk see among God’s people?',
          'What part of God’s answer surprises and troubles him?',
          'Which truths about God lead Habakkuk to keep asking questions?',
          'What is the difference between honestly questioning God and rejecting him?',
        ],
      },
      2: {
        reference: 'Habakkuk 2',
        summary:
          'Habakkuk takes his stand to watch for God’s reply. The Lord tells him to write the vision clearly: it has an appointed time and will not prove false, even if he must wait. God contrasts the swollen, unstable proud person with the righteous person who lives by faith or faithfulness. Five woes then expose Babylon’s plunder, unjust gain, bloodshed, humiliation of others, and idolatry. The chapter closes by turning attention from powerless idols and Babylon’s noise to the Lord in his holy temple.',
        observations: [
          'Habakkuk deliberately takes his position, watches, and waits for an answer and for correction.',
          'God commands that the vision be written plainly so that its message can be carried forward.',
          'The vision has an appointed time; apparent delay does not mean that it will fail.',
          'The proud person’s distorted inner life is contrasted with the righteous person living by faith or faithfulness.',
          'Babylon’s appetite and apparent success do not make its position secure.',
          'Five woes announce reversals for plunder, unjust gain, bloodshed, exploitation, and idolatry.',
          'The nations harmed by Babylon are pictured as taking up taunts, and violence returns upon the violent.',
          'Idols cannot speak or teach, but the living Lord is in his holy temple and the whole earth is called to silence before him.',
        ],
        threads: ['reign', 'covenant', 'temple', 'creation'],
        lenses: ['Truth → Practice', 'Promise → Fulfillment', 'Grace → Authority', 'Identity → Action'],
        scriptureConnections: [
          {
            title: 'Waiting for the appointed time',
            explanation:
              'The vision is certain even though its fulfillment must be awaited. Psalm 37 likewise calls God’s people to quiet trust rather than anxious imitation of evildoers, and Hebrews 10 draws on Habakkuk while urging endurance as the promised coming approaches.',
            passages: ['Hab. 2:1–3', 'Ps. 37:7–10', 'Heb. 10:35–39'],
          },
          {
            title: 'The righteous shall live by faith',
            explanation:
              'Habakkuk 2:4 contrasts the swollen pride of the wicked with the faithful dependence of the righteous. Romans, Galatians, and Hebrews each draw on this verse within their own arguments about faith, righteousness, promise, and endurance. Reading each passage in context is better than forcing all three uses into a single simplified explanation.',
            passages: ['Hab. 2:4', 'Rom. 1:17', 'Gal. 3:11', 'Heb. 10:35–39'],
          },
          {
            title: 'Proud empires are brought low',
            explanation:
              'Habakkuk’s woes announce that exploitative power carries the seeds of reversal. Isaiah describes human pride humbled before the Lord, Daniel narrates Nebuchadnezzar’s humiliation, and Jeremiah speaks directly of Babylon’s coming fall.',
            passages: ['Hab. 2:5–17', 'Isa. 2:11–17', 'Jer. 51:7–10', 'Dan. 4:28–37'],
          },
          {
            title: 'The fall of violent Babylon',
            explanation:
              'Revelation 18 later uses Babylon as the name for a wealthy, violent world power destined for judgment. Its imagery echoes prophetic judgments such as Habakkuk’s, while developing them within Revelation’s own vision of the final fall of corrupt human empire.',
            passages: ['Hab. 2:6–17', 'Rev. 18'],
          },
          {
            title: 'Silent before the living God',
            explanation:
              'The chapter contrasts silent, lifeless idols with the living Lord before whom the earth must be silent. Zephaniah also calls for silence before the Lord as the day of judgment approaches.',
            passages: ['Hab. 2:18–20', 'Zeph. 1:7'],
          },
        ],
        whyItMatters:
          'Habakkuk 2 teaches that waiting is not the same as surrendering to injustice. God names Babylon’s sins, promises that violent gain will be reversed, and calls the righteous to a life of faithful dependence while the vision awaits its appointed time. The New Testament repeatedly returns to Habakkuk 2:4, and its distinct uses invite careful reading. The final word belongs neither to proud empire nor speechless idols, but to the living Lord who reigns from his holy temple.',
        connectedPassages: [
          'Ps. 37:7–10',
          'Isa. 2:11–17',
          'Jer. 51:7–10',
          'Dan. 4:28–37',
          'Rom. 1:17',
          'Gal. 3:11',
          'Heb. 10:35–39',
          'Rev. 18',
          'Zeph. 1:7',
        ],
        kidSummary:
          'God told Habakkuk that proud and cruel people would not win forever. God’s people were called to keep trusting him while they waited. Even when bad people seem powerful, God still rules and will make things right.',
        reflectionQuestions: [
          'How are the proud and the righteous contrasted?',
          'What does the chapter say about waiting for God’s promised action?',
          'What do the five woes reveal about the eventual result of injustice?',
          'Why does the chapter end with the Lord in his holy temple?',
        ],
      },
      3: {
        reference: 'Habakkuk 3',
        summary:
          'Habakkuk responds with a prayer shaped like a song. He asks God to renew his work and remember mercy, then recalls God coming in power as creation trembles—imagery that resembles the Exodus, Sinai, and conquest traditions. Habakkuk trembles as he waits quietly for the day of trouble. Yet even if crops fail, fields yield no food, and flocks and herds disappear, he resolves to rejoice in the Lord, the God of his salvation, who is his strength.',
        observations: [
          'The chapter is identified as Habakkuk’s prayer and includes musical directions.',
          'Habakkuk asks the Lord to revive his work and, in wrath, to remember mercy.',
          'The prayer uses poetic images of God coming in splendor and power.',
          'Mountains, waters, sun, moon, and other parts of creation respond to God’s arrival.',
          'The poem recalls patterns associated with God’s past deliverance of his people, especially Exodus and conquest imagery.',
          'Habakkuk does not pretend the coming suffering is easy: his body trembles and his strength fails.',
          'Although afraid, he chooses to wait quietly for the day of trouble.',
          'His joy rests in the Lord rather than in crops, livestock, or other visible supports.',
          'The book’s movement reaches from questioning, through watching and waiting, to prayer and worship.',
        ],
        threads: ['exodus', 'reign', 'creation', 'covenant'],
        lenses: ['Presence → Transformation', 'Rescue → Mission', 'Truth → Practice', 'Identity → Action'],
        scriptureConnections: [
          {
            title: 'God comes in saving power',
            explanation:
              'Habakkuk’s song draws on language and images associated with God’s appearance from the south, the trembling of creation, and victory over waters and enemies. Exodus 15, Moses’ blessing, Deborah’s song, and several Psalms give readers earlier passages with which to compare this poetic remembrance.',
            passages: ['Hab. 3:3–15', 'Ex. 15:1–18', 'Deut. 33:2–5', 'Judg. 5:4–5', 'Ps. 18:7–15'],
          },
          {
            title: 'Remembering the former works of God',
            explanation:
              'Habakkuk faces the future by remembering God’s mighty work. Psalm 77 follows a similar movement from distress to meditation on God’s deeds and then recalls the Exodus through the sea.',
            passages: ['Hab. 3:2, 8–15', 'Ps. 77:11–20'],
          },
          {
            title: 'God remains refuge and strength',
            explanation:
              'Habakkuk’s circumstances shake, but his confidence settles on God himself. Psalms 46 and 73 likewise locate security in God when earth, body, or every other portion fails.',
            passages: ['Hab. 3:16–19', 'Ps. 46', 'Ps. 73:25–26', 'Isa. 41:10'],
          },
          {
            title: 'Joy and strength amid need',
            explanation:
              'Paul’s call to rejoice and his testimony of contentment in abundance or need resonate with Habakkuk’s closing confession. Philippians directs that confidence through Christ, so readers should attend to both the shared posture and the different covenant settings.',
            passages: ['Hab. 3:17–19', 'Phil. 4:4–13'],
          },
          {
            title: 'Creation shaken before God’s lasting kingdom',
            explanation:
              'Habakkuk poetically describes creation responding to God’s coming. Hebrews 12 also speaks of earth and heaven being shaken so that what cannot be shaken remains, and calls God’s people to grateful worship before the consuming God.',
            passages: ['Hab. 3:6–11', 'Heb. 12:26–29'],
          },
        ],
        whyItMatters:
          'Habakkuk 3 shows trust growing through remembrance, not through denial. The prophet still trembles and the threatened losses remain severe, but God’s past acts of salvation and judgment give him a way to face the future. His final joy depends on the God of his salvation rather than on secure circumstances. The book therefore ends with worship that has passed through honest questioning and patient waiting, preserving both fear’s reality and faith’s enduring hope.',
        connectedPassages: [
          'Ex. 15:1–18',
          'Deut. 33:2–5',
          'Judg. 5:4–5',
          'Ps. 18:7–15',
          'Ps. 77:11–20',
          'Ps. 46',
          'Ps. 73:25–26',
          'Isa. 41:10',
          'Phil. 4:4–13',
          'Heb. 12:26–29',
        ],
        kidSummary:
          'Habakkuk remembered the powerful ways God had rescued his people before. He was still afraid of what was coming, but he decided to trust God. Even if everything around him went wrong, Habakkuk knew that God would still be his strength and his Savior.',
        reflectionQuestions: [
          'Which earlier acts of God does Habakkuk seem to remember?',
          'How does remembering God’s past work affect Habakkuk’s fear?',
          'What circumstances does Habakkuk imagine losing?',
          'What is the foundation of his joy at the end?',
        ],
      },
    },
  },
};

// Only books with authored chapter records appear here.
export const AVAILABLE_SCRIPTURE_BOOKS = CANONICAL_BOOK_ORDER
  .filter(bookId => SCRIPTURE_CHAPTERS[bookId])
  .map(bookId => SCRIPTURE_CHAPTERS[bookId]);

// Returns null for an unknown book, a non-integer chapter, or unavailable data.
export function getScriptureChapter(bookId, chapterNumber) {
  if (typeof bookId !== 'string') return null;

  const chapter = Number(chapterNumber);
  if (!Number.isInteger(chapter) || chapter < 1) return null;

  return SCRIPTURE_CHAPTERS[bookId.toLowerCase()]?.chapters?.[chapter] || null;
}
