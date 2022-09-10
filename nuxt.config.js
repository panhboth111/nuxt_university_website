export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "University Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content:
          "This is not an official website of Kirirom Institute of Technology. This website was made by a KIT student for learning purposes online. The informatio you find here are either false or not up-to-date.",
      },
      {
        name: "keywords",
        content: "kirirom, kirirom institute of technology, kit",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "University Website",
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "University Website",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "This is not an official website of Kirirom Institute of Technology. This website was made by a KIT student for learning purposes online. The informatio you find here are either false or not up-to-date.",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "/hero.jpeg",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/index.css", "aos/dist/aos.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/aos", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: ["en", "km"],
    defaultLocale: "en",
    vueI18n: {
      messages: {
        en: {
          navbar: {
            home: "HOME",
            about: "ABOUT",
            admission: "ADMISSION",
            contact: "CONTACT",
          },
          home: {
            hero_section: {
              title1: "LIFT CHANGING OPPORTUNITY.",
              title2: "INNOVATING THE WORLD",
              title3: "BECOME ONE OF US.",
              subtitle: "WELCOME TO OUR UNIVERSITY",
              inquire_btn: "INQUIRE NOW",
              about_btn: "ABOUT US",
            },
            life_section: {
              student_life: "STUDENTS' LIFE AT KIT",
              description: "",
              see_more: "SEE MORE",
            },
            vision_section: {
              title: "WHAT IS KIT'S VISION?",
              description:
                "A leading science and technology university in Southeast Asia with excellent education, cutting-edge research, and a commitment to green development and a multicultural community.",
              read_more_btn: "READ MORE",
            },
            become_section: {
              text: "SIGN UP TODAY AND BECOME ONE OF US!",
            },
          },
          about: {
            hero_section: {
              title: "KIRIROM INSTITUTE OF TECHNOLOGY",
              subtitle: "EVERYTHING ABOUT",
            },
            history_section: {
              title: "OUR HISTORY",
              description:
                "Kirirom Institute of Technology (KIT) is a private institution for higher education located in Kirirom National Park, Cambodia founded by Mr. Takeshi Izuka. The institute was established in 2014 and formally commenced operations in October 2014. The Institute is part of A2A Town Co, Ltd. that envisions the development of Southeast Asia’s counterpart to Silicon Valley. KIT plans to develop students who can use cutting-edge technologies to innovate the world. It further aims to provide opportunities to hard-working and talented students who may be at the bottom of the pyramid instead of serving the privileged few.",
            },
            location_section: {
              title: "LOCATION AND CLIMATE",
              description:
                "Kirirom Institute of Technology is located 112 kilometers southwest of Cambodia’s capital Phnom Penh. Situated in the heart of Kirirom National Park and on top of Kirirom mountain, KIT is surrounded by a lush pine forest that gives students a serene environment and atmosphere conducive for learning. The Institute enjoys the renowned natural beauty and tropical climate of Kirirom. The temperature is within the range of 25 – 35 degrees and the weather is moderately humid. The mountain and surrounding forest are ideal for hiking and similar outdoor activities to provide students relaxation and recreation.",
            },
            plan_section: {
              title: "5 YEAR STRATEGIC PLAN",
              description:
                "KIT’s Strategic Plan 2020-25 comprises six core areas: (1) educational programs, (2) research & innovation, (3) faculty and staff development, (4) the promotion of industry-university linkages, (5) internationalization and (6) building of a smart and green campus.",
              description2:
                "These six areas were selected and discussed during a half-day consultation workshop held at KIT on December 14, 2019. Participants were representatives from a range of stakeholders, including KIT’s Governing Board members, senior management team, students, alumni, faculty members and staff and experts from other institutions, including partner higher education institutions and the private sector. Their varied perspectives and rich experiences added valuable input into the discussion and planning. The Governing Board meeting on December 15, 2019 provided further advice and suggestions to the development of the Strategic Plan. Such an inclusive engagement approach ensures the relevance and public ownership of KIT’s programs.",
            },
            mission_section: {
              title: "OUR MISSION",
              text1:
                "Provide life-changing academic and career opportunities for all students, regardless of their family socio-economic backgrounds;",
              text2:
                "Foster innovation, creativity and team spirit among students;",
              text3:
                "Establish a diverse and multicultural community conducive to studying, living and working;",
              text4:
                "Produce young leaders​​​ with a local and global understanding and respect;",
              text5:
                "Serve national and regional needs for a digital workforce with the fast-changing context of digital transformation and Industry 4.0.",
            },
            community_section: {
              title: "OUR COMMUNITY",
              text1:
                "vKirirom Nature Land, Cambodia envisions building a city of the future. It believes in building a community that creates an environment of co-working and co-living with nature.",
              text2:
                '"Vibrant community combining cutting-edge technology, leading university, and sustainability amidst the forest and mountain of Cambodia’s national park."',
            },
            vision_section: {
              title: "OUR VISION",
              description:
                "A leading science and technology university in Southeast Asia with excellent education, cutting-edge research, and a commitment to green development and a multicultural community.",
            },
          },
          admission: {
            hero_section: {
              title: "HOW TO BECOME A KITIAN",
              subtitle: "FIND OUT ABOUT",
            },
            inclusive_section: {
              title: "INCLUSIVE ADMISSION",
              description:
                "KIT aims to promote a culturally sensitive and global citizen. Your personal and academic successes are what make you who you are. We put value in the little things that are an integral part of you, your contribution to KIT and the world. By becoming one of us, we will learn, re-learn and unlearn together.",
            },
            acedamic_section: {
              title: "ACADEMIC MERIT",
              description:
                "The main basis to be admitted at KIT is your academic excellence. We look at how well you performed in high school when we evaluate your transcript. Don’t worry. We don’t only rely on numerical data.",
            },
            mental_section: {
              title: "MENTAL VIGOR",
              description:
                "At KIT, we foster camaraderie and collaboration. It is important for us that our students are nurtured in their creativity and innovation. We would like to see the passion and commitment you have when interacting with our multicultural environment, whether in class, internship, sports, or other activities the community will organize.",
            },
            enroll_btn: "ENROLL NOW",
          },
        },
        km: {
          navbar: {
            home: "ទំព័រដើម",
            about: "អំពី​ពួក​យើង",
            admission: "ការចូលរៀន",
            contact: "ទំនាក់ទំនង",
          },
          home: {
            hero_section: {
              title1: "ឱកាសជីវិតល្អបំផុត",
              title2: "ការផ្លាស់ប្តូរពិភពលោក",
              title3: "ចូលរួម​ជាមួយ​យើង",
              subtitle: "សូមស្វាគមន៍មកកាន់សាកលវិទ្យាល័យរបស់យើង",
              inquire_btn: "សាកសួរឥឡូវនេះ",
              about_btn: "អំពី​ពួក​យើង",
            },
            life_section: {
              student_life: "ជីវិតរបស់និស្សិតនៅ KIT",
              description: "",
              see_more: "មើល​បន្ថែម​ទៀត",
            },
            vision_section: {
              title: "ចក្ខុវិស័យរបស់ KIT",
              description:
                "សាកលវិទ្យាល័យវិទ្យាសាស្រ្ត និងបច្ចេកវិទ្យាឈានមុខគេនៅអាស៊ីអាគ្នេយ៍ ជាមួយនឹងការអប់រំដ៏ល្អឥតខ្ចោះ ការស្រាវជ្រាវដ៏ទំនើប និងការប្តេជ្ញាចិត្តចំពោះការអភិវឌ្ឍន៍បៃតង និងសហគមន៍ពហុវប្បធម៌។",
              read_more_btn: "អាន​បន្ថែម",
            },
            become_section: {
              text: "ចុះឈ្មោះថ្ងៃនេះ ហើយក្លាយជាមនុស្សម្នាក់ក្នុងចំណោមពួកយើង",
            },
          },
          about: {
            hero_section: {
              title: "KIRIROM INSTITUTE OF TECHNOLOGY",
              subtitle: "អ្វីគ្រប់យ៉ាងអំពី",
            },
            history_section: {
              title: "ប្រវត្តិសាស្រ្តរបស់យើង។",
              description:
                "វិទ្យាស្ថានបច្ចេកវិទ្យាគីរីរម្យ (KIT) គឺជាគ្រឹះស្ថានឧត្តមសិក្សាឯកជនមួយ ដែលមានទីតាំងនៅឧទ្យានជាតិគិរីរម្យ ប្រទេសកម្ពុជា បង្កើតឡើងដោយលោក Takeshi Izuka។ វិទ្យាស្ថាននេះត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ 2014 ហើយបានចាប់ផ្តើមប្រតិបត្តិការជាផ្លូវការនៅខែតុលា ឆ្នាំ 2014។ វិទ្យាស្ថាននេះគឺជាផ្នែកមួយនៃក្រុមហ៊ុន A2A Town Co, Ltd. ដែលគិតគូរពីការអភិវឌ្ឍន៍នៃសមភាគីអាស៊ីអាគ្នេយ៍ជាមួយ Silicon Valley ។ KIT គ្រោង​នឹង​អភិវឌ្ឍ​និស្សិត​ដែល​អាច​ប្រើ​បច្ចេកវិទ្យា​ទំនើប​ដើម្បី​បង្កើត​ពិភពលោក។ វាមានគោលបំណងបន្ថែមទៀតដើម្បីផ្តល់ឱកាសដល់សិស្សឧស្សាហ៍ព្យាយាម និងមានទេពកោសល្យ ដែលអាចនៅបាតនៃសាជីជ្រុង ជំនួសឱ្យការបម្រើមនុស្សមួយចំនួនដែលមានឯកសិទ្ធិ។",
            },
            location_section: {
              title: "ទីតាំង និងអាកាសធាតុ",
              description:
                "វិទ្យាស្ថានបច្ចេកវិទ្យាគីរីរម្យ ស្ថិតនៅចម្ងាយ 112 គីឡូម៉ែត្រ ភាគនិរតីនៃរាជធានីភ្នំពេញ ប្រទេសកម្ពុជា។ KIT ស្ថិតនៅចំកណ្តាលឧទ្យានជាតិគីរីរម្យ និងនៅលើកំពូលភ្នំគិរីរម្យ ហ៊ុំព័ទ្ធដោយព្រៃស្រល់ខៀវស្រងាត់ ដែលផ្តល់ឱ្យសិស្សនូវបរិយាកាសស្ងប់ស្ងាត់ និងបរិយាកាសអំណោយផលសម្រាប់ការរៀនសូត្រ។ វិទ្យាស្ថានរីករាយនឹងសម្រស់ធម្មជាតិដ៏ល្បីល្បាញ និងអាកាសធាតុត្រូពិចនៃគីរីរម្យ។ សីតុណ្ហភាព​ស្ថិត​ក្នុង​ចន្លោះ​ពី ២៥-៣៥ អង្សារ ហើយ​អាកាសធាតុ​មាន​សំណើម​ល្មម។ ភ្នំ និងព្រៃជុំវិញគឺល្អសម្រាប់ដើរលេង និងសកម្មភាពក្រៅស្រដៀងគ្នា ដើម្បីផ្តល់ឱ្យសិស្សានុសិស្សសម្រាក និងកម្សាន្ត។",
            },
            plan_section: {
              title: "ផែនការយុទ្ធសាស្ត្រ ៥ ឆ្នាំ",
              description:
                "ផែនការយុទ្ធសាស្រ្តរបស់ KIT 2020-25 រួមមានផ្នែកស្នូលចំនួនប្រាំមួយ៖ (1) កម្មវិធីអប់រំ (2) ការស្រាវជ្រាវ & នវានុវត្តន៍ (3) ការអភិវឌ្ឍន៍មហាវិទ្យាល័យ និងបុគ្គលិក (4) ការលើកកម្ពស់ទំនាក់ទំនងឧស្សាហកម្ម-សាកលវិទ្យាល័យ (5) អន្តរជាតិភាវូបនីយកម្ម និង (6) ) ការកសាងបរិវេណសាលាឆ្លាតវៃ និងបៃតង។",
              description2:
                "វិស័យទាំងប្រាំមួយនេះត្រូវបានជ្រើសរើស និងពិភាក្សាក្នុងសិក្ខាសាលាពិគ្រោះយោបល់រយៈពេលកន្លះថ្ងៃដែលធ្វើឡើងនៅ KIT នៅថ្ងៃទី 14 ខែធ្នូ ឆ្នាំ 2019។ អ្នកចូលរួមគឺជាតំណាងមកពីភាគីពាក់ព័ន្ធជាច្រើន រួមមានសមាជិកក្រុមប្រឹក្សាភិបាលរបស់ KIT ក្រុមអ្នកគ្រប់គ្រងជាន់ខ្ពស់ សិស្ស និស្សិត អតីតនិស្សិត សាស្ត្រាចារ្យ និងបុគ្គលិក។ និងអ្នកជំនាញមកពីស្ថាប័នផ្សេងៗ រួមទាំងគ្រឹះស្ថានឧត្តមសិក្សាដែលជាដៃគូ និងវិស័យឯកជន។ ទស្សនៈផ្សេងៗគ្នា និងបទពិសោធន៍ដ៏សម្បូរបែបរបស់ពួកគេបានបន្ថែមធាតុដ៏មានតម្លៃទៅក្នុងកិច្ចពិភាក្សា និងការធ្វើផែនការ។ កិច្ចប្រជុំក្រុមប្រឹក្សាភិបាលនៅថ្ងៃទី ១៥ ខែធ្នូ ឆ្នាំ ២០១៩ បានផ្តល់ដំបូន្មាន និងសំណូមពរបន្ថែមដល់ការរៀបចំផែនការយុទ្ធសាស្ត្រ។ វិធីសាស្រ្តនៃការចូលរួមរួមបញ្ចូលបែបនេះធានានូវភាពពាក់ព័ន្ធ និងកម្មសិទ្ធិសាធារណៈនៃកម្មវិធីរបស់ KIT ។",
            },
            mission_section: {
              title: "បេ​សកម្ម​របស់​យើង",
              text1:
                "ផ្តល់ឱកាសសិក្សា និងអាជីពផ្លាស់ប្តូរជីវិតសម្រាប់សិស្សទាំងអស់ ដោយមិនគិតពីប្រវត្តិសេដ្ឋកិច្ច សង្គមគ្រួសាររបស់ពួកគេឡើយ។",
              text2:
                "ជំរុញការច្នៃប្រឌិត ការច្នៃប្រឌិត និងស្មារតីក្រុមក្នុងចំណោមសិស្ស;",
              text3:
                "បង្កើតសហគមន៍ចម្រុះ និងពហុវប្បធម៌ អំណោយផលដល់ការសិក្សា ការរស់នៅ និងការងារ។",
              text4:
                "ផលិត​អ្នកដឹកនាំ​វ័យ​ក្មេង​ជាមួយ​នឹង​ការ​យល់​ដឹង​និង​ការ​គោរព​ក្នុង​តំបន់ និង​ពិភពលោក។",
              text5:
                "បម្រើតម្រូវការជាតិ និងតំបន់សម្រាប់កម្លាំងពលកម្មឌីជីថល ជាមួយនឹងបរិបទនៃការផ្លាស់ប្តូរយ៉ាងរហ័សនៃការផ្លាស់ប្តូរឌីជីថល និងឧស្សាហកម្ម 4.0 ។",
            },
            community_section: {
              title: "សហគមន៍របស់យើង",
              text1:
                "vKirirom Nature Land, Cambodia ស្រមៃការកសាងទីក្រុងនៃអនាគត។ វាជឿជាក់លើការកសាងសហគមន៍ដែលបង្កើតបរិយាកាសនៃការសហការ និងការរស់នៅជាមួយធម្មជាតិ។",
              text2:
                '"សហគមន៍ដ៏រស់រវើករួមបញ្ចូលគ្នារវាងបច្ចេកវិទ្យាទំនើប សាកលវិទ្យាល័យឈានមុខគេ និងនិរន្តរភាពចំកណ្តាលព្រៃ និងភ្នំនៃឧទ្យានជាតិរបស់កម្ពុជា។"',
            },
            vision_section: {
              title: "ចក្ខុវិស័យរបស់ KIT",
              description:
                "សាកលវិទ្យាល័យវិទ្យាសាស្រ្ត និងបច្ចេកវិទ្យាឈានមុខគេនៅអាស៊ីអាគ្នេយ៍ ជាមួយនឹងការអប់រំដ៏ល្អឥតខ្ចោះ ការស្រាវជ្រាវដ៏ទំនើប និងការប្តេជ្ញាចិត្តចំពោះការអភិវឌ្ឍន៍បៃតង និងសហគមន៍ពហុវប្បធម៌។",
            },
          },
          admission: {
            hero_section: {
              title: "របៀបក្លាយជា KITIAN",
              subtitle: "ស្វែងយល់​អំពី",
            },
            inclusive_section: {
              title: "រួមបញ្ចូលការចូលរៀន",
              description:
                "KIT មានគោលបំណងលើកកម្ពស់វប្បធម៌រសើប និងជាពលរដ្ឋសកល។ ជោគជ័យផ្ទាល់ខ្លួន និងការសិក្សារបស់អ្នក គឺជាអ្វីដែលធ្វើឱ្យអ្នកក្លាយជានរណា។ យើងដាក់តម្លៃលើរបស់តូចៗដែលជាផ្នែកសំខាន់មួយរបស់អ្នក ការរួមចំណែករបស់អ្នកចំពោះ KIT និងពិភពលោក។ តាមរយៈការក្លាយជាពួកយើងម្នាក់ យើងនឹងរៀន រៀនឡើងវិញ និងរៀនជាមួយគ្នា។",
            },
            acedamic_section: {
              title: "គុណធម៌សិក្សា",
              description:
                "មូលដ្ឋានសំខាន់ដែលត្រូវចូលរៀននៅ KIT គឺជាឧត្តមភាពសិក្សារបស់អ្នក។ យើងមើលថាតើអ្នកធ្វើបានល្អប៉ុណ្ណានៅវិទ្យាល័យ ពេលយើងវាយតម្លៃប្រតិចារិករបស់អ្នក។ កុំបារម្ភ។ យើងមិនត្រឹមតែពឹងផ្អែកលើទិន្នន័យជាលេខប៉ុណ្ណោះទេ។",
            },
            mental_section: {
              title: "កម្លាំងផ្លូវចិត្ត",
              description:
                "នៅ KIT យើងលើកកម្ពស់មិត្តភាព និងកិច្ចសហការ។ វាមានសារៈសំខាន់សម្រាប់យើងដែលសិស្សរបស់យើងត្រូវបានចិញ្ចឹមបីបាច់ក្នុងភាពច្នៃប្រឌិត និងការច្នៃប្រឌិតរបស់ពួកគេ។ យើងចង់ឃើញពីចំណង់ចំណូលចិត្ត និងការប្តេជ្ញាចិត្តដែលអ្នកមាន នៅពេលធ្វើអន្តរកម្មជាមួយបរិយាកាសចម្រុះរបស់យើង មិនថាក្នុងថ្នាក់ កម្មសិក្សា កីឡា ឬសកម្មភាពផ្សេងទៀតដែលសហគមន៍នឹងរៀបចំនោះទេ។",
            },
            enroll_btn: "ចុះឈ្មោះឥឡូវនេះ",
          },
        },
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["vee-validate", "aos"],
    transpile: ["vee-validate/dist/rules"],
  },
  server: {
    host: "0",
    port: 5000,
  },
};
