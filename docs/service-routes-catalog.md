# Service Routes Catalog

**Created**: Phase D - Service Route Identification  
**Purpose**: Comprehensive catalog of all current and planned service routes for migration to unified template

---

## Current Service Architecture

### Route Structure

- **Base Path**: `/services`
- **Index Route**: `/services` (overview page)
- **Dynamic Route**: `/services/:serviceId` (individual service pages)

### Service Data Source

- **Current**: Static data from `~/data/services/services.ts`
- **CMS Integration**: Some content loaded from external CMS
- **Future**: Unified content schema from `serviceContentLoader.ts`

---

## Existing Services (8 Total)

### 1. AI Agents Services

- **Slug**: `ai-agents-services`
- **Route**: `/services/ai-agents-services`
- **Priority**: HIGH (core AI service)
- **Content Status**: Has basic data, needs enhancement
- **Lead Magnets**: AI Agent Blueprint, ROI Calculator, Readiness Assessment
- **Migration Status**: Ready for unified template

### 2. Generative AI Development Services

- **Slug**: `generative-ai-development-services`
- **Route**: `/services/generative-ai-development-services`
- **Priority**: HIGH (core AI service)
- **Content Status**: Has basic data, needs enhancement
- **Lead Magnets**: GenAI Use Case Playbook, Content Strategy Template
- **Migration Status**: Ready for unified template

### 3. Mobile App Development Services

- **Slug**: `mobile-app-development-services`
- **Route**: `/services/mobile-app-development-services`
- **Priority**: MEDIUM (traditional service)
- **Content Status**: Basic data available
- **Lead Magnets**: Project Planning Template, Vendor Evaluation Guide
- **Migration Status**: Standard migration

### 4. IOT Development Services

- **Slug**: `iot-development-services`
- **Route**: `/services/iot-development-services`
- **Priority**: MEDIUM (emerging technology)
- **Content Status**: Basic data available
- **Lead Magnets**: IOT Implementation Guide, Architecture Template
- **Migration Status**: Standard migration

### 5. DevOps Consulting Services

- **Slug**: `devops-consulting-services`
- **Route**: `/services/devops-consulting-services`
- **Priority**: HIGH (enterprise focus)
- **Content Status**: Basic data available
- **Lead Magnets**: Cloud Migration Checklist, Integration Architecture Guide
- **Migration Status**: Ready for unified template

### 6. Open Source Consulting & Deployment

- **Slug**: `open-source-consulting`
- **Route**: `/services/open-source-consulting`
- **Priority**: MEDIUM (specialized service)
- **Content Status**: Basic data available
- **Lead Magnets**: Cost Analysis Calculator, Implementation Guide
- **Migration Status**: Standard migration

### 7. UI/UX Design Services

- **Slug**: `ui-ux-design-services`
- **Route**: `/services/ui-ux-design-services`
- **Priority**: MEDIUM (design focus)
- **Content Status**: Basic data available
- **Lead Magnets**: Design System Template, UX Audit Checklist
- **Migration Status**: Standard migration

### 8. Digital Marketing Services

- **Slug**: `digital-marketing-services`
- **Route**: `/services/digital-marketing-services`
- **Priority**: MEDIUM (marketing focus)
- **Content Status**: Basic data available
- **Lead Magnets**: Marketing ROI Calculator, Strategy Template
- **Migration Status**: Standard migration

---

## Planned Additional Services (For Future)

### 9. Automation Services

- **Slug**: `automation-services`
- **Route**: `/services/automation-services`
- **Priority**: HIGH (new AI focus)
- **Content Status**: Content schema ready
- **Lead Magnets**: Automation ROI Calculator, Process Checklist
- **Migration Status**: New service with full template

### 10. Custom AI Integrations

- **Slug**: `custom-ai-integrations`
- **Route**: `/services/custom-ai-integrations`
- **Priority**: HIGH (enterprise AI)
- **Content Status**: Content schema ready
- **Lead Magnets**: Integration Architecture Guide, Vendor Evaluation
- **Migration Status**: New service with full template

### 11. Web Development Services

- **Slug**: `web-development-services`
- **Route**: `/services/web-development-services`
- **Priority**: MEDIUM (traditional service)
- **Content Status**: Needs content development
- **Lead Magnets**: Project Planning Template, Technology Guide
- **Migration Status**: Future implementation

