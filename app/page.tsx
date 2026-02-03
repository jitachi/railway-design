"use client";

import Link from "next/link";

// Artifact data
const artifacts = [
  {
    title: "On Consideration",
    description: "Something something about our principles",
    href: "/on-consideration",
  },
  {
    title: "Cards against bad quality",
    description: "Something something about our principles",
    href: "/cards",
  },
];

// Team data
const team = [
  {
    name: "Jitachi García",
    role: "Head of Design",
    image: "/images/team/jitachi.png",
    flag: "🇲🇽",
    twitter: "https://x.com/jitachi",
    github: "https://github.com/jitachi",
  },
  {
    name: "Genny Dee",
    role: "Brand Director",
    image: "/images/team/genny.png",
    flag: "🇺🇸",
    twitter: "https://x.com/gennydee",
    github: "https://github.com/gennydee",
    hidden: true,
  },
  {
    name: "Angelo Saraceno",
    role: "Brand Designer",
    image: "/images/team/angelo.png",
    flag: "🇺🇸",
    twitter: "https://x.com/angelosaraceno",
    github: "https://github.com/angelosaraceno",
  },
];

// Hiring data
const jobs = [
  {
    title: "Sr Product Designer",
    location: "Anywhere",
    href: "https://railway.com/careers/Product-designer",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#F1F0EF",
        padding: "24px",
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "8px 8px",
      }}
    >
      <div
        style={{
          backgroundColor: "#F1F0EF",
          borderRadius: "8px",
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.12)",
          minHeight: "calc(100vh - 48px)",
          padding: "48px",
          paddingTop: "24px",
          paddingBottom: "144px",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          {/* Header */}
          <div
            className="flex items-center gap-3"
            style={{ marginBottom: "160px" }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.8145 33.9521C42.0252 42.2343 33.6829 48 23.9746 48C7.77693 47.7555 2.14169 34.0288 2.11035 33.9521H45.8145ZM23.9746 0C37.2436 0.000109469 48.0002 10.7508 48 24.0098C47.9977 26.5692 47.5844 29.1123 46.7764 31.541H1.27832C0.982736 30.6187 0.784825 29.7825 0.782227 29.7715H34.1133C36.2427 29.7715 38.002 28.682 38.8193 26.8555C39.7073 24.8679 39.3314 22.7929 38.0254 20.9883C36.6127 19.0372 34.2429 16.2984 32.6016 15.0576C29.5778 12.7699 25.7349 12.4343 22.6084 12.3301L21.7109 12.2969C20.2613 12.2364 19.9852 12.2031 12.5645 12.2031V12.2061H12.5635C12.5635 12.2061 6.2852 12.2091 3.06152 12.2158C7.18662 4.92919 14.9981 0 23.9746 0ZM36.7471 25.3916C36.4723 26.4557 35.6258 27.3134 34.1143 27.3135H0.205078C0.117655 26.6816 0.0569871 26.0407 0.0185547 25.3916H36.7471ZM12.5576 14.6123C18.9227 14.6123 20.0074 14.6393 21.6064 14.7051C26.4026 14.9096 29.7555 14.2113 35.9883 22.2637C36.1607 22.483 36.3317 22.7075 36.459 22.9561H0C0.0341962 22.1473 0.108319 21.3404 0.222656 20.5391H19.3877V18.1064H0.704102C0.923341 17.1128 1.37398 15.891 1.84082 14.6309C5.44734 14.6213 9.15093 14.6123 12.5576 14.6123Z"
                fill="#1C1A28"
              />
            </svg>
            <span className="text-xl font-semibold text-gray-900 tracking-tight">
              Design
            </span>
          </div>

          {/* Hero */}
          <div style={{ marginBottom: "160px" }}>
            <h1
              className="text-gray-900"
              style={{
                fontFamily: "'IBM Plex Serif', serif",
                fontWeight: 500,
                fontSize: "48px",
                lineHeight: "125%",
                letterSpacing: "-0.04em",
              }}
            >
              Making the{" "}
              <em
                style={{
                  fontFamily: "'IBM Plex Serif', serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                peaceful
              </em>{" "}
              cloud
            </h1>
            <p
              style={{
                fontFamily: "'IBM Plex Serif', serif",
                fontWeight: 400,
                fontSize: "44px",
                lineHeight: "125%",
                letterSpacing: "-0.04em",
                color: "rgba(0, 0, 0, 0.4)",
                maxWidth: "740px",
              }}
            >
              Our principles, systems, and how we&apos;re building the future of
              infrastructure.
            </p>
          </div>

          {/* Artifacts Section */}
          <Section label="Artifacts">
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "32px" }}
            >
              {artifacts.map((artifact, index) => (
                <Link
                  key={index}
                  href={artifact.href}
                  className="group block rounded-xl p-5 transition-all hover:bg-white/80"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <h3
                    className="text-gray-900 group-hover:underline"
                    style={{
                      fontFamily: "'IBM Plex Serif', serif",
                      fontWeight: 500,
                      fontSize: "20px",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {artifact.title}
                  </h3>
                  <p
                    className="text-gray-500 mb-4"
                    style={{ fontSize: "16px", lineHeight: "150%" }}
                  >
                    {artifact.description}
                  </p>
                  <div
                    className="w-full"
                    style={{
                      height: "120px",
                    }}
                  />
                </Link>
              ))}
            </div>
          </Section>

          {/* Careers Section */}
          <Section label="Careers">
            <div className="space-y-8">
              {/* Video */}
              <div
                className="w-full rounded-xl overflow-hidden"
                style={{
                  aspectRatio: "16 / 9",
                  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.06)",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LeQFS4yqGek?si=y3_NmAOaKpAo8DKF"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              {/* Job Listings */}
              {jobs.map((job, index) => (
                <Link
                  key={index}
                  href={job.href}
                  target="_blank"
                  className="flex items-center justify-between py-3 px-5 rounded-xl transition-all hover:bg-white/80"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Serif', serif",
                      fontWeight: 500,
                      fontSize: "20px",
                      letterSpacing: "-0.025em",
                      color: "#111827",
                    }}
                  >
                    {job.title}
                  </span>
                  <span className="text-sm text-gray-400">{job.location}</span>
                </Link>
              ))}
            </div>
          </Section>

          {/* Team Section */}
          <Section label="Team" noBorder>
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "32px" }}
            >
              {team
                .filter((member) => !member.hidden)
                .map((member, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {/* Photo */}
                    <div
                      className="rounded-lg overflow-hidden flex-shrink-0"
                      style={{
                        width: "128px",
                        height: "128px",
                        backgroundColor: member.isHiring
                          ? "rgba(0, 0, 0, 0.06)"
                          : "rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {member.image && (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    {/* Info */}
                    <div>
                      <h3
                        style={{
                          fontFamily: "'IBM Plex Serif', serif",
                          fontWeight: 500,
                          fontSize: "20px",
                          letterSpacing: "-0.025em",
                          color: "#111827",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          fontSize: "16px",
                          color: "#6B7280",
                        }}
                      >
                        {member.role}
                      </p>
                      <div style={{ marginTop: "6px" }}>
                        {member.isHiring ? (
                          <Link
                            href="https://railway.com/careers"
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                          </Link>
                        ) : (
                          <div
                            className="flex items-center"
                            style={{ gap: "12px" }}
                          >
                            <span style={{ fontSize: "16px" }}>
                              {member.flag}
                            </span>
                            {member.twitter && (
                              <Link
                                href={member.twitter}
                                className="text-gray-400 hover:text-gray-600"
                                target="_blank"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                              </Link>
                            )}
                            {member.github && (
                              <Link
                                href={member.github}
                                className="text-gray-400 hover:text-gray-600"
                                target="_blank"
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

// Section component with label on left (4 cols) and content on right (8 cols)
function Section({
  label,
  children,
  noBorder = false,
}: {
  label: string;
  children: React.ReactNode;
  noBorder?: boolean;
}) {
  return (
    <div
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        borderBottom: noBorder ? "none" : undefined,
      }}
    >
      <div
        className="flex flex-col gap-6 lg:grid lg:gap-8"
        style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
      >
        <div className="lg:col-span-4">
          <h2
            style={{
              fontFamily: "'Inter Display', sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              color: "#111827",
            }}
          >
            {label}
          </h2>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </div>
  );
}
