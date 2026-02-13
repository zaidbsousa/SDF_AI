// Character Data for Dynamic Character Pages
const characterData = {
    aya: {
        id: 'aya',
        name: 'آية',
        nameEn: 'Aya',
        role: 'الصديقة القوية الهادئة',
        image: '/assets/ayaWebsite.webp',
        voice: '/assets/ayaWebsite.mp3',
        audience: 'الفتيات الجامعيات، الشابات العاملات، البنات الباحثات عن تمكين',
        language: 'فصحى بسيطة مع لمسات لهجة خفيفة',
        values: ['الثقة', 'الاستقلالية', 'القوة الداخلية'],
        style: {
            description: 'واقعية، مباشرة، هادئة، وتفكر بعقلانية',
            traits: ['واقعية', 'مباشرة', 'هادئة', 'أقرب لشخص يفكر بعقلانية']
        },
        description: 'آية تمثل الفتيات الجامعيات والشابات العاملات. تتحدث بفصحى بسيطة مع لمسات غزاوية خفيفة. قيمتها الأساسية هي الثقة والاستقلالية والقوة الداخلية.',
        quote: 'مرّينا بأيام صعبة… بس كل يوم فيه فرصة صغيرة نرجّع توازننا. اعتني بحالك… حتى لو بدقيقة.',
        sampleQuotes: [
            'مرّينا بأيام صعبة… بس كل يوم فيه فرصة صغيرة نرجّع توازننا.',
            'اعتني حالك… حتى لو بدقيقة.',
            'الصحة النفسية مش رفاهية.'
        ],
        avoids: [
            'قومي وتخطّي',
            'إنتِ قوية وما بتخافي ولا بتتأثري',
            'ما في داعي تبكي'
        ],
        campaignRoles: {
            general: true,
            girlsContent: true,
            podcast: 'مواضيع التمكين',
            videos: true,
            safeSpaces: false,
            displacedContent: false,
            officialMessages: true
        }
    },
    atta: {
        id: 'atta',
        name: 'عطا',
        nameEn: 'Atta',
        role: 'الأخ الأكبر الداعم',
        image: '/assets/attaWebsite.webp',
        voice: '/assets/attaWebsite.mp3',
        audience: 'الشباب الذكور، طلاب الجامعات، المراهقون',
        language: 'لهجة غزاوية خفيفة محترمة',
        values: ['الحكمة', 'الطمأنينة', 'الخبرة الواقعية'],
        style: {
            description: 'بسيط، قريب، مريح، وبدون رسميات',
            traits: ['بسيط', 'قريب', 'مريح', 'بدون رسمية']
        },
        description: 'عطا يمثل الشباب الذكور وطلاب الجامعات. يتحدث بلهجة غزاوية محترمة وقريبة من القلب. قيمته الأساسية هي الحكمة والطمأنينة والخبرة الواقعية.',
        quote: 'بعرف الضغط اللي بتحسّه، اسمح لنفسك ترتاح شوي… طبيعي تتعب.',
        sampleQuotes: [
            'بعرف الضغط اللي بتحسّه… خلّينا نجرّب حركة بسيطة سوا.',
            'اسمح لنفسك ترتاح شوي… طبيعي تتعب.',
            'خطوة صغيرة… بتغيّر يومك.'
        ],
        avoids: [
            'شد حالك',
            'كل الشباب هيك… عادي',
            'انسى الموضوع'
        ],
        campaignRoles: {
            general: true,
            girlsContent: false,
            podcast: 'الصوت الرئيسي',
            videos: true,
            safeSpaces: false,
            displacedContent: true,
            officialMessages: true
        }
    },
    rawan: {
        id: 'rawan',
        name: 'روان',
        nameEn: 'Rawan',
        role: 'الأخت/الصديقة اللطيفة',
        image: '/assets/rawanWebsite.webp',
        voice: '/assets/rawanWebsite.mp3',
        audience: 'الفتيات المراهقات، النازحات، الفتيات في المساحات الآمنة',
        language: 'لهجة غزاوية خفيفة مع فصحى بسيطة',
        values: ['اللطف', 'الأمان', 'التعاطف'],
        style: {
            description: 'لطيفة، جملها قصيرة، مليئة بالتفهّم، وحساسة لمشاعر البنات',
            traits: ['لطيفة', 'قصيرة الجُمل', 'مليانة تفهّم', 'حساسة لمشاعر البنات']
        },
        description: 'روان تمثل الفتيات المراهقات والنازحات. تتحدث بلهجة غزاوية خفيفة وفصحى بسيطة. قيمتها الأساسية هي اللطف والأمان والتعاطف.',
        quote: 'أنا معك، احكي اللي بخاطرك… مش غلط لو حسّيتي بخوف… كلنا منمرّ بهيك لحظات.',
        sampleQuotes: [
            'أنا معك، احكي اللي بخاطرك…',
            'مش غلط لو حسّيتي بخوف… كلنا منمرّ بهيك لحظات.',
            'لو بحاجة تحكي مع حدا… في ناس جاهزين يسمعوك.'
        ],
        avoids: [
            'أنتِ حساسة زيادة',
            'ما تبالغي',
            'خلاص، انسي'
        ],
        campaignRoles: {
            general: true,
            girlsContent: true,
            podcast: 'مواضيع اللطف',
            videos: true,
            safeSpaces: true,
            displacedContent: true,
            officialMessages: true
        }
    }
};