---

## Migration Priority Matrix

### Phase 1: High-Priority AI Services

1. **ai-agents-services** - Core AI offering
2. **generative-ai-development-services** - Core AI offering
3. **devops-consulting-services** - Enterprise focus
4. **automation-services** - New AI service

### Phase 2: Medium-Priority Services

5. **mobile-app-development-services** - Established service
6. **iot-development-services** - Growth area
7. **open-source-consulting** - Specialized offering
8. **custom-ai-integrations** - New enterprise service

### Phase 3: Standard Services

9. **ui-ux-design-services** - Design focus
10. **digital-marketing-services** - Marketing focus
11. **web-development-services** - Future service

---

## Content Schema Mapping

### Required Content for Each Service:

- **Service ID**: Matching route slug
- **Title & Subhead**: Value proposition focused
- **Problems (3-5)**: Pain points addressed
- **Outcomes (3-5)**: Measurable benefits with metrics
- **Capabilities (4-6)**: Core service features
- **Industries (6-9)**: Target sectors with outcomes
- **Process Steps (3-4)**: Implementation methodology
- **Case Studies (2-3)**: Proof points with metrics
- **Tech Stack (6-12)**: Technologies used
- **Pricing Notes**: Engagement model information
- **FAQs (5-7)**: Common questions and objections
- **CTAs**: Primary and secondary actions
- **SEO**: Title, description, OG image
- **Lead Magnets**: 1-3 relevant magnets per service

---

## Lead Magnet Distribution

### High-Value Lead Magnets by Service:

**AI Services:**

- AI Agent Blueprint Generator
- AI Readiness Assessment
- Automation ROI Calculator
- GenAI Use Case Playbook

**Technical Services:**

- Integration Architecture Guide
- Cloud Migration Checklist
- Project Planning Template
- Vendor Evaluation Guide

**Business Services:**

- Process Automation Checklist
- Content Strategy Template
- Marketing ROI Calculator
- Cost Analysis Tools

---

## Navigation Structure

### Main Services Navigation:

```
Services
├── AI & Automation
│   ├── AI Agents Services
│   ├── Generative AI Solutions
│   ├── Automation Services
│   └── Custom AI Integrations
├── Development
│   ├── Web Development
│   ├── Mobile App Development
│   └── IOT Development
├── Operations
│   ├── DevOps Consulting
│   └── Open Source Consulting
└── Design & Marketing
    ├── UI/UX Design
    └── Digital Marketing
```

### Cross-Service Linking:

- Related services at bottom of each page
- "Explore Similar Services" section
- Strategic upselling between complementary services

---

## Implementation Checklist

### For Each Service:

- [ ] Map existing content to new schema
- [ ] Create comprehensive content for all 11 sections
- [ ] Select appropriate lead magnets (1-3 per service)
- [ ] Configure placement rules (inline, sticky, exit-intent)
- [ ] Set up proper analytics tracking
- [ ] Create SEO metadata and JSON-LD
- [ ] Test form submissions and integrations
- [ ] Validate responsive design and accessibility
- [ ] Configure cross-service navigation
- [ ] Set up proper canonical URLs and redirects

### Quality Assurance:

- [ ] Visual consistency with Homepage patterns
- [ ] Lead magnet functionality across all placements
- [ ] Form submission and Slack integration
- [ ] Analytics event tracking
- [ ] Performance optimization
- [ ] Accessibility compliance
- [ ] Mobile responsiveness
- [ ] SEO optimization

---

## Success Metrics

### Conversion Goals:

- Increase lead capture rate by 40%
- Improve time on page by 25%
- Boost consultation bookings by 30%
- Enhance cross-service navigation by 50%

### Quality Metrics:

- 100% visual consistency with Homepage
- Sub-3 second page load times
- 100% accessibility compliance
- 95%+ mobile usability score

---

## Next Steps

1. **Immediate**: Migrate high-priority AI services (Phase 1)
2. **Week 2**: Implement medium-priority services (Phase 2)
3. **Week 3**: Complete standard services (Phase 3)
4. **Week 4**: QA, optimization, and performance testing
5. **Ongoing**: Monitor conversion metrics and optimize

**Target Completion**: All services migrated to unified template within 4 weeks
