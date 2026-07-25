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
    },

        {
        word: "abate",
        definition: "To become less intense or severe",
        sentence: "The storm finally began to ________, allowing rescue teams to reach the affected areas.",

        synonyms: [
            "subside",
            "diminish",
            "decrease",
            "ease",
            "lessen"
        ],

        status: "notAttempted"
    },

    {
        word: "abrupt",
        definition: "Sudden and unexpected; lacking smoothness",
        sentence: "The speaker's ________ departure left the audience confused and full of questions.",

        synonyms: [
            "sudden",
            "unexpected",
            "hasty",
            "sharp",
            "instant"
        ],

        status: "notAttempted"
    },

    {
        word: "abstract",
        definition: "Existing as an idea rather than a physical object",
        sentence: "Justice is an ________ concept that can be difficult to define precisely.",

        synonyms: [
            "theoretical",
            "conceptual",
            "intangible",
            "symbolic",
            "ideal"
        ],

        status: "notAttempted"
    },

    {
        word: "abysmal",
        definition: "Extremely bad or of very poor quality",
        sentence: "The company's ________ customer service caused many clients to switch to competitors.",

        synonyms: [
            "terrible",
            "dreadful",
            "awful",
            "atrocious",
            "horrible"
        ],

        status: "notAttempted"
    },

    {
        word: "acceptable",
        definition: "Satisfactory enough to be approved or tolerated",
        sentence: "Although the proposal was not perfect, it was considered ________ by the committee.",

        synonyms: [
            "satisfactory",
            "adequate",
            "suitable",
            "reasonable",
            "passable"
        ],

        status: "notAttempted"
    },

    {
        word: "accidental",
        definition: "Happening by chance rather than by intention",
        sentence: "The scientist discovered the new material through an ________ observation.",

        synonyms: [
            "unintentional",
            "chance",
            "unexpected",
            "incidental",
            "unplanned"
        ],

        status: "notAttempted"
    },

    {
        word: "accommodate",
        definition: "To provide space for or meet the needs of someone or something",
        sentence: "The university expanded its residence halls to ________ the growing number of students.",

        synonyms: [
            "assist",
            "adapt",
            "fit",
            "house",
            "serve"
        ],

        status: "notAttempted"
    },

    {
        word: "accuracy",
        definition: "The quality of being correct and free from errors",
        sentence: "Engineers carefully checked every calculation to ensure its ________.",

        synonyms: [
            "precision",
            "correctness",
            "exactness",
            "reliability",
            "faithfulness"
        ],

        status: "notAttempted"
    },

    {
        word: "acknowledge",
        definition: "To recognize or admit the existence or truth of something",
        sentence: "The researcher was careful to ________ the contributions of every team member.",

        synonyms: [
            "admit",
            "recognize",
            "accept",
            "confirm",
            "concede"
        ],

        status: "notAttempted"
    },

    {
        word: "acquired",
        definition: "Gained or obtained through effort or experience",
        sentence: "She ________ valuable leadership skills while managing community projects.",

        synonyms: [
            "obtained",
            "gained",
            "earned",
            "secured",
            "developed"
        ],

        status: "notAttempted"
    },

    {
        word: "adapt",
        definition: "To adjust to new conditions or circumstances",
        sentence: "Successful entrepreneurs must ________ quickly to changing market demands.",

        synonyms: [
            "adjust",
            "modify",
            "acclimate",
            "conform",
            "change"
        ],

        status: "notAttempted"
    },

    {
        word: "adept",
        definition: "Highly skilled or proficient",
        sentence: "The programmer was ________ at solving complex coding challenges in a short amount of time.",

        synonyms: [
            "skillful",
            "proficient",
            "expert",
            "capable",
            "talented"
        ],

        status: "notAttempted"
    },

    {
        word: "adequate",
        definition: "Enough to meet a particular need or requirement",
        sentence: "The emergency supplies were ________ for only a few days of relief efforts.",

        synonyms: [
            "sufficient",
            "enough",
            "acceptable",
            "competent",
            "satisfactory"
        ],

        status: "notAttempted"
    },

    {
        word: "adhere",
        definition: "To stick firmly to or follow faithfully",
        sentence: "Employees are expected to ________ to the company's safety regulations at all times.",

        synonyms: [
            "follow",
            "obey",
            "comply",
            "observe",
            "stick"
        ],

        status: "notAttempted"
    },

    {
        word: "adjust",
        definition: "To change slightly in order to improve or fit new conditions",
        sentence: "The photographer had to ________ the camera settings as the lighting changed.",

        synonyms: [
            "modify",
            "adapt",
            "alter",
            "revise",
            "regulate"
        ],

        status: "notAttempted"
    },

    {
        word: "admire",
        definition: "To regard with respect, approval, or appreciation",
        sentence: "Many students ________ the professor for her dedication to teaching.",

        synonyms: [
            "respect",
            "appreciate",
            "esteem",
            "value",
            "praise"
        ],

        status: "notAttempted"
    },

    {
        word: "advantageous",
        definition: "Providing a benefit or favorable outcome",
        sentence: "Learning multiple programming languages can be highly ________ when applying for internships.",

        synonyms: [
            "beneficial",
            "favorable",
            "helpful",
            "valuable",
            "profitable"
        ],

        status: "notAttempted"
    },

        {
        word: "advent",
        definition: "The arrival or beginning of something important",
        sentence: "The ________ of artificial intelligence has transformed countless industries.",

        synonyms: [
            "arrival",
            "beginning",
            "emergence",
            "appearance",
            "onset"
        ],

        status: "notAttempted"
    },

    {
        word: "advise",
        definition: "To offer guidance or recommendations",
        sentence: "Experts often ________ investors to diversify their portfolios.",

        synonyms: [
            "recommend",
            "counsel",
            "guide",
            "suggest",
            "urge"
        ],

        status: "notAttempted"
    },

    {
        word: "aggravate",
        definition: "To make a problem or situation worse",
        sentence: "Ignoring the small crack only served to ________ the damage over time.",

        synonyms: [
            "worsen",
            "intensify",
            "increase",
            "exacerbate",
            "compound"
        ],

        status: "notAttempted"
    },

    {
        word: "aggressive",
        definition: "Forceful, determined, or ready to attack",
        sentence: "The company adopted an ________ marketing strategy to outperform its competitors.",

        synonyms: [
            "assertive",
            "forceful",
            "hostile",
            "fierce",
            "determined"
        ],

        status: "notAttempted"
    },

    {
        word: "allude",
        definition: "To refer to something indirectly",
        sentence: "The author seemed to ________ to historical events without mentioning them by name.",

        synonyms: [
            "refer",
            "hint",
            "suggest",
            "imply",
            "mention"
        ],

        status: "notAttempted"
    },

    {
        word: "ambiguity",
        definition: "The quality of having more than one possible meaning",
        sentence: "The contract's ________ led to disagreements between the two companies.",

        synonyms: [
            "uncertainty",
            "vagueness",
            "obscurity",
            "equivocation",
            "indefiniteness"
        ],

        status: "notAttempted"
    },

    {
        word: "ambivalence",
        definition: "Having mixed or conflicting feelings about something",
        sentence: "She felt ________ about accepting the job because it required moving far from home.",

        synonyms: [
            "uncertainty",
            "indecision",
            "hesitation",
            "conflict",
            "doubt"
        ],

        status: "notAttempted"
    },

    {
        word: "amusing",
        definition: "Causing laughter or entertainment",
        sentence: "The comedian's ________ stories kept the audience laughing throughout the evening.",

        synonyms: [
            "funny",
            "entertaining",
            "humorous",
            "comical",
            "witty"
        ],

        status: "notAttempted"
    },

    {
        word: "annotate",
        definition: "To add notes or comments to a text",
        sentence: "Students were asked to ________ the article before discussing it in class.",

        synonyms: [
            "comment",
            "note",
            "explain",
            "label",
            "mark"
        ],

        status: "notAttempted"
    },

    {
        word: "bold",
        definition: "Showing confidence and willingness to take risks",
        sentence: "The entrepreneur made the ________ decision to launch the startup during an economic downturn.",

        synonyms: [
            "brave",
            "fearless",
            "daring",
            "courageous",
            "audacious"
        ],

        status: "notAttempted"
    },

    {
        word: "candid",
        definition: "Honest and straightforward",
        sentence: "The manager gave a ________ assessment of the team's performance.",

        synonyms: [
            "honest",
            "frank",
            "direct",
            "truthful",
            "open"
        ],

        status: "notAttempted"
    },

    {
        word: "coincidence",
        definition: "A remarkable occurrence of events happening by chance",
        sentence: "It was a strange ________ that they both arrived at the airport at the exact same moment.",

        synonyms: [
            "chance",
            "accident",
            "fluke",
            "happenstance",
            "concurrence"
        ],

        status: "notAttempted"
    },

    {
        word: "competent",
        definition: "Having the necessary ability or skill to do something successfully",
        sentence: "A ________ engineer carefully tests each design before approving it for production.",

        synonyms: [
            "capable",
            "qualified",
            "proficient",
            "skilled",
            "efficient"
        ],

        status: "notAttempted"
    },

    {
        word: "compose",
        definition: "To create or put together",
        sentence: "The musician spent several weeks trying to ________ a piece for the orchestra.",

        synonyms: [
            "create",
            "write",
            "produce",
            "construct",
            "form"
        ],

        status: "notAttempted"
    },

    {
        word: "conceal",
        definition: "To hide or keep something from being seen",
        sentence: "The witness tried to ________ important evidence from the investigators.",

        synonyms: [
            "hide",
            "cover",
            "disguise",
            "mask",
            "suppress"
        ],

        status: "notAttempted"
    },

    {
        word: "concerning",
        definition: "Causing worry or relating to a particular subject",
        sentence: "Scientists reported several ________ changes in the region's climate patterns.",

        synonyms: [
            "worrying",
            "troubling",
            "alarming",
            "disturbing",
            "unsettling"
        ],

        status: "notAttempted"
    },

    {
        word: "conflated",
        definition: "Combined two or more ideas into one, often incorrectly",
        sentence: "The article ________ correlation with causation, leading readers to false conclusions.",

        synonyms: [
            "combined",
            "merged",
            "blended",
            "mixed",
            "confused"
        ],

        status: "notAttempted"
    },

    {
        word: "contrived",
        definition: "Artificial or deliberately created rather than natural",
        sentence: "The movie's ending felt so ________ that many viewers found it unrealistic.",

        synonyms: [
            "artificial",
            "forced",
            "unnatural",
            "fabricated",
            "staged"
        ],

        status: "notAttempted"
    },

    {
        word: "cordially",
        definition: "In a warm, friendly, and sincere manner",
        sentence: "The ambassador ________ welcomed the visiting delegation before the negotiations began.",

        synonyms: [
            "warmly",
            "kindly",
            "graciously",
            "amicably",
            "politely"
        ],

        status: "notAttempted"
    },

    {
        word: "costly",
        definition: "Requiring a great deal of money or resulting in significant loss",
        sentence: "The company's failure to fix the defect proved to be a ________ mistake.",

        synonyms: [
            "expensive",
            "pricey",
            "valuable",
            "high-priced",
            "dear"
        ],

        status: "notAttempted"
    },

        {
        word: "discord",
        definition: "Disagreement or lack of harmony between people or groups",
        sentence: "Political ________ within the organization prevented members from reaching a compromise.",

        synonyms: [
            "conflict",
            "disagreement",
            "strife",
            "dissension",
            "friction"
        ],

        status: "notAttempted"
    },

    {
        word: "discourage",
        definition: "To reduce someone's confidence or enthusiasm",
        sentence: "Constructive criticism should help students improve rather than ________ them from trying again.",

        synonyms: [
            "deter",
            "dishearten",
            "demoralize",
            "dishearten",
            "depress"
        ],

        status: "notAttempted"
    },

    {
        word: "discretion",
        definition: "The ability to make careful and wise decisions; caution in one's actions",
        sentence: "The journalist used great ________ when handling confidential information.",

        synonyms: [
            "prudence",
            "judgment",
            "caution",
            "wisdom",
            "care"
        ],

        status: "notAttempted"
    },

    {
        word: "disorienting",
        definition: "Causing someone to feel confused or lose their sense of direction",
        sentence: "The maze was so ________ that visitors frequently needed assistance finding the exit.",

        synonyms: [
            "confusing",
            "bewildering",
            "perplexing",
            "disconcerting",
            "unsettling"
        ],

        status: "notAttempted"
    },

    {
        word: "disparate",
        definition: "Fundamentally different or distinct",
        sentence: "The committee had to reconcile the ________ opinions of experts from different fields.",

        synonyms: [
            "different",
            "distinct",
            "divergent",
            "contrasting",
            "unrelated"
        ],

        status: "notAttempted"
    },

    {
        word: "distract",
        definition: "To divert someone's attention away from something",
        sentence: "Loud conversations can easily ________ students during an important exam.",

        synonyms: [
            "divert",
            "interrupt",
            "sidetrack",
            "disturb",
            "preoccupy"
        ],

        status: "notAttempted"
    },

    {
        word: "diverse",
        definition: "Showing a great deal of variety; composed of different kinds",
        sentence: "The university attracts a ________ student body from countries around the world.",

        synonyms: [
            "varied",
            "different",
            "multifaceted",
            "assorted",
            "heterogeneous"
        ],

        status: "notAttempted"
    },

    {
        word: "earnest",
        definition: "Serious and sincere in intention or purpose",
        sentence: "Her ________ desire to improve the community inspired others to volunteer.",

        synonyms: [
            "sincere",
            "serious",
            "genuine",
            "wholehearted",
            "determined"
        ],

        status: "notAttempted"
    },

    {
        word: "eloquent",
        definition: "Persuasive and expressive in speaking or writing",
        sentence: "The lawyer delivered an ________ argument that convinced the jury.",

        synonyms: [
            "articulate",
            "expressive",
            "persuasive",
            "fluent",
            "well-spoken"
        ],

        status: "notAttempted"
    },

    {
        word: "encompass",
        definition: "To include or cover a wide range of things",
        sentence: "The course will ________ topics ranging from cybersecurity to artificial intelligence.",

        synonyms: [
            "include",
            "contain",
            "embrace",
            "cover",
            "incorporate"
        ],

        status: "notAttempted"
    },

    {
        word: "evoke",
        definition: "To bring a feeling, memory, or image into the mind",
        sentence: "The old photograph seemed to ________ memories of her childhood.",

        synonyms: [
            "elicit",
            "awaken",
            "prompt",
            "summon",
            "recall"
        ],

        status: "notAttempted"
    },

    {
        word: "fabricate",
        definition: "To invent or create something false",
        sentence: "The witness was caught trying to ________ evidence during the investigation.",

        synonyms: [
            "invent",
            "forge",
            "falsify",
            "manufacture",
            "devise"
        ],

        status: "notAttempted"
    },

    {
        word: "grapple",
        definition: "To struggle with or try hard to deal with a difficult problem",
        sentence: "Scientists continue to ________ with the challenges of developing clean energy solutions.",

        synonyms: [
            "struggle",
            "contend",
            "wrestle",
            "cope",
            "tackle"
        ],

        status: "notAttempted"
    },

    {
        word: "highlight",
        definition: "To emphasize or make something especially noticeable",
        sentence: "The report was designed to ________ the most significant findings of the study.",

        synonyms: [
            "emphasize",
            "stress",
            "underline",
            "accentuate",
            "feature"
        ],

        status: "notAttempted"
    },

    {
        word: "hoard",
        definition: "To collect and keep large amounts of something, often excessively",
        sentence: "During the shortage, some shoppers began to ________ essential supplies.",

        synonyms: [
            "stockpile",
            "accumulate",
            "collect",
            "amass",
            "stash"
        ],

        status: "notAttempted"
    },

    {
        word: "hypothesize",
        definition: "To propose a possible explanation based on limited evidence",
        sentence: "Before conducting the experiment, researchers must ________ why the reaction occurs.",

        synonyms: [
            "theorize",
            "speculate",
            "propose",
            "infer",
            "predict"
        ],

        status: "notAttempted"
    },

    {
        word: "imaginative",
        definition: "Having the ability to create original and creative ideas",
        sentence: "The architect proposed an ________ design unlike anything the city had seen before.",

        synonyms: [
            "creative",
            "inventive",
            "innovative",
            "original",
            "resourceful"
        ],

        status: "notAttempted"
    },

    {
        word: "immune",
        definition: "Protected against or unaffected by something",
        sentence: "No organization is completely ________ to cybersecurity threats.",

        synonyms: [
            "resistant",
            "protected",
            "insusceptible",
            "unaffected",
            "invulnerable"
        ],

        status: "notAttempted"
    },

    {
        word: "implement",
        definition: "To put a plan or decision into effect",
        sentence: "The school plans to ________ a new attendance policy next semester.",

        synonyms: [
            "execute",
            "apply",
            "carry out",
            "enforce",
            "introduce"
        ],

        status: "notAttempted"
    },

        {
        word: "implicit",
        definition: "Suggested or understood without being directly stated",
        sentence: "Although the professor never said it outright, there was an ________ expectation that students would complete the reading before class.",

        synonyms: [
            "implied",
            "unstated",
            "indirect",
            "inferred",
            "understood"
        ],

        status: "notAttempted"
    },

    {
        word: "incite",
        definition: "To encourage or provoke someone to take action, especially something violent or unlawful",
        sentence: "The speaker's inflammatory remarks threatened to ________ a violent response from the crowd.",

        synonyms: [
            "provoke",
            "instigate",
            "stir",
            "prompt",
            "encourage"
        ],

        status: "notAttempted"
    },

    {
        word: "indifference",
        definition: "A lack of interest, concern, or sympathy",
        sentence: "The manager's ________ toward employee complaints lowered morale throughout the company.",

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
        word: "indulge",
        definition: "To allow oneself or someone else to enjoy something freely, often excessively",
        sentence: "After months of hard work, she decided to ________ in a relaxing vacation.",

        synonyms: [
            "pamper",
            "gratify",
            "satisfy",
            "treat",
            "spoil"
        ],

        status: "notAttempted"
    },

    {
        word: "influence",
        definition: "To affect or change someone's thoughts, actions, or decisions",
        sentence: "Parents often ________ their children's attitudes toward education.",

        synonyms: [
            "affect",
            "shape",
            "persuade",
            "impact",
            "sway"
        ],

        status: "notAttempted"
    },

    {
        word: "inhibit",
        definition: "To prevent, restrain, or slow down an action or process",
        sentence: "Fear of failure can ________ people from pursuing ambitious goals.",

        synonyms: [
            "restrain",
            "prevent",
            "hinder",
            "impede",
            "limit"
        ],

        status: "notAttempted"
    },

    {
        word: "inspect",
        definition: "To examine carefully in order to evaluate or discover something",
        sentence: "Engineers must ________ the bridge regularly to ensure it remains safe for public use.",

        synonyms: [
            "examine",
            "investigate",
            "scrutinize",
            "evaluate",
            "survey"
        ],

        status: "notAttempted"
    },

        {
        word: "insensible",
        definition: "Unable to feel, understand, or react; unconscious or unaware",
        sentence: "The hiker was found ________ after spending hours in the freezing temperatures.",

        synonyms: [
            "unconscious",
            "unaware",
            "unresponsive",
            "numb",
            "oblivious"
        ],

        status: "notAttempted"
    },

    {
        word: "interject",
        definition: "To interrupt a conversation by saying something",
        sentence: "The professor paused to let students ________ with questions during the lecture.",

        synonyms: [
            "interrupt",
            "insert",
            "intervene",
            "remark",
            "comment"
        ],

        status: "notAttempted"
    },

    {
        word: "intersect",
        definition: "To cross or meet at a point",
        sentence: "The two highways ________ just outside the city limits.",

        synonyms: [
            "cross",
            "meet",
            "overlap",
            "converge",
            "connect"
        ],

        status: "notAttempted"
    },

    {
        word: "intriguing",
        definition: "Arousing curiosity or great interest",
        sentence: "The scientist presented an ________ theory that challenged conventional thinking.",

        synonyms: [
            "fascinating",
            "captivating",
            "interesting",
            "compelling",
            "engaging"
        ],

        status: "notAttempted"
    },

    {
        word: "invent",
        definition: "To create or design something new",
        sentence: "Engineers hope to ________ a more efficient method of storing renewable energy.",

        synonyms: [
            "create",
            "devise",
            "design",
            "originate",
            "develop"
        ],

        status: "notAttempted"
    },

    {
        word: "invalidate",
        definition: "To make something no longer valid or acceptable",
        sentence: "Any evidence obtained illegally may ________ the entire investigation.",

        synonyms: [
            "nullify",
            "void",
            "cancel",
            "overturn",
            "disprove"
        ],

        status: "notAttempted"
    },

    {
        word: "involuntarily",
        definition: "Without conscious control or intention",
        sentence: "She ________ stepped back when the loud explosion startled her.",

        synonyms: [
            "automatically",
            "unintentionally",
            "instinctively",
            "unconsciously",
            "reflexively"
        ],

        status: "notAttempted"
    },

    {
        word: "isolate",
        definition: "To separate from others or set apart",
        sentence: "Researchers decided to ________ the variable to better understand its effects.",

        synonyms: [
            "separate",
            "detach",
            "segregate",
            "quarantine",
            "insulate"
        ],

        status: "notAttempted"
    },

    {
        word: "latent",
        definition: "Present but hidden or not yet developed",
        sentence: "The internship helped her discover a ________ talent for computer programming.",

        synonyms: [
            "hidden",
            "dormant",
            "undeveloped",
            "concealed",
            "potential"
        ],

        status: "notAttempted"
    },

    {
        word: "localized",
        definition: "Restricted to a particular area or place",
        sentence: "The flooding remained ________ to the neighborhoods near the river.",

        synonyms: [
            "limited",
            "confined",
            "restricted",
            "regional",
            "contained"
        ],

        status: "notAttempted"
    },

    {
        word: "manageable",
        definition: "Able to be controlled or dealt with successfully",
        sentence: "Breaking the project into smaller tasks made the workload more ________.",

        synonyms: [
            "controllable",
            "feasible",
            "practical",
            "reasonable",
            "attainable"
        ],

        status: "notAttempted"
    },

    {
        word: "mandatory",
        definition: "Required by rule, law, or authority",
        sentence: "Attendance at the laboratory safety training is ________ for all students.",

        synonyms: [
            "required",
            "compulsory",
            "obligatory",
            "necessary",
            "essential"
        ],

        status: "notAttempted"
    },

    {
        word: "mimic",
        definition: "To imitate someone's actions, speech, or behavior",
        sentence: "Young children often ________ the habits of the adults around them.",

        synonyms: [
            "imitate",
            "copy",
            "emulate",
            "mirror",
            "replicate"
        ],

        status: "notAttempted"
    },

    {
        word: "moderate",
        definition: "Not excessive; within reasonable limits",
        sentence: "Doctors recommend ________ exercise several times a week for good health.",

        synonyms: [
            "reasonable",
            "temperate",
            "average",
            "mild",
            "balanced"
        ],

        status: "notAttempted"
    },

    {
        word: "neglect",
        definition: "To fail to give proper attention or care to something",
        sentence: "Students who ________ their assignments often struggle at the end of the semester.",

        synonyms: [
            "ignore",
            "overlook",
            "disregard",
            "omit",
            "abandon"
        ],

        status: "notAttempted"
    },

    {
        word: "neutrality",
        definition: "The state of not supporting either side in a conflict or dispute",
        sentence: "The mediator maintained strict ________ throughout the negotiations.",

        synonyms: [
            "impartiality",
            "objectivity",
            "fairness",
            "nonpartisanship",
            "detachment"
        ],

        status: "notAttempted"
    },

    {
        word: "novel",
        definition: "New, original, or unlike anything seen before",
        sentence: "The researchers proposed a ________ solution to the environmental problem.",

        synonyms: [
            "original",
            "innovative",
            "fresh",
            "unique",
            "unprecedented"
        ],

        status: "notAttempted"
    },

    {
        word: "obligate",
        definition: "To require someone to do something by duty or law",
        sentence: "The contract will ________ both parties to fulfill their responsibilities.",

        synonyms: [
            "require",
            "compel",
            "bind",
            "commit",
            "force"
        ],

        status: "notAttempted"
    },

    {
        word: "obscure",
        definition: "Not well known or difficult to understand",
        sentence: "The professor referenced an ________ historical document that few students had encountered.",

        synonyms: [
            "unclear",
            "hidden",
            "unknown",
            "vague",
            "cryptic"
        ],

        status: "notAttempted"
    },

    {
        word: "observant",
        definition: "Quick to notice or perceive details",
        sentence: "An ________ detective noticed clues that everyone else had overlooked.",

        synonyms: [
            "perceptive",
            "attentive",
            "alert",
            "watchful",
            "aware"
        ],

        status: "notAttempted"
    },

    {
        word: "obsolete",
        definition: "No longer useful because something newer has replaced it",
        sentence: "Many businesses have replaced ________ technology with cloud-based systems.",

        synonyms: [
            "outdated",
            "outmoded",
            "antiquated",
            "old-fashioned",
            "superseded"
        ],

        status: "notAttempted"
    },

    {
        word: "occupy",
        definition: "To fill or take up space, time, or attention",
        sentence: "Preparing for the competition continued to ________ most of her free time.",

        synonyms: [
            "fill",
            "engage",
            "consume",
            "inhabit",
            "take"
        ],

        status: "notAttempted"
    },

    {
        word: "oddity",
        definition: "Something unusual or strange",
        sentence: "The rare plant was considered an ________ because it grew only in one remote valley.",

        synonyms: [
            "curiosity",
            "peculiarity",
            "anomaly",
            "quirk",
            "rarity"
        ],

        status: "notAttempted"
    },

    {
        word: "offhand",
        definition: "Done or said without preparation or careful thought",
        sentence: "His ________ remark unexpectedly offended several members of the audience.",

        synonyms: [
            "casual",
            "spontaneous",
            "impromptu",
            "careless",
            "unplanned"
        ],

        status: "notAttempted"
    },

    {
        word: "onset",
        definition: "The beginning of something, especially something significant",
        sentence: "Scientists detected the early ________ of the disease before symptoms became severe.",

        synonyms: [
            "beginning",
            "start",
            "commencement",
            "emergence",
            "arrival"
        ],

        status: "notAttempted"
    },

    {
        word: "overwhelmed",
        definition: "Feeling completely overcome by strong emotions or a large amount of work",
        sentence: "She felt ________ by the number of deadlines she had to meet that week.",

        synonyms: [
            "overburdened",
            "overloaded",
            "stressed",
            "swamped",
            "overpowered"
        ],

        status: "notAttempted"
    },

    {
        word: "paramount",
        definition: "More important than anything else; of greatest significance",
        sentence: "Ensuring passenger safety is of ________ importance to every airline.",

        synonyms: [
            "supreme",
            "chief",
            "primary",
            "essential",
            "foremost"
        ],

        status: "notAttempted"
    },

    {
        word: "paucity",
        definition: "A scarcity or insufficient quantity of something",
        sentence: "The ________ of reliable data made it difficult to reach a firm conclusion.",

        synonyms: [
            "scarcity",
            "shortage",
            "lack",
            "dearth",
            "deficiency"
        ],

        status: "notAttempted"
    },

    {
        word: "persistent",
        definition: "Continuing firmly despite difficulty or opposition",
        sentence: "Her ________ efforts eventually led to a breakthrough in the research.",

        synonyms: [
            "determined",
            "tenacious",
            "persevering",
            "steadfast",
            "relentless"
        ],

        status: "notAttempted"
    },

    {
        word: "postulate",
        definition: "To suggest or assume something as a basis for reasoning",
        sentence: "Scientists ________ that the particles interact in ways that cannot yet be directly observed.",

        synonyms: [
            "propose",
            "hypothesize",
            "assume",
            "theorize",
            "suggest"
        ],

        status: "notAttempted"
    },

    {
        word: "praise",
        definition: "To express approval or admiration",
        sentence: "The coach was quick to ________ the team for its outstanding performance.",

        synonyms: [
            "commend",
            "applaud",
            "admire",
            "compliment",
            "extol"
        ],

        status: "notAttempted"
    },

    {
        word: "predict",
        definition: "To say what will probably happen in the future",
        sentence: "Meteorologists use sophisticated models to ________ the path of hurricanes.",

        synonyms: [
            "forecast",
            "anticipate",
            "foresee",
            "project",
            "estimate"
        ],

        status: "notAttempted"
    },

        {
        word: "preserve",
        definition: "To protect or maintain something in its original state",
        sentence: "Conservationists work to ________ endangered species and their natural habitats.",

        synonyms: [
            "protect",
            "maintain",
            "conserve",
            "safeguard",
            "retain"
        ],

        status: "notAttempted"
    },

    {
        word: "prevail",
        definition: "To prove more powerful or successful; to triumph",
        sentence: "Despite numerous obstacles, determination helped the team ________ in the competition.",

        synonyms: [
            "triumph",
            "succeed",
            "overcome",
            "dominate",
            "win"
        ],

        status: "notAttempted"
    },

    {
        word: "proclaim",
        definition: "To announce something publicly or officially",
        sentence: "The mayor will ________ the opening of the city's new science center.",

        synonyms: [
            "announce",
            "declare",
            "broadcast",
            "pronounce",
            "state"
        ],

        status: "notAttempted"
    },

    {
        word: "produce",
        definition: "To create, manufacture, or bring something into existence",
        sentence: "Researchers hope to ________ a vaccine that is both effective and affordable.",

        synonyms: [
            "create",
            "generate",
            "manufacture",
            "develop",
            "yield"
        ],

        status: "notAttempted"
    },

    {
        word: "prolong",
        definition: "To make something last longer than usual",
        sentence: "Doctors worked quickly to ________ the patient's life until further treatment was available.",

        synonyms: [
            "extend",
            "lengthen",
            "continue",
            "delay",
            "stretch"
        ],

        status: "notAttempted"
    },

    {
        word: "quantity",
        definition: "The amount or number of something",
        sentence: "The experiment required a precise ________ of each chemical to ensure accurate results.",

        synonyms: [
            "amount",
            "number",
            "volume",
            "measure",
            "sum"
        ],

        status: "notAttempted"
    },

    {
        word: "quarrel",
        definition: "A heated argument or disagreement",
        sentence: "A minor misunderstanding escalated into a lengthy ________ between the neighbors.",

        synonyms: [
            "argument",
            "dispute",
            "conflict",
            "clash",
            "disagreement"
        ],

        status: "notAttempted"
    },

    {
        word: "ramify",
        definition: "To spread or develop into many branches or consequences",
        sentence: "The economic crisis began to ________ throughout the global financial system.",

        synonyms: [
            "branch",
            "spread",
            "expand",
            "extend",
            "multiply"
        ],

        status: "notAttempted"
    },

    {
        word: "rarely",
        definition: "Not often; infrequently",
        sentence: "The professor ________ cancels class, even during severe weather conditions.",

        synonyms: [
            "seldom",
            "infrequently",
            "occasionally",
            "hardly",
            "scarcely"
        ],

        status: "notAttempted"
    },

    {
        word: "rationalize",
        definition: "To justify or explain something with seemingly logical reasons",
        sentence: "He tried to ________ his poor decision by blaming the circumstances.",

        synonyms: [
            "justify",
            "explain",
            "defend",
            "excuse",
            "vindicate"
        ],

        status: "notAttempted"
    },

    {
        word: "recant",
        definition: "To publicly withdraw or take back a previous statement or belief",
        sentence: "The witness later decided to ________ the false testimony given during the trial.",

        synonyms: [
            "retract",
            "withdraw",
            "renounce",
            "revoke",
            "deny"
        ],

        status: "notAttempted"
    },

    {
        word: "receptive",
        definition: "Willing to consider or accept new ideas",
        sentence: "The committee was ________ to suggestions for improving the scholarship program.",

        synonyms: [
            "open-minded",
            "responsive",
            "accepting",
            "willing",
            "amenable"
        ],

        status: "notAttempted"
    },

    {
        word: "rectify",
        definition: "To correct or make right",
        sentence: "The company acted quickly to ________ the accounting errors before releasing the report.",

        synonyms: [
            "correct",
            "fix",
            "remedy",
            "amend",
            "repair"
        ],

        status: "notAttempted"
    },

    {
        word: "redress",
        definition: "To remedy or correct an unfair situation",
        sentence: "The organization established a committee to ________ complaints from employees.",

        synonyms: [
            "remedy",
            "correct",
            "compensate",
            "resolve",
            "repair"
        ],

        status: "notAttempted"
    },

    {
        word: "refute",
        definition: "To prove that a statement or argument is false",
        sentence: "The scientist presented new evidence to ________ the widely accepted theory.",

        synonyms: [
            "disprove",
            "debunk",
            "contradict",
            "invalidate",
            "rebut"
        ],

        status: "notAttempted"
    },

    {
        word: "relocate",
        definition: "To move to a different place",
        sentence: "The company decided to ________ its headquarters to a larger city.",

        synonyms: [
            "move",
            "transfer",
            "resettle",
            "shift",
            "reposition"
        ],

        status: "notAttempted"
    },

    {
        word: "repress",
        definition: "To hold back or suppress thoughts, feelings, or actions",
        sentence: "It is unhealthy to constantly ________ emotions instead of expressing them appropriately.",

        synonyms: [
            "suppress",
            "restrain",
            "contain",
            "subdue",
            "control"
        ],

        status: "notAttempted"
    },

    {
        word: "reprieve",
        definition: "A temporary relief or delay from something unpleasant",
        sentence: "The weekend provided a brief ________ from the demanding workload.",

        synonyms: [
            "relief",
            "respite",
            "delay",
            "break",
            "pause"
        ],

        status: "notAttempted"
    },

    {
        word: "resolve",
        definition: "To find a solution to a problem or settle a dispute",
        sentence: "The mediator helped both sides ________ the conflict peacefully.",

        synonyms: [
            "settle",
            "solve",
            "resolve",
            "determine",
            "conclude"
        ],

        status: "notAttempted"
    },

    {
        word: "restore",
        definition: "To return something to its original or improved condition",
        sentence: "Volunteers worked together to ________ the historic building after the fire.",

        synonyms: [
            "repair",
            "renew",
            "rebuild",
            "revive",
            "recover"
        ],

        status: "notAttempted"
    },

    {
        word: "retain",
        definition: "To continue to keep or possess something",
        sentence: "Reviewing notes regularly helps students ________ information for a longer time.",

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
        word: "rousing",
        definition: "Inspiring enthusiasm or excitement",
        sentence: "The coach delivered a ________ speech before the championship game.",

        synonyms: [
            "inspiring",
            "stirring",
            "exciting",
            "motivating",
            "energizing"
        ],

        status: "notAttempted"
    },

    {
        word: "sanction",
        definition: "An official approval or a penalty imposed by authority, depending on context",
        sentence: "The committee voted to ________ the proposal after months of careful review.",

        synonyms: [
            "authorize",
            "approve",
            "permit",
            "endorse",
            "ratify"
        ],

        status: "notAttempted"
    },

    {
        word: "scorn",
        definition: "A feeling or expression of contempt or disrespect",
        sentence: "She treated the dishonest proposal with complete ________.",

        synonyms: [
            "contempt",
            "disdain",
            "derision",
            "mockery",
            "disrespect"
        ],

        status: "notAttempted"
    },

    {
        word: "simulate",
        definition: "To imitate the appearance or behavior of something",
        sentence: "Pilots use advanced software to ________ emergency situations during training.",

        synonyms: [
            "imitate",
            "model",
            "replicate",
            "reproduce",
            "emulate"
        ],

        status: "notAttempted"
    },

    {
        word: "sincerity",
        definition: "The quality of being honest and genuine",
        sentence: "Her ________ made the apology believable and heartfelt.",

        synonyms: [
            "honesty",
            "genuineness",
            "earnestness",
            "truthfulness",
            "candor"
        ],

        status: "notAttempted"
    },

    {
        word: "span",
        definition: "The length of time or distance that something covers",
        sentence: "The bridge has a remarkable ________ of nearly two kilometers.",

        synonyms: [
            "extent",
            "duration",
            "length",
            "range",
            "stretch"
        ],

        status: "notAttempted"
    },

    {
        word: "spurious",
        definition: "False or not genuine; misleading",
        sentence: "The article relied on ________ evidence that could not be verified.",

        synonyms: [
            "false",
            "fake",
            "bogus",
            "deceptive",
            "fraudulent"
        ],

        status: "notAttempted"
    },

    {
        word: "stark",
        definition: "Very obvious, plain, or sharply contrasted",
        sentence: "There was a ________ difference between the two candidates' qualifications.",

        synonyms: [
            "obvious",
            "sharp",
            "striking",
            "blatant",
            "pronounced"
        ],

        status: "notAttempted"
    },

    {
        word: "subtle",
        definition: "Not obvious; requiring careful thought or attention to notice",
        sentence: "The author used ________ hints to foreshadow the novel's ending.",

        synonyms: [
            "delicate",
            "slight",
            "faint",
            "nuanced",
            "indirect"
        ],

        status: "notAttempted"
    }

];