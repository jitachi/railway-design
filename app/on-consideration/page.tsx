"use client";

import Link from "next/link";

export default function OnConsiderationPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#DDDBD9",
        padding: "24px",
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "8px 8px",
      }}
    >
      <div
        className="w-full h-full p-12"
        style={{
          backgroundColor: "#E7E5E3",
          borderRadius: "8px",
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.12)",
          width: "100%",
          minHeight: "calc(100vh - 48px)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="cursor-pointer">
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
            </Link>
            <span className="text-gray-400">/</span>
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
              On Consideration
            </h1>
          </div>

          {/* Divider */}
          <div
            className="mb-12"
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(0, 0, 0, 0.12)",
            }}
          />

          {/* Article Content */}
          <article className="prose-article article-indented">
            {/* Opening */}
            <p className="text-gray-900 mb-4 leading-relaxed">
              Creation is what separates us from everything else. Not using tools but making things
              that express how we understand the world. Things that didn't have to exist but do
              because we believed they should.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              And we're losing it. We're so deep into shipping, scaling, surviving that we forgot why
              we create in the first place. We're making things that work but say nothing. Artifacts
              with no human in them. Just optimization and generic assumptions.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              This is about remembering what creation actually is: the impulse to understand
              something deeply enough that you can give it form. To make something that carries
              your belief about how it should be.
            </p>
            <p className="text-gray-900 mb-12 leading-relaxed">
              When you create for others, that understanding becomes something else:
              consideration for how they'll experience what you've made.
            </p>

            {/* Good design is consideration made visible */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ letterSpacing: "-0.0125em" }}>
              Good design is consideration made visible
            </h2>
            <p className="text-gray-900 mb-4 leading-relaxed">
              When you create something for others to use, you're making choices on their behalf.
              Every detail they don't have to think about is a choice you made thoughtfully. Every
              confusion they encounter is a choice you didn't make at all.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              This isn't about aesthetics or polish. It's about understanding the complete problem—
              technical constraints, business realities, and human limitations. Most designers stop at
              "user needs." Most engineers stop at "technical requirements." Complete work requires
              seeing all of it simultaneously.
            </p>

            {/* What consideration looks like */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ letterSpacing: "-0.0125em" }}>
              What consideration looks like
            </h3>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Consideration means anticipating questions before they're asked. It means removing
              decisions that don't need to be made. It means making the right path obvious without
              explaining it.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              The best infrastructure disappears completely. You notice it only when it fails. This is
              the goal—not to be impressive, but to be trusted and forgotten.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              This applies to everything we build: interfaces, APIs, documentation, error messages,
              deployment flows, pricing models. If someone has to work around your system, you
              haven't finished the work.
            </p>

            {/* Inconsiderate artifacts = Bad Products */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ letterSpacing: "-0.0125em" }}>
              Inconsiderate artifacts = Bad Products
            </h3>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Things made with a wrong, over-generalized understanding of who we are, why we'd
              use this, or what the actual intention is. Every time you grab something and it's
              uncomfortable, somebody didn't consider how it would feel in your hand after a certain
              time, or they didn't account for your hand size. Maybe it's not for me—but what if it is?
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ letterSpacing: "-0.0125em" }}>
              Why this matters
            </h3>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Consideration isn't optional kindness. It's minimum competence for anything you expect
              others to rely on.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              When you ship something unconsidered, you're making a statement: "I didn't think
              about this enough, so now you have to." You're transferring your incomplete work onto
              everyone who uses it. That compounds. One unconsidered decision becomes a
              thousand small frustrations across your users.
            </p>
            <p className="text-gray-900 mb-12 leading-relaxed">
              That's not shipping fast. That's shipping broken and calling it done.
            </p>

            {/* The efficiency illusion */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ letterSpacing: "-0.0125em" }}>
              The efficiency illusion
            </h2>
            <p className="text-gray-600 mb-2 leading-relaxed">
              <strong className="text-gray-900">"It just needs to work"</strong>—For who? At what scale? When?
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              These questions get generalized away for efficiency purposes. We cut time by not
              considering these factors. But that's not efficiency—that's transferring the
              consideration labor from the maker (who gets paid to think about it once) to every user
              (who has to figure it out individually, repeatedly, forever).
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              We've optimized the wrong variable. Faster implementation without deeper
              understanding just means we can be wrong at scale more quickly. AI can write code
              faster, but that's just faster implementation—we don't have a deeper or faster
              understanding of ourselves. Products get better the more accurate they are, the more
              they fit the hole, and this only comes from understanding, not from faster tools.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              "It just needs to work" is how we convince ourselves that inconsiderate products are
              pragmatic. But nothing exists in the abstract:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-900">
              <li><strong>For who?</strong> A developer at 2am debugging a production issue has different needs than one exploring options at lunch.</li>
              <li><strong>At what scale?</strong> What works for 10 requests breaks differently than 10 million.</li>
              <li><strong>When?</strong> The same feature used daily versus once a month needs different consideration.</li>
            </ul>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Generalizing these away doesn't save time. It moves the burden from us (who design it
              once) to them (who adapt to it forever). That's not efficiency, <strong>but disrespect at scale</strong>.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              The cost is everywhere. We're drowning in tools that work but exhaust us. Everything
              requires constant adaptation instead of just fitting. We've normalized products that
              disrespect our time and attention. The friction compounds—death by a thousand
              inconsiderate interactions.
            </p>
            <p className="text-gray-900 mb-12 leading-relaxed">
              And on the creator side, we've lost the plot. Speed has replaced understanding as the
              goal. We're building faster but nothing's getting better. We've forgotten that creation is
              supposed to be an expression of understanding, not just output. <strong>We're making things
              that work but say nothing.</strong>
            </p>

            {/* The death of the middle */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ letterSpacing: "-0.0125em" }}>
              The death of the middle
            </h2>
            <p className="text-gray-900 mb-4 leading-relaxed">
              We live in an age where products in the middle die. Between cheap commodities and
              specialized craft, there's nothing sustainable.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              The middle doesn't know what it is. It's not convenient enough to win on price and
              distribution. It's not opinionated enough to be worth seeking out.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Everyone has the same basic functions. If that's all you offer, it's a race to the bottom
              on distribution and price. Function is commodified. Function alone is worthless.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              The only way to survive is becoming opinionated enough to be a <em>specialty item</em>—almost
              a luxury. Not expensive for the sake of it, but specific. Made for particular people with
              particular needs and values. Clear about who it's for and, crucially, who it's not for.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              This means never stopping the work of understanding the people you're making this for.
              The conversation doesn't end at launch. You keep listening. Your thesis keeps evolving.
              You stay opinionated but not rigid.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              The dead middle understood once—or never understood at all—and then optimized for
              scale. The specialists keep the conversation going. Their artifacts stay alive because
              there's still a human making decisions, still adapting, still expressing belief about how
              this should work.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              That's the choice: race to the bottom on features and price, or commit to continuous
              understanding of specific people. There is no sustainable middle anymore.
            </p>
            <p className="text-gray-900 mb-12 leading-relaxed">
              Consideration isn't a luxury—it's survival strategy. Without it, you're just competing with
              everyone else. With it, you're the only one who actually understands what these people
              need.
            </p>

            {/* What this means at Railway */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ letterSpacing: "-0.0125em" }}>
              What this means at Railway
            </h2>
            <p className="text-gray-900 mb-4 leading-relaxed">
              At Railway, we've distilled consideration into five qualities: <strong>Clear</strong>, <strong>Precise</strong>, <strong>Efficient</strong>,
              <strong> Durable</strong>, and <strong>Delightful</strong>. These aren't aspirational values—they're the standard we hold
              ourselves to across every iteration.
            </p>

            <ul className="list-disc list-inside mb-4 space-y-4 text-gray-900 leading-relaxed">
              <li>
                <strong>Clear</strong> means people understand what's happening and why. No mystery. No
                configuration archaeology. If someone has to guess what your system is doing, you
                haven't finished explaining it.
              </li>
              <li>
                <strong>Precise</strong> means it does exactly what's needed, nothing more, nothing less. Every
                feature exists for a reason. Every option solves an actual problem. No bloat
                disguised as flexibility.
              </li>
              <li>
                <strong>Efficient</strong> means respecting people's time and attention. Fast when it needs to be
                fast. Quiet when it should stay out of the way. No unnecessary steps, no waste.
              </li>
              <li>
                <strong>Durable</strong> means it keeps working. It handles edge cases. It degrades gracefully. It
                doesn't break under load or require constant maintenance. You can trust it and move
                on.
              </li>
              <li>
                <strong>Delightful</strong> means it feels good to use. Not cute, not playful—though it can be those
                things. Delightful means the experience matches the care put into building it. It
                means someone will notice the craft, even if they can't articulate why.
              </li>
            </ul>

            <p className="text-gray-900 mb-4 leading-relaxed">
              These qualities are reached progressively. Start functional and rough, then iterate
              toward polished and delightful. Once something works, that's when you ask: what
              could be better?
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Consideration can't stay abstract. You need specific questions that force you to think
              about the person on the other end—to imagine their context, their state, their
              expectations. To keep the human in the artifact. We use prompts like:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-600">
              <li>"Is this where users would naturally look for it?"</li>
              <li>"Are we organizing by our convenience or theirs?"</li>
              <li>"Can users predict what will happen before they act?"</li>
              <li>"Would this make someone say 'I wish I'd built that'?"</li>
            </ul>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Quality isn't about perfection. It's about respect. Respect for the person's time—their
              time is worth more than yours because there are more of them. Respect for their
              intelligence—they can tell when you've been thoughtful and when you haven't. Respect
              for the problem you're solving—real problems deserve complete solutions.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              At Railway, this means infrastructure that stays out of your way. No surprise bills from
              usage you didn't know was happening. No mysterious failures with unhelpful error
              messages. No configuration archaeology to understand what you set up six months
              ago. Just systems that work the way you'd expect them to if you'd built them yourself,
              with the knowledge we have.
            </p>
            <div className="mb-12 mt-8">
              <div 
                style={{ 
                  borderTop: "1px solid rgba(0, 0, 0, 0.12)",
                  paddingTop: "16px",
                }}
              >
                <p className="text-gray-600 leading-relaxed text-sm">
                  You can explore the full deck at{" "}
                  <Link href="/cards" className="underline hover:text-gray-900">
                    railway.design/cards
                  </Link>
                </p>
              </div>
            </div>

            {/* Why this is hard */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ letterSpacing: "-0.0125em" }}>
              Why this is hard
            </h2>
            <p className="text-gray-900 mb-4 leading-relaxed">
              This work is difficult. It requires understanding things deeply enough to make them
              simple. It requires caring about details that most people won't notice consciously but
              feel unconsciously. It requires saying no to features that complicate more than they
              help, even when someone really wants them.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              It means doing the hard work of design—which is not decoration, but the complete
              thinking-through of how something should work. It means not stopping at "it works" but
              pushing to "it works well."
            </p>
            <p className="text-gray-900 mb-12 leading-relaxed">
              Consideration requires seeing the full picture: what the business needs, what the
              technology enables, and what the person using it actually cares about. Most work fails
              because it optimizes for only one of these.
            </p>

            {/* The standard */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ letterSpacing: "-0.0125em" }}>
              The standard
            </h2>
            <p className="text-gray-900 mb-4 leading-relaxed">
              This is what we're doing at Railway. The "peaceful cloud" isn't marketing, it's
              consideration expressed as infrastructure. We're saying: "We see that you're tired of
              DevOps complexity. We see that you want to build, not configure. We made this for that
              specific exhaustion."
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Every complexity we remove is us saying: "I see that you're overwhelmed. I considered
              that." Every technical decision made invisible is respect for the builder's attention.
              <strong> Every choice carries our belief about how infrastructure should work.</strong>
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              The medium changes. The tools evolve. The work remains: understand another human
              being well enough to make something that fits their actual need. To make something
              that expresses what you believe about how it should be. No amount of automation
              speeds that up.
            </p>
            <p className="text-gray-900 mb-4 leading-relaxed">
              <strong>That's consideration. That's creation. That's remembering what makes us human
              while we're busy building.</strong>
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              That's the job.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
