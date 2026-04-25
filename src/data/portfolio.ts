export interface PortfolioCategory {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    heroImage: string;
    images: { src: string; alt: string; width: number; height: number }[];
    whatsappMessage: string;
}

export const portfolioCategories: PortfolioCategory[] = [
    {
        slug: "wedding",
        name: "Wedding Photography",
        tagline: "Your love story, told in frames that last forever",
        description: "Beautiful candid and traditional Bengali wedding photography. We blend natural moments with beautifully directed portraits.",
        heroImage: "/images/wedding-ceremony.jpg",
        images: [
            { src: "/images/wedding-ceremony.jpg", alt: "Wedding ceremony", width: 1200, height: 800 },
            { src: "/images/wedding-bride.jpg", alt: "Bride portrait", width: 800, height: 1200 },
            { src: "/images/wedding-bride2.jpg", alt: "Bridal closeup", width: 800, height: 1200 },
            { src: "/images/wedding-haldi.jpg", alt: "Haldi ceremony", width: 1200, height: 800 },
        ],
        whatsappMessage: "Hi! I'm interested in Wedding Photography. My wedding date is ___. Could you share available packages?"
    },
    {
        slug: "pre-wedding",
        name: "Pre-Wedding",
        tagline: "Because the love before the vows is just as beautiful",
        description: "Capture the excitement and intimacy of your final moments before saying 'I do' at stunning locations across West Bengal.",
        heroImage: "/images/couple-prewedding.jpg",
        images: [
            { src: "/images/couple-prewedding.jpg", alt: "Couple pre-wedding shoot", width: 1200, height: 800 },
            { src: "/images/couple-romantic.jpg", alt: "Romantic couple portrait", width: 800, height: 1200 },
            { src: "/images/couple-candid.jpg", alt: "Candid couple moment", width: 1200, height: 800 },
            { src: "/images/couple-love.jpg", alt: "Couple in love", width: 800, height: 1200 },
            { src: "/images/couple-portrait.jpg", alt: "Couple portrait", width: 1200, height: 800 },
        ],
        whatsappMessage: "Hi! I'd like to book a Pre-Wedding photoshoot. Can you tell me about locations and packages?"
    },
    {
        slug: "baby",
        name: "Baby Photography",
        tagline: "Little moments. Enormous love.",
        description: "Document the fleeting, precious stages of your child's early life with a playful, patient, and warm approach.",
        heroImage: "/images/baby-newborn.jpg",
        images: [
            { src: "/images/baby-newborn.jpg", alt: "Newborn baby portrait", width: 1200, height: 800 },
            { src: "/images/child-birthday.jpg", alt: "Child birthday celebration", width: 800, height: 1200 },
            { src: "/images/birthday-party.jpg", alt: "Birthday party", width: 1200, height: 800 },
            { src: "/images/birthday-decor.jpg", alt: "Birthday decorations", width: 800, height: 1200 },
        ],
        whatsappMessage: "Hi! I'm looking for Baby Photography for my child. When are you available?"
    },
    {
        slug: "maternity",
        name: "Maternity",
        tagline: "Glowing and breathtaking",
        description: "Celebrate the beautiful journey of motherhood with elegant, natural-light maternity portraits.",
        heroImage: "/images/maternity-shoot.jpg",
        images: [
            { src: "/images/maternity-shoot.jpg", alt: "Maternity portrait", width: 800, height: 1200 },
        ],
        whatsappMessage: "Hi! I'd like to book a Maternity photoshoot. When are you available?"
    },
    {
        slug: "events",
        name: "Events & Functions",
        tagline: "Where laughter fills the room",
        description: "From corporate events to family gatherings, we capture the energy and joy of your special occasions.",
        heroImage: "/images/events-solo.jpg",
        images: [
            { src: "/images/events-solo.jpg", alt: "Event portrait", width: 1200, height: 800 },
            { src: "/images/birthday-cake.jpg", alt: "Birthday celebration", width: 800, height: 1200 },
            { src: "/images/family-portrait.jpg", alt: "Family at event", width: 1200, height: 800 },
        ],
        whatsappMessage: "Hi! I need a photographer for an upcoming event. Could you share details?"
    },
    {
        slug: "couple",
        name: "Couple Shoot",
        tagline: "Two hearts, one story",
        description: "Romantic, fun, and intimate couple photography sessions at beautiful outdoor and indoor locations.",
        heroImage: "/images/couple-romantic.jpg",
        images: [
            { src: "/images/couple-romantic.jpg", alt: "Romantic couple portrait", width: 800, height: 1200 },
            { src: "/images/couple-portrait.jpg", alt: "Couple portrait", width: 1200, height: 800 },
            { src: "/images/couple-candid.jpg", alt: "Candid couple moment", width: 1200, height: 800 },
            { src: "/images/couple-love.jpg", alt: "Couple in love", width: 800, height: 1200 },
        ],
        whatsappMessage: "Hi! I'd like to book a Couple photoshoot. What locations do you suggest?"
    }
];

