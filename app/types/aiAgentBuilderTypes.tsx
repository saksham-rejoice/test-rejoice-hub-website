export interface AgentPromptSuggestion {
  id: string;
  label: string;
  description?: string;
  category?: AgentCategory;
}

export type AgentCategory = 
  | 'customer-support'
  | 'data-analysis'
  | 'marketing-automation'
  | 'sales-optimization'
  | 'content-generation'
  | 'process-automation'
  | 'custom';

export interface BlueprintComponent {
  id: string;
  name: string;
  description: string;
  type: 'core' | 'integration' | 'feature';
  estimatedTime?: string;
  technologies?: string[];
}

export interface AgentBlueprint {
  id: string;
  title: string;
  description: string;
  category: AgentCategory;
  components: BlueprintComponent[] | Number;
  estimatedDevelopmentTime: string;
  deliverables: string[];
  keyFeatures: string[];
  technicalSpecs: string[];
  core_components: {};
  
}

export interface BuildingAnimationStep {
  id: string;
  label: string;
  duration: number;
  description: string;
}

export interface LeadCaptureData {
  email: string;
  agentDescription: string;
  selectedCategory?: AgentCategory;
  timestamp: Date;
  blueprintId?: string;
}

export interface AgentBuilderState {
  currentStep: 'input' | 'building' | 'blueprint' | 'lead-capture' | 'complete';
  userInput: string;
  selectedPrompt?: AgentPromptSuggestion;
  generatedBlueprint?: AgentBlueprint;
  isGenerating: boolean;
  animationStep?: BuildingAnimationStep;
  showLeadCapture: boolean;
  leadData?: LeadCaptureData;
  error?: string;
}

export interface AgentBuilderActions {
  setUserInput: (input: string) => void;
  selectPrompt: (prompt: AgentPromptSuggestion) => void;
  generateBlueprint: () => Promise<void>;
  submitLeadCapture: (email: string) => Promise<void>;
  resetBuilder: () => void;
  setError: (error: string | undefined) => void;
}

export type AgentBuilderContext = AgentBuilderState & AgentBuilderActions;