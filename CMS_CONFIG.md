# CMS Configuration for Home Page

This JSON configuration defines all editable fields for the home page CMS dashboard.

```json
{
  "pages": [
    {
      "page_id": "home",
      "page_name": "Home Page",
      "page_title": "حملة Restart",
      "sections": [
        {
          "section_id": "meta",
          "section_name": "SEO & Meta Tags",
          "fields": [
            {
              "field_id": "meta_title",
              "field_name": "Page Title",
              "field_type": "text",
              "default_value": "حملة Restart - إرجع لنفسك… وابدأ من جديد | الصحة النفسية والدعم النفسي الاجتماعي في غزة",
              "required": true
            },
            {
              "field_id": "meta_description",
              "field_name": "Meta Description",
              "field_type": "textarea",
              "default_value": "حملة Restart تهدف إلى مساعدة الشباب وأفراد المجتمع في غزة على إعادة التشغيل والعودة إلى التوازن بعد فترات من الضغط والصدمات. نقدم محتوى توعوي حول الصحة النفسية، بودكاست، وشخصيات داعمة للشباب واليافعين.",
              "required": true,
              "max_length": 160
            },
            {
              "field_id": "meta_keywords",
              "field_name": "Keywords",
              "field_type": "text",
              "default_value": "الصحة النفسية, الدعم النفسي الاجتماعي, غزة, حملة Restart, الصحة النفسية في غزة, دعم الشباب, الصحة النفسية للشباب, بودكاست الصحة النفسية, المنتدى الاجتماعي التنموي, SDF",
              "required": false
            },
            {
              "field_id": "og_image",
              "field_name": "Open Graph Image",
              "field_type": "image",
              "default_value": "assets/hero.webp",
              "required": true
            }
          ]
        },
        {
          "section_id": "header",
          "section_name": "Header & Navigation",
          "fields": [
            {
              "field_id": "logo",
              "field_name": "Logo Image",
              "field_type": "image",
              "default_value": "assets/mainLogo.webp",
              "required": true
            },
            {
              "field_id": "nav_items",
              "field_name": "Navigation Items",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "label",
                  "field_name": "Label",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "link",
                  "field_name": "Link",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "submenu",
                  "field_name": "Submenu Items",
                  "field_type": "repeater",
                  "required": false,
                  "fields": [
                    {
                      "field_id": "label",
                      "field_name": "Label",
                      "field_type": "text",
                      "required": true
                    },
                    {
                      "field_id": "link",
                      "field_name": "Link",
                      "field_type": "text",
                      "required": true
                    }
                  ]
                }
              ],
              "default_value": [
                {
                  "label": "الرئيسية",
                  "link": "#hero"
                },
                {
                  "label": "عن الحملة",
                  "link": "#about"
                },
                {
                  "label": "الفئات المستهدفة",
                  "link": "#audience"
                },
                {
                  "label": "شخصياتنا",
                  "link": "#characters",
                  "submenu": [
                    {
                      "label": "آية (Aya)",
                      "link": "/character/aya"
                    },
                    {
                      "label": "عطا (Atta)",
                      "link": "/character/atta"
                    },
                    {
                      "label": "روان (Rawan)",
                      "link": "/character/rawan"
                    }
                  ]
                },
                {
                  "label": "قنواتنا",
                  "link": "#quote"
                },
                {
                  "label": "تواصل معنا",
                  "link": "#quote"
                }
              ]
            }
          ]
        },
        {
          "section_id": "hero",
          "section_name": "Hero Section",
          "fields": [
            {
              "field_id": "badge",
              "field_name": "Badge Text",
              "field_type": "text",
              "default_value": "حملة Restart",
              "required": true
            },
            {
              "field_id": "title_line1",
              "field_name": "Title Line 1",
              "field_type": "text",
              "default_value": "إرجع/ي لنفسك …",
              "required": true
            },
            {
              "field_id": "title_line2",
              "field_name": "Title Line 2",
              "field_type": "text",
              "default_value": "وابــدأ/ي مـن جديـد",
              "required": true
            },
            {
              "field_id": "description",
              "field_name": "Description",
              "field_type": "textarea",
              "default_value": "لأن غزة اليوم بحاجة إلى مساحة تسمح للشباب واليافعين والفتيات والأسر… بأن يعيدوا التوازن، ويتنفّسوا، ويكسروا الصمت.",
              "required": true
            },
            {
              "field_id": "primary_button_text",
              "field_name": "Primary Button Text",
              "field_type": "text",
              "default_value": "شخصياتنا",
              "required": true
            },
            {
              "field_id": "primary_button_link",
              "field_name": "Primary Button Link",
              "field_type": "text",
              "default_value": "#characters",
              "required": true
            },
            {
              "field_id": "secondary_button_text",
              "field_name": "Secondary Button Text",
              "field_type": "text",
              "default_value": "بودكاست Restart في دقيقة",
              "required": true
            },
            {
              "field_id": "secondary_button_link",
              "field_name": "Secondary Button Link",
              "field_type": "text",
              "default_value": "#podcast",
              "required": true
            },
            {
              "field_id": "hero_image",
              "field_name": "Hero Image",
              "field_type": "image",
              "default_value": "assets/hero.webp",
              "required": true
            }
          ]
        },
        {
          "section_id": "about",
          "section_name": "About Section",
          "fields": [
            {
              "field_id": "section_title",
              "field_name": "Section Title",
              "field_type": "text",
              "default_value": "عن الحملة",
              "required": true
            },
            {
              "field_id": "intro_text",
              "field_name": "Introduction Text",
              "field_type": "textarea",
              "default_value": "أدّت سنوات طويلة من الصراع والأزمات الإنسانية في قطاع غزة إلى آثار خطيرة على الصحة النفسية، خاصةً لدى الفئات الأكثر هشاشة. تشير التقارير إلى أن أكثر من 1.2 مليون طفل في غزة يحتاجون إلى دعم نفسي مباشر بعد موجات الحرب الأخيرة.",
              "required": true
            },
            {
              "field_id": "tagline",
              "field_name": "Tagline",
              "field_type": "textarea",
              "default_value": "لأن غزة اليوم بحاجة إلى مساحة تسمح للشباب واليافعين والفتيات والأسر بأن يعيدوا التوازن، ويتنفّسوا، ويكسروا الصمت، ويعيدوا بناء طاقتهم النفسية والاجتماعية.",
              "required": true
            },
            {
              "field_id": "mission",
              "field_name": "Mission Statement",
              "field_type": "textarea",
              "default_value": "تهدف حملة Restart إلى مساعدة الشباب وأفراد المجتمع في غزة على \"إعادة التشغيل\" والعودة إلى التوازن بعد فترات من الضغط والصدمات، من خلال رفع الوعي، كسر الوصمة، وتشجيع طلب الدعم.",
              "required": true
            },
            {
              "field_id": "objectives_title",
              "field_name": "Objectives Title",
              "field_type": "text",
              "default_value": "أهداف الحملة",
              "required": true
            },
            {
              "field_id": "objectives",
              "field_name": "Objectives List",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "objective",
                  "field_name": "Objective",
                  "field_type": "textarea",
                  "required": true
                }
              ],
              "default_value": [
                {
                  "objective": "نشر محتوى بسيط وسهل الفهم حول الصحة النفسية والضغوط اليومية"
                },
                {
                  "objective": "تعزيز التفاعل الرقمي بين الشباب من خلال محتوى يقوده الأقران"
                },
                {
                  "objective": "تقديم نصائح عملية وتوعوية عن كيفية التعامل مع القلق، الخوف، الصدمات اليومية، والانهيار العاطفي"
                },
                {
                  "objective": "توجيه الجمهور إلى الخدمات المتاحة (مراكز دعم، خطوط ساخنة، مساحات آمنة)"
                },
                {
                  "objective": "بناء مجتمع رقمي داعم يوفر مساحة آمنة للحديث والتعبير"
                }
              ]
            },
            {
              "field_id": "about_image",
              "field_name": "About Image",
              "field_type": "image",
              "default_value": "assets/about.webp",
              "required": true
            }
          ]
        },
        {
          "section_id": "characters",
          "section_name": "Characters Section",
          "fields": [
            {
              "field_id": "section_title",
              "field_name": "Section Title",
              "field_type": "text",
              "default_value": "شخصيات الحملة",
              "required": true
            },
            {
              "field_id": "intro_text",
              "field_name": "Introduction Text",
              "field_type": "textarea",
              "default_value": "ثلاث شخصيات تمثل أصواتكم، تشارككم المشاعر، وتسمع منكم بلا أحكام.",
              "required": true
            },
            {
              "field_id": "characters",
              "field_name": "Characters",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "character_id",
                  "field_name": "Character ID",
                  "field_type": "text",
                  "required": true,
                  "readonly": true
                },
                {
                  "field_id": "name_ar",
                  "field_name": "Name (Arabic)",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "name_en",
                  "field_name": "Name (English)",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "role",
                  "field_name": "Role",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "image",
                  "field_name": "Character Image",
                  "field_type": "image",
                  "required": true
                },
                {
                  "field_id": "voice_audio",
                  "field_name": "Voice Audio File",
                  "field_type": "file",
                  "file_type": "audio",
                  "required": true
                },
                {
                  "field_id": "description",
                  "field_name": "Description",
                  "field_type": "textarea",
                  "required": true
                },
                {
                  "field_id": "style_description",
                  "field_name": "Style Description",
                  "field_type": "textarea",
                  "required": true
                },
                {
                  "field_id": "quote",
                  "field_name": "Quote",
                  "field_type": "textarea",
                  "required": true
                },
                {
                  "field_id": "character_link",
                  "field_name": "Character Detail Page Link",
                  "field_type": "text",
                  "required": true
                }
              ],
              "default_value": [
                {
                  "character_id": "aya",
                  "name_ar": "آية",
                  "name_en": "Aya",
                  "role": "الصديقة القوية الهادئة",
                  "image": "assets/ayaWebsite.webp",
                  "voice_audio": "assets/ayaWebsite.mp3",
                  "description": "آية تمثل الفتيات الجامعيات والشابات العاملات. تتحدث بفصحى بسيطة مع لمسات غزاوية خفيفة. قيمتها الأساسية هي الثقة والاستقلالية والقوة الداخلية.",
                  "style_description": "واقعية، مباشرة، هادئة، وتفكر بعقلانية.",
                  "quote": "مرّينا بأيام صعبة… بس كل يوم فيه فرصة صغيرة نرجّع توازننا. اعتني بحالك… حتى لو بدقيقة.",
                  "character_link": "/character/aya"
                },
                {
                  "character_id": "atta",
                  "name_ar": "عطا",
                  "name_en": "Atta",
                  "role": "الأخ الأكبر الداعم",
                  "image": "assets/attaWebsite.webp",
                  "voice_audio": "assets/attaWebsite.mp3",
                  "description": "عطا يمثل الشباب الذكور وطلاب الجامعات. يتحدث بلهجة غزاوية محترمة وقريبة من القلب. قيمته الأساسية هي الحكمة والطمأنينة والخبرة الواقعية.",
                  "style_description": "بسيط، قريب، مريح، وبدون رسميات.",
                  "quote": "بعرف الضغط اللي بتحسّه، اسمح لنفسك ترتاح شوي… طبيعي تتعب.",
                  "character_link": "/character/atta"
                },
                {
                  "character_id": "rawan",
                  "name_ar": "روان",
                  "name_en": "Rawan",
                  "role": "الأخت/الصديقة اللطيفة",
                  "image": "assets/rawanWebsite.webp",
                  "voice_audio": "assets/rawanWebsite.mp3",
                  "description": "روان تمثل الفتيات المراهقات والنازحات. تتحدث بلهجة غزاوية خفيفة وفصحى بسيطة. قيمتها الأساسية هي اللطف والأمان والتعاطف.",
                  "style_description": "لطيفة، جملها قصيرة، مليئة بالتفهّم، وحساسة لمشاعر البنات.",
                  "quote": "أنا معك، احكي اللي بخاطرك… مش غلط لو حسّيتي بخوف… كلنا منمرّ بهيك لحظات.",
                  "character_link": "/character/rawan"
                }
              ]
            }
          ]
        },
        {
          "section_id": "audience",
          "section_name": "Target Audience Section",
          "fields": [
            {
              "field_id": "section_title",
              "field_name": "Section Title",
              "field_type": "text",
              "default_value": "لمن هذه الحملة؟",
              "required": true
            },
            {
              "field_id": "intro_text",
              "field_name": "Introduction Text",
              "field_type": "textarea",
              "default_value": "نسعى للوصول إلى كل من يحتاج الدعم في غزة، مع التركيز على الفئات الأكثر هشاشة.",
              "required": true
            },
            {
              "field_id": "primary_audience_title",
              "field_name": "Primary Audience Title",
              "field_type": "text",
              "default_value": "الفئات الأساسية",
              "required": true
            },
            {
              "field_id": "primary_audience_items",
              "field_name": "Primary Audience Items",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "icon",
                  "field_name": "Icon Class",
                  "field_type": "text",
                  "default_value": "fas fa-user-graduate",
                  "required": true
                },
                {
                  "field_id": "title",
                  "field_name": "Title",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "description",
                  "field_name": "Description",
                  "field_type": "textarea",
                  "required": true
                }
              ],
              "default_value": [
                {
                  "icon": "fas fa-user-graduate",
                  "title": "اليافعين والشباب",
                  "description": "(10–24 سنة) من كلا الجنسين، بما يشمل الطلبة، المتطوعين، واليافعين في المساحات الآمنة."
                },
                {
                  "icon": "fas fa-female",
                  "title": "الفتيات المراهقات",
                  "description": "خصوصًا في الخيام والمساحات الآمنة، مع مراعاة خصوصية المخاوف والمخاطر التي تواجههن."
                },
                {
                  "icon": "fas fa-users",
                  "title": "الأسر النازحة",
                  "description": "المجتمعات المتضررة في المخيمات ومراكز الإيواء."
                },
                {
                  "icon": "fas fa-wheelchair",
                  "title": "الأشخاص ذوو الإعاقة",
                  "description": "شباب وفتيات، مع تكييف المحتوى لتلبية احتياجاتهم."
                }
              ]
            },
            {
              "field_id": "secondary_audience_title",
              "field_name": "Secondary Audience Title",
              "field_type": "text",
              "default_value": "الفئات الثانوية",
              "required": true
            },
            {
              "field_id": "secondary_audience_items",
              "field_name": "Secondary Audience Items",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "icon",
                  "field_name": "Icon Class",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "label",
                  "field_name": "Label",
                  "field_type": "text",
                  "required": true
                }
              ],
              "default_value": [
                {
                  "icon": "fas fa-home",
                  "label": "الأهالي ومقدّمو الرعاية"
                },
                {
                  "icon": "fas fa-chalkboard-teacher",
                  "label": "المعلّمون والمرشدون"
                },
                {
                  "icon": "fas fa-users-cog",
                  "label": "قادة المجتمع"
                }
              ]
            }
          ]
        },
        {
          "section_id": "podcast",
          "section_name": "Podcast Section",
          "fields": [
            {
              "field_id": "section_title",
              "field_name": "Section Title",
              "field_type": "text",
              "default_value": "Restart في دقيقة",
              "required": true
            },
            {
              "field_id": "intro_text",
              "field_name": "Introduction Text",
              "field_type": "textarea",
              "default_value": "بودكاست قصير يقدم نصائح سريعة للصحة النفسية والدعم النفسي الاجتماعي",
              "required": true
            },
            {
              "field_id": "podcast_image",
              "field_name": "Podcast Image",
              "field_type": "image",
              "default_value": "assets/podcast-mic.webp",
              "required": true
            },
            {
              "field_id": "episodes",
              "field_name": "Episodes",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "episode_number",
                  "field_name": "Episode Number",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "title",
                  "field_name": "Episode Title",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "audio_file",
                  "field_name": "Audio File",
                  "field_type": "file",
                  "file_type": "audio",
                  "required": false
                },
                {
                  "field_id": "is_coming_soon",
                  "field_name": "Coming Soon",
                  "field_type": "checkbox",
                  "default_value": false,
                  "required": false
                }
              ],
              "default_value": [
                {
                  "episode_number": "الحلقة 1",
                  "title": "الأسبوع الأول مع روان",
                  "audio_file": "assets/rawanWeekOne.mp3",
                  "is_coming_soon": false
                },
                {
                  "episode_number": "الحلقة 2",
                  "title": "الأسبوع الثاني مع روان",
                  "audio_file": "assets/rawanWeekTwo.mp3",
                  "is_coming_soon": false
                },
                {
                  "episode_number": "الحلقة 3",
                  "title": "قريباً",
                  "audio_file": null,
                  "is_coming_soon": true
                },
                {
                  "episode_number": "الحلقة 4",
                  "title": "قريباً",
                  "audio_file": null,
                  "is_coming_soon": true
                }
              ]
            }
          ]
        },
        {
          "section_id": "quote",
          "section_name": "Quote & Contact Section",
          "fields": [
            {
              "field_id": "quote_text",
              "field_name": "Quote Text",
              "field_type": "textarea",
              "default_value": "نؤمن بأن كل شخص يستحق مساحة آمنة للتعبير عن مشاعره والحصول على الدعم الذي يحتاجه. نحن هنا لمساعدتك.",
              "required": true
            },
            {
              "field_id": "organization_name",
              "field_name": "Organization Name",
              "field_type": "text",
              "default_value": "المنتدى الاجتماعي التنموي - SDF",
              "required": true
            },
            {
              "field_id": "channels_title",
              "field_name": "Channels Title",
              "field_type": "text",
              "default_value": "قنواتنا",
              "required": true
            },
            {
              "field_id": "social_channels",
              "field_name": "Social Media Channels",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "platform",
                  "field_name": "Platform",
                  "field_type": "select",
                  "options": ["facebook", "instagram", "twitter", "linkedin", "youtube", "whatsapp"],
                  "required": true
                },
                {
                  "field_id": "url",
                  "field_name": "URL",
                  "field_type": "url",
                  "required": true
                },
                {
                  "field_id": "label",
                  "field_name": "Label (for accessibility)",
                  "field_type": "text",
                  "required": true
                }
              ],
              "default_value": [
                {
                  "platform": "facebook",
                  "url": "https://www.facebook.com/sdf.pal/",
                  "label": "فيسبوك"
                },
                {
                  "platform": "instagram",
                  "url": "https://www.instagram.com/sdf.pal/",
                  "label": "إنستغرام"
                },
                {
                  "platform": "twitter",
                  "url": "https://x.com/SdfPal",
                  "label": "X"
                },
                {
                  "platform": "linkedin",
                  "url": "https://www.linkedin.com/company/sdf-pal",
                  "label": "لينكد إن"
                },
                {
                  "platform": "youtube",
                  "url": "https://www.youtube.com/@socialdevelopmentalforum-s652",
                  "label": "يوتيوب"
                },
                {
                  "platform": "whatsapp",
                  "url": "https://wa.me/970595000000",
                  "label": "واتساب"
                }
              ]
            }
          ]
        },
        {
          "section_id": "gallery",
          "section_name": "Gallery Section",
          "fields": [
            {
              "field_id": "section_title",
              "field_name": "Section Title",
              "field_type": "text",
              "default_value": "معرض الصور",
              "required": true
            },
            {
              "field_id": "intro_text",
              "field_name": "Introduction Text",
              "field_type": "textarea",
              "default_value": "لحظات من أنشطتنا وفعالياتنا",
              "required": true
            },
            {
              "field_id": "gallery_images",
              "field_name": "Gallery Images",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "image",
                  "field_name": "Image",
                  "field_type": "image",
                  "required": true
                },
                {
                  "field_id": "alt_text",
                  "field_name": "Alt Text",
                  "field_type": "text",
                  "required": true
                },
                {
                  "field_id": "size",
                  "field_name": "Image Size",
                  "field_type": "select",
                  "options": ["small", "medium", "large"],
                  "default_value": "medium",
                  "required": true
                }
              ],
              "default_value": [
                {
                  "image": "assets/4.webp",
                  "alt_text": "أنشطة وفعاليات حملة Restart للصحة النفسية في غزة",
                  "size": "large"
                },
                {
                  "image": "assets/5.webp",
                  "alt_text": "فعاليات دعم الصحة النفسية للشباب في غزة - حملة Restart",
                  "size": "medium"
                },
                {
                  "image": "assets/6.webp",
                  "alt_text": "أنشطة الدعم النفسي الاجتماعي - حملة Restart",
                  "size": "small"
                },
                {
                  "image": "assets/7.webp",
                  "alt_text": "فعاليات توعية الصحة النفسية للشباب واليافعين - Restart",
                  "size": "medium"
                },
                {
                  "image": "assets/8.webp",
                  "alt_text": "أنشطة حملة Restart لدعم الصحة النفسية في غزة",
                  "size": "large"
                },
                {
                  "image": "assets/9.webp",
                  "alt_text": "فعاليات المنتدى الاجتماعي التنموي - حملة Restart",
                  "size": "small"
                },
                {
                  "image": "assets/10.webp",
                  "alt_text": "أنشطة دعم الصحة النفسية للشباب في غزة",
                  "size": "small"
                }
              ]
            }
          ]
        },
        {
          "section_id": "footer",
          "section_name": "Footer",
          "fields": [
            {
              "field_id": "sdf_logo",
              "field_name": "SDF Logo",
              "field_type": "image",
              "default_value": "assets/sdf-logo-white.webp",
              "required": true
            },
            {
              "field_id": "unfpa_logo",
              "field_name": "UNFPA Logo",
              "field_type": "image",
              "default_value": "assets/unfpaLogo.webp",
              "required": true
            },
            {
              "field_id": "tagline",
              "field_name": "Footer Tagline",
              "field_type": "textarea",
              "default_value": "نؤمن بأن كل شخص يستحق مساحة آمنة للتعبير عن مشاعره",
              "required": true
            },
            {
              "field_id": "copyright_text",
              "field_name": "Copyright Text",
              "field_type": "text",
              "default_value": "&copy; 2025 المنتدى الاجتماعي التنموي - جميع الحقوق محفوظة.",
              "required": true
            },
            {
              "field_id": "footer_social_channels",
              "field_name": "Footer Social Channels",
              "field_type": "repeater",
              "fields": [
                {
                  "field_id": "platform",
                  "field_name": "Platform",
                  "field_type": "select",
                  "options": ["facebook", "instagram", "twitter", "linkedin", "youtube"],
                  "required": true
                },
                {
                  "field_id": "url",
                  "field_name": "URL",
                  "field_type": "url",
                  "required": true
                },
                {
                  "field_id": "label",
                  "field_name": "Label",
                  "field_type": "text",
                  "required": true
                }
              ],
              "default_value": [
                {
                  "platform": "facebook",
                  "url": "https://www.facebook.com/sdf.pal/",
                  "label": "فيسبوك"
                },
                {
                  "platform": "twitter",
                  "url": "https://x.com/SdfPal",
                  "label": "X"
                },
                {
                  "platform": "instagram",
                  "url": "https://www.instagram.com/sdf.pal/",
                  "label": "إنستغرام"
                },
                {
                  "platform": "linkedin",
                  "url": "https://www.linkedin.com/company/sdf-pal",
                  "label": "لينكد إن"
                },
                {
                  "platform": "youtube",
                  "url": "https://www.youtube.com/@socialdevelopmentalforum-s652",
                  "label": "يوتيوب"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Field Types Reference

- **text**: Single line text input
- **textarea**: Multi-line text input
- **image**: Image upload field
- **file**: File upload field (with file_type: "audio", "video", etc.)
- **url**: URL input field
- **select**: Dropdown select field
- **checkbox**: Boolean checkbox
- **repeater**: Repeating group of fields (for lists, arrays, etc.)

## Notes

- All fields marked as `required: true` must be filled
- Default values are provided for all fields
- Repeater fields allow dynamic addition/removal of items
- Image fields should accept webp, jpg, png formats
- Audio file fields should accept mp3, wav formats
- The `character_id` field in characters section is readonly as it's used for routing

