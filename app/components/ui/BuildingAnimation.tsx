import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Database,
  Cpu,
  Network,
  Zap,
  Cog,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Lock,
} from "lucide-react";
import { supabase } from "~/Supabase/supabaseClient";

interface BuildingAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
  userInput: string;
  project_id: string;
}

interface AnimationNode {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  position: { x: number; y: number };
  delay: number;
}

const BUILDING_STEPS = [
  {
    id: "analyzing",
    label: "Analyzing your requirements...",
    duration: 200,
  },
  { id: "designing", label: "Designing AI architecture...", duration: 200 },
  {
    id: "selecting",
    label: "Selecting optimal technologies...",
    duration: 200,
  },
  {
    id: "integrating",
    label: "Planning system integrations...",
    duration: 200,
  },
  { id: "optimizing", label: "Optimizing for performance...", duration: 200 },
  { id: "finalizing", label: "Finalizing your blueprint...", duration: 200 },
];

const ANIMATION_NODES: AnimationNode[] = [
  {
    id: "brain",
    label: "AI Engine",
    icon: Brain,
    position: { x: 50, y: 20 },
    delay: 0,
  },
  {
    id: "database",
    label: "Data Layer",
    icon: Database,
    position: { x: 20, y: 60 },
    delay: 200,
  },
  {
    id: "cpu",
    label: "Processing",
    icon: Cpu,
    position: { x: 80, y: 60 },
    delay: 400,
  },
  {
    id: "network",
    label: "Integration",
    icon: Network,
    position: { x: 50, y: 80 },
    delay: 600,
  },
];

const CONNECTIONS = [
  { from: "brain", to: "database" },
  { from: "brain", to: "cpu" },
  { from: "database", to: "network" },
  { from: "cpu", to: "network" },
];

export const BuildingAnimation: React.FC<BuildingAnimationProps> = ({
  isVisible,
  onComplete,
  userInput,
  project_id,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [animatedNodes, setAnimatedNodes] = useState<string[]>([]);
  const [showConnections, setShowConnections] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      // Reset animation state when not visible
      setCurrentStepIndex(0);
      setCompletedSteps([]);
      setAnimatedNodes([]);
      setShowConnections(false);
      return;
    }

    const runAnimation = async () => {
      try {
        const animateSteps = async () => {
          for (let i = 0; i < BUILDING_STEPS.length; i++) {
            const step = BUILDING_STEPS[i];

            // Update current step
            setCurrentStepIndex(i);

            // Animate node
            if (i < ANIMATION_NODES.length) {
              setTimeout(() => {
                setAnimatedNodes((prev) => [...prev, ANIMATION_NODES[i].id]);
              }, step.duration / 2);
            }

            // Show connections
            if (i === 2) {
              setTimeout(() => {
                setShowConnections(true);
              }, step.duration / 2);
            }

            // Wait for step duration
            await new Promise((resolve) => setTimeout(resolve, step.duration));

            // Mark step completed
            setCompletedSteps((prev) => [...prev, step.id]);
          }
        };

        await animateSteps(); // ✅ Wait until animation finishes

        setTimeout(() => {
          onComplete();
        }, 500);
      } catch (err) {
        console.error("Error in building animation:", err);
      }
    };

    runAnimation();
  }, [isVisible, onComplete, project_id]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl p-8 max-w-2xl max-h-[calc(100dvh-100px)] overflow-auto w-full shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-accent-400 to-warning-500 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-10 h-10 text-primary" />
            </motion.div>

            <h2 className="text-2xl font-bold text-navy-950 mb-2">
              Building Your AI Agent
            </h2>

            <p className="text-navy-700 max-w-md mx-auto">
              Creating a custom solution for:
              <span className="font-semibold text-navy-950 block mt-1">
                "{userInput}"
              </span>
            </p>
          </div>

          {/* Animated Architecture Diagram */}
          <div className="relative mb-8 h-64 bg-primary-200 rounded-2xl border border-gray-200 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-tech-grid bg-grid"></div>
            </div>

            <div className="absolute top-[-35px] z-10 left-[-30px] leading-0 w-full h-full">
              {ANIMATION_NODES.map((node, index) => {
                const Icon = node.icon;
                const isAnimated = animatedNodes.includes(node.id);

                return (
                  <motion.div
                    key={node.id}
                    className="absolute"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isAnimated
                        ? {
                            scale: 1,
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: node.delay / 1000,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="">
                      <motion.div
                        className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center shadow-lg"
                        animate={
                          isAnimated
                            ? {
                                boxShadow: [
                                  "0 4px 20px rgba(252, 191, 73, 0.3)",
                                  "0 4px 40px rgba(252, 191, 73, 0.6)",
                                  "0 4px 20px rgba(252, 191, 73, 0.3)",
                                ],
                              }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-navy-950 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap"
                        initial={{ opacity: 0, y: -10 }}
                        animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: node.delay / 1000 + 0.3 }}
                      >
                        {node.label}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Animated Connections */}
            <AnimatePresence>
              {showConnections &&
                CONNECTIONS.map((connection, index) => {
                  const fromNode = ANIMATION_NODES.find(
                    (n) => n.id === connection.from
                  );
                  const toNode = ANIMATION_NODES.find(
                    (n) => n.id === connection.to
                  );

                  if (!fromNode || !toNode) return null;

                  return (
                    <motion.svg
                      key={`${connection.from}-${connection.to}`}
                      className="absolute z-0 inset-0 w-full h-full pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <motion.line
                        x1={`${fromNode.position.x}%`}
                        y1={`${fromNode.position.y}%`}
                        x2={`${toNode.position.x}%`}
                        y2={`${toNode.position.y}%`}
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        strokeDasharray="6,4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                      <defs>
                        <linearGradient
                          id="connectionGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FCBF49" />
                          <stop offset="100%" stopColor="#F77F00" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  );
                })}
            </AnimatePresence>

            {/* Floating Particles */}
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-2 h-2 bg-accent-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Building Steps */}
          <div className="space-y-3">
            {BUILDING_STEPS.map((step, index) => {
              const isActive = index === currentStepIndex;
              const isCompleted = completedSteps.includes(step.id);
              const isPending = index > currentStepIndex;

              return (
                <motion.div
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-accent-50 border border-accent-200"
                      : isCompleted
                        ? "bg-green-50 border border-green-200"
                        : "bg-gray-50 border border-gray-200"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isCompleted
                        ? "bg-green-500 text-primary-100"
                        : isActive
                          ? "bg-accent-400 text-primary-100"
                          : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : isActive ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Cog className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <div className="w-2 h-2 bg-current rounded-full" />
                    )}
                  </div>

                  <span
                    className={`text-sm font-medium ${
                      isCompleted
                        ? "text-green-700"
                        : isActive
                          ? "text-navy-950"
                          : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>

                  {isActive && (
                    <motion.div
                      className="ml-auto"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Zap className="w-4 h-4 text-accent-500" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Building Progress</span>
              <span>
                {Math.round(
                  ((currentStepIndex + 1) / BUILDING_STEPS.length) * 100
                )}
                %
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-400 to-warning-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentStepIndex + 1) / BUILDING_STEPS.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
