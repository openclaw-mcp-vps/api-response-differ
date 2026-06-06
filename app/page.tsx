export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded px-3 py-1 text-xs text-[#58a6ff] mb-6">
          developer-tools
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Spot API changes<br />
          <span className="text-[#58a6ff]">before they break</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-lg mx-auto">
          Monitors your third-party API endpoints, compares responses against stored schemas, and alerts you the moment something changes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded hover:bg-[#79b8ff] transition-colors"
        >
          Start monitoring — $9/mo
        </a>
        <div className="mt-8 bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left text-sm">
          <div className="text-[#8b949e] mb-2">// diff detected in stripe.com/v1/prices</div>
          <div className="text-red-400">- "unit_amount": 1000</div>
          <div className="text-green-400">+ "unit_amount": 1200</div>
          <div className="text-yellow-400">+ "metadata.new_field": "value"</div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-lg p-8 bg-[#161b22] max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-bold text-sm mb-2">PRO</div>
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of API changes.</p>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "Up to 50 monitored endpoints",
              "1-minute polling intervals",
              "Schema diff & new field alerts",
              "Webhook + email notifications",
              "30-day response history",
              "JSON & GraphQL support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] text-[#0d1117] font-bold px-6 py-3 rounded hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">How does it detect changes?</h3>
            <p className="text-[#8b949e] text-sm">We fetch your endpoints on a schedule, normalize the JSON response, and diff it against the last known schema. Any added, removed, or changed fields trigger an alert instantly.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">What APIs can I monitor?</h3>
            <p className="text-[#8b949e] text-sm">Any HTTP endpoint that returns JSON — REST APIs, GraphQL, webhooks, or internal services. Add a URL, optional headers, and you're set.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">How are alerts delivered?</h3>
            <p className="text-[#8b949e] text-sm">Via webhook (Slack, Discord, custom) or email. You get a full diff showing exactly what changed so you can act immediately.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        <p>API Response Differ &copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
