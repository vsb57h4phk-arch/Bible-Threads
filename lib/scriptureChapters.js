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
