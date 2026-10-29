export type ReportSectionId =
  | "monthly-overview"
  | "results-evidence"
  | "vision-ideas";

export interface ReportEvidence {
  alt: string;
  caption?: string;
  height: number;
  src: string;
  width: number;
}

export type ReportGroupStatus = "completed" | "ongoing";

export interface ReportListGroup {
  items: readonly string[];
  status: ReportGroupStatus;
  title: string;
}

export interface MonthlyOverviewContent {
  google: {
    groups: readonly ReportListGroup[];
    heading: string;
  };
  website: {
    groups: readonly ReportListGroup[];
    heading: string;
  };
}

export interface ReportComparisonImage {
  image: ReportEvidence;
  label: string;
}

export interface ReportProfileComparison {
  current: ReportComparisonImage;
  name: string;
  note?: string;
  previous: ReportComparisonImage;
}

export interface ReportGallery {
  images: readonly ReportComparisonImage[];
  label: string;
}

export interface ReportBeforeAfterBlock {
  caption?: string;
  current: ReportGallery;
  heading: string;
  layout?: "columns" | "stacked";
  previous: ReportGallery;
  variant: "desktop" | "mobile";
}

export interface ReportSupportingDetail {
  caption: string;
  id: string;
  image: ReportEvidence;
  label: string;
  variant: "desktop" | "mobile";
}

export interface ReportWebsiteComparisonSection {
  blocks: readonly ReportBeforeAfterBlock[];
  details?: readonly ReportSupportingDetail[];
  heading: string;
  id: string;
  note?: string;
}

export interface ReportWebsiteComparison {
  heading: string;
  id: string;
  sections: readonly ReportWebsiteComparisonSection[];
}

export interface OrganicSearchPeriodMetrics {
  averagePosition: number;
  clickThroughRate: number;
  clicks: number;
  evidence: ReportEvidence;
  impressions: number;
  year: number;
}

export interface OrganicSearchPerformanceContent {
  current: OrganicSearchPeriodMetrics;
  heading: string;
  introduction: string;
  previous: OrganicSearchPeriodMetrics;
  sourceNote: string;
  subtitle: string;
}

export type KeywordRankingPosition =
  | {
      page: number;
      position: number;
      ranked: true;
    }
  | {
      ranked: false;
    };

export type KeywordRankingChange = "improved" | "started" | "declined";

export interface BusinessProfileKeywordRecord {
  after: KeywordRankingPosition;
  before: KeywordRankingPosition;
  change: KeywordRankingChange;
  keyword: string;
}

export interface BusinessProfileKeywordSchool {
  baselineDate: string;
  currentDate: string;
  id: string;
  introduction: string;
  name: string;
  records: readonly BusinessProfileKeywordRecord[];
}

export interface BusinessProfileKeywordRankingsContent {
  clarification: string;
  heading: string;
  schools: readonly BusinessProfileKeywordSchool[];
  sourceNote: string;
}

export interface ResultsEvidenceContent {
  businessProfileRankings: BusinessProfileKeywordRankingsContent;
  comparisons: {
    heading: string;
    profiles: readonly ReportProfileComparison[];
  };
  maps: {
    heading: string;
    image: ReportEvidence;
  };
  organicSearch: OrganicSearchPerformanceContent;
  search: {
    heading: string;
    image: ReportEvidence;
  };
  website: ReportWebsiteComparison;
}

export interface ReportSectionData {
  evidence: readonly ReportEvidence[];
  highlights: readonly string[];
  id: ReportSectionId;
  monthlyOverview?: MonthlyOverviewContent;
  outlineTitle: string;
  resultsEvidence?: ResultsEvidenceContent;
  summary: string | null;
  title: string;
}

export interface ReportData {
  client: string;
  hero: {
    outlineHeading: string;
    title: string;
  };
  period: {
    end: string;
    label: string;
    start: string;
  };
  sections: readonly ReportSectionData[];
  title: string;
}

