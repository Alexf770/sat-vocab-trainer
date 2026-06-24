// SAT words bank
const words = [
    {
        word: "esteemed",
        definition: "Highly respected and admired",
        sentence: "The professor was so ________ that students traveled from other countries just to attend his lectures.",

        synonyms: [
            "honored",
            "respected",
            "admired",
            "revered",
            "valued"
        ],

        status: "notAttempted"
    },

    {
        word: "catalyst",
        definition: "Something that causes change or action",
        sentence: "The new policy acted as a ________ for major reforms in the education system.",

        synonyms: [
            "spark",
            "trigger",
            "cause",
            "instigator",
            "accelerator"
        ],

        status: "notAttempted"
    },

    {
        word: "trivialization",
        definition: "Treating something serious as unimportant",
        sentence: "The media's ________ of the crisis led people to underestimate the danger.",

        synonyms: [
            "minimization",
            "downplaying",
            "dismissing",
            "making light of"
        ],

        status: "notAttempted"
    },

    {
        word: "suppression",
        definition: "The act of preventing something from being expressed, developed, or revealed",
        sentence: "The government's ________ of unfavorable reports made it difficult for citizens to learn the truth.",

        synonyms: [
            "restraint",
            "repression",
            "inhibition",
            "concealment",
            "restriction"
        ],

        status: "notAttempted"
    },

    {
        word: "divergence",
        definition: "A difference or separation from a common point or opinion",
        sentence: "The ________ between the two scientists' conclusions sparked a lengthy debate.",

        synonyms: [
            "difference",
            "departure",
            "deviation",
            "disagreement",
            "separation"
        ],

        status: "notAttempted"
    },

    {
        word: "adhere",
        definition: "To stick firmly to something or remain loyal to a rule or belief",
        sentence: "Although the new policy was unpopular, the principal continued to ________ to it.",

        synonyms: [
            "follow",
            "observe",
            "comply",
            "cling",
            "abide"
        ],

        status: "notAttempted"
    },

    {
        word: "advocate",
        definition: "To publicly support or recommend something",
        sentence: "Many researchers ________ stricter environmental regulations to reduce pollution.",

        synonyms: [
            "support",
            "promote",
            "endorse",
            "champion",
            "favor"
        ],

        status: "notAttempted"
    },

    {
        word: "allude",
        definition: "To refer to something indirectly",
        sentence: "Rather than mention the scandal directly, the journalist chose to ________ to it.",

        synonyms: [
            "hint",
            "suggest",
            "imply",
            "refer",
            "mention"
        ],

        status: "notAttempted"
    },

    {
        word: "ambivalence",
        definition: "Having mixed or conflicting feelings about something",
        sentence: "Her ________ about moving abroad stemmed from excitement as well as fear.",

        synonyms: [
            "uncertainty",
            "conflict",
            "indecision",
            "hesitation",
            "doubt"
        ],

        status: "notAttempted"
    },

    {
        word: "analogous",
        definition: "Similar in certain ways and therefore comparable",
        sentence: "The scientist argued that the structure of the cell was ________ to a factory.",

        synonyms: [
            "similar",
            "comparable",
            "parallel",
            "equivalent",
            "alike"
        ],

        status: "notAttempted"
    },

    {
        word: "anecdote",
        definition: "A short and interesting story about a real event or person",
        sentence: "To make her lecture more engaging, the professor began with an amusing ________ about her childhood.",

        synonyms: [
            "story",
            "account",
            "narrative",
            "incident",
            "tale"
        ],

        status: "notAttempted"
    },

    {
        word: "apprehensive",
        definition: "Anxious or worried that something bad may happen",
        sentence: "The athletes were ________ about competing against the defending champions.",

        synonyms: [
            "anxious",
            "nervous",
            "uneasy",
            "worried",
            "fearful"
        ],

        status: "notAttempted"
    },

    {
        word: "arbitrary",
        definition: "Based on personal choice rather than reason or a clear system",
        sentence: "Students complained that the teacher's grading standards seemed entirely ________.",

        synonyms: [
            "random",
            "capricious",
            "irrational",
            "unpredictable",
            "subjective"
        ],

        status: "notAttempted"
    },

    {
        word: "assert",
        definition: "To state something confidently and forcefully",
        sentence: "The historian continued to ________ that the document was authentic despite criticism.",

        synonyms: [
            "declare",
            "claim",
            "maintain",
            "affirm",
            "contend"
        ],

        status: "notAttempted"
    },

    {
        word: "bias",
        definition: "An unfair preference for or against something",
        sentence: "The researcher took steps to eliminate personal ________ from the study.",

        synonyms: [
            "prejudice",
            "partiality",
            "favoritism",
            "inclination",
            "preconception"
        ],

        status: "notAttempted"
    },

    {
        word: "brevity",
        definition: "The quality of being brief or concise",
        sentence: "Because of the speech's ________, the audience remained attentive throughout.",

        synonyms: [
            "conciseness",
            "shortness",
            "compactness",
            "succinctness",
            "directness"
        ],

        status: "notAttempted"
    },

    {
        word: "buttress",
        definition: "To support or strengthen something",
        sentence: "New archaeological evidence helped ________ the historian's theory.",

        synonyms: [
            "support",
            "strengthen",
            "reinforce",
            "bolster",
            "uphold"
        ],

        status: "notAttempted"
    },

    {
        word: "concede",
        definition: "To admit that something is true after resisting it",
        sentence: "After reviewing the evidence, the lawyer had to ________ that the witness was credible.",

        synonyms: [
            "admit",
            "acknowledge",
            "grant",
            "accept",
            "yield"
        ],

        status: "notAttempted"
    },

    {
        word: "consensus",
        definition: "General agreement among a group of people",
        sentence: "A scientific ________ has emerged regarding the importance of reducing carbon emissions.",

        synonyms: [
            "agreement",
            "accord",
            "unity",
            "concurrence",
            "harmony"
        ],

        status: "notAttempted"
    },

    {
        word: "corroborate",
        definition: "To confirm or support with evidence",
        sentence: "The newly discovered letters helped ________ the author's account of the event.",

        synonyms: [
            "confirm",
            "verify",
            "support",
            "substantiate",
            "validate"
        ],

        status: "notAttempted"
    },

    {
        word: "decisive",
        definition: "Producing a clear result or showing the ability to make decisions quickly",
        sentence: "Her ________ response prevented the disagreement from escalating further.",

        synonyms: [
            "determining",
            "conclusive",
            "resolute",
            "firm",
            "definitive"
        ],

        status: "notAttempted"
    },

    {
        word: "deference",
        definition: "Respectful submission to another person's judgment or authority",
        sentence: "Out of ________ to the expert's experience, the committee accepted her recommendation.",

        synonyms: [
            "respect",
            "regard",
            "reverence",
            "submission",
            "obedience"
        ],

        status: "notAttempted"
    },

    {
        word: "degrade",
        definition: "To lower in quality, value, or dignity",
        sentence: "Exposure to sunlight can gradually ________ certain pigments in old paintings.",

        synonyms: [
            "diminish",
            "reduce",
            "weaken",
            "debase",
            "deteriorate"
        ],

        status: "notAttempted"
    },

    {
        word: "denounce",
        definition: "To publicly condemn something as wrong",
        sentence: "Several organizations chose to ________ the company's unethical practices.",

        synonyms: [
            "condemn",
            "criticize",
            "censure",
            "rebuke",
            "disapprove"
        ],

        status: "notAttempted"
    },

    {
        word: "dispute",
        definition: "To question or argue against something",
        sentence: "Few scholars ________ the significance of the newly discovered manuscript.",

        synonyms: [
            "challenge",
            "contest",
            "question",
            "oppose",
            "argue"
        ],

        status: "notAttempted"
    },

    {
        word: "dormant",
        definition: "Inactive or temporarily not developing",
        sentence: "Although the volcano had remained ________ for centuries, scientists continued to monitor it.",

        synonyms: [
            "inactive",
            "latent",
            "sleeping",
            "idle",
            "quiescent"
        ],

        status: "notAttempted"
    },

    {
        word: "eloquent",
        definition: "Fluent, persuasive, and effective in speaking or writing",
        sentence: "The activist delivered an ________ speech that inspired many people to volunteer.",

        synonyms: [
            "articulate",
            "expressive",
            "persuasive",
            "fluent",
            "moving"
        ],

        status: "notAttempted"
    },

    {
        word: "evoke",
        definition: "To bring a feeling, memory, or image into the mind",
        sentence: "The photograph seemed to ________ memories of her childhood summers.",

        synonyms: [
            "elicit",
            "summon",
            "prompt",
            "arouse",
            "invoke"
        ],

        status: "notAttempted"
    },

    {
        word: "exert",
        definition: "To apply effort, force, or influence",
        sentence: "The committee attempted to ________ pressure on the company to change its policy.",

        synonyms: [
            "apply",
            "exercise",
            "wield",
            "employ",
            "use"
        ],

        status: "notAttempted"
    },

    {
        word: "explicit",
        definition: "Clearly stated and leaving no room for confusion",
        sentence: "The instructions were so ________ that even first-time users completed the task easily.",

        synonyms: [
            "clear",
            "specific",
            "definite",
            "precise",
            "unambiguous"
        ],

        status: "notAttempted"
    },

    {
        word: "imminent",
        definition: "About to happen very soon",
        sentence: "Dark clouds suggested that a storm was ________.",

        synonyms: [
            "impending",
            "approaching",
            "forthcoming",
            "near",
            "looming"
        ],

        status: "notAttempted"
    },

    {
        word: "impede",
        definition: "To slow down or block progress",
        sentence: "A lack of funding could ________ the completion of the research project.",

        synonyms: [
            "hinder",
            "obstruct",
            "hamper",
            "delay",
            "inhibit"
        ],

        status: "notAttempted"
    },

    {
        word: "implicit",
        definition: "Suggested or understood without being directly stated",
        sentence: "Although the author never said it outright, her criticism was ________ throughout the essay.",

        synonyms: [
            "implied",
            "indirect",
            "unstated",
            "suggested",
            "tacit"
        ],

        status: "notAttempted"
    },

    {
        word: "impose",
        definition: "To force something to be accepted or put into effect",
        sentence: "The city council voted to ________ stricter regulations on industrial waste disposal.",
        synonyms: [
            "enforce",
            "establish",
            "mandate",
            "inflict",
            "compel"
        ],
        status: "notAttempted"
    },

    {
        word: "indifference",
        definition: "A lack of interest, concern, or sympathy",
        sentence: "The public's ________ to the issue frustrated activists who had hoped for widespread support.",
        synonyms: [
            "apathy",
            "unconcern",
            "disinterest",
            "detachment",
            "insensitivity"
        ],
        status: "notAttempted"
    },

    {
        word: "inevitable",
        definition: "Certain to happen and impossible to avoid",
        sentence: "Given the company's mounting debt, bankruptcy seemed ________.",
        synonyms: [
            "unavoidable",
            "certain",
            "inescapable",
            "predestined",
            "assured"
        ],
        status: "notAttempted"
    },

    {
        word: "invoke",
        definition: "To call upon or bring to mind something such as a rule, idea, or emotion",
        sentence: "The lawyer chose to ________ a constitutional principle in support of her argument.",
        synonyms: [
            "cite",
            "appeal to",
            "reference",
            "evoke",
            "summon"
        ],
        status: "notAttempted"
    },

    {
        word: "ironic",
        definition: "Characterized by a result that is unexpected or opposite of what was intended",
        sentence: "It was ________ that the firefighter's house was damaged by a fire.",
        synonyms: [
            "paradoxical",
            "unexpected",
            "contradictory",
            "incongruous",
            "sarcastic"
        ],
        status: "notAttempted"
    },

    {
        word: "novel",
        definition: "New, original, and unlike anything previously known",
        sentence: "The scientist proposed a ________ approach that challenged conventional theories.",
        synonyms: [
            "innovative",
            "original",
            "fresh",
            "unconventional",
            "inventive"
        ],
        status: "notAttempted"
    },

    {
        word: "obscure",
        definition: "Not well known, difficult to understand, or hidden from view",
        sentence: "The historian relied on several ________ documents that few scholars had ever examined.",
        synonyms: [
            "unclear",
            "vague",
            "unknown",
            "ambiguous",
            "hidden"
        ],
        status: "notAttempted"
    },

    {
        word: "obsolete",
        definition: "No longer useful because something newer has replaced it",
        sentence: "Advances in technology rendered many older communication devices ________.",
        synonyms: [
            "outdated",
            "antiquated",
            "old-fashioned",
            "archaic",
            "superseded"
        ],
        status: "notAttempted"
    },

    {
        word: "oppressive",
        definition: "Unjustly harsh, controlling, or burdensome",
        sentence: "Citizens protested against the government's ________ restrictions on freedom of expression.",
        synonyms: [
            "tyrannical",
            "harsh",
            "authoritarian",
            "burdensome",
            "repressive"
        ],
        status: "notAttempted"
    },

    {
        word: "pervasive",
        definition: "Spread throughout and present in every part of something",
        sentence: "A ________ sense of optimism filled the stadium after the team's victory.",
        synonyms: [
            "widespread",
            "prevalent",
            "ubiquitous",
            "extensive",
            "pervading"
        ],
        status: "notAttempted"
    },

    {
        word: "prevalence",
        definition: "The state of being widespread or common",
        sentence: "Researchers examined the ________ of social media use among teenagers.",
        synonyms: [
            "commonness",
            "frequency",
            "pervasiveness",
            "abundance",
            "occurrence"
        ],
        status: "notAttempted"
    },

    {
        word: "prominent",
        definition: "Important, well known, or easily noticed",
        sentence: "The museum dedicated an exhibit to several ________ figures in modern art.",
        synonyms: [
            "notable",
            "distinguished",
            "eminent",
            "famous",
            "leading"
        ],
        status: "notAttempted"
    },

    {
        word: "provoke",
        definition: "To cause a reaction, especially anger, interest, or thought",
        sentence: "The author's controversial essay was intended to ________ discussion rather than provide answers.",
        synonyms: [
            "incite",
            "stimulate",
            "trigger",
            "evoke",
            "prompt"
        ],
        status: "notAttempted"
    },

    {
        word: "reciprocate",
        definition: "To respond to an action or feeling by doing something similar in return",
        sentence: "After receiving years of support from her mentor, she hoped to ________ his kindness someday.",
        synonyms: [
            "return",
            "repay",
            "respond",
            "requite",
            "exchange"
        ],
        status: "notAttempted"
    },

    {
        word: "reconcile",
        definition: "To make two ideas, facts, or people compatible or at peace",
        sentence: "The scientist struggled to ________ the new evidence with her previous findings.",
        synonyms: [
            "resolve",
            "harmonize",
            "unite",
            "settle",
            "integrate"
        ],
        status: "notAttempted"
    },

    {
        word: "refute",
        definition: "To prove that a statement or argument is false",
        sentence: "The researcher used additional data to ________ the critic's claims.",
        synonyms: [
            "disprove",
            "rebut",
            "contradict",
            "invalidate",
            "debunk"
        ],
        status: "notAttempted"
    },

    {
        word: "renounce",
        definition: "To formally give up or reject a belief, claim, or practice",
        sentence: "The politician decided to ________ his previous position on the issue.",
        synonyms: [
            "reject",
            "abandon",
            "relinquish",
            "forsake",
            "repudiate"
        ],
        status: "notAttempted"
    },

    {
        word: "repression",
        definition: "The act of controlling or suppressing people, ideas, or feelings by force",
        sentence: "Historians continue to study the government's ________ of political opposition.",
        synonyms: [
            "suppression",
            "oppression",
            "restraint",
            "subjugation",
            "control"
        ],
        status: "notAttempted"
    },

    {
        word: "retain",
        definition: "To continue to keep, possess, or remember something",
        sentence: "Students tend to ________ information more effectively when they actively practice it.",
        synonyms: [
            "keep",
            "maintain",
            "preserve",
            "hold",
            "remember"
        ],
        status: "notAttempted"
    },

    {
        word: "skeptical",
        definition: "Doubtful that something is true or likely to happen",
        sentence: "Although the inventor's idea sounded promising, investors remained ________ of its practicality.",
        synonyms: [
            "doubtful",
            "questioning",
            "suspicious",
            "unconvinced",
            "dubious"
        ],
        status: "notAttempted"
    },

    {
        word: "speculate",
        definition: "To form ideas or theories without enough evidence",
        sentence: "Because the cause of the phenomenon remains unknown, scientists can only ________ about its origins.",
        synonyms: [
            "theorize",
            "conjecture",
            "guess",
            "hypothesize",
            "surmise"
        ],
        status: "notAttempted"
    },

    {
        word: "substantiate",
        definition: "To provide evidence that proves something is true",
        sentence: "The journalist was unable to ________ the allegations with reliable sources.",
        synonyms: [
            "verify",
            "confirm",
            "support",
            "corroborate",
            "validate"
        ],
        status: "notAttempted"
    },

    {
        word: "subtle",
        definition: "Not obvious and requiring careful attention to notice or understand",
        sentence: "The artist used ________ shifts in color to create a sense of depth.",
        synonyms: [
            "slight",
            "delicate",
            "faint",
            "nuanced",
            "indirect"
        ],
        status: "notAttempted"
    },

    {
        word: "supplement",
        definition: "To add something extra in order to improve or complete something",
        sentence: "To ________ her income, the musician taught private lessons on weekends.",
        synonyms: [
            "augment",
            "enhance",
            "add to",
            "reinforce",
            "complement"
        ],
        status: "notAttempted"
    },

    {
        word: "tenuous",
        definition: "Weak, uncertain, or lacking a strong connection",
        sentence: "The prosecutor's case relied on a ________ link between the suspect and the crime scene.",
        synonyms: [
            "weak",
            "fragile",
            "flimsy",
            "dubious",
            "uncertain"
        ],
        status: "notAttempted"
    },

    {
        word: "undermine",
        definition: "To weaken or damage something gradually",
        sentence: "Repeated errors began to ________ the public's confidence in the organization.",
        synonyms: [
            "weaken",
            "erode",
            "damage",
            "impair",
            "sabotage"
        ],
        status: "notAttempted"
    },

    {
        word: "underscore",
        definition: "To emphasize or show the importance of something",
        sentence: "The recent discoveries ________ the need for further research into climate change.",
        synonyms: [
            "emphasize",
            "highlight",
            "stress",
            "accentuate",
            "reinforce"
        ],
        status: "notAttempted"
    },

    {
        word: "unobtrusive",
        definition: "Not attracting attention; subtle and inconspicuous",
        sentence: "The architect designed the addition to be ________ so that it would blend with the historic building.",
        synonyms: [
            "inconspicuous",
            "subtle",
            "modest",
            "discreet",
            "unnoticeable"
        ],
        status: "notAttempted"
    },

    {
        word: "validate",
        definition: "To prove that something is true, accurate, or acceptable",
        sentence: "The experiment's results helped ________ the scientist's original hypothesis.",
        synonyms: [
            "confirm",
            "verify",
            "substantiate",
            "corroborate",
            "authenticate"
        ],
        status: "notAttempted"
    },

    {
        word: "verisimilitude",
        definition: "The appearance of being true or realistic",
        sentence: "The novelist's detailed descriptions gave the fictional setting an impressive sense of ________.",
        synonyms: [
            "realism",
            "authenticity",
            "credibility",
            "believability",
            "plausibility"
        ],
        status: "notAttempted"
    },
    
    {
        word: "viable",
        definition: "Capable of working successfully or being put into practice",
        sentence: "After months of testing, the engineers finally developed a ________ solution to the problem.",
        synonyms: [
            "feasible",
            "practical",
            "workable",
            "functional",
            "achievable"
        ],
        status: "notAttempted"
    },

    {
        word: "abase",
        definition: "To lower in rank, status, or respect",
        sentence: "He refused to ________ himself by admitting fault for something he did not do.",

        synonyms: [
            "degrade",
            "humiliate",
            "demean",
            "belittle",
            "lower"
        ],

        status: "notAttempted"
    },

    {
        word: "abate",
        definition: "To decrease or reduce in intensity",
        sentence: "The storm finally began to ________ after hours of heavy rain.",

        synonyms: [
            "subside",
            "diminish",
            "fade",
            "ease",
            "weaken"
        ],

        status: "notAttempted"
    },

    {
        word: "abduct",
        definition: "To take someone away illegally by force",
        sentence: "The suspect tried to ________ the child from the playground.",

        synonyms: [
            "kidnap",
            "seize",
            "snatch",
            "capture",
            "carry off"
        ],

        status: "notAttempted"
    },

    {
        word: "cavort",
        definition: "To jump or behave in a lively, playful way",
        sentence: "The puppies ________ across the yard as soon as they were released.",

        synonyms: [
            "frolic",
            "romp",
            "play",
            "prance",
            "leap"
        ],

        status: "notAttempted"
    },

    {
        word: "chaos",
        definition: "Complete disorder and confusion",
        sentence: "The sudden announcement caused ________ in the crowded hall.",

        synonyms: [
            "disorder",
            "confusion",
            "mayhem",
            "turmoil",
            "pandemonium"
        ],

        status: "notAttempted"
    },

    {
        word: "clamor",
        definition: "A loud and confused noise or demand",
        sentence: "There was a ________ from the crowd demanding justice.",

        synonyms: [
            "uproar",
            "outcry",
            "din",
            "shouting",
            "hue and cry"
        ],

        status: "notAttempted"
    },

    {
        word: "confection",
        definition: "A sweet food or dessert",
        sentence: "The bakery window displayed a colorful ________ covered in frosting.",

        synonyms: [
            "candy",
            "dessert",
            "sweet",
            "treat",
            "pastry"
        ],

        status: "notAttempted"
    },

    {
        word: "convene",
        definition: "To gather or assemble formally",
        sentence: "The committee will ________ to discuss the new policy tomorrow.",

        synonyms: [
            "assemble",
            "meet",
            "gather",
            "unite",
            "summon"
        ],

        status: "notAttempted"
    },

    {
        word: "coup",
        definition: "A sudden overthrow of a government or authority",
        sentence: "The military attempted a ________ to seize control of the state.",

        synonyms: [
            "takeover",
            "overthrow",
            "revolt",
            "rebellion",
            "usurpation"
        ],

        status: "notAttempted"
    },

    {
        word: "docile",
        definition: "Easily controlled or obedient",
        sentence: "The ________ student followed every instruction without hesitation.",

        synonyms: [
            "obedient",
            "compliant",
            "submissive",
            "manageable",
            "tame"
        ],

        status: "notAttempted"
    },

    {
        word: "dour",
        definition: "Gloomy, stern, or unfriendly in manner",
        sentence: "The teacher gave a ________ look after noticing the unfinished assignment.",

        synonyms: [
            "grim",
            "stern",
            "gloomy",
            "sullen",
            "serious"
        ],

        status: "notAttempted"
    },

    {
        word: "edict",
        definition: "An official order issued by authority",
        sentence: "The king issued an ________ banning travel after sunset.",

        synonyms: [
            "decree",
            "order",
            "command",
            "proclamation",
            "law"
        ],

        status: "notAttempted"
    },

    {
        word: "forage",
        definition: "To search widely for food or resources",
        sentence: "The animals ________ through the forest for berries and nuts.",

        synonyms: [
            "hunt",
            "search",
            "scavenge",
            "gather",
            "prowl"
        ],

        status: "notAttempted"
    },

    {
        word: "fraught",
        definition: "Filled with or likely to cause stress or tension",
        sentence: "The negotiation was ________ with conflict and uncertainty.",

        synonyms: [
            "tense",
            "stressful",
            "anxious",
            "charged",
            "troubled"
        ],

        status: "notAttempted"
    },

    {
        word: "frenetic",
        definition: "Wildly frantic or chaotic",
        sentence: "The office became ________ as the deadline approached.",

        synonyms: [
            "frantic",
            "wild",
            "agitated",
            "hurried",
            "manic"
        ],

        status: "notAttempted"
    },

    {
        word: "guile",
        definition: "Sly or cunning intelligence used to deceive",
        sentence: "He used ________ to win the negotiation without revealing his plan.",

        synonyms: [
            "cunning",
            "deceit",
            "trickery",
            "craftiness",
            "slyness"
        ],

        status: "notAttempted"
    },

    {
        word: "hardy",
        definition: "Strong and able to withstand difficult conditions",
        sentence: "Only the ________ plants survived the harsh winter.",

        synonyms: [
            "resilient",
            "robust",
            "tough",
            "sturdy",
            "strong"
        ],

        status: "notAttempted"
    },

    {
        word: "impertinent",
        definition: "Rude or disrespectful",
        sentence: "The student was punished for an ________ remark toward the teacher.",

        synonyms: [
            "rude",
            "insolent",
            "impudent",
            "disrespectful",
            "brazen"
        ],

        status: "notAttempted"
    },

    {
        word: "impervious",
        definition: "Unable to be affected or influenced",
        sentence: "She seemed ________ to criticism from her peers.",

        synonyms: [
            "immune",
            "unaffected",
            "insensitive",
            "resistant",
            "sealed"
        ],

        status: "notAttempted"
    },

    {
        word: "impinge",
        definition: "To have an effect, especially a negative one",
        sentence: "The new regulations may ________ on students' free time.",

        synonyms: [
            "affect",
            "intrude",
            "infringe",
            "interfere",
            "encroach"
        ],

        status: "notAttempted"
    },

    {
        word: "implacable",
        definition: "Unable to be calmed or appeased",
        sentence: "The judge remained ________ despite the defendant's apology.",

        synonyms: [
            "unforgiving",
            "relentless",
            "unyielding",
            "stern",
            "ruthless"
        ],

        status: "notAttempted"
    },

    {
        word: "inane",
        definition: "Silly or meaningless",
        sentence: "Their conversation became ________ after hours of exhaustion.",

        synonyms: [
            "foolish",
            "senseless",
            "absurd",
            "stupid",
            "pointless"
        ],

        status: "notAttempted"
    },

    {
        word: "incisive",
        definition: "Clear, sharp, and analytical",
        sentence: "Her ________ criticism exposed the flaw in the argument.",

        synonyms: [
            "sharp",
            "keen",
            "penetrating",
            "astute",
            "perceptive"
        ],

        status: "notAttempted"
    },

    {
        word: "innate",
        definition: "Existing naturally or from birth",
        sentence: "He has an ________ ability to understand patterns quickly.",

        synonyms: [
            "inborn",
            "natural",
            "inherent",
            "instinctive",
            "native"
        ],

        status: "notAttempted"
    },

    {
        word: "insular",
        definition: "Narrow-minded or isolated",
        sentence: "His ________ worldview prevented him from understanding other cultures.",

        synonyms: [
            "narrow-minded",
            "isolated",
            "closed-off",
            "parochial",
            "provincial"
        ],

        status: "notAttempted"
    },

    {
        word: "integral",
        definition: "Essential or necessary for completeness",
        sentence: "Trust is an ________ part of any strong relationship.",

        synonyms: [
            "essential",
            "vital",
            "crucial",
            "fundamental",
            "necessary"
        ],

        status: "notAttempted"
    },

    {
        word: "intrepid",
        definition: "Fearless and adventurous",
        sentence: "The ________ explorer ventured into unknown territory.",

        synonyms: [
            "brave",
            "fearless",
            "bold",
            "courageous",
            "daring"
        ],

        status: "notAttempted"
    },

    {
        word: "judicious",
        definition: "Showing good judgment",
        sentence: "Her ________ decision prevented a financial mistake.",

        synonyms: [
            "wise",
            "prudent",
            "sensible",
            "careful",
            "thoughtful"
        ],

        status: "notAttempted"
    },

    {
        word: "knell",
        definition: "A sound signaling an ending or death",
        sentence: "The closing of the factory was the ________ of the town's prosperity.",

        synonyms: [
            "omen",
            "signal",
            "warning",
            "death knell",
            "announcement"
        ],

        status: "notAttempted"
    },

    {
        word: "larceny",
        definition: "The unlawful taking of personal property",
        sentence: "He was charged with ________ after stealing the wallet.",

        synonyms: [
            "theft",
            "stealing",
            "robbery",
            "burglary",
            "stealing offense"
        ],

        status: "notAttempted"
    },

    {
        word: "limpid",
        definition: "Clear, transparent, or easily understood",
        sentence: "The lake was so ________ that fish could be seen swimming near the surface.",

        synonyms: [
            "clear",
            "transparent",
            "lucid",
            "crystal",
            "pure"
        ],

        status: "notAttempted"
    },
    
    {
        word: "luminous",
        definition: "Emitting or reflecting light; bright or radiant",
        sentence: "The ________ moon lit up the entire forest path.",

        synonyms: [
            "bright",
            "glowing",
            "radiant",
            "shining",
            "lusterous"
        ],

        status: "notAttempted"
    },

    {
        word: "manifold",
        definition: "Many and varied; having multiple forms or parts",
        sentence: "The project faced ________ challenges across different departments.",

        synonyms: [
            "numerous",
            "diverse",
            "multiple",
            "varied",
            "many"
        ],

        status: "notAttempted"
    },

    {
        word: "modicum",
        definition: "A small amount or portion of something",
        sentence: "He showed a ________ of patience during the long meeting.",

        synonyms: [
            "trace",
            "bit",
            "hint",
            "touch",
            "smidgen"
        ],

        status: "notAttempted"
    },

    {
        word: "morass",
        definition: "A complicated or confusing situation; swamp-like difficulty",
        sentence: "The negotiations descended into a ________ of conflicting demands.",

        synonyms: [
            "quagmire",
            "mess",
            "swamp",
            "confusion",
            "tangle"
        ],

        status: "notAttempted"
    },

    {
        word: "nadir",
        definition: "The lowest point in a situation or condition",
        sentence: "The company reached its ________ after the major financial scandal.",

        synonyms: [
            "bottom",
            "low point",
            "depth",
            "rock bottom",
            "trough"
        ],

        status: "notAttempted"
    },

    {
        word: "notorious",
        definition: "Famous for something bad or undesirable",
        sentence: "The hacker became ________ after breaching multiple security systems.",

        synonyms: [
            "infamous",
            "disreputable",
            "noted",
            "ill-famed",
            "noted-for-bad"
        ],

        status: "notAttempted"
    },

    {
        word: "novice",
        definition: "A beginner or someone new to a skill or activity",
        sentence: "As a ________, she was still learning the basic rules of chess.",

        synonyms: [
            "beginner",
            "newcomer",
            "amateur",
            "rookie",
            "starter"
        ],

        status: "notAttempted"
    },

    {
        word: "oblique",
        definition: "Indirect or not straightforward",
        sentence: "He gave an ________ answer instead of addressing the question directly.",

        synonyms: [
            "indirect",
            "vague",
            "circuitous",
            "hinted",
            "unclear"
        ],

        status: "notAttempted"
    },

    {
        word: "opulent",
        definition: "Rich and luxurious; lavish",
        sentence: "The palace was decorated in an ________ style with gold and marble.",

        synonyms: [
            "luxurious",
            "lavish",
            "wealthy",
            "rich",
            "grand"
        ],

        status: "notAttempted"
    }
];

