# Decky Pages Content Audit Checklist
**Date:** September 2, 2025  
**Purpose:** Identify content that needs to move between FAQ and Troubleshooting sections

## Content Classification Rules

### FAQ Content = "How do I...?" / "What is...?" / "Can I...?"
- Explains how features work
- General information questions
- Process explanations
- Feature comparisons
- Basic setup instructions

### Troubleshooting Content = "X is not working" / "I'm getting an error" / "Fix Y problem"
- Specific problems users encounter
- Error messages and solutions
- Performance issues
- Things that are broken or failing
- Step-by-step problem resolution

## Decky FAQ Content Audit

### Items to KEEP in FAQ (✅ Correctly Placed):
- [x] "What's the difference between Decky and Paid version?" - ✅ FAQ
- [x] "Is Junk Store trustworthy and how are credentials handled?" - ✅ FAQ  
- [x] "How do I install the Junk Store Decky plugin?" - ✅ FAQ
- [x] "How do I access Junk Store after installation?" - ✅ FAQ
- [x] "What should I do first after installing?" - ✅ FAQ
- [x] "Why can I only see A-L games?" - ✅ FAQ (our new addition)
- [x] "Can I use GOG extension with other third-party solutions?" - ✅ FAQ
- [x] "How do I install or uninstall a game?" - ✅ FAQ
- [x] "Can I use Junk Store with already installed games?" - ✅ FAQ
- [x] "Does Junk Store automatically install DLC content?" - ✅ FAQ

### Items to MOVE to Troubleshooting (❌ Misplaced):

**From FAQ review, these might need moving:**
- [ ] "I don't have Proton GE or don't know how to install it" - **MOVE TO TROUBLESHOOTING**
  - This is a problem-solving guide, not a general FAQ
  - Users come here when they have an issue

**Need to scan for more items like:**
- [ ] Any question starting with "I can't..."
- [ ] Any question about fixing errors
- [ ] Any question about things not working properly
- [ ] Performance-related issues
- [ ] Authentication problems

## Decky Troubleshooting Content Audit

### Current Troubleshooting Structure Analysis:
**Sections that exist:**
1. General Plugin Issues
2. Epic Games Issues  
3. GOG Extension Issues
4. Game-Specific Issues

### Items to KEEP in Troubleshooting (✅ Correctly Placed):
- [x] Plugin installation failures - ✅ TROUBLESHOOTING
- [x] Authentication errors - ✅ TROUBLESHOOTING  
- [x] Game launch failures - ✅ TROUBLESHOOTING
- [x] Controller not working - ✅ TROUBLESHOOTING
- [x] Performance issues - ✅ TROUBLESHOOTING
- [x] Dependency installation problems - ✅ TROUBLESHOOTING

### Items to MOVE to FAQ (❌ Misplaced):
**Need to scan troubleshooting for:**
- [ ] General "how to" instructions that aren't problem-specific
- [ ] Feature explanations
- [ ] Basic setup information
- [ ] Informational content that's not solving a specific problem

## Content Migration Action Items

### Phase 1: Identify Content to Move
- [ ] **Scan entire Decky FAQ** for troubleshooting items
- [ ] **Scan entire Decky Troubleshooting** for FAQ items  
- [ ] **Create migration list** with exact content to move
- [ ] **Verify no content duplication** between pages

### Phase 2: Content Organization
- [ ] **Group troubleshooting items** by category:
  - Installation Problems
  - Authentication Issues
  - Game Launch Problems
  - Performance Issues
  - Technical Errors
  - Dependencies & Requirements

- [ ] **Ensure FAQ sections** are logical:
  - Overview & Getting Started
  - GOG Extension
  - Game Management
  - Game Compatibility
  - Technical Support

### Phase 3: Cross-References
- [ ] **Add cross-references** between FAQ and Troubleshooting
- [ ] **Link related content** (FAQ explains feature, Troubleshooting fixes problems with it)
- [ ] **Ensure logical user flow** from learning about feature to fixing problems

## Quick Content Review Commands

### Find Potential Misplaced FAQ Items:
```bash
# Look for problem-oriented questions in FAQ
grep -n "don't.*work\|not.*work\|error\|fix\|problem\|issue\|fail\|can't" decky-unified-faq.md

# Look for troubleshooting language in FAQ
grep -n "troubleshoot\|debug\|resolve\|solution" decky-unified-faq.md
```

### Find Potential Misplaced Troubleshooting Items:
```bash
# Look for general questions in troubleshooting  
grep -n "what.*is\|how.*do\|can.*I\|difference.*between" decky.md

# Look for FAQ-style language in troubleshooting
grep -n "feature\|explain\|understand\|learn" decky.md
```

## Content Quality Standards

### FAQ Questions Should:
- ✅ Start with question words (What, How, Can, Why, When)
- ✅ Be generally applicable to most users
- ✅ Explain features or processes
- ✅ Be evergreen content (won't change frequently)
- ✅ Help users understand how things work

### Troubleshooting Items Should:
- ✅ Address specific problems users encounter
- ✅ Start with problem statements ("X doesn't work", "Getting error Y")
- ✅ Include step-by-step solutions
- ✅ Be actionable and solution-focused
- ✅ Include diagnostic steps
- ✅ Have clear success criteria

## Validation Checklist

After content reorganization, verify:
- [ ] **No orphaned content** - everything has a logical home
- [ ] **No duplication** - same information isn't on multiple pages  
- [ ] **Proper cross-linking** - related FAQ/Troubleshooting items reference each other
- [ ] **Logical user flow** - users can easily find what they need
- [ ] **Search functionality** - key terms return relevant results
- [ ] **Mobile experience** - content is accessible on all devices
- [ ] **URL consistency** - all internal links still work after reorganization

---

**Tomorrow's Workflow:**
1. Use this checklist to audit current content placement
2. Create specific migration list 
3. Begin with content moves (keeping backups)
4. Update cross-references
5. Test functionality
6. Proceed with styling standardization