/**
 * This is the single source of truth for report copy and evidence.
 * Keep fields empty until final, approved content and screenshots are supplied.
 */
export const reportData = {
  client: "Roosevelt Private School",
  hero: {
    outlineHeading: "Presentation Outline",
    title: "Full Report",
  },
  period: {
    end: "2026-10-31",
    label: "1–31 October 2026",
    start: "2026-10-01",
  },
  sections: [
    {
      evidence: [],
      highlights: [],
      id: "monthly-overview",
      monthlyOverview: {
        website: {
          heading: "Website Final version",
          groups: [
            {
              title: "Expanded school pages",
              status: "completed",
              items: [
                "Entry ages",
                "School levels",
                "Subjects",
                "Lycée streams",
                "Languages",
                "Activities",
                "Facilities",
                "Opening hours",
                "School transport",
                "Admissions information",
              ],
            },
            {
              title: "Dedicated pages",
              status: "completed",
              items: [
                "Parent reviews",
                "Admissions",
                "About the school",
                "Contact",
                "Gallery",
                "Blog",
                "Legal information",
              ],
            },
            {
              title: "Features and visuals",
              status: "completed",
              items: [
                "French–English language switch",
                "Admissions form",
                "Contact form",
              ],
            },
          ],
        },
        google: {
          heading: "Google Business Profiles",
          groups: [
            {
              title: "Profiles optimized",
              status: "completed",
              items: [
                "Roosevelt Private School 2",
                "Roosevelt Kindergarten",
              ],
            },
            {
              title: "Profile updates",
              status: "completed",
              items: [
                "School categories",
                "School descriptions",
                "Opening hours",
                "Contact details",
                "Website links",
                "School photo uploads",
              ],
            },
            {
              title: "Ongoing work",
              status: "ongoing",
              items: [
                "Primary school profile recovery",
                "Alternative verification request",
              ],
            },
          ],
        },
      },
      outlineTitle: "Monthly Overview",
      summary: null,
      title: "Monthly Overview",
    },
    {
      evidence: [],
      highlights: [],
      id: "results-evidence",
      outlineTitle: "Results & Evidence",
      resultsEvidence: {
        website: {
          heading: "Website — Before & After",
          id: "website-comparison",
          sections: [
            {
              heading: "Homepage",
              id: "homepage",
              blocks: [
            {
              heading: "Desktop",
              variant: "desktop",
              caption:
                "Clearer school presentation and more visible contact options.",
              previous: {
                label: "Before",
                images: [
                  {
                    label: "Hero",
                    image: {
                      alt: "Before desktop homepage hero with a classroom background and a large English Roosevelt Private School Tangier title",
                      height: 808,
                      src: "/images/report/website/homepage-before-desktop-hero.png",
                      width: 1947,
                    },
                  },
                  {
                    label: "School overview",
                    image: {
                      alt: "Before desktop homepage showing three school cards and the Our Core Principles section",
                      height: 755,
                      src: "/images/report/website/homepage-before-desktop-overview.png",
                      width: 2083,
                    },
                  },
                ],
              },
              current: {
                label: "After",
                images: [
                  {
                    label: "Hero",
                    image: {
                      alt: "After desktop homepage hero in French with four school photos, a Google rating, academic score, and contact options",
                      height: 879,
                      src: "/images/report/website/homepage-after-desktop-hero.png",
                      width: 1789,
                    },
                  },
                ],
              },
            },
            {
              heading: "Mobile",
              variant: "mobile",
              caption:
                "School levels and practical information organized for mobile browsing.",
              previous: {
                label: "Before",
                images: [
                  {
                    label: "Hero",
                    image: {
                      alt: "Before mobile homepage hero with a large stacked English Roosevelt Private School Tangier title",
                      height: 1774,
                      src: "/images/report/website/homepage-before-mobile-hero.png",
                      width: 887,
                    },
                  },
                  {
                    label: "School overview",
                    image: {
                      alt: "Before mobile homepage with vertically stacked Kindergarten, Primary, and High School photos",
                      height: 1724,
                      src: "/images/report/website/homepage-before-mobile-overview.png",
                      width: 912,
                    },
                  },
                ],
              },
              current: {
                label: "After",
                images: [
                  {
                    label: "Hero",
                    image: {
                      alt: "After mobile homepage hero with a French introduction, school rating and score, phone and WhatsApp contact options",
                      height: 1732,
                      src: "/images/report/website/homepage-after-mobile-hero.png",
                      width: 908,
                    },
                  },
                  {
                    label: "School overview",
                    image: {
                      alt: "After mobile homepage with four school-level photos, a green information panel, and rooseveltprivateschool.com in the browser address",
                      height: 1651,
                      src: "/images/report/website/homepage-after-mobile-overview.png",
                      width: 953,
                    },
                  },
                  {
                    label: "Kindergarten preview",
                    image: {
                      alt: "After mobile kindergarten page with school photos, ages two to five, practical information, and a discovery button",
                      height: 1654,
                      src: "/images/report/website/homepage-after-mobile-kindergarten.png",
                      width: 951,
                    },
                  },
                ],
              },
            },
              ],
            },
            {
              heading: "Kindergarten",
              id: "kindergarten",
              blocks: [
                {
                  heading: "Desktop",
                  variant: "desktop",
                  caption:
                    "A clearer introduction to the kindergarten and its activities.",
                  previous: {
                    label: "Before",
                    images: [
                      {
                        label: "Hero & gallery",
                        image: {
                          alt: "Before desktop kindergarten hero with an English welcome title over a school bus and a gallery of activity photos",
                          height: 810,
                          src: "/images/report/website/kindergarten/before-desktop-hero.png",
                          width: 1940,
                        },
                      },
                      {
                        label: "Events",
                        image: {
                          alt: "Before desktop kindergarten events page with Open Classes, Back to School, and Parents Meeting cards",
                          height: 725,
                          src: "/images/report/website/kindergarten/before-desktop-events.png",
                          width: 2170,
                        },
                      },
                    ],
                  },
                  current: {
                    label: "After",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "After desktop kindergarten hero in French with school information, contact actions, and two framed student photos",
                          height: 807,
                          src: "/images/report/website/kindergarten/after-desktop-hero.png",
                          width: 1950,
                        },
                      },
                      {
                        label: "Activities",
                        image: {
                          alt: "After desktop kindergarten activities page showing autumn art, cooking, and event information",
                          height: 817,
                          src: "/images/report/website/kindergarten/after-desktop-activities.png",
                          width: 1925,
                        },
                      },
                    ],
                  },
                },
                {
                  heading: "Mobile",
                  variant: "mobile",
                  caption:
                    "Readable school information, with clear contact and visit options.",
                  previous: {
                    label: "Before",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "Before mobile kindergarten hero with intentionally cropped English welcome text, a school bus background, and gallery photos",
                          height: 1716,
                          src: "/images/report/website/kindergarten/before-mobile-hero.png",
                          width: 917,
                        },
                      },
                      {
                        label: "Events",
                        image: {
                          alt: "Before mobile kindergarten events page showing Open Classes and Back to School cards",
                          height: 1740,
                          src: "/images/report/website/kindergarten/before-mobile-events.png",
                          width: 904,
                        },
                      },
                      {
                        label: "Subjects",
                        image: {
                          alt: "Before mobile kindergarten subjects page with Mathematics and English lesson cards",
                          height: 1706,
                          src: "/images/report/website/kindergarten/before-mobile-subjects.png",
                          width: 922,
                        },
                      },
                    ],
                  },
                  current: {
                    label: "After",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "After mobile kindergarten hero in French with school history, rating, introduction, and contact actions",
                          height: 1742,
                          src: "/images/report/website/kindergarten/after-mobile-hero.png",
                          width: 903,
                        },
                      },
                      {
                        label: "Activities",
                        image: {
                          alt: "After mobile kindergarten activities page showing autumn art, cooking, and yearly highlights",
                          height: 1746,
                          src: "/images/report/website/kindergarten/after-mobile-activities.png",
                          width: 901,
                        },
                      },
                      {
                        label: "Visit & benefits",
                        image: {
                          alt: "After mobile kindergarten page with a visit-planning action and program benefits",
                          height: 1709,
                          src: "/images/report/website/kindergarten/after-mobile-visit-benefits.png",
                          width: 920,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              heading: "Roosevelt Private School — Primary",
              id: "primary-school",
              blocks: [
                {
                  heading: "Desktop",
                  variant: "desktop",
                  caption:
                    "The school’s programme, languages, and contact options explained more clearly.",
                  previous: {
                    label: "Before",
                    images: [
                      {
                        label: "Hero & gallery",
                        image: {
                          alt: "Before desktop primary school hero with an English welcome title and a gallery of student activities",
                          height: 809,
                          src: "/images/report/website/primary-school/before-desktop-hero.png",
                          width: 1944,
                        },
                      },
                      {
                        label: "Learning environment",
                        image: {
                          alt: "Before desktop primary school page describing a positive place to learn and grow beside a school activity photo",
                          height: 725,
                          src: "/images/report/website/primary-school/before-desktop-learning.png",
                          width: 2170,
                        },
                      },
                      {
                        label: "Events",
                        image: {
                          alt: "Before desktop primary school events page with Open Classes, Back to School, and Parents Meeting cards",
                          height: 725,
                          src: "/images/report/website/primary-school/before-desktop-events.png",
                          width: 2170,
                        },
                      },
                    ],
                  },
                  current: {
                    label: "After",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "After desktop primary school hero in French with school information, contact actions, and framed student photos",
                          height: 812,
                          src: "/images/report/website/primary-school/after-desktop-hero.png",
                          width: 1935,
                        },
                      },
                      {
                        label: "Curriculum",
                        image: {
                          alt: "After desktop primary school curriculum section explaining the programme beside classroom photos",
                          height: 806,
                          src: "/images/report/website/primary-school/after-desktop-curriculum.png",
                          width: 1951,
                        },
                      },
                      {
                        label: "Languages",
                        image: {
                          alt: "After desktop primary school languages section explaining trilingual learning beside a student group photo",
                          height: 724,
                          src: "/images/report/website/primary-school/after-desktop-languages.png",
                          width: 2172,
                        },
                      },
                    ],
                  },
                },
                {
                  heading: "Mobile",
                  variant: "mobile",
                  caption:
                    "School information and activities presented clearly for parents browsing on their phones.",
                  previous: {
                    label: "Before",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "Before mobile primary school hero with a large English welcome title and activity gallery",
                          height: 1626,
                          src: "/images/report/website/primary-school/before-mobile-hero.png",
                          width: 967,
                        },
                      },
                      {
                        label: "News",
                        image: {
                          alt: "Before mobile primary school news page with a school decoration article card",
                          height: 1665,
                          src: "/images/report/website/primary-school/before-mobile-news.png",
                          width: 944,
                        },
                      },
                    ],
                  },
                  current: {
                    label: "After",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "After mobile primary school hero in French with school information, contact actions, and student photos",
                          height: 1737,
                          src: "/images/report/website/primary-school/after-mobile-hero.png",
                          width: 906,
                        },
                      },
                      {
                        label: "School activities",
                        image: {
                          alt: "After mobile primary school activities page showing school trips and Ramadan activities",
                          height: 1827,
                          src: "/images/report/website/primary-school/after-mobile-activities.png",
                          width: 861,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              heading: "Roosevelt Private School 2 — Collège & Lycée",
              id: "school-2",
              blocks: [
                {
                  heading: "Desktop",
                  variant: "desktop",
                  caption:
                    "School levels, languages, and scientific streams presented at a glance.",
                  previous: {
                    label: "Before",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "Before desktop School 2 hero with an English collège and lycée welcome title and photo carousel",
                          height: 806,
                          src: "/images/report/website/school-2/before-desktop-hero.png",
                          width: 1951,
                        },
                      },
                    ],
                  },
                  current: {
                    label: "After",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "After desktop School 2 hero in French with school levels, trilingual and scientific-stream information, student photographs, and contact actions",
                          height: 786,
                          src: "/images/report/website/school-2/after-desktop-hero.png",
                          width: 2002,
                        },
                      },
                    ],
                  },
                },
                {
                  heading: "Mobile",
                  variant: "mobile",
                  previous: {
                    label: "Before",
                    images: [
                      {
                        label: "Hero",
                        image: {
                          alt: "Before mobile School 2 hero with an English collège and lycée welcome title and photo carousel",
                          height: 1715,
                          src: "/images/report/website/school-2/before-mobile-hero.png",
                          width: 917,
                        },
                      },
                    ],
                  },
                  current: {
                    label: "After",
                    images: [
                      {
                        label: "Hero & photos",
                        image: {
                          alt: "After mobile School 2 hero in French with school information, contact actions, and student photographs",
                          height: 1780,
                          src: "/images/report/website/school-2/after-mobile-hero-photos.png",
                          width: 883,
                        },
                      },
                      {
                        label: "Hero & results",
                        image: {
                          alt: "After mobile School 2 hero with the website’s academic results panel showing 45 percent, 16 out of 20, and 2025 to 2026",
                          height: 1553,
                          src: "/images/report/website/school-2/after-mobile-hero-results.png",
                          width: 1013,
                        },
                      },
                    ],
                  },
                },
              ],
            },
            {
              heading: "Footer",
              id: "footer",
              blocks: [
                {
                  heading: "Desktop",
                  layout: "stacked",
                  variant: "desktop",
                  caption:
                    "School contacts, useful links, opening hours, and admissions organized in one place.",
                  previous: {
                    label: "Before",
                    images: [
                      {
                        label: "Desktop footer",
                        image: {
                          alt: "Before desktop gray footer with school locations, telephone numbers, and social links",
                          height: 387,
                          src: "/images/report/website/footer/before-desktop-footer.png",
                          width: 1653,
                        },
                      },
                    ],
                  },
                  current: {
                    label: "After",
                    images: [
                      {
                        label: "Desktop footer",
                        image: {
                          alt: "After desktop green footer with school branding, school information, useful links, contact details, opening hours, admissions actions, copyright, and privacy link",
                          height: 700,
                          src: "/images/report/website/footer/after-desktop-footer.png",
                          width: 1864,
                        },
                      },
                    ],
                  },
                },
                {
                  heading: "Mobile",
                  variant: "mobile",
                  caption:
                    "Contact and admissions options presented clearly on mobile.",
                  previous: {
                    label: "Before",
                    images: [
                      {
                        label: "Locations",
                        image: {
                          alt: "Before mobile footer capture showing preceding page content and the locations portion of the old gray footer",
                          height: 1586,
                          src: "/images/report/website/footer/before-mobile-locations.png",
                          width: 992,
                        },
                      },
                    ],
                  },
                  current: {
                    label: "After",
                    images: [
                      {
                        label: "Branding & schools",
                        image: {
                          alt: "After mobile footer showing school branding, introduction, social links, and the beginning of school information",
                          height: 1734,
                          src: "/images/report/website/footer/after-mobile-branding-schools.png",
                          width: 907,
                        },
                      },
                      {
                        label: "Contact & admissions",
                        image: {
                          alt: "After mobile footer showing main phone number, email, opening hours, admissions and WhatsApp actions, copyright, and privacy link",
                          height: 1685,
                          src: "/images/report/website/footer/after-mobile-contact-admissions.png",
                          width: 933,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        organicSearch: {
          heading: "Organic Search Performance",
          subtitle: "September–October snapshot · 2025 vs 2026",
          introduction:
            "How often our website appeared on Google—and how often it was clicked.",
          sourceNote:
            "Source: Google Search Console. Comparison uses the periods shown; the latest 2026 data is preliminary.",
          previous: {
            year: 2025,
            clicks: 61,
            impressions: 795,
            clickThroughRate: 7.7,
            averagePosition: 5.3,
            evidence: {
              alt: "Google Search Console chart for the period shown in 2025 with 61 clicks, 795 impressions, 7.7 percent click-through rate, and 5.3 average position",
              height: 520,
              src: "/images/report/organic-search/gsc-2025.png",
              width: 1423,
            },
          },
          current: {
            year: 2026,
            clicks: 220,
            impressions: 2670,
            clickThroughRate: 8.2,
            averagePosition: 5.5,
            evidence: {
              alt: "Google Search Console chart for the period shown in 2026 with 220 clicks, approximately 2.67 thousand impressions, 8.2 percent click-through rate, 5.5 average position, and preliminary dotted data at the end",
              height: 511,
              src: "/images/report/organic-search/gsc-2026.png",
              width: 1435,
            },
          },
        },
        businessProfileRankings: {
          heading: "Google Business Profile — Keyword Rankings",
          sourceNote:
            "Source: manual Google Business Profile ranking checks · Kawacim · Desktop · Chrome Incognito.",
          clarification:
            "Positions reflect the recorded checks on each date.",
          schools: [
            {
              baselineDate: "1 October 2026",
              currentDate: "28 October 2026",
              id: "roosevelt-kindergarten",
              name: "Roosevelt Kindergarten",
              introduction:
                "How the school’s visibility changed across eight selected searches.",
              records: [
                {
                  keyword: "école maternelle Tanger",
                  before: { ranked: true, page: 3, position: 15 },
                  after: { ranked: true, page: 2, position: 15 },
                  change: "improved",
                },
                {
                  keyword: "maternelle privée Tanger",
                  before: { ranked: true, page: 3, position: 6 },
                  after: { ranked: true, page: 2, position: 6 },
                  change: "improved",
                },
                {
                  keyword: "maternelle Tanger",
                  before: { ranked: true, page: 3, position: 11 },
                  after: { ranked: true, page: 3, position: 2 },
                  change: "improved",
                },
                {
                  keyword: "école maternelle à Tanger",
                  before: { ranked: false },
                  after: { ranked: true, page: 3, position: 11 },
                  change: "started",
                },
                {
                  keyword: "préscolaire privé Tanger",
                  before: { ranked: true, page: 3, position: 5 },
                  after: { ranked: true, page: 2, position: 8 },
                  change: "improved",
                },
                {
                  keyword: "préscolaire à Tanger",
                  before: { ranked: true, page: 3, position: 1 },
                  after: { ranked: true, page: 3, position: 3 },
                  change: "declined",
                },
                {
                  keyword: "kindergarten tanger",
                  before: { ranked: true, page: 2, position: 10 },
                  after: { ranked: true, page: 1, position: 2 },
                  change: "improved",
                },
                {
                  keyword: "kindergaten school",
                  before: { ranked: true, page: 3, position: 5 },
                  after: { ranked: true, page: 1, position: 5 },
                  change: "improved",
                },
              ],
            },
            {
              baselineDate: "13 October 2026",
              currentDate: "28 October 2026",
              id: "roosevelt-private-school-2",
              name: "Roosevelt Private School 2 — Collège & Lycée",
              introduction:
                "Changes in local search visibility across eight selected keywords.",
              records: [
                {
                  keyword: "collège et lycée privés Tanger",
                  before: { ranked: true, page: 1, position: 6 },
                  after: { ranked: true, page: 1, position: 3 },
                  change: "improved",
                },
                {
                  keyword: "collège lycée privé Tanger",
                  before: { ranked: true, page: 1, position: 10 },
                  after: { ranked: true, page: 1, position: 4 },
                  change: "improved",
                },
                {
                  keyword: "collège privé Tanger",
                  before: { ranked: true, page: 1, position: 7 },
                  after: { ranked: true, page: 1, position: 15 },
                  change: "declined",
                },
                {
                  keyword: "lycée privé Tanger",
                  before: { ranked: true, page: 1, position: 8 },
                  after: { ranked: true, page: 1, position: 15 },
                  change: "declined",
                },
                {
                  keyword: "college tanger",
                  before: { ranked: true, page: 1, position: 2 },
                  after: { ranked: true, page: 1, position: 7 },
                  change: "declined",
                },
                {
                  keyword: "lycee tanger",
                  before: { ranked: true, page: 1, position: 6 },
                  after: { ranked: true, page: 1, position: 20 },
                  change: "declined",
                },
                {
                  keyword: "college privé",
                  before: { ranked: false },
                  after: { ranked: true, page: 1, position: 4 },
                  change: "started",
                },
                {
                  keyword: "lycee privé",
                  before: { ranked: false },
                  after: { ranked: true, page: 1, position: 7 },
                  change: "started",
                },
              ],
            },
          ],
        },
        search: {
          heading: "Roosevelt on Google Search",
          image: {
            alt: "Google Search results for Roosevelt Tanger with three school names circled",
            caption: "Search: Roosevelt Tanger",
            height: 929,
            src: "/images/report/google-search-roosevelt-tanger.png",
            width: 1694,
          },
        },
        maps: {
          heading: "Roosevelt on Google Maps",
          image: {
            alt: "Google Maps view with the three Roosevelt school locations circled",
            caption: "The three Roosevelt school locations",
            height: 1111,
            src: "/images/report/google-maps-three-roosevelt-schools.png",
            width: 1416,
          },
        },
        comparisons: {
          heading: "Google Business Profiles — Before & After",
          profiles: [
            {
              name: "Roosevelt Private School 2",
              previous: {
                label: "Before — reconstructed view",
                image: {
                  alt: "Reconstructed Google profile with the previous Roosevelt school 2 collège,lycée name",
                  height: 1422,
                  src: "/images/report/school-2-before-reconstructed.png",
                  width: 1106,
                },
              },
              current: {
                label: "Current profile",
                image: {
                  alt: "Current Google profile for Roosevelt Private School 2",
                  height: 1460,
                  src: "/images/report/school-2-current-profile.png",
                  width: 1078,
                },
              },
            },
            {
              name: "Roosevelt Kindergarten",
              previous: {
                label: "Before — reconstructed view",
                image: {
                  alt: "Before reconstruction of the Roosevelt Kindergarten profile showing 4.4 stars and 16 reviews",
                  height: 1422,
                  src: "/images/report/kindergarten-before.png",
                  width: 1106,
                },
              },
              current: {
                label: "Current profile",
                image: {
                  alt: "After view of the Roosevelt Kindergarten profile showing school photos, 4.4 stars, and 17 reviews",
                  height: 1555,
                  src: "/images/report/kindergarten-after.png",
                  width: 1012,
                },
              },
            },
            {
              name: "Roosevelt Private School — Primary",
              note: "The optimized profile was later affected by a duplicate-listing issue. Recovery is in progress.",
              previous: {
                label: "Older public listing",
                image: {
                  alt: "Older public Google listing named School Roosevelt",
                  height: 613,
                  src: "/images/report/primary-older-public-listing.png",
                  width: 489,
                },
              },
              current: {
                label: "Optimized profile — reconstructed view",
                image: {
                  alt: "Reconstructed optimized Roosevelt Private School profile showing 5.0 stars and one review",
                  height: 1536,
                  src: "/images/report/primary-optimized-reconstructed.png",
                  width: 1024,
                },
              },
            },
          ],
        },
      },
      summary: null,
      title: "Results & Evidence",
    },
    {
      evidence: [],
      highlights: [],
      id: "vision-ideas",
      outlineTitle: "Our Vision & Ideas",
      summary: null,
      title: "Our Vision & Ideas",
    },
  ],
  title: "Full Report",
} as const satisfies ReportData;