// Timer variables and application state
let timeLeft = 15;
let timerInterval;
let currentIndex = 0;
let submitted = false;

// DOM elements for score tracking
const correctDisplay =
    document.getElementById("correctCount");

const learningDisplay =
    document.getElementById("learningCount");

const notAttemptedDisplay =
    document.getElementById("notAttemptedCount");

// DOM elements for the vocabulary card
const definition = document.getElementById("definition");
const sentence = document.getElementById("sentence");
const result = document.getElementById("result");
const answerInput = document.getElementById("answerInput");

const reviewArea =
    document.getElementById("reviewArea");


// Randomize the order of vocabulary words
function shuffleWords() {
    
    for (let i = words.length - 1; i > 0; i--) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [words[i], words[randomIndex]] =
            [words[randomIndex], words[i]];
    }
}


// Update the score tracker based on each word's status
function updateScoreDisplay() {


    let correct = 0;
    let learning = 0;
    let notAttempted = 0;

    for (let word of words) {
        
        if (word.status === "correct") {
            correct++;
        }

        else if (word.status === "learning") {
            learning++;
        }

        else {
            notAttempted++;
        }
    }

    correctDisplay.textContent = correct;
    learningDisplay.textContent = learning;
    notAttemptedDisplay.textContent = notAttempted;
}


