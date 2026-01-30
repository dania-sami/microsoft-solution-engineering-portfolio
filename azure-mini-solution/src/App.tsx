import React from "react";
import { motion } from "framer-motion";

type Industry = "Education" | "Healthcare" | "Retail" | "Public Sector";
type Priority = "Scalability" | "Security" | "Insights" | "Cost Optimisation";

const cards = [
  {
    name: "App Layer",
    service: "Azure App Service",
    description: "Host scalable web apps with zero-downtime deployments.",
  },
  {
    name: "Data Layer",
    service: "Azure SQL / Cosmos DB",
    description: "Managed databases for transactional and analytical workloads.",
  },
  {
    name: "AI Layer",
    service: "Azure OpenAI",
    description: "Add copilots, chat and document intelligence to your solution.",
  },
  {
    name: "Security & Ops",
    service: "Defender / Monitor",
    description: "Security, observability and reliability engineered in by default.",
  },
];

const App: React.FC = () => {
  const [industry, setIndustry] = React.useState<Industry>("Education");
  const [priority, setPriority] = React.useState<Priority>("Scalability");

  const recommendation = React.useMemo(() => {
    if (industry === "Education" && priority === "Scalability") {
      return "Use Azure App Service with autoscale, Azure SQL for student data, Azure Front Door for global reach and Azure Monitor for insights.";
    }
    if (industry === "Healthcare" && priority === "Security") {
      return "Use Azure Kubernetes Service with managed identities, Key Vault, Private Endpoints and Defender for Cloud for a zero-trust aligned architecture.";
    }
    if (industry === "Retail" && priority === "Insights") {
      return "Combine Cosmos DB with Azure Synapse, Event Hubs and Power BI for near real-time dashboards on orders and inventory.";
    }
    if (industry === "Public Sector" && priority === "Cost Optimisation") {
      return "Leverage App Service with reserved instances, Azure SQL serverless and Azure Advisor recommendations to keep cost under control.";
    }
    return "Start from a secure baseline: App Service, Azure SQL, Azure Monitor and Entra ID, then extend with AI and analytics depending on customer goals.";
  }, [industry, priority]);

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        background:
          "radial-gradient(circle at top, #1d4ed8 0, #020617 45%, #000000 100%)",
        color: "white",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          display: "grid",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Left panel: controls + explanation */}
        <div style={{ position: "relative" }}>
          {/* Glow ring behind content */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              inset: -80,
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, rgba(56,189,248,0.3), rgba(129,140,248,0.4), rgba(56,189,248,0.3))",
              filter: "blur(40px)",
              opacity: 0.8,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "relative",
              zIndex: 10,
              padding: 32,
              borderRadius: 24,
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.75))",
              boxShadow:
                "0 25px 60px rgba(15,23,42,0.9), 0 0 0 1px rgba(148,163,184,0.25)",
              backdropFilter: "blur(18px)",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: 3,
                fontSize: 12,
                color: "#a5b4fc",
                marginBottom: 8,
              }}
            >
              Azure solution playground
            </p>
            <h1
              style={{
                fontSize: 34,
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Design a{" "}
              <span style={{ color: "#38bdf8" }}>customer-ready cloud story</span>
              <br />
              in a few clicks.
            </h1>
            <p
              style={{
                color: "#cbd5f5",
                fontSize: 15,
                maxWidth: 560,
                marginBottom: 24,
              }}
            >
              Pick an industry and a priority. The 3D Azure map on the right reacts,
              and you get a narrative you can use directly in a customer meeting or on
              your CV to prove you think like a Microsoft Solution Engineer.
            </p>

            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 20,
              }}
            >
              <div style={{ flex: "1 1 180px" }}>
                <label
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#94a3b8",
                  }}
                >
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) =>
                    setIndustry(e.target.value as Industry)
                  }
                  style={{
                    marginTop: 6,
                    width: "100%",
                    borderRadius: 999,
                    padding: "10px 14px",
                    border: "1px solid rgba(148,163,184,0.6)",
                    background: "rgba(15,23,42,0.9)",
                    color: "white",
                    outline: "none",
                    fontSize: 14,
                  }}
                >
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Retail</option>
                  <option>Public Sector</option>
                </select>
              </div>

              <div style={{ flex: "1 1 180px" }}>
                <label
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#94a3b8",
                  }}
                >
                  Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) =>
                    setPriority(e.target.value as Priority)
                  }
                  style={{
                    marginTop: 6,
                    width: "100%",
                    borderRadius: 999,
                    padding: "10px 14px",
                    border: "1px solid rgba(148,163,184,0.6)",
                    background: "rgba(15,23,42,0.9)",
                    color: "white",
                    outline: "none",
                    fontSize: 14,
                  }}
                >
                  <option>Scalability</option>
                  <option>Security</option>
                  <option>Insights</option>
                  <option>Cost Optimisation</option>
                </select>
              </div>
            </div>

            <motion.div
              key={industry + priority}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                padding: 16,
                borderRadius: 18,
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(56,189,248,0.08))",
                border: "1px solid rgba(59,130,246,0.5)",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "#93c5fd",
                  marginBottom: 6,
                }}
              >
                Recommended Azure narrative
              </p>
              <p style={{ fontSize: 14, color: "#e5e7eb" }}>{recommendation}</p>
            </motion.div>

            <p style={{ fontSize: 12, color: "#9ca3af" }}>
              
              </span>
            </p>
          </motion.div>
        </div>

        {/* Right panel: 3D-ish animated Azure map */}
        <div
          style={{
            position: "relative",
            height: "100%",
            minHeight: 420,
            perspective: 1400,
          }}
        >
          <motion.div
            initial={{ opacity: 0, rotateY: -18, rotateX: 12, y: 40 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 8, y: 0 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 70 }}
            style={{
              position: "relative",
              height: "100%",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Base glowing platform */}
            <div
              style={{
                position: "absolute",
                inset: -40,
                background:
                  "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.7), transparent 55%)",
                opacity: 0.9,
                filter: "blur(30px)",
                transform: "translateZ(-80px)",
              }}
            />

            {/* Floating 3D board */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              }}
              style={{
                position: "relative",
                margin: "0 auto",
                maxWidth: 480,
                padding: 22,
                borderRadius: 26,
                background:
                  "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.85))",
                boxShadow:
                  "0 32px 80px rgba(15,23,42,1), 0 0 0 1px rgba(148,163,184,0.4)",
                transform:
                  "rotateY(-18deg) rotateX(18deg) translateZ(40px)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Orbiting Azure orb */}
              <motion.div
                animate={{
                  rotateZ: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 26,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  top: -30,
                  right: 80,
                  width: 68,
                  height: 68,
                  borderRadius: "999px",
                  border: "1px dashed rgba(129,140,248,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "translateZ(50px)",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle at 30% 20%, #e0f2fe, #38bdf8)",
                    boxShadow:
                      "0 0 18px rgba(56,189,248,0.9), 0 0 40px rgba(59,130,246,0.8)",
                  }}
                />
              </motion.div>

              <div
                style={{
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                  transform: "translateZ(40px)",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      color: "#a5b4fc",
                      marginBottom: 4,
                    }}
                  >
                    3D Azure map
                  </p>
                  <h2 style={{ fontSize: 18 }}>
                    {industry} | {priority}
                  </h2>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#9ca3af",
                    padding: "6px 10px",
                    borderRadius: 999,
                    border: "1px solid rgba(148,163,184,0.5)",
                    background: "rgba(15,23,42,0.9)",
                  }}
                >
                  Customer view ready
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 14,
                }}
              >
                {cards.map((card, index) => (
                  <motion.div
                    key={card.name}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      boxShadow:
                        "0 20px 45px rgba(15,23,42,0.95)",
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    style={{
                      position: "relative",
                      borderRadius: 18,
                      padding: 12,
                      background:
                        "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(30,64,175,0.7))",
                      border: "1px solid rgba(129,140,248,0.65)",
                      overflow: "hidden",
                      transform: `translateZ(${24 + index * 6}px)`,
                    }}
                  >
                    <motion.div
                      animate={{
                        x: [-8, 8, -8],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 16 + index * 2,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: "absolute",
                        inset: -40,
                        opacity: 0.7,
                        background:
                          index % 2 === 0
                            ? "radial-gradient(circle at top left, rgba(56,189,248,0.35), transparent 60%)"
                            : "radial-gradient(circle at bottom right, rgba(129,140,248,0.35), transparent 60%)",
                      }}
                    />
                    <div style={{ position: "relative", zIndex: 10 }}>
                      <p
                        style={{
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: 1.5,
                          color: "#c7d2fe",
                          marginBottom: 4,
                        }}
                      >
                        {card.service}
                      </p>
                      <h3 style={{ fontSize: 15, marginBottom: 4 }}>
                        {card.name}
                      </h3>
                      <p
                        style={{
                          fontSize: 12,
                          color: "#e5e7eb",
                          marginBottom: 8,
                        }}
                      >
                        {card.description}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "#e5e7eb",
                        }}
                      >
                        Focused on {priority.toLowerCase()} for{" "}
                        {industry.toLowerCase()} customers.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 18,
                  fontSize: 11,
                  color: "#94a3b8",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <span>
                  Hover cards during a demo to tell the story layer by layer.
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "rgba(15,23,42,0.9)",
                    border: "1px solid rgba(148,163,184,0.5)",
                  }}
                >
                  Demo ready asset
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
