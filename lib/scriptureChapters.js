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
  ex: {
    id: 'ex',
    title: 'Exodus',
    testament: 'Old Testament',
    genre: 'Old Testament Law / Torah',
    era: 'Exodus and Wilderness',
    historicalSetting:
      'Israel is enslaved under Pharaoh in Egypt, and the LORD acts to redeem His covenant people, reveal His name, bring them into belonging and worship, and ultimately dwell among them.',
    chapterCount: 40,
    chapters: {
      1: {
        reference: 'Exodus 1',
        summary:
          'Exodus begins by naming Jacob’s sons and explaining that Joseph’s generation died while Israel became exceedingly numerous in Egypt. A new king who does not know Joseph fears Israel’s growth and subjects the people to forced labor, but they continue to multiply under affliction. Pharaoh then orders the Hebrew midwives, Shiphrah and Puah, to kill newborn sons. The midwives fear God rather than Pharaoh and preserve the children, and God deals well with them. Pharaoh finally commands all his people to throw every Hebrew son into the Nile.',
        observations: [
          'The chapter names the sons of Israel who came to Egypt with Jacob and says that Joseph and his generation died.',
          'The people of Israel are fruitful, multiply greatly, and fill the land.',
          'A new king who does not know Joseph fears that Israel’s growing population could join Egypt’s enemies.',
          'Egypt places taskmasters over Israel and imposes forced labor in the store cities of Pithom and Raamses.',
          'The more Israel is oppressed, the more the people multiply and spread.',
          'Pharaoh orders the Hebrew midwives Shiphrah and Puah to kill Hebrew sons at birth while allowing daughters to live.',
          'The midwives fear God, refuse Pharaoh’s command, and preserve the children.',
          'God deals well with the midwives, and Israel continues to multiply and become strong.',
          'Pharaoh expands his attack by commanding all his people to throw every Hebrew son into the Nile.',
        ],
        threads: ['covenant', 'reign', 'image'],
        lenses: ['Promise → Fulfillment', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'The promised family becomes a numerous people',
            explanation:
              'These passages appear connected because Genesis promises that Abraham’s family will become a great nation, bless the nations, and endure oppression before God brings them out. Exodus 1 observes that Israel has multiplied in Egypt even as Pharaoh turns that growth into a reason for fear.',
            passages: ['Ex. 1:1–12', 'Gen. 12:1–3', 'Gen. 15:13–14', 'Gen. 46:1–7'],
          },
          {
            title: 'Joseph’s hope reaches beyond his lifetime',
            explanation:
              'Genesis closes with Joseph trusting that God will visit Israel and bring the people from Egypt to the promised land. Exodus opens after Joseph’s death and before deliverance is visible, keeping his hope and God’s covenant promise in view amid worsening oppression.',
            passages: ['Ex. 1:6–14', 'Gen. 50:20–26'],
          },
          {
            title: 'Pharaoh fears growth; the midwives fear God',
            explanation:
              'Observation: Pharaoh attempts to control Israel through slavery and death, the midwives fear God and preserve the children, and Israel continues to multiply. Interpretation: human opposition cannot overturn God’s covenant purpose, and the conflict is already becoming one between Pharaoh’s oppressive rule and the LORD’s promise.',
            passages: ['Ex. 1:8–22', 'Ps. 105:23–25', 'Acts 7:17–19'],
          },
          {
            title: 'A ruler attacks threatened children',
            explanation:
              'Matthew later tells of Herod killing boys around Bethlehem while the child Jesus is taken to Egypt. The events are not identical, but both narratives show violent rulers attacking children they regard as threats while God preserves the one through whom His saving purpose will advance.',
            passages: ['Ex. 1:15–22', 'Matt. 2:13–18'],
          },
        ],
        whyItMatters:
          'Exodus 1 establishes a conflict between Pharaoh’s death-dealing reign and God’s covenant purpose. Israel cannot free itself, yet oppression cannot cancel the multiplication promised in Genesis. The midwives’ fear of God becomes visible in preserving life, contrasting with Pharaoh’s fear of Israel and his widening violence. The chapter ends before rescue appears, with every Hebrew son threatened, so its hope rests not in human strength but in the faithfulness of the God whose promise continues through affliction.',
        connectedPassages: [
          'Gen. 12:1–3',
          'Gen. 15:13–14',
          'Gen. 46:1–7',
          'Gen. 50:20–26',
          'Ps. 105:23–25',
          'Acts 7:17–19',
          'Matt. 2:13–18',
        ],
        kidSummary:
          'A cruel king was afraid of God’s growing people and made them work as slaves. He even ordered babies to be killed, but two midwives feared God and protected life. Pharaoh was powerful, but he could not stop God from caring for His people and keeping His promise.',
        reflectionQuestions: [
          'What happens to Israel’s population even while Pharaoh oppresses the people?',
          'How does the fear of Pharaoh contrast with the midwives’ fear of God?',
          'How do God’s promises in Genesis help explain why Israel’s growth matters?',
          'Why does this chapter show that redemption must come from beyond Israel’s own power?',
        ],
      },
      2: {
        reference: 'Exodus 2',
        summary:
          'A Levite woman gives birth to a son under Pharaoh’s death decree, hides him, and then places him in a basket among the reeds of the Nile. Pharaoh’s daughter finds and pities him, and through his sister’s action the child is nursed by his own mother before becoming Pharaoh’s daughter’s son and receiving the name Moses. When grown, Moses identifies with the suffering Hebrews, kills an Egyptian who is beating a Hebrew, hides the body, and flees after the act becomes known. In Midian he defends women at a well, marries Zipporah, and names their son Gershom. The chapter closes with Israel groaning and God hearing, remembering His covenant, seeing, and knowing.',
        observations: [
          'A man and woman from the house of Levi have a son, whom his mother hides for three months.',
          'His mother places him in a basket coated with bitumen and pitch among the reeds by the Nile while his sister watches.',
          'Pharaoh’s daughter finds the crying child, recognizes him as a Hebrew, and has compassion on him.',
          'The child’s sister arranges for his own mother to nurse him, after which Pharaoh’s daughter adopts him and names him Moses.',
          'When grown, Moses sees an Egyptian beating a Hebrew, kills the Egyptian, and hides the body in the sand.',
          'Moses’ action becomes known; Pharaoh seeks to kill him, and Moses flees to Midian.',
          'Moses defends the daughters of Midian’s priest at a well, lives with the family, marries Zipporah, and names their son Gershom because he has become a sojourner.',
          'Israel groans and cries out under slavery after the king of Egypt dies.',
          'God hears their groaning, remembers His covenant with Abraham, Isaac, and Jacob, sees Israel, and knows.',
        ],
        threads: ['exodus', 'covenant', 'reign'],
        lenses: ['Rescue → Mission', 'Promise → Fulfillment'],
        scriptureConnections: [
          {
            title: 'A life preserved through an ark',
            explanation:
              'The Hebrew word used for Moses’ basket is also used for Noah’s ark. This meaningful verbal connection links two vessels coated for protection through deadly waters, although the narratives should not be pressed into a complete one-to-one parallel.',
            passages: ['Ex. 2:1–10', 'Gen. 6:14'],
          },
          {
            title: 'Moses chooses identification with the oppressed',
            explanation:
              'Hebrews later interprets Moses’ adulthood as a refusal to be defined by Pharaoh’s household and a choice to share mistreatment with God’s people. Exodus itself shows him going out to his Hebrew brothers and seeing their burdens without filling in every detail of his childhood or education.',
            passages: ['Ex. 2:10–15', 'Heb. 11:23–27'],
          },
          {
            title: 'Intervention in human strength does not begin the exodus',
            explanation:
              'Acts says Moses supposed his people would understand that God was giving salvation through him, yet they did not. Exodus records his violent intervention, concealment, exposure, and flight. Moses’ act is not presented as the divinely appointed beginning of deliverance; the coming rescue must proceed from God’s word and power.',
            passages: ['Ex. 2:11–15', 'Acts 7:20–29'],
          },
          {
            title: 'God hears, remembers, sees, and knows',
            explanation:
              'Biblical remembering language does not imply that God forgot His covenant and later recalled it. It often describes God acting faithfully in accordance with His promise. Psalm 106 similarly connects God’s attention to affliction with His remembrance of covenant love.',
            passages: ['Ex. 2:23–25', 'Gen. 15:13–14', 'Ps. 106:44–46'],
          },
        ],
        whyItMatters:
          'Exodus 2 shows sovereign preservation without presenting Moses as a flawless hero. God preserves the threatened child through the actions of his family and Pharaoh’s own daughter, but Moses’ first recorded attempt to confront oppression ends in death, exposure, and exile. The decisive turn comes in the final verses: Israel cannot rescue itself, yet its cries reach the covenant God who sees and knows. Redemption will begin with God’s faithful attention and action, not with Moses’ unaided strength.',
        connectedPassages: [
          'Gen. 6:14',
          'Gen. 15:13–14',
          'Ps. 106:44–46',
          'Acts 7:20–29',
          'Heb. 11:23–27',
        ],
        kidSummary:
          'God protected baby Moses when his life was in danger. When Moses grew up, he saw a Hebrew being hurt, but his violent action did not rescue God’s people, and he had to flee. Israel cried under slavery, and God heard, saw, and knew their suffering.',
        reflectionQuestions: [
          'How is Moses preserved from Pharaoh’s command as a baby?',
          'What happens when Moses tries to intervene against oppression by killing the Egyptian?',
          'Why is the verbal connection between Moses’ basket and Noah’s ark meaningful but limited?',
          'What do the words heard, remembered, saw, and knew reveal about God’s response to Israel?',
        ],
      },
      3: {
        reference: 'Exodus 3',
        summary:
          'While Moses shepherds Jethro’s flock near Horeb, the angel of the LORD appears in a flame from a bush that burns without being consumed. God calls Moses by name, declares the ground holy, and identifies Himself as the God of Abraham, Isaac, and Jacob. He says He has seen Israel’s affliction, heard its cry, knows its sufferings, and has come down to deliver the people and bring them to a good land. God sends Moses to Pharaoh. When Moses asks, “Who am I?” God promises, “I will be with you.” God reveals His name, commissions Moses to gather Israel’s elders, foretells Pharaoh’s initial refusal, and promises that Israel will leave Egypt with provision and worship God at the mountain.',
        observations: [
          'Moses is shepherding Jethro’s flock when he comes to Horeb, the mountain of God.',
          'The angel of the LORD appears in a flame from a bush that burns without being consumed.',
          'God calls Moses by name, tells him not to come closer, and commands him to remove his sandals because the ground is holy.',
          'God identifies Himself as the God of Abraham, Isaac, and Jacob, and Moses hides his face.',
          'The LORD says He has seen Israel’s affliction, heard the people’s cry, knows their sufferings, and has come down to deliver them.',
          'God sends Moses to Pharaoh to bring Israel out of Egypt.',
          'Moses asks, “Who am I?” and God answers with the promise, “I will be with you.”',
          'God says, “I AM WHO I AM,” connects this declaration with the covenant name of the LORD, and says this is His name through the generations.',
          'God commands Moses to gather Israel’s elders and says Pharaoh will initially refuse to let the people go.',
          'God promises to strike Egypt, bring Israel out with provision, and give the people a sign when they worship at the mountain.',
        ],
        threads: ['exodus', 'covenant', 'temple'],
        lenses: ['Presence → Transformation', 'Rescue → Mission', 'Promise → Fulfillment'],
        scriptureConnections: [
          {
            title: 'The God of the patriarchs keeps covenant',
            explanation:
              'God identifies Himself through His relationship with Abraham, Isaac, and Jacob and acts in continuity with the promises of land, presence, offspring, and return. These passages appear connected because the exodus mission grows from God’s earlier covenant word rather than from a new or unrelated plan.',
            passages: ['Ex. 3:6–8, 15–17', 'Gen. 15:13–14', 'Gen. 26:2–5', 'Gen. 28:13–15'],
          },
          {
            title: 'Holy presence and the place of encounter',
            explanation:
              'The bush is not the chapter’s main focus; God’s holy presence makes the ground holy and turns a wilderness location into a place of encounter and commission. Moses’ later blessing remembers the favor of the One who dwelt in the bush.',
            passages: ['Ex. 3:1–6', 'Deut. 33:16'],
          },
          {
            title: 'God sees, comes down, and sends',
            explanation:
              'God’s own action governs the commission: He sees, hears, knows, comes down to deliver, and sends Moses. Acts retells the scene while emphasizing both Israel’s suffering and the fact that the previously rejected Moses is now sent by God.',
            passages: ['Ex. 3:7–12', 'Acts 7:30–35'],
          },
          {
            title: 'The living God of Abraham, Isaac, and Jacob',
            explanation:
              'Jesus cites God’s words at the bush when teaching about resurrection, reasoning that God is not God of the dead but of the living. The New Testament thus treats God’s covenant identification in Exodus 3 as continuing and life-giving, not merely historical information.',
            passages: ['Ex. 3:6', 'Matt. 22:31–32', 'Mark 12:26–27'],
          },
          {
            title: 'The divine name and the identity of Jesus',
            explanation:
              'Exodus 3:14 records “I AM WHO I AM” and joins it to the covenant name of the LORD in verse 15. The short English phrase does not exhaust the Hebrew expression, which speaks to God’s self-existence, faithfulness, presence, and freedom to reveal Himself on His own terms. John 8:58 contributes to the broader New Testament presentation of Jesus sharing divine identity; the connection is deeper than a simplistic equation based only on matching English vocabulary.',
            passages: ['Ex. 3:13–15', 'Ex. 6:2–8', 'John 8:56–58'],
          },
        ],
        whyItMatters:
          'Exodus 3 reveals that redemption begins in God’s character, presence, covenant, and initiative. The holy God is not distant from Israel’s pain: He sees, hears, knows, and comes down to deliver. Moses’ adequacy is not the foundation of the mission; God answers “Who am I?” with “I will be with you.” The revelation of the divine name assures Israel that the God of the patriarchs freely and faithfully makes Himself known and will act. Moses is a real historical deliverer whose commissioned role also prepares readers for the greater deliverance Scripture later reveals.',
        connectedPassages: [
          'Gen. 15:13–14',
          'Gen. 26:2–5',
          'Gen. 28:13–15',
          'Ex. 6:2–8',
          'Deut. 33:16',
          'Matt. 22:31–32',
          'Mark 12:26–27',
          'Acts 7:30–35',
          'John 8:56–58',
        ],
        kidSummary:
          'God spoke to Moses from a burning bush and showed that He is holy. God had seen and heard His suffering people, and He promised to come down and rescue them. Moses was afraid he was not enough, but God said, “I will be with you.”',
        reflectionQuestions: [
          'What does God say He has seen, heard, known, and come down to do?',
          'How does God answer Moses’ question, “Who am I?”',
          'How do the promises to Abraham, Isaac, and Jacob explain the mission in this chapter?',
          'Why are God’s holy presence and revealed name more central than the unusual bush itself?',
        ],
      },
      4: {
        reference: 'Exodus 4',
        summary:
          'Moses asks what will happen if Israel does not believe that the LORD appeared to him, so God provides signs involving a staff, Moses’ hand, and water from the Nile. Moses then objects that he is not eloquent. The LORD identifies Himself as the maker of the human mouth and promises to be with Moses’ mouth, but Moses finally asks God to send someone else. God is angry yet provides Aaron as spokesman. Moses returns toward Egypt with God’s staff and receives a message for Pharaoh: Israel is God’s firstborn son and must be released to serve Him. On the journey the LORD confronts Moses, Zipporah circumcises her son, and the danger passes. Moses and Aaron meet Israel’s elders; the people believe and worship when they hear that the LORD has seen their affliction.',
        observations: [
          'Moses asks how Israel will respond if the people do not believe that the LORD appeared to him.',
          'God turns Moses’ staff into a serpent and back, makes Moses’ hand diseased and restores it, and promises a sign in which Nile water becomes blood.',
          'Moses objects that he is slow of speech and tongue.',
          'The LORD identifies Himself as the maker of the human mouth and promises to be with Moses’ mouth and teach him what to say.',
          'Moses asks God to send someone else, moving from expressed inadequacy to resistance against God’s provision.',
          'God becomes angry but appoints Aaron to speak, while Moses carries the staff through which the signs will be done.',
          'God calls Israel His firstborn son and tells Moses to warn Pharaoh against refusing to release His son to serve Him.',
          'On the journey the LORD confronts Moses; Zipporah circumcises her son, and the danger passes, although some details and pronoun references in the scene are debated.',
          'Aaron meets Moses, and together they speak to Israel’s elders and perform the signs.',
          'Israel believes, bows, and worships after hearing that the LORD has visited the people and seen their affliction.',
        ],
        threads: ['image', 'covenant', 'exodus'],
        lenses: ['Grace → Authority', 'Identity → Action', 'Rescue → Mission'],
        scriptureConnections: [
          {
            title: 'The Creator is sufficient for the messenger',
            explanation:
              'Psalm 94 appeals to God as the One who made the ear and formed the eye. In Exodus 4 the LORD likewise answers Moses’ speech objection by identifying Himself as maker of the mouth and promising His help. Moses’ weakness remains real, but it does not make God’s commission impossible.',
            passages: ['Ex. 4:10–12', 'Ps. 94:9'],
          },
          {
            title: 'Reluctant servants and God-given words',
            explanation:
              'Isaiah and Jeremiah also respond to divine commission with awareness of inadequacy, and God supplies cleansing, presence, or words. Moses’ objections progress further into a request that God send someone else, so they should not all be praised as humility; nevertheless, God patiently provides Aaron and promises help.',
            passages: ['Ex. 4:10–17', 'Isa. 6:5–8', 'Jer. 1:4–10'],
          },
          {
            title: 'God supplies what His servants need',
            explanation:
              'Jesus tells His sent disciples that the Spirit of their Father will give them words in hostile situations, and Paul says God chooses what appears weak so that boasting rests in the Lord. These passages develop a pattern in which mission depends on divine provision rather than the messenger’s impressive ability.',
            passages: ['Ex. 4:11–17', 'Matt. 10:19–20', '1 Cor. 1:26–31'],
          },
          {
            title: 'Israel is God’s firstborn son',
            explanation:
              'God’s claim names Israel as His firstborn son and demands release so that the son may serve Him. This event contributes to a sonship pattern that Matthew later recalls when Jesus, the faithful Son, comes out of Egypt. The connection does not make every detail of Moses a direct prediction of Jesus.',
            passages: ['Ex. 4:22–23', 'Matt. 2:13–15'],
          },
          {
            title: 'The covenant messenger and the covenant sign',
            explanation:
              'Genesis gives circumcision as the covenant sign for Abraham’s household. Exodus 4 clearly says the LORD confronts Moses on the journey, Zipporah circumcises her son, and the danger passes. Because several details and pronoun references are debated, the main narrative significance should remain central: the covenant messenger cannot disregard the covenant sign.',
            passages: ['Ex. 4:24–26', 'Gen. 17:9–14'],
          },
        ],
        whyItMatters:
          'Exodus 4 exposes both Moses’ genuine weakness and his growing resistance, while keeping God’s sufficient grace at the center. The LORD provides signs, words, Aaron’s help, and His own promised presence rather than depending on Moses’ natural ability. Yet grace does not erase God’s authority: the commissioned messenger must obey, and the covenant sign cannot be ignored. The chapter also names Israel’s identity and purpose—God’s firstborn son is to be released from Pharaoh’s service in order to serve the LORD. It closes with believing worship before the confrontation begins.',
        connectedPassages: [
          'Gen. 17:9–14',
          'Ps. 94:9',
          'Isa. 6:5–8',
          'Jer. 1:4–10',
          'Matt. 2:13–15',
          'Matt. 10:19–20',
          'Acts 7:35',
          '1 Cor. 1:26–31',
        ],
        kidSummary:
          'Moses was afraid and kept making excuses, but God patiently gave him signs, words, and Aaron to help him. God called Israel His firstborn son and said His people must be free to serve Him. When Israel heard that God had seen their suffering, the people believed and worshiped.',
        reflectionQuestions: [
          'What signs and helpers does God provide in response to Moses’ objections?',
          'When do Moses’ questions move from understandable weakness toward resistance?',
          'Why do Israel’s identity as God’s firstborn son and the covenant sign matter in this chapter?',
          'What does the people’s worship reveal about their response to God’s attention and promised rescue?',
        ],
      },
      5: {
        reference: 'Exodus 5',
        summary:
          'Moses and Aaron confront Pharaoh with the LORD’s command to let Israel go and hold a feast in the wilderness. Pharaoh asks, “Who is the LORD?” and refuses to obey or release Israel. He interprets worship as laziness and orders that straw no longer be supplied for bricks while the full quota remains. Israel scatters to gather stubble, taskmasters beat the Hebrew foremen, and the foremen’s appeal to Pharaoh fails. They blame Moses and Aaron for making them hated. Moses returns to the LORD and asks why harm has come and why he was sent, because Pharaoh’s oppression has increased and visible deliverance has not begun.',
        observations: [
          'Moses and Aaron deliver the message, “Thus says the LORD, the God of Israel,” and command Pharaoh to let the people go and hold a feast.',
          'Pharaoh asks who the LORD is, refuses to obey His voice, and says he will not let Israel go.',
          'Moses and Aaron repeat the request to travel into the wilderness and sacrifice to the LORD.',
          'Pharaoh describes the people’s desire to worship as laziness and accuses Moses and Aaron of stopping their work.',
          'Pharaoh removes the supply of straw while requiring Israel to produce the same number of bricks.',
          'The people scatter for stubble, and Egyptian taskmasters beat Israelite foremen when the quota is not met.',
          'The foremen appeal to Pharaoh, but he repeats the accusation of laziness and keeps the impossible demand.',
          'The foremen blame Moses and Aaron for worsening their standing before Pharaoh.',
          'Moses returns to the LORD in grief and confusion, asking why the people have been harmed and why God sent him.',
          'The chapter ends with Moses saying that Pharaoh has done evil and visible deliverance has not yet come.',
        ],
        threads: ['reign', 'exodus', 'covenant'],
        lenses: ['Truth → Practice', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'Pharaoh’s refusal was foretold',
            explanation:
              'God had already told Moses that Egypt’s king would not let Israel go unless compelled by a mighty hand. That earlier word explains the resistance without making the intensified suffering feel small or resolving Moses’ lament before the narrative answers it.',
            passages: ['Ex. 5:1–23', 'Ex. 3:18–20'],
          },
          {
            title: '“Who is the LORD?”',
            explanation:
              'Pharaoh’s question expresses refusal to recognize the LORD’s authority over Israel. The pattern develops further when God says Egypt will know that He is the LORD, but chapters 1–6 should not front-load every later conclusion about Pharaoh’s heart that unfolds in Exodus 7–14.',
            passages: ['Ex. 5:2', 'Ex. 7:5'],
          },
          {
            title: 'Lament under unchecked oppression',
            explanation:
              'Psalms 10, 73, and 77 bring confusion about oppressive power and apparent divine delay before God. Habakkuk likewise asks how long violence will continue. These passages appear connected because Moses returns to the LORD with grief rather than pretending that the worsening conditions are easy to understand.',
            passages: ['Ex. 5:22–23', 'Ps. 10:1–18', 'Ps. 73:2–17', 'Ps. 77:1–15', 'Hab. 1:2–4'],
          },
          {
            title: 'Threat drives God’s people to prayer',
            explanation:
              'Acts 4 records a gathered prayer after authorities threaten the church, asking God for boldness rather than denying the danger. The circumstances differ, but both passages show faithful mission encountering human power and driving God’s servants back to Him.',
            passages: ['Ex. 5:20–23', 'Acts 4:23–30'],
          },
          {
            title: 'Dependence when strength is exhausted',
            explanation:
              'Paul describes suffering beyond his strength and says it taught dependence on the God who raises the dead. This does not make Exodus 5 a promise that obedience always immediately worsens life; Pharaoh’s particular resistance creates this crisis. The connection helps name dependence when promised rescue is not yet visible.',
            passages: ['Ex. 5:22–23', '2 Cor. 1:8–10'],
          },
        ],
        whyItMatters:
          'Exodus 5 lets the crisis of trust remain unresolved. Pharaoh rejects the LORD’s rightful word, treats worship as laziness, and uses economic control and violence to intensify Israel’s suffering. The chapter does not teach that obedience always makes life immediately harder; it shows this oppressor resisting God’s command before deliverance becomes visible. Israel’s foremen turn against Moses, and Moses brings his anguish to the LORD. Readers are invited to feel the distance between promise and present experience rather than rush past the lament.',
        connectedPassages: [
          'Ex. 3:18–20',
          'Ex. 7:5',
          'Ps. 10:1–18',
          'Ps. 73:2–17',
          'Ps. 77:1–15',
          'Hab. 1:2–4',
          'Acts 4:23–30',
          '2 Cor. 1:8–10',
        ],
        kidSummary:
          'Moses and Aaron told Pharaoh what God said, but Pharaoh refused to listen and made Israel’s work much harder. The people were hurt and angry, and Moses did not understand why rescue had not started. Moses brought his grief and questions to God.',
        reflectionQuestions: [
          'How does Pharaoh respond to the LORD’s command, and what does he do to Israel’s work?',
          'Why do the foremen blame Moses and Aaron after their appeal to Pharaoh fails?',
          'How do biblical prayers of lament help readers understand Moses’ words to God?',
          'Why is it important to let this chapter’s tension remain before reading God’s answer in Exodus 6?',
        ],
      },
      6: {
        reference: 'Exodus 6',
        summary:
          'The LORD answers Moses by promising that Pharaoh will release and drive Israel out under God’s strong hand. Repeatedly declaring, “I am the LORD,” God connects the coming rescue to His covenant with Abraham, Isaac, and Jacob and to His hearing of Israel’s groaning. In a series of “I will” promises, He pledges to bring Israel out, deliver and redeem the people, take them as His people, be their God, bring them into the promised land, and give it to them. Israel cannot listen because of broken spirit and harsh slavery. Moses renews his objection, and the narrative pauses for a genealogy of Reuben, Simeon, and Levi that locates Moses and Aaron within Israel’s covenant family before returning to their commission.',
        observations: [
          'The LORD answers Moses’ complaint by saying Pharaoh will release Israel because of God’s strong hand.',
          'God repeatedly declares, “I am the LORD,” and identifies Himself as the covenant God of Abraham, Isaac, and Jacob.',
          'God says He has heard Israel’s groaning and remembered His covenant.',
          'God promises, “I will bring you out,” “I will deliver you,” and “I will redeem you” with an outstretched arm and acts of judgment.',
          'God promises, “I will take you to be my people,” “I will be your God,” and Israel will know the LORD who brings them out.',
          'God promises to bring Israel into the land sworn to the patriarchs and give it to them.',
          'Israel does not listen to Moses because of broken spirit and harsh slavery.',
          'Moses again objects that Pharaoh will not listen when Israel has not listened and describes difficulty with his speech.',
          'The genealogy traces Reuben, Simeon, and Levi and identifies Aaron and Moses within Levi’s family.',
          'The chapter returns from the genealogy to the LORD’s commission and Moses’ renewed speech objection.',
        ],
        threads: ['covenant', 'exodus', 'image'],
        lenses: ['Promise → Fulfillment', 'Grace → Authority', 'Identity → Action'],
        scriptureConnections: [
          {
            title: 'The covenant God acts on His promises',
            explanation:
              'God’s “I will” declarations continue the promises of descendants, land, covenant relationship, and deliverance given to the patriarchs. Biblical remembering does not mean God had forgotten; it describes Him acting faithfully in accordance with the covenant He established.',
            passages: ['Ex. 6:2–8', 'Gen. 15:13–21', 'Gen. 17:1–8', 'Gen. 28:13–15'],
          },
          {
            title: 'Redemption leads to belonging and presence',
            explanation:
              'God promises not only to bring Israel out but to take the people as His own and be their God. Leviticus later joins this belonging to God dwelling among Israel, showing that exodus rescue moves toward covenant fellowship and worship rather than mere escape.',
            passages: ['Ex. 6:6–8', 'Lev. 26:11–13'],
          },
          {
            title: 'Covenant renewal and a transformed people',
            explanation:
              'Jeremiah and Ezekiel later promise renewed covenant relationship, cleansed hearts, God’s Spirit, and the declaration that the people belong to God. This pattern develops further from Exodus’s promise, “I will take you to be my people, and I will be your God.”',
            passages: ['Ex. 6:7', 'Jer. 31:31–34', 'Ezek. 36:22–28'],
          },
          {
            title: 'Redemption creates a people for God',
            explanation:
              'The New Testament draws on exodus language when describing Christ giving Himself to redeem and purify a people for His own possession, and when naming believers as God’s people called to proclaim His excellencies. Salvation is deliverance from slavery into belonging, worship, and vocation.',
            passages: ['Ex. 6:6–7', 'Titus 2:11–14', '1 Pet. 2:9–10'],
          },
          {
            title: 'Adoption and covenant belonging',
            explanation:
              'Romans describes those led by God’s Spirit as adopted children who cry to the Father and await the redemption of their bodies. The settings differ, but the connection develops Exodus’s movement from bondage to belonging within the fuller saving work accomplished through Christ.',
            passages: ['Ex. 6:6–7', 'Rom. 8:14–23'],
          },
          {
            title: 'A genealogy grounds the mission in history',
            explanation:
              'The genealogy is not a disposable interruption. It locates Moses and Aaron within Israel’s covenant family, establishes their Levitical identity, and grounds the coming confrontation in real lineage. Its pause slows the narrative before the mission to Pharaoh resumes.',
            passages: ['Ex. 6:14–27', 'Gen. 46:8–11'],
          },
        ],
        whyItMatters:
          'Exodus 6 answers Moses’ lament with God’s name, covenant, and repeated promises rather than with visible deliverance yet. The LORD is the primary actor: He will bring out, deliver, redeem, take, be God to, bring in, and give. Israel’s inability to listen is compassionately connected to broken spirit and cruel bondage, not blamed as simple stubbornness. The genealogy anchors Moses and Aaron within the people God has promised to redeem. The chapter makes redemption relational and purposeful: God frees a people from slavery so they may belong to Him and know Him.',
        connectedPassages: [
          'Gen. 15:13–21',
          'Gen. 17:1–8',
          'Gen. 28:13–15',
          'Lev. 26:11–13',
          'Jer. 31:31–34',
          'Ezek. 36:22–28',
          'Luke 1:68–75',
          'Rom. 8:14–23',
          'Titus 2:11–14',
          '1 Pet. 2:9–10',
        ],
        kidSummary:
          'God reminded Moses that He had not forgotten His people. Again and again God said what He would do: rescue Israel, make them His people, be their God, and bring them to the promised land. The people were so hurt and tired that hope was hard to hear, but God’s promise remained sure.',
        reflectionQuestions: [
          'Which actions does God promise in the repeated “I will” statements?',
          'Why is Israel unable to listen, and how should that shape the way readers view suffering people?',
          'What does the genealogy show about Moses, Aaron, and Israel’s covenant family?',
          'How does the movement from slavery to belonging prepare for the Gospel’s message of redemption?',
        ],
      },
      7: {
        reference: 'Exodus 7',
        summary:
          'The LORD renews Moses and Aaron’s commission: Moses will represent God before Pharaoh, Aaron will speak, and God will multiply signs and judgments so Egypt will know that He is the LORD. Aaron’s staff becomes a serpent before Pharaoh. Egypt’s magicians imitate the sign, but Aaron’s staff swallows their staffs, and Pharaoh’s heart remains hardened. At the Nile, Aaron stretches out the staff and the water becomes blood. Fish die, the river stinks, and Egypt loses ready access to its water, yet the magicians imitate the sign and Pharaoh refuses to listen.',
        observations: [
          'God appoints Moses to represent Him before Pharaoh and Aaron to serve as Moses’ spokesman.',
          'God says Pharaoh will resist while signs and judgments multiply in Egypt.',
          'The stated purpose is that Egypt will know that the LORD is God when He brings Israel out.',
          'Moses and Aaron obey the renewed commission, and the narrator states that they are eighty and eighty-three years old.',
          'Aaron’s staff becomes a serpent before Pharaoh and his servants.',
          'Egypt’s magicians imitate the sign by their secret arts, but Aaron’s staff swallows their staffs.',
          'Pharaoh’s heart remains hardened, and he refuses to listen as the LORD said.',
          'Aaron strikes the Nile, its water turns to blood, its fish die, and the river becomes undrinkable.',
          'The magicians imitate the sign but do not reverse its effects or provide relief.',
          'Pharaoh turns away without taking the sign to heart, while Egyptians dig for water for seven days.',
        ],
        threads: ['reign', 'exodus', 'creation'],
        lenses: ['Grace → Authority', 'Promise → Fulfillment'],
        scriptureConnections: [
          {
            title: 'The LORD’s word confronts Pharaoh’s refusal',
            explanation:
              'Exodus 5 records Pharaoh asking who the LORD is and refusing His command. Exodus 7 answers by announcing signs and judgments through which Egypt will know the LORD. The conflict is not merely Moses against Pharaoh but the rightful rule of God confronting an oppressive king.',
            passages: ['Ex. 5:1–2', 'Ex. 7:1–5'],
          },
          {
            title: 'The Nile judged by the LORD',
            explanation:
              'Psalms 78 and 105 remember the turning of Egypt’s waters to blood as one of God’s signs of deliverance. Ezekiel later addresses Pharaoh’s proud claim over the Nile and announces judgment. These passages clarify the LORD’s authority over a river Egypt depends upon without requiring every plague to be assigned to one specific Egyptian deity.',
            passages: ['Ex. 7:14–25', 'Ps. 78:43–44', 'Ps. 105:26–29', 'Ezek. 29:1–10'],
          },
          {
            title: 'The rejected deliverer is sent with signs',
            explanation:
              'Stephen says God sent the previously rejected Moses as ruler and redeemer and that he performed wonders and signs in Egypt. Moses remains a human servant, but his God-given commission prepares readers for the biblical pattern of deliverance accomplished through a sent mediator.',
            passages: ['Ex. 7:1–10', 'Acts 7:35–36'],
          },
          {
            title: 'Imitation has a limit',
            explanation:
              'Second Timothy names Jannes and Jambres from later Jewish tradition when comparing opponents of truth with those who opposed Moses. Exodus itself does not name the magicians or explain how their signs occurred. Its narrative point is that imitation cannot overturn God’s act: Aaron’s staff swallows theirs, and their power is increasingly exposed as limited.',
            passages: ['Ex. 7:8–13', '2 Tim. 3:8–9'],
          },
          {
            title: 'Waters of blood in later judgment visions',
            explanation:
              'Revelation also depicts waters struck in judgment and uses imagery that recalls the exodus plagues. The visions are not identical retellings, but the echoes portray God judging oppressive powers and vindicating His holy name.',
            passages: ['Ex. 7:17–21', 'Rev. 8:8–9', 'Rev. 16:3–7'],
          },
        ],
        whyItMatters:
          'Exodus 7 begins the public judgments by making their purpose explicit: the LORD will bring Israel out and make Himself known in Egypt. Pharaoh is already resisting before the plagues unfold, and neither signs nor suffering automatically produce repentance. The magicians can imitate some early signs but cannot reverse God’s acts, and their staffs are swallowed. The Nile, a source of Egyptian life and power, becomes a place of judgment under the Creator’s authority. God—not Moses, Aaron, Pharaoh, or the plagues—is the chapter’s primary actor.',
        connectedPassages: [
          'Ex. 4:10–16',
          'Ex. 5:1–2',
          'Ps. 78:43–44',
          'Ps. 105:26–29',
          'Ezek. 29:1–10',
          'Acts 7:35–36',
          '2 Tim. 3:8–9',
          'Rev. 8:8–9',
          'Rev. 16:3–7',
        ],
        kidSummary:
          'God sent Moses and Aaron back to Pharaoh and showed that He is the true Lord. Aaron’s staff swallowed the magicians’ staffs, and God turned the Nile’s water to blood. Even after these signs, Pharaoh still refused to listen.',
        reflectionQuestions: [
          'What purpose does God give for multiplying signs and judgments in Egypt?',
          'What do Aaron’s staff and the magicians’ limited imitation reveal about power?',
          'How do the Psalms remember the judgment of Egypt’s waters?',
          'Why is Pharaoh’s refusal a rejection of the LORD’s rightful rule rather than only a disagreement with Moses?',
        ],
      },
      8: {
        reference: 'Exodus 8',
        summary:
          'When Pharaoh refuses to release Israel for worship, the LORD covers Egypt with frogs. Pharaoh asks Moses to pray, and the frogs die at the appointed time, but Pharaoh hardens his heart when relief comes. Aaron then strikes the dust, and gnats or similar small insects cover people and animals. The magicians cannot reproduce this sign and acknowledge “the finger of God,” yet Pharaoh still will not listen. The LORD sends destructive swarms while setting apart Goshen, where Israel lives. Pharaoh tries to bargain about where Israel may sacrifice, asks again for prayer, and then hardens his heart after the swarms leave.',
        observations: [
          'The LORD again commands Pharaoh to release Israel so the people may serve Him.',
          'Frogs come from the Nile and spread through Egyptian homes, bedrooms, ovens, and kneading bowls.',
          'The magicians also bring up frogs, but Pharaoh asks Moses and Aaron—not the magicians—to pray for their removal.',
          'Moses allows Pharaoh to choose the time of relief so he may know there is no one like the LORD.',
          'When the frogs die and Pharaoh sees relief, he hardens his heart and refuses to listen.',
          'Aaron strikes the dust, and gnats or similar small insects cover people and animals.',
          'The magicians fail to reproduce the sign and say, “This is the finger of God,” but Pharaoh remains hardened.',
          'God distinguishes Goshen from the rest of Egypt when destructive swarms arrive.',
          'Pharaoh offers partial permission and then bargains about how far Israel may travel to worship.',
          'After Moses prays and the swarms leave, Pharaoh hardens his heart again and does not release the people.',
        ],
        threads: ['reign', 'exodus'],
        lenses: ['Truth → Practice', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'The demand to worship remains unchanged',
            explanation:
              'God’s instruction through Moses consistently calls for Israel to leave Egypt and sacrifice in the wilderness. Pharaoh’s bargains attempt to control the terms of worship, but partial permission is not obedience to the LORD’s word.',
            passages: ['Ex. 3:18', 'Ex. 5:1–3', 'Ex. 8:25–28'],
          },
          {
            title: 'The Psalms remember frogs and swarms',
            explanation:
              'Psalms 78 and 105 include frogs and destructive insects among the signs through which God judged Egypt and brought out His people. Their retelling keeps the plagues within the larger story of covenant rescue rather than treating them as disconnected disasters.',
            passages: ['Ex. 8:1–24', 'Ps. 78:45', 'Ps. 105:30–31'],
          },
          {
            title: 'Acknowledging power is not the same as repentance',
            explanation:
              'The magicians admit that the gnats are “the finger of God,” but the text does not say they have come to saving faith, and Pharaoh still resists. In Luke, Jesus uses “the finger of God” when describing God’s kingdom overcoming evil; the shared wording highlights divine power without making the two events identical.',
            passages: ['Ex. 8:16–19', 'Luke 11:20'],
          },
          {
            title: 'Relief does not soften Pharaoh',
            explanation:
              'Romans teaches that God’s kindness is meant to lead to repentance, while a hard and unrepentant heart stores up judgment. Exodus 8 narrates that tragic pattern: Pharaoh repeatedly asks for relief, receives it, and returns to resistance.',
            passages: ['Ex. 8:8–15, 28–32', 'Rom. 2:4–5'],
          },
          {
            title: 'Limited spiritual claims cannot purchase God’s gift',
            explanation:
              'Acts 8 describes Simon recognizing extraordinary divine power while still needing repentance from a corrupt heart. The circumstances differ, but both passages distinguish acknowledgment of power from humble submission to God.',
            passages: ['Ex. 8:18–19', 'Acts 8:9–24'],
          },
        ],
        whyItMatters:
          'Exodus 8 traces a repeated cycle: Pharaoh experiences judgment, requests prayer, receives relief, and then hardens his heart. Evidence and kindness do not mechanically create repentance. The magicians’ failure and admission reveal the limit of their power, while the distinction of Goshen shows the LORD ruling precisely within Egypt rather than acting through uncontrolled disaster. Pharaoh’s bargaining also exposes his refusal to yield authority over Israel’s worship. The LORD alone determines how His redeemed people will serve Him.',
        connectedPassages: [
          'Ex. 3:18',
          'Ex. 5:1–3',
          'Ps. 78:45',
          'Ps. 105:30–31',
          'Luke 11:20',
          'Acts 8:9–24',
          'Rom. 2:4–5',
        ],
        kidSummary:
          'God sent frogs, tiny insects, and swarms in Egypt. Pharaoh kept asking Moses to pray for help, but whenever the trouble stopped, he refused to obey again. God showed that His power was greater and that He could protect the place where Israel lived.',
        reflectionQuestions: [
          'What happens each time Pharaoh receives relief from a plague?',
          'What does the magicians’ statement about “the finger of God” acknowledge, and what does it not prove?',
          'Why does God’s distinction between Goshen and Egypt matter?',
          'How do Pharaoh’s bargains reveal his unwillingness to obey the LORD fully?',
        ],
      },
      9: {
        reference: 'Exodus 9',
        summary:
          'The LORD strikes Egypt’s livestock while distinguishing Israel’s animals, but Pharaoh remains hardened. Boils then break out on people and animals, and even the magicians cannot stand before Moses; at this point the text says the LORD hardens Pharaoh’s heart. Before sending devastating hail, God warns Egypt and explains that Pharaoh’s continued position will display divine power and proclaim God’s name. Some Egyptian servants fear the LORD’s word and shelter people and livestock, while others ignore it. Hail and fire ravage Egypt but spare Goshen. Pharaoh confesses sin and requests prayer, yet after relief he sins again and hardens his heart.',
        observations: [
          'The LORD announces a severe plague on Egyptian livestock if Pharaoh continues to hold Israel.',
          'God distinguishes Israel’s livestock from Egypt’s, and none of Israel’s livestock dies from the plague.',
          'Pharaoh investigates the distinction but remains hardened and refuses to release Israel.',
          'Soot becomes dust that produces boils on people and animals throughout Egypt.',
          'The magicians cannot stand before Moses because they too are covered with boils.',
          'The text says the LORD hardens Pharaoh’s heart after the plague of boils.',
          'Before the hail, God warns Pharaoh and explains that His power and name will be proclaimed through the confrontation.',
          'Some Egyptian officials fear the LORD’s word and bring servants and livestock to shelter; others leave them exposed.',
          'Hail and fire devastate people, animals, crops, and trees in Egypt, while Goshen is spared.',
          'Pharaoh says he has sinned and asks for prayer, but after the storm stops he sins again and hardens his heart.',
        ],
        threads: ['reign', 'covenant', 'creation'],
        lenses: ['Grace → Authority', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'The Psalms remember livestock, hail, and judgment',
            explanation:
              'Psalms 78 and 105 remember the destruction of livestock, crops, and trees as acts through which God judged Egypt and preserved His covenant people. The retellings keep creation’s upheaval connected to the LORD’s saving purpose.',
            passages: ['Ex. 9:1–35', 'Ps. 78:47–50', 'Ps. 105:32–33'],
          },
          {
            title: 'A warning that can be heard',
            explanation:
              'Some Egyptians fear the LORD’s word and shelter their servants and animals, while others ignore it. Proverbs similarly contrasts those who receive wisdom’s warning with those who refuse it. Exodus therefore does not flatten every Egyptian into an identical response.',
            passages: ['Ex. 9:18–21', 'Prov. 1:20–33'],
          },
          {
            title: 'Pharaoh’s position proclaims God’s name',
            explanation:
              'God says Pharaoh has been allowed to remain so divine power may be shown and God’s name proclaimed throughout the earth. Romans cites this verse while discussing God’s sovereign mercy and judgment. Paul’s use is important, but the immediate Exodus context remains the prolonged confrontation with an already resistant oppressor.',
            passages: ['Ex. 9:13–17', 'Rom. 9:14–18'],
          },
          {
            title: 'The one LORD rules creation',
            explanation:
              'Isaiah declares that the LORD alone is God and sovereign over light, darkness, well-being, and calamity. Exodus 9 shows that sovereignty within history as livestock, disease, hail, fire, and geographical distinction all remain under God’s command.',
            passages: ['Ex. 9:1–26', 'Isa. 45:5–7'],
          },
          {
            title: 'Hail in later judgment visions',
            explanation:
              'Revelation uses hail imagery in visions of divine judgment that echo the exodus. These are thematic connections rather than claims that every later storm is the same event.',
            passages: ['Ex. 9:22–26', 'Rev. 8:7', 'Rev. 16:21'],
          },
        ],
        whyItMatters:
          'Exodus 9 intensifies both judgment and moral clarity. Pharaoh has repeatedly resisted, the LORD now also hardens him within that rebellion, and temporary confession still fails to become lasting fear of God. Yet the warning before the hail displays mercy even in judgment: individual Egyptians can heed the word and seek shelter. Pharaoh’s continued rule serves a purpose he cannot defeat—the proclamation of the LORD’s power and name. The chapter holds together divine sovereignty, accountable resistance, precise distinction, warning, and judgment without reducing the hardening theme to an abstract philosophical problem.',
        connectedPassages: [
          'Ps. 78:47–50',
          'Ps. 105:32–33',
          'Prov. 1:20–33',
          'Isa. 45:5–7',
          'Rom. 9:14–18',
          'Rev. 8:7',
          'Rev. 16:21',
        ],
        kidSummary:
          'God warned Egypt before sending terrible hail. Some Egyptians listened to God’s warning and brought people and animals to safety, but Pharaoh still resisted. God showed that He rules creation, protects His people, and keeps His word.',
        reflectionQuestions: [
          'How does the LORD distinguish Israel during the livestock plague and hail?',
          'What different responses do Egyptians make when they hear the warning about hail?',
          'Why does God say Pharaoh’s continued position will serve the proclamation of His name?',
          'What is the difference between Pharaoh’s temporary confession and a lasting fear of the LORD?',
        ],
      },
      10: {
        reference: 'Exodus 10',
        summary:
          'The LORD explains that His signs in Egypt are to be told to future generations so Israel will know that He is the LORD. Moses warns of locusts, and Pharaoh’s own servants urge him to release Israel, but Pharaoh bargains over who may go. Locusts consume everything the hail left. Pharaoh again confesses sin and requests prayer, then the LORD removes the locusts while Pharaoh remains hardened. A thick darkness covers Egypt for three days, but Israel has light. Pharaoh offers another compromise that would keep the livestock, Moses refuses, and Pharaoh threatens Moses with death.',
        observations: [
          'God says His signs will be told to Israel’s children and grandchildren so they may know that He is the LORD.',
          'Moses warns that locusts will cover the land and consume what remains after the hail.',
          'Pharaoh’s servants ask how long Moses will be a snare and urge Pharaoh to release Israel.',
          'Pharaoh tries to restrict the journey to Israel’s men, while Moses insists that young and old, sons and daughters, and flocks and herds must go.',
          'Locusts cover Egypt and consume the plants and fruit left by the hail.',
          'Pharaoh hastily confesses sin, asks forgiveness, and requests prayer for relief.',
          'The LORD removes the locusts, but Pharaoh remains hardened and does not release Israel.',
          'A thick darkness covers Egypt for three days, while Israelites have light where they live.',
          'Pharaoh offers to release the people while retaining their livestock.',
          'Moses refuses the compromise, Pharaoh remains hardened, and Pharaoh threatens Moses with death.',
        ],
        threads: ['covenant', 'reign', 'exodus'],
        lenses: ['Identity → Action', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'Redemption must be taught to future generations',
            explanation:
              'Deuteronomy instructs parents to explain God’s commands by recounting the exodus, and Psalm 78 calls each generation to teach God’s works to the next. Exodus 10 establishes that pattern before Israel even leaves: the signs form communal memory so God’s people will know the LORD.',
            passages: ['Ex. 10:1–2', 'Deut. 6:20–25', 'Ps. 78:5–7'],
          },
          {
            title: 'Locusts consume what remains',
            explanation:
              'Psalm 105 remembers the locusts consuming Egypt’s produce. Joel later uses locust devastation to summon God’s people to lament and return to the LORD. The passages share imagery of creation stripped bare, though their historical settings are distinct.',
            passages: ['Ex. 10:12–15', 'Ps. 105:34–35', 'Joel 1:1–2:17'],
          },
          {
            title: 'Darkness as a sign of judgment',
            explanation:
              'Amos describes the day of the LORD as darkness, and darkness falls during Jesus’ crucifixion. These later passages thematically echo judgment and divine action, but they should not be treated as identical scenes or explained by Exodus alone.',
            passages: ['Ex. 10:21–23', 'Amos 5:18–20', 'Matt. 27:45'],
          },
          {
            title: 'Delivered from the domain of darkness',
            explanation:
              'Colossians describes salvation as God rescuing people from the domain of darkness and transferring them into the kingdom of His beloved Son. Exodus’s distinction between Egypt’s darkness and Israel’s light contributes to the larger biblical imagery of rescue from oppressive dominion.',
            passages: ['Ex. 10:21–23', 'Col. 1:13–14'],
          },
          {
            title: 'Darkness in later judgment visions',
            explanation:
              'Revelation includes locust and darkness imagery in judgments upon rebellious powers. The echoes show the exodus becoming a pattern for later divine judgment without making every detail correspond one-to-one.',
            passages: ['Ex. 10:12–23', 'Rev. 9:1–11', 'Rev. 16:10–11'],
          },
        ],
        whyItMatters:
          'Exodus 10 shows that the signs are not only for Pharaoh or Egypt; they form Israel’s identity across generations. Children are to hear what the LORD did and know Him. Pharaoh’s servants recognize Egypt’s ruin, yet Pharaoh continues bargaining, trying to retain control over who worships and what belongs to God. Locusts and darkness expose the futility of partial obedience and the LORD’s authority over creation. Israel’s coming freedom includes households, possessions, memory, worship, and allegiance—not merely a reduced workload under Pharaoh.',
        connectedPassages: [
          'Deut. 6:20–25',
          'Ps. 78:5–7',
          'Ps. 105:34–35',
          'Joel 1:1–2:17',
          'Amos 5:18–20',
          'Matt. 27:45',
          'Col. 1:13–14',
          'Rev. 9:1–11',
          'Rev. 16:10–11',
        ],
        kidSummary:
          'God sent locusts and darkness, but Pharaoh kept trying to bargain instead of obeying. God wanted Israel’s children and grandchildren to hear what He had done and know that He is the LORD. God’s rescue would include the whole people and everything needed to worship Him.',
        reflectionQuestions: [
          'Why does God say the signs must be told to children and grandchildren?',
          'What compromises does Pharaoh offer, and why does Moses refuse them?',
          'How do later Scriptures use locust and darkness imagery without making every event identical?',
          'What does this chapter reveal about the difference between partial permission and obedience?',
        ],
      },
      11: {
        reference: 'Exodus 11',
        summary:
          'The LORD announces one final plague, after which Pharaoh will drive Israel out completely. Israelites are to ask their Egyptian neighbors for silver and gold; the LORD gives them favor, and Moses is highly regarded in Egypt. Moses solemnly warns that at midnight every Egyptian firstborn will die, from Pharaoh’s household to the lowest social position, along with the firstborn of livestock. A great cry will fill Egypt, but the LORD will distinguish Israel. Pharaoh’s servants will bow and urge Israel to leave, yet Pharaoh continues refusing before the judgment falls.',
        observations: [
          'God announces one more plague and says Pharaoh will then drive Israel out completely.',
          'Israelites are instructed to ask Egyptian neighbors for silver and gold.',
          'The LORD gives Israel favor with the Egyptians, and Moses is highly regarded by Pharaoh’s servants and the people.',
          'Moses announces that the LORD will go through Egypt about midnight.',
          'Every Egyptian firstborn is threatened, from Pharaoh’s firstborn to the firstborn of a servant, along with firstborn livestock.',
          'A great cry will rise throughout Egypt unlike any before or after it.',
          'No threat will touch Israel in the same way, demonstrating that the LORD distinguishes Egypt from Israel.',
          'Moses says Pharaoh’s servants will bow and urge the Israelites to leave.',
          'Moses leaves Pharaoh in hot anger after announcing the warning.',
          'The chapter closes by recalling that Pharaoh will not listen and that the LORD’s wonders will be multiplied.',
        ],
        threads: ['reign', 'covenant', 'image'],
        lenses: ['Promise → Fulfillment', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'The warning concerning the firstborn',
            explanation:
              'God had already called Israel His firstborn son and warned Pharaoh of judgment upon Egypt’s firstborn if Pharaoh refused release. Exodus 11 announces that solemn consequence after repeated refusals and warnings.',
            passages: ['Ex. 4:22–23', 'Ex. 11:1–8'],
          },
          {
            title: 'The promise of departure with possessions',
            explanation:
              'God told Abraham that his descendants would be oppressed and afterward come out with great possessions. Exodus observes that Egyptians willingly grant silver and gold after prolonged oppression and divine judgment. Compensation, reversal, and fulfillment help interpret the event; the basic action is not theft.',
            passages: ['Ex. 11:2–3', 'Gen. 15:13–14'],
          },
          {
            title: 'The Psalms remember judgment and departure',
            explanation:
              'Psalm 105 places the death of Egypt’s firstborn beside Israel’s departure with silver and gold and Egypt’s relief at their leaving. The retelling holds sober judgment and covenant deliverance within the same movement.',
            passages: ['Ex. 11:1–8', 'Ps. 105:36–38'],
          },
          {
            title: 'Faith heeds the Passover warning',
            explanation:
              'Hebrews says Moses kept the Passover and sprinkled the blood so the destroyer would not touch Israel’s firstborn. Exodus 11 supplies the grave warning immediately before chapter 12 reveals God’s appointed means of protection.',
            passages: ['Ex. 11:4–8', 'Heb. 11:28'],
          },
        ],
        whyItMatters:
          'Exodus 11 must be read slowly and soberly. The final plague is corporate judgment upon Pharaoh’s oppressive kingdom after Egypt’s enslavement of Israel, Pharaoh’s earlier command against Hebrew sons, repeated divine warnings, and persistent refusal. The text does not imply that every Egyptian individual bears identical personal guilt, yet the whole society lives under Pharaoh’s rule and the consequences of his rebellion. God distinguishes Israel, not because Israel has earned moral superiority, but because He will provide the Passover protection described next. Mercy and judgment meet in God’s covenant faithfulness and appointed provision.',
        connectedPassages: [
          'Gen. 15:13–14',
          'Ex. 4:22–23',
          'Ps. 105:36–38',
          'Heb. 11:28',
        ],
        kidSummary:
          'God warned that one final and terrible judgment was coming because Pharaoh still would not release Israel. God had warned Pharaoh many times and would make a difference between Egypt and His people. The next chapter explains the protection God provided.',
        reflectionQuestions: [
          'What final judgment does Moses announce, and how does the chapter describe its seriousness?',
          'What earlier oppression, command, and warnings form the background to this judgment?',
          'How does Genesis 15 help explain Israel’s departure with Egyptian goods?',
          'Why should Exodus 11 be read together with God’s Passover provision in Exodus 12?',
        ],
      },
      12: {
        reference: 'Exodus 12',
        summary:
          'The LORD reshapes Israel’s calendar around redemption and commands each household to select an unblemished lamb. The lamb is killed, its blood placed on the doorposts and lintel, and its meat eaten with unleavened bread and bitter herbs in readiness to leave. God will pass through Egypt in judgment but pass over houses marked by the blood according to His promise. Passover and Unleavened Bread are established as memorials to teach future children. At midnight Egypt’s firstborn die, Pharaoh orders Israel out, and the Egyptians urgently give silver, gold, and clothing. Israel departs with a mixed multitude after 430 years, and the chapter closes with further Passover instructions.',
        observations: [
          'God makes the month of Passover the beginning of Israel’s year, reshaping the calendar around redemption.',
          'Each household selects a year-old male lamb without blemish and shares with a neighboring household if needed.',
          'The lamb is killed at twilight, and its blood is placed on the two doorposts and lintel of the house.',
          'The household eats the lamb with unleavened bread and bitter herbs, dressed and ready to depart.',
          'The LORD passes through Egypt in judgment and passes over houses marked by the blood.',
          'The blood is the sign God appoints; it is not magical, and protection rests on His promise and provision.',
          'Passover and the Feast of Unleavened Bread are established as lasting memorials, with parents commanded to explain their meaning to children.',
          'At midnight Egypt’s firstborn die, a great cry rises, and Pharaoh commands Israel to leave and serve the LORD.',
          'The Egyptians willingly give Israel silver, gold, and clothing, and Israel leaves quickly with unleavened dough.',
          'A mixed multitude leaves with Israel, though the text does not explain every person’s identity or motive.',
          'The chapter marks the end of 430 years and describes the departure as a night of watching kept to the LORD.',
          'Further instructions regulate participation in Passover and emphasize one law for the native and the sojourner who joins the covenant community.',
        ],
        threads: ['priesthood', 'exodus', 'covenant'],
        lenses: ['Shadow → Reality', 'Rescue → Mission', 'Promise → Fulfillment'],
        scriptureConnections: [
          {
            title: 'God fulfills the promised time of deliverance',
            explanation:
              'God told Abraham that his descendants would be oppressed in a foreign land and afterward come out with possessions. Exodus 12 records their departure after the stated period, locating Passover within the fulfillment of covenant promise.',
            passages: ['Ex. 12:35–41', 'Gen. 15:13–14'],
          },
          {
            title: 'Passover explained from Exodus itself',
            explanation:
              'A lamb without blemish is killed, its blood marks the household, judgment passes over that house, and Israel is commanded to remember. The blood does not work as magic; it marks the place where God’s appointed sacrifice has been received in trust, and protection rests upon the LORD’s word.',
            passages: ['Ex. 12:1–28', 'Heb. 11:28'],
          },
          {
            title: 'Passover remembered in Israel’s worship',
            explanation:
              'Leviticus and Deuteronomy place Passover and Unleavened Bread within Israel’s calendar and call the people to remember the night God brought them out. Redemption becomes a repeated communal practice of worship and instruction.',
            passages: ['Ex. 12:14–27', 'Lev. 23:4–8', 'Deut. 16:1–8'],
          },
          {
            title: 'Jesus shares Passover and gives the meal new focus',
            explanation:
              'The Gospel accounts place Jesus’ final meal with His disciples in the Passover setting. Jesus identifies the bread and cup with His body and covenant blood, and Paul says the church proclaims the Lord’s death through this meal. The Lord’s Supper remembers the greater redemption accomplished by Christ.',
            passages: ['Ex. 12:1–28', 'Matt. 26:17–29', 'Mark 14:12–25', 'Luke 22:7–20', '1 Cor. 11:23–26'],
          },
          {
            title: 'Christ our Passover',
            explanation:
              'The New Testament explicitly identifies Christ as “our Passover” and calls Jesus the Lamb of God. Passover establishes a pattern of deliverance through a God-provided substitute; Jesus fulfills and surpasses that pattern through His death. The explicit connections govern the interpretation without turning every ritual detail into an independent prediction.',
            passages: ['Ex. 12:3–13', 'John 1:29', 'John 19:31–36', '1 Cor. 5:7–8', '1 Pet. 1:18–19'],
          },
          {
            title: 'The slain Lamb forms a redeemed people',
            explanation:
              'Revelation praises the Lamb who was slain and purchased a people for God from every nation. The vision develops Passover’s movement from protected households and release from slavery toward the worldwide people redeemed through Christ.',
            passages: ['Ex. 12:21–32', 'Rev. 5:6–10'],
          },
        ],
        whyItMatters:
          'Exodus 12 places God’s appointed provision at the center of deliverance. Israel is not protected by moral superiority but by receiving the sign God gives: an unblemished lamb is killed, blood marks the household, and judgment passes over according to the LORD’s promise. Redemption reshapes time, meals, households, memory, teaching, and belonging. The firstborn judgment remains grievous and solemn, yet Pharaoh’s oppressive rule finally releases its captives. The New Testament explicitly identifies Christ as our Passover and the Lamb of God, showing Jesus as the greater substitute whose blood secures a greater redemption.',
        connectedPassages: [
          'Gen. 15:13–14',
          'Lev. 23:4–8',
          'Deut. 16:1–8',
          'Matt. 26:17–29',
          'Luke 22:7–20',
          'John 1:29',
          'John 19:31–36',
          '1 Cor. 5:7–8',
          '1 Cor. 11:23–26',
          'Heb. 11:28',
          '1 Pet. 1:18–19',
          'Rev. 5:6–10',
        ],
        kidSummary:
          'God gave Israel the Passover lamb and told each family to mark its home with the blood. God kept His promise and protected those homes when judgment came. Then Pharaoh told Israel to leave, and God brought His people out of slavery. Much later, the Bible calls Jesus our Passover Lamb.',
        reflectionQuestions: [
          'What instructions does God give for the lamb, blood, meal, and readiness to leave?',
          'What does it mean that the LORD passes over a house marked by the blood?',
          'How do the New Testament’s explicit Passover connections explain Jesus’ death?',
          'How does redemption reshape Israel’s calendar, household life, worship, and teaching?',
        ],
      },
      13: {
        reference: 'Exodus 13',
        summary:
          'The LORD commands that every firstborn be consecrated to Him because He spared Israel’s firstborn and brought the people out of slavery. Moses instructs Israel to keep the Feast of Unleavened Bread and teach children what God did, allowing redemption to shape memory, thought, action, and household identity. Firstborn animals and sons are redeemed according to God’s instruction. God then leads Israel away from the shorter Philistine road because He knows they might turn back when facing war. Moses carries Joseph’s bones, fulfilling Joseph’s ancient request, while the LORD continuously leads by a pillar of cloud by day and fire by night.',
        observations: [
          'The LORD claims every firstborn among Israel’s people and animals as consecrated to Him.',
          'The firstborn belong to the LORD because He spared Israel’s firstborn during Passover and brought the people out of Egypt.',
          'Israel must keep the Feast of Unleavened Bread at its appointed time.',
          'Parents are commanded to explain that the observance is because of what the LORD did in bringing Israel out.',
          'The sign on hand and reminder between the eyes show that redemption is to shape action, thought, memory, and instruction.',
          'Firstborn donkeys must be redeemed or have their necks broken, and every firstborn son must be redeemed.',
          'God does not lead Israel by the shorter Philistine road because He knows they may turn back when they see war.',
          'Israel leaves Egypt equipped for the journey and travels toward the wilderness and sea.',
          'Moses carries Joseph’s bones in fulfillment of Joseph’s oath and hope that God would visit Israel.',
          'The LORD leads continuously with a pillar of cloud by day and a pillar of fire by night.',
        ],
        threads: ['covenant', 'image', 'temple'],
        lenses: ['Identity → Action', 'Presence → Transformation', 'Promise → Fulfillment'],
        scriptureConnections: [
          {
            title: 'The firstborn belong to the LORD',
            explanation:
              'God had named Israel His firstborn son before Passover. After sparing Israel’s firstborn, He commands their consecration and redemption. Belonging follows rescue: those preserved by God’s provision are claimed for His service and worship.',
            passages: ['Ex. 4:22–23', 'Ex. 12:24–27', 'Ex. 13:1–16'],
          },
          {
            title: 'Redemption shapes thought, action, and teaching',
            explanation:
              'Deuteronomy likewise describes God’s word bound on hand and placed between the eyes while parents diligently teach their children. The language is not decorative; it presents covenant truth as governing what the people think, do, remember, and pass on.',
            passages: ['Ex. 13:8–16', 'Deut. 6:4–9'],
          },
          {
            title: 'Joseph’s faith reaches fulfillment',
            explanation:
              'Joseph died trusting that God would visit Israel and required his bones to be carried from Egypt. Moses now carries them, Hebrews praises Joseph’s faith, and Joshua later records their burial in the promised land. This thread links departure with God’s long covenant faithfulness.',
            passages: ['Ex. 13:19', 'Gen. 50:24–26', 'Josh. 24:32', 'Heb. 11:22'],
          },
          {
            title: 'The firstborn Son presented to the LORD',
            explanation:
              'Luke records Mary and Joseph presenting Jesus in accordance with the law concerning the firstborn. The passage shows Jesus entering Israel’s covenant life and fulfilling its obligations without making every consecration detail a separate prediction.',
            passages: ['Ex. 13:1–2, 11–16', 'Luke 2:22–24'],
          },
          {
            title: 'A rescued people led by God’s presence',
            explanation:
              'First Peter describes believers as a people for God’s possession called out of darkness to proclaim His excellencies. Exodus 13 provides an earlier pattern: the LORD claims, teaches, and personally leads the people He has brought out.',
            passages: ['Ex. 13:17–22', '1 Pet. 2:9–10'],
          },
        ],
        whyItMatters:
          'Exodus 13 refuses to let rescue become a fading memory. Passover redemption reshapes Israel’s calendar, family instruction, thought, action, and relationship to every firstborn. God’s chosen route is not inefficient; the text says He knows the people’s weakness and leads accordingly. Joseph’s bones testify that a promise trusted for generations is now being fulfilled. Above all, the pillar shows that the redeemed people do not travel alone: the God who brought them out guides and protects them by His continuing presence.',
        connectedPassages: [
          'Gen. 50:24–26',
          'Ex. 4:22–23',
          'Ex. 12:24–27',
          'Deut. 6:4–9',
          'Josh. 24:32',
          'Luke 2:22–24',
          'Heb. 11:22',
          '1 Pet. 2:9–10',
        ],
        kidSummary:
          'God taught Israel to remember that He had rescued them and spared their firstborn children. Parents were to tell their children what God had done. God chose the right road for His people and led them every day and night with cloud and fire.',
        reflectionQuestions: [
          'Why are Israel’s firstborn consecrated or redeemed after Passover?',
          'How is the exodus meant to shape Israel’s memory, actions, and teaching?',
          'What do Joseph’s bones reveal about promise and fulfillment?',
          'Why do God’s chosen route and the pillar of cloud and fire show wise, caring leadership?',
        ],
      },
      14: {
        reference: 'Exodus 14',
        summary:
          'God directs Israel to camp near the sea, and Pharaoh interprets their position as weakness. Regretting the loss of Israel’s labor, he pursues with chariots. Trapped and afraid, Israel accuses Moses, but Moses calls the people to fear not, stand firm, and see the LORD’s salvation because the LORD will fight for them. God commands Israel forward, moves the angel and pillar between the camps, and divides the waters. Israel crosses on dry ground; Egypt pursues, but God throws its forces into confusion and the returning waters cover them. Israel sees God’s great power, fears the LORD, and believes Him and His servant Moses.',
        observations: [
          'God directs Israel’s camping place and says Pharaoh will pursue, providing another occasion for God’s glory and Egypt’s knowledge of the LORD.',
          'Pharaoh and his servants regret releasing Israel and pursue with chariots and military forces.',
          'When Israel sees Egypt approaching, the people fear greatly, cry out, and accuse Moses of bringing them into the wilderness to die.',
          'Moses tells Israel not to fear, to stand firm, and to see the LORD’s salvation because the LORD will fight for them.',
          'God commands Moses to lift his staff and Israel to move forward.',
          'The angel of God and pillar move behind Israel, separating the Egyptian and Israelite camps.',
          'The LORD drives the sea back, divides the waters, and makes dry ground for Israel’s crossing.',
          'Egypt’s forces pursue into the sea, but the LORD throws them into confusion and impedes their chariots.',
          'The Egyptians recognize that the LORD is fighting for Israel.',
          'The waters return over Pharaoh’s forces while Israel remains safe on dry ground.',
          'Israel sees the LORD’s great power, fears Him, and believes the LORD and Moses His servant.',
        ],
        threads: ['exodus', 'reign', 'creation'],
        lenses: ['Rescue → Mission', 'Grace → Authority', 'Presence → Transformation'],
        scriptureConnections: [
          {
            title: 'The LORD fights for a trapped people',
            explanation:
              'Psalms 66, 77, and 106 remember God making a dry path through the waters and rescuing Israel despite its fear and rebellion. Israel’s faith does not cause the sea to divide; God acts first, fights for the people, and brings them through.',
            passages: ['Ex. 14:10–31', 'Ps. 66:5–6', 'Ps. 77:16–20', 'Ps. 106:7–12'],
          },
          {
            title: 'The nations hear of the sea crossing',
            explanation:
              'Rahab tells Israel’s spies that Jericho has heard how the LORD dried the sea and that fear has fallen upon the land. The exodus makes God’s name known beyond Israel and demonstrates His authority over oppressive power.',
            passages: ['Ex. 14:21–31', 'Josh. 2:9–11'],
          },
          {
            title: 'A new way through the waters',
            explanation:
              'Isaiah recalls the LORD making a way through the sea and then promises a new work of deliverance. This event establishes exodus imagery as a pattern later Scripture uses for God’s fresh acts of redemption without erasing the historical crossing.',
            passages: ['Ex. 14:21–31', 'Isa. 43:16–19', 'Isa. 51:9–11'],
          },
          {
            title: 'A baptismal pattern under cloud and through sea',
            explanation:
              'Paul interprets Israel’s passage under the cloud and through the sea as a baptismal pattern connected to Moses. He does not claim the exodus and Christian baptism are identical in every respect; he uses Israel’s experience to warn a baptized community that rescue should be followed by faithful allegiance.',
            passages: ['Ex. 14:19–31', '1 Cor. 10:1–12'],
          },
          {
            title: 'Faith crosses where God provides the way',
            explanation:
              'Hebrews says Israel crossed the sea by faith while the Egyptians were drowned when they attempted it. The contrast rests on God’s saving provision and promise, not on faith as a force that created the path.',
            passages: ['Ex. 14:21–31', 'Heb. 11:29'],
          },
          {
            title: 'The song beside the sea',
            explanation:
              'Revelation pictures victorious worshipers beside a sea singing the song of Moses and the Lamb. The vision draws together the historical exodus and Christ’s final victory over evil, preparing for the song Israel sings in Exodus 15.',
            passages: ['Ex. 14:29–31', 'Rev. 15:2–4'],
          },
        ],
        whyItMatters:
          'Exodus 14 presents salvation and judgment in one event. Israel is trapped, afraid, and unable to defeat the army; the LORD fights, divides the waters, leads His people through, and judges the enslaving power pursuing them. Israel does not earn the path or make it open through strong faith. Divine grace acts first, and faith responds to the rescue seen. Later Scripture repeatedly returns to this crossing as a pattern for new deliverance, baptismal identity, and final victory, while keeping God—not the sea, Moses, or Israel—the Deliverer.',
        connectedPassages: [
          'Josh. 2:9–11',
          'Ps. 66:5–6',
          'Ps. 77:16–20',
          'Ps. 78:13',
          'Ps. 106:7–12',
          'Isa. 43:16–19',
          'Isa. 51:9–11',
          '1 Cor. 10:1–12',
          'Heb. 11:29',
          'Rev. 15:2–4',
        ],
        kidSummary:
          'Israel was trapped and afraid when Pharaoh’s army chased them. God told them to move forward, opened a dry path through the sea, and protected them while the army was defeated. The LORD fought for His people and brought them safely out.',
        reflectionQuestions: [
          'What fears and accusations does Israel express when Pharaoh’s army approaches?',
          'Which actions in the chapter show that the LORD—not Israel’s strength—is the Deliverer?',
          'How does Paul use the cloud and sea as a baptismal pattern in 1 Corinthians 10?',
          'Why does the same crossing mean salvation for Israel and judgment for Egypt’s pursuing forces?',
        ],
      },
      15: {
        reference: 'Exodus 15',
        summary:
          'Moses and Israel sing to the LORD, praising Him as strength, song, salvation, warrior, and unrivaled in holiness. The song looks back to Pharaoh’s defeat in the sea and forward to nations trembling as God brings His redeemed people to His dwelling place, where He will reign forever. Miriam the prophetess leads the women with tambourines and dancing. Israel then travels three days into the wilderness without water. At Marah the water is bitter, the people grumble, and Moses cries to the LORD. God makes the water drinkable, gives instruction, and tests the people before leading them to Elim’s abundant water and palm trees.',
        observations: [
          'Moses and Israel sing to the LORD because He has triumphed and thrown horse and rider into the sea.',
          'The LORD is praised as Israel’s strength, song, and salvation.',
          'The song describes the LORD as a warrior and recounts the defeat of Pharaoh’s forces.',
          'God is praised as majestic in power, unrivaled in holiness, awesome in glory, and doing wonders.',
          'The song says God leads the people He has redeemed in steadfast love.',
          'The nations hear and tremble as the song looks forward to God bringing Israel to His dwelling place.',
          'The song closes with the declaration that the LORD will reign forever and ever.',
          'Miriam is called a prophetess and leads the women with tambourines, dancing, and a repeated song of praise.',
          'After three days without water, Israel finds bitter water at Marah and grumbles against Moses.',
          'Moses cries to the LORD, and God shows him what to use so the water becomes drinkable.',
          'God gives instruction and tests Israel, calling the people to listen and trust Him as their healer.',
          'Israel arrives at Elim, where there are twelve springs of water and seventy palm trees.',
        ],
        threads: ['reign', 'temple', 'exodus'],
        lenses: ['Presence → Transformation', 'Truth → Practice', 'Rescue → Mission'],
        scriptureConnections: [
          {
            title: 'Songs of deliverance answer God’s saving acts',
            explanation:
              'Deborah’s song and Hannah’s prayer likewise praise the LORD for overturning oppressive power and rescuing His people. The songs arise from distinct events, but together show worship interpreting history through God’s reign and faithfulness.',
            passages: ['Ex. 15:1–21', 'Judg. 5:1–31', '1 Sam. 2:1–10'],
          },
          {
            title: 'The LORD is strength, song, and salvation',
            explanation:
              'Psalm 118 and Isaiah 12 repeat the confession that the LORD is strength and song and has become salvation. This wording carries the sea song’s praise into later worship and hope.',
            passages: ['Ex. 15:2', 'Ps. 118:14', 'Isa. 12:2'],
          },
          {
            title: 'God rules the waters and defeats chaos',
            explanation:
              'Psalms 74 and 89 celebrate God’s kingship over the sea and His defeat of hostile power. Their poetic imagery develops the exodus confession that no rival power or threatening water stands outside the LORD’s rule.',
            passages: ['Ex. 15:4–12', 'Ps. 74:12–15', 'Ps. 89:8–10'],
          },
          {
            title: 'Rescue moves toward God’s dwelling',
            explanation:
              'The song looks forward from Egypt’s defeat to God planting His people at His sanctuary. Exodus rescue therefore aims beyond escape: God forms a worshiping people and leads them toward His dwelling and reign.',
            passages: ['Ex. 15:13–18', 'Ex. 25:8', 'Ex. 40:34–38'],
          },
          {
            title: 'The song of Moses and the Lamb',
            explanation:
              'Revelation portrays worshipers singing the song of Moses and the Lamb, praising God’s just deeds and universal kingship. The New Testament vision joins exodus victory with the greater victory accomplished by the Lamb without treating the two deliverances as identical in every detail.',
            passages: ['Ex. 15:1–18', 'Rev. 15:2–4'],
          },
          {
            title: 'Worship is followed by wilderness testing',
            explanation:
              'The chapter intentionally moves from triumphant song to thirst at Marah. The bitter water does not prove Israel learned nothing at the sea; it exposes the continuing question of whether a rescued people will trust the God who saved them as He forms them in the wilderness.',
            passages: ['Ex. 15:22–27', 'Ex. 16:1–4'],
          },
        ],
        whyItMatters:
          'Exodus 15 gives Israel a worshiping identity shaped by redemption. The song looks backward to the LORD’s victory at the sea and forward to His dwelling, worldwide renown, and eternal reign. Miriam’s leadership brings the women into the congregation’s praise. Yet redemption is followed immediately by formation: thirst at Marah reveals that rescued people must continue learning trust. Moses cries to the LORD, God provides and instructs, and Elim shows abundant care beyond the bitter water. The chapter holds together salvation celebrated and faith still developing.',
        connectedPassages: [
          'Judg. 5:1–31',
          '1 Sam. 2:1–10',
          'Ps. 74:12–15',
          'Ps. 89:8–10',
          'Ps. 118:14',
          'Isa. 12:2',
          'Isa. 25:1–5',
          'Rev. 15:2–4',
        ],
        kidSummary:
          'Israel sang because the LORD had rescued them and defeated the army chasing them. Miriam led the women in worship too. Soon the people found bitter water and had to learn to trust God again. God heard Moses, made the water drinkable, and led them to a place with plenty of water.',
        reflectionQuestions: [
          'Which names, actions, and qualities of the LORD does Israel praise in the song?',
          'How does the song look backward to the sea and forward to God’s dwelling and reign?',
          'What role does Miriam have in Israel’s worship?',
          'Why does the move from singing to Marah matter for understanding rescue followed by formation?',
        ],
      },
      16: {
        reference: 'Exodus 16',
        summary:
          'One month after leaving Egypt, Israel enters the wilderness of Sin and grumbles over food, remembering Egypt selectively. The LORD promises bread from heaven as both provision and a test of whether the people will follow His instruction. Quail arrive in the evening, and in the morning a fine substance appears with the dew. Israel asks, “What is it?”—a question connected with the name manna. Each household gathers what it needs; hoarded manna spoils, while a double portion kept for the Sabbath remains good. Some still go out to gather on the seventh day. God commands that a jar of manna be preserved as a testimony, and Israel eats manna for forty years.',
        observations: [
          'Israel enters the wilderness of Sin on the fifteenth day of the second month after leaving Egypt.',
          'The congregation grumbles against Moses and Aaron and remembers Egyptian food while overlooking the slavery from which God rescued them.',
          'The LORD promises bread from heaven and says the daily gathering will test whether Israel follows His instruction.',
          'God hears the grumbling and provides quail in the evening and manna with the morning dew.',
          'The name manna is connected to Israel’s question, “What is it?” when the people first see the food.',
          'Each household gathers according to need, and no one has too much or too little.',
          'Manna kept overnight against God’s instruction breeds worms and stinks.',
          'A double portion is gathered on the sixth day and remains good for the seventh-day Sabbath.',
          'No manna appears on the Sabbath, yet some people still go out to gather.',
          'A portion is preserved in a jar before the LORD so future generations may see the bread God provided.',
          'The manna is described as like coriander seed, white, and tasting like wafers made with honey.',
          'Israel eats manna for forty years until reaching the border of the inhabited land.',
        ],
        threads: ['exodus', 'covenant', 'creation'],
        lenses: ['Grace → Authority', 'Truth → Practice', 'Presence → Transformation'],
        scriptureConnections: [
          {
            title: 'Hunger teaches dependence on God’s word',
            explanation:
              'Deuteronomy interprets the manna years as God humbling, testing, and feeding Israel so the people would learn that life depends on every word from the LORD. Jesus quotes this passage when resisting temptation, trusting the Father rather than grasping for bread outside His will.',
            passages: ['Ex. 16:4–5, 13–30', 'Deut. 8:2–3', 'Matt. 4:1–4'],
          },
          {
            title: 'Bread given day by day',
            explanation:
              'Jesus teaches His disciples to ask for daily bread. The circumstances are different, but the prayer resembles the manna rhythm: receiving what is needed from the Father rather than imagining that anxious accumulation creates security.',
            passages: ['Ex. 16:16–21', 'Matt. 6:9–13'],
          },
          {
            title: 'The Psalms remember wilderness provision',
            explanation:
              'Psalms 78 and 105 remember God providing quail and “bread from heaven” despite Israel’s testing and desire. Their retelling keeps generosity and human distrust together without turning suffering people into objects of contempt.',
            passages: ['Ex. 16:2–15', 'Ps. 78:18–25', 'Ps. 105:40'],
          },
          {
            title: 'Jesus, the true bread from heaven',
            explanation:
              'Observation: God gives manna, Israel gathers it daily, and the food sustains physical life in the wilderness. Jesus later calls Himself the true bread from heaven who gives life to the world. Interpretation: manna trains dependence on God’s provision and word, while Jesus fulfills the deeper need to which wilderness bread points. Manna itself does not save Israel from sin.',
            passages: ['Ex. 16:4–15', 'John 6:30–35, 48–51'],
          },
          {
            title: 'Provision does not remove the need for faith',
            explanation:
              'Paul reminds the Corinthian church that Israel shared extraordinary wilderness provisions, yet many still failed to trust God. Receiving gifts is not identical with persevering faith; grace calls for a responsive life.',
            passages: ['Ex. 16:1–36', '1 Cor. 10:1–5'],
          },
          {
            title: 'Manna preserved for remembrance',
            explanation:
              'The jar of manna shows that Israel is meant to remember God’s provision after the wilderness need has passed. Revelation’s promise of hidden manna draws upon this remembered gift while pointing to Christ’s final provision for those who overcome.',
            passages: ['Ex. 16:32–36', 'Rev. 2:17'],
          },
        ],
        whyItMatters:
          'Exodus 16 begins forming the people God has rescued. The LORD responds to fearful grumbling with generous provision and clear instruction. Daily gathering resists both despair and hoarding, while Sabbath requires trust that God’s gift is sufficient even when ordinary labor stops. Manna is therefore provision and testing: Israel learns to receive life on God’s terms. The preserved jar turns a temporary meal into testimony for later generations, and the New Testament uses the manna story to direct attention toward Jesus, the true bread from heaven.',
        connectedPassages: [
          'Deut. 8:2–3',
          'Neh. 9:15',
          'Ps. 78:18–25',
          'Ps. 105:40',
          'Matt. 4:1–4',
          'Matt. 6:9–13',
          'John 6:30–35',
          '1 Cor. 10:1–5',
          'Rev. 2:17',
        ],
        kidSummary:
          'Israel was hungry and afraid, but God gave them quail and bread called manna. They gathered what they needed each day and rested on the Sabbath. God was teaching His people to trust His word and remember that He would provide for them.',
        reflectionQuestions: [
          'What does God provide, and what instructions govern the gathering of manna?',
          'How do hoarding and Sabbath gathering reveal Israel’s struggle to trust?',
          'Why is a jar of manna preserved for future generations?',
          'How does Jesus’ teaching about the true bread from heaven develop this story?',
        ],
      },
      17: {
        reference: 'Exodus 17',
        summary:
          'At Rephidim Israel has no water and quarrels with Moses, asking whether the LORD is among them. Moses cries to God, who tells him to strike a rock at Horeb before Israel’s elders. Water comes from the rock, and the place is named Massah and Meribah because Israel tested the LORD and quarreled. Amalek then attacks. Joshua leads Israel’s fighters while Moses stands with God’s staff. Israel prevails while Moses’ hands are raised, but his hands grow weary, so Aaron and Hur support them until sunset. God gives victory, commands that the event be written as a memorial, and Moses builds an altar named “The LORD Is My Banner.”',
        observations: [
          'Israel travels according to the LORD’s command and camps at Rephidim, where there is no water.',
          'The people quarrel with Moses, demand water, and ask why they were brought from Egypt to die of thirst.',
          'Moses says their quarrel tests the LORD and cries out because he fears the people may stone him.',
          'God tells Moses to go before the people with Israel’s elders and the staff used at the Nile.',
          'The LORD promises to stand before Moses on the rock at Horeb, and water comes when Moses strikes it.',
          'The place is named Massah and Meribah because Israel tests the LORD by asking, “Is the LORD among us or not?”',
          'Amalek attacks Israel at Rephidim, and Joshua leads selected men into battle.',
          'Israel prevails while Moses holds up his hands with the staff of God, but Amalek prevails when his hands lower.',
          'Aaron and Hur support Moses’ weary hands until sunset; the raised hands are not presented as a magical technique.',
          'Joshua defeats Amalek’s forces, while the narrative attributes the larger victory to God.',
          'God commands that the event be written and recited to Joshua as a memorial.',
          'Moses builds an altar and names it “The LORD Is My Banner.”',
        ],
        threads: ['exodus', 'reign', 'covenant'],
        lenses: ['Presence → Transformation', 'Grace → Authority', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'Massah warns against testing the LORD',
            explanation:
              'Deuteronomy specifically warns Israel not to test the LORD as at Massah. Jesus quotes that command when tempted to demand a dramatic proof of divine care. Trust does not require God to submit His presence to tests of our choosing.',
            passages: ['Ex. 17:1–7', 'Deut. 6:16', 'Matt. 4:5–7'],
          },
          {
            title: 'The wilderness question and the danger of unbelief',
            explanation:
              'Psalm 95 recalls Meribah and Massah when warning worshipers not to harden their hearts. Hebrews develops that warning for the church, calling believers to persevering faith and God’s promised rest.',
            passages: ['Ex. 17:1–7', 'Ps. 95:7–11', 'Heb. 3:7–19', 'Heb. 4:1–11'],
          },
          {
            title: 'Christ and the wilderness provision',
            explanation:
              'Paul says Israel drank from a spiritual rock that followed them and that the rock was Christ. He interprets the wilderness provision christologically, presenting Christ as the sustaining source behind God’s gift. This should not be reduced to the simplistic claim that the physical rock itself was literally Jesus.',
            passages: ['Ex. 17:5–6', '1 Cor. 10:4'],
          },
          {
            title: 'Amalek attacks the vulnerable',
            explanation:
              'Deuteronomy later remembers Amalek attacking the weary and stragglers without fearing God. This background treats the battle soberly and explains why it is preserved as more than a detached leadership lesson.',
            passages: ['Ex. 17:8–16', 'Deut. 25:17–19'],
          },
          {
            title: 'Victory depends on the LORD',
            explanation:
              'Joshua fights, Moses intercedes, and Aaron and Hur support him, but the altar’s name interprets the outcome: “The LORD Is My Banner.” Human action matters without becoming the source of salvation.',
            passages: ['Ex. 17:8–16', 'Ps. 20:5–7'],
          },
        ],
        whyItMatters:
          'Exodus 17 joins two crises that ask whether the rescued people will trust God’s presence. Israel’s lack of water is real, but the quarrel turns need into a demand that God prove He is among them. God nevertheless stands at the rock and provides. When Amalek attacks, Israel must fight, intercede, and support weary servants, yet victory remains God’s gift. The chapter is not a formula about raised hands or a generic leadership slogan; it reveals the LORD providing for, defending, and forming a dependent people.',
        connectedPassages: [
          'Num. 20:1–13',
          'Deut. 6:16',
          'Deut. 25:17–19',
          'Ps. 95:7–11',
          'Matt. 4:5–7',
          '1 Cor. 10:4',
          'Heb. 3:7–19',
          'Heb. 4:1–11',
        ],
        kidSummary:
          'Israel needed water and had trouble trusting God, but God brought water from the rock. Then Amalek attacked, and God helped Israel while Joshua fought and Aaron and Hur supported Moses. The LORD provided for and defended His people.',
        reflectionQuestions: [
          'What need leads to the name Massah and Meribah, and what question does Israel ask?',
          'How do Joshua, Moses, Aaron, and Hur participate in the conflict with Amalek?',
          'How does Paul interpret God’s wilderness provision in 1 Corinthians 10?',
          'Why does the altar’s name keep the victory centered on the LORD?',
        ],
      },
      18: {
        reference: 'Exodus 18',
        summary:
          'Jethro, Moses’ father-in-law, hears what God has done and brings Zipporah and Moses’ sons to the wilderness camp. Moses recounts the LORD’s rescue and hardships, and Jethro rejoices, blesses the LORD, confesses that He is greater than all gods, and shares a sacrificial meal before God with Israel’s elders. The next day Jethro sees Moses judging disputes from morning to evening. He warns that the burden will exhaust Moses and the people, then advises Moses to teach God’s ways and appoint qualified leaders over groups while reserving difficult cases for himself. Moses listens and distributes responsibility.',
        observations: [
          'Jethro hears how God brought Moses and Israel out of Egypt.',
          'Jethro brings Zipporah and Moses’ sons, Gershom and Eliezer, to Moses in the wilderness.',
          'Moses tells Jethro what the LORD did to Pharaoh and Egypt, the hardships Israel faced, and how the LORD delivered them.',
          'Jethro rejoices, blesses the LORD, and confesses that the LORD is greater than all gods.',
          'Jethro offers burnt offerings and sacrifices, and Aaron and Israel’s elders eat with him before God.',
          'Moses judges the people’s disputes from morning until evening.',
          'Moses explains that the people seek God’s judgment and that he teaches God’s statutes and laws.',
          'Jethro says the task is too heavy for Moses to carry alone and will wear out both leader and people.',
          'Jethro advises Moses to represent the people before God, teach them the way to walk, and appoint qualified leaders.',
          'The leaders should be able, fear God, be trustworthy, and hate dishonest gain.',
          'Ordinary cases are distributed among the leaders while difficult cases remain with Moses.',
          'Moses listens to Jethro’s counsel, and Jethro returns home.',
        ],
        threads: ['reign', 'covenant'],
        lenses: ['Grace → Authority', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'Moses later remembers shared judgment',
            explanation:
              'Deuteronomy recalls Moses appointing wise and respected leaders because he could not bear Israel’s disputes alone. The judicial structure aims at fair hearing under God’s law rather than merely administrative efficiency.',
            passages: ['Ex. 18:13–26', 'Deut. 1:9–18'],
          },
          {
            title: 'One servant cannot carry every burden',
            explanation:
              'Numbers 11 records another crushing burden and God sharing responsibility with seventy elders. Moses’ care for each case is not condemned; the problem is that one leader cannot personally carry every responsibility for the whole people.',
            passages: ['Ex. 18:17–23', 'Num. 11:10–17'],
          },
          {
            title: 'Wise counsel strengthens communal work',
            explanation:
              'Proverbs says plans benefit from many counselors. Jethro’s counsel is tested under God—“if God so commands you”—and Moses humbly receives it, showing that authority can listen and distribute responsibility.',
            passages: ['Ex. 18:19–24', 'Prov. 11:14', 'Prov. 15:22'],
          },
          {
            title: 'Shared service protects essential ministry',
            explanation:
              'Acts 6 describes the early church appointing qualified servants when unequal care threatened the community and the apostles’ work. It resembles Exodus 18 in distributed responsibility, but neither chapter by itself creates a complete, permanent model for every church office.',
            passages: ['Ex. 18:13–26', 'Acts 6:1–7'],
          },
          {
            title: 'Character matters in entrusted leadership',
            explanation:
              'Jethro emphasizes ability, fear of God, trustworthiness, and resistance to dishonest gain. New Testament qualifications likewise stress tested character. The offices and covenant settings differ, but responsibility under God requires more than skill alone.',
            passages: ['Ex. 18:21', '1 Tim. 3:1–13'],
          },
        ],
        whyItMatters:
          'Exodus 18 connects testimony, worship, justice, and shared leadership. Jethro hears the story of God’s rescue and responds with joy and sacrifice. He then sees that Moses’ faithful concern for the people has become unsustainable. Wise distribution does not remove Moses’ mediating and teaching responsibilities; it enables justice to reach the people through qualified servants. The chapter commends humble listening and accountable authority without turning one wilderness arrangement into a universal organizational blueprint.',
        connectedPassages: [
          'Deut. 1:9–18',
          'Num. 11:10–17',
          '2 Chron. 19:4–10',
          'Prov. 11:14',
          'Prov. 15:22',
          'Acts 6:1–7',
          '1 Tim. 3:1–13',
        ],
        kidSummary:
          'Jethro heard how God rescued Israel and praised the LORD. He saw Moses trying to handle every problem alone and helped him choose trustworthy leaders to share the work. God’s people needed wise leaders who feared God and cared about justice.',
        reflectionQuestions: [
          'How does Jethro respond when Moses tells him what the LORD has done?',
          'Why is Moses’ current way of judging cases too heavy for both him and the people?',
          'Which qualities are required of the appointed leaders?',
          'What does this chapter show about receiving counsel and sharing responsibility under God?',
        ],
      },
      19: {
        reference: 'Exodus 19',
        summary:
          'Three months after leaving Egypt, Israel arrives at Sinai. God reminds the people that He carried them on eagles’ wings and brought them to Himself before calling them to covenant obedience. If Israel listens and keeps covenant, the nation will be God’s treasured possession among all peoples, a kingdom of priests, and a holy nation. The people agree to obey. They consecrate themselves, wash their garments, and keep boundaries around the mountain. On the third day thunder, lightning, thick cloud, smoke, earthquake, and a loud trumpet accompany the LORD’s descent. Moses speaks, God answers, and unauthorized approach is repeatedly forbidden.',
        observations: [
          'Israel arrives at the wilderness of Sinai in the third month after leaving Egypt.',
          'God first reminds Israel that He judged Egypt, carried the people on eagles’ wings, and brought them to Himself.',
          'Covenant obedience follows rescue rather than earning it.',
          'God calls Israel His treasured possession among all peoples, while affirming that the whole earth belongs to Him.',
          'Israel is called a kingdom of priests and a holy nation.',
          'The corporate priestly vocation means Israel belongs to God and represents His holiness among the nations; it does not make every Israelite an Aaronic priest.',
          'The people agree together to do all the LORD has spoken.',
          'Israel consecrates itself, washes garments, and prepares for God’s descent on the third day.',
          'Boundaries are placed around the mountain because unauthorized approach to God’s holiness is dangerous.',
          'Thunder, lightning, thick cloud, a loud trumpet, smoke, fire, and earthquake reveal God’s holy presence and royal majesty.',
          'Moses speaks and God answers him in thunder.',
          'God sends Moses down again to warn the people and priests not to break through the boundaries.',
        ],
        threads: ['covenant', 'image', 'priesthood'],
        lenses: ['Identity → Action', 'Grace → Authority', 'Presence → Transformation'],
        scriptureConnections: [
          {
            title: 'Carried on eagles’ wings',
            explanation:
              'Deuteronomy describes the LORD caring for Israel like an eagle carrying its young. The image emphasizes God’s initiating protection: Israel reaches Sinai because God has borne the people, not because they earned covenant identity.',
            passages: ['Ex. 19:3–4', 'Deut. 32:10–12'],
          },
          {
            title: 'Treasured because of covenant love',
            explanation:
              'Deuteronomy says Israel is God’s treasured people because of His love and oath, not because Israel is larger or more impressive than other nations. Grace precedes the call to covenant faithfulness.',
            passages: ['Ex. 19:5–6', 'Deut. 7:6–8'],
          },
          {
            title: 'A kingdom of priests carried into the New Testament',
            explanation:
              'First Peter applies Exodus’s language of chosen people, royal priesthood, and holy nation to believers in Christ, and Revelation praises Jesus for making a kingdom and priests. Rescue creates a people who belong to God and proclaim His excellencies.',
            passages: ['Ex. 19:5–6', '1 Pet. 2:4–10', 'Rev. 1:5–6', 'Rev. 5:9–10'],
          },
          {
            title: 'Holy presence requires cleansing and mediated access',
            explanation:
              'Isaiah’s temple vision likewise joins God’s overwhelming holiness with human uncleanness and God-provided cleansing. Sinai’s boundaries do not mean God is unwilling to love Israel; they protect the people and teach that access to the holy God must be on His terms.',
            passages: ['Ex. 19:10–24', 'Isa. 6:1–7'],
          },
          {
            title: 'Sinai and the greater approach through Christ',
            explanation:
              'Hebrews contrasts the terrifying mountain Israel approached with Mount Zion and Jesus, mediator of a new covenant. The contrast does not make Sinai evil; it shows how Christ provides the better access and covenant fellowship toward which guarded Sinai points.',
            passages: ['Ex. 19:12–20', 'Heb. 12:18–24'],
          },
        ],
        whyItMatters:
          'Exodus 19 establishes the order of covenant life: God rescues, carries, brings near, gives identity, and then calls for obedience. Israel’s vocation as treasured possession, priestly kingdom, and holy nation is grace-given and outward-facing. At the same time, the mountain reveals that the loving Deliverer is utterly holy. Boundaries, consecration, thunder, fire, and mediation protect the people and teach reverent access. The chapter prepares both for covenant law and for Scripture’s later hope of drawing near through a greater mediator.',
        connectedPassages: [
          'Deut. 4:10–14',
          'Deut. 7:6–8',
          'Deut. 32:10–12',
          'Isa. 6:1–7',
          'Heb. 12:18–24',
          '1 Pet. 2:4–10',
          'Rev. 1:5–6',
          'Rev. 5:9–10',
        ],
        kidSummary:
          'God brought Israel to Mount Sinai and reminded them that He had rescued and carried them. He called them His treasured people, a kingdom of priests, and a holy nation. The mountain’s fire, cloud, thunder, and boundaries taught them that God is wonderfully holy.',
        reflectionQuestions: [
          'What has God already done before asking Israel to keep His covenant?',
          'What do “treasured possession,” “kingdom of priests,” and “holy nation” say about Israel’s identity?',
          'Why do consecration and boundaries surround the people’s approach to Sinai?',
          'How does Hebrews 12 develop the hope of drawing near through Jesus?',
        ],
      },
      20: {
        reference: 'Exodus 20',
        summary:
          'God speaks the covenant commandments after identifying Himself as the LORD who brought Israel out of slavery. Israel must worship no other gods, make no carved image for worship, honor God’s name, and remember the Sabbath. The commands then address life with neighbors: honoring parents and rejecting murder, adultery, theft, false testimony, and coveting. God’s jealousy expresses His rightful covenant claim, while sin’s consequences across generations are contrasted with steadfast love extending to thousands who love Him. The people fear the thunder and distance themselves; Moses explains a proper fear that restrains sin. God closes with instructions for simple altars and worship without idols.',
        observations: [
          'God speaks the commandments and first identifies Himself as the LORD who rescued Israel from Egypt and slavery.',
          'Israel must have no other gods before the LORD and must not make or worship carved images.',
          'God’s jealousy is His rightful covenant claim over the people He redeemed, not sinful insecurity.',
          'God forbids misuse of His name.',
          'Israel must remember the Sabbath because God made heaven and earth in six days and rested on the seventh.',
          'The Sabbath command gives a shared rhythm of rest to households, servants, foreigners, and animals.',
          'Israel must honor father and mother.',
          'Murder, adultery, stealing, and false testimony are forbidden.',
          'Coveting a neighbor’s household or possessions is forbidden, addressing desire as well as outward action.',
          'Sin has real effects across generations, while God emphasizes steadfast love on a far greater scale.',
          'The people fear the thunder, lightning, trumpet, and smoking mountain and stand at a distance.',
          'Moses says God’s testing is meant to form a fear that restrains sin rather than drive the people into faithless terror.',
          'God forbids idols in worship and gives instructions for earth or uncut-stone altars.',
        ],
        threads: ['covenant', 'reign', 'image'],
        lenses: ['Truth → Practice', 'Grace → Authority', 'Identity → Action'],
        scriptureConnections: [
          {
            title: 'The commandments begin with redemption',
            explanation:
              'Deuteronomy repeats the Ten Commandments with the same opening: the LORD who commands is the God who brought Israel from slavery. The law defines covenant life after rescue; it is not a ladder by which Israel earns the exodus.',
            passages: ['Ex. 20:1–17', 'Deut. 5:6–21'],
          },
          {
            title: 'Love of God and neighbor summarizes covenant life',
            explanation:
              'Jesus names wholehearted love for God and love for neighbor as the greatest commandments. Paul likewise says neighbor-love fulfills the law’s relational demands. Worship and human relationships belong together under God’s reign.',
            passages: ['Ex. 20:1–17', 'Lev. 19:1–18', 'Matt. 22:34–40', 'Rom. 13:8–10'],
          },
          {
            title: 'Jesus brings the law to its intended fullness',
            explanation:
              'In the Sermon on the Mount, Jesus does not discard the law but exposes the heart’s anger, lust, manipulation, and retaliation. His teaching shows that covenant righteousness reaches beneath outward compliance to transformed desire and faithful love.',
            passages: ['Ex. 20:13–17', 'Matt. 5:17–48'],
          },
          {
            title: 'The law is good and exposes sin',
            explanation:
              'Psalm 19 celebrates the goodness of God’s instruction, while Romans says the law gives knowledge of sin and specifically uses coveting as an example. Galatians describes the law’s temporary guarding role leading toward Christ. These passages resist both treating law as a way to earn salvation and treating God’s commands as evil.',
            passages: ['Ex. 20:1–17', 'Ps. 19:7–11', 'Rom. 3:19–20', 'Rom. 7:7–13', 'Gal. 3:19–24'],
          },
          {
            title: 'Mercy, obedience, and the law of liberty',
            explanation:
              'James cites commands against adultery and murder while calling believers to speak and act under the law of liberty. Covenant instruction is not a collection of isolated sayings; it forms a merciful, undivided life before God.',
            passages: ['Ex. 20:13–16', 'James 2:8–12'],
          },
          {
            title: 'Personal responsibility amid generational consequences',
            explanation:
              'Exodus warns that idolatrous sin affects later generations but emphasizes steadfast love to thousands. Deuteronomy, Ezekiel, and Jeremiah clarify that children are not automatically condemned for a parent’s sin regardless of their own response; each person remains responsible before God, even while sin’s consequences can spread through families and societies.',
            passages: ['Ex. 20:5–6', 'Deut. 24:16', 'Ezek. 18:1–32', 'Jer. 31:29–30'],
          },
        ],
        whyItMatters:
          'Exodus 20 joins grace and command. The LORD first names Himself as Israel’s Redeemer, then describes a life of exclusive worship, truthful honor, Sabbath trust, family responsibility, protection of life and marriage, honesty, and contentment. The commandments reveal God’s good character and expose the human heart; they cannot erase sin or replace grace. God’s covenant jealousy is faithful love claiming the people He rescued, and His steadfast love outweighs the stated generational reach of iniquity. Jesus later fulfills the law and sums its life in love for God and neighbor.',
        connectedPassages: [
          'Deut. 5:6–21',
          'Lev. 19:1–18',
          'Ps. 19:7–11',
          'Matt. 5:17–48',
          'Matt. 22:34–40',
          'Rom. 3:19–20',
          'Rom. 7:7–13',
          'Rom. 13:8–10',
          'Gal. 3:19–24',
          'James 2:8–12',
        ],
        kidSummary:
          'God first reminded Israel that He had rescued them from slavery. Then He taught them to worship only Him, honor His name, rest, and treat other people truthfully and lovingly. God’s commands showed His rescued people how covenant life should look.',
        reflectionQuestions: [
          'Why does God begin the commandments by reminding Israel of the exodus?',
          'How do the commands about worship shape the commands about neighbors?',
          'What do later Scriptures say about the law’s goodness and its role in revealing sin?',
          'How do Jesus’ commands to love God and neighbor summarize covenant obedience?',
        ],
      },
      21: {
        reference: 'Exodus 21',
        summary:
          'The Book of the Covenant begins applying covenant justice to ancient Israel’s communal life. Laws regulate Hebrew servitude, including release in the seventh year, difficult family provisions, obligations toward a female servant, and a procedure when a servant chooses permanent service. Other cases distinguish intentional murder from accidental killing, condemn kidnapping a person for sale, address violence against parents, and establish responsibility for injury. Masters face penalties for injuring servants, serious bodily injury can result in a servant’s freedom, and pregnancy injury receives legal consequences. “Eye for eye” limits punishment to proportionate justice. Laws about dangerous animals and open pits require responsibility for preventable harm.',
        observations: [
          'A Hebrew male servant is to be released after six years of service without payment for freedom.',
          'The laws address how family status affects release and describe a solemn process if a servant chooses permanent service.',
          'A female servant receives specified marital and material protections, though the unequal institution remains difficult and could involve serious hardship.',
          'Intentional murder is distinguished from a death not planned in advance, for which a place of refuge is provided.',
          'Kidnapping a person and selling or possessing that person is punishable by death.',
          'Violence against or cursing parents receives severe covenant penalties.',
          'Injury laws require compensation for lost time and recovery.',
          'A master is held accountable when violence kills a servant, and serious injury to an eye or tooth results in the servant’s freedom.',
          'The text addresses injury involving a pregnant woman and requires consequences according to the harm, though some interpretive details are debated.',
          '“Eye for eye” establishes proportionate public justice rather than permission for personal revenge.',
          'Owners are liable when a dangerous animal kills, especially when a known danger was ignored.',
          'A person who leaves an open pit must make restitution when an animal falls into it.',
        ],
        threads: ['covenant', 'reign', 'image'],
        lenses: ['Truth → Practice', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'Ancient servitude regulated and limited',
            explanation:
              'Deuteronomy also requires release of a Hebrew servant and generous provision at departure. These laws regulate an existing ancient institution involving unequal power and real hardship. They should not be equated carelessly with modern race-based chattel slavery, but neither should their difficulty be minimized.',
            passages: ['Ex. 21:2–11', 'Deut. 15:12–18'],
          },
          {
            title: 'Kidnapping for sale is condemned',
            explanation:
              'Exodus and Deuteronomy impose the severest penalty upon stealing a person for sale. First Timothy later includes enslavers or kidnappers among those whose conduct contradicts sound teaching.',
            passages: ['Ex. 21:16', 'Deut. 24:7', '1 Tim. 1:8–10'],
          },
          {
            title: 'Intent and refuge matter in judgment',
            explanation:
              'Exodus distinguishes planned murder from accidental killing. Deuteronomy develops the cities-of-refuge process, showing that truthful investigation and intent matter in administering justice.',
            passages: ['Ex. 21:12–14', 'Deut. 19:1–13'],
          },
          {
            title: 'Proportionate justice limits retaliation',
            explanation:
              'Leviticus repeats the principle of proportionate judgment. Jesus addresses people who had turned “eye for eye” into a rationale for personal retaliation and calls His disciples toward nonretaliation and enemy-love. The civil standard and personal ethic should be distinguished rather than collapsed.',
            passages: ['Ex. 21:22–25', 'Lev. 24:17–22', 'Matt. 5:38–42'],
          },
          {
            title: 'The gospel presses upon unequal relationships',
            explanation:
              'Philemon asks that Onesimus be received as a beloved brother, and Colossians reminds masters that they answer to a Master in heaven. These texts do not pretend every ancient social structure disappeared immediately, but they bring gospel identity and divine accountability to bear upon unequal power.',
            passages: ['Ex. 21:2–11, 20–27', 'Philem. 15–17', 'Col. 4:1'],
          },
        ],
        whyItMatters:
          'Exodus 21 is difficult because it addresses unequal and sometimes harsh realities in ancient Israel rather than an idealized society. Its case laws are civil applications for Israel, not penalties to transfer unchanged to modern churches or governments. Within that setting they limit terms, impose obligations upon people with greater power, condemn kidnapping, distinguish intent, require proportionate justice, establish liability, and protect life. The chapter neither solves every injustice nor permits personal revenge; it begins applying covenant allegiance to concrete harm and responsibility.',
        connectedPassages: [
          'Lev. 24:17–22',
          'Deut. 15:12–18',
          'Deut. 19:1–13',
          'Deut. 24:7',
          'Matt. 5:38–42',
          'Philem. 15–17',
          'Col. 4:1',
          '1 Tim. 1:8–10',
        ],
        kidSummary:
          'God gave ancient Israel laws requiring people to take responsibility when they harmed someone. The laws limited punishment, condemned kidnapping, and held powerful people responsible for abuse and preventable danger. These were laws for Israel’s covenant community after God rescued them.',
        reflectionQuestions: [
          'What limits and obligations do the servitude laws place within ancient Israel’s unequal social world?',
          'How does the chapter distinguish intentional harm, accidents, and preventable danger?',
          'Why does “eye for eye” limit retaliation rather than encourage personal revenge?',
          'How should readers distinguish Israel’s civil case laws from enduring principles of justice and responsibility?',
        ],
      },
      22: {
        reference: 'Exodus 22',
        summary:
          'Covenant case laws continue with restitution for theft, crop damage, fire, entrusted property, and borrowed animals. Disputes are brought before God-appointed judges, and the amount repaid reflects responsibility for the loss. A man who seduces an unbetrothed woman incurs marriage or financial obligations rather than escaping responsibility. Severe laws against sorcery, bestiality, and sacrifice to other gods protect Israel’s holy covenant identity. The LORD then emphasizes foreigners, widows, orphans, and poor borrowers: Israel must not oppress them, God hears their cries, interest must not exploit the poor, and a cloak taken as collateral must be returned before night. Firstfruits, firstborn, respect for authority, and ordinary eating practices also belong to holy life.',
        observations: [
          'Theft requires restitution, with differing amounts based on what was stolen and what happened to it.',
          'A person defending a home at night is treated differently from someone using deadly force after daylight makes the situation clearer.',
          'Owners must make restitution when grazing animals or fire damage another person’s field or harvest.',
          'Cases involving entrusted, lost, or borrowed property are brought before judges and evaluated according to responsibility.',
          'A man who seduces an unbetrothed woman must accept marital or financial responsibility, while her father retains a decision in the arrangement.',
          'Sorcery, bestiality, and sacrifice to other gods receive severe penalties within Israel’s theocratic covenant setting.',
          'Idolatry is treated as covenant treason, but these civil penalties are not directly mapped onto the church.',
          'Israel must not wrong or oppress a foreigner because Israel knew life as a foreigner in Egypt.',
          'Widows and orphans must not be mistreated; God says He will hear their cry.',
          'Poor Israelites must not be exploited through interest, and a cloak taken as collateral must be returned before night.',
          'The people must respect God and rulers, offer firstfruits and firstborn, and live as a holy people.',
          'Animals torn by beasts are not to be eaten but thrown to the dogs.',
        ],
        threads: ['covenant', 'image', 'reign'],
        lenses: ['Identity → Action', 'Truth → Practice', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'Israel’s rescue grounds care for foreigners',
            explanation:
              'Deuteronomy says God loves the foreigner and commands Israel to do the same because Israel was foreign in Egypt. Covenant memory must reshape how people with less social protection are treated.',
            passages: ['Ex. 22:21', 'Deut. 10:17–19'],
          },
          {
            title: 'God hears widows and orphans',
            explanation:
              'God warns that He personally hears the cries of widows and orphans. Psalm 68 calls Him father of the fatherless and defender of widows, while James places care for orphans and widows at the center of undefiled worship.',
            passages: ['Ex. 22:22–24', 'Ps. 68:5', 'James 1:27'],
          },
          {
            title: 'Justice protects rather than humiliates the poor',
            explanation:
              'Deuteronomy expands protections for pledges, wages, gleaning, foreigners, widows, and orphans. Exodus’s requirement to return a cloak before night keeps a lender’s claim from stripping a poor person of basic shelter. It addresses exploitative lending without supplying a complete modern banking policy.',
            passages: ['Ex. 22:25–27', 'Deut. 24:10–22'],
          },
          {
            title: 'To oppress the poor insults their Maker',
            explanation:
              'Proverbs connects treatment of the poor with honor toward the Creator. Because vulnerable people bear God’s image, economic responsibility and covenant worship cannot be separated.',
            passages: ['Ex. 22:21–27', 'Prov. 14:31'],
          },
          {
            title: 'Mercy makes neighbor-love concrete',
            explanation:
              'Jesus commands openhanded generosity and tells of a neighbor who bears another person’s practical cost. James warns against favoritism and loveless profession. These passages develop the covenant concern for mercy without turning Exodus 22 into a complete modern policy code.',
            passages: ['Ex. 22:21–27', 'Matt. 5:42', 'Luke 10:25–37', 'James 2:1–13'],
          },
        ],
        whyItMatters:
          'Exodus 22 shows covenant holiness reaching property, sexuality, worship, authority, food, credit, and treatment of vulnerable neighbors. Restitution aims to repair loss rather than merely punish wrongdoing. The severe theocratic penalties belong to Israel’s particular covenant order and should not be imposed directly by the church. The chapter’s repeated moral center is unmistakable: the God who heard enslaved Israel hears foreigners, widows, orphans, and poor borrowers. Rescued people must not reproduce Egypt’s oppression.',
        connectedPassages: [
          'Lev. 19:9–18',
          'Deut. 10:17–19',
          'Deut. 24:10–22',
          'Ps. 68:5',
          'Prov. 14:31',
          'Isa. 1:16–17',
          'Matt. 5:42',
          'Luke 10:25–37',
          'James 1:27',
          'James 2:1–13',
        ],
        kidSummary:
          'God taught Israel to return what was stolen, repair damage, and take responsibility. He told His people not to hurt foreigners, widows, or children without parents, and not to take advantage of poor people. The God who heard Israel’s cries also hears others who are mistreated.',
        reflectionQuestions: [
          'How does restitution address theft and damage in this chapter?',
          'Which vulnerable people does God specifically protect, and what does He promise to hear?',
          'Why does Israel’s experience in Egypt matter for its treatment of foreigners?',
          'How do these case laws connect covenant worship with responsibility and mercy?',
        ],
      },
      23: {
        reference: 'Exodus 23',
        summary:
          'The Book of the Covenant concludes with commands for truthful and impartial justice: Israel must reject false reports, crowds that distort judgment, favoritism toward either poor or powerful, bribery, and oppression of foreigners. Even an enemy’s lost or overloaded animal must receive help. The seventh-year rest lets poor people and animals eat from the land, and weekly Sabbath extends rest to servants, foreigners, and animals. Israel must avoid other gods and keep three annual feasts before the LORD. The exact background of the command about a young goat in its mother’s milk remains debated. God promises an angel to guard and lead Israel toward the land, warns against idolatrous compromise, and says conquest will be gradual rather than instant.',
        observations: [
          'Israel must not spread a false report, join a crowd in injustice, or give distorted testimony.',
          'Judges must not favor a poor person merely because of poverty or deny justice to the poor.',
          'An enemy’s lost animal must be returned, and an enemy’s overloaded animal must be helped.',
          'Bribes are forbidden because they blind officials and corrupt righteous cases.',
          'Foreigners must not be oppressed because Israel knows the heart of a foreigner from Egypt.',
          'The land rests in the seventh year so poor people and wild animals may eat what grows.',
          'Weekly Sabbath gives rest to oxen, donkeys, servants, and foreigners as well as Israelite households.',
          'Israel must not invoke the names of other gods.',
          'The Feast of Unleavened Bread, Feast of Harvest, and Feast of Ingathering structure annual worship before the LORD.',
          'Israel must bring firstfruits and must not boil a young goat in its mother’s milk; the exact background of the latter command is debated.',
          'God promises an angel to guard Israel and bring the people to the prepared place.',
          'The text demands obedience to God’s messenger but does not settle every later question about the angel’s identity.',
          'God promises to oppose Israel’s enemies while warning against worshiping their gods or making covenant compromise.',
          'The nations will be driven out gradually so the land does not become desolate and wild animals multiply.',
        ],
        threads: ['covenant', 'creation', 'reign'],
        lenses: ['Truth → Practice', 'Identity → Action', 'Promise → Fulfillment'],
        scriptureConnections: [
          {
            title: 'Justice refuses lies, crowds, and bribes',
            explanation:
              'Proverbs condemns bribery and false testimony. Exodus 23 requires judges and witnesses to resist social pressure and material gain so justice is based on truth rather than popularity or power.',
            passages: ['Ex. 23:1–3, 6–8', 'Prov. 17:23', 'Prov. 24:28'],
          },
          {
            title: 'An enemy remains a neighbor',
            explanation:
              'Exodus commands practical help for an enemy’s animal. Jesus commands love for enemies, and Paul calls believers to overcome evil with good. These later passages develop the same refusal to let hostility cancel concrete neighborly responsibility.',
            passages: ['Ex. 23:4–5', 'Matt. 5:43–48', 'Rom. 12:17–21'],
          },
          {
            title: 'Rest reaches land, laborers, foreigners, and animals',
            explanation:
              'The Sabbath year and weekly Sabbath limit endless production and extend provision and rest beyond wealthy landowners. Hebrews later uses Sabbath-rest imagery for God’s promised rest, while Exodus grounds the rhythm in covenant life and care for creation.',
            passages: ['Ex. 23:10–12', 'Heb. 4:1–11'],
          },
          {
            title: 'Feasts remember provision and belonging',
            explanation:
              'Deuteronomy develops the three pilgrimage feasts and emphasizes communal rejoicing that includes servants, Levites, foreigners, orphans, and widows. Worship and shared provision belong together.',
            passages: ['Ex. 23:14–17', 'Deut. 16:1–17'],
          },
          {
            title: 'Do good without growing weary',
            explanation:
              'Returning an enemy’s animal, protecting a foreigner, and leaving produce for the poor require persistent goodness beyond self-interest. Galatians calls believers not to grow weary in doing good, especially toward the household of faith.',
            passages: ['Ex. 23:4–12', 'Gal. 6:9–10'],
          },
          {
            title: 'God promises guarded and gradual guidance',
            explanation:
              'God promises an angel to guard and lead Israel, but the chapter does not identify the messenger beyond what the text states. Gradual conquest is not failed guidance; God explains that immediate possession would create other dangers. Promise calls for patient obedience without covenant compromise.',
            passages: ['Ex. 23:20–33', 'Deut. 7:17–24'],
          },
        ],
        whyItMatters:
          'Exodus 23 brings covenant justice, rest, worship, and promise together. Truth must resist crowds, favoritism, and bribery. Love of neighbor reaches even an enemy, while rest and food extend to servants, foreigners, animals, poor people, and the land. Israel’s calendar belongs to the LORD rather than rival gods. God also promises to lead the people toward the land at a wise pace. These are civil and ceremonial instructions for ancient Israel, yet they reveal enduring concerns for truthful justice, merciful responsibility, exclusive worship, and trust in God’s guidance.',
        connectedPassages: [
          'Lev. 19:15–18',
          'Deut. 16:1–17',
          'Prov. 17:23',
          'Prov. 24:28',
          'Matt. 5:43–48',
          'Rom. 12:17–21',
          'Gal. 6:9–10',
          'Heb. 4:1–11',
        ],
        kidSummary:
          'God taught Israel to tell the truth, judge fairly, help even an enemy, and protect foreigners. He gave rest to people, servants, animals, and land. God called His people to worship only Him and promised to guard and lead them toward the land.',
        reflectionQuestions: [
          'What pressures can distort justice, and how does the chapter resist them?',
          'How do the Sabbath year and weekly Sabbath extend rest and provision beyond the powerful?',
          'What do the feasts teach about worship, memory, and shared joy?',
          'Why do God’s promised angel and gradual guidance call Israel to patient trust?',
        ],
      },
      24: {
        reference: 'Exodus 24',
        summary:
          'God calls Moses, Aaron, Nadab, Abihu, and seventy elders upward while maintaining degrees of approach. Moses recounts the LORD’s words, writes them, builds an altar and twelve pillars, and oversees burnt offerings and peace offerings. Half the blood is placed on the altar. Moses reads the Book of the Covenant publicly, the people renew their promise to obey, and the remaining blood is applied to them as “the blood of the covenant.” Israel’s representatives then see a revealed manifestation of the God of Israel above pavement like sapphire; God does not strike them, and they eat and drink before Him. Moses and Joshua ascend farther, the cloud covers Sinai, God’s glory appears like consuming fire, and Moses remains forty days and nights.',
        observations: [
          'God calls Moses, Aaron, Nadab, Abihu, and seventy elders to come upward, while Moses alone approaches most closely.',
          'Moses recounts all the LORD’s words and ordinances, and the people agree to obey.',
          'Moses writes the LORD’s words, builds an altar, and sets up twelve pillars representing Israel’s tribes.',
          'Young men offer burnt offerings and peace offerings to the LORD.',
          'Moses places half the sacrificial blood in basins and throws half against the altar.',
          'The Book of the Covenant is read publicly, and the people again commit themselves to obedience.',
          'Moses applies blood to the people and declares it “the blood of the covenant” the LORD has made with them.',
          'Blood on altar and people binds Israel to the LORD through sacrifice and solemn covenant commitment.',
          'Israel’s representatives see the God of Israel with pavement like sapphire beneath His feet; the text does not claim they see God’s full unveiled essence.',
          'God does not strike the representatives, and they eat and drink in His presence.',
          'Moses and Joshua go farther up the mountain, while elders remain with Aaron and Hur to handle disputes.',
          'The cloud covers Sinai for six days, and God calls Moses on the seventh.',
          'The LORD’s glory appears like a consuming fire before Israel.',
          'Moses enters the cloud and remains on the mountain forty days and forty nights.',
        ],
        threads: ['covenant', 'priesthood', 'temple'],
        lenses: ['Shadow → Reality', 'Presence → Transformation', 'Promise → Fulfillment'],
        scriptureConnections: [
          {
            title: 'Covenant established through sacrifice',
            explanation:
              'Genesis 15 also joins divine covenant promise with sacrificial blood, though the ceremony differs. Exodus 24 formally binds the rescued nation to the LORD through written words, public assent, altar, sacrifice, and blood.',
            passages: ['Ex. 24:3–8', 'Gen. 15:1–21'],
          },
          {
            title: 'The blood of the covenant',
            explanation:
              'Observation: the covenant is read, the people agree, sacrificial blood is placed on the altar and applied to the people, and representatives eat before God. At the Last Supper Jesus calls the cup His “blood of the covenant” or “new covenant in my blood.” The New Testament identifies His death as establishing the new covenant; the ceremonies are connected but not identical.',
            passages: ['Ex. 24:3–11', 'Matt. 26:26–29', 'Luke 22:14–20'],
          },
          {
            title: 'Christ’s better covenant mediation',
            explanation:
              'Hebrews explicitly recalls Moses sprinkling the book and people with blood, then contrasts repeated animal sacrifices with Christ entering the true holy place through His own blood. Jesus fulfills and surpasses old covenant mediation by securing lasting access and cleansing.',
            passages: ['Ex. 24:5–8', 'Heb. 9:11–28', 'Heb. 10:11–22'],
          },
          {
            title: 'Drawing near through Jesus',
            explanation:
              'Sinai preserves boundaries and mediated degrees of approach. Hebrews contrasts that mountain with believers coming to Mount Zion and Jesus, mediator of a new covenant, whose sprinkled blood speaks a better word.',
            passages: ['Ex. 24:1–2, 9–18', 'Heb. 12:18–24'],
          },
          {
            title: 'Mountain, cloud, and the beloved Son',
            explanation:
              'At Jesus’ transfiguration a bright cloud overshadows the mountain, Moses and Elijah appear, and the Father identifies the beloved Son who must be heard. The scene echoes Sinai imagery while directing attention beyond Moses to Jesus.',
            passages: ['Ex. 24:12–18', 'Matt. 17:1–8'],
          },
          {
            title: 'Covenant blood and a sanctified people',
            explanation:
              'First Peter describes believers as chosen according to God’s foreknowledge, sanctified by the Spirit, for obedience to Jesus Christ and sprinkling with His blood. The language draws covenant identity and cleansing into the life of the new-covenant people.',
            passages: ['Ex. 24:7–8', '1 Pet. 1:1–2'],
          },
        ],
        whyItMatters:
          'Exodus 24 completes the movement from rescue to formal covenant fellowship. God’s word is spoken, written, read, and accepted; sacrifice and blood solemnly bind altar and people; representatives draw near and share a meal without being struck; and Moses enters the cloud as mediator. Access remains real but guarded. The New Testament explicitly takes up “the blood of the covenant” to explain Jesus’ death: He fulfills and surpasses the old covenant sacrifices and mediation, enabling believers to draw near through His blood.',
        connectedPassages: [
          'Gen. 15:1–21',
          'Ex. 19:3–8',
          'Deut. 4:9–14',
          'Matt. 17:1–8',
          'Matt. 26:26–29',
          'Luke 22:14–20',
          'Heb. 9:11–28',
          'Heb. 10:11–22',
          'Heb. 12:18–24',
          '1 Pet. 1:1–2',
        ],
        kidSummary:
          'Moses read God’s covenant words, and Israel promised to obey. Sacrifices and blood confirmed the covenant, and Israel’s leaders ate a meal before God. Then Moses entered the cloud on the mountain, where God’s glory looked like consuming fire.',
        reflectionQuestions: [
          'Which words, sacrifices, blood applications, and promises formally confirm the covenant?',
          'What does the meal before God show about covenant fellowship and guarded access?',
          'How do Jesus and Hebrews develop the meaning of “the blood of the covenant”?',
          'Why do Moses’ mediation and entrance into the cloud prepare readers for a greater mediator?',
        ],
      },
      25: {
        reference: 'Exodus 25',
        summary:
          'After establishing the covenant, the LORD tells Moses to receive contributions from every Israelite whose heart moves willingly. The materials will be used to make a sanctuary so that God may dwell among His people, and every part must follow the pattern He shows Moses. The instructions begin with the ark, its mercy seat, and overshadowing cherubim, where God promises to meet with Moses and speak His commands for Israel. God then describes the table that will continually hold the bread of the Presence and the one-piece golden lampstand with its seven lamps. The redeemed community supplies the gifts, but God initiates, defines, and centers the dwelling place around His own presence and word.',
        observations: [
          'The LORD tells Moses to receive an offering from each person whose heart moves willingly to give.',
          'The requested materials include precious metals, colored yarns, fine linen, skins, wood, oil, spices, and gemstones.',
          'God states the sanctuary’s purpose plainly: “that I may dwell in their midst.”',
          'Israel must make the tabernacle and its furnishings according to the pattern God shows Moses.',
          'The ark is a gold-covered wooden chest made to hold the testimony God will give.',
          'A pure-gold mercy seat with two cherubim forms the ark’s cover, and the cherubim face toward it with wings spread above.',
          'God promises to meet with Moses above the mercy seat and speak there concerning Israel.',
          'The gold-covered table is furnished with dishes and vessels, and the bread of the Presence is to remain before the LORD continually.',
          'The lampstand is hammered from one piece of pure gold with branches and cups shaped like almond blossoms.',
          'Seven lamps are arranged to give light in front of the lampstand, and the chapter again stresses the pattern shown on the mountain.',
        ],
        threads: ['temple', 'covenant', 'exodus'],
        lenses: ['Presence → Transformation', 'Grace → Authority', 'Shadow → Reality'],
        scriptureConnections: [
          {
            title: 'Redemption moves toward God dwelling with His people',
            explanation:
              'The exodus has moved from bondage through rescue and covenant to the promise of divine dwelling. When the tabernacle is completed, the glory of the LORD fills it. The sanctuary is therefore not a random interruption but part of the purpose toward which redemption has been moving.',
            passages: ['Ex. 25:1–9', 'Ex. 6:6–7', 'Ex. 19:3–6', 'Ex. 40:34–38'],
          },
          {
            title: 'God provides the pattern for His dwelling',
            explanation:
              'Israel does not invent a path into God’s presence; the LORD gives the pattern to a people He has already redeemed. Hebrews explicitly calls the earthly sanctuary a copy and shadow and recalls God’s command that Moses make everything according to the mountain pattern.',
            passages: ['Ex. 25:9, 40', 'Heb. 8:1–5', 'Heb. 9:1–5'],
          },
          {
            title: 'The place where God meets and speaks',
            explanation:
              'God associates the space above the ark’s mercy seat with meeting Moses and giving His word for Israel. Leviticus later places atoning blood there on the Day of Atonement, showing that the covenant meeting place is also approached through God’s provision for cleansing.',
            passages: ['Ex. 25:10–22', 'Lev. 16:11–17', 'Num. 7:89'],
          },
          {
            title: 'Cherubim and guarded holy presence',
            explanation:
              'Cherubim guard the way to the tree of life after humanity is expelled from Eden, and cherubim later overshadow the ark in Israel’s sanctuary. This creates a meaningful sacred-space pattern of holy presence and guarded access, though Exodus does not explicitly call the tabernacle a restored Eden.',
            passages: ['Ex. 25:17–22', 'Gen. 3:22–24', '1 Kings 8:6–11'],
          },
          {
            title: 'The dwelling of God reaches its canonical goal',
            explanation:
              'John says the Word became flesh and dwelt among us, using language that recalls God’s tabernacling presence. Revelation announces the final goal: God’s dwelling is with humanity. These later texts develop the sanctuary’s central hope without denying its real role in Israel.',
            passages: ['Ex. 25:8', 'John 1:14', 'Rev. 21:1–3, 22'],
          },
        ],
        whyItMatters:
          'Exodus 25 reveals the goal of redemption as fellowship with the Redeemer. The LORD who brought Israel out of Egypt graciously chooses to dwell among the people and supplies the pattern by which His holy presence will be honored. Willing gifts allow the community to participate, but neither generosity nor craftsmanship earns God’s nearness. The ark, meeting place, bread, and light belong to an ordered sanctuary centered on God’s presence and word. Later Scripture develops this dwelling pattern through Christ and toward new creation, where God’s presence with His people is complete.',
        connectedPassages: [
          'Gen. 3:22–24',
          'Ex. 6:6–7',
          'Ex. 19:3–6',
          'Ex. 40:34–38',
          'Lev. 16:11–17',
          '1 Kings 8:6–11',
          'John 1:14',
          'Heb. 8:1–5',
          'Heb. 9:1–5',
          'Rev. 21:1–3, 22',
        ],
        kidSummary:
          'God asked willing people to give materials for a special tent called the tabernacle. God gave the plan because He wanted to live among the people He had rescued. The ark, table, and lampstand all belonged in this holy place where God would meet with His people.',
        reflectionQuestions: [
          'What purpose does God give for the sanctuary, and how does it continue the story of the exodus?',
          'What do willing offerings and the commanded pattern show about Israel’s part and God’s initiative?',
          'Where does God promise to meet with Moses, and what will happen there?',
          'How do John 1 and Revelation 21 develop the Bible’s hope of God dwelling with His people?',
        ],
      },
      26: {
        reference: 'Exodus 26',
        summary:
          'The LORD gives Moses detailed instructions for the tabernacle itself. Fine inner curtains embroidered with cherubim are joined into one dwelling, with larger goats’ hair curtains and protective coverings placed over them. Acacia-wood frames, bases, bars, and rings form a stable structure according to the mountain pattern. Inside, a veil embroidered with cherubim separates the Holy Place from the Most Holy Place and places the ark behind it. The table and lampstand stand outside the veil, and a separate screen marks the tent’s entrance. The ordered layers, boundaries, and rooms communicate both truths at once: the holy God will dwell near Israel, yet entry into His presence remains guarded.',
        observations: [
          'Ten fine-linen curtains with blue, purple, and scarlet yarn and cherubim form the inner tabernacle covering.',
          'Loops and gold clasps join the curtain sets so the tabernacle becomes one whole.',
          'Eleven goats’ hair curtains form a tent over the tabernacle, with additional coverings placed above them for protection.',
          'Upright acacia-wood frames set in silver bases form the walls on the south, north, and west sides.',
          'Bars passing through rings hold the frames together, and the wood is overlaid with gold.',
          'The structure must be erected according to the plan shown to Moses on the mountain.',
          'A veil woven with cherubim hangs from gold-covered pillars and separates the Holy Place from the Most Holy Place.',
          'The ark and mercy seat are placed within the Most Holy Place behind the veil.',
          'The table and lampstand stand outside the veil in the Holy Place, opposite one another.',
          'A screen of colored yarn and fine linen marks the entrance to the tent.',
        ],
        threads: ['temple', 'priesthood', 'creation'],
        lenses: ['Shadow → Reality', 'Presence → Transformation', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'A veil marks restricted access',
            explanation:
              'Observation: Exodus places a veil between the Holy Place and the Most Holy Place. Leviticus permits the high priest to pass within it only under carefully commanded conditions on the Day of Atonement. Nearness is real, but access to the holy God is not casual.',
            passages: ['Ex. 26:31–34', 'Lev. 16:1–17'],
          },
          {
            title: 'Hebrews interprets the sanctuary arrangement',
            explanation:
              'Hebrews explicitly describes the outer and inner rooms and says the arrangement signified that the way into the holy places was not yet opened while the first tent still stood. This later interpretation explains restricted old-covenant access rather than assigning hidden meanings to every material or measurement.',
            passages: ['Ex. 26:31–35', 'Heb. 9:1–10'],
          },
          {
            title: 'Opened access through Christ',
            explanation:
              'Matthew records the temple curtain tearing when Jesus dies. Hebrews calls believers to enter the holy places through Jesus’ blood and links that access with the curtain and His flesh. The New Testament thus connects opened access to Christ’s completed work.',
            passages: ['Ex. 26:31–33', 'Matt. 27:50–51', 'Heb. 10:19–22'],
          },
          {
            title: 'Cherubim belong to guarded sacred space',
            explanation:
              'Cherubim appear at Eden’s closed entrance, in the tabernacle curtains and veil, and later in Solomon’s temple. The repeated imagery connects holy dwelling with guarded space, although Scripture does not invite a separate symbolic meaning for each thread, clasp, or color.',
            passages: ['Gen. 3:24', 'Ex. 26:1, 31', '1 Kings 6:23–35'],
          },
          {
            title: 'One ordered dwelling',
            explanation:
              'The joined curtains and fitted frames create one tabernacle according to God’s design. Later, Ephesians uses temple-building language for Jews and Gentiles joined in Christ as a holy temple and dwelling place for God by the Spirit; it develops the dwelling theme in a new-covenant community.',
            passages: ['Ex. 26:1–30', 'Eph. 2:19–22'],
          },
        ],
        whyItMatters:
          'Exodus 26 turns architecture into a lesson about holy presence. God truly chooses to live among Israel, but the veil and ordered rooms teach that sinful people cannot approach Him however they choose. The chapter’s details serve a real sanctuary before becoming part of a larger biblical pattern. Leviticus explains the limited priestly entrance, and Hebrews explicitly interprets the arrangement as restricted access under the old covenant. Through Jesus’ once-for-all work, the New Testament announces a new and living way to draw near.',
        connectedPassages: [
          'Gen. 3:24',
          'Lev. 16:1–17',
          '1 Kings 6:23–35',
          'Matt. 27:50–51',
          'Eph. 2:19–22',
          'Heb. 9:1–10',
          'Heb. 10:19–22',
        ],
        kidSummary:
          'God showed Israel exactly how to build the tabernacle. A special curtain separated its holiest room from the rest. God was near His people, which was wonderful, but He is completely holy, so people could not come close any way they wanted.',
        reflectionQuestions: [
          'How do the curtains, frames, coverings, and clasps form one ordered dwelling?',
          'What does the veil separate, and what does that boundary teach about God’s holiness?',
          'How does Hebrews 9 interpret the tabernacle’s two rooms and restricted access?',
          'Why does Hebrews 10 connect confidence to draw near with Jesus’ work rather than human effort?',
        ],
      },
      27: {
        reference: 'Exodus 27',
        summary:
          'The LORD describes the bronze-covered altar for burnt offerings, including its horns, utensils, grating, rings, and carrying poles. He then defines the tabernacle courtyard with linen hangings, bronze pillars and bases, and a single screened entrance. The altar stands in this outer court on the way toward the tent, placing sacrifice prominently within Israel’s approach to God’s holy dwelling. Finally, Israel must bring pure olive oil so Aaron and his sons can tend the lamp from evening to morning before the LORD. Sacrifice, boundaries, entrance, and continual light order worship around God’s presence.',
        observations: [
          'The altar is made from acacia wood, overlaid with bronze, and constructed as a hollow square.',
          'Horns are made as one piece with the altar at its four corners.',
          'Bronze utensils, a grating, rings, and poles equip the altar for its sacrificial use and transport.',
          'The altar, like the tabernacle furnishings, must be made according to the pattern shown on the mountain.',
          'Fine-linen hangings supported by pillars and bronze bases define the courtyard on every side.',
          'A colorful woven screen forms the entrance on the east side of the courtyard.',
          'The courtyard creates a boundary around the tabernacle while providing an appointed way in.',
          'The bronze altar stands in the courtyard before the entrance to the tabernacle.',
          'Israel must bring clear oil from beaten olives for the light.',
          'Aaron and his sons must tend the lamp from evening to morning before the LORD as a lasting ordinance for Israel.',
        ],
        threads: ['priesthood', 'temple', 'exodus'],
        lenses: ['Shadow → Reality', 'Truth → Practice', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'Sacrifice stands on the way into the sanctuary',
            explanation:
              'Observation: the altar is placed in the courtyard before the tent entrance. Leviticus develops how worshipers bring offerings there and how priests handle their blood and portions. Sacrifice belongs to Israel’s God-given approach toward holy presence.',
            passages: ['Ex. 27:1–8', 'Ex. 40:29', 'Lev. 1:1–9'],
          },
          {
            title: 'Blood and the life God gives',
            explanation:
              'Leviticus explains that the life of the flesh is in the blood and that God has given it on the altar to make atonement. This does not make every altar detail a secret prediction; it clarifies why sacrificial blood matters within Israel’s covenant worship.',
            passages: ['Ex. 27:1–8', 'Lev. 17:10–11'],
          },
          {
            title: 'Christ’s once-for-all offering',
            explanation:
              'Hebrews contrasts the repeated sacrifices of Israel’s worship with Jesus offering Himself once for all. The bronze altar should not simply be equated with the cross, but the sacrificial approach it serves belongs to the biblical pattern Hebrews says Christ fulfills and surpasses.',
            passages: ['Ex. 27:1–8', 'Heb. 9:11–14, 23–28', 'Heb. 10:1–14'],
          },
          {
            title: 'The Lamb who takes away sin',
            explanation:
              'John the Baptist identifies Jesus as the Lamb of God who takes away the sin of the world, and Peter speaks of His precious blood. These texts draw on the Bible’s larger sacrificial world while keeping fulfillment centered on Jesus rather than on speculative meanings for the altar’s construction.',
            passages: ['Lev. 1:10–13', 'John 1:29', '1 Pet. 1:18–19'],
          },
          {
            title: 'Continual light in the holy place',
            explanation:
              'The supplied oil enables Aaron and his sons to tend the lamps regularly before the LORD. Leviticus repeats this duty and joins the continually burning lamps with the continually arranged bread, emphasizing faithful priestly service in God’s dwelling.',
            passages: ['Ex. 27:20–21', 'Lev. 24:1–9'],
          },
        ],
        whyItMatters:
          'Exodus 27 shows that approach to God’s dwelling is both graciously provided and carefully ordered. The courtyard has a boundary and an entrance, and sacrifice stands prominently before the inner sanctuary. Israel is not told to discover its own way toward God; the LORD appoints the altar, the priestly service, and the continual light. Leviticus will explain these sacrifices further, while Hebrews later shows that repeated offerings reach their goal in Christ’s once-for-all sacrifice. The chapter keeps holiness, atonement, access, and worship together.',
        connectedPassages: [
          'Ex. 40:29',
          'Lev. 1:1–13',
          'Lev. 17:10–11',
          'Lev. 24:1–9',
          'John 1:29',
          'Heb. 9:11–14, 23–28',
          'Heb. 10:1–14',
          '1 Pet. 1:18–19',
        ],
        kidSummary:
          'God placed an altar in the courtyard outside the tabernacle, where Israel would bring sacrifices as part of worship. A fence marked the holy space, and one entrance showed the way in. God also told the priests to keep the special lamp burning with pure oil.',
        reflectionQuestions: [
          'Where is the altar placed in relation to the tabernacle, and why is that location important?',
          'How do the courtyard boundary and entrance show both guarded holiness and provided access?',
          'What continual responsibility do Aaron and his sons have for the lamp?',
          'How does Hebrews distinguish Christ’s offering from Israel’s repeated sacrifices?',
        ],
      },
      28: {
        reference: 'Exodus 28',
        summary:
          'God sets apart Aaron and his sons to serve as priests and commands skilled workers to make holy garments for glory and beauty. The high priest’s ephod carries two stones engraved with the names of Israel’s tribes on his shoulders. His breastpiece carries twelve precious stones engraved with the tribes’ names over his heart and holds the Urim and Thummim for judgment before the LORD. His robe, gold plate, turban, and other garments identify and protect him in holy service; the plate declares “Holy to the LORD.” Aaron’s garments make visible his representative calling: chosen and clothed for consecrated service, he bears the covenant people before God.',
        observations: [
          'God chooses Aaron and his sons Nadab, Abihu, Eleazar, and Ithamar to serve as priests.',
          'Skillful workers whom God has filled with a spirit of skill make holy garments for Aaron’s consecration.',
          'The garments include a breastpiece, ephod, robe, woven coat, turban, and sash.',
          'Two onyx stones on the ephod’s shoulders are engraved with the names of Israel’s twelve sons as memorial stones.',
          'The breastpiece carries twelve different stones, each engraved with the name of one tribe.',
          'Aaron bears Israel’s names over his heart when he enters the Holy Place.',
          'The Urim and Thummim are placed in the breastpiece of judgment, though the chapter does not explain their exact operation.',
          'Bells and pomegranates edge the robe, and the robe is worn during priestly ministry.',
          'A gold plate engraved “Holy to the LORD” is fastened to the front of Aaron’s turban.',
          'Aaron bears responsibility connected with Israel’s holy gifts so they may be accepted before the LORD.',
          'Aaron’s sons also receive coats, sashes, and caps for glory and beauty and must be ordained for priestly service.',
          'Linen undergarments cover the priests as they approach the tent or altar, guarding them from guilt and death.',
        ],
        threads: ['priesthood', 'covenant', 'image', 'temple'],
        lenses: ['Grace → Authority', 'Identity → Action', 'Shadow → Reality'],
        scriptureConnections: [
          {
            title: 'A priest represents people before God',
            explanation:
              'Aaron carries Israel’s names on his shoulders and over his heart before the LORD. Hebrews later describes a high priest as one appointed to act on behalf of people in relation to God. Representation is therefore central to priestly service, not an ornamental detail.',
            passages: ['Ex. 28:6–30', 'Heb. 5:1–4'],
          },
          {
            title: 'Israel’s priesthood within its covenant calling',
            explanation:
              'At Sinai, Israel is called a kingdom of priests and holy nation, while Exodus 28 also establishes Aaron’s distinct priestly office within that people. First Peter later applies royal-priesthood language to believers, calling them to offer spiritual sacrifices and proclaim God’s excellencies.',
            passages: ['Ex. 19:5–6', 'Ex. 28:1–5', '1 Pet. 2:4–10'],
          },
          {
            title: 'Consecrated before serving',
            explanation:
              'Exodus joins priestly clothing with consecration and ordination, and Leviticus records these commands being carried out. Aaron’s historical office is genuine service within Israel; he is not merely a visual symbol detached from covenant worship.',
            passages: ['Ex. 28:1–5, 40–43', 'Lev. 8:1–13'],
          },
          {
            title: 'Jesus, the greater High Priest',
            explanation:
              'Hebrews presents Jesus as the great High Priest who has passed through the heavens, sympathizes with human weakness, and permanently intercedes because He lives forever. Aaron’s representative ministry helps readers understand the office, while Jesus’ priesthood surpasses it.',
            passages: ['Ex. 28:9–30', 'Heb. 4:14–16', 'Heb. 7:23–28'],
          },
          {
            title: 'Holiness belongs to priestly service',
            explanation:
              'The inscription “Holy to the LORD” publicly marks Aaron’s consecrated office. Zechariah later imagines that phrase extending even to ordinary objects in a fully holy Jerusalem, broadening the hope that all life will belong to the LORD.',
            passages: ['Ex. 28:36–38', 'Zech. 14:20–21'],
          },
        ],
        whyItMatters:
          'Exodus 28 makes priestly representation visible. Aaron is chosen, clothed, and consecrated to bear Israel’s names before the LORD and to serve in holiness on the people’s behalf. The garments do not create a costume for self-display; their beauty and careful design belong to a God-given office carrying real responsibility. Israel needs mediation because the holy God dwells among a sinful people. Hebrews uses this priestly framework to show why Jesus is the greater and permanent High Priest who represents His people and provides confident access to God.',
        connectedPassages: [
          'Ex. 19:5–6',
          'Lev. 8:1–13',
          'Zech. 14:20–21',
          'Heb. 4:14–16',
          'Heb. 5:1–4',
          'Heb. 7:23–28',
          '1 Pet. 2:4–10',
        ],
        kidSummary:
          'God chose Aaron and his sons to serve as priests near the tabernacle. Aaron wore special clothes with the names of Israel’s tribes on his shoulders and over his heart. He represented the people before God, and his gold headpiece said that he was set apart for the LORD.',
        reflectionQuestions: [
          'Whom does God choose for priestly service, and what does He command skilled workers to make?',
          'Why are the names of Israel placed on Aaron’s shoulders and over his heart?',
          'What does “Holy to the LORD” communicate about Aaron’s office?',
          'How does Hebrews use priestly representation to explain Jesus’ greater and permanent ministry?',
        ],
      },
      29: {
        reference: 'Exodus 29',
        summary:
          'The LORD gives Moses a seven-day process for consecrating Aaron and his sons. They are washed, clothed, anointed, and ordained through offerings involving a bull and two rams. Blood is applied to the altar and to the priests’ right ears, thumbs, and big toes; blood and anointing oil are also sprinkled on them and their garments. Portions are burned, waved, eaten, or placed outside the camp according to God’s command. The altar itself is consecrated, and two lambs must be offered every day at the entrance to the tent. There God will meet Israel, sanctify the sanctuary and priests by His glory, and dwell among the people who will know Him as the LORD who brought them out of Egypt in order to dwell among them.',
        observations: [
          'Aaron and his sons are brought to the tent entrance, washed with water, and clothed in the commanded priestly garments.',
          'Anointing oil is poured on Aaron’s head as part of his consecration.',
          'A bull is offered as a sin offering, with blood applied to the altar and the remains burned outside the camp.',
          'One ram is offered as a burnt offering, wholly burned as a pleasing aroma to the LORD.',
          'Blood from the ordination ram is placed on the priests’ right ears, thumbs, and big toes.',
          'Blood from the altar and anointing oil are sprinkled on Aaron, his sons, and their garments.',
          'Selected portions are presented as a wave offering, and the priests eat the consecration meal at the tent entrance.',
          'The ordination continues for seven days, with daily sin offerings made to consecrate the altar.',
          'Two one-year-old lambs are offered every day, one in the morning and one at twilight, with grain and drink offerings.',
          'God promises to meet and speak with Israel at the tent entrance and to consecrate the place by His glory.',
          'God says He will consecrate the tent, altar, Aaron, and his sons for priestly service.',
          'The LORD will dwell among Israel, and the people will know that He brought them from Egypt so that He might dwell among them.',
        ],
        threads: ['priesthood', 'temple', 'exodus', 'covenant'],
        lenses: ['Presence → Transformation', 'Grace → Authority', 'Shadow → Reality', 'Identity → Action'],
        scriptureConnections: [
          {
            title: 'The commanded ordination is carried out',
            explanation:
              'Leviticus 8 records Moses washing, clothing, anointing, sacrificing for, and ordaining Aaron and his sons according to the LORD’s command. Their ministry begins through God’s provision and consecration, not through self-appointment.',
            passages: ['Ex. 29:1–37', 'Lev. 8:1–36', 'Lev. 9:1–24'],
          },
          {
            title: 'Bondage, redemption, covenant, and presence',
            explanation:
              'God promised to redeem Israel, take them as His people, and be their God. At Sinai He formed them as His covenant people; now He explains that He brought them out in order to dwell among them. Exodus moves beyond escape toward life with the Redeemer.',
            passages: ['Ex. 3:7–12', 'Ex. 6:6–7', 'Ex. 19:3–6', 'Ex. 25:8', 'Ex. 29:45–46'],
          },
          {
            title: 'Glory fills the completed dwelling',
            explanation:
              'Exodus 29 promises that God will meet Israel and sanctify the tent by His glory. At the book’s end, the glory fills the finished tabernacle and the cloud remains with Israel throughout its journeys, bringing the promise to visible fulfillment.',
            passages: ['Ex. 29:42–46', 'Ex. 40:34–38'],
          },
          {
            title: 'Priests need sacrifice and cleansing',
            explanation:
              'Aaron and his sons cannot enter service merely because they have been chosen; washing, sacrifice, blood, anointing, and a seven-day ordination are required. Hebrews observes that former priests were themselves weak and needed sacrifices, then contrasts them with the sinless Son whose priesthood is permanent.',
            passages: ['Ex. 29:1–37', 'Lev. 16:6', 'Heb. 5:1–3', 'Heb. 7:23–28'],
          },
          {
            title: 'God’s dwelling through Christ and toward new creation',
            explanation:
              'John describes the Word dwelling among humanity, Ephesians describes the church growing into a holy temple in Christ, and Revelation announces God’s final dwelling with His people. These texts develop the purpose stated in Exodus: redemption leads into God’s holy presence.',
            passages: ['Ex. 29:45–46', 'John 1:14', 'Eph. 2:19–22', 'Rev. 21:3'],
          },
        ],
        whyItMatters:
          'Exodus 29 explains why priestly consecration matters and where the exodus is going. The holy God graciously supplies washing, clothing, anointing, sacrifice, and mediation so priests may serve and Israel may live around His presence. The blood rituals are not meaningless remnants; within Israel’s covenant worship they address guilt, cleansing, consecration, and access. The chapter’s climax interprets the larger story: the LORD brought Israel out of Egypt so that He might dwell among them. Hebrews later reveals the greater, sinless, and permanent High Priest through whom God’s people draw near.',
        connectedPassages: [
          'Ex. 3:7–12',
          'Ex. 6:6–7',
          'Ex. 19:3–6',
          'Ex. 25:8',
          'Ex. 40:34–38',
          'Lev. 8:1–36',
          'Lev. 16:6',
          'John 1:14',
          'Eph. 2:19–22',
          'Heb. 5:1–3',
          'Heb. 7:23–28',
          'Rev. 21:3',
        ],
        kidSummary:
          'God told Moses how to prepare Aaron and his sons to be priests. They were washed, dressed, anointed, and given sacrifices because serving near the holy God was serious. God promised to meet Israel and live among the people He had rescued from Egypt.',
        reflectionQuestions: [
          'Which actions and offerings consecrate Aaron and his sons for priestly service?',
          'Why are continual sacrifices offered at the entrance to the tent?',
          'How do Exodus 6, 25, and 29 show that redemption moves toward God’s dwelling?',
          'How does Hebrews contrast Aaron’s priesthood with Jesus’ permanent priesthood?',
        ],
      },
      30: {
        reference: 'Exodus 30',
        summary:
          'God gives several instructions that order life and service around His holy presence. A gold-covered altar before the veil holds fragrant incense each morning and evening, but no unauthorized incense or other offering may be placed on it; annual atonement is made on its horns. During a census, each Israelite gives the same half-shekel ransom for service at the tent, guarding the people from plague and making atonement. A bronze basin provides water so priests wash before entering the tent or approaching the altar. God also gives unique recipes for holy anointing oil and incense and forbids copying them for common use. Continual ministry, ransom, cleansing, and consecration distinguish what belongs to God from ordinary use.',
        observations: [
          'The incense altar is made of acacia wood, covered with gold, and placed before the veil near the ark and mercy seat.',
          'Aaron burns fragrant incense on the altar every morning and at twilight when he tends the lamps.',
          'Unauthorized incense, burnt offerings, grain offerings, and drink offerings must not be placed on this altar.',
          'Atonement is made on the altar’s horns once a year with blood from the atoning sin offering.',
          'When Israel is counted, each person gives the same half-shekel ransom to the LORD, whether rich or poor.',
          'The census money supports the service of the tent of meeting and serves as a memorial before the LORD.',
          'A bronze basin stands between the tent and altar so Aaron and his sons can wash their hands and feet before sacred service.',
          'The priests must wash before entering the tent or approaching the altar, and failure to do so brings death.',
          'The holy anointing oil is made from commanded spices and olive oil and consecrates the tent, furnishings, altar, basin, and priests.',
          'The holy oil must not be poured on ordinary people or copied for ordinary use.',
          'A commanded blend of spices makes pure and holy incense to be placed before the testimony.',
          'The incense recipe must not be made for personal enjoyment; it is holy to the LORD.',
        ],
        threads: ['priesthood', 'temple', 'covenant'],
        lenses: ['Truth → Practice', 'Grace → Authority', 'Presence → Transformation'],
        scriptureConnections: [
          {
            title: 'Incense and continual priestly ministry',
            explanation:
              'Exodus commands fragrant incense during the priests’ morning and evening lamp service. Luke shows a priest offering incense while worshipers pray outside. The scenes connect incense with the setting of prayer, although Exodus 30 does not itself define incense as prayer.',
            passages: ['Ex. 30:1–10', 'Luke 1:8–13'],
          },
          {
            title: 'Incense later pictures the prayers of God’s people',
            explanation:
              'The psalmist asks that prayer be counted as incense, and Revelation explicitly presents incense with the prayers of the saints. Later Scripture develops this association; it should not be read backward as though every ingredient in Exodus carries a separate symbolic meaning.',
            passages: ['Ex. 30:7–8', 'Ps. 141:1–2', 'Rev. 5:8', 'Rev. 8:3–4'],
          },
          {
            title: 'The census ransom remembers lives belonging to God',
            explanation:
              'Each counted Israelite gives the same ransom, and the money supports the tent while serving as a memorial before the LORD. The text places rich and poor on equal footing and connects numbering the covenant people with accountability to the God who redeemed them.',
            passages: ['Ex. 30:11–16', 'Ex. 38:25–28'],
          },
          {
            title: 'Priests wash before sacred service',
            explanation:
              'The basin stands between altar and tent because priests must wash before approaching either place of ministry. On the Day of Atonement, Leviticus again commands priestly bathing and washing, reinforcing bodily cleansing as part of ordered holy service.',
            passages: ['Ex. 30:17–21', 'Ex. 40:30–32', 'Lev. 16:4, 23–24'],
          },
          {
            title: 'Earthly regulations and greater cleansing',
            explanation:
              'Hebrews groups washings and other sanctuary regulations within the old-covenant system, then contrasts external purification with Christ cleansing the conscience for service to the living God. The earlier practices remain real covenant provisions while pointing beyond their limits.',
            passages: ['Ex. 30:17–21', 'Heb. 9:6–14'],
          },
        ],
        whyItMatters:
          'Exodus 30 unifies several instructions through one concern: life around God’s presence must be cleansed, consecrated, and ordered by His holiness. Incense belongs to continual priestly ministry, the census ransom acknowledges lives before the Redeemer, washing prepares priests for service, and unique oil and incense distinguish sacred use from common use. Israel cannot turn holy gifts into ordinary possessions or approach worship carelessly. Later Scripture connects incense with prayer and contrasts old-covenant washings with the deeper cleansing Christ provides, while respecting what these commands meant in Israel.',
        connectedPassages: [
          'Ex. 38:25–28',
          'Ex. 40:30–32',
          'Lev. 16:4, 23–24',
          'Ps. 141:1–2',
          'Luke 1:8–13',
          'Heb. 9:6–14',
          'Rev. 5:8',
          'Rev. 8:3–4',
        ],
        kidSummary:
          'God taught the priests to burn special incense, wash before serving, and use holy oil only for God’s work. Every Israelite also gave the same small offering when the people were counted. These commands taught Israel that worship near God’s presence must be clean, careful, and set apart for Him.',
        reflectionQuestions: [
          'How do the incense altar, census ransom, basin, oil, and incense each order life around God’s presence?',
          'What rules distinguish the holy oil and incense from things used in ordinary life?',
          'What does Exodus say about incense, and how do Psalms, Luke, and Revelation later connect it with prayer?',
          'How does Hebrews use old-covenant washings to explain the greater cleansing Christ provides?',
        ],
      },
      31: {
        reference: 'Exodus 31',
        summary:
          'The LORD calls Bezalel by name and fills him with the Spirit of God, wisdom, understanding, knowledge, and craftsmanship to design and make the sanctuary and its furnishings. God appoints Oholiab to work with him and gives skill to other craftspeople so they can carry out everything He commanded. The LORD then repeats the Sabbath command as a sign of His covenant with Israel: even the holy work of constructing the tabernacle must stop on the seventh day because the LORD made heaven and earth in six days and rested on the seventh. The chapter closes with God giving Moses the two tablets of testimony, stone tablets written by the finger of God. God calls and equips the workers, commands their rest, and retains authority over the covenant work and people.',
        observations: [
          'The LORD calls Bezalel son of Uri, son of Hur, from the tribe of Judah, by name.',
          'God fills Bezalel with the Spirit of God, wisdom, understanding, knowledge, and all kinds of craftsmanship.',
          'Bezalel is equipped to make artistic designs in metals, cut and set stones, carve wood, and practice many crafts.',
          'God appoints Oholiab from the tribe of Dan to work with Bezalel.',
          'God gives ability to other skilled workers so they can make everything He has commanded.',
          'Their work includes the tent, ark, mercy seat, furnishings, altars, basin, priestly garments, anointing oil, and incense.',
          'Israel must keep the Sabbath as a sign throughout the generations that the LORD sanctifies the people.',
          'The Sabbath is holy, and deliberate profaning of it brings the covenant’s severe judgment.',
          'Even the work of building God’s sanctuary does not override the command to rest on the seventh day.',
          'The Sabbath pattern is grounded in God’s six days of making heaven and earth and His rest on the seventh day.',
          'God finishes speaking with Moses and gives him two stone tablets of testimony.',
          'The tablets are written by the finger of God.',
        ],
        threads: ['creation', 'temple', 'covenant', 'image'],
        lenses: ['Identity → Action', 'Truth → Practice', 'Presence → Transformation'],
        scriptureConnections: [
          {
            title: 'The Spirit equips skillful sanctuary work',
            explanation:
              'Exodus explicitly says God fills Bezalel with His Spirit and with wisdom, understanding, knowledge, and craftsmanship for the sanctuary. This is more than a general claim that art is valuable: God equips a named worker with varied abilities to carry out His revealed purpose.',
            passages: ['Ex. 31:1–11', 'Ex. 35:30–35', 'Ex. 36:1–2'],
          },
          {
            title: 'Many gifts serve work God assigns',
            explanation:
              'Bezalel, Oholiab, and other skilled workers receive distinct but coordinated ability. First Corinthians later teaches that the one Spirit distributes varied gifts for the common good. The covenant settings differ, so Bezalel should not be flattened into a complete model of every New Testament spiritual gift.',
            passages: ['Ex. 31:1–11', '1 Cor. 12:4–11'],
          },
          {
            title: 'Sanctuary work remains under Sabbath',
            explanation:
              'The Sabbath command follows immediately after the sanctuary commission, showing that sacred work does not authorize endless labor. Exodus 35 repeats Sabbath before construction begins. God’s workers remain covenant people who receive His holy rhythm of work and rest.',
            passages: ['Ex. 31:12–17', 'Ex. 35:1–3'],
          },
          {
            title: 'Sabbath remembers creation and redemption',
            explanation:
              'Exodus grounds Sabbath in God’s creation pattern, as the Ten Commandments already did. Deuteronomy also connects Sabbath with Israel’s release from slavery. Rest therefore remembers both the Creator’s order and the Redeemer’s freedom from ceaseless bondage.',
            passages: ['Gen. 2:1–3', 'Ex. 20:8–11', 'Ex. 31:12–17', 'Deut. 5:12–15'],
          },
          {
            title: 'God’s authoritative covenant word',
            explanation:
              'The tablets written by God close the mountain instructions and keep sanctuary work under the covenant word. Exodus soon records Israel breaking that covenant even before Moses descends, heightening the contrast between God’s faithful command and human rebellion.',
            passages: ['Ex. 31:18', 'Ex. 24:12', 'Ex. 32:1–19'],
          },
          {
            title: 'God’s promised rest reaches beyond one day',
            explanation:
              'Hebrews looks back to God’s seventh-day rest and Israel’s history to speak of a rest that remains for God’s people. It develops the creation-and-Sabbath pattern into a call for persevering faith without erasing the Sabbath’s covenant role in Exodus.',
            passages: ['Ex. 31:12–17', 'Heb. 4:1–11'],
          },
        ],
        whyItMatters:
          'Exodus 31 brings Spirit-given work, covenant rest, and God’s word together. The tabernacle will be made through real human skill, yet God calls the workers, gives wisdom, and defines the work. Their craftsmanship serves His dwelling rather than self-glory. Just as importantly, even sanctuary construction stops for Sabbath: identity as God’s sanctified covenant people governs productivity. The tablets finally show that creativity and worship remain accountable to divine revelation. God calls, equips, commands work, gives rest, and speaks with authority.',
        connectedPassages: [
          'Gen. 2:1–3',
          'Ex. 20:8–11',
          'Ex. 24:12',
          'Ex. 32:1–19',
          'Ex. 35:1–3, 30–35',
          'Ex. 36:1–2',
          'Deut. 5:12–15',
          '1 Cor. 12:4–11',
          'Heb. 4:1–11',
        ],
        kidSummary:
          'God gave Bezalel, Oholiab, and other workers wisdom and skill to build the tabernacle. Their important work still had to stop on the Sabbath because God’s people needed His gift of rest. Then God gave Moses the stone tablets written by His own finger.',
        reflectionQuestions: [
          'What abilities does God give Bezalel, and what work are those abilities meant to serve?',
          'Why does the Sabbath command appear immediately after the instructions about sanctuary workers?',
          'How do creation and redemption both help explain Sabbath rest?',
          'What do the tablets written by God show about the authority governing Israel’s worship and work?',
        ],
      },
    },
  },
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
  jonah: {
    id: 'jonah',
    title: 'Jonah',
    testament: 'Old Testament',
    genre: 'Minor Prophet / Prophetic Narrative',
    era: 'Divided Kingdom',
    historicalSetting:
      'Jonah son of Amittai prophesied during the reign of Jeroboam II; the book tells of the Lord sending him to the great Assyrian city of Nineveh.',
    chapterCount: 4,
    chapters: {
      1: {
        reference: 'Jonah 1',
        summary:
          'The word of the Lord sends Jonah to speak against Nineveh, but Jonah boards a ship for Tarshish in an attempt to flee from the Lord’s commission and covenantal presence. The Lord hurls a great wind on the sea, and the sailors move from fear of the storm and appeals to their own gods to fearing the Lord, calling on him, and offering sacrifices and vows. At Jonah’s direction they cast him into the sea, which becomes calm. The chapter closes with the Lord appointing a great fish to swallow Jonah, who remains inside it for three days and three nights.',
        observations: [
          'The Lord commands Jonah to go to Nineveh because the city’s evil has come up before him.',
          'Jonah travels in the opposite direction and seeks to flee from the Lord’s commission and covenantal presence; the text does not say that he believes he can escape God’s literal omnipresence.',
          'The Lord hurls a great wind on the sea, and the storm threatens to break up the ship.',
          'The sailors cry to their gods, throw cargo overboard, question Jonah, and reluctantly follow his instruction to cast him into the sea.',
          'Jonah identifies the Lord as the God of heaven who made the sea and the dry land, even while his actions resist that God’s command.',
          'After the sea becomes calm, the sailors fear the Lord greatly, offer a sacrifice, and make vows.',
          'The Lord appoints a great fish to swallow Jonah, and Jonah is inside it for three days and three nights.',
        ],
        threads: ['reign', 'creation', 'covenant'],
        lenses: ['Rescue → Mission', 'Grace → Authority', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'The Lord rules the stormy sea',
            explanation:
              'These passages appear connected because both Jonah 1 and Psalm 107 describe desperate sailors, prayer amid a storm, and a sea made calm. Jonah adds a sharp contrast: the prophet is fleeing his commission while the foreign sailors increasingly respond to the Lord with fear.',
            passages: ['Jonah 1:4–16', 'Ps. 107:23–30'],
          },
          {
            title: 'The Creator appoints a great sea creature',
            explanation:
              'Genesis presents the great sea creatures as beings God created, not rival powers. This pattern develops further in Jonah as wind, sea, and the appointed fish all remain under the Lord’s rule.',
            passages: ['Jonah 1:4, 15, 17', 'Gen. 1:20–21'],
          },
          {
            title: 'Jesus calms the sea',
            explanation:
              'These passages appear connected because Jonah and the Gospel accounts each place a sleeping man, frightened sailors, and a suddenly calmed storm on the sea. The differences matter: Jonah’s disobedience is bound up with his storm, while Jesus rebukes the wind and waves with authority and challenges his disciples’ fear.',
            passages: ['Jonah 1:4–16', 'Mark 4:35–41', 'Luke 8:22–25'],
          },
          {
            title: 'A messenger sent to those who need to hear',
            explanation:
              'Romans asks how people will call on the Lord without hearing and how they will hear without someone preaching. The connection clarifies the missionary shape of Jonah’s commission without excusing his resistance or treating Nineveh’s violence as unimportant.',
            passages: ['Jonah 1:1–3', 'Rom. 10:13–15'],
          },
        ],
        whyItMatters:
          'Jonah 1 introduces a prophet who confesses the Creator’s rule but resists the mission he has been given. The Lord’s sovereignty extends over the storm, the sea, and the fish, yet the chapter also highlights human responses: the sailors move toward reverent fear while Jonah must be rescued in the midst of disobedience. The fish is not the story’s main character; it is one appointed means by which the Lord preserves his resistant servant and continues his purpose of sending a warning to Nineveh.',
        connectedPassages: [
          'Gen. 1:20–21',
          'Josh. 1:9',
          'Ps. 107:23–30',
          'Mark 4:35–41',
          'Luke 8:22–25',
          'Rom. 10:13–15',
        ],
        kidSummary:
          'God told Jonah to take his message to Nineveh, but Jonah sailed the other way. God ruled the wind and sea, and the sailors learned to fear him. God appointed a great fish to keep Jonah alive because God was not finished with Jonah or his mission.',
        reflectionQuestions: [
          'What does the chapter show about the Lord’s rule over the sea, the storm, and the fish?',
          'How do Jonah’s actions contrast with the sailors’ growing response to the Lord?',
          'How do Psalm 107 and the Gospel storm accounts help you compare the Bible’s sea-rescue stories?',
          'Why does God’s preservation of Jonah matter for understanding both mercy and mission?',
        ],
      },
      2: {
        reference: 'Jonah 2',
        summary:
          'From inside the fish, Jonah prays to the Lord. He describes distress, descent toward the realm of death, and confinement beneath the waters, yet he also says that the Lord heard him, brought his life up from the pit, and received his prayer. His prayer uses language drawn from or closely resembling several Psalms. Jonah remembers the Lord, rejects worthless idols, promises thankful sacrifice, and confesses that salvation belongs to the Lord. Then the Lord commands the fish, and it releases Jonah onto dry land.',
        observations: [
          'Jonah prays to the Lord from inside the fish and says that the Lord answered his cry of distress.',
          'The prayer describes descent through images of deep water, engulfing waves, weeds, the roots of the mountains, the pit, and the realm of death.',
          'Jonah says that when his life was fainting away, he remembered the Lord and his prayer reached God’s holy temple.',
          'Jonah’s prayer contains language drawn from or closely resembling the Psalms, although not every phrase must be treated as a certain direct quotation.',
          'Jonah contrasts those who cling to worthless idols with his own promise to sacrifice with thanksgiving and fulfill his vows.',
          'Jonah declares that salvation belongs to the Lord.',
          'The Lord commands the fish, and it releases Jonah onto dry land.',
        ],
        threads: ['exodus', 'reign', 'covenant'],
        lenses: ['Rescue → Mission', 'Presence → Transformation', 'Promise → Fulfillment'],
        scriptureConnections: [
          {
            title: 'A prayer shaped by the language of the Psalms',
            explanation:
              'These passages appear connected because Jonah’s prayer closely resembles biblical laments and thanksgivings about crying from distress, sinking in deep waters, remembering God, and being lifted from death. The parallels show Jonah praying with Israel’s worship language without requiring every similarity to be a provable direct quotation.',
            passages: ['Jonah 2:2–9', 'Ps. 18:4–6', 'Ps. 30:2–3', 'Ps. 42:7', 'Ps. 69:1–2', 'Ps. 120:1'],
          },
          {
            title: 'The Lord brings life up from the pit',
            explanation:
              'Hannah praises the Lord as the one who brings down to the grave and raises up. Jonah likewise describes his descent toward death and credits his deliverance entirely to the Lord, preparing for his confession that salvation belongs to the Lord.',
            passages: ['Jonah 2:5–9', '1 Sam. 2:1–10'],
          },
          {
            title: 'Jesus identifies Jonah as a sign',
            explanation:
              'Observation: Jonah was in the fish for three days and three nights, and Jesus identifies Jonah as a sign while speaking of his own burial and resurrection. Jesus also says Nineveh’s people will rise in judgment because they repented at Jonah’s preaching. Interpretation: Jonah’s deliverance functions as a pattern that Jesus himself relates to his death and resurrection. Jesus is greater than Jonah: he obeys the Father’s mission, gives himself willingly, rises from death, and brings good news to the nations.',
            passages: ['Jonah 1:17–2:10', 'Matt. 12:38–41', 'Luke 11:29–32'],
          },
          {
            title: 'Saved when unable to save oneself',
            explanation:
              'Ephesians describes people as dead in sins and then announces God’s mercy in making them alive with Christ. The settings are different, but these passages appear connected because both make divine mercy, rather than human self-rescue, the ground of deliverance.',
            passages: ['Jonah 2:6, 9', 'Eph. 2:1–5'],
          },
        ],
        whyItMatters:
          'Jonah 2 centers deliverance on the Lord, who hears, preserves, commands creation, and returns Jonah to dry land. Jonah rightly receives mercy with gratitude, but the rest of the book will expose a tension: the prophet who celebrates saving mercy for himself resists that mercy when it reaches others. Jesus later governs the book’s central Christ connection by identifying Jonah’s three days as a sign related to his own death and resurrection, while declaring himself greater than Jonah.',
        connectedPassages: [
          '1 Sam. 2:1–10',
          'Ps. 18:4–6',
          'Ps. 30:2–3',
          'Ps. 42:7',
          'Ps. 69:1–2',
          'Ps. 120:1',
          'Matt. 12:38–41',
          'Luke 11:29–32',
          'Eph. 2:1–5',
        ],
        kidSummary:
          'Jonah prayed from inside the fish, and God heard him. Jonah knew he could not rescue himself, so he thanked God and said that salvation belongs to the Lord. Jesus is greater than Jonah: Jesus obeyed the Father, died, and rose again to bring good news to the world.',
        reflectionQuestions: [
          'What words and pictures does Jonah use to describe his danger and God’s rescue?',
          'What tension appears between Jonah’s gratitude for mercy here and his attitude later in the book?',
          'How does the language of the Psalms help explain Jonah’s prayer?',
          'According to Matthew 12 and Luke 11, how is Jesus both connected to Jonah and greater than Jonah?',
        ],
      },
      3: {
        reference: 'Jonah 3',
        summary:
          'The word of the Lord comes to Jonah a second time and again sends him to Nineveh. Jonah goes and announces that the city will be overthrown in forty days. From the people to the king, Nineveh responds with belief, fasting, sackcloth, humility, and a decree calling everyone to turn from evil and violence. The king expresses hope, not presumption, that God may relent. God sees what they do—specifically, that they turn from their evil way—and does not bring the announced disaster upon them.',
        observations: [
          'The word of the Lord comes to Jonah a second time with the command to go to Nineveh and proclaim God’s message.',
          'Jonah goes to Nineveh and announces that the city will be overthrown in forty days.',
          'The people of Nineveh believe God, proclaim a fast, and put on sackcloth from the greatest to the least.',
          'The king leaves his throne, removes his robe, covers himself with sackcloth, and sits in ashes.',
          'The royal decree calls people to cry mightily to God and turn from evil and violence.',
          'The king does not presume upon mercy but asks who knows whether God may turn and relent.',
          'God sees their actions and their turning from evil, and he does not bring the announced disaster upon them.',
        ],
        threads: ['reign', 'covenant', 'creation'],
        lenses: ['Rescue → Mission', 'Grace → Authority', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'Prophetic warnings and responsive mercy',
            explanation:
              'Jeremiah explains that when God announces judgment against a nation, its turning from evil can be met with God relenting from the disaster warned against. Jonah 3 presents that pattern in narrative form. God does not discover new information or change unpredictably; he responds consistently with his revealed character and with the purpose of prophetic warning.',
            passages: ['Jonah 3:4–10', 'Jer. 18:7–10'],
          },
          {
            title: 'Turn to the compassionate Lord',
            explanation:
              'These passages appear connected because Joel calls for heartfelt return and names God as gracious and compassionate, asking who knows whether he may turn and relent. Nineveh’s king uses similar humble, hopeful language while commanding the city to turn from violence.',
            passages: ['Jonah 3:8–10', 'Joel 2:12–14'],
          },
          {
            title: 'God sees turning, not ceremony alone',
            explanation:
              'The chapter mentions fasting and sackcloth, but it specifically says that God sees the Ninevites turn from their evil way. Ezekiel likewise says God takes no pleasure in the death of the wicked but calls the wicked person to turn and live, and Romans says God’s kindness leads toward repentance.',
            passages: ['Jonah 3:5–10', 'Ezek. 18:21–23', 'Rom. 2:4'],
          },
          {
            title: 'Nineveh’s response and the greater messenger',
            explanation:
              'The New Testament later connects this event with Jesus when he says the people of Nineveh repented at Jonah’s preaching and will rise in judgment against an unresponsive generation. The contrast is striking: a brief warning brought widespread response in a violent Gentile city, while Jesus, who is greater than Jonah, was resisted by many who heard him.',
            passages: ['Jonah 3:4–10', 'Matt. 12:41', 'Luke 11:32'],
          },
          {
            title: 'Mercy extends to Gentiles',
            explanation:
              'This pattern develops further in Acts 10 as God sends Peter across a boundary he is reluctant to cross and grants repentance and the Holy Spirit to Gentiles. The events are not identical, but both accounts confront God’s servants with divine mercy reaching people beyond Israel.',
            passages: ['Jonah 3:1–10', 'Acts 10:1–48'],
          },
        ],
        whyItMatters:
          'Jonah 3 displays God’s persistent mission, a second commission for a failed messenger, genuine turning in a violent Gentile city, and mercy toward undeserving people. God’s relenting is neither ignorance nor instability: the announced warning achieves its proper end when Nineveh turns from evil, consistent with the prophetic pattern explained in Jeremiah 18. Jesus later emphasizes Nineveh’s repentance and identifies himself as the greater messenger, pressing hearers to respond to God’s word rather than rely on privilege.',
        connectedPassages: [
          'Jer. 18:7–10',
          'Joel 2:12–14',
          'Ezek. 18:21–23',
          'Matt. 12:41',
          'Luke 11:32',
          'Acts 10:1–48',
          'Rom. 2:4',
        ],
        kidSummary:
          'God sent Jonah to Nineveh again, and this time Jonah went. The people listened to God’s warning, humbled themselves, and turned away from violence. God saw what they did and showed mercy, because he cares about people who do not deserve his kindness.',
        reflectionQuestions: [
          'How do the people and king of Nineveh respond to God’s warning?',
          'What do their actions reveal about repentance, and what does God’s response reveal about his character?',
          'How do Jeremiah 18 and Joel 2 help explain God’s relenting from the announced disaster?',
          'Why does Jesus compare his hearers with Nineveh and call himself greater than Jonah?',
        ],
      },
      4: {
        reference: 'Jonah 4',
        summary:
          'Jonah is angry that God has spared Nineveh. He admits that he fled because he knew the Lord is gracious, compassionate, slow to anger, rich in faithful love, and ready to relent from disaster. Outside the city, Jonah waits to see what will happen. God appoints a plant to shade him, a worm to destroy the plant, and a scorching east wind, then questions Jonah about his anger. Jonah pities the plant, though he did not make or grow it. God closes the book by declaring his concern for Nineveh, its more than 120,000 people who do not know their right hand from their left, and its many animals. Jonah’s response is not recorded.',
        observations: [
          'Jonah is greatly displeased and angry because God does not destroy Nineveh.',
          'Jonah says he fled toward Tarshish because he knew the Lord is gracious, compassionate, slow to anger, rich in faithful love, and ready to relent from disaster.',
          'The Lord repeatedly asks Jonah whether his anger is right.',
          'Jonah sits east of Nineveh under a shelter and waits to see what will happen to the city.',
          'God appoints a plant to give shade, a worm to attack it, and a scorching east wind that leaves Jonah faint.',
          'Jonah is glad for the plant and then angry enough to die when it is gone, although he neither worked for it nor made it grow.',
          'God contrasts Jonah’s pity for the short-lived plant with his own concern for Nineveh’s people and animals.',
          'The phrase about more than 120,000 people not knowing their right hand from their left may describe young children or, more broadly, people lacking moral discernment; the text does not settle the question.',
          'The book ends with God’s question and does not record Jonah’s answer.',
        ],
        threads: ['reign', 'creation', 'image', 'covenant'],
        lenses: ['Grace → Authority', 'Identity → Action', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'Jonah knows the Lord’s revealed character',
            explanation:
              'Jonah’s confession draws on the character God proclaims after Israel’s sin with the golden calf. Psalm 103 celebrates this same compassion toward God’s people, and Joel appeals to it while calling for repentance. Jonah’s problem is not ignorance of God’s mercy but anger that such mercy reaches Nineveh.',
            passages: ['Jonah 4:2', 'Ex. 34:6–7', 'Ps. 103:8–13', 'Joel 2:13'],
          },
          {
            title: 'God questions resentment toward mercy',
            explanation:
              'These passages appear connected because Jonah and the older brother in Jesus’ parable both resent compassion shown to people they judge unworthy. Luke 15 does not erase the differences between a prophet, a parable, and a violent city, but its unresolved appeal to join the father’s joy sharpens Jonah’s unanswered ending.',
            passages: ['Jonah 4:1–11', 'Luke 15:25–32'],
          },
          {
            title: 'Love beyond familiar boundaries',
            explanation:
              'Jesus commands love for enemies on the basis of the Father’s generous character. Jonah 4 exposes a heart that wants divine favor for itself but judgment for an enemy, inviting readers to examine whether their concern reflects God’s compassion.',
            passages: ['Jonah 4:1–11', 'Matt. 5:43–48'],
          },
          {
            title: 'God’s gift to Gentiles defended',
            explanation:
              'This pattern develops further in Acts 11 when some believers criticize Peter’s welcome of Gentiles and he recounts God’s action. Their final response—glorifying God for granting repentance—offers a contrast to Jonah’s anger at Nineveh’s mercy.',
            passages: ['Jonah 4:1–4', 'Acts 11:1–18'],
          },
          {
            title: 'The mercy of the sovereign God',
            explanation:
              'Romans 9 insists that God’s mercy is not injustice and that the Creator is not answerable to the creature. Jonah 4 presents that sovereignty through patient questions: God teaches rather than merely silences Jonah, while directing attention to his rightful compassion for the city he made.',
            passages: ['Jonah 4:4–11', 'Rom. 9:14–24'],
          },
        ],
        whyItMatters:
          'Jonah 4 reveals that the book’s deepest conflict is not between Jonah and a fish but between Jonah’s narrow desire for mercy and the Lord’s compassionate mission. God rules the plant, worm, and wind, yet uses that rule to question and teach his prophet. His concern embraces a morally confused and violent city, including its animals, without calling its evil good. Because Jonah’s reply is withheld, God’s final question reaches the reader: will we receive mercy for ourselves while resenting it for others, or will our concern be reshaped by God’s compassion for the nations?',
        connectedPassages: [
          'Ex. 34:6–7',
          'Ps. 103:8–13',
          'Joel 2:13',
          'Matt. 5:43–48',
          'Luke 15:25–32',
          'Acts 11:1–18',
          'Rom. 9:14–24',
        ],
        kidSummary:
          'Jonah was angry when God showed mercy to Nineveh. God used a plant, a worm, and the wind to teach Jonah that people matter more than Jonah’s shade. God wants his people to care about others and to share his compassion, even when mercy is hard for them to understand.',
        reflectionQuestions: [
          'What does Jonah say he knows about God, and why does that make him angry?',
          'What do Jonah’s concern for the plant and God’s concern for Nineveh reveal about their different priorities?',
          'How do Exodus 34 and Luke 15 deepen the chapter’s picture of compassion and resentment?',
          'Why does the book’s unanswered final question matter for God’s people and his mission to the nations?',
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
  phlm: {
    id: 'phlm',
    title: 'Philemon',
    testament: 'New Testament',
    genre: 'New Testament Letter / Pauline Epistle',
    era: 'Early Church',
    historicalSetting:
      'Paul writes from imprisonment to Philemon concerning Onesimus, an enslaved man who has become Paul’s spiritual child and is now returning to Philemon.',
    chapterCount: 1,
    chapters: {
      1: {
        reference: 'Philemon 1',
        summary:
          'Paul writes from imprisonment to Philemon and the church meeting in his house about Onesimus, an enslaved man who has become like a son to Paul in the faith. Although Paul says he could command what is required, he appeals on the basis of love. He sends Onesimus back, asks Philemon to receive him no longer merely as a slave but as a beloved brother, and offers to repay anything Onesimus owes. The appeal presses shared faith into a difficult relationship, calling for authority, identity, forgiveness, welcome, and Christian partnership to be reshaped by the gospel.',
        observations: [
          'Paul identifies himself as a prisoner of Christ Jesus and names Timothy as a brother.',
          'The letter is addressed to Philemon, Apphia, Archippus, and the church in Philemon’s house.',
          'Paul begins by thanking God for Philemon’s love and faith toward the Lord Jesus and all the saints.',
          'Paul prays that Philemon’s shared faith will become effective through knowing the good believers have in Christ.',
          'Paul says he has enough confidence in Christ to command what is required, but chooses instead to appeal on the basis of love.',
          'Paul calls Onesimus his child, whose father he became while imprisoned.',
          'Paul uses a wordplay about Onesimus being formerly useless to Philemon but now useful to both Philemon and Paul; the name Onesimus likely carried the sense of “useful.”',
          'Paul says that in sending Onesimus back he is sending his own heart.',
          'Paul wanted to keep Onesimus with him but refused to do so without Philemon’s consent.',
          'Paul cautiously suggests that Onesimus may have been separated from Philemon for a time so that Philemon could receive him back forever.',
          'Paul asks Philemon to receive Onesimus no longer merely as a slave but as a beloved brother, both humanly and in the Lord.',
          'Paul asks Philemon to receive Onesimus as he would receive Paul.',
          'Paul offers to repay anything Onesimus has wronged Philemon in or owes him, without specifying exactly what happened.',
          'Paul expresses confidence that Philemon will obey and do even more than Paul says.',
          'The letter closes by naming Epaphras, Mark, Aristarchus, Demas, and Luke within a network of shared suffering and ministry.',
        ],
        threads: ['image', 'covenant', 'reign', 'creation'],
        lenses: ['Identity → Action', 'Truth → Practice', 'Grace → Authority', 'Presence → Transformation'],
        scriptureConnections: [
          {
            title: 'A new way of seeing one another',
            explanation:
              'Paul asks Philemon to see Onesimus through a gospel-shaped identity rather than reduce him to social status or possible past failure. Second Corinthians describes no longer regarding people merely according to ordinary human categories, while Galatians and Colossians declare believers’ unity and equal standing in Christ. Those texts do not claim that every first-century social structure vanished immediately, but they place strong pressure against treating a fellow believer as inferior.',
            passages: ['Philem. 15–16', '2 Cor. 5:16–17', 'Gal. 3:26–29', 'Col. 3:11'],
          },
          {
            title: 'Reconciliation with a real cost',
            explanation:
              'Paul asks Philemon to welcome Onesimus as he would welcome Paul and to charge Paul with any debt. This concrete mediation resembles the gospel-shaped pattern of reconciliation described in Romans and 2 Corinthians, but the letter does not present Paul as a direct equivalent to Christ. Jesus’ parables about welcome and forgiven debt also help readers consider the costly mercy Paul requests.',
            passages: ['Philem. 17–19', 'Luke 15:11–24', 'Matt. 18:21–35', 'Rom. 5:6–11', '2 Cor. 5:18–21'],
          },
          {
            title: 'Authority shaped by Christlike love',
            explanation:
              'Paul acknowledges that he could command Philemon, yet chooses an appeal grounded in love and shared relationship. Jesus contrasts domineering authority with servant leadership, and Philippians presents Christ’s self-giving humility as the pattern for believers’ life together.',
            passages: ['Philem. 8–14', 'Mark 10:42–45', 'John 13:34–35', 'Phil. 2:1–11'],
          },
          {
            title: 'One body and a new household',
            explanation:
              'Philemon is addressed within a house church, and Paul’s request makes Onesimus’s welcome a concern within shared Christian life rather than a merely private favor. First Corinthians describes believers as one interdependent body, and Ephesians describes Christ forming a reconciled people and household from those once divided.',
            passages: ['Philem. 1–2, 16–17', '1 Cor. 12:12–27', 'Eph. 2:11–22', 'Eph. 4:1–6'],
          },
          {
            title: 'Faith changes relationships marked by slavery',
            explanation:
              'Philemon does not give a full political treatment of slavery, yet its demand that Onesimus be received as a beloved brother places serious pressure on the old relationship. Other New Testament household instructions address enslaved people and masters directly, condemning partiality and reminding masters that they too answer to the Lord. Readers should examine both the transforming claim of brotherhood and the continuing historical tension.',
            passages: ['Philem. 15–16', 'Eph. 6:5–9', 'Col. 3:22–4:1', '1 Tim. 6:1–2'],
          },
        ],
        whyItMatters:
          'Philemon gives a small, concrete picture of what gospel truth looks like inside a difficult and unequal relationship. Christian doctrine changes how people are seen: Onesimus is not reduced to being enslaved or to an unexplained past wrong, but is named as Paul’s child and Philemon’s beloved brother. Christian authority is called to reflect Christ’s self-giving love, and reconciliation may require return, truth, forgiveness, costly welcome, and the bearing of real debt. Paul asks Philemon not merely to agree with the gospel but to embody it toward Onesimus before the gathered church. Paul’s offer to bear any debt and his request that Onesimus be welcomed as Paul would be welcomed form a gospel-shaped echo of substitution and reconciliation, without making Paul a direct equivalent to Christ.',
        connectedPassages: [
          'Luke 15:11–24',
          'Mark 10:42–45',
          'John 13:34–35',
          'Rom. 5:6–11',
          '1 Cor. 12:12–27',
          '2 Cor. 5:16–21',
          'Gal. 3:26–29',
          'Eph. 2:11–22',
          'Col. 3:11',
          'Phil. 2:1–11',
        ],
        kidSummary:
          'Paul wrote to his friend Philemon about a man named Onesimus. In that time, Onesimus was enslaved and treated as someone owned by Philemon. Onesimus had become a Christian, and Paul loved him like a son. Paul asked Philemon not to see Onesimus only by his old mistakes or low position, but to welcome him as a brother. Paul even offered to pay anything Onesimus owed. The letter shows that Jesus changes the way his people treat one another.',
        reflectionQuestions: [
          'Why does Paul appeal to Philemon through love instead of beginning with a command?',
          'Which new words and relationships does Paul use to describe Onesimus?',
          'What does Paul offer to do if Onesimus has wronged Philemon or owes him anything?',
          'How does the gospel change the way Philemon is being asked to receive Onesimus?',
        ],
      },
    },
  },
  james: {
    id: 'james',
    title: 'James',
    testament: 'New Testament',
    genre: 'New Testament Epistle / General Epistle',
    era: 'Early Church',
    historicalSetting:
      'James identifies himself as a servant of God and of the Lord Jesus Christ and writes to the twelve tribes in the Dispersion, addressing scattered believers facing trials, economic divisions, and pressures within community life.',
    chapterCount: 5,
    chapters: {
      1: {
        reference: 'James 1',
        summary:
          'James greets the twelve tribes in the Dispersion and calls believers to view trials as occasions through which tested faith produces steadfastness and maturity. Those who lack wisdom should ask the generous God in faith rather than live with divided allegiance. James contrasts the lowly and rich, explains that temptation comes from disordered human desire rather than from God, and names God as the unchanging giver of every good gift who gives new birth through the word of truth. He then joins humble reception of the implanted word with being quick to hear, slow to speak, slow to anger, and ready to do what the word says. True worship includes bridled speech, care for orphans and widows, and an unstained life.',
        observations: [
          'James addresses the twelve tribes in the Dispersion and identifies himself as a servant of God and of the Lord Jesus Christ.',
          'Trials test faith, produce steadfastness, and can lead toward maturity when steadfastness completes its work.',
          'God gives wisdom generously and without reproach to those who ask, while the doubting, double-minded person is unstable.',
          'The lowly believer is told to boast in exaltation and the rich in humiliation because riches pass away like a flower.',
          'God does not tempt anyone with evil; temptation develops when a person is lured by disordered desire, which conceives sin and brings forth death.',
          'Every good and perfect gift comes from the unchanging Father, who gives his people new birth through the word of truth as firstfruits of his creatures.',
          'Being quick to hear, slow to speak, and slow to anger belongs to the larger call to receive the implanted word humbly.',
          'A hearer who does not act deceives himself, while the doer perseveres in the law of liberty and is blessed in doing.',
          'James describes pure and undefiled worship as caring for orphans and widows in distress and keeping oneself unstained from the world.',
        ],
        threads: ['covenant', 'creation', 'reign'],
        lenses: ['Truth → Practice', 'Grace → Authority', 'Presence → Transformation'],
        scriptureConnections: [
          {
            title: 'Trials, endurance, and mature hope',
            explanation:
              'These passages appear connected because James, Romans, and 1 Peter each describe tested faith producing endurance and hope rather than treating suffering as meaningless. This does not mean trials are good in themselves, but it does show how God forms steadfast people through hardship without abandoning them.',
            passages: ['James 1:2–4, 12', 'Rom. 5:1–5', '1 Pet. 1:3–9'],
          },
          {
            title: 'Wisdom from the generous God',
            explanation:
              'Proverbs presents the Lord as the giver of wisdom, and Jesus teaches his disciples to ask their Father for good gifts. James closely echoes this confidence: the believer’s response to need is not self-sufficiency but wholehearted asking of the God who gives generously.',
            passages: ['James 1:5–8, 17', 'Prov. 2:1–6', 'Matt. 7:7–11'],
          },
          {
            title: 'Hearing completed in doing',
            explanation:
              'Jesus’ teaching provides an important background for James’s contrast between hearing and doing. Both Matthew 7 and Luke 6 compare obedient hearers with builders on a firm foundation, while James develops this theme further through the mirror image and the law of liberty. The similarity is clear without requiring a claim that James quotes a written copy of Matthew.',
            passages: ['James 1:19–25', 'Matt. 7:24–27', 'Luke 6:46–49'],
          },
          {
            title: 'The word gives life and reshapes desire',
            explanation:
              'Psalm 119 celebrates God’s word as life-giving guidance that directs the heart away from evil. James describes the word of truth as the means of new birth and the implanted word as able to save, connecting God’s gracious gift with a life that increasingly practices what it receives.',
            passages: ['James 1:18, 21–25', 'Ps. 119:9–16, 33–40'],
          },
          {
            title: 'Love becomes visible in practical care',
            explanation:
              'James refuses to separate worship from care for vulnerable people. First John similarly says that love must move beyond words into concrete action when a brother or sister is in need, a pattern James develops further in chapter 2.',
            passages: ['James 1:26–27', 'James 2:14–17', '1 John 3:16–18'],
          },
        ],
        whyItMatters:
          'James 1 establishes the whole letter’s movement from God’s generous action to whole, steadfast faith. God gives wisdom, every good gift, new birth, and the saving word; believers are therefore called to receive that word humbly and embody it. The chapter is not a command to try harder without grace. It exposes divided desire and empty hearing while showing that mature obedience grows from what God gives. Its call to be quick to hear is specifically rooted in receiving the word without anger, and its vision of worship joins personal holiness with practical care for people in distress.',
        connectedPassages: [
          'Job 1–2',
          'Ps. 119:9–16',
          'Prov. 2:1–6',
          'Matt. 7:7–11',
          'Matt. 7:24–27',
          'Luke 6:46–49',
          'Rom. 5:1–5',
          '1 Pet. 1:3–9',
          '1 John 3:16–18',
        ],
        kidSummary:
          'Hard things can help God’s children grow strong and steady. God gives wisdom when we ask him, and every good gift comes from him. Listening to God means receiving his word and doing what it says, including caring for people who need help.',
        reflectionQuestions: [
          'What does James say God gives, and what does he explicitly say God never does?',
          'How are steadfast faith, humble hearing, and obedient action connected in this chapter?',
          'How does Jesus’ picture of wise and foolish builders help explain James’s call to hear and do?',
          'Why do care for orphans and widows and an unstained life belong together in James’s description of worship?',
        ],
      },
      2: {
        reference: 'James 2',
        summary:
          'James commands believers in the Lord Jesus Christ, the Lord of glory, not to combine faith with favoritism. Giving honor to a richly dressed visitor while humiliating a poor one makes the assembly a judge with evil thoughts and contradicts God’s choice, the royal law of neighbor-love, and the mercy his people should show. James then challenges a claimed faith that offers needy people kind words without food or clothing. Such faith is dead by itself. Abraham’s offering of Isaac and Rahab’s protection of the messengers show faith acting together with works: living trust becomes visible and reaches maturity in obedient action.',
        observations: [
          'James identifies Jesus Christ as the Lord of glory and says faith in him must not be joined with favoritism.',
          'The assembly dishonors a poor person by assigning a low place while giving special attention to someone wearing fine clothes.',
          'James says God has chosen those who are poor in the world to be rich in faith and heirs of the kingdom promised to those who love him.',
          'The royal law commands love for one’s neighbor, and showing partiality is identified as sin.',
          'Breaking one part of the law makes a person accountable as a lawbreaker, so believers should speak and act as those judged by the law of liberty.',
          'Judgment is without mercy to the one who has shown no mercy, while mercy triumphs over judgment.',
          'Words of concern that do not provide needed clothing and food illustrate a claimed faith with no practical benefit.',
          'Genesis 15:6 says Abraham believed God and it was counted to him as righteousness; James also points to Genesis 22 and says Abraham’s faith was active with his works and completed by them.',
          'Rahab received the messengers and sent them out another way, providing a second example of faith becoming visible in action.',
          'James compares faith without works to a body without the spirit: it is dead.',
        ],
        threads: ['covenant', 'image', 'reign'],
        lenses: ['Truth → Practice', 'Identity → Action', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'No favoritism before the impartial God',
            explanation:
              'The Torah forbids partiality and describes God as impartial and attentive to people with little social protection. Proverbs likewise says oppressing the poor insults their Maker. These passages appear connected because James treats favoritism not as poor manners but as a denial of God’s character and neighbor-love.',
            passages: ['James 2:1–9', 'Lev. 19:15–18', 'Deut. 10:17–19', 'Prov. 14:31'],
          },
          {
            title: 'The royal law and Jesus’ summary',
            explanation:
              'James names “love your neighbor as yourself” as the royal law. Jesus places this command beside wholehearted love for God, showing that faithful allegiance to the King takes visible form in love rather than status-based judgment.',
            passages: ['James 2:8–13', 'Lev. 19:18', 'Matt. 22:34–40'],
          },
          {
            title: 'Mercy shown in practical care',
            explanation:
              'Jesus’ teaching about serving “the least of these” provides an important background for James’s example of a poorly clothed and hungry believer. Neither passage reduces salvation to isolated charitable acts, but both refuse a profession of loyalty to the Lord that remains unmoved by another person’s need.',
            passages: ['James 2:14–17', 'Matt. 25:31–46'],
          },
          {
            title: 'James and Paul on faith and works',
            explanation:
              'Paul argues that sinners are not justified before God by works of the law and rejects works as the basis of justification. James confronts a different claim: a supposed faith that produces no obedience or mercy, and he rejects that empty profession as genuine faith. Ephesians joins the emphases by describing salvation as God’s gift, not the result of works, and then saying believers are created in Christ for good works. The passages should be read together without forcing their distinct arguments into identical wording.',
            passages: ['James 2:14–26', 'Rom. 3:21–4:25', 'Gal. 2:15–3:14', 'Eph. 2:8–10', 'Titus 3:4–8'],
          },
          {
            title: 'Abraham and Rahab display living faith',
            explanation:
              'Observation: Genesis 15:6 says Abraham believed God and it was counted to him as righteousness; Genesis 22 records Abraham offering Isaac; James says his faith was active with his works and completed by them. Interpretation: Abraham’s later obedience demonstrated and matured the faith already present. Hebrews also remembers Abraham and Rahab as people who acted in faith. Works reveal living faith; they do not replace grace.',
            passages: ['James 2:21–26', 'Gen. 15:6', 'Gen. 22:1–18', 'Josh. 2:1–21', 'Heb. 11:17–19, 31'],
          },
        ],
        whyItMatters:
          'James 2 shows that faith in the Lord of glory reshapes how a community values people and responds to need. Mercy, neighbor-love, and practical care are not optional decorations added to faith; they are evidence that faith is alive. James does not contradict Paul: Paul denies that works earn a right standing before God, while James denies that bare profession without faithful action is saving faith. Abraham and Rahab make the point narratively—trust in God becomes visible through costly obedience. Grace remains the source, and works reveal the life grace produces.',
        connectedPassages: [
          'Gen. 15:6',
          'Gen. 22:1–18',
          'Lev. 19:15–18',
          'Deut. 10:17–19',
          'Matt. 22:34–40',
          'Rom. 3:21–4:25',
          'Gal. 2:15–3:14',
          'Eph. 2:8–10',
          'Titus 3:4–8',
          'Heb. 11:17–19, 31',
        ],
        kidSummary:
          'People who trust Jesus, the Lord of glory, should not act as if rich people matter more than poor people. Real faith becomes visible when we show mercy and help people in need. Good actions do not buy God’s gift of salvation; they show that faith is alive.',
        reflectionQuestions: [
          'Why does James say favoritism does not fit faith in Jesus, the Lord of glory?',
          'What examples show the difference between empty words and living faith?',
          'How do James, Paul, and Ephesians address different questions about faith, grace, and works?',
          'What do Abraham and Rahab show about the relationship between trust and obedient action?',
        ],
      },
      3: {
        reference: 'James 3',
        summary:
          'James warns that not many should become teachers because teachers will receive stricter judgment and everyone stumbles in speech. Small things—a bit, rudder, or spark—can direct or damage something much larger, and the tongue has similarly disproportionate power. No human being can tame it by human strength alone. With the same tongue people bless the Lord and Father and curse people made in God’s likeness, an inconsistency that should not be. James then contrasts earthly wisdom, marked by bitter envy and selfish ambition, with wisdom from above, which is pure, peaceable, gentle, open to reason, full of mercy and good fruit, impartial, and sincere. Peacemakers sow a harvest of righteousness in peace.',
        observations: [
          'James says not many should become teachers because teachers will be judged more strictly.',
          'Everyone stumbles in many ways, and control of speech is presented as evidence of mature self-control.',
          'Bits and rudders illustrate how a small member can direct something much larger.',
          'A small fire can set a forest ablaze, and the tongue can spread destructive evil through a person’s life.',
          'Human beings tame many creatures, but James says no human being can tame the restless, poisonous tongue.',
          'People use the tongue both to bless the Lord and Father and to curse human beings made in God’s likeness.',
          'James says the contradiction of blessing and cursing should not characterize God’s people, using springs and fruit trees to show that divided output reveals a deeper disorder.',
          'Earthly wisdom is identified by bitter envy, selfish ambition, disorder, and every evil practice.',
          'Wisdom from above is pure, peaceable, gentle, open to reason, full of mercy and good fruits, impartial, and sincere.',
          'A harvest of righteousness is sown in peace by those who make peace.',
        ],
        threads: ['image', 'covenant', 'creation'],
        lenses: ['Truth → Practice', 'Identity → Action', 'Presence → Transformation'],
        scriptureConnections: [
          {
            title: 'Speech toward people made in God’s likeness',
            explanation:
              'Genesis declares that human beings are made in God’s image. James makes that truth ethically decisive: blessing God while cursing an image-bearing person is a worship contradiction, so speech about other people cannot be separated from reverence for their Maker.',
            passages: ['James 3:9–12', 'Gen. 1:26–27'],
          },
          {
            title: 'The life-giving and destructive power of words',
            explanation:
              'Proverbs repeatedly contrasts words that wound with words that bring life, restraint, peace, and healing. James develops this theme further by emphasizing the tongue’s disproportionate reach: small speech can direct a life or ignite widespread harm.',
            passages: ['James 3:2–8', 'Prov. 10:19–21', 'Prov. 12:18', 'Prov. 15:1–4', 'Prov. 18:21', 'Ps. 34:13'],
          },
          {
            title: 'Words reveal the heart',
            explanation:
              'Jesus teaches that fruit reveals the tree and words disclose what fills the heart. These passages appear connected because James’s springs and trees likewise show that inconsistent speech is not merely a failure of politeness but evidence of a divided inner life needing transformation.',
            passages: ['James 3:9–12', 'Matt. 12:33–37', 'Luke 6:43–45'],
          },
          {
            title: 'Teaching carries weighty responsibility',
            explanation:
              'James does not forbid or disparage teaching; he warns that those whose words form others bear greater accountability. Jesus likewise says people will give account for careless words. The warning calls teachers toward humility and disciplined faithfulness rather than away from the church’s necessary work of teaching.',
            passages: ['James 3:1–2', 'Matt. 12:36–37', 'Eph. 4:11–16'],
          },
          {
            title: 'Wisdom from above bears peaceful fruit',
            explanation:
              'Jesus blesses peacemakers, and Paul calls believers to speech that builds up, gives grace, and puts away bitterness. James locates such practice in wisdom from above, showing that gentle, merciful speech grows from God-given wisdom rather than mere technique.',
            passages: ['James 3:13–18', 'Matt. 5:9', 'Eph. 4:25–32', 'Col. 4:6'],
          },
        ],
        whyItMatters:
          'James 3 joins words, wisdom, worship, and the heart. Teaching is good and necessary, but it carries greater responsibility because words influence others and reveal the speaker. Human resolve alone cannot finally tame the tongue, so James directs readers toward wisdom from above—a gift whose character becomes visible in humility, mercy, peace, and good fruit. Because every person bears God’s likeness, Christian speech must fit the worship believers offer to the Lord and Father.',
        connectedPassages: [
          'Gen. 1:26–27',
          'Ps. 34:13',
          'Prov. 10:19–21',
          'Prov. 12:18',
          'Prov. 15:1–4',
          'Prov. 18:21',
          'Matt. 5:9',
          'Matt. 12:33–37',
          'Luke 6:43–45',
          'Eph. 4:25–32',
          'Col. 4:6',
        ],
        kidSummary:
          'Our words may seem small, but they can help people or hurt them very much. We should not praise God and then speak cruelly about people he made in his likeness. God gives wisdom from above that helps his people become gentle, merciful, and peaceful.',
        reflectionQuestions: [
          'Why does James say teachers will be judged more strictly, and what does he say about everyone’s speech?',
          'What do blessing and cursing from the same tongue reveal about the human heart?',
          'How do Genesis 1 and Jesus’ teaching about trees and fruit deepen James’s message?',
          'How does wisdom from above become visible in speech, relationships, and peacemaking?',
        ],
      },
      4: {
        reference: 'James 4',
        summary:
          'James traces quarrels and conflicts to desires warring within people. They want and do not have, and even their requests can be shaped by self-centered pleasure. Friendship with the world is unfaithfulness toward God, who desires the wholehearted devotion of his people, yet gives greater grace. James therefore calls believers to submit to God, resist the devil, draw near to God, cleanse their actions and hearts, repent, and humble themselves before the Lord. He forbids speaking evil against one another because God alone is Lawgiver and Judge. Finally, he confronts confident plans that ignore God: human life is a mist, so believers should say, “If the Lord wills,” and do the good they know.',
        observations: [
          'James traces quarrels and fights to passions at war within people.',
          'People desire and do not have, and some requests go unanswered because they ask wrongly in order to spend on their pleasures.',
          'Friendship with the world is described as hostility toward God and covenantal unfaithfulness.',
          'God gives greater grace, and Scripture says he opposes the proud but gives grace to the humble.',
          'Resisting the devil is part of a larger movement that includes submitting to God, drawing near to him, cleansing actions, purifying divided hearts, repenting, and humbling oneself.',
          'James promises that God will draw near to those who draw near to him and that the Lord will exalt those who humble themselves.',
          'Speaking evil against a brother or sister places the speaker in judgment over the law, though there is one Lawgiver and Judge.',
          'Merchants confidently plan a year of travel and profit without acknowledging that they do not know what tomorrow will bring.',
          'Human life is compared to a mist that appears briefly and then vanishes.',
          'James says people should plan under the Lord’s will and that knowing the good while failing to do it is sin.',
        ],
        threads: ['reign', 'covenant', 'creation'],
        lenses: ['Grace → Authority', 'Presence → Transformation', 'Truth → Practice'],
        scriptureConnections: [
          {
            title: 'Disordered desire and inner conflict',
            explanation:
              'Genesis 3 shows desire turning from trust in God toward grasping, while Romans describes an inner conflict in which sin works against the desire to do good. James identifies the same basic disorder beneath community quarrels, directing attention from outward conflict to the heart’s competing loves.',
            passages: ['James 4:1–3', 'Gen. 3:1–7', 'Rom. 7:21–25'],
          },
          {
            title: 'Greater grace for the humble',
            explanation:
              'James cites Proverbs to ground his call to humility, and 1 Peter uses the same saying before urging humble dependence and resistance to the devil. These passages appear connected because resistance is not an isolated technique; it belongs within submission to God, repentance, watchfulness, and trust in God’s grace.',
            passages: ['James 4:6–10', 'Prov. 3:34', '1 Pet. 5:5–9'],
          },
          {
            title: 'Wholehearted allegiance rather than friendship with the world',
            explanation:
              'First John warns against loving the world’s disordered desires and pride because they pass away, while the one doing God’s will remains. James’s language of friendship and jealousy presents the issue relationally: God calls his people away from divided allegiance and gives grace for their return.',
            passages: ['James 4:4–8', '1 John 2:15–17'],
          },
          {
            title: 'The Lawgiver judges the judging heart',
            explanation:
              'Jesus warns against hypocritical judgment and commands disciples to address their own sin before correcting another person. James develops this theme further by exposing slander as an attempt to occupy God’s place, since God alone gives the law and judges.',
            passages: ['James 4:11–12', 'Matt. 7:1–5'],
          },
          {
            title: 'Planning beneath the Lord’s will',
            explanation:
              'Jesus’ teaching provides an important background for James’s warning about tomorrow. Matthew 6 opposes anxious self-reliance, and Jesus’ parable in Luke exposes a wealthy planner who presumes upon years he does not possess. This does not condemn careful planning, but it does show the arrogance of treating life, profit, and the future as independent of God.',
            passages: ['James 4:13–17', 'Matt. 6:19–34', 'Luke 12:13–21', 'Eccl. 5:1–7'],
          },
        ],
        whyItMatters:
          'James 4 reveals how divided desire disrupts prayer, relationships, speech, and plans. The answer is not a stand-alone technique for resisting evil but a grace-shaped return: submit to God, draw near, repent, purify divided hearts, and humble oneself before the Lord. God remains the only Lawgiver and Judge, and every human plan rests beneath his will. Whole faith therefore depends on greater grace and expresses itself through humble relationships, dependent prayer, modest plans, and prompt obedience to known good.',
        connectedPassages: [
          'Gen. 3:1–7',
          'Prov. 3:34',
          'Eccl. 5:1–7',
          'Matt. 6:19–34',
          'Matt. 7:1–5',
          'Luke 12:13–21',
          'Rom. 7:21–25',
          '1 Pet. 5:5–9',
          '1 John 2:15–17',
        ],
        kidSummary:
          'Fights often begin when people want their own way more than they want God’s way. But God gives greater grace. He calls us to come near, turn from wrong, be humble, speak kindly about others, and remember him when we make plans.',
        reflectionQuestions: [
          'Where does James say quarrels come from, and what can also go wrong in prayer?',
          'How does God’s greater grace shape the call to submit, resist, draw near, repent, and become humble?',
          'How do Jesus’ teachings about judging and tomorrow help explain James’s warnings?',
          'What does it look like to plan responsibly while remembering that life depends on the Lord’s will?',
        ],
      },
      5: {
        reference: 'James 5',
        summary:
          'James announces judgment against rich oppressors whose hoarded wealth decays, whose withheld wages cry out, and whose self-indulgence has harmed the righteous. He then calls brothers and sisters to wait patiently for the Lord’s coming like a farmer awaiting rain, following the endurance of the prophets and Job and remembering the Lord’s compassion and mercy. Believers should speak truthfully without manipulative oaths. In suffering they should pray, in cheerfulness sing praise, and in sickness call the church’s elders to pray and anoint with oil in the Lord’s name. James urges confession and mutual prayer, points to Elijah as an example of effective prayer, and closes by valuing the restoration of anyone who wanders from the truth.',
        observations: [
          'James warns rich oppressors that their decaying wealth testifies against them in view of coming judgment.',
          'The wages withheld from laborers cry out, and the cries of the harvesters reach the Lord of hosts.',
          'The rich are charged with self-indulgence, injustice, and condemning and killing the righteous person who does not resist them.',
          'Believers are called to patience until the coming of the Lord, like a farmer waiting for the precious crop and seasonal rains.',
          'The prophets and Job are named as examples of suffering and endurance, and James emphasizes the Lord’s compassion and mercy.',
          'Believers should not grumble against one another because the Judge is standing at the door.',
          'Speech should be truthful without manipulative oaths: yes should mean yes and no should mean no.',
          'Those who suffer should pray, those who are cheerful should sing praise, and those who are sick should call the elders to pray over them and anoint them with oil in the Lord’s name.',
          'James calls believers to confess sins to one another and pray for one another, while Elijah illustrates the effective prayer of a righteous person.',
          'The letter ends with a call to restore anyone who wanders from the truth.',
        ],
        threads: ['reign', 'priesthood', 'covenant', 'creation'],
        lenses: ['Promise → Fulfillment', 'Presence → Transformation', 'Grace → Authority'],
        scriptureConnections: [
          {
            title: 'Withheld wages cry out to God',
            explanation:
              'The Torah forbids withholding a worker’s pay because the laborer depends upon it and may cry to the Lord. James announces that those cries have reached the Lord of hosts, showing that wealth carries responsibility and that God hears people harmed by economic injustice.',
            passages: ['James 5:1–6', 'Lev. 19:13', 'Deut. 24:14–15'],
          },
          {
            title: 'Patient until the Lord comes',
            explanation:
              'James roots endurance in the coming of the Lord and says the Judge is at the door. Jesus calls servants to watch faithfully for their master, Paul comforts believers with Christ’s return, and Hebrews urges endurance as the promised coming approaches. Christian patience is therefore active faithfulness shaped by promise, not passive approval of injustice.',
            passages: ['James 5:7–9', 'Matt. 24:42–51', '1 Thess. 4:13–18', 'Heb. 10:35–39'],
          },
          {
            title: 'The prophets and Job endured',
            explanation:
              'Job suffers deeply, continues wrestling before God, and finally encounters the Lord’s restoring mercy. James does not say every sufferer will receive Job’s exact earthly outcome; he points to endurance and to the Lord’s compassionate purpose as reasons to remain steadfast.',
            passages: ['James 5:10–11', 'Job 1–2', 'Job 42:1–17'],
          },
          {
            title: 'Truthful speech without manipulation',
            explanation:
              'James closely echoes Jesus’ teaching that ordinary truthfulness should make oath manipulation unnecessary: yes should mean yes and no should mean no. This continues the letter’s concern that speech reveal a whole rather than divided heart.',
            passages: ['James 5:12', 'Matt. 5:33–37'],
          },
          {
            title: 'Prayer, care, confession, and healing',
            explanation:
              'James calls the church to prayer in every circumstance, pastoral care by the elders, confession, and trust in the Lord. The prayer of faith does not promise that every sick person will certainly receive immediate physical healing, and the passage does not imply that every illness is caused by a specific personal sin. Christians differ on whether anointing oil is medicinal, symbolic, sacramental, or combines more than one meaning; James keeps the emphasis on prayer and anointing in the Lord’s name.',
            passages: ['James 5:13–16', 'Luke 18:1–8', '1 Pet. 5:6–11'],
          },
          {
            title: 'Elijah’s prayer and restoring wanderers',
            explanation:
              'James points to Elijah as a person with a nature like ours whose earnest prayer affected rain, showing dependence on God rather than human spiritual power. The final appeal to turn a wanderer back joins prayer with responsible care for another person’s restoration.',
            passages: ['James 5:17–20', '1 Kings 17:1', '1 Kings 18:41–45'],
          },
        ],
        whyItMatters:
          'James 5 brings the letter’s call to whole faith under the horizon of the returning Lord. Oppressive wealth faces judgment, suffering believers wait with steadfast hope, truthful speech refuses manipulation, and the church turns to God through prayer, praise, pastoral care, confession, and restoration. The chapter neither reduces wealth itself to evil nor guarantees immediate healing in every case. It calls a dependent community to trust the compassionate and merciful Lord, care for the suffering, and pursue those who wander while awaiting Christ’s coming.',
        connectedPassages: [
          'Lev. 19:13',
          'Deut. 24:14–15',
          'Job 1–2',
          'Job 42:1–17',
          '1 Kings 17:1',
          '1 Kings 18:41–45',
          'Matt. 5:33–37',
          'Matt. 24:42–51',
          'Luke 18:1–8',
          '1 Thess. 4:13–18',
          'Heb. 10:35–39',
          '1 Pet. 5:6–11',
        ],
        kidSummary:
          'God sees when rich and powerful people hurt workers. Jesus will return, so his people can wait patiently and keep telling the truth. We can pray when we hurt, sing when we are happy, care for sick people, admit our sins, and help someone who wanders come back.',
        reflectionQuestions: [
          'What injustice does James condemn, and what does the chapter reveal about God’s response to it?',
          'How do the farmer, prophets, and Job teach believers to wait for the Lord’s coming?',
          'What kinds of prayer and community care does James command without promising the same immediate outcome in every illness?',
          'Why does James end his letter with restoring a person who has wandered from the truth?',
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