// Display the current word's definition and sentence
function loadWord() {

    const currentWord = words[currentIndex];

    definition.textContent = currentWord.definition;
    sentence.textContent = currentWord.sentence;

    answerInput.value = "";
    result.textContent = "";

    startTimer();
}

// Display all words marked as "still learning"
function showReviewWords() {
    
    const reviewWords = 
        words.filter(
            word => word.status === "learning"
        );

    if (reviewWords.length === 0) {

        reviewArea.innerHTML =
            "<p> No review words. Good job!</p>";

        return;
    }

    let html =
        "<h3>Review Words</h3>";

    for (let word of reviewWords) {

        html += `
            <div class="review-card">

                <h4>${word.word}</h4>

                <p>
                    <strong>Definition:</strong>
                    ${word.definition}
                </p>

                <p>
                    <strong>Sentence:</strong>
                    ${word.sentence}
                </p>
            </div>
       `;
    }

    reviewArea.innerHTML = html;
}

// Save user progress to local storage
function saveProgress() {

    localStorage.setItem(
        "satWords",
        JSON.stringify(words)
    );
}

// Load saved progress from local storage
function loadProgress() {

    const savedWords =
        localStorage.getItem("satWords")

    if (!savedWords) {
        return;
    }

    const parsedWords =
        JSON.parse(savedWords);

    for (let currentWord of words) {

        const savedWords =
            parsedWords.find(
                word =>
                    word.word === currentWord.word
            );
        
        if (savedWords) {

            currentWord.status =
                savedWords.status;
        }
    }
}

// Start or restart the countdown timer
function startTimer() {

    clearInterval(timerInterval);

    timeLeft = 15;

    document.getElementById("timer")
        .textContent = timeLeft;

    timerInterval = setInterval(function() {
        
        timeLeft--;

        document.getElementById("timer")
            .textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            result.textContent =
                "Time's up! The word was " + 
                words[currentIndex].word;

            words[currentIndex].status =
                "learning";

            submitted = true;

            updateScoreDisplay();
            saveProgress();
        }
    }, 1000);
}

// Check the user's answer and update progress
document.getElementById("submitButton")
.addEventListener("click", function() {

    if (submitted) {
        return;
    }

    submitted = true;
    clearInterval(timerInterval);

    const userAnswer =
        answerInput.value.trim().toLowerCase();

    const correctAnswer =
        words[currentIndex].word.toLowerCase();

    if (userAnswer === correctAnswer) {

        result.textContent =
            "Correct!";
        result.style.color = "darkgreen";

        words[currentIndex].status =
            "correct";

    } 
    
    else if (
        words[currentIndex].synonyms.includes(userAnswer)
    ) {

        result.textContent =
            "Very close! The SAT word was " +
            words[currentIndex].word;
        result.style.color = "orange";

        words[currentIndex].status =
            "learning";

    } 
    
    else {

        result.textContent =
            "Incorrect. The word was " +
            words[currentIndex].word;
        result.style.color = "red";

        words[currentIndex].status =
            "learning";
    }

    updateScoreDisplay();
    saveProgress();

});

// Move to the next vocabulary word
document.getElementById("nextButton")
.addEventListener("click", function() {

    submitted = false;

    currentIndex++;

    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    loadWord();

});

// Show words that need additional review
document.getElementById("reviewButton")
.addEventListener("click", function() {

    showReviewWords();
});

// Shuffle the vocabulary list and restart practite
document.getElementById("shuffleButton")
.addEventListener("click", function() {

    clearInterval(timerInterval);
    shuffleWords();
    currentIndex = 0;
    submitted = false;
    loadWord();
});

// Allow users to submit answers by pressing "enter"
answerInput.addEventListener(
    "keydown",
    function(event) {
        if (event.key === "Enter") {
            document
                .getElementById("submitButton")
                .click();
        }
    }
);

// Initialize the SAT vocabulary trainer
shuffleWords();
loadProgress();
loadWord();
updateScoreDisplay();